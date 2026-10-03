import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("netlify.toml remote_images matches _data/image_cdn.yml", () => {
  const prefixes = read("_data/image_cdn.yml").match(/^- .+$/gm).map((l) => l.slice(2).trim());
  const block = read("netlify.toml").match(/remote_images = \[([\s\S]*?)\]/)?.[1] ?? "";
  const patterns = [...block.matchAll(/'([^']+)'/g)].map((m) => m[1].replaceAll("\\.", ".").replace(/\.\*$/, ""));
  assert.ok(prefixes.length > 0, "no prefixes in _data/image_cdn.yml");
  assert.deepEqual(patterns, prefixes);
});
