"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleContext";
import { BLOG_ARTICLES, getArticle } from "@/lib/blog";

function formatDate(iso: string, locale: string) {
  const map: Record<string, string> = { NL: "nl-NL", EN: "en-GB", DE: "de-DE", FR: "fr-FR" };
  try {
    return new Date(iso).toLocaleDateString(map[locale] ?? "nl-NL", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = getArticle(slug);
  const { t, locale } = useLocale();

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-6xl font-semibold text-[#2b3e51] mb-3">404</p>
            <p className="text-base font-bold text-[#2b3e51] mb-2">{t("articles.blog.notFoundTitle")}</p>
            <p className="text-sm text-gray-400 mb-8">{t("articles.blog.notFoundBody")}</p>
            <Link href="/blog">
              <Button className="bg-[#f5a623] hover:bg-[#e09415] rounded-md text-sm px-8 h-11">
                {t("articles.indexTitle")}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const body = article.content[locale as "NL" | "EN" | "DE" | "FR"] ?? article.content.NL;
  const title = t(`articles.items.${article.itemKey}.title`);
  const excerpt = t(`articles.items.${article.itemKey}.excerpt`);
  const category = t(`articles.categories.${article.categoryKey}`);

  const related = article.related
    .map((s) => BLOG_ARTICLES.find((a) => a.slug === s))
    .filter(Boolean) as typeof BLOG_ARTICLES;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <header className="relative bg-[#111c27] text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={article.image}
              alt={title}
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111c27] via-[#111c27]/80 to-[#111c27]/40" />
          </div>

          <div className="relative max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-[#f5a623] transition-colors mb-6"
            >
              <BookOpen className="size-3" />
              {t("articles.eyebrow")}
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-[#f5a623]">
                {category}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60">
                <Clock className="size-3" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-5">
              {title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              {excerpt}
            </p>

            <div className="mt-8 flex items-center gap-4 text-[12px] text-white/50">
              <span>{t("articles.blog.publishedOn")} {formatDate(article.publishedAt, locale)}</span>
              <span className="text-white/20">·</span>
              <span>{t("articles.blog.writtenBy")} {article.authorName}</span>
            </div>
          </div>
        </header>

        {/* ── Body ── */}
        <article className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="font-montserrat text-lg sm:text-xl text-[#2b3e51] leading-relaxed mb-10 first-letter:font-black first-letter:text-4xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-[#f5a623]">
            {body.intro}
          </p>

          {body.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="font-montserrat text-xl sm:text-2xl font-black text-[#2b3e51] tracking-tight leading-tight mb-3 flex items-baseline gap-3">
                <span className="text-[#f5a623] font-black text-base tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-8 text-[12px] font-bold uppercase tracking-widest text-[#2b3e51]/60 hover:text-[#f5a623] transition-colors"
          >
            {t("articles.blog.backToOverview")}
          </Link>
        </article>

        {/* ── Related ── */}
        {related.length > 0 && (
          <section className="bg-[#f8f9fb] border-t border-gray-100 py-12 lg:py-16">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1">
                {t("articles.blog.relatedTitle")}
              </p>
              <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-[#2b3e51] tracking-tight mb-8">
                {t("articles.eyebrow")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((r) => {
                  const rTitle = t(`articles.items.${r.itemKey}.title`);
                  const rExcerpt = t(`articles.items.${r.itemKey}.excerpt`);
                  const rCategory = t(`articles.categories.${r.categoryKey}`);
                  return (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#f5a623]/40 hover:shadow-md transition-all duration-300"
                    >
                      <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                        <Image
                          src={r.image}
                          alt={rTitle}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white bg-[#f5a623]">
                          {rCategory}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-montserrat text-base font-black text-[#2b3e51] leading-snug tracking-tight mb-2 group-hover:text-[#f5a623] transition-colors line-clamp-2">
                          {rTitle}
                        </h3>
                        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2 mb-3">
                          {rExcerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#f5a623]">
                          {t("articles.readArticle")}
                          <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
