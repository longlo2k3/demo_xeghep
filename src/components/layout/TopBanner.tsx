import { COMPANY_INFO } from "@/data/company-info";
import { PhoneCall } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white py-2.5 px-4 text-center border-b border-sky-800/60 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-1 sm:gap-1.5">
        <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-sky-200">
          {COMPANY_INFO.topBannerLine1}
        </p>
        <a
          href={COMPANY_INFO.hotlineHref}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-amber-300 hover:text-amber-200 tracking-wider transition-colors"
          aria-label="Gọi hotline đặt xe ngay"
        >
          <PhoneCall
            className="w-4 h-4 text-amber-400 animate-pulse"
            aria-hidden="true"
          />
          <span>{COMPANY_INFO.topBannerLine2}</span>
        </a>
      </div>
    </div>
  );
}
