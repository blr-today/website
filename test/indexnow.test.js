import { test } from "node:test";
import assert from "node:assert/strict";
import { urlsFrom } from "../plugins/indexnow/index.js";

test("indexnow reads every location in the sitemap", () => {
  const xml = `<urlset><url><loc>https://blr.today/</loc></url><url><loc>\n https://blr.today/cal/comedy/ </loc><lastmod>x</lastmod></url></urlset>`;
  assert.deepEqual(urlsFrom(xml), ["https://blr.today/", "https://blr.today/cal/comedy/"]);
});
