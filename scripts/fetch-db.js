import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ARTIFACTS_URL =
  "https://api.github.com/repos/blr-today/ingest/actions/artifacts?name=events-db&per_page=20";
const RELEASE_URL =
  "https://github.com/blr-today/dataset/releases/latest/download/events.db";
const OUT = "events.db";

async function get(url, headers = {}) {
  const res = await fetch(url, { headers, redirect: "manual" });
  if (res.status >= 300 && res.status < 400) {
    // Blob storage rejects the GitHub token, so follow redirects without it
    return get(res.headers.get("location"));
  }
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res;
}

async function fromArtifact(token) {
  const headers = {
    accept: "application/vnd.github+json",
    authorization: `Bearer ${token}`,
    "x-github-api-version": "2022-11-28",
  };
  const { artifacts } = await (await get(ARTIFACTS_URL, headers)).json();
  const latest = artifacts
    .filter((a) => !a.expired && a.workflow_run?.head_branch === "main")
    .sort((a, b) => b.created_at.localeCompare(a.created_at))[0];
  if (!latest) throw new Error("no unexpired events-db artifact on main");

  const zip = Buffer.from(
    await (await get(latest.archive_download_url, headers)).arrayBuffer(),
  );
  const dir = mkdtempSync(join(tmpdir(), "events-db-"));
  try {
    writeFileSync(join(dir, "a.zip"), zip);
    execFileSync("unzip", ["-o", "-q", join(dir, "a.zip"), OUT, "-d", "."]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  console.log(
    `events.db from artifact ${latest.id}, run ${latest.workflow_run.id}, created ${latest.created_at}`,
  );
}

async function fromRelease() {
  const res = await get(RELEASE_URL);
  writeFileSync(OUT, Buffer.from(await res.arrayBuffer()));
  console.log("events.db from latest dataset release");
}

const token = process.env.GITHUB_TOKEN;
try {
  if (!token) throw new Error("GITHUB_TOKEN not set");
  await fromArtifact(token);
} catch (e) {
  console.warn(`Artifact fetch failed (${e.message}), using release`);
  await fromRelease();
}
