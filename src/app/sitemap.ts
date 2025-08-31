import { MetadataRoute } from 'next';
import { locales } from '@/lib/getTranslations';
import { portfolioSlidesData as portfolioItems } from '@/content/portfolioSlidesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://koderi.netlify.app';
  const pages: MetadataRoute.Sitemap = [];

  // Головні сторінки для кожної локалі
  locales.forEach((locale) => {
    pages.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    });
  });

  // Сторінки портфоліо для кожної локалі
  locales.forEach((locale) => {
    portfolioItems.forEach((item) => {
      pages.push({
        url: `${baseUrl}/${locale}${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return pages;
}
