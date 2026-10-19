import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import ICAL from "ical.js";

const site = new URL("../_site/", import.meta.url);
const read = (path) => readFileSync(new URL(path, site), "utf8");
const feeds = readdirSync(new URL("cal/", site)).filter((d) => existsSync(new URL(`cal/${d}/cal.ics`, site))).map((d) => `cal/${d}/cal.ics`);

test("calendar feeds are RFC 5545 text", () => {
  assert.ok(feeds.length > 0, "no feeds built");
  for (const feed of feeds) {
    const text = read(feed);
    assert.ok(text.endsWith("END:VCALENDAR\r\n") || text.endsWith("END:VCALENDAR"), `${feed} is cut short`);
    const lines = text.split("\r\n");
    lines.forEach((line, i) => {
      assert.ok(!line.includes("\n") && !line.includes("\r"), `${feed}:${i + 1} has a bare line break`);
      assert.ok(Buffer.byteLength(line) <= 75, `${feed}:${i + 1} is over 75 octets`);
    });
  }
});

test("every event has a unique id with its own page", () => {
  const ids = new Map();
  for (const feed of feeds) {
    const cal = new ICAL.Component(ICAL.parse(read(feed)));
    assert.equal(cal.getFirstPropertyValue("version"), "2.0", feed);
    assert.ok(cal.getFirstPropertyValue("prodid"), `${feed} has no PRODID`);
    const uids = new Set();
    for (const vevent of cal.getAllSubcomponents("vevent")) {
      const uid = vevent.getFirstPropertyValue("uid");
      const where = `${feed} ${uid}`;
      for (const prop of ["dtstamp", "dtstart", "summary", "url", "x-blr-type"]) assert.ok(vevent.getFirstPropertyValue(prop), `${where} has no ${prop}`);
      assert.match(uid, /^[a-z0-9_-]+(\.[a-z0-9_-]+)+@blr\.today$/, feed);
      assert.ok(!uids.has(uid), `${where} is repeated`);
      uids.add(uid);
      assert.match(vevent.getFirstPropertyValue("x-blr-type"), /^[A-Za-z]+$/, where);
      const event = new ICAL.Event(vevent);
      if (vevent.hasProperty("dtend")) assert.ok(event.endDate.compare(event.startDate) >= 0, `${where} ends before it starts`);
      const geo = vevent.getFirstPropertyValue("geo");
      if (geo) assert.ok(geo.length === 2 && Math.abs(geo[0]) <= 90 && Math.abs(geo[1]) <= 180, `${where} GEO ${geo}`);
      for (const tag of vevent.getAllProperties("categories").flatMap((p) => p.getValues())) assert.ok(tag.trim(), `${where} has an empty tag`);
      ids.set(uid.replace(/@blr\.today$/, ""), where);
    }
  }
  for (const [id, where] of ids) {
    assert.ok(existsSync(new URL(`event/${id}/index.html`, site)), `${where} has no event page`);
    assert.equal(JSON.parse(read(`event/${id}.json`)).id, id, where);
  }
});

test("listed event pages are in the sitemap with their JSON-LD", () => {
  const sitemap = new Set([...read("sitemap.xml").matchAll(/<loc>https?:\/\/[^/]+(\/event\/[^<]+)<\/loc>/g)].map((m) => m[1]));
  assert.ok(sitemap.size > 0, "no event pages in the sitemap");
  for (const dir of readdirSync(new URL("event/", site)).filter((f) => !f.endsWith(".json"))) {
    const html = read(`event/${dir}/index.html`);
    const event = JSON.parse(html.match(/<script type="application\/ld\+json" id="blr-event-data">(.*?)<\/script>/s)[1]);
    assert.ok(event.name && event.startDate, dir);
    assert.equal(sitemap.has(`/event/${dir}/`), !html.includes('name="robots" content="noindex'), `${dir} sitemap and noindex disagree`);
  }
});

test("the sitemap lists no noindex pages", () => {
  for (const [, path] of read("sitemap.xml").matchAll(/<loc>https?:\/\/[^/]+\/([^<]*)<\/loc>/g)) {
    const file = path === "" || path.endsWith("/") ? `${path}index.html` : path;
    if (!file.endsWith(".html")) continue;
    assert.ok(!read(file).includes('name="robots" content="noindex'), `${path} is noindex but in the sitemap`);
  }
});
