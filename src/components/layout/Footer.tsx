import Link from "next/link";
import { Phone, MapPin, Clock, Zap, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company-info";
import { POPULAR_ROUTES } from "@/data/routes";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-28 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Cột 1: Thông tin pháp lý & Công ty */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Zap className="w-6 h-6 text-emerald-200" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  XE GHÉP <span className="text-emerald-400">LUBI</span>
                </span>
                <p className="text-xs text-slate-400">xeghephanoi.vn</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-semibold">
              {COMPANY_INFO.name}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Đơn vị tiên phong cung cấp giải pháp di chuyển xe ghép liên tỉnh & taxi sân bay bằng 100% dòng xe điện VinFast văn minh, tiết kiệm và bảo vệ môi trường.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY_INFO.hotlineHref}
                  className="text-amber-400 font-bold hover:underline"
                >
                  Hotline: {COMPANY_INFO.hotline} (24/7)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Cột 2: Tuyến xe ghép trọng điểm */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Tuyến Xe Ghép Nổi Bật</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {POPULAR_ROUTES.slice(0, 6).map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/${route.slug}`}
                    className="hover:text-emerald-400 transition-colors flex items-center justify-between py-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {route.name}
                    </span>
                    <span className="text-xs text-emerald-500 font-medium">
                      chỉ từ {new Intl.NumberFormat("vi-VN").format(route.priceFrom)}đ
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/dich-vu-xe-ghep"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
                >
                  Xem tất cả các tuyến liên tỉnh &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Hỗ Trợ Khách Hàng</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/gioi-thieu" className="hover:text-emerald-400 transition-colors">
                  Giới thiệu Công ty Lubi
                </Link>
              </li>
              <li>
                <Link href="/dich-vu-xe-ghep" className="hover:text-emerald-400 transition-colors">
                  Dịch vụ xe ghép giá rẻ
                </Link>
              </li>
              <li>
                <Link href="/taxi-dua-don-san-bay-noi-bai" className="hover:text-emerald-400 transition-colors">
                  Taxi đưa đón sân bay Nội Bài 24/7
                </Link>
              </li>
              <li>
                <Link href="/taxi-duong-dai" className="hover:text-emerald-400 transition-colors">
                  Taxi đường dài liên tỉnh trọn gói
                </Link>
              </li>
              <li>
                <Link href="/bang-gia" className="hover:text-emerald-400 transition-colors">
                  Bảng giá niêm yết công khai
                </Link>
              </li>
              <li>
                <Link href="/dang-ky-doi-tac" className="hover:text-emerald-400 transition-colors">
                  Đăng ký đối tác tài xế & nhà xe
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="hover:text-emerald-400 transition-colors">
                  Kinh nghiệm & Cẩm nang đi xe
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-emerald-400 transition-colors">
                  Liên hệ tổng đài & Khiếu nại
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Cam kết & Kết nối */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold mb-4">
              Cam Kết Dịch Vụ Vàng
            </h3>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                100% Giá Trọn Gói - Không Phụ Phí
              </p>
              <p className="text-slate-400 leading-relaxed">
                Đón trả tận nhà, theo dõi sát sao giờ chuyến bay, cam kết đón đúng giờ và hoàn tiền nếu tài xế đến trễ ảnh hưởng lịch trình của quý khách.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-2">Tư vấn đặt xe tức thì qua Zalo:</p>
              <a
                href={COMPANY_INFO.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Nhắn tin Zalo: {COMPANY_INFO.hotline}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-4">
            <Link href="/bang-gia" className="hover:text-slate-400">
              Điều khoản dịch vụ
            </Link>
            <Link href="/lien-he" className="hover:text-slate-400">
              Chính sách bảo mật
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
