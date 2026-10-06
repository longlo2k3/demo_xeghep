import { SITE_DOMAIN, BRAND_NAME } from "./seo";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface RouteSchemaInput {
  name: string;
  description: string;
  priceFrom: number;
  origin: string;
  destination: string;
  path: string;
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
}

/**
 * Builds the master Organization and TaxiService Schema.org @graph definition
 * Accurately represents Lubi Vietnam (xeghephanoi.vn)
 */
export function buildGlobalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_DOMAIN}/#organization`,
        name: "Công ty Cổ phần Đầu tư Lubi Việt Nam",
        alternateName: BRAND_NAME,
        url: SITE_DOMAIN,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_DOMAIN}/images/logo-lubi.png`,
          width: 512,
          height: 512,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+84858911247",
            contactType: "customer service",
            areaServed: "VN",
            availableLanguage: ["Vietnamese"],
          },
        ],
      },
      {
        "@type": "TaxiService",
        "@id": `${SITE_DOMAIN}/#taxiservice`,
        name: "Dịch Vụ Xe Ghép Lubi Hà Nội",
        serviceType: "Dịch vụ xe ghép liên tỉnh & Taxi đón tiễn sân bay Nội Bài",
        provider: {
          "@id": `${SITE_DOMAIN}/#organization`,
        },
        areaServed: [
          { "@type": "City", name: "Hà Nội" },
          { "@type": "AdministrativeArea", name: "Ninh Bình" },
          { "@type": "AdministrativeArea", name: "Quảng Ninh" },
          { "@type": "AdministrativeArea", name: "Hải Phòng" },
          { "@type": "AdministrativeArea", name: "Thái Bình" },
          { "@type": "AdministrativeArea", name: "Hưng Yên" },
          { "@type": "AdministrativeArea", name: "Phú Thọ" },
          { "@type": "AdministrativeArea", name: "Bắc Ninh" },
        ],
        hoursAvailable: "Mo-Su 00:00-24:00",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tầng 2, Chung cư Xuân Mai Tower, Đường Tô Hiệu",
          addressLocality: "Quận Hà Đông",
          addressRegion: "Hà Nội",
          addressCountry: "VN",
        },
        telephone: "+84858911247",
        priceRange: "110.000đ - 1.200.000đ",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_DOMAIN}/#website`,
        url: SITE_DOMAIN,
        name: BRAND_NAME,
        publisher: {
          "@id": `${SITE_DOMAIN}/#organization`,
        },
        inLanguage: "vi-VN",
      },
    ],
  };
}

/**
 * Builds Schema.org BreadcrumbList
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_DOMAIN}${item.path}`,
    })),
  };
}

/**
 * Builds Route / Service Schema with truthful Offer pricing
 */
export function buildRouteServiceSchema({
  name,
  description,
  priceFrom,
  origin,
  destination,
  path,
}: RouteSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_DOMAIN}${path}#service`,
        name,
        description,
        serviceType: "Xe ghép liên tỉnh",
        provider: {
          "@id": `${SITE_DOMAIN}/#organization`,
        },
        areaServed: [
          { "@type": "Place", name: origin },
          { "@type": "Place", name: destination },
        ],
        offers: {
          "@type": "Offer",
          price: priceFrom.toString(),
          priceCurrency: "VND",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_DOMAIN}${path}`,
        },
      },
    ],
  };
}

/**
 * Builds Schema.org Article for Blog / News post
 */
export function buildArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  authorName = BRAND_NAME,
  imageUrl,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_DOMAIN}${path}#article`,
        headline: title,
        description,
        inLanguage: "vi-VN",
        mainEntityOfPage: `${SITE_DOMAIN}${path}`,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
          "@type": "Organization",
          name: authorName,
          url: SITE_DOMAIN,
        },
        publisher: {
          "@id": `${SITE_DOMAIN}/#organization`,
        },
        image: imageUrl || `${SITE_DOMAIN}/images/og-xeghep-vinfast.webp`,
      },
    ],
  };
}
