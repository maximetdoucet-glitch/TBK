"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Box, Scissors, Wind } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";

const PANELS = [
  {
    id: "aanstekers",
    tKey: "aanstekers",
    href: "/aanstekers",
    image: "https://images.unsplash.com/photo-1565555384748-b7032af559fc?w=1400&q=85&fit=crop",
    accent: "#f5a623",
    icon: Flame,
    statValues: ["170+", "149", "12"],
    statKeys: ["zippoModels", "clipperRegular", "zippoAcc"],
    brands: ["Zippo", "Clipper", "Ronson", "LUX", "Prof", "Zorr"],
  },
  {
    id: "kokers",
    tKey: "kokers",
    href: "/kokers-etuis",
    image: "https://images.unsplash.com/photo-1675010787842-17ff5beb6c9b?w=1400&q=85&fit=crop",
    accent: "#b07030",
    icon: Box,
    statValues: ["40+", "20+", "7"],
    statKeys: ["casesEtuis", "filtersHolders", "brands"],
    brands: ["Belbox", "Bookwill", "Denicotea", "Wildfire", "Zorr", "Champ"],
  },
  {
    id: "knippers",
    tKey: "knippers",
    href: "/knippers-asbakken",
    image: "https://images.unsplash.com/photo-1756362728219-239765919a4f?w=1400&q=85&fit=crop",
    accent: "#8a8a8a",
    icon: Scissors,
    statValues: ["15+", "8+", "6"],
    statKeys: ["cutters", "ashtrays", "brands"],
    brands: ["Bookwill", "Faro", "Fox", "Formula", "Zippo", "Zorr"],
  },
  {
    id: "rook",
    tKey: "rook",
    href: "/rook-accessoires",
    image: "https://images.unsplash.com/photo-1673905513691-307991ec74ed?w=1400&q=85&fit=crop",
    accent: "#4a90a4",
    icon: Wind,
    statValues: ["9", "3", "2"],
    statKeys: ["grinders", "pipeSets", "brands"],
    brands: ["Champ", "Bookwill"],
  },
] as const;

export default function CategoryShowcase() {
  const { t } = useLocale();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-white pt-8 sm:pt-14 pb-8 sm:pb-14">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-5 sm:mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1">
              {t("categoryShowcase.eyebrow")}
            </p>
            <h2 className="font-montserrat text-2xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              {t("categoryShowcase.heading")}
            </h2>
          </div>
          <Link
            href="/aanstekers"
            className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/50 hover:text-[#f5a623] transition-colors"
          >
            {t("categoryShowcase.viewAll")} <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* ── Desktop: 4-panel interactive split ── */}
        <div
          className="hidden md:flex rounded-2xl overflow-hidden"
          style={{ height: 500 }}
          onMouseLeave={() => setHovered(null)}
        >
          {PANELS.map((panel) => {
            const isHovered = hovered === panel.id;
            const isOtherHovered = hovered !== null && !isHovered;
            const Icon = panel.icon;
            const name = t(`categoryShowcase.${panel.tKey}.name`);
            const tagline = t(`categoryShowcase.${panel.tKey}.tagline`);
            const description = t(`categoryShowcase.${panel.tKey}.description`);
            const cta = t("categoryShowcase.cta");

            return (
              <Link
                key={panel.id}
                href={panel.href}
                className="relative overflow-hidden flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  flexBasis: isHovered ? "52%" : isOtherHovered ? "16%" : "25%",
                }}
                onMouseEnter={() => setHovered(panel.id)}
              >
                {/* Background image */}
                <Image
                  src={panel.image}
                  alt={name}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-700"
                  style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)",
                    opacity: isHovered ? 1 : isOtherHovered ? 0.85 : 0.75,
                  }}
                />

                {/* Dim overlay on non-hovered panels */}
                {isOtherHovered && (
                  <div className="absolute inset-0 bg-black/30 transition-all duration-500" />
                )}

                {/* Accent top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
                  style={{ background: panel.accent, opacity: isHovered ? 1 : 0 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">

                  {/* Icon badge */}
                  <div
                    className="mb-3 size-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0"
                    style={{
                      background: isHovered ? panel.accent : "rgba(255,255,255,0.12)",
                    }}
                  >
                    <Icon className="size-4 text-white" />
                  </div>

                  {/* Tagline */}
                  <p
                    className="text-[9px] font-black uppercase tracking-[0.4em] mb-1 whitespace-nowrap overflow-hidden transition-opacity duration-300"
                    style={{ color: panel.accent, opacity: isHovered ? 1 : 0.8 }}
                  >
                    {tagline}
                  </p>

                  {/* Name */}
                  <h3
                    className="font-montserrat font-black text-white leading-none mb-0 transition-all duration-300 whitespace-nowrap overflow-hidden"
                    style={{
                      fontSize: isHovered ? "2rem" : "1.1rem",
                      marginBottom: isHovered ? "0.75rem" : "0",
                    }}
                  >
                    {name}
                  </h3>

                  {/* Description — only on hover */}
                  <div
                    className="transition-all duration-400 overflow-hidden"
                    style={{ maxHeight: isHovered ? 60 : 0, opacity: isHovered ? 1 : 0 }}
                  >
                    <p className="text-[12px] text-white/60 mb-4 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Stats — only on hover */}
                  <div
                    className="flex gap-4 transition-all duration-400 overflow-hidden"
                    style={{ maxHeight: isHovered ? 56 : 0, opacity: isHovered ? 1 : 0 }}
                  >
                    {panel.statValues.map((value, i) => {
                      const statLabel = t(`categoryShowcase.${panel.tKey}.stats.${panel.statKeys[i]}`);
                      return (
                        <div key={panel.statKeys[i]} className="flex flex-col shrink-0">
                          <span className="font-montserrat text-lg font-black leading-none" style={{ color: panel.accent }}>
                            {value}
                          </span>
                          <span className="text-[9px] text-white/45 mt-0.5 whitespace-nowrap">{statLabel}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Brands — only on hover */}
                  <div
                    className="flex flex-wrap gap-1 transition-all duration-400 overflow-hidden"
                    style={{ maxHeight: isHovered ? 48 : 0, opacity: isHovered ? 1 : 0, marginTop: isHovered ? "0.75rem" : 0 }}
                  >
                    {panel.brands.map((brand) => (
                      <span
                        key={brand}
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all duration-300"
                        style={{
                          borderColor: `${panel.accent}60`,
                          color: panel.accent,
                          background: `${panel.accent}15`,
                        }}
                      >
                        {brand}
                      </span>
                    ))}
                  </div>

                  {/* CTA — only on hover */}
                  <div
                    className="transition-all duration-400 overflow-hidden"
                    style={{ maxHeight: isHovered ? 52 : 0, opacity: isHovered ? 1 : 0, marginTop: isHovered ? "1rem" : 0 }}
                  >
                    <span
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full text-white transition-all duration-300"
                      style={{ background: panel.accent }}
                    >
                      {cta}
                      <ArrowRight className="size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Mobile: 2x2 grid ── */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {PANELS.map((panel) => {
            const Icon = panel.icon;
            const name = t(`categoryShowcase.${panel.tKey}.name`);
            const tagline = t(`categoryShowcase.${panel.tKey}.tagline`);
            return (
              <Link
                key={panel.id}
                href={panel.href}
                className="group relative overflow-hidden rounded-xl bg-gray-900"
                style={{ height: 160 }}
              >
                <Image
                  src={panel.image}
                  alt={name}
                  fill
                  unoptimized
                  className="object-cover object-center opacity-70 group-hover:opacity-85 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div
                    className="mb-1.5 size-7 rounded-lg flex items-center justify-center"
                    style={{ background: panel.accent }}
                  >
                    <Icon className="size-3.5 text-white" />
                  </div>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] mb-0.5" style={{ color: panel.accent }}>
                    {tagline}
                  </p>
                  <h3 className="font-montserrat text-sm font-black text-white tracking-tight leading-tight">
                    {name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
