import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AIRPORT_DISTRICT_PRICING } from "@/data/airport-pricing";
import { COMPANY_INFO } from "@/data/company-info";
import { formatVND } from "@/lib/utils";
import { buildRouteServiceSchema } from "@/lib/schema";
import { Plane, ShieldCheck, Clock, CheckCircle2, PhoneCall, CalendarCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Taxi Đưa Đón Sân Bay Nội Bài 24/7 - Trọn Gói Chỉ Từ 180K",
  description:
    "Dịch vụ taxi đưa đón sân bay Nội Bài 24/7 bằng xe điện VinFast và xe 7 chỗ. Giá trọn gói đã bao gồm vé vào cổng sân bay và vé cầu đường cao tốc, không phát sinh phí.",
  path: "/taxi-dua-don-san-bay-noi-bai",
});

export default function AirportTaxiPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Taxi đưa đón sân bay Nội Bài", path: "/taxi-dua-don-san-bay-noi-bai" },
  ];

  const serviceSchema = buildRouteServiceSchema({
    name: "Dịch Vụ Taxi Đưa Đón Sân Bay Nội Bài",
    description: "Đón tiễn sân bay Nội Bài trọn gói bằng xe điện VinFast đời mới 24/7.",
    priceFrom: 180000,
    origin: "Hà Nội",
    destination: "Sân Bay Nội Bài",
    path: "/taxi-dua-don-san-bay-noi-bai",
  });

  const airportFaqs = [
    {
      q: "Giá trên đã bao gồm vé vào cổng sân bay và phí cầu đường chưa?",
      a: "100% giá niêm yết của Lubi đã bao gồm vé cổng sân bay T1/T2 và phí cầu đường Võ Nguyên Giáp. Tuyệt đối không phát sinh phụ phí ẩn.",
    },
    {
      q: "Nếu máy bay bị delay (hoãn chuyến) thì tài xế có đợi không?",
      a: "Tổng đài Lubi chủ động theo dõi số hiệu chuyến bay trên hệ thống bay quốc tế. Tài xế sẽ căn đúng giờ máy bay hạ cánh thực tế để đón tại sảnh mà không tính thêm phí chờ.",
    },
    {
      q: "Tôi cần đặt xe trước bao lâu?",
      a: "Quý khách nên đặt trước 1 - 2 tiếng đối với chuyến bay ban ngày và đặt trước từ tối hôm trước đối với các chuyến bay sáng sớm (3h - 6h sáng) để xe phục vụ chu đáo nhất.",
    },
    {
      q: "Xe đón khách tại sảnh nào ở sân bay Nội Bài?",
      a: "Tài xế đón tại sảnh đến tầng 1 (ga Quốc nội T1) hoặc tầng 1 (ga Quốc tế T2). Tài xế sẽ gọi điện hướng dẫn vị trí cột đón cụ thể ngay khi quý khách vừa lấy hành lý.",
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
                <Plane className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Phục Vụ Đón Tiễn 24/7 Tất Cả Các Khung Giờ</span>
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Taxi Đưa Đón Sân Bay Nội Bài Trọn Gói Giá Rẻ
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Đón tiễn đúng giờ tại sảnh ga T1 & T2. Dàn xe điện VinFast VF5, VF8 và xe 7 chỗ sang trọng, tài xế văn minh lịch sự. Giá cước trọn gói cam kết rẻ hơn 30% so với taxi truyền thống tại sân bay.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/dat-xe?service=sanbay"
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md flex items-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Đặt Xe Đi Sân Bay</span>
                </Link>

                <a
                  href={COMPANY_INFO.hotlineHref}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <span>Tổng Đài: {COMPANY_INFO.hotline}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bảng Giá Chi Tiết Từng Quận */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-10">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-2">
                Biểu Phí Niêm Yết Công Khai
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Bảng Giá Taxi Sân Bay Nội Bài Đi Các Quận Hà Nội
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                (Đã bao gồm 100% vé cầu đường & vé cổng sân bay, chưa bao gồm thuế VAT nếu yêu cầu xuất hóa đơn đỏ)
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 text-xs sm:text-sm">
                    <th className="py-3 px-3.5">Quận / Huyện Đón Trả</th>
                    <th className="py-3 px-3.5">Hà Nội ➔ Nội Bài (5 chỗ)</th>
                    <th className="py-3 px-3.5">Nội Bài ➔ Hà Nội (5 chỗ)</th>
                    <th className="py-3 px-3.5">Xe 7 Chỗ (1 chiều)</th>
                    <th className="py-3 px-3.5">Khứ Hồi 2 Chiều (5 chỗ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {AIRPORT_DISTRICT_PRICING.map((d) => (
                    <tr key={d.district} className="hover:bg-slate-50">
                      <td className="py-3.5 px-3.5 font-bold text-slate-900">{d.district}</td>
                      <td className="py-3.5 px-3.5 font-semibold text-emerald-700">
                        {formatVND(d.fromHanoiToAirport.sedan5Seats)}
                      </td>
                      <td className="py-3.5 px-3.5 font-semibold text-slate-900">
                        {formatVND(d.fromAirportToHanoi.sedan5Seats)}
                      </td>
                      <td className="py-3.5 px-3.5 font-medium text-slate-700">
                        {formatVND(d.fromHanoiToAirport.suv7Seats)}
                      </td>
                      <td className="py-3.5 px-3.5 font-black text-amber-600">
                        {formatVND(d.roundTrip.sedan5Seats)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-emerald-900 font-medium">
                *Các huyện ngoại thành (Đông Anh, Sóc Sơn, Mê Linh, Hoài Đức, Đan Phượng, Thường Tín...) vui lòng gọi hotline để có cước tối ưu nhất.
              </span>
              <Link
                href="/dat-xe?service=sanbay"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex-shrink-0"
              >
                Đặt xe ngay
              </Link>
            </div>
          </div>

          {/* Quy Trình Đón Tiễn Sân Bay */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Quy Trình Đón Tiễn Sân Bay Chuyên Nghiệp 4 Bước
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Cung cấp giờ bay & số hiệu</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quý khách cung cấp số hiệu chuyến bay và giờ hạ cánh dự kiến khi đặt chuyến.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Theo dõi chuyến bay liên tục</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lubi tự động cập nhật giờ bay thực tế qua radar, tài xế luôn có mặt đúng giờ dù chuyến bay delay.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Đón tại sảnh ga T1/T2</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tài xế liên hệ ngay khi máy bay hạ cánh, đón tại cột chỉ định và hỗ trợ mang hành lý lên xe.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  4
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Về nhà an toàn & thanh toán</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trả khách tận nhà, thanh toán tiền mặt hoặc chuyển khoản đúng mức cước đã báo trước.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Sân Bay */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>Hỏi Đáp Thường Gặp Khi Đi Xe Sân Bay Nội Bài</span>
            </h2>

            <div className="space-y-4">
              {airportFaqs.map((faq, index) => (
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
