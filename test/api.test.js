import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../_site/${path}`, import.meta.url), "utf8");

test("api/events.json is valid JSON listing every event", () => {
  const events = JSON.parse(read("api/events.json"));
  assert.ok(Array.isArray(events));

  const total = Number(read("metrics").match(/^total_events_count (\d+)$/m)?.[1]);
  assert.ok(total > 0, "metrics has no total_events_count");
  assert.equal(events.length, total);

  for (const event of events) {
    assert.equal(typeof event, "object");
    assert.ok(event.name, `event without name: ${JSON.stringify(event)}`);
    assert.ok(event.startDate, `event without startDate: ${event.name}`);
  }
});
