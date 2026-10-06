import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { POPULAR_ROUTES } from "@/data/routes";
import { formatVND } from "@/lib/utils";

export function FeaturedRoutes() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Mạng Lưới Tuyến Xe Trọng Điểm
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Các Tuyến Xe Ghép Nổi Bật Hàng Ngày
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
              Các chuyến xe chạy liên tục từ 4h sáng đến 23h đêm. Đón tận nhà, trả tận nơi với biểu phí minh bạch.
            </p>
          </div>

          <Link
            href="/dich-vu-xe-ghep"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-emerald-700 bg-emerald-100/70 hover:bg-emerald-200/80 transition-colors self-start md:self-auto"
          >
            <span>Xem Tất Cả Các Tuyến</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.slug}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{route.distance}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{route.duration}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {route.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {route.description}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Ghép ghế chỉ từ:</span>
                  <span className="text-2xl font-black text-emerald-700">
                    {formatVND(route.priceFrom)}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">/ người</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/${route.slug}`}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Bảng giá & Chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>

                <Link
                  href={`/dat-xe?service=xeghep&route=${encodeURIComponent(route.name)}`}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                >
                  Đặt ngay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
