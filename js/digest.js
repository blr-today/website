// Same rule as the scheduler's email: Never wins, then curated or Always gets an event in
const HOUR = 3600e3, DAY = 24 * HOUR, IST = 5.5 * HOUR;

export function matches(event, options) {
  const keywords = new Set(event.keywords || []);
  return options
    .filter((o) => (o.tags || []).some((t) => keywords.has(t)) || (o.types || []).includes(event["@type"]))
    .map((o) => o.id);
}

const anyOf = (tags) => (event) => (event.keywords || []).some((k) => tags.includes(k));

export function windows(now = Date.now()) {
  const midnight = now - ((now + IST) % DAY);
  const dow = new Date(now + IST).getUTCDay();
  const friday = midnight + (5 - dow) * DAY + 17 * HOUR;
  if (dow >= 1 && dow <= 5 && now < friday) {
    return { weekdays: [now, friday], weekend: [friday, friday + 2 * DAY + 7 * HOUR] };
  }
  const monday = midnight + ((8 - dow) % 7 || 7) * DAY;
  return { weekend: [now, monday], weekdays: [monday, monday + 4 * DAY + 17 * HOUR] };
}

export function week(events, rules, start = Date.now(), end = start + 7 * DAY) {
  const unwanted = anyOf(rules.unwanted);
  const first = new Map();
  for (const e of events) {
    const at = Date.parse(e.startDate);
    if (!(at >= start && at < end) || String(e.eventStatus).endsWith("EventCancelled") || unwanted(e)) continue;
    if (!first.has(e.url) || at < Date.parse(first.get(e.url).startDate)) first.set(e.url, e);
  }
  const curated = (e) => anyOf(rules.curated)(e) && !anyOf(rules.curatedExclude)(e);
  return [...first.values()]
    .sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate))
    .map((e) => ({ event: e, at: Date.parse(e.startDate), keys: matches(e, rules.options), curated: curated(e) }));
}

export function picked(entries, always, never) {
  return entries.filter(({ keys, curated }) => !keys.some((k) => never.has(k)) && (curated || keys.some((k) => always.has(k))));
}

export function counts(entries) {
  const out = {};
  for (const { keys } of entries) for (const k of keys) out[k] = (out[k] || 0) + 1;
  return out;
}

export function deltas(entries, always, never, id) {
  const base = picked(entries, always, never).length;
  const as = (state) => {
    const a = new Set(always), n = new Set(never);
    a.delete(id), n.delete(id);
    if (state !== "curated") (state === "always" ? a : n).add(id);
    return picked(entries, a, n).length - base;
  };
  return { always: as("always"), curated: as("curated"), never: as("never") };
}

const list = (items, word) => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} ${word} ${items.at(-1)}`);

export function describe(shown, total, always, never) {
  const plus = always.length ? `, plus every ${list(always, "and")} event` : "";
  const lead = `Showing ${shown} of ${total} events: the curated ones${plus}.`;
  return never.length ? `${lead} Leaving out ${list(never, "and")} events.` : lead;
}
