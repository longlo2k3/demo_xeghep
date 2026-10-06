import Image from "next/image";
import { Zap, ShieldCheck, PhoneCall, CheckCircle } from "lucide-react";
import { QuickBookingTabs } from "./QuickBookingTabs";
import { COMPANY_INFO } from "@/data/company-info";

export function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden">
      {/* Decorative Background Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Tiên Phong Giao Thông Xanh 100% Xe Điện VinFast</span>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-white leading-tight">
              Xe Ghép Hà Nội Đi Tỉnh & Taxi Sân Bay Nội Bài Đón Tận Nơi
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Giải pháp di chuyển văn minh, tiết kiệm đến 50% chi phí. Đón trả tận nhà bằng dàn xe điện VinFast đời mới (VF5, VFe34, VF8) êm ái, sạch sẽ, không mùi say xe. Giá trọn gói niêm yết không phát sinh.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <a
                href={COMPANY_INFO.hotlineHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
                aria-label="Gọi điện đặt xe nhanh"
              >
                <PhoneCall className="w-5 h-5" aria-hidden="true" />
                <span>Gọi Hotline: {COMPANY_INFO.hotline}</span>
              </a>

              <a
                href="#form-dat-xe"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-sm transition-all"
              >
                <span>Báo Giá Nhanh 3 Giây</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-lg mx-auto lg:mx-0 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span>Giá trọn gói niêm yết</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span>Đón trả tận nhà</span>
              </span>
              <span className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span>Phục vụ 24/7</span>
              </span>
            </div>
          </div>

          {/* Hero Right Visual: VinFast Car Graphic with priority LCP optimization */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-900/80">
              <Image
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
                alt="Đội xe điện VinFast dịch vụ xe ghép Hà Nội đưa đón sân bay Nội Bài Lubi"
                width={1200}
                height={675}
                priority={true}
                className="w-full h-auto object-cover aspect-[16/9]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    VinFast VF5, VFe34, VF8 & 7-16 chỗ
                  </p>
                  <p className="text-slate-400 text-[11px]">Đời mới 2024–2026, khoang hành khách sang trọng</p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-extrabold text-[11px]">
                  100% Xe Điện
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking Form placed prominently above the fold / early viewport */}
        <div id="form-dat-xe" className="scroll-mt-24 max-w-5xl mx-auto">
          <QuickBookingTabs />
        </div>
      </div>
    </section>
  );
}
