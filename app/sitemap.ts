import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Site de bio de uma página só: o sitemap lista apenas a raiz de links.pedrovileira.com.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteConfig.url}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
