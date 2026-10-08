import type { MetadataRoute } from "next";
import { SITE_DOMAIN } from "@/lib/seo";
import { POPULAR_ROUTES } from "@/data/routes";
import { ARTICLES } from "@/data/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Static indexable core pages according to spec_v2.md Section 1
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_DOMAIN}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_DOMAIN}/gioi-thieu`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_DOMAIN}/tuyen-lien-tinh`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_DOMAIN}/tin-tuc`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_DOMAIN}/lien-he`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_DOMAIN}/chinh-sach/thanh-toan`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_DOMAIN}/chinh-sach/dam-bao`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_DOMAIN}/chinh-sach/bao-mat`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // 9 Interprovincial Routes: /tuyen-lien-tinh/[slug]
  const routePages: MetadataRoute.Sitemap = POPULAR_ROUTES.map((route) => ({
    url: `${SITE_DOMAIN}/tuyen-lien-tinh/${route.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic article pages: /tin-tuc/[slug]
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_DOMAIN}/tin-tuc/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...routePages, ...articlePages];
}
