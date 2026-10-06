import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ARTICLES } from "@/data/articles";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Tin Tức & Cẩm Nang Đi Xe Ghép - Kinh Nghiệm Di Chuyển 2026",
  description:
    "Cập nhật tin tức, kinh nghiệm đi xe ghép Hà Nội, bảng giá vé máy bay Nội Bài và chính sách ưu đãi di chuyển từ Xe Ghép Lubi.",
  path: "/tin-tuc",
});

export default function NewsIndexPage() {
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Tin tức", path: "/tin-tuc" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
              Cẩm Nang & Tin Tuyến
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tin Tức & Kinh Nghiệm Đi Xe Ghép
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Những thông tin hữu ích giúp chuyến đi của bạn thêm trọn vẹn, an toàn và tiết kiệm tối đa chi phí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      <Tag className="w-3 h-3" />
                      <span>{article.categoryName}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
                      </time>
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
                    <Link href={`/tin-tuc/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-500">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.author}</span>
                  </span>

                  <Link
                    href={`/tin-tuc/${article.slug}`}
                    className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
