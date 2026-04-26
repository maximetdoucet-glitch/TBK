"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Wind } from "lucide-react";
import { useState } from "react";

const PANELS = [
  {
    id: "aanstekers",
    name: "Aanstekers",
    tagline: "336 modellen",
    description: "Van tijdloze Zippo's tot betrouwbare Clipper en Ronson — de grootste selectie aanstekers in Nederland.",
    href: "/aanstekers",
    image: "https://images.unsplash.com/photo-1565555384748-b7032af559fc?w=1400&q=85&fit=crop",
    accent: "#f5a623",
    accentDim: "#c8841a",
    icon: Flame,
    stats: [
      { value: "170+", label: "Zippo modellen" },
      { value: "149", label: "Regulier & Clipper" },
      { value: "12", label: "Zippo accessoires" },
    ],
    brands: ["Zippo", "Clipper", "Ronson", "LUX", "Prof", "Zorr"],
    cta: "Bekijk collectie",
  },
  {
    id: "rook",
    name: "Rook-accessoires",
    tagline: "113 producten",
    description: "Alles voor de roker — sigarettenaccessoires, sigaren-etuis, pijpen en cannabis-accessoires.",
    href: "#",
    image: "https://images.unsplash.com/photo-1764270720063-bdc0ee2c5c72?w=1400&q=85&fit=crop",
    accent: "#c8922a",
    accentDim: "#9e6f1e",
    icon: Wind,
    stats: [
      { value: "70", label: "Sigaret-accessoires" },
      { value: "28", label: "Sigaren-accessoires" },
      { value: "15", label: "Pijpen & cannabis" },
    ],
    brands: ["Champ", "Bookwill", "Gizeh", "OCB", "Rizla", "Prof"],
    cta: "Bekijk collectie",
  },
];

export default function CategoryShowcase() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1">
              Ons assortiment
            </p>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              Productcategorieën
            </h2>
          </div>
          <Link
            href="/aanstekers"
            className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/50 hover:text-[#f5a623] transition-colors"
          >
            Alles bekijken <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* ── Desktop: interactive split panels ── */}
        <div
          className="hidden md:flex rounded-2xl overflow-hidden"
          style={{ height: 480 }}
          onMouseLeave={() => setHovered(null)}
        >
          {PANELS.map((panel) => {
            const isHovered = hovered === panel.id;
            const isOtherHovered = hovered !== null && !isHovered;
            const Icon = panel.icon;

            return (
              <Link
                key={panel.id}
                href={panel.href}
                className="relative overflow-hidden flex-shrink-0 transition-all duration-500 ease-in-out group cursor-pointer"
                style={{
                  flexBasis: isHovered ? "62%" : isOtherHovered ? "38%" : "50%",
                }}
                onMouseEnter={() => setHovered(panel.id)}
              >
                {/* Background image */}
                <Image
                  src={panel.image}
                  alt={panel.name}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-700"
                  style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)",
                    opacity: isHovered ? 1 : 0.85,
                  }}
                />

                {/* Accent top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
                  style={{ background: panel.accent, opacity: isHovered ? 1 : 0 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">

                  {/* Icon badge */}
                  <div
                    className="mb-4 size-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? panel.accent : "rgba(255,255,255,0.1)",
                      opacity: isHovered ? 1 : 0.7,
                    }}
                  >
                    <Icon className="size-5 text-white" />
                  </div>

                  {/* Label */}
                  <p
                    className="text-[9px] font-black uppercase tracking-[0.4em] mb-1 transition-opacity duration-300"
                    style={{ color: panel.accent, opacity: isHovered ? 1 : 0.8 }}
                  >
                    {panel.tagline}
                  </p>

                  {/* Name */}
                  <h3 className="font-montserrat font-black text-white tracking-tighter leading-none mb-3 transition-all duration-300"
                    style={{ fontSize: isHovered ? "2.5rem" : "1.875rem" }}
                  >
                    {panel.name}
                  </h3>

                  {/* Description — only on hover */}
                  <div
                    className="transition-all duration-400 overflow-hidden"
                    style={{ maxHeight: isHovered ? 80 : 0, opacity: isHovered ? 1 : 0 }}
                  >
                    <p className="text-[13px] text-white/60 mb-5 leading-relaxed">
                      {panel.description}
                    </p>
                  </div>

                  {/* Stats row — only on hover */}
                  <div
                    className="flex gap-5 mb-5 transition-all duration-400 overflow-hidden"
                    style={{ maxHeight: isHovered ? 60 : 0, opacity: isHovered ? 1 : 0 }}
                  >
                    {panel.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <span className="font-montserrat text-xl font-black text-white leading-none" style={{ color: panel.accent }}>
                          {stat.value}
                        </span>
                        <span className="text-[10px] text-white/45 mt-0.5">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Brands — always visible */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {panel.brands.map((brand) => (
                      <span
                        key={brand}
                        className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300"
                        style={{
                          borderColor: isHovered ? `${panel.accent}60` : "rgba(255,255,255,0.15)",
                          color: isHovered ? panel.accent : "rgba(255,255,255,0.5)",
                          background: isHovered ? `${panel.accent}15` : "transparent",
                        }}
                      >
                        {brand}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div>
                    <span
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300"
                      style={{
                        background: isHovered ? panel.accent : "rgba(255,255,255,0.12)",
                        color: "white",
                        border: isHovered ? `1px solid ${panel.accent}` : "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {panel.cta}
                      <ArrowRight
                        className="size-3 transition-transform duration-300"
                        style={{ transform: isHovered ? "translateX(2px)" : "translateX(0)" }}
                      />
                    </span>
                  </div>
                </div>

                {/* Vertical divider glow on non-hovered side */}
                {!isHovered && hovered !== null && (
                  <div className="absolute inset-0 bg-black/20 transition-all duration-500" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {PANELS.map((panel) => {
            const Icon = panel.icon;
            return (
              <Link
                key={panel.id}
                href={panel.href}
                className="group relative overflow-hidden rounded-xl bg-gray-900"
                style={{ height: 200 }}
              >
                <Image
                  src={panel.image}
                  alt={panel.name}
                  fill
                  unoptimized
                  className="object-cover object-center opacity-75 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div
                    className="mb-2 size-8 rounded-lg flex items-center justify-center"
                    style={{ background: panel.accent }}
                  >
                    <Icon className="size-4 text-white" />
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-0.5" style={{ color: panel.accent }}>
                    {panel.tagline}
                  </p>
                  <h3 className="font-montserrat text-2xl font-black text-white tracking-tight">
                    {panel.name}
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
