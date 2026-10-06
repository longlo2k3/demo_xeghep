import { describe, it, expect } from "vitest";
import { POPULAR_ROUTES } from "../src/data/routes";
import { AIRPORT_DISTRICT_PRICING } from "../src/data/airport-pricing";
import { DISTANCE_RATES } from "../src/data/long-distance-pricing";

describe("Data Layer & Pricing Rules", () => {
  it("POPULAR_ROUTES contains all 8 highlighted routes from Duan.md", () => {
    const slugs = POPULAR_ROUTES.map((r) => r.slug);
    expect(slugs).toContain("xe-ghep-ninh-binh");
    expect(slugs).toContain("xe-ghep-noi-bai");
    expect(slugs).toContain("xe-ghep-quang-ninh");
    expect(slugs).toContain("xe-ghep-thai-binh");
    expect(slugs).toContain("xe-ghep-hai-phong");
    expect(slugs).toContain("xe-ghep-hung-yen");
    expect(slugs).toContain("xe-ghep-phu-tho");
    expect(slugs).toContain("xe-ghep-bac-ninh");
  });

  it("Each route has FAQs and positive pricing", () => {
    for (const route of POPULAR_ROUTES) {
      expect(route.priceFrom).toBeGreaterThan(0);
      expect(route.faqs.length).toBeGreaterThan(0);
      expect(route.pickups.length).toBeGreaterThan(0);
      expect(route.dropoffs.length).toBeGreaterThan(0);
    }
  });

  it("AIRPORT_DISTRICT_PRICING contains standard Hanoi districts", () => {
    const districts = AIRPORT_DISTRICT_PRICING.map((d) => d.district);
    expect(districts).toContain("Quận Cầu Giấy");
    expect(districts).toContain("Quận Hoàn Kiếm");
    expect(districts).toContain("Quận Hà Đông");

    const cauGiay = AIRPORT_DISTRICT_PRICING.find((d) => d.district === "Quận Cầu Giấy");
    expect(cauGiay?.fromHanoiToAirport.sedan5Seats).toBe(190000);
    expect(cauGiay?.roundTrip.sedan5Seats).toBe(390000);
  });

  it("DISTANCE_RATES handles tiered distances", () => {
    expect(DISTANCE_RATES.length).toBe(4);
    expect(DISTANCE_RATES[0].sedan5Seats).toBe(11000);
  });
});
