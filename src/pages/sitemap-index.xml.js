
export function GET() {
  const lastMod = new Date().toISOString().split('T')[0];
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://christianjtr.github.io/</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://christianjtr.github.io/en/</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://christianjtr.github.io/es/</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://christianjtr.github.io/fr/</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>
</sitemapindex>`;
  return new Response(sitemapXML, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
