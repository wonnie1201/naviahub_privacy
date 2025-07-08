import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://naviahub.dev/', changeFrequency: 'weekly', priority: 1 },
    { url: 'https://naviahub.dev/marriageguy', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/marriageguy/test/1', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/marriageguy/test/2', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/marriageguy/test/3', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/marriageguy/result', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatableguy', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatableguy/test/1', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatableguy/test/2', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatableguy/test/3', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatableguy/result', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatablegirl', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatablegirl/test/1', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatablegirl/test/2', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatablegirl/test/3', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://naviahub.dev/relatablegirl/result', changeFrequency: 'weekly', priority: 0.8 },
  ];
} 