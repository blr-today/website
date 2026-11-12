import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// tags.js reads the activity list from the page, so stub it before loading
const activities = ["OUTDOORS", "OUTDOORS/TREK", "OUTDOORS/NATURE-WALK", "FITNESS", "SHOW", "SHOW/STANDUP"]
globalThis.document = { getElementById: () => ({ textContent: JSON.stringify(activities.map((id) => ({ id, kind: "activity" }))) }) }
const { obvious, shownTags, IMPLIED } = await import("../js/tags.js")

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("every coloured tag has a tooltip description", () => {
  const html = read("_site/index.html");
  const info = JSON.parse(html.match(/id="blr-tag-info">(.*?)<\/script>/s)[1]);
  const described = new Set(info.filter((t) => t.description).map((t) => t.id));
  const areas = JSON.parse(html.match(/var locationTags = (\[.*?\])/)[1]);
  const prices = read("js/tags.js").match(/PRICE_TAG = \/\^\((.*?)\)\$\//)[1].split("|");
  for (const tag of [...areas, ...prices]) assert.ok(described.has(tag), `${tag} missing from _data/tags.yml`);
});

test('a tag spelled out in the title is obvious', () => {
  assert.ok(obvious('HERITAGE-WALK', 'Fraser town heritage walk.'))
  assert.ok(obvious('BIRDING', 'Third Sunday Bird Walk - Turahalli'))
  assert.ok(obvious('POTTERY', 'Pottery workshop'))
  assert.ok(!obvious('HERITAGE-WALK', 'KR Market Trail'))
  assert.ok(!obvious('ART', 'Sunday market'))
})

test('rows drop tags another tag implies, and the page tags', () => {
  const ids = (keywords, page = [], title = 'x') => shownTags(keywords, ['CBD'], page, null, title).map(t => t.id)
  assert.deepEqual(ids(['OUTDOORS/TREK', 'FITNESS', 'OUTDOORS/NATURE-WALK']), ['OUTDOORS', 'OUTDOORS/TREK'])
  assert.deepEqual(ids(['FREE', 'CBD', 'SHOW/STANDUP'], ['CBD', 'FREE']), ['SHOW', 'SHOW/STANDUP'])
  assert.deepEqual(ids(['FREE', 'SHOW/STANDUP', 'OUTDOORS'], ['SHOW/STANDUP', 'SHOW/IMPROV']), ['FREE', 'OUTDOORS'])
  for (const [tag, implied] of Object.entries(IMPLIED)) assert.ok(!implied.includes(tag), tag)
})
