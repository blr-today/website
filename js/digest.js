// Same rule as the scheduler's weekly email: Never wins, then curated or Always gets an event in
const WEEK = 7 * 24 * 3600 * 1000;

export function matches(event, options) {
  const keywords = new Set(event.keywords || []);
  return options
    .filter((o) => (o.tags || []).some((t) => keywords.has(t)) || (o.types || []).includes(event["@type"]))
    .map((o) => o.id);
}

const anyOf = (tags) => (event) => (event.keywords || []).some((k) => tags.includes(k));

export function week(events, rules, now = Date.now()) {
  const unwanted = anyOf(rules.unwanted);
  const first = new Map();
  for (const e of events) {
    const start = Date.parse(e.startDate);
    if (!(start >= now && start < now + WEEK) || String(e.eventStatus).endsWith("EventCancelled") || unwanted(e)) continue;
    if (!first.has(e.url) || start < Date.parse(first.get(e.url).startDate)) first.set(e.url, e);
  }
  const curated = (e) => anyOf(rules.curated)(e) && !anyOf(rules.curatedExclude)(e);
  return [...first.values()]
    .sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate))
    .map((e) => ({ event: e, keys: matches(e, rules.options), curated: curated(e) }));
}

export function picked(entries, always, never) {
  return entries.filter(({ keys, curated }) => !keys.some((k) => never.has(k)) && (curated || keys.some((k) => always.has(k))));
}

export function counts(entries) {
  const out = {};
  for (const { keys } of entries) for (const k of keys) out[k] = (out[k] || 0) + 1;
  return out;
}
