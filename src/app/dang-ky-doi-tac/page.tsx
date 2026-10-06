"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DollarSign, ShieldCheck, Users, CheckCircle2, Phone, Handshake } from "lucide-react";
import { COMPANY_INFO } from "@/data/company-info";

export default function PartnerRegistrationPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Đăng ký đối tác", path: "/dang-ky-doi-tac" },
  ];

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleModel, setVehicleModel] = useState("VinFast VF5");
  const [licensePlate, setLicensePlate] = useState("");
  const [operatingArea, setOperatingArea] = useState("Hà Nội ⇄ Ninh Bình");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Mạng Lưới Đối Tác Vận Tải
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hợp Tác Đối Tác Lái Xe & Nhà Xe Cùng Lubi
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Tối ưu các chuyến xe rỗng chiều về, tăng thu nhập từ 15 – 35 triệu/tháng. Tham gia ngay cùng cộng đồng đối tác vận tải văn minh hàng đầu miền Bắc.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* Cột Trái: Quyền Lợi & Điều Kiện */}
            <div className="lg:col-span-7 space-y-8">
              {/* Quyền lợi */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                  <span>Quyền Lợi Dành Cho Đối Tác Lái Xe</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <strong className="text-emerald-800 block font-bold">Nguồn khách ổn định:</strong>
                    <p className="text-xs text-slate-600">Hàng trăm cuốc xe ghép và đưa đón sân bay Nội Bài phân bổ liên tục mỗi ngày.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <strong className="text-emerald-800 block font-bold">Tối ưu chiều về:</strong>
                    <p className="text-xs text-slate-600">Tuyệt đối không lo chạy xe rỗng, ghép khách nhanh chóng trên cùng trục cao tốc.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <strong className="text-emerald-800 block font-bold">Chiết khấu thấp:</strong>
                    <p className="text-xs text-slate-600">Tỷ lệ chia sẻ doanh thu tốt nhất thị trường, quyết toán linh hoạt trong ngày.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <strong className="text-emerald-800 block font-bold">Hỗ trợ 24/7:</strong>
                    <p className="text-xs text-slate-600">Đội ngũ tổng đài viên điều hành hỗ trợ điều phối sự cố, dẫn đường tận tâm.</p>
                  </div>
                </div>
              </div>

              {/* Điều kiện tham gia */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                  <span>Điều Kiện Tiêu Chuẩn Tham Gia Đội Xe</span>
                </h2>

                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Phương tiện:</strong> Ô tô từ 5 đến 16 chỗ đời từ 2020 trở lên (ưu tiên đặc biệt các dòng xe điện VinFast VF5, VFe34, VF8).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Pháp lý xe:</strong> Đăng ký, đăng kiểm, bảo hiểm trách nhiệm dân sự bắt buộc còn hạn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Lái xe:</strong> Giấy phép lái xe hạng B2/D trở lên, lý lịch trong sạch, thái độ phục vụ văn minh, lịch thiệp.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cột Phải: Form Đăng Ký Đối Tác */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Đăng Ký Gia Nhập Đội Xe</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Vui lòng điền thông tin bên dưới. Bộ phận tuyển dụng đối tác sẽ liên hệ phỏng vấn trong 24 giờ.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Gửi Hồ Sơ Thành Công!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cảm ơn <strong>{fullName}</strong>. Phòng vận hành đối tác Lubi sẽ liên hệ trực tiếp qua số <strong>{phone}</strong> để hướng dẫn các bước tiếp theo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline pt-2"
                  >
                    Gửi lại thông tin khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Họ và Tên Tài Xế <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Số Điện Thoại (Có Zalo) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0987654321"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Loại Xe Đang Sở Hữu
                      </label>
                      <input
                        type="text"
                        placeholder="VinFast VF5, VF8..."
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Biển Số Xe
                      </label>
                      <input
                        type="text"
                        placeholder="30A-123.45"
                        value={licensePlate}
                        onChange={(e) => setLicensePlate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Khu Vực / Tuyến Thường Chạy
                    </label>
                    <input
                      type="text"
                      placeholder="Hà Nội ⇄ Ninh Bình, Nội Bài..."
                      value={operatingArea}
                      onChange={(e) => setOperatingArea(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Ghi Chú Thêm
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Kinh nghiệm lái xe, khung giờ rảnh..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Gửi Hồ Sơ Đăng Ký Ngay
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Hoặc liên hệ hotline tuyển dụng: <strong>{COMPANY_INFO.hotline}</strong>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
