export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://ralph-portfolio.vercel.app/sitemap.xml',
    host: 'https://ralph-portfolio.vercel.app',
  };
}
