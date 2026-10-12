import { test } from "node:test";
import assert from "node:assert/strict";

const { describe } = await import("../js/tag-filter.js");
const none = { type: [], activity: [], location: [], price: [] };

test("activity chips read like event types", () => {
  const must = { ...none, activity: ["pottery", "kintsugi"], location: ["Indiranagar"] };
  assert.equal(describe({ shown: 3, total: 9, must, never: none }), "Showing 3 pottery or kintsugi events in Indiranagar, out of 9.");
});

test("never activity chips are left out by name", () => {
  const never = { ...none, activity: ["dj night"], type: ["Music"] };
  assert.equal(describe({ shown: 5, total: 9, must: none, never }), "Showing 5 of 9 events. Leaving out dj night and Music events.");
});
