# Task Plan — Xe Ghép Lubi (xeghephanoi.vn) SEO Web Application

> **Project**: Xe Ghép Lubi (Next.js App Router, Tailwind CSS, TypeScript, Full SEO per AGENTS.md v2.0.0)  
> **Mode**: Spec-Kit (`.spec-mode` = `spec-kit`)  
> **Complexity Level**: Thorough  
> **Current Phase**: Phase 4 & Phase 5 (Verification & Build Check)

---

## 1. File Structure Mapping

```
c:\Users\LongVi\OneDrive\Desktop\TestSEO/
├── .spec-mode                                 # Spec-Kit mode selector
├── .specify/
│   ├── memory/
│   │   └── constitution.md                   # Project constitution & SEO rules
│   └── specs/
│       └── xe-ghep-hanoi-seo/
│           ├── spec.md                       # Product specification (What & Why)
│           ├── plan.md                       # Engineering plan (How, refs constitution)
│           └── tasks.md                      # Detailed task decomposition
├── design-system/
│   └── MASTER.md                             # UI/UX Pro Max tokens, palettes, typography
├── task_plan.md                              # This plan (Manus-style)
├── findings.md                               # Discoveries & SEO matrix
├── progress.md                               # Activity log & verification evidence
├── package.json                              # Next.js 15+, Tailwind, Lucide, Vitest
├── tsconfig.json                             # Strict TypeScript config
├── next.config.ts                            # Next.js config (trailingSlash, image domains, headers)
├── tailwind.config.ts                        # Design system colors, fonts, spacing tokens
├── src/
│   ├── app/
│   │   ├── layout.tsx                        # Root layout (lang="vi", metadataBase, NO canonical here!)
│   │   ├── globals.css                       # Global Tailwind styles & typography
│   │   ├── page.tsx                          # Trang chủ (Banner, Form 3 tab, 5 cam kết, Tuyến nổi bật...)
│   │   ├── not-found.tsx                     # 404 handler (True 404 status code)
│   │   ├── robots.ts                         # SEO robots.txt
│   │   ├── sitemap.ts                        # SEO sitemap.xml
│   │   ├── dat-xe/
│   │   │   ├── page.tsx                      # Trang Đặt xe toàn diện
│   │   │   └── thanh-cong/
│   │   │       └── page.tsx                  # Trang cảm ơn sau khi đặt xe (có Booking ID, noindex)
│   │   ├── dich-vu-xe-ghep/
│   │   │   └── page.tsx                      # Tổng hợp tuyến xe ghép liên tỉnh
│   │   ├── [slug]/
│   │   │   └── page.tsx                      # Chi tiết từng tuyến (Ninh Bình, Nội Bài, Hải Phòng...) SSG
│   │   ├── taxi-dua-don-san-bay-noi-bai/
│   │   │   └── page.tsx                      # Taxi sân bay Nội Bài 24/7 theo quận
│   │   ├── taxi-duong-dai/
│   │   │   └── page.tsx                      # Taxi đường dài liên tỉnh
│   │   ├── bang-gia/
│   │   │   └── page.tsx                      # Bảng giá tổng hợp & so sánh
│   │   ├── dang-ky-doi-tac/
│   │   │   └── page.tsx                      # Tuyển đối tác lái xe & nhà xe
│   │   ├── tin-tuc/
│   │   │   ├── page.tsx                      # Danh sách tin tức & cẩm nang
│   │   │   └── [slug]/
│   │   │       └── page.tsx                  # Chi tiết bài viết cẩm nang (Mục lục, CTA, SSG)
│   │   ├── gioi-thieu/
│   │   │   └── page.tsx                      # Giới thiệu Công ty Cổ phần Đầu tư Lubi
│   │   └── lien-he/
│   │       └── page.tsx                      # Liên hệ, bản đồ, hotline
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                    # Header chuẩn semantic <header><nav>
│   │   │   ├── Footer.tsx                    # Footer chuẩn <footer>
│   │   │   └── FloatingContact.tsx           # Nút nổi: Gọi 0858.911.247, Zalo, SMS, Messenger, Đặt xe
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx                # Banner xe điện VinFast, LCP priority
│   │   │   ├── QuickBookingTabs.tsx          # Form 3 tab (Xe ghép, Sân bay, Đường dài)
│   │   │   ├── FiveCommitments.tsx           # 5 cam kết vàng
│   │   │   ├── OurServices.tsx               # 4 khối dịch vụ
│   │   │   ├── FeaturedRoutes.tsx            # Tuyến nổi bật (chỉ từ...)
│   │   │   ├── WhyChooseUs.tsx               # Vì sao chọn xe điện VinFast
│   │   │   ├── PartnerCallout.tsx            # CTA đối tác & doanh nghiệp
│   │   │   ├── Testimonials.tsx              # 6 đánh giá khách hàng thực tế
│   │   │   └── SeoArticle.tsx                # Bài viết SEO chuyên sâu trang chủ
│   │   ├── booking/
│   │   │   └── FullBookingForm.tsx           # Form đặt xe chi tiết
│   │   └── seo/
│   │       ├── JsonLd.tsx                    # Component inject Schema JSON-LD chuẩn an toàn XSS
│   │       └── Breadcrumbs.tsx               # Breadcrumb chuẩn semantic & Schema
│   ├── data/
│   │   ├── routes.ts                         # Dữ liệu chuẩn các tuyến xe ghép
│   │   ├── airport-pricing.ts                # Bảng giá taxi Nội Bài theo quận & loại xe
│   │   ├── long-distance-pricing.ts          # Bảng giá đường dài & quy định thời gian chờ
│   │   ├── articles.ts                       # Danh sách bài viết tin tức & cẩm nang
│   │   └── company-info.ts                   # Thông tin thương hiệu, hotline, địa chỉ
│   └── lib/
│       ├── seo.ts                            # Helper sinh title, description, canonical, OG
│       ├── schema.ts                         # Helper sinh Schema.org @graph (Organization, TaxiService...)
│       └── utils.ts                          # Định dạng tiền tệ VND, slugify tiếng Việt
└── tests/
    ├── seo.test.ts                           # Unit test SEO metadata & canonical generator
    ├── schema.test.ts                        # Unit test Schema JSON-LD builder (@graph structure)
    ├── pricing.test.ts                       # Unit test logic ước tính giá & định dạng VND
    └── routes-metadata.test.ts               # Unit test canonicals cho tất cả tuyến & bài viết
```

---

## 2. Phase Breakdown & Tasks

### Phase 1: Specification (SDD Flow)
- [x] 1.1 Select mode (`spec-kit`) and write `.spec-mode`
- [x] 1.2 Create `.specify/memory/constitution.md` incorporating `AGENTS.md` rules
- [x] 1.3 Create `.specify/specs/xe-ghep-hanoi-seo/spec.md` with complete Given-When-Then criteria
- [x] 1.4 Perform Inline Spec Review checklist
- [x] 1.5 **Gate G1 Checkpoint**: Confirmed by User

### Phase 2: Architecture & Persistent Planning
- [x] 2.1 Create `.specify/specs/xe-ghep-hanoi-seo/plan.md` (Engineering perspective: Next.js App Router, SSR/SSG, Metadata API, Schema.org graph)
- [x] 2.2 Create `.specify/specs/xe-ghep-hanoi-seo/tasks.md` (Traceable task list)
- [x] 2.3 Perform Inline Plan Review checklist
- [x] 2.4 **Gate G2 Checkpoint**: Verified all tasks have exact file paths and test strategies

### Phase 3: UI/UX Design System & Tokens
- [x] 3.1 Create `design-system/MASTER.md` using `ui-ux-pro-max` standards (VinFast Emerald `#008542`, Deep Forest `#064e3b`, Warm Amber `#f59e0b`, Slate `#0f172a`, WCAG 2.1 AA)
- [x] 3.2 Define typography tokens (Inter / Be Vietnam Pro, 16px body, 44px touch targets)
- [x] 3.3 **Gate G3 Checkpoint**: Pre-delivery design checklist passed

### Phase 4: Implementation (TDD + Next.js App Router)
- [x] 4.1 Project scaffolding: Next.js 15+, Tailwind CSS, TypeScript, Lucide, Vitest
- [x] 4.2 Write unit tests for core domain logic (`slugify`, `formatVND`, `constructMetadata`, `buildSchemaGraph`)
- [x] 4.3 Implement data layer (`company-info.ts`, `routes.ts`, `airport-pricing.ts`, `long-distance-pricing.ts`, `articles.ts`)
- [x] 4.4 Implement SEO components (`JsonLd.tsx`, `Breadcrumbs.tsx`, `Header.tsx`, `Footer.tsx`, `FloatingContact.tsx`)
- [x] 4.5 Implement `app/layout.tsx` (lang="vi", metadataBase, NO canonical) and `not-found.tsx`
- [x] 4.6 Implement Trang chủ (`app/page.tsx`) with HeroBanner, QuickBookingTabs, FiveCommitments, FeaturedRoutes, WhyChooseUs, Testimonials, SeoArticle
- [x] 4.7 Implement Đặt xe (`app/dat-xe/page.tsx`) and Cảm ơn (`app/dat-xe/thanh-cong/page.tsx`)
- [x] 4.8 Implement Tuyến tổng hợp (`app/dich-vu-xe-ghep/page.tsx`) and Chi tiết tuyến (`app/[slug]/page.tsx`)
- [x] 4.9 Implement Taxi Nội Bài (`app/taxi-dua-don-san-bay-noi-bai/page.tsx`) and Taxi đường dài (`app/taxi-duong-dai/page.tsx`)
- [x] 4.10 Implement Bảng giá (`app/bang-gia/page.tsx`) and Đối tác (`app/dang-ky-doi-tac/page.tsx`)
- [x] 4.11 Implement Tin tức (`app/tin-tuc/page.tsx`, `app/tin-tuc/[slug]/page.tsx`), Giới thiệu (`app/gioi-thieu/page.tsx`), Liên hệ (`app/lien-he/page.tsx`)
- [x] 4.12 Implement `app/sitemap.ts` and `app/robots.ts`

### Phase 5: Verification & Archive (Gate G4)
- [x] 5.1 Run test suite (`npm run test`) — 14/14 tests passed (0 failures)
- [x] 5.2 Build production Next.js bundle (`npm run build`) — Exit code 0, 27 SSG routes prerendered
- [x] 5.3 Audit raw HTML output: Title, Description, Canonical, H1, Schema JSON-LD, Link crawlability (Verified)
- [x] 5.4 Two-stage review (Spec conformance + Code quality: PASSED)
- [x] 5.5 Update progress and report to user

### Phase 7: Full Implementation of spec_v2.md (Xe Ghép Liên Tỉnh)
- [x] 7.1 Update findings.md and task_plan.md with spec_v2 requirements
- [x] 7.2 Update data layer: `src/data/company-info.ts` (Brand: Xe Ghép Liên Tỉnh, Hotline: 0962.298.293, Email: xegheplientinhvip@gmail.com, Fanpage: Xe Ghép Bắc Giang - Bắc Ninh - Hải Phòng, 6 commitments) and `src/data/routes.ts` (9 routes with /tuyen-lien-tinh/[slug] paths and exact pricing tiers)
- [x] 7.3 Update SEO core: `src/lib/seo.ts` (SITE_DOMAIN: https://xegheplientinh.vn, BRAND_NAME: Xe Ghép Liên Tỉnh) and `src/lib/schema.ts` (Hotline: +84962298293, organization & route services)
- [x] 7.4 Update layout components: `Header.tsx` (Logo + hotline, 5 menu items + 9 dropdown submenus, red call button), `TopBanner.tsx` (Dòng 1 & 2), `FloatingContact.tsx` (Nút tròn trái, pill Gọi ngay phải), `Footer.tsx` (4 columns per spec_v2), `layout.tsx`
- [x] 7.5 Implement Homepage (`src/app/page.tsx`): Section 1 (Banner Bảng Giá Các Tuyến Chính - 7 ô tuyến), Section 2 (Hero: H1 XE GHÉP LIÊN TỈNH + Sub + Nút đỏ), Section 3 (BookingForm trực tuyến), Section 4 (Bảng Giá Xe Ghép 9 RouteCard), Section 5 (WhyChooseUs nền vàng), Section 6 (IntroTeaser)
- [x] 7.6 Implement `/tuyen-lien-tinh/page.tsx` (Bộ lọc nhanh tab + 9 cards) and `/tuyen-lien-tinh/[slug]/page.tsx` (Hero, PriceTable, Pickup/Dropoff, BookingForm, SEO content, FAQ, Related routes)
- [x] 7.7 Implement `/gioi-thieu/page.tsx` (7 sections per spec_v2) and `/lien-he/page.tsx` (Hotline, email, fanpage, contact form, booking form)
- [x] 7.8 Implement policy pages: `/chinh-sach/thanh-toan/page.tsx`, `/chinh-sach/dam-bao/page.tsx`, `/chinh-sach/bao-mat/page.tsx`
- [x] 7.9 Update `/tin-tuc/page.tsx` & `/tin-tuc/[slug]/page.tsx` to match Xe Ghép Liên Tỉnh & hotline
- [x] 7.10 Update `sitemap.ts`, `robots.ts`, and redirects in `next.config.ts`
- [x] 7.11 Update unit tests in `tests/*.test.ts` to match spec_v2
- [x] 7.12 Run `npm test` & `npm run build` and verify raw HTML output

