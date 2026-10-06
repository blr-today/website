import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { handle, parsePrefs, parseEmail, parseToken } from "../netlify/functions/digest.mjs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const digest = JSON.parse(read("_data/digest.json"));
const UUID = "6f1c2e8a-3b4d-4e5f-8a9b-0c1d2e3f4a5b";
const ENV = {
  LISTMONK_URL: "https://lists.example", LISTMONK_API_USER: "web", LISTMONK_API_TOKEN: "t",
  LISTMONK_LIST_ID: "3", LISTMONK_LINK_TEMPLATE_ID: "7", SITE_URL: "https://blr.today",
};

function fakeListmonk(subscribers) {
  const calls = [];
  const fetchImpl = async (url, init) => {
    const { pathname, searchParams } = new URL(url);
    const body = init.body && JSON.parse(init.body);
    calls.push({ method: init.method, path: pathname, body });
    const reply = (data, status = 200) => new Response(JSON.stringify({ data }), { status });
    if (pathname === "/api/subscribers" && init.method === "GET")
      return reply({ results: subscribers.filter((s) => s.email.includes(searchParams.get("search"))) });
    const id = Number(pathname.split("/")[3]);
    if (init.method === "GET") {
      const sub = subscribers.find((s) => s.id === id);
      return sub ? reply(sub) : reply(null, 404);
    }
    return reply(true);
  };
  return { calls, fetchImpl };
}

const post = (action, body) =>
  new Request(`https://blr.today/api/digest/${action}`, { method: "POST", body: JSON.stringify(body) });

test("neighbourhood choices match the neighbourhood calendars", () => {
  const hoods = readdirSync(new URL("../cal/", import.meta.url))
    .map((f) => read(`cal/${f}`))
    .filter((page) => /^type: neighbourhood$/m.test(page))
    .flatMap((page) => JSON.parse(page.match(/^tags: '(.*)'$/m)[1]));
  const area = digest.groups.find((g) => g.id === "area").options.flatMap((o) => o.tags);
  assert.deepEqual([...area].sort(), [...hoods].sort());
});

test("choices are validated, deduped and never wins", () => {
  assert.deepEqual(parsePrefs({ always: ["free", "free", "pricey", "bogus"], never: ["pricey"] }),
    { always: { free: true }, never: { pricey: true } });
  assert.deepEqual(parsePrefs({ always: "free" }), { always: {}, never: {} });
  assert.equal(parseEmail(" A@B.co "), "a@b.co");
  assert.equal(parseEmail("a'@b.co"), null);
  assert.deepEqual(parseToken(`12.${UUID}`), { id: 12, uuid: UUID });
  assert.equal(parseToken(`12.${UUID}' or 1=1`), null);
});

test("a new address is created on the weekly list with its choices", async () => {
  const lm = fakeListmonk([]);
  const res = await handle(post("subscribe", { email: "new@x.in", always: ["indiranagar"] }), ENV, lm.fetchImpl);
  assert.equal(res.status, 200);
  const created = lm.calls.find((c) => c.method === "POST" && c.path === "/api/subscribers").body;
  assert.deepEqual(created.lists, [3]);
  assert.deepEqual(created.attribs, { digest: { always: { indiranagar: true }, never: {} } });
});

test("a confirmed address only gets a manage link, its choices stay", async () => {
  const sub = { id: 12, uuid: UUID, email: "old@x.in", status: "enabled", lists: [{ id: 3, subscription_status: "confirmed" }] };
  const lm = fakeListmonk([sub]);
  await handle(post("subscribe", { email: "old@x.in", never: ["free"] }), ENV, lm.fetchImpl);
  assert.equal(lm.calls.some((c) => c.method === "PATCH"), false);
  const tx = lm.calls.find((c) => c.path === "/api/tx").body;
  assert.equal(tx.data.manage_url, `https://blr.today/subscribe/#12.${UUID}`);
});

test("prefs need the matching uuid", async () => {
  const sub = { id: 12, uuid: UUID, email: "old@x.in", status: "enabled", lists: [], attribs: {} };
  const lm = fakeListmonk([sub]);
  const wrong = await handle(post("prefs", { token: `12.${UUID.replace("6", "7")}`, always: ["free"] }), ENV, lm.fetchImpl);
  assert.equal(wrong.status, 404);
  const ok = await handle(post("prefs", { token: `12.${UUID}`, always: ["free"] }), ENV, lm.fetchImpl);
  assert.equal(ok.status, 200);
  assert.deepEqual(lm.calls.at(-1), { method: "PATCH", path: "/api/subscribers/12", body: { attribs: { digest: { always: { free: true }, never: {} } } } });
});

test("the honeypot short-circuits without calling listmonk", async () => {
  const lm = fakeListmonk([]);
  const res = await handle(post("subscribe", { email: "bot@x.in", website: "spam" }), ENV, lm.fetchImpl);
  assert.equal(res.status, 200);
  assert.equal(lm.calls.length, 0);
});

test("an unconfirmed or unsubscribed address is reset, then updated once", async () => {
  const sub = { id: 12, uuid: UUID, email: "old@x.in", status: "enabled", lists: [{ id: 3, subscription_status: "unsubscribed" }] };
  const lm = fakeListmonk([sub]);
  await handle(post("subscribe", { email: "old@x.in", always: ["film"] }), ENV, lm.fetchImpl);
  const writes = lm.calls.filter((c) => c.method !== "GET").map((c) => `${c.method} ${c.path}`);
  assert.deepEqual(writes, ["PUT /api/subscribers/lists", "PATCH /api/subscribers/12"]);
  assert.equal(lm.calls[1].body.status, "unconfirmed");
});

test("subscribers outside the weekly list look like bad links", async () => {
  for (const status of [400, 403]) {
    const fetchImpl = async () => new Response(JSON.stringify({ message: "not found" }), { status });
    const res = await handle(post("prefs", { token: `1.${UUID}` }), ENV, fetchImpl);
    assert.equal(res.status, 404);
  }
});
