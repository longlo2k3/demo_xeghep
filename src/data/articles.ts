export interface Article {
  slug: string;
  title: string;
  category: "kinh-nghiem" | "tin-tuyen" | "khuyen-mai";
  categoryName: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  excerpt: string;
  content: string;
  tableOfContents: { id: string; text: string }[];
  relatedRouteSlug?: string;
  image: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "kinh-nghiem-dat-xe-ghep-ha-noi-tiet-kiem-va-an-toan",
    title: "Kinh Nghiệm Đặt Xe Ghép Hà Nội Đi Các Tỉnh: Tiết Kiệm & An Toàn Nhất 2026",
    category: "kinh-nghiem",
    categoryName: "Kinh nghiệm đi xe",
    publishedAt: "2026-02-15T08:00:00+07:00",
    updatedAt: "2026-03-20T10:30:00+07:00",
    author: "Ban Biên Tập Lubi",
    excerpt: "Tổng hợp bí quyết chọn dịch vụ xe ghép đón trả tận nhà chất lượng, phân biệt xe dù với xe uy tín và cách tiết kiệm đến 50% chi phí di chuyển.",
    image: "/images/xe-vinfast-vf8-noi-bai.webp",
    tableOfContents: [
      { id: "xe-ghep-la-gi", text: "1. Xe ghép là gì và vì sao ngày càng được ưa chuộng?" },
      { id: "uu-diem-xe-dien", text: "2. Ưu thế vượt trội khi đi xe ghép điện VinFast" },
      { id: "luu-y-khi-dat-xe", text: "3. 4 lưu ý quan trọng để không bị 'bỏ rơi' dọc đường" },
      { id: "dat-xe-lubi", text: "4. Vì sao khách hàng tin tưởng dịch vụ Xe Ghép Lubi?" },
    ],
    content: `
      <p>Trong những năm gần đây, dịch vụ <strong>xe ghép liên tỉnh</strong> đã trở thành lựa chọn hàng đầu cho hàng triệu hành khách đi lại giữa Hà Nội và các tỉnh thành phía Bắc như Ninh Bình, Quảng Ninh, Hải Phòng, Thái Bình, Phú Thọ...</p>
      
      <h2 id="xe-ghep-la-gi">1. Xe ghép là gì và vì sao ngày càng được ưa chuộng?</h2>
      <p>Xe ghép là hình thức nhiều hành khách có cùng lộ trình di chuyển chia sẻ chung một chuyến xe du lịch từ 5 đến 7 chỗ. Khác với xe khách truyền thống phải ra bến bãi đông đúc, xe ghép đón và trả khách tận nơi tại cửa nhà hoặc địa chỉ yêu cầu.</p>
      <p>Chi phí cho một ghế xe ghép thường chỉ dao động từ 150.000đ đến 300.000đ, rẻ hơn rất nhiều so với việc bao trọn một chuyến taxi riêng (thường từ 800.000đ đến 1.500.000đ).</p>

      <h2 id="uu-diem-xe-dien">2. Ưu thế vượt trội khi đi xe ghép điện VinFast</h2>
      <p>Lubi là một trong những đơn vị tiên phong ứng dụng 100% đội xe điện VinFast (VF5, VFe34, VF8) vào dịch vụ xe ghép. Điểm khác biệt lớn nhất là không gian xe luôn sạch sẽ, hoàn toàn không có mùi xăng dầu khó chịu - nỗi ám ảnh lớn nhất của người say xe.</p>
      <p>Động cơ điện êm ái, cách âm vượt trội giúp hành khách có thể nghỉ ngơi, làm việc thoải mái suốt chuyến đi dài.</p>

      <h2 id="luu-y-khi-dat-xe">3. 4 lưu ý quan trọng để không bị 'bỏ rơi' dọc đường</h2>
      <ul>
        <li><strong>Đặt xe trước ít nhất 1-2 tiếng:</strong> Giúp điều hành xe sắp xếp lộ trình đón ghép tối ưu, không bị muộn giờ.</li>
        <li><strong>Xác nhận rõ giá cước trọn gói:</strong> Hỏi rõ chi phí đã bao gồm vé cầu đường cao tốc và đón tận ngõ chưa.</li>
        <li><strong>Chọn đơn vị có pháp nhân rõ ràng:</strong> Tránh đặt qua các nhóm Zalo trôi nổi không rõ nguồn gốc lái xe.</li>
        <li><strong>Cung cấp số lượng hành lý:</strong> Giúp tài xế bố trí khoang cốp phù hợp.</li>
      </ul>

      <h2 id="dat-xe-lubi">4. Vì sao khách hàng tin tưởng dịch vụ Xe Ghép Lubi?</h2>
      <p>Với cam kết không tăng giá giờ cao điểm, đội ngũ lái xe lịch sự và tổng đài phục vụ 24/7 qua hotline <strong>0858.911.247</strong>, Xe Ghép Lubi tự hào mang lại trải nghiệm di chuyển văn minh, tin cậy cho mọi nhà.</p>
    `,
    relatedRouteSlug: "xe-ghep-ninh-binh",
  },
  {
    slug: "bang-gia-xe-dua-don-san-bay-noi-bai-chi-tiet",
    title: "Bảng Giá Taxi Đưa Đón Sân Bay Nội Bài Trọn Gói 2026: Không Phát Sinh Phí",
    category: "tin-tuyen",
    categoryName: "Tin tuyến & Báo giá",
    publishedAt: "2026-03-01T09:00:00+07:00",
    updatedAt: "2026-03-25T14:00:00+07:00",
    author: "Phòng Vận Hành Lubi",
    excerpt: "Cập nhật bảng giá taxi đưa đón sân bay Nội Bài 24/7 theo từng quận Hà Nội. Giá đã gồm vé vào cổng sân bay, theo dõi chuyến bay đón đúng sảnh.",
    image: "/images/xe-vinfast-vf8-noi-bai.webp",
    tableOfContents: [
      { id: "tong-quan-noi-bai", text: "1. Bảng giá taxi Nội Bài trọn gói theo quận" },
      { id: "chinh-sach-don-tiem", text: "2. Quy trình đón tiễn sân bay chuyên nghiệp" },
      { id: "cam-ket-khong-phat-sinh", text: "3. Cam kết vé cổng và thời gian chờ chuyến bay" },
    ],
    content: `
      <p>Nhu cầu di chuyển giữa trung tâm Hà Nội và Cảng Hàng không Quốc tế Nội Bài luôn ở mức cao bất kể ngày đêm. Để chuyến đi không bị gián đoạn hay bực bội vì giá cả mập mờ, Lubi công khai bảng giá trọn gói niêm yết.</p>

      <h2 id="tong-quan-noi-bai">1. Bảng giá taxi Nội Bài trọn gói theo quận</h2>
      <p>Mức giá từ các quận Cầu Giấy, Ba Đình, Tây Hồ đi Nội Bài chỉ từ 180.000đ - 190.000đ cho xe 5 chỗ VinFast. Chiều đón từ Nội Bài về Hà Nội chỉ từ 230.000đ - 250.000đ.</p>
      <p>Đặc biệt với gói đặt xe 2 chiều khứ hồi trong ngày, khách hàng được giảm ngay tới 30%, trọn gói chỉ từ 380.000đ.</p>

      <h2 id="chinh-sach-don-tiem">2. Quy trình đón tiễn sân bay chuyên nghiệp</h2>
      <p>Tài xế của Lubi luôn theo dõi thời gian hạ cánh thực tế qua mã hiệu chuyến bay của khách hàng (Flight Radar). Dù chuyến bay đến sớm hay delay nhiều giờ, tài xế luôn có mặt sẵn sàng tại sảnh đến mà không thu thêm phí chờ.</p>

      <h2 id="cam-ket-khong-phat-sinh">3. Cam kết vé cổng và thời gian chờ chuyến bay</h2>
      <p>Toàn bộ mức giá đưa đón sân bay của Lubi đã bao gồm vé cổng sân bay T1/T2 và phí cầu đường Võ Nguyên Giáp. Khách hàng hoàn toàn yên tâm thanh toán đúng số tiền đã báo trước.</p>
    `,
    relatedRouteSlug: "xe-ghep-noi-bai",
  },
  {
    slug: "chinh-sach-tuyen-doi-tac-lai-xe-lubi",
    title: "Chính Sách Tuyển Dụng & Hợp Tác Đối Tác Lái Xe Ghép Lubi Thu Nhập Cao",
    category: "khuyen-mai",
    categoryName: "Chính sách đối tác",
    publishedAt: "2026-03-10T11:00:00+07:00",
    updatedAt: "2026-03-28T16:00:00+07:00",
    author: "Phòng Phát Triển Mạng Lưới Lubi",
    excerpt: "Chương trình gia nhập mạng lưới đối tác lái xe Lubi: Tận dụng thời gian rảnh, tối ưu chiều về không chạy rỗng, gia tăng thu nhập từ 15 - 35 triệu/tháng.",
    image: "/images/xe-vinfast-vf8-noi-bai.webp",
    tableOfContents: [
      { id: "quyen-loi-doi-tac", text: "1. Quyền lợi khi hợp tác cùng Xe Ghép Lubi" },
      { id: "dieu-kien-tham-gia", text: "2. Điều kiện tham gia đội xe" },
      { id: "quy-trinh-dang-ky", text: "3. Quy trình đăng ký và kích hoạt tài khoản" },
    ],
    content: `
      <p>Bạn đang sở hữu xe ô tô từ 5 đến 7 chỗ (đặc biệt là các dòng xe điện VinFast VF5, VF8)? Bạn muốn tối ưu các chuyến xe chiều về để không phải chạy xe không? Hãy tham gia mạng lưới tài xế đối tác của Công ty Cổ phần Đầu tư Lubi Việt Nam.</p>

      <h2 id="quyen-loi-doi-tac">1. Quyền lợi khi hợp tác cùng Xe Ghép Lubi</h2>
      <ul>
        <li>Nguồn khách dồi dào, ổn định liên tục trên các trục tuyến liên tỉnh và sân bay.</li>
        <li>Tỷ lệ chiết khấu hợp tác cạnh tranh, thanh toán minh bạch, nhanh chóng.</li>
        <li>Được hỗ trợ đào tạo nghiệp vụ chăm sóc khách hàng và quy chuẩn đón tiễn văn minh.</li>
      </ul>

      <h2 id="dieu-kien-tham-gia">2. Điều kiện tham gia đội xe</h2>
      <p>Yêu cầu xe đời mới từ 2020 trở lên, nội ngoại thất sạch sẽ, đăng kiểm và bảo hiểm bắt buộc đầy đủ. Ưu tiên tài xế sử dụng xe điện VinFast và có thái độ phục vụ khách hàng nhã nhặn, đúng giờ.</p>

      <h2 id="quy-trinh-dang-ky">3. Quy trình đăng ký và kích hoạt tài khoản</h2>
      <p>Tài xế điền thông tin vào form tại trang <a href="/dang-ky-doi-tac">Đăng Ký Đối Tác</a> hoặc liên hệ trực tiếp hotline bộ phận tuyển dụng: <strong>0858.911.247</strong>.</p>
    `,
  },
];
