export interface RouteItem {
  slug: string;
  name: string;
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  priceFrom: number;
  priceCharter5Seats: number;
  priceCharter7Seats: number;
  priceRoundTripDiscount: string;
  description: string;
  pickups: string[];
  dropoffs: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export const POPULAR_ROUTES: RouteItem[] = [
  {
    slug: "xe-ghep-ninh-binh",
    name: "Xe Ghép Hà Nội ⇄ Ninh Bình",
    origin: "Hà Nội",
    destination: "Ninh Bình",
    distance: "95 km",
    duration: "1 giờ 30 phút",
    priceFrom: 300000,
    priceCharter5Seats: 850000,
    priceCharter7Seats: 1100000,
    priceRoundTripDiscount: "Giảm 30% chiều về khi đi khứ hồi trong ngày",
    description: "Dịch vụ xe ghép Hà Nội đi Ninh Bình bằng xe điện VinFast đón trả tận nhà tại TP. Ninh Bình, Tam Điệp, Tràng An, Bái Đính, Gia Viễn, Nho Quan.",
    pickups: ["Các quận nội thành Hà Nội (Cầu Giấy, Nam Từ Liêm, Thanh Xuân, Hoàng Mai, Hà Đông, Hai Bà Trưng, Đống Đa...)"],
    dropoffs: ["TP. Ninh Bình", "TP. Tam Điệp", "Khu du lịch Tràng An, Hang Múa, Bái Đính", "Yên Khánh", "Gia Viễn", "Nho Quan"],
    faqs: [
      {
        question: "Xe ghép Hà Nội Ninh Bình đón trả tận nơi hay đón bến?",
        answer: "Xe Ghép Lubi đón và trả tận nơi tại địa chỉ nhà, cơ quan hoặc khách sạn theo yêu cầu của quý khách, không bắt khách phải ra bến xe.",
      },
      {
        question: "Một xe ghép đi tối đa bao nhiêu người?",
        answer: "Xe điện VinFast 5 chỗ chỉ ghép tối đa 3-4 khách để đảm bảo không gian rộng rãi, thoáng mát, không chèn ép chỗ ngồi.",
      },
      {
        question: "Tôi có được mang theo nhiều hành lý không?",
        answer: "Mỗi hành khách được mang 1 vali cỡ vừa và túi xách cá nhân. Nếu có hành lý cồng kềnh, quý khách vui lòng báo trước để tổng đài sắp xếp xe phù hợp.",
      },
    ],
    featured: true,
  },
  {
    slug: "xe-ghep-noi-bai",
    name: "Xe Ghép & Taxi Đón Tiễn Sân Bay Nội Bài",
    origin: "Hà Nội",
    destination: "Sân Bay Nội Bài",
    distance: "30 km",
    duration: "35 - 45 phút",
    priceFrom: 110000,
    priceCharter5Seats: 200000,
    priceCharter7Seats: 250000,
    priceRoundTripDiscount: "Trọn gói 2 chiều chỉ từ 380.000đ",
    description: "Đón tiễn sân bay Nội Bài 24/7 bằng xe điện VinFast và xe 7 chỗ. Giá trọn gói đã bao gồm vé vào cổng sân bay và phí cầu đường cao tốc.",
    pickups: ["Sảnh đến ga Quốc tế T2 / ga Quốc nội T1 Nội Bài", "Tất cả các quận nội và ngoại thành Hà Nội"],
    dropoffs: ["Sân bay Quốc tế Nội Bài", "Các điểm trả khách khắp Hà Nội"],
    faqs: [
      {
        question: "Giá xe đưa đón sân bay đã bao gồm vé cổng chưa?",
        answer: "Giá niêm yết của Lubi đã bao gồm 100% vé cổng sân bay và vé cầu đường cao tốc, cam kết không phát sinh bất kỳ khoản phí phụ thu nào.",
      },
      {
        question: "Nếu chuyến bay bị trễ giờ (delay) thì sao?",
        answer: "Tài xế Lubi luôn chủ động kiểm tra mã chuyến bay thực tế của quý khách để căn giờ đón chuẩn xác tại sảnh, miễn phí thời gian chờ đợi do chuyến bay hoãn.",
      },
    ],
    featured: true,
  },
  {
    slug: "xe-ghep-quang-ninh",
    name: "Xe Ghép Hà Nội ⇄ Quảng Ninh",
    origin: "Hà Nội",
    destination: "Quảng Ninh",
    distance: "155 km",
    duration: "2 giờ 15 phút",
    priceFrom: 250000,
    priceCharter5Seats: 1200000,
    priceCharter7Seats: 1500000,
    priceRoundTripDiscount: "Bao xe 2 chiều giảm 30% chiều về",
    description: "Tuyến xe ghép Hà Nội đi Hạ Long, Uông Bí, Cẩm Phả, Móng Cái chạy cao tốc Hà Nội - Hải Phòng - Quảng Ninh êm ái, an toàn.",
    pickups: ["Nội thành Hà Nội", "Điểm hẹn dọc cao tốc"],
    dropoffs: ["TP. Uông Bí", "TP. Hạ Long (Bãi Cháy, Hòn Gai)", "TP. Cẩm Phả", "Đảo Tuần Châu", "Vân Đồn"],
    faqs: [
      {
        question: "Xe chạy cao tốc hay quốc lộ?",
        answer: "100% chuyến xe đi Quảng Ninh đều di chuyển trên đường cao tốc Hà Nội - Hải Phòng - Vân Đồn giúp rút ngắn thời gian di chuyển còn hơn 2 tiếng.",
      },
    ],
    featured: true,
  },
  {
    slug: "xe-ghep-thai-binh",
    name: "Xe Ghép Hà Nội ⇄ Thái Bình",
    origin: "Hà Nội",
    destination: "Thái Bình",
    distance: "110 km",
    duration: "1 giờ 45 phút",
    priceFrom: 300000,
    priceCharter5Seats: 900000,
    priceCharter7Seats: 1200000,
    priceRoundTripDiscount: "Giảm 30% chiều về trong ngày",
    description: "Xe ghép đón trả tận nhà giữa Hà Nội và TP. Thái Bình, Đông Hưng, Tiền Hải, Kiến Xương, Thái Thụy, Hưng Hà, Quỳnh Phụ.",
    pickups: ["Các quận Hà Nội"],
    dropoffs: ["TP. Thái Bình", "Hưng Hà", "Đông Hưng", "Quỳnh Phụ", "Kiến Xương", "Tiền Hải", "Vũ Thư"],
    faqs: [
      {
        question: "Có đón trả về tận các xã huyện xa ở Thái Bình không?",
        answer: "Có. Lubi nhận đón trả tận ngõ xóm tại tất cả các huyện thuộc tỉnh Thái Bình theo yêu cầu quý khách.",
      },
    ],
    featured: true,
  },
  {
    slug: "xe-ghep-hai-phong",
    name: "Xe Ghép Hà Nội ⇄ Hải Phòng",
    origin: "Hà Nội",
    destination: "Hải Phòng",
    distance: "120 km",
    duration: "1 giờ 30 phút",
    priceFrom: 450000,
    priceCharter5Seats: 1000000,
    priceCharter7Seats: 1300000,
    priceRoundTripDiscount: "Bao xe 2 chiều chỉ từ 1.600.000đ",
    description: "Xe điện VinFast cao cấp chạy thẳng cao tốc 5B Hà Nội - Hải Phòng, đón trả tại nhà ở các quận Hồng Bàng, Ngô Quyền, Lê Chân, Hải An, Đồ Sơn.",
    pickups: ["Nội thành Hà Nội"],
    dropoffs: ["Nội thành TP. Hải Phòng", "Khu công nghiệp Đình Vũ, Tràng Duệ", "Đồ Sơn", "Kiến An"],
    faqs: [
      {
        question: "Thời gian xe chạy từ Hà Nội đến Hải Phòng mất bao lâu?",
        answer: "Xe chạy thẳng cao tốc Hà Nội - Hải Phòng chỉ mất khoảng 1 giờ 20 phút đến 1 giờ 30 phút là tới trung tâm thành phố.",
      },
    ],
    featured: true,
  },
  {
    slug: "xe-ghep-hung-yen",
    name: "Xe Ghép Hà Nội ⇄ Hưng Yên",
    origin: "Hà Nội",
    destination: "Hưng Yên",
    distance: "60 km",
    duration: "1 giờ",
    priceFrom: 150000,
    priceCharter5Seats: 500000,
    priceCharter7Seats: 700000,
    priceRoundTripDiscount: "Khứ hồi trong ngày giảm ngay 35%",
    description: "Dịch vụ xe ghép nhanh Hà Nội đi TP. Hưng Yên, Mỹ Hào, Yên Mỹ, Văn Giang, Khoái Châu, Ecopark, Vinhomes Ocean Park 2-3.",
    pickups: ["Các quận Hà Nội"],
    dropoffs: ["TP. Hưng Yên", "Văn Giang (Ecopark, OCP2, OCP3)", "Mỹ Hào", "Yên Mỹ", "Khoái Châu"],
    faqs: [
      {
        question: "Xe có nhận gửi đồ hàng hóa không?",
        answer: "Có, Lubi có dịch vụ nhận gửi tài liệu, hàng hóa chuyển phát nhanh hỏa tốc giao nhận tận tay trong ngày.",
      },
    ],
    featured: true,
  },
  {
    slug: "xe-ghep-phu-tho",
    name: "Xe Ghép Hà Nội ⇄ Phú Thọ",
    origin: "Hà Nội",
    destination: "Phú Thọ",
    distance: "85 km",
    duration: "1 giờ 20 phút",
    priceFrom: 250000,
    priceCharter5Seats: 750000,
    priceCharter7Seats: 950000,
    priceRoundTripDiscount: "Giảm 30% chiều về khi đi khứ hồi",
    description: "Xe ghép đón trả tận nơi Hà Nội đi TP. Việt Trì, Thị xã Phú Thọ, Lâm Thao, Phù Ninh, Thanh Ba, Đoan Hùng.",
    pickups: ["Hà Nội (ưu tiên đón các bệnh viện, trường đại học, khu đô thị)"],
    dropoffs: ["TP. Việt Trì", "Thị xã Phú Thọ", "Lâm Thao", "Phù Ninh", "Đoan Hùng"],
    faqs: [
      {
        question: "Có đón tại các bệnh viện lớn ở Hà Nội về Phú Thọ không?",
        answer: "Có. Tài xế đón tận sảnh các bệnh viện lớn (Bạch Mai, Việt Đức, K Tân Triều, 108...) hỗ trợ người bệnh và người nhà chu đáo.",
      },
    ],
    featured: true,
  },
  {
    slug: "xe-ghep-bac-ninh",
    name: "Xe Ghép Hà Nội ⇄ Bắc Ninh",
    origin: "Hà Nội",
    destination: "Bắc Ninh",
    distance: "35 km",
    duration: "40 phút",
    priceFrom: 170000,
    priceCharter5Seats: 450000,
    priceCharter7Seats: 600000,
    priceRoundTripDiscount: "Khứ hồi trong ngày ưu đãi đặc biệt",
    description: "Xe ghép nhanh đón trả tận nơi giữa Hà Nội và TP. Bắc Ninh, Từ Sơn, Yên Phong, Quế Võ, Thuận Thành, Tiên Du.",
    pickups: ["Các quận nội thành Hà Nội"],
    dropoffs: ["TP. Bắc Ninh", "TP. Từ Sơn", "Khu công nghiệp Yên Phong, Quế Võ, VSIP"],
    faqs: [
      {
        question: "Có phục vụ đưa đón chuyên gia, kỹ sư đi KCN Bắc Ninh không?",
        answer: "Có, Lubi có hợp đồng đưa đón chuyên gia, kỹ sư theo ngày hoặc dài hạn với đầy đủ hóa đơn chứng từ VAT.",
      },
    ],
    featured: true,
  },
];
