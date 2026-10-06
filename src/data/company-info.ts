export interface Commitment {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  content: string;
  rating: number;
  avatarText: string;
}

export const COMPANY_INFO = {
  name: "Công ty Cổ phần Đầu tư Lubi Việt Nam",
  brandName: "Xe Ghép Lubi",
  hotline: "0858.911.247",
  hotlineHref: "tel:0858911247",
  zaloHref: "https://zalo.me/0858911247",
  smsHref: "sms:0858911247",
  messengerHref: "https://m.me/xeghephanoilubi",
  address: "Tầng 2, Chung cư Xuân Mai Tower, Đường Tô Hiệu, Phường Hà Cầu, Quận Hà Đông, Hà Nội",
  workingHours: "Phục vụ 24/7 (Cả ngày lễ và Chủ nhật)",
  fleetDescription: "100% Xe điện VinFast cao cấp (VF5, VFe34, VF8, VF9) & dòng xe 7 - 16 chỗ",
  bookingPromise: "Xác nhận cuốc xe trong 5 phút qua Zalo hoặc Hotline",
};

export const FIVE_COMMITMENTS: Commitment[] = [
  {
    id: "cam-ket-xe-dien",
    title: "100% Xe Điện VinFast",
    description: "Toàn bộ xe dưới 7 chỗ là dòng xe điện VinFast VF5, VFe34, VF8 đời mới, vận hành êm ái, không mùi xăng xe.",
    iconName: "Zap",
  },
  {
    id: "cam-ket-gia-tron-goi",
    title: "Giá Trọn Gói Minh Bạch",
    description: "Chi phí báo trước chuẩn xác, không tăng giá giờ cao điểm, không phát sinh phụ phí ẩn.",
    iconName: "BadgePercent",
  },
  {
    id: "cam-ket-don-tra-tan-noi",
    title: "Đón Trả Tận Nơi",
    description: "Đón tại nhà/sảnh chung cư và trả đúng điểm yêu cầu. Tối đa chỉ đón ghép 2 điểm nhằm tối ưu thời gian.",
    iconName: "MapPin",
  },
  {
    id: "cam-ket-xe-sach-se",
    title: "Xe Mới Sạch Sẽ",
    description: "Xe được vệ sinh khử khuẩn sau mỗi lượt chạy, không gian nội thất thoáng mát, máy lạnh thơm tho.",
    iconName: "Sparkles",
  },
  {
    id: "cam-ket-tai-xe-chuyen-nghiep",
    title: "Lái Xe Lịch Sự & Đúng Giờ",
    description: "Bác tài nhiều năm kinh nghiệm lái xe đường trường, phong cách phục vụ nhã nhặn, cam kết đón đúng giờ hẹn.",
    iconName: "ShieldCheck",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    author: "Anh Nguyễn Văn Thành",
    location: "TP. Ninh Bình",
    content: "Tôi thường xuyên đi Hà Nội - Ninh Bình công tác. Đi xe điện VinFast VF8 của Lubi rất êm, bác tài chạy cẩn thận, đón tận cổng cơ quan đúng 7h sáng.",
    rating: 5,
    avatarText: "VT",
  },
  {
    id: "review-2",
    author: "Chị Hoàng Mai Lan",
    location: "Cầu Giấy, Hà Nội",
    content: "Đặt xe đi sân bay Nội Bài lúc 4h sáng mà bác tài đến trước 10 phút đợi ở sảnh. Giá báo 200k đã bao gồm vé cầu đường sân bay, không vẽ vời thêm phí.",
    rating: 5,
    avatarText: "ML",
  },
  {
    id: "review-3",
    author: "Bác Trần Quốc Tuấn",
    location: "Hạ Long, Quảng Ninh",
    content: "Nhà có người già nên sợ mùi xăng xe khách. Đi xe ghép điện của Lubi thoáng mát và không bị say xe chút nào. Bác tài hỗ trợ mang hành lý rất chu đáo.",
    rating: 5,
    avatarText: "QT",
  },
  {
    id: "review-4",
    author: "Bạn Lê Thu Trang",
    location: "TP. Thái Bình",
    content: "Giá ghép xe chỉ 300k mà xe đón tận nhà, ngồi thoải mái không phải chịu cảnh chen chúc hay dừng bắt khách dọc đường như xe khách.",
    rating: 5,
    avatarText: "TT",
  },
  {
    id: "review-5",
    author: "Anh Vũ Đức Đạt",
    location: "Hải Phòng",
    content: "Bao trọn xe VF8 đi Hải Phòng gặp đối tác rất sang trọng và lịch sự. Xuất hóa đơn VAT đầy đủ cho công ty, phục vụ chuyên nghiệp.",
    rating: 5,
    avatarText: "DD",
  },
  {
    id: "review-6",
    author: "Chị Đỗ Thu Hoài",
    location: "Việt Trì, Phú Thọ",
    content: "Đi khám bệnh ở bệnh viện Bạch Mai về Phú Thọ đón tận cổng viện, xe chạy thẳng cao tốc nhanh và an toàn. Rất hài lòng về dịch vụ Lubi.",
    rating: 5,
    avatarText: "TH",
  },
];
