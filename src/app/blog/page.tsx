"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import { useLocale } from "@/i18n/LocaleContext";
import { BLOG_ARTICLES } from "@/lib/blog";

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

export default function BlogIndexPage() {
  const { t, locale } = useLocale();

  // Sort newest first
  const sorted = [...BLOG_ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* ── Heading ── */}
        <section className="bg-[#111c27] text-white py-14 lg:py-20">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="size-3.5 text-[#f5a623]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f5a623]">
                {t("articles.eyebrow")}
              </span>
            </div>
            <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-4">
              {t("articles.blog.indexTitle")}
            </h1>
            <p className="text-white/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              {t("articles.blog.indexLead")}
            </p>
          </div>
        </section>

        {/* ── Article grid ── */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {sorted.map((a) => {
                const title = t(`articles.items.${a.itemKey}.title`);
                const excerpt = t(`articles.items.${a.itemKey}.excerpt`);
                const category = t(`articles.categories.${a.categoryKey}`);
                return (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#f5a623]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                      <Image
                        src={a.image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white bg-[#f5a623]">
                          {category}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold text-white bg-black/40 backdrop-blur-sm">
                          <Clock className="size-2.5" />
                          {a.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="font-montserrat text-base sm:text-lg font-black text-[#2b3e51] leading-snug tracking-tight mb-2 group-hover:text-[#f5a623] transition-colors line-clamp-2">
                        {title}
                      </h2>
                      <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3 mb-4">
                        {excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                        <span className="text-[11px] text-gray-400">{formatDate(a.publishedAt, locale)}</span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#f5a623]">
                          {t("articles.readArticle")}
                          <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
