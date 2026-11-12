import { readFile, writeFile } from "node:fs/promises";

// Tells Bing and the other IndexNow engines which pages this deploy touched
const ENDPOINT = "https://api.indexnow.org/indexnow";
const LIMIT = 10000;

export function urlsFrom(sitemap) {
  return [...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]).slice(0, LIMIT);
}

function settings() {
  const key = process.env.INDEXNOW_KEY || "";
  const site = process.env.URL || "";
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key) || !site.startsWith("https://")) return null;
  return { key, host: new URL(site).host, keyLocation: `${site}/${key}.txt` };
}

export async function onPostBuild({ constants }) {
  const s = settings();
  if (s) await writeFile(`${constants.PUBLISH_DIR}/${s.key}.txt`, s.key);
}

export async function onSuccess({ constants, utils }) {
  const s = settings();
  if (!s) return utils.status.show({ title: "IndexNow skipped", summary: "Set INDEXNOW_KEY to submit URLs" });
  if (process.env.CONTEXT !== "production") return;
  const urlList = urlsFrom(await readFile(`${constants.PUBLISH_DIR}/sitemap.xml`, "utf8"));
  const body = JSON.stringify({ host: s.host, key: s.key, keyLocation: s.keyLocation, urlList });
  try {
    const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body });
    utils.status.show({ title: `IndexNow ${res.status}`, summary: `${urlList.length} URLs from the sitemap submitted` });
  } catch (err) {
    utils.status.show({ title: "IndexNow failed", summary: String(err) });
  }
}
