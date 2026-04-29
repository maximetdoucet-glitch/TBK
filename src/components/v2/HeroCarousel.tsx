"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

export default function HeroCarousel() {
  const { t } = useLocale();
  return (
    <section className="relative bg-white">
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 lg:pt-8 pb-8 lg:pb-14">

        {/* ── Hero banner ── */}
        <Link
          href="/aanstekers"
          className="group relative block overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1565555384748-b7032af559fc?w=1800&q=85&fit=crop"
            alt={t("hero.imageAlt")}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Dark overlay for text legibility — vertical gradient on mobile, horizontal on desktop */}
          <div
            aria-hidden
            className="absolute inset-0 sm:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,18,28,0.85) 0%, rgba(10,18,28,0.55) 35%, rgba(10,18,28,0.35) 65%, rgba(10,18,28,0.85) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,18,28,0.85) 0%, rgba(10,18,28,0.55) 45%, rgba(10,18,28,0.15) 80%, rgba(10,18,28,0) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end sm:justify-center px-6 pb-8 sm:pb-0 sm:px-12 lg:px-20 max-w-3xl">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#f5a623] mb-3 sm:mb-4">
              {t("hero.eyebrow")}
            </span>
            <h1
              className="font-montserrat font-black text-white leading-[0.95] tracking-[-0.035em]"
              style={{ fontSize: "clamp(34px, 9vw, 78px)" }}
            >
              {t("hero.titleLine1")}
              <br />
              {t("hero.titleLine2")}
            </h1>
            <p
              className="text-white/80 mt-4 sm:mt-5 max-w-xl leading-relaxed text-[13px] sm:text-[15px] lg:text-[17px]"
            >
              {t("hero.description")}
            </p>

            <div className="mt-5 sm:mt-7">
              <span className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#f5a623] hover:bg-[#e09415] text-[#1e2c3a] px-5 sm:px-7 py-3 sm:py-3.5 rounded-md font-bold text-[12px] sm:text-[13px] uppercase tracking-[0.16em] sm:tracking-[0.18em] transition-colors duration-300">
                {t("hero.cta")}
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
