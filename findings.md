# Findings & Architecture Research — Xe Ghép Liên Tỉnh (spec_v2.md)

## 1. Project Background & Requirements Analysis (spec_v2.md)
- **Brand name**: XE GHÉP LIÊN TỈNH
- **Hotline**: `0962.298.293` (tel: `0962298293`)
- **Website / Domain**: `xegheplientinh.vn` (Canonical baseUrl: `https://xegheplientinh.vn`)
- **Email**: `xegheplientinhvip@gmail.com`
- **Fanpage**: `Xe Ghép Bắc Giang - Bắc Ninh - Hải Phòng`
- **Slogan / Top Banner**:
  - Dòng 1: `XE GHÉP: MÓNG CÁI - HẠ LONG - HẢI PHÒNG - BẮC NINH - BẮC GIANG - HÀ NỘI`
  - Dòng 2: `ĐẶT XE LIÊN HỆ NGAY: 0962.298.293`
- **Core Value Proposition**:
  - Đón trả tận nhà, phục vụ 24/7.
  - Xe chạy thẳng, nhanh, giá rõ ràng. Chỉ ghép 1 - 3 khách/chuyến.
  - 100% xe riêng đời mới, giảm 10% cho khách hàng cũ.
  - Hoàn tiền 100%, đền 200% về chất lượng dịch vụ. Miễn phí huỷ chuyến khi đổi lộ trình.
  - Dịch vụ gửi hàng hoá hỏa tốc giá chỉ từ 150k tất cả các tuyến.

- **Sitemap Architecture**:
  - `/` : Trang chủ
  - `/gioi-thieu` : Giới thiệu
  - `/tuyen-lien-tinh` : Các tuyến liên tỉnh (trang tổng hợp)
    - `/tuyen-lien-tinh/hai-phong-bac-ninh-bac-giang`
    - `/tuyen-lien-tinh/hai-phong-ha-noi-noi-bai`
    - `/tuyen-lien-tinh/hai-phong-ha-long`
    - `/tuyen-lien-tinh/hai-phong-mong-cai`
    - `/tuyen-lien-tinh/ha-long-bac-ninh-bac-giang`
    - `/tuyen-lien-tinh/ha-noi-mong-cai`
    - `/tuyen-lien-tinh/ha-noi-ha-long`
    - `/tuyen-lien-tinh/hai-phong-hai-duong`
    - `/tuyen-lien-tinh/hai-phong-thai-nguyen`
  - `/tin-tuc` : Tin tức (danh sách)
    - `/tin-tuc/[slug]` : Chi tiết bài viết
  - `/lien-he` : Liên hệ
  - `/chinh-sach/thanh-toan` : Chính sách thanh toán
  - `/chinh-sach/dam-bao` : Chính sách đảm bảo
  - `/chinh-sach/bao-mat` : Chính sách bảo mật

- **9 Tuyến xe ghép & Giá niêm yết (spec_v2.md Section 4)**:
  1. Hải Phòng ⇄ Bắc Ninh ⇄ Bắc Giang: Ghép 1 người: 400k – 500k · Ghép 2 người: từ 700k · Bao xe 5 chỗ: từ 900k · Bao xe 7 chỗ: từ 1.000k.
  2. Hải Phòng ⇄ Hà Nội ⇄ Nội Bài: Ghép 1 người: 400k · Ghép 2 người: 700k · Bao xe 5 chỗ: từ 899k · Bao xe 7 chỗ: từ 999k.
  3. Hải Phòng ⇄ Hạ Long: Bao xe 4 chỗ: 400k – 500k · Bao xe 7 chỗ: 500k – 600k · Ghép 1 khách: 250k – 300k.
  4. Hải Phòng ⇄ Móng Cái: Bao xe 4 chỗ: 1.500k – 1.600k · Bao xe 7 chỗ: 1.600k – 1.700k · Ghép 1 khách: 500k – 600k.
  5. Hạ Long ⇄ Bắc Ninh ⇄ Bắc Giang: Ghép 1 người: 450k – 550k · Ghép 2 người: từ 700k · Bao xe 5 chỗ: từ 900k · Bao xe 7 chỗ: từ 1.000k.
  6. Hà Nội ⇄ Móng Cái: Bao xe 4 chỗ: 2.200k – 2.400k · Bao xe 7 chỗ: 2.300k – 2.500k · Ghép 1 khách: 600k – 800k.
  7. Hà Nội ⇄ Hạ Long: Bao xe 4 chỗ: 1.100k – 1.200k · Bao xe 7 chỗ: 1.200k – 1.300k · Ghép 1 khách: 450k – 550k.
  8. Hải Phòng ⇄ Hải Dương: Ghép 1 khách: 250k · Ghép 2 khách: 400k · Bao xe riêng: 500k.
  9. Hải Phòng ⇄ Thái Nguyên: Ghép 1 người: 600k · Ghép 2 người: 900k · Bao xe riêng: 1.400k.

## 2. SEO Rules Checklist (AGENTS.md Compliance Matrix)
| Rule | Mức | Kế hoạch triển khai trong Next.js |
|---|---|---|
| Title & Description unique | 🔴 MUST / 🟠 SHOULD | Dùng Next.js `Metadata` & `generateMetadata` cho từng trang. Format: `{Ý chính} - {Ý phụ} \| Xe Ghép Hải Phòng` |
| Canonical URL | 🔴 MUST | Absolute URL `https://xehaiphong.vn/...`. Khai báo theo từng page qua `alternates: { canonical: ... }`. **CẤM** khai báo canonical ở `app/layout.tsx`! |
| Charset & Viewport | 🔴 MUST | Khai báo UTF-8 đầu tiên, viewport `width=device-width, initial-scale=1`, cho phép zoom |
| Async params (Next.js 15+) | 🔴 MUST | Mọi `params` và `searchParams` đều được `await` đúng chuẩn |
| Semantic HTML | 🟠 SHOULD | Đúng 1 `<main>` mỗi trang, `<header>`, `<footer>`, `<nav aria-label="...">`, đúng 1 `h1`, tuần tự `h1` → `h2` → `h3` |
| Image optimization | 🔴 MUST | `next/image` với `width`, `height`, `alt` có nghĩa, `priority` cho hero LCP, `loading="lazy"` cho ảnh dưới fold |
| Structured Data (JSON-LD) | 🔴 MUST / 🟠 SHOULD | `@graph` schema: Organization, LocalBusiness / TaxiService, BreadcrumbList, Service / Offer, Article. Dữ liệu thật 100% khớp `xehaiphong.md` |
| Navigation | 🔴 MUST | `<Link href="...">` chuẩn, không dùng `onClick` + `router.push` thay link |
| 404 thật | 🔴 MUST | Trang không tồn tại gọi `notFound()` trong `not-found.tsx` |
| Robots & Sitemap | 🟠 SHOULD | `app/robots.ts` và `app/sitemap.ts` sinh tự động từ danh sách URL chuẩn của `xehaiphong.vn` |
| Font & CWV | 🟠 SHOULD | `next/font/google` (Be Vietnam Pro) với subset `['latin', 'vietnamese']` và `display: 'swap'` |

## 3. Tech Stack & Dependencies
- **Framework**: Next.js (App Router, TypeScript, React 19 / React Server Components).
- **Styling**: Tailwind CSS (Mobile-first, Ocean Blue & Emerald theme: `#0284c7`, `#0369a1`, `#008542`, `#0f172a`).
- **Icons**: Lucide React.
- **Testing**: Vitest (Schema generator, canonical validator, pricing calculations).
