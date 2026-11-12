import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

const site = new URL("../_site/event/", import.meta.url);
const read = (name) => readFileSync(new URL(name, site), "utf8");

// The first upcoming event page with an image stands in for the rest
function pageWithImage() {
  const today = new Date().toISOString().slice(0, 10);
  for (const file of readdirSync(site).filter((f) => f.endsWith(".json"))) {
    const { id, event } = JSON.parse(read(file));
    if ((event.endDate || event.startDate || "").slice(0, 10) >= today && [].concat(event.image || []).length) return { id, event };
  }
}

test("event pages carry social cards and a canonical link", () => {
  const { id } = pageWithImage();
  const html = read(`${id}/index.html`);
  assert.match(html, /<meta property="og:image" content="https:\/\/[^"]+"/);
  assert.match(html, /<meta property="og:title"/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  assert.equal((html.match(/<link rel="canonical"/g) || []).length, 1);
});
