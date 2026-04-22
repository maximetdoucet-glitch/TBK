"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 0,
    image: "/images/tbk-hero-final.png",
    eyebrow: "TBK Lightshop — Nijmegen",
    headline: ["1400+", "Zippo", "Aanstekers"],
    sub: "De grootste verzamelcollectie van de regio. Elk model, elk ontwerp.",
    cta: { label: "Bekijk collectie", href: "#" },
    ctaSecondary: { label: "Alle aanstekers", href: "/aanstekers" },
    theme: "dark",
    accent: "#829e85",
  },
  {
    id: 1,
    image: "/images/haddock-banner-clipper.png",
    eyebrow: "Nieuw binnen",
    headline: ["Clipper", "Metal", "Edition"],
    sub: "Navulbaar. Duurzaam. Iconisch design voor elke dag.",
    cta: { label: "Bekijk Clipper", href: "/aanstekers" },
    ctaSecondary: null,
    theme: "light",
    accent: "#f39c12",
  },
  {
    id: 2,
    image: "/images/haddock-banner-cutters.png",
    eyebrow: "Sigaren accessoires",
    headline: ["Premium", "Knippers", "& Humidors"],
    sub: "Vakmanschap voor de echte sigarenliefhebber.",
    cta: { label: "Bekijk accessoires", href: "#" },
    ctaSecondary: null,
    theme: "dark",
    accent: "#829e85",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setActive(idx);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const prev = () => goTo((active - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo]);

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(next, 5500);
    return () => clearTimeout(t);
  }, [active, next]);

  const slide = SLIDES[active];
  const isDark = slide.theme === "dark";

  return (
    <section className="relative bg-[#111] overflow-hidden select-none">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={s.image}
            alt={s.headline.join(" ")}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay gradient — adapts to slide theme */}
      <div
        className={cn(
          "absolute inset-0 z-20 transition-all duration-700",
          isDark
            ? "bg-gradient-to-r from-black/75 via-black/30 to-black/10"
            : "bg-gradient-to-r from-black/55 via-black/20 to-transparent"
        )}
      />

      {/* Content */}
      <div className="relative z-30 max-w-[1300px] mx-auto px-6 sm:px-10 md:px-20 flex flex-col justify-center min-h-[420px] sm:min-h-[520px] md:min-h-[580px] py-16">
        <div key={active} className="animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-xl">
          {/* Eyebrow */}
          <p
            className="text-[10px] font-black uppercase tracking-[0.4em] mb-4"
            style={{ color: slide.accent }}
          >
            {slide.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="font-montserrat font-black leading-[0.9] tracking-tighter text-white mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Sub */}
          <p className="text-white/70 text-sm sm:text-base font-medium mb-8 max-w-sm leading-relaxed">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase tracking-widest text-[11px] text-white transition-all hover:gap-3"
              style={{ backgroundColor: slide.accent }}
            >
              {slide.cta.label}
              <ArrowRight className="size-4" />
            </Link>
            {slide.ctaSecondary && (
              <Link
                href={slide.ctaSecondary.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase tracking-widest text-[11px] text-white border border-white/40 hover:bg-white/10 transition-all"
              >
                {slide.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 size-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all border border-white/20 hover:scale-110"
        aria-label="Vorige slide"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 size-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all border border-white/20 hover:scale-110"
        aria-label="Volgende slide"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots + progress */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={cn(
              "transition-all duration-300 rounded-full bg-white",
              i === active ? "w-8 h-2 opacity-100" : "w-2 h-2 opacity-40 hover:opacity-70"
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 z-40 text-[11px] font-bold text-white/50 tracking-widest tabular-nums">
        {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>
    </section>
  );
}
