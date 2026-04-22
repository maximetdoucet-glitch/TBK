"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    id: 156,
    name: "Vintage Street Chrome",
    brand: "Zippo",
    price: "€ 44.90",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60001317_22.jpg",
    bg: "radial-gradient(ellipse at 60% 40%, #4a6fa5 0%, #1e3a5f 45%, #2b3e51 100%)",
    accent: "#4a6fa5",
  },
  {
    id: 33,
    name: "Hunting Dog Design",
    brand: "Zippo",
    price: "€ 49.90",
    image: "https://www.uegholland.com/media/catalog/product/_/0/_0140_60007371.jpg",
    bg: "radial-gradient(ellipse at 55% 45%, #5c4a1e 0%, #3b2d0e 40%, #1a1208 100%)",
    accent: "#c49a3c",
  },
  {
    id: 151,
    name: "Armor Case Brushed Chrome",
    brand: "Zippo",
    price: "€ 44.90",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60000849_22.jpg",
    bg: "radial-gradient(ellipse at 50% 40%, #2a3f55 0%, #16283a 45%, #0a141e 100%)",
    accent: "#7ab3d4",
  },
  {
    id: 48,
    name: "Wild West Cowboy",
    brand: "Zippo",
    price: "€ 52.90",
    image: "https://www.uegholland.com/media/catalog/product/_/0/_0116_60007379.jpg",
    bg: "radial-gradient(ellipse at 55% 45%, #6b3a1f 0%, #3d1f0a 45%, #1a0c04 100%)",
    accent: "#d47a3c",
  },
  {
    id: 7,
    name: "Harley-Davidson Logo",
    brand: "Zippo",
    price: "€ 72.90",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60004741-5_18.jpg",
    bg: "radial-gradient(ellipse at 55% 40%, #5c1a00 0%, #2e0d00 45%, #0f0400 100%)",
    accent: "#e85d00",
  },
];

const STATS = [
  { value: "1400+", label: "Zippo modellen" },
  { value: "98 jr", label: "vakmanschap" },
  { value: "4.8★", label: "Google reviews" },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 180 : -180,
    opacity: 0,
    scale: 0.85,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -180 : 180,
    opacity: 0,
    scale: 0.85,
  }),
};

export default function HeroCarousel() {
  const [[active, direction], setActive] = useState([0, 0]);

  const go = useCallback((next: number, dir: number) => {
    setActive([next, dir]);
  }, []);

  const prev = () => go((active - 1 + PRODUCTS.length) % PRODUCTS.length, -1);
  const next = useCallback(() => go((active + 1) % PRODUCTS.length, 1), [active, go]);

  useEffect(() => {
    const t = setTimeout(next, 5000);
    return () => clearTimeout(t);
  }, [active, next]);

  const product = PRODUCTS[active];

  return (
    <section className="relative bg-[#2b3e51] overflow-hidden min-h-[580px] md:min-h-[660px] flex items-center">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#f39c12]/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-[#f39c12]/10 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 max-w-lg"
          >
            <div className="flex items-center gap-2">
              <Flame className="size-3.5 text-[#f39c12]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f39c12]">
                Nijmegen&apos;s aansteker specialist
              </span>
            </div>

            <div>
              <h1 className="font-montserrat font-black leading-[0.88] tracking-tighter text-white">
                <span className="block text-6xl sm:text-7xl lg:text-8xl">1400+</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white/90">Zippo</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#f39c12]">Aanstekers</span>
              </h1>
              <div className="mt-5 h-[3px] w-20 bg-[#f39c12]" />
            </div>

            <p className="text-white/55 text-[15px] leading-relaxed font-medium">
              De grootste collectie van de regio — elk model, elk ontwerp.
              Online besteld, morgen in huis.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/aanstekers"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#f39c12] hover:bg-[#e08910] text-white font-black uppercase tracking-widest text-[11px] transition-all duration-300 group hover:gap-3.5"
              >
                Bekijk collectie
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 hover:border-white/40 text-white/60 hover:text-white font-bold uppercase tracking-widest text-[11px] transition-all duration-300"
              >
                Onze merken
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-white/8">
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="flex flex-col">
                    <span className="font-montserrat text-xl font-black text-white tracking-tight">{s.value}</span>
                    <span className="text-[10px] text-white/35 uppercase tracking-wider font-bold">{s.label}</span>
                  </div>
                  {i < STATS.length - 1 && <div className="h-8 w-px bg-white/10" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Product Carousel ── */}
          <div className="flex flex-col items-center gap-6">

            {/* Card + arrows row */}
            <div className="flex items-center gap-4 w-full justify-center">

              {/* Prev arrow */}
              <button
                onClick={prev}
                className="shrink-0 size-11 rounded-full border border-white/12 bg-white/5 hover:bg-white/12 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                aria-label="Vorige"
              >
                <ChevronLeft className="size-5" />
              </button>

              {/* Product card */}
              <div className="relative w-[260px] h-[340px] flex-shrink-0">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Link href={`/product/${product.id}`} className="block w-full h-full group">
                      <div
                        className="relative w-full h-full rounded-2xl overflow-hidden"
                        style={{
                          background: "#1e2d3d",
                          border: "1px solid rgba(255,255,255,0.08)",
                          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
                        }}
                      >
                        {/* White area — multiply blend removes white from product image */}
                        <div className="relative w-full h-[260px] bg-white">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                            style={{ mixBlendMode: "multiply" }}
                            unoptimized
                          />
                          {/* Fade bottom of white area into dark card */}
                          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                            style={{ background: "linear-gradient(to top, #1e2d3d 0%, transparent 100%)" }} />
                        </div>

                        {/* Info bar */}
                        <div className="px-5 py-4 flex items-end justify-between">
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#f39c12] mb-0.5">{product.brand}</p>
                            <p className="text-white font-black text-[13px] leading-tight">{product.name}</p>
                          </div>
                          <span
                            className="text-[13px] font-black text-white px-3 py-1.5 rounded-lg shrink-0 ml-3"
                            style={{ background: "rgba(243,156,18,0.18)", border: "1px solid rgba(243,156,18,0.45)" }}
                          >
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next arrow */}
              <button
                onClick={next}
                className="shrink-0 size-11 rounded-full border border-white/12 bg-white/5 hover:bg-white/12 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                aria-label="Volgende"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Dot navigation + thumbnails */}
            <div className="flex items-center gap-2">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    i === active
                      ? "w-7 h-2 bg-[#f39c12]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/45"
                  )}
                  aria-label={p.name}
                />
              ))}
            </div>

            {/* Thumbnail strip */}
            <div className="flex items-center gap-2">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  className={cn(
                    "relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0",
                    i === active
                      ? "ring-2 ring-[#f39c12] ring-offset-2 ring-offset-[#2b3e51] opacity-100"
                      : "opacity-35 hover:opacity-65"
                  )}
                  style={{ background: "#243347", border: "1px solid rgba(255,255,255,0.06)" }}
                  aria-label={p.name}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-1.5"
                    unoptimized
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#2b3e51]/60 to-transparent pointer-events-none" />
    </section>
  );
}
