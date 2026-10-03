import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("every coloured tag has a tooltip description", () => {
  const html = read("_site/index.html");
  const info = JSON.parse(html.match(/id="blr-tag-info">(.*?)<\/script>/s)[1]);
  const described = new Set(info.filter((t) => t.description).map((t) => t.id));
  const areas = JSON.parse(html.match(/var locationTags = (\[.*?\])/)[1]);
  const prices = read("js/calendar-render.js").match(/PRICE_TAG = \/\^\((.*?)\)\$\//)[1].split("|");
  for (const tag of [...areas, ...prices]) assert.ok(described.has(tag), `${tag} missing from _data/tags.yml`);
});
