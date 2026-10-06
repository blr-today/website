// Grafana Cloud only scrapes endpoints behind auth, so this wraps /metrics with bearer or basic auth
const digest = async (s) => new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)));

async function same(a, b) {
  const [x, y] = await Promise.all([digest(a), digest(b)]);
  return x.reduce((diff, byte, i) => diff | (byte ^ y[i]), 0) === 0;
}

export function presented(header) {
  const [scheme, value = ""] = (header || "").split(" ", 2);
  if (scheme.toLowerCase() === "bearer") return value;
  if (scheme.toLowerCase() !== "basic") return null;
  try {
    const decoded = atob(value);
    return decoded.slice(decoded.indexOf(":") + 1);
  } catch {
    return null;
  }
}

export default async (request) => {
  const token = Netlify.env.get("METRICS_TOKEN");
  const given = presented(request.headers.get("authorization"));
  if (!token || given === null || !(await same(given, token))) {
    return new Response("Unauthorized\n", {
      status: 401,
      headers: { "www-authenticate": 'Basic realm="metrics", charset="UTF-8"' },
    });
  }
  const res = await fetch(new URL("/metrics", request.url));
  return new Response(res.body, {
    status: res.status,
    headers: { "content-type": "text/plain; version=0.0.4; charset=utf-8", "cache-control": "no-store" },
  });
};

export const config = { path: ["/metrics/authenticated", "/grafana/metrics"] };
