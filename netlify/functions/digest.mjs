// Weekly digest sign-up and preferences, stored as attributes on listmonk subscribers
import digest from "../../_data/digest.json" with { type: "json" };

const OPTIONS = new Set(digest.groups.flatMap((g) => g.options.map((o) => o.id)));
const EMAIL = /^[^\s@"'<>\\]{1,64}@[a-z0-9.-]{1,253}\.[a-z]{2,}$/i;
const TOKEN = /^(\d{1,10})\.([0-9a-f-]{36})$/;
const SENT = "If that address can receive mail, a link is on its way.";

export function parsePrefs(body) {
  const pick = (list) => [...new Set(Array.isArray(list) ? list : [])].filter((id) => OPTIONS.has(id)).sort();
  const never = pick(body?.never);
  const always = pick(body?.always).filter((id) => !never.includes(id));
  const flags = (ids) => Object.fromEntries(ids.map((id) => [id, true]));
  return { always: flags(always), never: flags(never) };
}

export function parseEmail(value) {
  const email = String(value ?? "").trim().toLowerCase();
  return EMAIL.test(email) ? email : null;
}

export function parseToken(value) {
  const m = TOKEN.exec(String(value ?? "").trim());
  return m ? { id: Number(m[1]), uuid: m[2] } : null;
}

export const manageUrl = (site, sub) => `${site}/subscribe/#${sub.id}.${sub.uuid}`;

function listmonk(env, fetchImpl) {
  const auth = `token ${env.LISTMONK_API_USER}:${env.LISTMONK_API_TOKEN}`;
  return async (method, path, body) => {
    const res = await fetchImpl(new URL(path, env.LISTMONK_URL), {
      method,
      headers: { authorization: auth, "content-type": "application/json" },
      body: body && JSON.stringify(body),
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`listmonk ${method} ${path}: ${res.status}`);
    return (await res.json()).data;
  };
}

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

async function byEmail(api, email) {
  const found = await api("GET", `/api/subscribers?per_page=20&search=${encodeURIComponent(email)}`);
  return found?.results?.find((s) => s.email.toLowerCase() === email) ?? null;
}

async function byToken(api, token) {
  const sub = token && (await api("GET", `/api/subscribers/${token.id}`));
  return sub && sub.uuid === token.uuid && sub.status !== "blocklisted" ? sub : null;
}

const weekly = (env, sub) => sub.lists?.find((l) => l.id === Number(env.LISTMONK_LIST_ID));

async function sendLink(api, env, sub) {
  await api("POST", "/api/tx", {
    subscriber_id: sub.id,
    template_id: Number(env.LISTMONK_LINK_TEMPLATE_ID),
    data: { manage_url: manageUrl(env.SITE_URL, sub) },
  });
}

async function subscribe(api, env, body) {
  const email = parseEmail(body.email);
  if (!email) return json(400, { error: "Please enter a valid email address." });
  const attribs = { digest: parsePrefs(body) };
  const sub = await byEmail(api, email);
  if (!sub) {
    await api("POST", "/api/subscribers", {
      email, name: email.split("@")[0], status: "enabled", lists: [Number(env.LISTMONK_LIST_ID)], attribs,
    });
  } else if (sub.status === "blocklisted") {
    // Say the same thing either way, so the form can't be used to probe addresses
  } else if (weekly(env, sub)?.subscription_status === "confirmed") {
    await sendLink(api, env, sub);
  } else {
    await api("PATCH", `/api/subscribers/${sub.id}`, { attribs, lists: [Number(env.LISTMONK_LIST_ID)] });
    await api("POST", `/api/subscribers/${sub.id}/optin`, {});
  }
  return json(200, { message: `${SENT} Confirm it to start getting the weekly email.` });
}

async function link(api, env, body) {
  const email = parseEmail(body.email);
  if (!email) return json(400, { error: "Please enter a valid email address." });
  const sub = await byEmail(api, email);
  if (sub && weekly(env, sub)?.subscription_status === "confirmed") await sendLink(api, env, sub);
  return json(200, { message: SENT });
}

async function prefs(api, env, body, method) {
  const sub = await byToken(api, parseToken(body.token));
  if (!sub) return json(404, { error: "This link has expired. Ask for a new one below." });
  if (method === "POST") {
    await api("PATCH", `/api/subscribers/${sub.id}`, { attribs: { digest: parsePrefs(body) } });
    return json(200, { message: "Saved. The next weekly email will use these choices." });
  }
  const saved = sub.attribs?.digest ?? {};
  return json(200, {
    email: sub.email,
    always: Object.keys(saved.always ?? {}),
    never: Object.keys(saved.never ?? {}),
    subscribed: weekly(env, sub)?.subscription_status === "confirmed",
  });
}

export async function handle(request, env, fetchImpl = fetch) {
  const api = listmonk(env, fetchImpl);
  const action = new URL(request.url).pathname.split("/").pop();
  let body = {};
  if (request.method === "POST") {
    try {
      body = await request.json();
    } catch {
      return json(400, { error: "Bad request." });
    }
    // Bots fill every field; people never see this one
    if (body.website) return json(200, { message: SENT });
  } else {
    body = { token: new URL(request.url).searchParams.get("token") };
  }
  try {
    if (action === "subscribe" && request.method === "POST") return await subscribe(api, env, body);
    if (action === "link" && request.method === "POST") return await link(api, env, body);
    if (action === "prefs") return await prefs(api, env, body, request.method);
  } catch (err) {
    console.error(err);
    return json(502, { error: "Something went wrong on our side. Please try again later." });
  }
  return json(405, { error: "Not allowed." });
}

const ENV = ["LISTMONK_URL", "LISTMONK_API_USER", "LISTMONK_API_TOKEN", "LISTMONK_LIST_ID", "LISTMONK_LINK_TEMPLATE_ID"];

export default (request) =>
  handle(request, { ...Object.fromEntries(ENV.map((k) => [k, Netlify.env.get(k)])), SITE_URL: Netlify.env.get("URL") });

export const config = {
  path: ["/api/digest/subscribe", "/api/digest/link", "/api/digest/prefs"],
  rateLimit: { windowLimit: 20, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
