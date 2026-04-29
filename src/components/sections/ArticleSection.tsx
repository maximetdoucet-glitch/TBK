"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

type ArticleKey = "zippoChoice" | "zippoCare" | "clipperVsZippo";
type CategoryKey = "lighters" | "maintenance" | "comparison";

type Article = {
  id: number;
  itemKey: ArticleKey;
  categoryKey: CategoryKey;
  image: string;
  href: string;
  readTime: string;
  featured: boolean;
};

const ARTICLES: Article[] = [
  { id: 1, itemKey: "zippoChoice", categoryKey: "lighters", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&fit=crop", href: "/blog/zippo-kiezen", readTime: "5 min", featured: true },
  { id: 2, itemKey: "zippoCare", categoryKey: "maintenance", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=85&fit=crop", href: "/blog/zippo-onderhoud", readTime: "4 min", featured: false },
  { id: 3, itemKey: "clipperVsZippo", categoryKey: "comparison", image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=85&fit=crop", href: "/blog/clipper-vs-zippo", readTime: "3 min", featured: false },
];

function FeaturedCard({ article }: { article: Article }) {
  const { t } = useLocale();
  const [hovered, setHovered] = useState(false);
  const title = t(`articles.items.${article.itemKey}.title`);
  const excerpt = t(`articles.items.${article.itemKey}.excerpt`);
  const category = t(`articles.categories.${article.categoryKey}`);

  return (
    <Link
      href={article.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden">
        <Image
          src={article.image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-[#0d1520]/40 to-transparent" />

        {/* Category + read time */}
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-[#f5a623]/90">
            {category}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-bold text-white/70">
            <Clock className="size-3" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative bg-[#111c27] px-7 py-6 flex flex-col gap-3 border-t border-white/5">
        {/* Animated yellow bar */}
        <div
          className={`absolute top-0 left-0 h-[2px] bg-[#f5a623] transition-all duration-500 ${hovered ? "w-full" : "w-12"}`}
        />

        <h3 className="font-montserrat text-xl sm:text-2xl font-black text-white leading-tight tracking-tight group-hover:text-[#f5a623] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/45 text-[13px] leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-[#f5a623] text-[11px] font-black uppercase tracking-widest mt-1 group-hover:gap-3 transition-all duration-300">
          {t("articles.readArticle")} <ArrowRight className="size-3.5" />
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ article }: { article: Article }) {
  const { t } = useLocale();
  const [hovered, setHovered] = useState(false);
  const title = t(`articles.items.${article.itemKey}.title`);
  const excerpt = t(`articles.items.${article.itemKey}.excerpt`);
  const category = t(`articles.categories.${article.categoryKey}`);

  return (
    <Link
      href={article.href}
      className="group flex gap-4 p-4 rounded-xl border border-white/6 hover:border-[#f5a623]/30 hover:bg-white/3 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden">
        <Image
          src={article.image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0d1520]/30" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center gap-1.5 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-black uppercase tracking-widest text-[#f5a623]">{category}</span>
          <span className="text-white/25">·</span>
          <span className="flex items-center gap-1 text-[9px] text-white/40">
            <Clock className="size-2.5" />
            {article.readTime}
          </span>
        </div>
        <h3 className="font-montserrat text-[14px] font-black text-white leading-snug line-clamp-2 group-hover:text-[#f5a623] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/35 text-[11px] leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}

export default function ArticleSection() {
  const { t } = useLocale();
  const featured = ARTICLES.find((a) => a.featured)!;
  const secondary = ARTICLES.filter((a) => !a.featured);

  return (
    <section className="bg-[#111c27] py-16 sm:py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="size-3.5 text-[#f5a623]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f5a623]">{t("articles.eyebrow")}</span>
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {t("articles.headingLine1")} <span className="text-[#f5a623]">{t("articles.headingLine2")}</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-[#f5a623]/50 text-white/60 hover:text-white text-[11px] font-black uppercase tracking-widest rounded-lg transition-all duration-300 group self-start sm:self-auto"
          >
            {t("articles.viewAll")}
            <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Featured left */}
          <FeaturedCard article={featured} />

          {/* Right column: 2 smaller + CTA */}
          <div className="flex flex-col gap-4">
            {secondary.map((article) => (
              <SmallCard key={article.id} article={article} />
            ))}

            {/* Bottom CTA */}
            <div className="mt-auto pt-2">
              <Link
                href="/blog"
                className="flex items-center justify-between px-6 py-4 rounded-xl border border-white/8 hover:border-[#f5a623]/40 hover:bg-[#f5a623]/5 transition-all duration-300 group"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-0.5">{t("articles.moreLabel")}</p>
                  <p className="text-white font-black text-[14px] group-hover:text-[#f5a623] transition-colors">{t("articles.moreCta")}</p>
                </div>
                <div className="size-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#f5a623] group-hover:border-[#f5a623]/40 transition-all">
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
