import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildGlobalBusinessSchema } from "@/lib/schema";
import { SITE_DOMAIN, BRAND_NAME } from "@/lib/seo";

const fontSans = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#008542",
};

/**
 * Root Layout Metadata
 * NOTE: Strictly obeys AGENTS.md rule 1.3 & 14.1:
 * DO NOT define `alternates.canonical` in root layout to prevent incorrect inheritance across child routes!
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    template: `%s | ${BRAND_NAME}`,
    default: `Xe Ghép Hà Nội - Đón Trả Tận Nơi 100% Xe Điện VinFast | ${BRAND_NAME}`,
  },
  description:
    "Dịch vụ xe ghép Hà Nội đi các tỉnh miền Bắc và taxi đưa đón sân bay Nội Bài 24/7. 100% xe điện VinFast đời mới, đón trả tận nhà, giá trọn gói không phát sinh phụ phí.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: BRAND_NAME,
    images: [
      {
        url: `${SITE_DOMAIN}/images/og-xeghep-vinfast.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} - Xe ghép liên tỉnh và taxi sân bay`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = buildGlobalBusinessSchema();

  return (
    <html lang="vi" className={fontSans.variable}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white selection:bg-emerald-100 selection:text-emerald-900">
        <JsonLd data={globalSchema} />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
