"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company-info";
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Mail } from "lucide-react";

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Liên hệ", path: "/lien-he" },
  ];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Thông Tin Kết Nối
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Liên Hệ Xe Ghép Lubi — Phục Vụ 24/7
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Quý khách có nhu cầu đặt xe, phản ánh chất lượng dịch vụ hoặc liên hệ hợp tác kinh doanh, vui lòng kết nối với chúng tôi qua các kênh dưới đây.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* Cột Trái: Thông tin liên hệ trực tiếp */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Thông Tin Trụ Sở Chính
                </h2>

                <div className="space-y-5 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Địa chỉ văn phòng:</strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Hotline Tổng Đài 24/7:</strong>
                      <a
                        href={COMPANY_INFO.hotlineHref}
                        className="text-base sm:text-lg font-black text-amber-600 hover:underline block"
                      >
                        {COMPANY_INFO.hotline}
                      </a>
                      <span className="text-xs text-slate-500">Hỗ trợ cuộc gọi thường & Zalo</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Thời gian hoạt động:</strong>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {COMPANY_INFO.workingHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">Email liên hệ:</strong>
                      <p className="text-xs sm:text-sm text-slate-600">
                        contact@xeghephanoi.vn
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex gap-3">
                  <a
                    href={COMPANY_INFO.zaloHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Nhắn Tin Zalo</span>
                  </a>

                  <a
                    href={COMPANY_INFO.hotlineHref}
                    className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Gọi Ngay</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cột Phải: Form Gửi Tin Nhắn Phản Hồi */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Gửi Tin Nhắn Cho Xe Ghép Lubi
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Để lại lời nhắn, chúng tôi sẽ liên hệ lại qua điện thoại hoặc Zalo trong vòng 10 phút.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Đã Gửi Tin Nhắn Thành Công!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Cảm ơn <strong>{name}</strong>. Bộ phận chăm sóc khách hàng của Lubi sẽ liên hệ lại qua số <strong>{phone}</strong> trong ít phút.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline pt-2"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Họ và Tên Của Bạn <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Số Điện Thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0858911247"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nội Dung Tin Nhắn / Yêu Cầu Chuyến Đi
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Nhập nội dung cần hỗ trợ, lộ trình chuyến xe hoặc câu hỏi của bạn..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi Tin Nhắn Phản Hồi</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bản đồ Google Maps nhúng */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>Vị Trí Trụ Sở Trên Bản Đồ (Xuân Mai Tower, Hà Đông)</span>
            </h2>

            <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="Bản đồ vị trí Công ty Cổ phần Đầu tư Lubi Việt Nam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.728956891253!2d105.77259657596856!3d20.96340248999818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135cd29b13cf147%3A0xe54ef5a242207b5a!2zWHXDom4gTWFpIFRvd2VyIEjDoCDEkMO0bmc!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
