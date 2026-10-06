import Link from "next/link";
import { Plane, Car, Navigation, Users, ArrowRight } from "lucide-react";

export function OurServices() {
  const services = [
    {
      id: "san-bay",
      title: "Xe Đón Tiễn Sân Bay Nội Bài",
      description: "Phục vụ 24/7 từ tất cả các quận huyện Hà Nội đi Nội Bài và ngược lại. Đón trả đúng sảnh T1/T2, theo dõi chuyến bay, giá trọn gói đã gồm vé cổng và phí cầu đường.",
      icon: <Plane className="w-7 h-7 text-emerald-600" aria-hidden="true" />,
      href: "/taxi-dua-don-san-bay-noi-bai",
      highlight: "Chỉ từ 180.000đ",
    },
    {
      id: "xe-ghep",
      title: "Xe Ghép & Bao Xe Trọn Gói",
      description: "Ghép ghế linh hoạt chỉ từ 110.000đ hoặc bao trọn xe 5-7-16 chỗ đi các tỉnh Ninh Bình, Quảng Ninh, Hải Phòng, Thái Bình, Phú Thọ... Đón tận nhà, trả tận ngõ.",
      icon: <Car className="w-7 h-7 text-emerald-600" aria-hidden="true" />,
      href: "/dich-vu-xe-ghep",
      highlight: "Chỉ từ 110.000đ",
    },
    {
      id: "duong-dai",
      title: "Dịch Vụ Taxi Đường Dài",
      description: "Chuyến đi liên tỉnh theo kilomet với biểu phí minh bạch. Xe điện VinFast VF5, VF8 êm ái, giảm tới 70% chiều về khi đi khứ hồi trong ngày, miễn phí giờ chờ đầu tiên.",
      icon: <Navigation className="w-7 h-7 text-emerald-600" aria-hidden="true" />,
      href: "/taxi-duong-dai",
      highlight: "Từ 8.000đ/km",
    },
    {
      id: "doi-tac",
      title: "Hợp Tác Đối Tác Chuyên Nghiệp",
      description: "Chương trình gia nhập mạng lưới lái xe & nhà xe đối tác Lubi. Tận dụng chuyến xe chiều về, tăng thu nhập từ 15-35 triệu/tháng với nguồn khách ổn định.",
      icon: <Users className="w-7 h-7 text-emerald-600" aria-hidden="true" />,
      href: "/dang-ky-doi-tac",
      highlight: "Hợp tác thu nhập cao",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
            Hệ Sinh Thái Dịch Vụ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dịch Vụ Vận Tải Của Chúng Tôi
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Đáp ứng toàn diện nhu cầu di chuyển cá nhân, gia đình và doanh nghiệp với tiêu chuẩn phục vụ hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-100/70 text-emerald-800 font-extrabold text-xs mb-3">
                  {svc.highlight}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>

              <Link
                href={svc.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
              >
                <span>Xem chi tiết</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
