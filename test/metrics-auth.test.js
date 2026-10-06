import { test } from "node:test";
import assert from "node:assert/strict";
import { presented } from "../netlify/edge-functions/grafana-metrics.js";

test("metrics auth accepts bearer and basic credentials", () => {
  assert.equal(presented("Bearer abc"), "abc");
  assert.equal(presented(`Basic ${btoa("grafana:abc")}`), "abc");
  assert.equal(presented(`basic ${btoa(":a:b")}`), "a:b");
  assert.equal(presented("Basic !!"), null);
  assert.equal(presented("Digest x"), null);
  assert.equal(presented(null), null);
});
