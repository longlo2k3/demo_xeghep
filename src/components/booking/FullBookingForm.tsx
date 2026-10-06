"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CalendarCheck, ShieldCheck, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { POPULAR_ROUTES } from "@/data/routes";
import { COMPANY_INFO } from "@/data/company-info";
import { formatVND } from "@/lib/utils";

export function FullBookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceType, setServiceType] = useState<"xeghep" | "sanbay" | "duongdai">("xeghep");
  const [selectedRouteName, setSelectedRouteName] = useState(POPULAR_ROUTES[0].name);
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [vehicleType, setVehicleType] = useState("Xe 5 chỗ (VinFast EV)");
  const [tripDirection, setTripDirection] = useState<"1chieu" | "2chieu">("1chieu");
  const [travelDate, setTravelDate] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);
  const [notes, setNotes] = useState("");

  // Validation errors
  const [errors, setErrors] = useState<{ name?: string; phone?: string; pickup?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync from URL search params on mount
  useEffect(() => {
    const s = searchParams.get("service");
    if (s === "sanbay") setServiceType("sanbay");
    if (s === "duongdai") setServiceType("duongdai");

    const r = searchParams.get("route");
    if (r) setSelectedRouteName(decodeURIComponent(r));

    const d = searchParams.get("district");
    if (d) setPickupAddress(decodeURIComponent(d));

    // Default travel date to tomorrow if empty
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setTravelDate(tomorrow.toISOString().split("T")[0]);
    setTravelTime("08:00");
  }, [searchParams]);

  // Price estimate calculation
  let estimatedPrice = 300000;
  if (serviceType === "xeghep") {
    const matchedRoute = POPULAR_ROUTES.find((r) => r.name === selectedRouteName) || POPULAR_ROUTES[0];
    estimatedPrice = matchedRoute.priceFrom * passengerCount;
    if (vehicleType.includes("Bao trọn")) estimatedPrice = matchedRoute.priceCharter5Seats;
  } else if (serviceType === "sanbay") {
    estimatedPrice = 200000;
    if (tripDirection === "2chieu") estimatedPrice = 400000;
  } else {
    estimatedPrice = 850000;
    if (tripDirection === "2chieu") estimatedPrice = 1350000;
  }

  const validate = () => {
    const newErrors: { name?: string; phone?: string; pickup?: string } = {};
    if (!fullName.trim()) newErrors.name = "Vui lòng nhập họ và tên của bạn.";

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneNumber.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại liên hệ.";
    } else if (!phoneRegex.test(phoneNumber.replace(/\s+/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ (cần 10 chữ số).";
    }

    if (!pickupAddress.trim()) newErrors.pickup = "Vui lòng nhập địa chỉ đón chi tiết.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Generate simulated Booking Code (LB + 6 digits)
    const bookingCode = `LB${Math.floor(100000 + Math.random() * 900000)}`;

    const params = new URLSearchParams({
      code: bookingCode,
      name: fullName,
      phone: phoneNumber,
      service: serviceType,
      route: selectedRouteName,
      pickup: pickupAddress,
      dropoff: dropoffAddress || "Theo lộ trình tuyến",
      date: travelDate,
      time: travelTime,
      price: estimatedPrice.toString(),
    });

    setTimeout(() => {
      router.push(`/dat-xe/thanh-cong?${params.toString()}`);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8">
      {/* Bước 1: Thông tin liên hệ */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">
            1
          </span>
          <span>Thông Tin Khách Hàng</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="customer-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Họ và Tên Quý Khách <span className="text-red-500">*</span>
            </label>
            <input
              id="customer-name"
              type="text"
              placeholder="Ví dụ: Nguyễn Văn An"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.name ? "border-red-500 bg-red-50/30" : "border-slate-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="customer-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Số Điện Thoại (Có Zalo) <span className="text-red-500">*</span>
            </label>
            <input
              id="customer-phone"
              type="tel"
              placeholder="Ví dụ: 0858911247"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.phone ? "border-red-500 bg-red-50/30" : "border-slate-300"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bước 2: Thông tin chuyến đi */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">
            2
          </span>
          <span>Chi Tiết Lộ Trình & Loại Dịch Vụ</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          <div>
            <label htmlFor="service-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Loại Dịch Vụ
            </label>
            <select
              id="service-type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value as any)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="xeghep">Xe ghép liên tỉnh</option>
              <option value="sanbay">Đưa đón sân bay Nội Bài</option>
              <option value="duongdai">Taxi đường dài liên tỉnh</option>
            </select>
          </div>

          <div>
            <label htmlFor="selected-route" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Tuyến Đường Quan Tâm
            </label>
            <select
              id="selected-route"
              value={selectedRouteName}
              onChange={(e) => setSelectedRouteName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {POPULAR_ROUTES.map((r) => (
                <option key={r.slug} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="vehicle-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Loại Phương Tiện
            </label>
            <select
              id="vehicle-select"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Xe 5 chỗ (VinFast EV)">Xe 5 chỗ (Ghép ghế VinFast)</option>
              <option value="Bao trọn xe 5 chỗ">Bao trọn xe 5 chỗ (VF5/VF8)</option>
              <option value="Bao trọn xe 7 chỗ">Bao trọn xe 7 chỗ rộng rãi</option>
              <option value="Xe 16 chỗ Ford Transit">Xe 16 chỗ hợp đồng</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="pickup-loc" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Địa Điểm Đón Chi Tiết <span className="text-red-500">*</span>
            </label>
            <input
              id="pickup-loc"
              type="text"
              placeholder="Số nhà, tên ngõ, tòa nhà hoặc điểm đón..."
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.pickup ? "border-red-500 bg-red-50/30" : "border-slate-300"
              }`}
            />
            {errors.pickup && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errors.pickup}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="dropoff-loc" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Địa Điểm Trả Yêu Cầu
            </label>
            <input
              id="dropoff-loc"
              type="text"
              placeholder="Địa chỉ trả tại tỉnh hoặc nội thành..."
              value={dropoffAddress}
              onChange={(e) => setDropoffAddress(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div>
            <label htmlFor="travel-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Ngày Đi
            </label>
            <input
              id="travel-date"
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="travel-time" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Giờ Đón Dự Kiến
            </label>
            <input
              id="travel-time"
              type="time"
              value={travelTime}
              onChange={(e) => setTravelTime(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="direction-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Hình Thức
            </label>
            <select
              id="direction-select"
              value={tripDirection}
              onChange={(e) => setTripDirection(e.target.value as any)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="1chieu">1 Chiều</option>
              <option value="2chieu">2 Chiều (Khứ hồi trong ngày)</option>
            </select>
          </div>

          <div>
            <label htmlFor="passenger-num" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Số Lượng Khách
            </label>
            <input
              id="passenger-num"
              type="number"
              min={1}
              max={16}
              value={passengerCount}
              onChange={(e) => setPassengerCount(Number(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="extra-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Ghi Chú Thêm (Hành lý, yêu cầu ghế trẻ em, số hiệu chuyến bay...)
          </label>
          <textarea
            id="extra-notes"
            rows={2}
            placeholder="Ví dụ: Có 1 vali to, đón tại sảnh T1 Nội Bài chuyến bay VJ123 lúc 14h..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Bước 3: Xác nhận giá và gửi */}
      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">
            Cước Phí Dự Kiến (Đã bao gồm vé cầu đường):
          </span>
          <span className="text-3xl font-black text-emerald-700">
            {formatVND(estimatedPrice)}
          </span>
          <span className="text-xs text-slate-500 block mt-1">
            *Vé xe và giờ đón chính xác sẽ được tổng đài xác nhận lại qua Zalo hoặc điện thoại.
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-extrabold text-base shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <CalendarCheck className="w-5 h-5" aria-hidden="true" />
          <span>{isSubmitting ? "Đang Gửi Đơn..." : "Xác Nhận Đặt Xe"}</span>
        </button>
      </div>

      <div className="text-xs text-slate-500 space-y-1.5 pt-2">
        <p className="flex items-center gap-1.5 text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
          <span>Cam kết 100% không phát sinh phụ phí ẩn. Hủy chuyến hoặc đổi giờ miễn phí trước 1 giờ.</span>
        </p>
        <p className="flex items-center gap-1.5 text-slate-600">
          <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
          <span>Đối với các tuyến đường khác không có trong danh sách, quý khách vui lòng liên hệ hotline: <strong>{COMPANY_INFO.hotline}</strong>.</span>
        </p>
      </div>
    </form>
  );
}
