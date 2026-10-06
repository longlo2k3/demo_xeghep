import { describe, it, expect } from "vitest";
import { POPULAR_ROUTES } from "../src/data/routes";
import { ARTICLES } from "../src/data/articles";
import { constructMetadata, SITE_DOMAIN, BRAND_NAME } from "../src/lib/seo";

describe("All Routes and Articles SEO Metadata Consistency", () => {
  it("Every route in POPULAR_ROUTES produces a valid self-referencing canonical URL", () => {
    for (const route of POPULAR_ROUTES) {
      const meta = constructMetadata({
        title: `${route.name} - Giá Rẻ`,
        description: route.description,
        path: `/${route.slug}`,
      });

      expect(meta.alternates?.canonical).toBe(`${SITE_DOMAIN}/${route.slug}`);
      expect(meta.openGraph?.url).toBe(`${SITE_DOMAIN}/${route.slug}`);
      expect(meta.title).toBe(`${route.name} - Giá Rẻ`);
      expect(meta.openGraph?.title).toContain(BRAND_NAME);
    }
  });

  it("Every article in ARTICLES produces valid article Open Graph metadata", () => {
    for (const article of ARTICLES) {
      const meta = constructMetadata({
        title: article.title,
        description: article.excerpt,
        path: `/tin-tuc/${article.slug}`,
        type: "article",
        publishedTime: article.publishedAt,
        author: article.author,
      });

      expect(meta.alternates?.canonical).toBe(`${SITE_DOMAIN}/tin-tuc/${article.slug}`);
      expect(meta.openGraph?.type).toBe("article");
      expect((meta.openGraph as any)?.publishedTime).toBe(article.publishedAt);
    }
  });
});
