"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { POPULAR_ROUTES, type RouteItem } from "@/data/routes";
import { Clock, CheckCircle2, ArrowRight, ChevronUp, X } from "lucide-react";

const ROUTE_LOCATION_IMAGES: Record<string, string[]> = {
  "hai-phong-bac-ninh-bac-giang": ["/HaiPhong.jpg", "/BacNinh.jpg", "/BacGiang.jpg"],
  "hai-phong-ha-noi-noi-bai": ["/HaiPhong.jpg", "/HaNoi.webp", "/NoiBai.jpg"],
  "hai-phong-ha-long": ["/HaiPhong.jpg", "/HaLong.jpg"],
  "hai-phong-mong-cai": ["/HaiPhong.jpg", "/MongCai.jpg"],
  "ha-long-bac-ninh-bac-giang": ["/HaLong.jpg", "/BacNinh.jpg", "/BacGiang.jpg"],
  "ha-noi-mong-cai": ["/HaNoi.webp", "/MongCai.jpg"],
  "ha-noi-ha-long": ["/HaNoi.webp", "/HaLong.jpg"],
  "hai-phong-hai-duong": ["/HaiPhong.jpg", "/HaNoi.webp"],
  "hai-phong-thai-nguyen": ["/HaiPhong.jpg", "/BacNinh.jpg", "/HaNoi.webp"],
};

function formatPriceFrom(val: number): string {
  if (val >= 1000) {
    return `${(val / 1000).toLocaleString("vi-VN")}k`;
  }
  return `${val.toLocaleString("vi-VN")}đ`;
}

export function RoutePricingCard({ route }: { route: RouteItem }) {
  const images = ROUTE_LOCATION_IMAGES[route.slug] || ["/HaiPhong.jpg", "/HaNoi.webp"];
  const [activeIdx, setActiveIdx] = useState(0);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      onClick={() => setIsOpenMobile((prev) => !prev)}
      className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 hover:border-red-500 group h-[380px] sm:h-[400px] flex flex-col justify-between bg-slate-950 transition-all duration-300 cursor-pointer select-none"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Tuyến xe ghép ${route.name} - Ảnh địa điểm ${i + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            decoding="async"
            className={`object-cover object-center transition-all duration-1000 transform group-hover:scale-105 pointer-events-none ${
              i === activeIdx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Deep Gradient Scrim Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30 pointer-events-none" />
      </div>

      {/* Top Header Information: Badges & Slideshow Dots */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/20 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-sky-400" />
          <span>{route.duration} • {route.distance}</span>
        </span>

        {/* Dots indicating current slide */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIdx ? "w-4 bg-amber-400" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Default Bottom Content (Tên địa điểm và Giá thấp nhất) */}
      <div
        className={`relative z-10 p-5 sm:p-6 space-y-2 transition-all duration-300 ${
          isOpenMobile
            ? "opacity-0 translate-y-4"
            : "opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-4"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase drop-shadow-md tracking-tight leading-tight">
          {route.name}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
            chỉ từ
          </span>
          <span className="text-2xl sm:text-3xl font-black text-amber-400 drop-shadow-md">
            {formatPriceFrom(route.priceFrom)}
          </span>
        </div>

        <div className="pt-1 flex items-center gap-1 text-[11px] font-semibold text-sky-300">
          <span>Xem bảng giá chi tiết</span>
          <ChevronUp className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>

      {/* Slide-Up Panel on Hover / Tap: Full Pricing Breakdown with Animation từ dưới đi lên */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 bg-slate-950/60 backdrop-blur-md border-t border-white/25 rounded-t-2xl shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between space-y-3 ${
          isOpenMobile ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
        }`}
      >
        {/* Top sheet handle */}
        <div className="w-10 h-1 rounded-full bg-white/30 mx-auto -mt-1" />

        {/* Panel Header */}
        <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2.5">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
              BẢNG GIÁ CHI TIẾT
            </span>
            <h3 className="text-base sm:text-lg font-black text-white leading-tight">
              {route.name}
            </h3>
          </div>

          {/* Close button on mobile */}
          <button
            type="button"
            onClick={() => setIsOpenMobile(false)}
            className="sm:hidden p-1 rounded-full bg-white/10 text-slate-300 hover:text-white"
            aria-label="Đóng bảng giá"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Pricing Rows */}
        <div className="space-y-2 py-0.5">
          {route.pricingDetails.map((detail, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-dashed border-white/10 last:border-0"
            >
              <span className="text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span>{detail.label}</span>
              </span>
              <span className="font-extrabold text-amber-300 text-right">
                {detail.price}
              </span>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Đón trả tận nhà 2 chiều • Miễn phí hủy chuyến</span>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-1">
          <Link
            href={`/tuyen-lien-tinh/${route.slug}#form-dat-xe`}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xs sm:text-sm text-center shadow-lg shadow-red-600/40 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.01]"
          >
            <span>ĐẶT XE NGAY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={`/tuyen-lien-tinh/${route.slug}`}
            className="block text-center text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Xem chi tiết tuyến đường &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RoutePricingGrid() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H2 Title per spec_v2.md Section 4 */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 font-bold text-xs uppercase tracking-wider shadow-sm">
            Niêm Yết Minh Bạch • Không Phụ Phí Ẩn
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            BẢNG GIÁ XE GHÉP
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 italic">
            Giá đã bao gồm phí cầu đường bến bãi – Cam kết 100% xe riêng đời mới, đưa đón tại nhà – Miễn phí huỷ chuyến.
          </p>
        </div>

        {/* Lưới 9 RouteCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <RoutePricingCard key={route.slug} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}

