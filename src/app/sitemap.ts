
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-production-url.com';

  return [
    {
      url: baseUrl,
      lastModified: '2024-01-01',
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
