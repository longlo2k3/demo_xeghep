# Findings & Architecture Research — Xe Ghép Lubi Website

## 1. Project Background & Requirements Analysis
- **Domain reference**: Dịch vụ xe ghép Hà Nội (tham chiếu xeghephanoi.vn, Công ty CP Đầu tư Lubi Việt Nam).
- **Core Value Proposition**: 100% xe điện VinFast (VF5, VFe34, VF8, VF9) + dòng xe 7–16 chỗ, đón trả tận nơi, giá trọn gói không phát sinh, tài xế văn minh lịch sự.
- **Scope**: 11 nhóm trang chính:
  1. Trang chủ (`/`)
  2. Đặt xe (`/dat-xe`) + Cảm ơn (`/dat-xe/thanh-cong`)
  3. Dịch vụ xe ghép tổng hợp tuyến (`/dich-vu-xe-ghep`)
  4. Chi tiết từng tuyến (`/xe-ghep-ninh-binh`, `/xe-ghep-noi-bai`, `/xe-ghep-quang-ninh`, `/xe-ghep-thai-binh`, `/xe-ghep-hai-phong`, `/xe-ghep-hung-yen`, `/xe-ghep-phu-tho`, `/xe-ghep-bac-ninh`...)
  5. Taxi sân bay Nội Bài (`/taxi-dua-don-san-bay-noi-bai`)
  6. Taxi đường dài (`/taxi-duong-dai`)
  7. Bảng giá tổng hợp (`/bang-gia`)
  8. Đối tác tài xế (`/dang-ky-doi-tac`)
  9. Tin tức & bài viết cẩm nang (`/tin-tuc`, `/tin-tuc/[slug]`)
  10. Giới thiệu công ty (`/gioi-thieu`)
  11. Liên hệ (`/lien-he`)
  - Thành phần dùng chung: Header, Footer, Thanh nút liên hệ nổi đa kênh (Gọi 0858.911.247, Zalo, SMS, Messenger, Đặt xe).

## 2. SEO Rules Checklist (AGENTS.md Compliance Matrix)
| Rule | Mức | Kế hoạch triển khai trong Next.js |
|---|---|---|
| Title & Description unique | 🔴 MUST / 🟠 SHOULD | Dùng Next.js `Metadata` & `generateMetadata` cho từng trang. Format: `{Ý chính} - {Ý phụ} \| Xe Ghép Lubi` |
| Canonical URL | 🔴 MUST | Absolute URL `https://xeghephanoi.vn/...`. Khai báo theo từng page qua `alternates: { canonical: ... }`. **CẤM** khai báo canonical ở `app/layout.tsx`! |
| Charset & Viewport | 🔴 MUST | Khai báo UTF-8 đầu tiên, viewport `width=device-width, initial-scale=1`, cho phép zoom |
| Async params (Next.js 15+) | 🔴 MUST | Mọi `params` và `searchParams` đều được `await` đúng chuẩn |
| Semantic HTML | 🟠 SHOULD | Đúng 1 `<main>` mỗi trang, `<header>`, `<footer>`, `<nav aria-label="...">`, đúng 1 `h1`, tuần tự `h1` → `h2` → `h3` |
| Image optimization | 🔴 MUST | `next/image` với `width`, `height`, `alt` có nghĩa, `priority` cho hero LCP, `loading="lazy"` cho ảnh dưới fold |
| Structured Data (JSON-LD) | 🔴 MUST / 🟠 SHOULD | `@graph` schema: Organization, LocalBusiness / TaxiService, BreadcrumbList, Service / Offer, Article. Dữ liệu thật 100% |
| Navigation | 🔴 MUST | `<Link href="...">` chuẩn, không dùng `onClick` + `router.push` thay link |
| 404 thật | 🔴 MUST | Trang không tồn tại gọi `notFound()` trong `not-found.tsx` |
| Robots & Sitemap | 🟠 SHOULD | `app/robots.ts` và `app/sitemap.ts` sinh tự động từ danh sách URL chuẩn |
| Font & CWV | 🟠 SHOULD | `next/font/google` (Inter / Be Vietnam Pro) với subset `['latin', 'vietnamese']` và `display: 'swap'` |

## 3. Tech Stack & Dependencies
- **Framework**: Next.js (App Router, TypeScript, React 19 / React Server Components).
- **Styling**: Tailwind CSS (Mobile-first, semantic color palette: VinFast Green `#008542` & Deep Emerald `#064e3b`, Warm Accent `#f59e0b`, Neutral Slate `#0f172a`).
- **Icons**: Lucide React (vector SVG, accessible, zero emoji-as-icon).
- **Testing**: Vitest + React Testing Library (TDD for schema generator, slugify, pricing calculators, form validation).
