"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroCarousel() {
  return (
    <section className="relative bg-white">
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-10 lg:pb-14">

        {/* ── Hero banner ── */}
        <Link
          href="/aanstekers"
          className="group relative block overflow-hidden rounded-2xl"
          style={{ aspectRatio: "21 / 9" }}
        >
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1565555384748-b7032af559fc?w=1800&q=85&fit=crop"
            alt="Aanstekers collectie"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Dark overlay for text legibility */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,18,28,0.85) 0%, rgba(10,18,28,0.55) 45%, rgba(10,18,28,0.15) 80%, rgba(10,18,28,0) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 max-w-3xl">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.4em] text-[#f5a623] mb-4">
              Tabaksspeciaalzaak Nijmegen
            </span>
            <h1
              className="font-montserrat font-black text-white leading-[0.95] tracking-[-0.035em]"
              style={{ fontSize: "clamp(36px, 5.6vw, 78px)" }}
            >
              500+ verschillende
              <br />
              benodigdheden
            </h1>
            <p
              className="text-white/80 mt-5 max-w-xl leading-relaxed"
              style={{ fontSize: "clamp(14px, 1.2vw, 17px)" }}
            >
              De grootste collectie rokersbenodigdheden van Nijmegen — Zippo,
              Clipper, pijp-accessoires en meer.
            </p>

            <div className="mt-7">
              <span className="inline-flex items-center gap-3 bg-[#f5a623] hover:bg-[#e09415] text-[#1e2c3a] px-7 py-3.5 rounded-md font-bold text-[13px] uppercase tracking-[0.18em] transition-colors duration-300">
                Bekijk aanbod
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
