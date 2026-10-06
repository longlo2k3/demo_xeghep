import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { POPULAR_ROUTES } from "@/data/routes";
import { COMPANY_INFO, TESTIMONIALS } from "@/data/company-info";
import { formatVND } from "@/lib/utils";
import { buildRouteServiceSchema } from "@/lib/schema";
import {
  Clock,
  MapPin,
  Zap,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  CalendarCheck,
  Star,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

// SSG Pre-rendering for all routes
export async function generateStaticParams() {
  return POPULAR_ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

// Next.js 15+ generateMetadata with awaited params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = POPULAR_ROUTES.find((r) => r.slug === slug);

  if (!route) return {};

  return constructMetadata({
    title: `${route.name} - Đón Tận Nhà Giá Rẻ Từ ${formatVND(route.priceFrom)}`,
    description: `Dịch vụ ${route.name} bằng xe điện VinFast đời mới. Cự ly ${route.distance}, thời gian ${route.duration}. Đón trả tận nhà, cam kết không phát sinh phụ phí.`,
    path: `/${route.slug}`,
  });
}

export default async function RouteDetailPage({ params }: Props) {
  const { slug } = await params;
  const route = POPULAR_ROUTES.find((r) => r.slug === slug);

  if (!route) {
    notFound(); // True HTTP 404 per AGENTS.md rule 4.4 & 14.1
  }

  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Dịch vụ xe ghép", path: "/dich-vu-xe-ghep" },
    { name: route.name, path: `/${route.slug}` },
  ];

  const serviceSchema = buildRouteServiceSchema({
    name: route.name,
    description: route.description,
    priceFrom: route.priceFrom,
    origin: route.origin,
    destination: route.destination,
    path: `/${route.slug}`,
  });

  const relatedRoutes = POPULAR_ROUTES.filter((r) => r.slug !== route.slug).slice(0, 4);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Overview */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>100% Xe Điện VinFast Đón Trả Tận Nơi</span>
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {route.name}
                </h1>

                <p className="text-base text-slate-600 leading-relaxed">
                  {route.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 pt-2">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Cự ly di chuyển: <strong>{route.distance}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Thời gian ước tính: <strong>{route.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-100/70 text-emerald-900 px-3 py-1.5 rounded-lg font-bold">
                    <span>Giá ghép chỉ từ: <strong>{formatVND(route.priceFrom)}</strong>/ghế</span>
                  </div>
                </div>
              </div>

              {/* Fast Booking CTA Card */}
              <div className="lg:col-span-4 bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Đặt Xe Nhanh Tuyến Này
                  </span>
                  <p className="text-sm text-slate-300">
                    Xe xuất phát liên tục từ 4h sáng đến 23h đêm. Đón tại cửa nhà quý khách.
                  </p>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/dat-xe?service=xeghep&route=${encodeURIComponent(route.name)}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-center font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                    <span>Điền Form Đặt Xe Ngay</span>
                  </Link>

                  <a
                    href={COMPANY_INFO.hotlineHref}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-center font-bold text-xs border border-white/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                    <span>Gọi Hotline: {COMPANY_INFO.hotline}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bảng Giá Chi Tiết Theo Tuyến */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>Bảng Giá Niêm Yết Tuyến {route.name}</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 text-xs sm:text-sm">
                    <th className="py-3 px-4">Loại Hình Dịch Vụ</th>
                    <th className="py-3 px-4">Dòng Xe Phục Vụ</th>
                    <th className="py-3 px-4">Cước 1 Chiều</th>
                    <th className="py-3 px-4">Cước Khứ Hồi 2 Chiều</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">Ghép 1 ghế (tiết kiệm)</td>
                    <td className="py-3.5 px-4">VinFast VF5, VFe34, VF8</td>
                    <td className="py-3.5 px-4 font-black text-emerald-700">{formatVND(route.priceFrom)}</td>
                    <td className="py-3.5 px-4 text-slate-600">Theo lượt đi</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">Bao trọn xe 5 chỗ riêng</td>
                    <td className="py-3.5 px-4">VinFast VF5, VFe34, VF8</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{formatVND(route.priceCharter5Seats)}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700">
                      {formatVND(Math.round(route.priceCharter5Seats * 1.7))} (Giảm 30% chiều về)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">Bao trọn xe 7 chỗ gia đình</td>
                    <td className="py-3.5 px-4">VinFast VF9, Fortuner, Xpander</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{formatVND(route.priceCharter7Seats)}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700">
                      {formatVND(Math.round(route.priceCharter7Seats * 1.7))} (Giảm 30% chiều về)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">Gửi đồ / Tài liệu hỏa tốc</td>
                    <td className="py-3.5 px-4">Giao nhận tận nơi</td>
                    <td className="py-3.5 px-4 font-bold text-slate-700">{formatVND(Math.round(route.priceFrom * 0.6))}</td>
                    <td className="py-3.5 px-4 text-slate-500">Giao trong ngày</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span>Giá đã bao gồm vé cầu đường cao tốc, cam kết không tăng giá kể cả ngày cuối tuần.</span>
            </p>
          </div>

          {/* Lộ Trình Đón Trả & Quy Trình Đặt Xe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Điểm đón trả */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Khu Vực Đón & Trả Khách</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <strong className="text-slate-900 block mb-1">Khu vực Hà Nội đón:</strong>
                  <ul className="list-disc pl-5 space-y-1">
                    {route.pickups.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <strong className="text-slate-900 block mb-1">Điểm trả tại địa phương:</strong>
                  <ul className="list-disc pl-5 space-y-1">
                    {route.dropoffs.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quy trình đặt xe 4 bước */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Quy Trình Đặt Chuyến Đi</span>
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Liên hệ đặt chuyến</h3>
                    <p className="text-xs text-slate-600">Điền form trực tuyến hoặc gọi hotline/Zalo 0858.911.247.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Tổng đài xác nhận 5 phút</h3>
                    <p className="text-xs text-slate-600">Xác nhận điểm đón chính xác và giờ khởi hành phù hợp.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Tài xế đón tận nơi</h3>
                    <p className="text-xs text-slate-600">Tài xế lái xe VinFast gọi trước 15 phút, đón đúng giờ tại sảnh.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Về đích & thanh toán</h3>
                    <p className="text-xs text-slate-600">Trả tại cửa nhà, thanh toán tiền mặt hoặc chuyển khoản.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Câu Hỏi Thường Gặp FAQ */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>Câu Hỏi Thường Gặp Về Tuyến {route.name}</span>
            </h2>

            <div className="space-y-4">
              {route.faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                    <span className="text-emerald-700 font-black">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tuyến Liên Quan */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Các Tuyến Xe Ghép Liên Tỉnh Khác
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 mb-1">
                      {r.name}
                    </h3>
                    <span className="text-xs text-slate-500">{r.distance} • {r.duration}</span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-emerald-700">
                      từ {formatVND(r.priceFrom)}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
