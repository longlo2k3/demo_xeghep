import type { MetadataRoute } from "next";
import { SITE_DOMAIN } from "@/lib/seo";
import { POPULAR_ROUTES } from "@/data/routes";
import { ARTICLES } from "@/data/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Static indexable core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_DOMAIN}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_DOMAIN}/dat-xe`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_DOMAIN}/dich-vu-xe-ghep`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_DOMAIN}/taxi-dua-don-san-bay-noi-bai`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_DOMAIN}/taxi-duong-dai`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_DOMAIN}/bang-gia`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_DOMAIN}/dang-ky-doi-tac`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_DOMAIN}/tin-tuc`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_DOMAIN}/gioi-thieu`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_DOMAIN}/lien-he`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic route pages
  const routePages: MetadataRoute.Sitemap = POPULAR_ROUTES.map((route) => ({
    url: `${SITE_DOMAIN}/${route.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic article pages
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_DOMAIN}/tin-tuc/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...routePages, ...articlePages];
}
