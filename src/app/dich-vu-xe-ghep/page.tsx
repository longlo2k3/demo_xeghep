import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { POPULAR_ROUTES } from "@/data/routes";
import { COMPANY_INFO } from "@/data/company-info";
import { formatVND } from "@/lib/utils";
import { Zap, Clock, MapPin, CheckCircle, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Dịch Vụ Xe Ghép Hà Nội Đi Tỉnh - Đón Tận Nhà Giá Rẻ Nhất",
  description:
    "Danh sách các tuyến xe ghép Hà Nội đi Ninh Bình, Quảng Ninh, Hải Phòng, Thái Bình, Hưng Yên, Phú Thọ, Bắc Ninh... 100% xe điện VinFast, đón trả tận nơi, giá chỉ từ 110.000đ.",
  path: "/dich-vu-xe-ghep",
});

export default function AllRoutesPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Dịch vụ xe ghép", path: "/dich-vu-xe-ghep" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Mạng Lưới Tuyến Liên Tỉnh Toàn Diện
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dịch Vụ Xe Ghép & Bao Xe Trọn Gói Hà Nội
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Kết nối Hà Nội với tất cả các tỉnh thành miền Bắc. Chúng tôi cung cấp hình thức ghép ghế tiết kiệm, bao hàng ghế riêng tư và bao trọn xe 5-7 chỗ bằng 100% dàn xe điện VinFast đời mới.
            </p>
          </div>

          {/* So Sánh Ưu Điểm */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-8">
              So Sánh Xe Ghép Lubi Với Các Phương Tiện Khác
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="text-slate-500">❌</span> Xe Khách Truyền Thống
                </h3>
                <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
                  <li>• Phải ra bến xe đông đúc, chờ đợi xếp hàng.</li>
                  <li>• Thường xuyên dừng đỗ bắt khách dọc đường.</li>
                  <li>• Không gian đông người ồn ào, mùi xăng xe khó chịu.</li>
                  <li>• Phải đi xe ôm/taxi phụ từ bến về nhà tốn thêm chi phí.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="text-slate-500">⚠️</span> Taxi Truyền Thống
                </h3>
                <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
                  <li>• Chi phí bao trọn chuyến rất đắt đỏ (800k - 1.5tr).</li>
                  <li>• Giá cước nhảy theo đồng hồ km, dễ bị tăng giá khi tắc đường.</li>
                  <li>• Không có hình thức ghép ghế chia sẻ chi phí.</li>
                  <li>• Phụ thu vé cao tốc ngoài cước niêm yết.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-emerald-50 border-2 border-emerald-500 space-y-3 shadow-md">
                <h3 className="font-bold text-emerald-800 text-base flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                  Xe Ghép Điện Lubi (Tối Ưu)
                </h3>
                <ul className="space-y-2 text-slate-800 text-xs sm:text-sm font-medium">
                  <li className="flex items-center gap-1.5 text-emerald-900">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Đón tận nhà - Trả tận nơi tại cửa.
                  </li>
                  <li className="flex items-center gap-1.5 text-emerald-900">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Giá chỉ từ 110k, tiết kiệm đến 70% so với taxi.
                  </li>
                  <li className="flex items-center gap-1.5 text-emerald-900">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    100% xe điện VinFast sạch sẽ, không mùi say xe.
                  </li>
                  <li className="flex items-center gap-1.5 text-emerald-900">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Tối đa chỉ đón 2 điểm ghép, chạy cao tốc nhanh chóng.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Danh Sách Tuyến Xe */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              Bảng Danh Sách Tuyến Đường Phục Vụ Hàng Ngày
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {POPULAR_ROUTES.map((route) => (
                <div
                  key={route.slug}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
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
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {route.description}
                    </p>

                    <div className="space-y-1.5 py-3 border-y border-slate-100 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Ghép ghế:</span>
                        <span className="font-extrabold text-emerald-700">
                          {formatVND(route.priceFrom)}/ghế
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Bao trọn xe 5 chỗ:</span>
                        <span className="font-bold text-slate-800">
                          {formatVND(route.priceCharter5Seats)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Bao trọn xe 7 chỗ:</span>
                        <span className="font-bold text-slate-800">
                          {formatVND(route.priceCharter7Seats)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/${route.slug}`}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Xem lộ trình & FAQ</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href={`/dat-xe?service=xeghep&route=${encodeURIComponent(route.name)}`}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition-colors"
                    >
                      Đặt xe ngay
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hotline CTA Banner */}
          <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">
                Cần Đặt Tuyến Đường Riêng Hoặc Xe Đưa Đón Đặc Biệt?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Lubi nhận đưa đón bệnh nhân xuất viện, đưa rước đám cưới, phục vụ công tác liên tỉnh theo yêu cầu 24/7.
              </p>
            </div>
            <a
              href={COMPANY_INFO.hotlineHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-lg transition-all flex-shrink-0"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Gọi Ngay: {COMPANY_INFO.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
