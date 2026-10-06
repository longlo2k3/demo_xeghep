import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { COMPANY_INFO, FIVE_COMMITMENTS } from "@/data/company-info";
import { Zap, ShieldCheck, Award, Users, CalendarCheck, Phone } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Giới Thiệu Công Ty Cổ Phần Đầu Tư Lubi Việt Nam - Xe Ghép Xanh",
  description:
    "Tìm hiểu về Công ty Cổ phần Đầu tư Lubi Việt Nam. Sứ mệnh tiên phong giao thông xanh bằng 100% xe điện VinFast, dịch vụ xe ghép và taxi sân bay văn minh, hiện đại.",
  path: "/gioi-thieu",
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/gioi-thieu" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Về Chúng Tôi
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Công Ty Cổ Phần Đầu Tư Lubi Việt Nam
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Tiên phong kiến tạo trải nghiệm xe ghép liên tỉnh và taxi sân bay thế hệ mới: 100% Thuần Điện - Văn Minh - Đúng Giờ.
            </p>
          </div>

          {/* Sứ mệnh & Tầm nhìn */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  Sứ Mệnh Di Chuyển Xanh
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Thay Đổi Thói Quen Đi Lại Với Đội Xe Điện VinFast
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Được thành lập với khát vọng nâng tầm dịch vụ vận tải hành khách tại Việt Nam, Lubi tự hào là đơn vị tiên phong đầu tư và chuẩn hóa toàn bộ phương tiện dưới 7 chỗ sang dòng xe điện thông minh của <strong>VinFast (VF5, VFe34, VF8, VF9)</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Chúng tôi xóa bỏ hoàn toàn định kiến về cảnh chen chúc, bắt khách nhồi nhét hay mùi say xe nồng nặc của các chuyến xe truyền thống, mang lại không gian thư giãn, tiện nghi cho mọi gia đình.
                </p>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <span className="text-3xl font-black text-emerald-700">100%</span>
                  <p className="text-xs font-bold text-slate-800">Xe Điện VinFast</p>
                  <p className="text-[11px] text-slate-500">Đời mới 2024-2026</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <span className="text-3xl font-black text-emerald-700">50K+</span>
                  <p className="text-xs font-bold text-slate-800">Khách Hàng Tin Cậy</p>
                  <p className="text-[11px] text-slate-500">Mỗi năm trên toàn quốc</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <span className="text-3xl font-black text-emerald-700">24/7</span>
                  <p className="text-xs font-bold text-slate-800">Phục Vụ Không Nghỉ</p>
                  <p className="text-[11px] text-slate-500">Kể cả lễ Tết, đêm muộn</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <span className="text-3xl font-black text-emerald-700">4.9★</span>
                  <p className="text-xs font-bold text-slate-800">Đánh Giá Hài Lòng</p>
                  <p className="text-[11px] text-slate-500">Từ phản hồi khách hàng</p>
                </div>
              </div>
            </div>
          </div>

          {/* Đội ngũ & Cam kết */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Đội Ngũ Lái Xe & Tiêu Chuẩn Phục Vụ Chuẩn Mực
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mỗi tài xế của Xe Ghép Lubi đều trải qua quá trình tuyển chọn khắt khe, xác minh lý lịch tư pháp rõ ràng và được tập huấn kỹ năng ứng xử, lái xe an toàn trên các tuyến cao tốc:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <Users className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-slate-900">Thân Thiện & Nhã Nhặn</h3>
                <p className="text-xs text-slate-600">Luôn giữ thái độ tôn trọng, hỗ trợ mang vác hành lý cho người già, phụ nữ và trẻ em.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <Award className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-slate-900">Tay Lái Vững Vàng</h3>
                <p className="text-xs text-slate-600">Hơn 5 năm kinh nghiệm chạy tuyến đường dài, tuân thủ nghiêm ngặt tốc độ và luật giao thông.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-slate-900">Đúng Giờ Tuyệt Đối</h3>
                <p className="text-xs text-slate-600">Chủ động liên hệ trước 15-20 phút, cam kết không để hành khách phải chờ đợi lỡ việc.</p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold">Trải Nghiệm Dịch Vụ Xe Ghép Xanh Ngay Hôm Nay</h3>
              <p className="text-xs text-slate-300">Tổng đài viên sẵn sàng hỗ trợ sắp xếp cuốc xe nhanh chóng.</p>
            </div>

            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/dat-xe"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 font-extrabold text-sm text-white shadow-md"
              >
                Đặt Xe Ngay
              </Link>
              <a
                href={COMPANY_INFO.hotlineHref}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-sm text-white border border-white/20"
              >
                Hotline 24/7
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
