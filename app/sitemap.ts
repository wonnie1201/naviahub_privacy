
export const runtime = "edge";

export async function GET() {
  const routes = [
    "", // 홈
    "marriageguy",
    "marriageguy/test/1",
    "marriageguy/test/2",
    "marriageguy/test/3",
    "marriageguy/result",

    "relatableguy",
    "relatableguy/test/1",
    "relatableguy/test/2",
    "relatableguy/test/3",
    "relatableguy/result",


    "relatablegirl",
    "relatablegirl/test/1",
    "relatablegirl/test/2",
    "relatablegirl/test/3",
    "relatablegirl/result",
  ];
  const baseUrl = "https://naviahub.dev/";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
      </url>
    `
      )
      .join("")}
  </urlset>`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 