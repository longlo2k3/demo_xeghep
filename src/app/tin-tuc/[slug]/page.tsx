import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ARTICLES } from "@/data/articles";
import { COMPANY_INFO } from "@/data/company-info";
import { buildArticleSchema } from "@/lib/schema";
import { Calendar, User, CalendarCheck, PhoneCall, List, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) return {};

  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/tin-tuc/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    author: article.author,
  });
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Tin tức", path: "/tin-tuc" },
    { name: article.title, path: `/tin-tuc/${article.slug}` },
  ];

  const articleSchema = buildArticleSchema({
    title: article.title,
    description: article.excerpt,
    path: `/tin-tuc/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    authorName: article.author,
  });

  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-12 mb-10">
            {/* Header */}
            <header className="mb-8 pb-6 border-b border-slate-200 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                {article.categoryName}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <User className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Tác giả: {article.author}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Đăng ngày: </span>
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
                  </time>
                </span>
              </div>
            </header>

            {/* Table of contents */}
            {article.tableOfContents.length > 0 && (
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 mb-8 space-y-3">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <List className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Mục Lục Bài Viết</span>
                </h2>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {article.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`} className="hover:text-emerald-700 hover:underline">
                        {toc.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Content */}
            <div
              className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-5"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA Box at bottom of article */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold">
                  Bạn Cần Đặt Xe Đi Chuyến Này?
                </h3>
                <p className="text-xs text-slate-300">
                  Dàn xe điện VinFast đời mới phục vụ 24/7 đón trả tận nơi.
                </p>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <Link
                  href="/dat-xe"
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-1.5 shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Đặt Xe Ngay</span>
                </Link>

                <a
                  href={COMPANY_INFO.hotlineHref}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <span>Gọi {COMPANY_INFO.hotline}</span>
                </a>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {otherArticles.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">Bài Viết Liên Quan Khác</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherArticles.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tin-tuc/${item.slug}`}
                    className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-emerald-700 block mb-1">
                        {item.categoryName}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-bold">
                      <span>Đọc bài viết</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
