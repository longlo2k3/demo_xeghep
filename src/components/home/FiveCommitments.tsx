import { Zap, BadgePercent, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { FIVE_COMMITMENTS } from "@/data/company-info";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
  BadgePercent: <BadgePercent className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
};

export function FiveCommitments() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
            Chất Lượng Vượt Trội
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            5 Cam Kết Vàng Từ Xe Ghép Lubi
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Chúng tôi định nghĩa lại trải nghiệm đi xe ghép bằng sự chuyên nghiệp, minh bạch và tiêu chuẩn dịch vụ cao cấp nhất miền Bắc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {FIVE_COMMITMENTS.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  {iconMap[item.iconName] || <Zap className="w-6 h-6 text-emerald-600" />}
                </div>
                <div className="text-xs font-bold text-slate-400 mb-1">Cam kết 0{index + 1}</div>
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
    </section>
  );
}
