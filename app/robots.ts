export async function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: https://naviahub.dev/sitemap.xml\n`;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
} 