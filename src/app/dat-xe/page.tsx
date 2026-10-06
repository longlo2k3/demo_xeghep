import { Suspense } from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FullBookingForm } from "@/components/booking/FullBookingForm";
import { Zap, ShieldCheck, Clock, Headphones } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Đặt Xe Trực Tuyến - Xe Ghép & Taxi Sân Bay Nhanh Chóng",
  description:
    "Đặt xe ghép Hà Nội đi các tỉnh và taxi đưa đón sân bay Nội Bài 24/7. Nhận báo giá tức thì, xác nhận đơn trong 5 phút, 100% xe điện VinFast đời mới.",
  path: "/dat-xe",
});

export default function BookingPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Đặt xe", path: "/dat-xe" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Biểu Mẫu Đặt Chỗ Trực Tuyến
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Đặt Xe Ghép & Taxi Sân Bay Nội Bài
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Điền thông tin chuyến đi bên dưới để nhận ước tính giá cước chuẩn xác. Tổng đài viên Lubi sẽ liên hệ xác nhận lộ trình trong vòng 5 phút.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs sm:text-sm text-slate-600">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-800">
                <Zap className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>100% Xe VinFast</span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Không phát sinh phụ phí</span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-emerald-800">
                <Clock className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Đón trả tận nhà</span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-emerald-800">
                <Headphones className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Hỗ trợ 24/7</span>
              </span>
            </div>
          </div>

          <Suspense fallback={<div className="p-12 text-center text-slate-500">Đang tải biểu mẫu đặt xe...</div>}>
            <FullBookingForm />
          </Suspense>
        </div>
      </div>
    </>
  );
}
