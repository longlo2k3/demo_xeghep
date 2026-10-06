"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Car, Plane, Navigation, ArrowRight, ShieldAlert, CheckCircle2, MapPin } from "lucide-react";
import { formatVND } from "@/lib/utils";
import { AIRPORT_DISTRICT_PRICING } from "@/data/airport-pricing";
import { POPULAR_ROUTES } from "@/data/routes";

export function QuickBookingTabs() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"xeghep" | "sanbay" | "duongdai">("xeghep");

  // State Tab Xe Ghép
  const [routeSlug, setRouteSlug] = useState(POPULAR_ROUTES[0].slug);
  const [serviceType, setServiceType] = useState<"ghep" | "bao5" | "bao7" | "guido">("ghep");

  // State Tab Sân Bay
  const [airportDistrict, setAirportDistrict] = useState(AIRPORT_DISTRICT_PRICING[0].district);
  const [airportDirection, setAirportDirection] = useState<"toAirport" | "fromAirport" | "roundTrip">("toAirport");
  const [airportVehicle, setAirportVehicle] = useState<"sedan5" | "suv7" | "van16">("sedan5");

  // State Tab Đường Dài
  const [distanceKm, setDistanceKm] = useState<number>(80);
  const [longDistTripType, setLongDistTripType] = useState<"oneWay" | "roundTrip">("oneWay");
  const [longDistVehicle, setLongDistVehicle] = useState<"sedan5" | "suv7" | "van16">("sedan5");

  // Tính giá xe ghép
  const selectedRoute = POPULAR_ROUTES.find((r) => r.slug === routeSlug) || POPULAR_ROUTES[0];
  let calculatedRoutePrice = selectedRoute.priceFrom;
  if (serviceType === "bao5") calculatedRoutePrice = selectedRoute.priceCharter5Seats;
  if (serviceType === "bao7") calculatedRoutePrice = selectedRoute.priceCharter7Seats;
  if (serviceType === "guido") calculatedRoutePrice = Math.round(selectedRoute.priceFrom * 0.6);

  // Tính giá sân bay
  const selectedDistrictData =
    AIRPORT_DISTRICT_PRICING.find((d) => d.district === airportDistrict) || AIRPORT_DISTRICT_PRICING[0];
  let calculatedAirportPrice = 0;
  if (airportDirection === "toAirport") {
    calculatedAirportPrice =
      airportVehicle === "sedan5"
        ? selectedDistrictData.fromHanoiToAirport.sedan5Seats
        : airportVehicle === "suv7"
        ? selectedDistrictData.fromHanoiToAirport.suv7Seats
        : selectedDistrictData.fromHanoiToAirport.van16Seats;
  } else if (airportDirection === "fromAirport") {
    calculatedAirportPrice =
      airportVehicle === "sedan5"
        ? selectedDistrictData.fromAirportToHanoi.sedan5Seats
        : airportVehicle === "suv7"
        ? selectedDistrictData.fromAirportToHanoi.suv7Seats
        : selectedDistrictData.fromAirportToHanoi.van16Seats;
  } else {
    calculatedAirportPrice =
      airportVehicle === "sedan5"
        ? selectedDistrictData.roundTrip.sedan5Seats
        : airportVehicle === "suv7"
        ? selectedDistrictData.roundTrip.suv7Seats
        : selectedDistrictData.roundTrip.van16Seats;
  }

  // Tính giá đường dài
  let ratePerKm = longDistVehicle === "sedan5" ? 9500 : longDistVehicle === "suv7" ? 11500 : 16000;
  if (distanceKm > 100) {
    ratePerKm = longDistVehicle === "sedan5" ? 8500 : longDistVehicle === "suv7" ? 10500 : 14500;
  }
  let calculatedLongDistPrice = distanceKm * ratePerKm;
  if (longDistTripType === "roundTrip") {
    calculatedLongDistPrice = Math.round(calculatedLongDistPrice * 1.4); // 2 chiều giảm 60% chiều về
  }

  const handleBookNow = () => {
    let query = "";
    if (activeTab === "xeghep") {
      query = `service=xeghep&route=${encodeURIComponent(selectedRoute.name)}&type=${serviceType}`;
    } else if (activeTab === "sanbay") {
      query = `service=sanbay&district=${encodeURIComponent(airportDistrict)}&direction=${airportDirection}&vehicle=${airportVehicle}`;
    } else {
      query = `service=duongdai&distance=${distanceKm}&trip=${longDistTripType}&vehicle=${longDistVehicle}`;
    }
    router.push(`/dat-xe?${query}`);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
      {/* 3 Tabs Header */}
      <div className="grid grid-cols-3 bg-slate-100 p-1 sm:p-1.5 border-b border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab("xeghep")}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "xeghep"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <Car className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>Xe Ghép Tuyến</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("sanbay")}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "sanbay"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <Plane className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>Sân Bay Nội Bài</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("duongdai")}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === "duongdai"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <Navigation className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>Taxi Đường Dài</span>
        </button>
      </div>

      {/* Tab 1: Xe Ghép */}
      {activeTab === "xeghep" && (
        <div className="p-5 sm:p-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="route-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Chọn Tuyến Đường Đi
              </label>
              <select
                id="route-select"
                value={routeSlug}
                onChange={(e) => setRouteSlug(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {POPULAR_ROUTES.map((route) => (
                  <option key={route.slug} value={route.slug}>
                    {route.name} ({route.distance})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="service-type-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Hình Thức Đi
              </label>
              <select
                id="service-type-select"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="ghep">Ghép 1 ghế (Xe VinFast)</option>
                <option value="bao5">Bao trọn xe 5 chỗ (VF5, VFe34, VF8)</option>
                <option value="bao7">Bao trọn xe 7 chỗ rộng rãi</option>
                <option value="guido">Gửi hàng hóa / Tài liệu hỏa tốc</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-emerald-800 block">
                Giá cước ước tính ({selectedRoute.distance}):
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                {formatVND(calculatedRoutePrice)}
              </span>
              <span className="text-xs text-slate-500 ml-2">/ chuyến</span>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href={`/${selectedRoute.slug}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-100/50 text-xs font-bold transition-colors cursor-pointer w-1/2 sm:w-auto"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Xem Tuyến</span>
              </a>
              <button
                type="button"
                onClick={handleBookNow}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer w-1/2 sm:w-auto"
              >
                <span>Đặt Xe Ngay</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
            <span>Đón trả tận nhà, cam kết tối đa 2 điểm đón/trả, không bắt khách dọc đường.</span>
          </p>
        </div>
      )}

      {/* Tab 2: Sân Bay Nội Bài */}
      {activeTab === "sanbay" && (
        <div className="p-5 sm:p-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="airport-district" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Quận / Huyện Đón Trả
              </label>
              <select
                id="airport-district"
                value={airportDistrict}
                onChange={(e) => setAirportDistrict(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {AIRPORT_DISTRICT_PRICING.map((d) => (
                  <option key={d.district} value={d.district}>
                    {d.district}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="airport-direction" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Chiều Di Chuyển
              </label>
              <select
                id="airport-direction"
                value={airportDirection}
                onChange={(e) => setAirportDirection(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="toAirport">Hà Nội ➔ Sân Bay Nội Bài</option>
                <option value="fromAirport">Sân Bay Nội Bài ➔ Hà Nội</option>
                <option value="roundTrip">Khứ hồi 2 chiều (Tiết kiệm)</option>
              </select>
            </div>

            <div>
              <label htmlFor="airport-vehicle" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Loại Phương Tiện
              </label>
              <select
                id="airport-vehicle"
                value={airportVehicle}
                onChange={(e) => setAirportVehicle(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="sedan5">Xe 5 chỗ (VinFast EV)</option>
                <option value="suv7">Xe 7 chỗ (Fortuner, Xpander, VF9)</option>
                <option value="van16">Xe 16 chỗ (Ford Transit)</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-emerald-800 block">
                Giá trọn gói đón tiễn ({airportDistrict}):
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                {formatVND(calculatedAirportPrice)}
              </span>
              <span className="text-xs text-slate-500 ml-2">
                {airportDirection === "roundTrip" ? "/ 2 chiều" : "/ 1 chiều"}
              </span>
            </div>
            <button
              type="button"
              onClick={handleBookNow}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Đặt Xe Sân Bay</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <p className="text-xs text-slate-600 flex items-start gap-1.5">
            <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Ghi chú quan trọng:</strong> Giá niêm yết đã bao gồm 100% vé cổng sân bay và vé cầu đường cao tốc (chưa bao gồm thuế VAT 8-10% nếu lấy hóa đơn đỏ).
            </span>
          </p>
        </div>
      )}

      {/* Tab 3: Taxi Đường Dài */}
      {activeTab === "duongdai" && (
        <div className="p-5 sm:p-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="dist-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Cự Ly Dự Kiến (km)
              </label>
              <input
                id="dist-input"
                type="number"
                min={20}
                max={500}
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value) || 20)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="trip-type" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Chiều Di Chuyển
              </label>
              <select
                id="trip-type"
                value={longDistTripType}
                onChange={(e) => setLongDistTripType(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="oneWay">1 Chiều</option>
                <option value="roundTrip">2 Chiều (về trong ngày)</option>
              </select>
            </div>

            <div>
              <label htmlFor="dist-veh" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Dòng Xe Phục Vụ
              </label>
              <select
                id="dist-veh"
                value={longDistVehicle}
                onChange={(e) => setLongDistVehicle(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="sedan5">Xe 5 chỗ (VinFast VF5/VF8)</option>
                <option value="suv7">Xe 7 chỗ rộng rãi</option>
                <option value="van16">Xe 16 chỗ cao cấp</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-emerald-800 block">
                Giá cước đường dài ước tính ({distanceKm} km):
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                {formatVND(calculatedLongDistPrice)}
              </span>
              <span className="text-xs text-slate-500 ml-2">
                (khoảng {formatVND(ratePerKm)}/km)
              </span>
            </div>
            <button
              type="button"
              onClick={handleBookNow}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Đặt Xe Đường Dài</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <p className="text-xs text-slate-600 flex items-start gap-1.5">
            <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Quy định chuyến 2 chiều:</strong> Áp dụng cho hành trình trên 30km về trong ngày. Miễn phí 1 giờ chờ đầu tiên, giờ tiếp theo tính 60.000đ/giờ (tối đa 3 giờ chờ). Giá chưa bao gồm vé cầu đường/phà.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
