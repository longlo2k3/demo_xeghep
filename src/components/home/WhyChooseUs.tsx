import { Zap, DollarSign, Clock, CreditCard } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      id: "dat-xe-nhanh",
      title: "Dàn Xe Điện VinFast Đời Mới",
      description: "100% dòng xe VinFast VF5, VFe34, VF8, VF9 vận hành êm ái, điều hòa mát lạnh, không gian nội thất sạch tinh tươm và hoàn toàn không mùi say xe.",
      icon: <Zap className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    },
    {
      id: "gia-tot-nhat",
      title: "Giá Tốt Nhất & Không Phát Sinh",
      description: "Mức giá công khai minh bạch ngay từ lúc đặt xe. Đã bao gồm trọn gói vé cầu đường, cao tốc và vé vào cổng sân bay Nội Bài. Không tăng giá giờ cao điểm.",
      icon: <DollarSign className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    },
    {
      id: "dung-gio-tan-tam",
      title: "Đúng Giờ & Tối Đa 2 Điểm Đón",
      description: "Cam kết đón đúng giờ hẹn. Quy định chỉ đón tối đa 2 điểm ghép để đảm bảo hành khách không phải đi vòng vèo, rút ngắn tối đa thời gian di chuyển.",
      icon: <Clock className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    },
    {
      id: "thanh-toan-linh-hoat",
      title: "Thanh Toán Đa Dạng Linh Hoạt",
      description: "Chấp nhận nhiều hình thức thanh toán thuận tiện: tiền mặt cho lái xe sau chuyến đi, chuyển khoản ngân hàng QR Code 24/7 (hỗ trợ cả VND & USD).",
      icon: <CreditCard className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block">
              Giá Trị Khác Biệt
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Vì Sao Hơn 50.000+ Khách Hàng Chọn Xe Ghép Lubi?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Chúng tôi không chỉ chở khách, chúng tôi trao gửi sự an tâm, thoải mái và trải nghiệm di chuyển chất lượng cao trên mỗi dặm đường.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-slate-900 text-white space-y-3 shadow-lg">
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider block">
                Tổng Đài Điều Hành 24/7
              </span>
              <p className="text-2xl font-black tracking-tight text-white">
                0858.911.247
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nhân viên tổng đài luôn sẵn sàng lắng nghe, sắp xếp xe nhanh chóng kể cả đêm muộn và sáng sớm.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
