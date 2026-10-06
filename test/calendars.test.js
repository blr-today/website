import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

const dir = new URL("../cal/", import.meta.url);

test("every calendar opens with an intro blockquote", () => {
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".md"))) {
    const body = readFileSync(new URL(file, dir), "utf8").split(/^---\s*$/m).slice(2).join("---");
    const first = body.split("\n").find((line) => line.trim());
    assert.match(first ?? "", /^> \S/, `${file} has no intro blockquote`);
  }
});

test("social handles point at blr.today accounts", () => {
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".md"))) {
    const text = readFileSync(new URL(file, dir), "utf8");
    for (const [, key, value] of text.matchAll(/^(atproto|fedi): (.*)$/gm)) {
      const pattern = key === "atproto" ? /^[a-z]+\.blr\.today$/ : /^[a-z]+@fedi\.blr\.today$/;
      assert.match(value, pattern, `${file} ${key}`);
    }
  }
});
