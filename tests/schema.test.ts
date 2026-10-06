import { describe, it, expect } from "vitest";
import {
  buildGlobalBusinessSchema,
  buildBreadcrumbSchema,
  buildRouteServiceSchema,
  buildArticleSchema,
} from "../src/lib/schema";
import { SITE_DOMAIN, BRAND_NAME } from "../src/lib/seo";

describe("Schema.org JSON-LD Builders", () => {
  it("buildGlobalBusinessSchema generates valid @graph with Organization, TaxiService, and WebSite", () => {
    const schema = buildGlobalBusinessSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(Array.isArray(schema["@graph"])).toBe(true);

    const graph = schema["@graph"];
    const org = graph.find((item) => item["@type"] === "Organization");
    const taxiService = graph.find((item) => item["@type"] === "TaxiService");
    const website = graph.find((item) => item["@type"] === "WebSite");

    expect(org).toBeDefined();
    expect(org?.name).toContain("Lubi");
    expect(taxiService).toBeDefined();
    expect(taxiService?.telephone).toBe("+84858911247");
    expect(website).toBeDefined();
    expect(website?.url).toBe(SITE_DOMAIN);
  });

  it("buildBreadcrumbSchema creates valid BreadcrumbList", () => {
    const breadcrumbs = buildBreadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Dịch vụ xe ghép", path: "/dich-vu-xe-ghep" },
      { name: "Ninh Bình", path: "/xe-ghep-ninh-binh" },
    ]);

    expect(breadcrumbs["@type"]).toBe("BreadcrumbList");
    expect(breadcrumbs.itemListElement).toHaveLength(3);
    expect(breadcrumbs.itemListElement[0].position).toBe(1);
    expect(breadcrumbs.itemListElement[2].item).toBe(`${SITE_DOMAIN}/xe-ghep-ninh-binh`);
  });

  it("buildRouteServiceSchema outputs honest price Offer matching visible text", () => {
    const service = buildRouteServiceSchema({
      name: "Xe Ghép Hà Nội - Ninh Bình",
      description: "Xe ghép đón trả tận nhà",
      priceFrom: 300000,
      origin: "Hà Nội",
      destination: "Ninh Bình",
      path: "/xe-ghep-ninh-binh",
    });

    const s = service["@graph"][0];
    expect(s["@type"]).toBe("Service");
    expect(s.offers.price).toBe("300000");
    expect(s.offers.priceCurrency).toBe("VND");
  });

  it("buildArticleSchema sets valid Article metadata", () => {
    const article = buildArticleSchema({
      title: "Kinh nghiệm đặt xe",
      description: "Mô tả bài viết",
      path: "/tin-tuc/kinh-nghiem-dat-xe",
      datePublished: "2026-03-20T10:00:00+07:00",
    });

    const a = article["@graph"][0];
    expect(a["@type"]).toBe("Article");
    expect(a.headline).toBe("Kinh nghiệm đặt xe");
    expect(a.inLanguage).toBe("vi-VN");
  });
});
