import Link from "next/link";
import { Handshake, ArrowRight, ShieldCheck, DollarSign } from "lucide-react";

export function PartnerCallout() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Cơ Hội Hợp Tác Bền Vững</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Đồng Hành Cùng Lubi — Tăng Trưởng Thu Nhập Cùng Mạng Lưới Xe Ghép
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Bạn là chủ phương tiện ô tô 5-7 chỗ (đặc biệt xe điện VinFast) hoặc doanh nghiệp vận tải? Hãy gia nhập cộng đồng tài xế Lubi để tối ưu tỷ lệ kín chỗ hai chiều, nhận cuốc xe đều đặn mỗi ngày.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start text-xs sm:text-sm text-emerald-200">
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Thu nhập 15–35 triệu/tháng</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Chiết khấu minh bạch</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <Link
              href="/dang-ky-doi-tac"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-black text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Đăng Ký Đối Tác Ngay</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
