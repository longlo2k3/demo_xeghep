import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { POPULAR_ROUTES } from "@/data/routes";
import { AIRPORT_DISTRICT_PRICING } from "@/data/airport-pricing";
import { DISTANCE_RATES } from "@/data/long-distance-pricing";
import { formatVND } from "@/lib/utils";
import { BadgePercent, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Bảng Giá Dịch Vụ Xe Ghép & Taxi Sân Bay 2026 - Cập Nhật Mới Nhất",
  description:
    "Bảng giá trọn gói niêm yết dịch vụ xe ghép Hà Nội, taxi đón tiễn sân bay Nội Bài và taxi đường dài liên tỉnh. Cập nhật mới nhất 2026, giá minh bạch không phát sinh.",
  path: "/bang-gia",
});

export default function PricingOverviewPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Bảng giá", path: "/bang-gia" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Niêm Yết Công Khai 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bảng Giá Tổng Hợp Dịch Vụ Xe Ghép Lubi
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Cam kết giá trọn gói không phát sinh. Áp dụng cho dòng xe điện VinFast đời mới và các dòng xe 7-16 chỗ cao cấp. Ngày cập nhật bảng giá: <strong>01/03/2026</strong>.
            </p>
          </div>

          {/* Phần 1: Bảng giá Xe ghép các tuyến nổi bật */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  1. Bảng Giá Xe Ghép & Bao Xe Liên Tỉnh
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Đón trả tận nhà, cam kết tối đa 2 điểm đón/trả.
                </p>
              </div>
              <Link
                href="/dich-vu-xe-ghep"
                className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Xem chi tiết từng tuyến</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 text-xs sm:text-sm">
                    <th className="py-3 px-4">Tuyến Đường</th>
                    <th className="py-3 px-4">Cự Ly / Thời Gian</th>
                    <th className="py-3 px-4">Ghép 1 Ghế</th>
                    <th className="py-3 px-4">Bao Xe 5 Chỗ (VF5/VF8)</th>
                    <th className="py-3 px-4">Bao Xe 7 Chỗ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {POPULAR_ROUTES.map((route) => (
                    <tr key={route.slug} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        <Link href={`/${route.slug}`} className="hover:text-emerald-700 hover:underline">
                          {route.name}
                        </Link>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">
                        {route.distance} • {route.duration}
                      </td>
                      <td className="py-3.5 px-4 font-black text-emerald-700">
                        {formatVND(route.priceFrom)}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        {formatVND(route.priceCharter5Seats)}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">
                        {formatVND(route.priceCharter7Seats)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Phần 2: Bảng giá Taxi sân bay Nội Bài */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. Bảng Giá Taxi Đón Tiễn Sân Bay Nội Bài
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Giá đã bao gồm 100% vé cầu đường cao tốc và vé vào cổng sân bay.
                </p>
              </div>
              <Link
                href="/taxi-dua-don-san-bay-noi-bai"
                className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Xem chi tiết sân bay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 text-xs sm:text-sm">
                    <th className="py-3 px-4">Quận / Huyện</th>
                    <th className="py-3 px-4">Hà Nội ➔ Nội Bài (5 chỗ)</th>
                    <th className="py-3 px-4">Nội Bài ➔ Hà Nội (5 chỗ)</th>
                    <th className="py-3 px-4">Xe 7 Chỗ</th>
                    <th className="py-3 px-4">Khứ Hồi 2 Chiều (5 chỗ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {AIRPORT_DISTRICT_PRICING.slice(0, 6).map((d) => (
                    <tr key={d.district} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{d.district}</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">{formatVND(d.fromHanoiToAirport.sedan5Seats)}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{formatVND(d.fromAirportToHanoi.sedan5Seats)}</td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">{formatVND(d.fromHanoiToAirport.suv7Seats)}</td>
                      <td className="py-3.5 px-4 font-black text-amber-600">{formatVND(d.roundTrip.sedan5Seats)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Phần 3: Bảng giá Taxi đường dài theo km */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              3. Bảng Giá Taxi Đường Dài Tính Theo Kilomet
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 text-xs sm:text-sm">
                    <th className="py-3 px-4">Cự Ly</th>
                    <th className="py-3 px-4">Xe 5 Chỗ (VinFast)</th>
                    <th className="py-3 px-4">Xe 7 Chỗ (SUV)</th>
                    <th className="py-3 px-4">Xe 16 Chỗ (Transit)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {DISTANCE_RATES.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{r.range}</td>
                      <td className="py-3.5 px-4 font-extrabold text-emerald-700">{formatVND(r.sedan5Seats)}/km</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{formatVND(r.suv7Seats)}/km</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-700">{formatVND(r.van16Seats)}/km</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ghi chú chính sách VAT & Phụ phí */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
            <h3 className="font-bold flex items-center gap-1.5 text-amber-950 text-base">
              <BadgePercent className="w-5 h-5 text-amber-600" aria-hidden="true" />
              <span>Chính Sách Hóa Đơn VAT & Phụ Phí</span>
            </h3>
            <p className="flex items-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Toàn bộ bảng giá niêm yết trên website là giá thanh toán thực tế dành cho khách hàng cá nhân.</span>
            </p>
            <p className="flex items-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Quý khách hoặc doanh nghiệp có nhu cầu xuất hóa đơn giá trị gia tăng (VAT) vui lòng cộng thêm 8% - 10% theo quy định thuế hiện hành.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
