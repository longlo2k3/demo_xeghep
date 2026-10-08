"use client";

import { useState } from "react";
import {
  MapPin,
  ArrowLeftRight,
  Phone,
  User,
  Car,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company-info";

interface BookingFormProps {
  initialOrigin?: string;
  initialDestination?: string;
  title?: string;
  compact?: boolean;
  variant?: "glass" | "solid";
}

const COMMON_LOCATIONS = [
  "Hải Phòng (Nội thành, Quán Toan)",
  "Hà Nội (Các quận nội thành)",
  "Sân bay Nội Bài",
  "Hạ Long (Bãi Cháy, Hòn Gai, Tuần Châu)",
  "Móng Cái (Cửa khẩu, Trà Cổ)",
  "Bắc Ninh (TP. Bắc Ninh, KCN Quế Võ, Yên Phong)",
  "Bắc Giang (TP. Bắc Giang, KCN Quang Châu, Đình Trám)",
  "Hải Dương (TP. Hải Dương, KCN Nam Sách)",
  "Thái Nguyên (TP. Thái Nguyên, KCN Samsung)",
];

export function BookingForm({
  initialOrigin = "",
  initialDestination = "",
  title = "ĐẶT XE TRỰC TUYẾN",
  compact = false,
  variant,
}: BookingFormProps) {
  const isGlass = variant ? variant === "glass" : compact;

  const [pickup, setPickup] = useState(initialOrigin);
  const [dropoff, setDropoff] = useState(initialDestination);
  const [rideType, setRideType] = useState<"ghep" | "bao">("ghep");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState("4cho");
  const [pickupDateTime, setPickupDateTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // Get current date string for min datetime-local
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const minDateTime = now.toISOString().slice(0, 16);

  const handleSwap = () => {
    const temp = pickup;
    setPickup(dropoff);
    setDropoff(temp);
  };

  const validatePhone = (val: string) => {
    const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    return regex.test(val.replace(/\s+/g, ""));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError("Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 số)");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  };

  return (
    <div
      id="form-dat-xe"
      className={`scroll-mt-24 rounded-2xl border overflow-hidden transition-all ${
        isGlass
          ? "bg-slate-950/20 backdrop-blur-[6px] border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] ring-1 ring-white/20"
          : "bg-white rounded-2xl border-slate-200/90 shadow-xl"
      }`}
    >
      {/* Header bar */}
      <div
        className={`text-white text-center border-b ${
          isGlass
            ? "bg-gradient-to-r from-red-600 via-red-600/75 to-red-700/60 backdrop-blur-sm border-white/20"
            : "bg-gradient-to-r from-red-600 to-red-700 border-red-700"
        } ${compact ? "p-3.5 sm:p-4" : "p-5 sm:p-6"}`}
      >
        <h2
          className={`font-black uppercase tracking-wide ${
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-0.5 ${
            isGlass ? "text-red-100/90" : "text-red-100"
          } ${compact ? "text-xs" : "text-xs sm:text-sm"}`}
        >
          Báo giá trọn gói niêm yết • Đón trả tận nhà • Miễn phí hủy chuyến
        </p>
      </div>

      <div className={compact ? "p-4 sm:p-6" : "p-6 sm:p-8"}>
        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-400/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              className={`text-xl sm:text-2xl font-extrabold ${isGlass ? "text-white" : "text-slate-900"}`}
            >
              Đặt xe thành công!
            </h3>
            <p
              className={`text-sm sm:text-base max-w-md mx-auto font-medium ${isGlass ? "text-slate-200" : "text-slate-700"}`}
            >
              Chúng tôi sẽ gọi lại trong ít phút để xác nhận điểm đón và giờ
              xuất phát của quý khách.
            </p>
            <div
              className={`p-3.5 rounded-xl border max-w-md mx-auto text-left text-xs space-y-1 ${
                isGlass
                  ? "bg-black/30 border-white/20 text-slate-200 backdrop-blur-sm"
                  : "bg-slate-50 border-slate-200 text-slate-600"
              }`}
            >
              <p>
                <strong>Khách hàng:</strong> {fullName} ({phone})
              </p>
              <p>
                <strong>Điểm đón:</strong> {pickup || "Theo thỏa thuận"}
              </p>
              <p>
                <strong>Điểm đến:</strong> {dropoff || "Theo thỏa thuận"}
              </p>
              <p>
                <strong>Hình thức:</strong>{" "}
                {rideType === "ghep" ? "Ghép ghế (1-3 khách)" : "Bao xe riêng"}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.hotlineHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md"
              >
                <Phone className="w-4 h-4 animate-pulse" />
                <span>Hoặc gọi trực tiếp: {COMPANY_INFO.hotline}</span>
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={compact ? "space-y-3.5 sm:space-y-4" : "space-y-5"}
          >
            {/* Điểm đón & Điểm đến với nút Đảo chiều ⇄ */}
            <div className="grid grid-cols-1 sm:grid-cols-11 gap-2.5 sm:gap-3 items-center">
              {/* Điểm đón */}
              <div className="sm:col-span-5 relative">
                <label
                  className={`block text-xs font-bold mb-1 flex items-center gap-1.5 ${
                    isGlass ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  <MapPin
                    className="w-3.5 h-3.5 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>Điểm đón *</span>
                </label>
                <input
                  type="text"
                  required
                  list="pickup-locations"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Điểm đón / Nơi xuất phát..."
                  className={`w-full rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500 text-xs sm:text-sm transition-all ${
                    isGlass
                      ? "bg-slate-950/25 hover:bg-slate-950/35 focus:bg-slate-950/50 border-white/20 focus:border-red-400 text-white placeholder:text-slate-400 backdrop-blur-xs"
                      : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                  } ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}
                />
                <datalist id="pickup-locations">
                  {COMMON_LOCATIONS.map((loc, i) => (
                    <option key={i} value={loc} />
                  ))}
                </datalist>
              </div>

              {/* Nút Đảo chiều (⇄) */}
              <div className="sm:col-span-1 flex justify-center pt-0 sm:pt-4">
                <button
                  type="button"
                  onClick={handleSwap}
                  className={`rounded-full flex items-center justify-center transition-colors shadow-sm ${
                    isGlass
                      ? "bg-white/10 hover:bg-red-600/40 hover:border-red-400 border border-white/25 text-white backdrop-blur-xs"
                      : "bg-slate-100 hover:bg-red-50 hover:text-red-600 border border-slate-200 text-slate-600"
                  } ${compact ? "w-8 h-8" : "w-10 h-10"}`}
                  aria-label="Hoán đổi Điểm đón và Điểm đến"
                  title="Hoán đổi chiều đi"
                >
                  <ArrowLeftRight
                    className={compact ? "w-3.5 h-3.5" : "w-4 h-4"}
                  />
                </button>
              </div>

              {/* Điểm đến */}
              <div className="sm:col-span-5 relative">
                <label
                  className={`block text-xs font-bold mb-1 flex items-center gap-1.5 ${
                    isGlass ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  <MapPin
                    className="w-3.5 h-3.5 text-red-400"
                    aria-hidden="true"
                  />
                  <span>Điểm đến *</span>
                </label>
                <input
                  type="text"
                  required
                  list="dropoff-locations"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Điểm đến / Nơi trả..."
                  className={`w-full rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500 text-xs sm:text-sm transition-all ${
                    isGlass
                      ? "bg-slate-950/25 hover:bg-slate-950/35 focus:bg-slate-950/50 border-white/20 focus:border-red-400 text-white placeholder:text-slate-400 backdrop-blur-xs"
                      : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                  } ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}
                />
                <datalist id="dropoff-locations">
                  {COMMON_LOCATIONS.map((loc, i) => (
                    <option key={i} value={loc} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Hình thức: Radio chọn Ghép ghế / Bao xe */}
            <div>
              <label
                className={`block text-xs font-bold mb-1.5 ${
                  isGlass ? "text-slate-200" : "text-slate-700"
                }`}
              >
                Hình thức di chuyển *
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <label
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border cursor-pointer font-bold transition-all ${
                    compact ? "p-2.5 text-xs" : "p-3 text-xs sm:text-sm"
                  } ${
                    rideType === "ghep"
                      ? isGlass
                        ? "bg-red-600/40 border-red-500 text-white shadow-md ring-1 ring-red-400/50 backdrop-blur-xs"
                        : "bg-red-50 border-red-500 text-red-700 shadow-sm"
                      : isGlass
                        ? "bg-white/5 border-white/15 text-slate-200 hover:bg-white/10 backdrop-blur-xs"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="rideType"
                    value="ghep"
                    checked={rideType === "ghep"}
                    onChange={() => setRideType("ghep")}
                    className="sr-only"
                  />
                  <span>Đi Ghép (1–3 Khách)</span>
                </label>

                <label
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border cursor-pointer font-bold transition-all ${
                    compact ? "p-2.5 text-xs" : "p-3 text-xs sm:text-sm"
                  } ${
                    rideType === "bao"
                      ? isGlass
                        ? "bg-red-600/40 border-red-500 text-white shadow-md ring-1 ring-red-400/50 backdrop-blur-xs"
                        : "bg-red-50 border-red-500 text-red-700 shadow-sm"
                      : isGlass
                        ? "bg-white/5 border-white/15 text-slate-200 hover:bg-white/10 backdrop-blur-xs"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="rideType"
                    value="bao"
                    checked={rideType === "bao"}
                    onChange={() => setRideType("bao")}
                    className="sr-only"
                  />
                  <span>Bao Xe (Trọn Gói)</span>
                </label>
              </div>
            </div>

            {/* Thông tin khách hàng: Họ và tên + Số điện thoại */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label
                  className={`block text-xs font-bold mb-1 flex items-center gap-1.5 ${
                    isGlass ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  <User
                    className="w-3.5 h-3.5 text-slate-400"
                    aria-hidden="true"
                  />
                  <span>Họ và tên *</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className={`w-full rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500 text-xs sm:text-sm transition-all ${
                    isGlass
                      ? "bg-slate-950/25 hover:bg-slate-950/35 focus:bg-slate-950/50 border-white/20 focus:border-red-400 text-white placeholder:text-slate-400 backdrop-blur-xs"
                      : "bg-white border-slate-300 text-slate-900"
                  } ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-bold mb-1 flex items-center gap-1.5 ${
                    isGlass ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  <Phone
                    className="w-3.5 h-3.5 text-slate-400"
                    aria-hidden="true"
                  />
                  <span>Số điện thoại *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phoneError) setPhoneError("");
                  }}
                  placeholder="Ví dụ: 0962298293"
                  className={`w-full rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                    phoneError
                      ? "border-red-500 bg-red-500/20 text-white"
                      : isGlass
                        ? "bg-slate-950/25 hover:bg-slate-950/35 focus:bg-slate-950/50 border-white/20 focus:border-red-400 text-white placeholder:text-slate-400 backdrop-blur-xs"
                        : "bg-white border-slate-300 text-slate-900"
                  } ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}
                />
                {phoneError && (
                  <p className="text-xs text-red-400 mt-1 font-semibold">
                    {phoneError}
                  </p>
                )}
              </div>
            </div>

            {/* Tùy chọn dịch vụ + Ngày và giờ đón */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label
                  className={`block text-xs font-bold mb-1 flex items-center gap-1.5 ${
                    isGlass ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  <Car
                    className="w-3.5 h-3.5 text-slate-400"
                    aria-hidden="true"
                  />
                  <span>Tùy chọn dịch vụ *</span>
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className={`w-full rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500 text-xs sm:text-sm transition-all ${
                    isGlass
                      ? "bg-slate-950/25 hover:bg-slate-950/35 focus:bg-slate-950/50 border-white/20 focus:border-red-400 text-white backdrop-blur-xs"
                      : "bg-white border-slate-300 text-slate-900"
                  } ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}
                >
                  <option
                    value="4cho"
                    className={isGlass ? "bg-slate-900 text-white" : ""}
                  >
                    Xe 4 chỗ
                  </option>
                  <option
                    value="5cho"
                    className={isGlass ? "bg-slate-900 text-white" : ""}
                  >
                    Xe 5 chỗ
                  </option>
                  <option
                    value="7cho"
                    className={isGlass ? "bg-slate-900 text-white" : ""}
                  >
                    Xe 7 chỗ
                  </option>
                  <option
                    value="guihang"
                    className={isGlass ? "bg-slate-900 text-white" : ""}
                  >
                    Gửi hàng (Hỏa tốc từ 150k)
                  </option>
                </select>
              </div>

              <div>
                <label
                  className={`block text-xs font-bold mb-1 flex items-center gap-1.5 ${
                    isGlass ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  <Calendar
                    className="w-3.5 h-3.5 text-slate-400"
                    aria-hidden="true"
                  />
                  <span>Ngày và giờ đón *</span>
                </label>
                <input
                  type="datetime-local"
                  required
                  min={minDateTime}
                  value={pickupDateTime}
                  onChange={(e) => setPickupDateTime(e.target.value)}
                  className={`w-full rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500 text-xs sm:text-sm transition-all ${
                    isGlass
                      ? "bg-slate-950/25 hover:bg-slate-950/35 focus:bg-slate-950/50 border-white/20 focus:border-red-400 text-white [color-scheme:dark] backdrop-blur-xs"
                      : "bg-white border-slate-300 text-slate-900"
                  } ${compact ? "px-3 py-2.5" : "px-4 py-3"}`}
                />
              </div>
            </div>

            {/* Nút Submit: Đặt xe ngay */}
            <div className="pt-1 sm:pt-2">
              <button
                type="submit"
                className={`w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:from-red-800 text-white font-black uppercase tracking-wider shadow-lg shadow-red-600/40 hover:shadow-xl transition-all hover:scale-[1.01] cursor-pointer border border-red-400/30 ${
                  compact ? "py-3 px-4 text-sm" : "py-4 px-6 text-base"
                }`}
              >
                Đặt xe ngay
              </button>
              <p
                className={`text-center text-[11px] sm:text-xs mt-2 flex items-center justify-center gap-1.5 ${
                  isGlass ? "text-slate-300" : "text-slate-500"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>
                  Thông tin bảo mật 100% • Tài xế liên hệ trước 15 phút
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
