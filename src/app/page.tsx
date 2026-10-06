import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FiveCommitments } from "@/components/home/FiveCommitments";
import { OurServices } from "@/components/home/OurServices";
import { FeaturedRoutes } from "@/components/home/FeaturedRoutes";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PartnerCallout } from "@/components/home/PartnerCallout";
import { Testimonials } from "@/components/home/Testimonials";
import { SeoArticle } from "@/components/home/SeoArticle";

/**
 * Metadata for Homepage
 * Sets absolute self-referencing canonical to "/" (strictly adheres to AGENTS.md rule 1.3)
 */
export const metadata: Metadata = constructMetadata({
  title: "Xe Ghép Hà Nội - Đón Trả Tận Nơi 100% Xe Điện VinFast",
  description:
    "Dịch vụ xe ghép Hà Nội đi các tỉnh Ninh Bình, Quảng Ninh, Hải Phòng, Thái Bình, Hưng Yên, Phú Thọ... và taxi sân bay Nội Bài 24/7. 100% xe điện VinFast, giá trọn gói không phát sinh.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner + Form đặt xe nhanh 3 tab (LCP Priority) */}
      <HeroBanner />

      {/* 2. 5 cam kết vàng chất lượng */}
      <FiveCommitments />

      {/* 3. Dịch vụ của chúng tôi (4 khối) */}
      <OurServices />

      {/* 4. Các tuyến xe ghép nổi bật (card có giá chỉ từ) */}
      <FeaturedRoutes />

      {/* 5. Vì sao chọn chúng tôi (Xe điện VinFast, giá tốt, đúng giờ, thanh toán linh hoạt) */}
      <WhyChooseUs />

      {/* 6. Lời kêu gọi hợp tác đối tác & doanh nghiệp */}
      <PartnerCallout />

      {/* 7. Khách hàng nói gì (6 đánh giá thực tế) */}
      <Testimonials />

      {/* 8. Nội dung SEO chuyên sâu */}
      <SeoArticle />
    </>
  );
}
