export interface RoutePriceDetail {
  label: string;
  price: string;
  note?: string;
}

export interface RouteItem {
  slug: string;
  name: string;
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  priceFrom: number;
  priceShare1Text: string;
  priceShare2Text?: string;
  priceCharter4to5Text: string;
  priceCharter7Text?: string;
  pricingDetails: RoutePriceDetail[];
  description: string;
  pickups: string[];
  dropoffs: string[];
  faqs: { question: string; answer: string }[];
  regions: string[];
  isBannerTop?: boolean;
}

export const POPULAR_ROUTES: RouteItem[] = [
  {
    slug: "hai-phong-bac-ninh-bac-giang",
    name: "Hải Phòng ⇄ Bắc Ninh ⇄ Bắc Giang",
    origin: "Hải Phòng",
    destination: "Bắc Ninh / Bắc Giang",
    distance: "95 - 110 km",
    duration: "1 giờ 45 phút",
    priceFrom: 400000,
    priceShare1Text: "400k – 500k",
    priceShare2Text: "từ 700k",
    priceCharter4to5Text: "từ 900k",
    priceCharter7Text: "từ 1.000k",
    pricingDetails: [
      { label: "Ghép 1 người", price: "400k – 500k" },
      { label: "Ghép 2 người", price: "từ 700k" },
      { label: "Bao xe 5 chỗ", price: "từ 900k" },
      { label: "Bao xe 7 chỗ", price: "từ 1.000k" },
    ],
    description:
      "Tuyến xe ghép Hải Phòng ⇄ Bắc Ninh ⇄ Bắc Giang đón trả tận nhà tại nội thành Hải Phòng, Quán Toan và trả tận nơi tại TP. Bắc Ninh, TP. Bắc Giang và các KCN Quế Võ, Yên Phong, Quang Châu.",
    pickups: ["Hải Phòng (Quán Toan, Hồng Bàng, Lê Chân, Ngô Quyền, Thủy Nguyên, An Dương)"],
    dropoffs: ["TP. Bắc Ninh", "TP. Bắc Giang", "KCN Quế Võ", "KCN Yên Phong", "KCN Quang Châu", "KCN Đình Trám"],
    regions: ["Hải Phòng", "Bắc Ninh – Bắc Giang"],
    isBannerTop: false,
    faqs: [
      {
        question: "Xe ghép Hải Phòng - Bắc Ninh - Bắc Giang có đón trả tận nhà không?",
        answer: "Có, xe đón trả tận nơi tại nhà riêng, cơ quan, khách sạn hoặc các khu công nghiệp theo yêu cầu.",
      },
      {
        question: "Một xe ghép đi tối đa bao nhiêu người?",
        answer: "Xe chỉ nhận từ 1 đến 3 khách/chuyến để đảm bảo không gian rộng rãi, thoáng mát, xe chạy thẳng không vòng vèo.",
      },
      {
        question: "Có nhận chở hàng hóa trên tuyến này không?",
        answer: "Có, chúng tôi nhận gửi hàng hóa, bưu phẩm hỏa tốc giá chỉ từ 150k giao tận tay trong ngày.",
      },
    ],
  },
  {
    slug: "hai-phong-ha-noi-noi-bai",
    name: "Hải Phòng ⇄ Hà Nội ⇄ Nội Bài",
    origin: "Hải Phòng",
    destination: "Hà Nội / Nội Bài",
    distance: "120 - 145 km",
    duration: "1 giờ 30 phút",
    priceFrom: 400000,
    priceShare1Text: "400k",
    priceShare2Text: "700k",
    priceCharter4to5Text: "từ 899k",
    priceCharter7Text: "từ 999k",
    pricingDetails: [
      { label: "Ghép 1 người", price: "400k" },
      { label: "Ghép 2 người", price: "700k" },
      { label: "Bao xe 5 chỗ", price: "từ 899k" },
      { label: "Bao xe 7 chỗ", price: "từ 999k" },
    ],
    description:
      "Dịch vụ xe ghép và xe tiện chuyến Hải Phòng ⇄ Hà Nội ⇄ Sân bay Nội Bài chạy cao tốc 5B êm ái, đón trả tận nơi tại nhà riêng và các sảnh sân bay 24/7.",
    pickups: ["Quán Toan, Hồng Bàng, Lê Chân, Ngô Quyền, Hải An, Kiến An, Thủy Nguyên"],
    dropoffs: ["Các quận nội thành Hà Nội", "Sảnh T1 & T2 Sân bay Nội Bài", "Các bệnh viện trung ương"],
    regions: ["Hải Phòng", "Hà Nội"],
    isBannerTop: true,
    faqs: [
      {
        question: "Xe có lên sảnh sân bay Nội Bài đón đúng giờ bay không?",
        answer: "Có, tài xế theo dõi lịch bay của quý khách để đón đúng sảnh ga đến hoặc đưa lên sảnh đi kịp giờ check-in.",
      },
      {
        question: "Thời gian di chuyển từ Hải Phòng lên Hà Nội mất bao lâu?",
        answer: "Khoảng 1 giờ 30 phút chạy thẳng cao tốc Hà Nội - Hải Phòng không dừng đón khách dọc đường.",
      },
    ],
  },
  {
    slug: "hai-phong-ha-long",
    name: "Hải Phòng ⇄ Hạ Long",
    origin: "Hải Phòng",
    destination: "Hạ Long",
    distance: "55 km",
    duration: "45 phút",
    priceFrom: 250000,
    priceShare1Text: "250k – 300k",
    priceShare2Text: "400k",
    priceCharter4to5Text: "400k – 500k",
    priceCharter7Text: "500k – 600k",
    pricingDetails: [
      { label: "Ghép 1 khách", price: "250k – 300k" },
      { label: "Bao xe 4 chỗ", price: "400k – 500k" },
      { label: "Bao xe 7 chỗ", price: "500k – 600k" },
    ],
    description:
      "Tuyến cao tốc Hải Phòng ⇄ Hạ Long qua cầu Bạch Đằng kết nối nhanh chóng chỉ 45 phút, phục vụ 2 chiều đón trả tận nơi, bao xe và ghép ghế 24/7.",
    pickups: ["Hải Phòng (Quán Toan, nội thành, Thủy Nguyên)"],
    dropoffs: ["TP. Hạ Long (Bãi Cháy, Hòn Gai, Tuần Châu, Hùng Thắng)"],
    regions: ["Hải Phòng", "Hạ Long"],
    isBannerTop: true,
    faqs: [
      {
        question: "Xe ghép Hải Phòng đi Hạ Long đón trả những khu vực nào?",
        answer: "Đón tại nhà ở Hải Phòng và trả tận nơi tại Bãi Cháy, Hòn Gai, Tuần Châu hoặc các điểm du lịch tại Hạ Long.",
      },
    ],
  },
  {
    slug: "hai-phong-mong-cai",
    name: "Hải Phòng ⇄ Móng Cái",
    origin: "Hải Phòng",
    destination: "Móng Cái",
    distance: "195 km",
    duration: "2 giờ 30 phút",
    priceFrom: 500000,
    priceShare1Text: "500k – 600k",
    priceShare2Text: "từ 800k",
    priceCharter4to5Text: "1.500k – 1.600k",
    priceCharter7Text: "1.600k – 1.700k",
    pricingDetails: [
      { label: "Ghép 1 khách", price: "500k – 600k" },
      { label: "Bao xe 4 chỗ", price: "1.500k – 1.600k" },
      { label: "Bao xe 7 chỗ", price: "1.600k – 1.700k" },
    ],
    description:
      "Tuyến cao tốc Hải Phòng ⇄ Vân Đồn ⇄ Móng Cái chạy êm ru 2.5 tiếng. Nhận ghép khách 1-3 người, bao xe trọn gói và gửi hàng hóa hỏa tốc trong ngày.",
    pickups: ["Hải Phòng (Quán Toan, Trung tâm, Thủy Nguyên, An Dương)"],
    dropoffs: ["TP. Móng Cái", "Cửa khẩu quốc tế Móng Cái", "Trà Cổ", "Hải Hà"],
    regions: ["Hải Phòng", "Móng Cái"],
    isBannerTop: true,
    faqs: [
      {
        question: "Xe chạy thẳng hay có chuyển xe dọc đường không?",
        answer: "Cam kết 100% xe chạy thẳng cao tốc, không chuyển xe, không sang khách.",
      },
    ],
  },
  {
    slug: "ha-long-bac-ninh-bac-giang",
    name: "Hạ Long ⇄ Bắc Ninh ⇄ Bắc Giang",
    origin: "Hạ Long",
    destination: "Bắc Ninh / Bắc Giang",
    distance: "125 km",
    duration: "2 giờ",
    priceFrom: 450000,
    priceShare1Text: "450k – 550k",
    priceShare2Text: "từ 700k",
    priceCharter4to5Text: "từ 900k",
    priceCharter7Text: "từ 1.000k",
    pricingDetails: [
      { label: "Ghép 1 người", price: "450k – 550k" },
      { label: "Ghép 2 người", price: "từ 700k" },
      { label: "Bao xe 5 chỗ", price: "từ 900k" },
      { label: "Bao xe 7 chỗ", price: "từ 1.000k" },
    ],
    description:
      "Xe tiện chuyến và ghép ghế từ Hạ Long (Bãi Cháy, Hòn Gai, Tuần Châu) đi Bắc Ninh và Bắc Giang đón trả tận nhà, phục vụ cả ngày lẫn đêm.",
    pickups: ["TP. Hạ Long (Bãi Cháy, Hòn Gai, Tuần Châu)"],
    dropoffs: ["TP. Bắc Ninh", "TP. Bắc Giang", "Việt Yên", "Yên Dũng", "Tiên Du"],
    regions: ["Hạ Long", "Bắc Ninh – Bắc Giang"],
    isBannerTop: true,
    faqs: [
      {
        question: "Giá bao xe 5 chỗ từ Hạ Long sang Bắc Ninh là bao nhiêu?",
        answer: "Bao xe 5 chỗ trọn gói từ 900k, giá đã bao gồm phí cầu đường bến bãi.",
      },
    ],
  },
  {
    slug: "ha-noi-mong-cai",
    name: "Hà Nội ⇄ Móng Cái",
    origin: "Hà Nội",
    destination: "Móng Cái",
    distance: "310 km",
    duration: "3 giờ 30 phút",
    priceFrom: 600000,
    priceShare1Text: "600k – 800k",
    priceShare2Text: "từ 1.200k",
    priceCharter4to5Text: "2.200k – 2.400k",
    priceCharter7Text: "2.300k – 2.500k",
    pricingDetails: [
      { label: "Ghép 1 khách", price: "600k – 800k" },
      { label: "Bao xe 4 chỗ", price: "2.200k – 2.400k" },
      { label: "Bao xe 7 chỗ", price: "2.300k – 2.500k" },
    ],
    description:
      "Tuyến cao tốc huyết mạch Hà Nội ⇄ Hải Phòng ⇄ Vân Đồn ⇄ Móng Cái, xe riêng đời mới, đưa đón tận nhà nội thành Hà Nội và tận nơi tại TP. Móng Cái.",
    pickups: ["Các quận nội thành Hà Nội", "Sân bay Nội Bài"],
    dropoffs: ["TP. Móng Cái", "Cửa khẩu quốc tế Móng Cái", "Khu du lịch Trà Cổ"],
    regions: ["Hà Nội", "Móng Cái"],
    isBannerTop: true,
    faqs: [
      {
        question: "Xe xuất phát vào những khung giờ nào?",
        answer: "Chúng tôi phục vụ 24/7 liên tục cả ngày lẫn đêm, chỉ cần đặt trước tổng đài sẽ sắp xếp chuyến phù hợp nhất.",
      },
    ],
  },
  {
    slug: "ha-noi-ha-long",
    name: "Hà Nội ⇄ Hạ Long",
    origin: "Hà Nội",
    destination: "Hạ Long",
    distance: "155 km",
    duration: "2 giờ 15 phút",
    priceFrom: 450000,
    priceShare1Text: "450k – 550k",
    priceShare2Text: "từ 800k",
    priceCharter4to5Text: "1.100k – 1.200k",
    priceCharter7Text: "1.200k – 1.300k",
    pricingDetails: [
      { label: "Ghép 1 khách", price: "450k – 550k" },
      { label: "Bao xe 4 chỗ", price: "1.100k – 1.200k" },
      { label: "Bao xe 7 chỗ", price: "1.200k – 1.300k" },
    ],
    description:
      "Tuyến cao tốc Hà Nội ⇄ Hạ Long đưa đón tận nhà hoặc sảnh khách sạn. Xe đời mới êm ái, máy lạnh sạch sẽ, tài xế lịch sự chu đáo.",
    pickups: ["Các quận nội thành Hà Nội", "Sân bay Nội Bài"],
    dropoffs: ["TP. Hạ Long", "Bãi Cháy", "Hòn Gai", "Cảng tàu khách Tuần Châu"],
    regions: ["Hà Nội", "Hạ Long"],
    isBannerTop: false,
    faqs: [
      {
        question: "Có đón trả tại resort, khách sạn ở Bãi Cháy không?",
        answer: "Có, tài xế đón trả tận sảnh resort, khách sạn theo yêu cầu của hành khách.",
      },
    ],
  },
  {
    slug: "hai-phong-hai-duong",
    name: "Hải Phòng ⇄ Hải Dương",
    origin: "Hải Phòng",
    destination: "Hải Dương",
    distance: "45 km",
    duration: "40 phút",
    priceFrom: 250000,
    priceShare1Text: "250k",
    priceShare2Text: "400k",
    priceCharter4to5Text: "500k",
    priceCharter7Text: "Liên hệ thỏa thuận",
    pricingDetails: [
      { label: "Ghép 1 khách", price: "250k" },
      { label: "Ghép 2 khách", price: "400k" },
      { label: "Bao xe riêng", price: "500k" },
    ],
    description:
      "Tuyến xe ghép nhanh Hải Phòng ⇄ Hải Dương qua Quốc lộ 5 hoặc cao tốc, phục vụ đi làm, công tác, thăm thân đón trả tận nơi.",
    pickups: ["Hải Phòng (Quán Toan, Trung tâm, An Dương)"],
    dropoffs: ["TP. Hải Dương", "Kim Thành", "Cẩm Giàng", "KCN Nam Sách"],
    regions: ["Hải Phòng"],
    isBannerTop: true,
    faqs: [
      {
        question: "Bao xe riêng Hải Phòng - Hải Dương giá bao nhiêu?",
        answer: "Bao trọn xe riêng chỉ 500k trọn gói đón trả tận nhà.",
      },
    ],
  },
  {
    slug: "hai-phong-thai-nguyen",
    name: "Hải Phòng ⇄ Thái Nguyên",
    origin: "Hải Phòng",
    destination: "Thái Nguyên",
    distance: "150 km",
    duration: "2 giờ 15 phút",
    priceFrom: 600000,
    priceShare1Text: "600k",
    priceShare2Text: "900k",
    priceCharter4to5Text: "1.400k",
    priceCharter7Text: "Liên hệ thỏa thuận",
    pricingDetails: [
      { label: "Ghép 1 người", price: "600k" },
      { label: "Ghép 2 người", price: "900k" },
      { label: "Bao xe riêng", price: "1.400k" },
    ],
    description:
      "Xe ghép tiện chuyến Hải Phòng ⇄ Thái Nguyên chạy cao tốc kết nối đón trả tận nhà tại Hải Phòng và các quận huyện Thái Nguyên, KCN Samsung Yên Bình.",
    pickups: ["Hải Phòng (Quán Toan, trung tâm thành phố)"],
    dropoffs: ["TP. Thái Nguyên", "TP. Sông Công", "TP. Phổ Yên", "KCN Samsung Phổ Yên"],
    regions: ["Hải Phòng"],
    isBannerTop: true,
    faqs: [
      {
        question: "Xe chạy hết bao nhiêu thời gian?",
        answer: "Khoảng 2 giờ 15 phút chạy cao tốc êm ái, xe sạch sẽ không mùi.",
      },
    ],
  },
];

export const BANNER_TOP_ROUTES = [
  { name: "Hải Phòng ⇔ Hải Dương", slug: "hai-phong-hai-duong" },
  { name: "Hải Phòng ⇔ Hạ Long", slug: "hai-phong-ha-long" },
  { name: "Hải Phòng ⇔ Thái Nguyên", slug: "hai-phong-thai-nguyen" },
  { name: "Hải Phòng ⇔ Móng Cái", slug: "hai-phong-mong-cai" },
  { name: "Hà Nội ⇔ Móng Cái", slug: "ha-noi-mong-cai" },
  { name: "Hạ Long ⇔ Bắc Ninh ⇔ Bắc Giang", slug: "ha-long-bac-ninh-bac-giang" },
  { name: "Hải Phòng ⇔ Hà Nội ⇔ Nội Bài", slug: "hai-phong-ha-noi-noi-bai" },
];
