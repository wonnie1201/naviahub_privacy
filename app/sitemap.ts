export async function GET() {
  const baseUrl = "https://naviahub.dev";

  const staticPaths = [
    "",
    "/marriageguy",
    "/marriageguy/test/1",
    "/marriageguy/test/2",
    "/marriageguy/test/3",
    "/marriageguy/result",
    "/relatableguy",
    "/relatableguy/test/1",
    "/relatableguy/test/2",
    "/relatableguy/test/3",
    "/relatableguy/result",
    "/relatablegirl",
    "/relatablegirl/test/1",
    "/relatablegirl/test/2",
    "/relatablegirl/test/3",
    "/relatablegirl/result",
  ];

  const urls = staticPaths.map(
    (path) => `\n    <url>\n      <loc>${baseUrl}${path}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n    </url>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n    ${urls}\n  </urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 