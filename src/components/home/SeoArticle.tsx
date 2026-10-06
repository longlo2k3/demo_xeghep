import Link from "next/link";
import { Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import { POPULAR_ROUTES } from "@/data/routes";
import { COMPANY_INFO } from "@/data/company-info";

export function SeoArticle() {
  return (
    <article className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
            Cẩm Nang & Giới Thiệu Chuyên Sâu
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dịch Vụ Xe Ghép Hà Nội: Xu Hướng Di Chuyển Xanh, Tiết Kiệm & Tiện Lợi Nhất 2026
          </h2>
        </header>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
          <p>
            Trong bối cảnh nhu cầu đi lại giữa thủ đô Hà Nội và các tỉnh thành lân cận ngày càng tăng cao, mô hình <strong>xe ghép liên tỉnh</strong> (hay còn gọi là xe tiện chuyến) đã vươn lên trở thành giải pháp di chuyển được đông đảo người dân, cán bộ công chức, học sinh sinh viên và khách du lịch lựa chọn. Khắc phục hoàn toàn những nhược điểm cố hữu của xe khách truyền thống (phải chen chúc ra bến, bắt khách dọc đường, phụ thu vô tội vạ), dịch vụ xe ghép của <strong>{COMPANY_INFO.name}</strong> mang đến trải nghiệm <em>đón tận nhà, trả tận nơi</em> với chi phí chỉ bằng một phần nhỏ so với taxi truyền thống.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-600" aria-hidden="true" />
            <span>1. Vì sao nên chọn xe ghép điện VinFast thay vì xe chạy xăng dầu?</span>
          </h3>
          <p>
            Một trong những rào cản lớn nhất của hành khách khi đi xe đường dài chính là tình trạng say xe do mùi xăng dầu và tiếng ồn rung lắc của động cơ đốt trong. Thấu hiểu điều đó, Xe Ghép Lubi đã đầu tư 100% dàn xe điện thông minh <strong>VinFast VF5, VFe34, VF8</strong> vào vận hành:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Không mùi xăng xe:</strong> Động cơ thuần điện hoàn toàn triệt tiêu khí thải và mùi xăng khó chịu, mang lại bầu không khí trong lành, dễ chịu suốt hành trình.
            </li>
            <li>
              <strong>Vận hành êm ái, cách âm tuyệt đối:</strong> Khả năng cách âm hàng đầu phân khúc giúp hành khách có thể chợp mắt nghỉ ngơi hoặc làm việc với máy tính xách tay một cách trọn vẹn.
            </li>
            <li>
              <strong>Bảo vệ môi trường xanh:</strong> Mỗi chuyến xe ghép điện góp phần giảm thiểu lượng lớn phát thải CO2 ra môi trường, chung tay vì một tương lai giao thông xanh bền vững.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
            <span>2. Mạng lưới tuyến xe ghép liên tỉnh trọng điểm tại Lubi</span>
          </h3>
          <p>
            Hiện tại, Xe Ghép Lubi phục vụ đều đặn hàng trăm chuyến xe mỗi ngày kết nối Hà Nội với toàn bộ các tỉnh thành thuộc khu vực Đồng bằng sông Hồng và Trung du Bắc Bộ:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 not-prose">
            {POPULAR_ROUTES.map((route) => (
              <Link
                key={route.slug}
                href={`/${route.slug}`}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50 hover:bg-emerald-50/40 transition-colors flex items-center justify-between group"
              >
                <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                  {route.name}
                </span>
                <span className="text-xs font-extrabold text-emerald-700">
                  từ {new Intl.NumberFormat("vi-VN").format(route.priceFrom)}đ
                </span>
              </Link>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" aria-hidden="true" />
            <span>3. Dịch vụ taxi đưa đón sân bay Nội Bài 24/7 chuyên nghiệp</span>
          </h3>
          <p>
            Bên cạnh các tuyến xe ghép liên tỉnh, dịch vụ <Link href="/taxi-dua-don-san-bay-noi-bai" className="text-emerald-700 font-bold hover:underline">đưa đón sân bay Nội Bài</Link> của Lubi được đông đảo hành khách tín nhiệm. Chúng tôi theo dõi lịch trình chuyến bay thực tế, cam kết đón đúng giờ tại sảnh đến ga T1 hoặc T2. Mức giá trọn gói niêm yết từ 180.000đ - 250.000đ đã bao gồm vé vào cổng sân bay và vé cầu đường cao tốc, giúp khách hàng hoàn toàn yên tâm không bị đội giá vô lý.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            4. Hướng dẫn quy trình đặt xe nhanh chóng chỉ với 3 bước
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Bước 1 - Đăng ký chuyến đi:</strong> Điền thông tin vào form đặt xe trên website <Link href="/dat-xe" className="text-emerald-700 font-bold hover:underline">/dat-xe</Link> hoặc liên hệ trực tiếp tổng đài hotline <strong>{COMPANY_INFO.hotline}</strong> (hỗ trợ cả Zalo).
            </li>
            <li>
              <strong>Bước 2 - Xác nhận cuốc xe:</strong> Trong vòng 5 phút, điều hành viên sẽ gọi điện hoặc nhắn tin Zalo xác nhận điểm đón chi tiết, thời gian xuất phát và biển số xe tài xế đón.
            </li>
            <li>
              <strong>Bước 3 - Trải nghiệm và thanh toán:</strong> Tài xế liên hệ trước 15-20 phút và đến đúng giờ đón tại cửa nhà. Quý khách thanh toán tiền mặt hoặc chuyển khoản sau khi chuyến đi hoàn tất an toàn.
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
}
