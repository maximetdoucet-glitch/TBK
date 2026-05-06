"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

const HERO_CLIPS = [
  "https://assets.mixkit.co/videos/21065/21065-720.mp4",
  "https://assets.mixkit.co/videos/40502/40502-720.mp4",
  "https://assets.mixkit.co/videos/12288/12288-720.mp4",
  "https://assets.mixkit.co/videos/47354/47354-720.mp4",
];
const CLIP_DURATION_MS = 3000;

export default function HeroCarousel() {
  const { t } = useLocale();
  const [activeClip, setActiveClip] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveClip((i) => (i + 1) % HERO_CLIPS.length);
    }, CLIP_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const v = videoRefs.current[activeClip];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [activeClip]);

  return (
    <section className="relative bg-white">
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 lg:pt-8 pb-8 lg:pb-14">

        {/* ── Hero banner ── */}
        <Link
          href="/aanstekers"
          className="group relative block overflow-hidden rounded-xl sm:rounded-2xl aspect-[1/1] sm:aspect-[16/9] lg:aspect-[21/9] bg-[#0a121c]"
        >
          {/* Background videos — stacked, fade between each */}
          {HERO_CLIPS.map((src, i) => (
            <video
              key={src}
              ref={(el) => { videoRefs.current[i] = el; }}
              src={src}
              autoPlay={i === 0}
              muted
              playsInline
              loop
              preload={i < 2 ? "auto" : "metadata"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === activeClip ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dark overlay for text legibility — vertical gradient on mobile, horizontal on desktop */}
          <div
            aria-hidden
            className="absolute inset-0 sm:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,18,28,0.9) 0%, rgba(10,18,28,0.7) 30%, rgba(10,18,28,0.45) 60%, rgba(10,18,28,0.25) 100%)",
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

          {/* Content — title stacked above CTA, centered upper-middle on mobile, vertically centered on desktop */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-3xl">
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
              className="text-white mt-4 sm:mt-5 max-w-xl leading-relaxed text-[13px] sm:text-[15px] lg:text-[17px] font-medium"
              style={{ textShadow: "0 1px 12px rgba(10,18,28,0.85), 0 1px 2px rgba(10,18,28,0.6)" }}
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
