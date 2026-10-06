// The scheduler's public reports, read by /follow/ and /metrics; a failed fetch only drops those numbers
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "https://scheduler.blr.today";
const DIR = "_data/scheduler";

mkdirSync(DIR, { recursive: true });
for (const platform of ["bluesky", "fedi"]) {
  try {
    const res = await fetch(`${BASE}/${platform}.json`, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const report = await res.json();
    // Jekyll reads JSON as YAML, which rejects lone surrogate escapes
    const clean = (k, v) => (typeof v === "string" ? v.toWellFormed() : v);
    writeFileSync(`${DIR}/${platform}.json`, JSON.stringify(report, clean));
    console.log(`${platform} report from ${report.generated}`);
  } catch (e) {
    console.warn(`Skipping the ${platform} report: ${e.message}`);
  }
}
