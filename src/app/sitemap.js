const BASE = 'https://ralph-portfolio.vercel.app';

export default function sitemap() {
  const now = new Date().toISOString();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
  ];
}
