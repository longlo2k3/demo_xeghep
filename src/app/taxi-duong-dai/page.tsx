import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { DISTANCE_RATES, LONG_DISTANCE_POLICIES } from "@/data/long-distance-pricing";
import { COMPANY_INFO } from "@/data/company-info";
import { formatVND } from "@/lib/utils";
import { buildRouteServiceSchema } from "@/lib/schema";
import { Navigation, ShieldAlert, CheckCircle2, PhoneCall, CalendarCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Taxi Đường Dài Giá Rẻ Đi Các Tỉnh - Chỉ Từ 8.000đ/km",
  description:
    "Dịch vụ taxi đường dài liên tỉnh trọn gói từ Hà Nội đi tất cả các tỉnh miền Bắc bằng xe điện VinFast đời mới. Giảm 60-70% chiều về, miễn phí 1 giờ chờ.",
  path: "/taxi-duong-dai",
});

export default function LongDistanceTaxiPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Taxi đường dài", path: "/taxi-duong-dai" },
  ];

  const serviceSchema = buildRouteServiceSchema({
    name: "Dịch Vụ Taxi Đường Dài Liên Tỉnh",
    description: "Taxi đường dài liên tỉnh cước trọn gói theo kilomet từ Hà Nội đi các tỉnh.",
    priceFrom: 250000,
    origin: "Hà Nội",
    destination: "Các tỉnh miền Bắc",
    path: "/taxi-duong-dai",
  });

  const faqs = [
    {
      q: "Giá cước theo km đã bao gồm phí cầu đường chưa?",
      a: "Giá cước tính theo kilomet chưa bao gồm vé cầu đường, vé cao tốc và vé phà (nếu có). Quý khách vui lòng thanh toán trực tiếp cho lái xe theo hóa đơn thực tế của trạm thu phí.",
    },
    {
      q: "Chính sách giảm giá chuyến 2 chiều được áp dụng như thế nào?",
      a: "Khi quý khách đi 2 chiều khứ hồi trong ngày với cự ly từ 30km trở lên, chiều về sẽ được giảm từ 60% đến 70% giá cước so với chiều đi.",
    },
    {
      q: "Thời gian chờ khách được tính phí ra sao?",
      a: "Lubi miễn phí hoàn toàn 1 giờ chờ đầu tiên cho quý khách. Từ giờ chờ thứ 2 trở đi, cước chờ tính 60.000đ/giờ (áp dụng tối đa 3 giờ chờ ban ngày).",
    },
    {
      q: "Nếu tôi muốn xe chờ qua đêm để về ngày hôm sau thì sao?",
      a: "Trường hợp đi công tác hoặc du lịch lưu đêm qua ngày, quý khách vui lòng liên hệ tổng đài 0858.911.247 để được báo giá trọn gói lưu đêm lái xe ưu đãi nhất.",
    },
  ];

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white rounded-2xl p-6 sm:p-12 mb-10 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Taxi Đường Dài Liên Tỉnh Tiết Kiệm</span>
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Taxi Đường Dài Trọn Gói Hà Nội Đi Các Tỉnh
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Phục vụ xe riêng 5 chỗ, 7 chỗ và 16 chỗ từ Hà Nội đi tất cả các tỉnh thành phía Bắc. Dàn xe điện VinFast êm ái, máy lạnh thơm tho, lái xe an toàn, cước phí tính theo km minh bạch.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/dat-xe?service=duongdai"
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md flex items-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Đặt Xe Đường Dài</span>
                </Link>

                <a
                  href={COMPANY_INFO.hotlineHref}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <span>Hotline Báo Giá: {COMPANY_INFO.hotline}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bảng Giá Theo Cự Ly Km */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-10">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-2">
                Biểu Phí Kilomet Minh Bạch
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Bảng Giá Cước Taxi Đường Dài Theo Cự Ly
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 text-xs sm:text-sm">
                    <th className="py-3 px-4">Khoảng Cách Di Chuyển</th>
                    <th className="py-3 px-4">Xe 5 Chỗ (VinFast EV)</th>
                    <th className="py-3 px-4">Xe 7 Chỗ (SUV)</th>
                    <th className="py-3 px-4">Xe 16 Chỗ (Transit)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {DISTANCE_RATES.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{rate.range}</td>
                      <td className="py-3.5 px-4 font-extrabold text-emerald-700">{formatVND(rate.sedan5Seats)}/km</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{formatVND(rate.suv7Seats)}/km</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-700">{formatVND(rate.van16Seats)}/km</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quy Định & Chính Sách */}
            <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Quy Định Về Chuyến Đi Đường Dài 2 Chiều & Giờ Chờ</span>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Giảm giá 2 chiều:</strong> {LONG_DISTANCE_POLICIES.roundTripDiscount}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Thời gian chờ:</strong> {LONG_DISTANCE_POLICIES.waitingTimeRule}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Phí cầu đường:</strong> {LONG_DISTANCE_POLICIES.tollsNote}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Chuyến qua đêm:</strong> {LONG_DISTANCE_POLICIES.overnightNote}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>Hỏi Đáp Thường Gặp Về Dịch Vụ Taxi Đường Dài</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                    <span className="text-emerald-700 font-black">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
