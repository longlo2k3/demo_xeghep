import type { MetadataRoute } from "next";
import { SITE_DOMAIN } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dat-xe/thanh-cong"], // Thank you page is excluded from indexing
    },
    sitemap: `${SITE_DOMAIN}/sitemap.xml`,
  };
}
