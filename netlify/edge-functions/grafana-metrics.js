// Grafana Cloud only scrapes endpoints behind auth, so this wraps /metrics
export default async (request) => {
  const token = Netlify.env.get("METRICS_TOKEN");
  if (!token || request.headers.get("authorization") !== `Bearer ${token}`) {
    return new Response("Unauthorized\n", {
      status: 401,
      headers: { "www-authenticate": "Bearer" },
    });
  }
  const res = await fetch(new URL("/metrics", request.url));
  return new Response(res.body, {
    status: res.status,
    headers: { "content-type": "text/plain; version=0.0.4; charset=utf-8", "cache-control": "no-store" },
  });
};

export const config = { path: "/grafana/metrics" };
