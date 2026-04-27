"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    id: 456,
    index: "01",
    name: "Zippo T-Rex Design",
    tagline: "Statement design op het iconische chassis — levenslange garantie inbegrepen.",
    price: "€ 52.90",
    image: "/products/P1-removebg-preview.png",
  },
  {
    id: 92,
    index: "02",
    name: "Bookwill Asbak Chrome",
    tagline: "11 cm massief chrome — gewicht in de basis, as die niet wegwaait.",
    price: "€ 8.50",
    image: "/products/P2-removebg-preview.png",
  },
  {
    id: 286,
    index: "03",
    name: "Bookwill Humidor 25 Sigaren",
    tagline: "Tobacco Leaf afwerking, cederhouten interieur — bewaart sigaren weken in topconditie.",
    price: "€ 138.50",
    image: "/products/P3-removebg-preview.png",
  },
  {
    id: 226,
    index: "04",
    name: "Bookwill Pijp-Bestek Polished",
    tagline: "3-delig: aandrukker, ruimer, prikker. Het complete onderhoud in één set.",
    price: "€ 10.99",
    image: "/products/P4-removebg-preview.png",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  const go = useCallback((i: number) => {
    setActive(i);
  }, []);

  const next = useCallback(() => go((active + 1) % PRODUCTS.length), [active, go]);

  useEffect(() => {
    const t = setTimeout(next, 6000);
    return () => clearTimeout(t);
  }, [active, next]);

  const p = PRODUCTS[active];

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        background: "#0b0f14",
        minHeight: "clamp(580px, 90vh, 780px)",
      }}
    >
      {/* ── Background photo ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1734984099763-717aafbd419f?w=1600&q=85&fit=crop"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.33 }}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f14] via-[#0b0f14]/70 to-[#0b0f14]/50" />
      </div>

      {/* ── Subtle horizontal scan line ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)",
        }}
      />

      {/* ── Left edge: vertical label ── */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20">
        <div className="w-px h-16 bg-white/15" />
        <span
          className="text-[9px] font-black uppercase tracking-[0.4em] text-white/25"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Tabaksspeciaalzaak Nijmegen
        </span>
        <div className="w-px h-16 bg-white/15" />
      </div>

      {/* ── Main layout ── */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px_220px] gap-8 lg:gap-0 items-center">

          {/* ── Col 1: Copy ── */}
          <div className="flex flex-col gap-8 pr-0 lg:pr-12">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.45em] text-white/40">
                Nijmegen · Nederland
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col">
              <span
                className="font-montserrat font-black text-white leading-[0.85] tracking-tighter"
                style={{ fontSize: "clamp(52px, 8vw, 108px)" }}
              >
                300+
              </span>
              <span
                className="font-montserrat font-black text-white/80 leading-[0.85] tracking-tighter"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
              >
                Aanstekers
              </span>
              <span
                className="font-montserrat font-black text-white/30 leading-[0.85] tracking-tighter mt-1"
                style={{ fontSize: "clamp(20px, 3vw, 38px)" }}
              >
                in één collectie
              </span>
            </div>

            {/* Active product tagline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-white/45 text-[14px] leading-relaxed max-w-xs font-medium"
              >
                {p.tagline}
              </motion.p>
            </AnimatePresence>

            {/* CTA — minimal, no button shape */}
            <div className="flex items-center gap-8">
              <Link
                href="/aanstekers"
                className="group flex items-center gap-3 text-[#f5a623] font-black uppercase tracking-[0.2em] text-[11px] hover:gap-4 transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-full border border-[#f5a623]/40 flex items-center justify-center group-hover:bg-[#f5a623]/15 group-hover:border-[#f5a623]/70 transition-all duration-300">
                  <ArrowRight className="size-3.5 text-[#f5a623]" />
                </span>
                Bekijk collectie
              </Link>
              <Link
                href="#"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors"
              >
                Onze merken
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-7 pt-2">
              {[
                { v: "300+", l: "modellen" },
                { v: "5+", l: "merken" },
                { v: "4.8★", l: "reviews" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span className="font-montserrat text-lg font-black text-white tracking-tight">{s.v}</span>
                  <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Col 2: Product ── */}
          <div className="relative flex items-center justify-center h-[380px] lg:h-[480px]">

            {/* Studio light: radial gradient so multiply-blend works */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse at 50% 48%, #c8d0d8 0%, #4a5666 45%, transparent 72%)",
                opacity: 0.28,
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Link href={`/product/${p.id}`} className="block relative w-full h-full group">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* CTA button — bottom of product area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
              >
                <Link
                  href={`/product/${p.id}`}
                  className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 rounded-lg"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/70 group-hover:text-white transition-colors duration-300">Ga naar product</span>
                  <ArrowRight className="size-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Col 3: Product selector ── */}
          <div className="hidden lg:flex flex-col gap-1 pl-10 border-l border-white/8">
            {PRODUCTS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(i)}
                className="group flex items-center gap-4 py-3 text-left transition-all duration-300"
              >
                <span className={`font-montserrat text-[11px] font-black tabular-nums transition-colors duration-300 ${i === active ? "text-white" : "text-white/20 group-hover:text-white/50"}`}>
                  {item.index}
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className={`text-[12px] font-black leading-tight truncate transition-colors duration-300 ${i === active ? "text-white" : "text-white/20 group-hover:text-white/50"}`}>
                    {item.name}
                  </span>
                  <span className={`text-[10px] font-bold transition-colors duration-300 ${i === active ? "text-white/40" : "text-white/10"}`}>
                    {item.price}
                  </span>
                </div>
                {/* Active indicator */}
                <div className={`ml-auto w-1 rounded-full flex-shrink-0 transition-all duration-400 ${i === active ? "h-8 bg-white" : "h-1 bg-white/15"}`} />
              </button>
            ))}

            {/* Progress line */}
            <div className="mt-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white/50"
                  animate={{ width: `${((active + 1) / PRODUCTS.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-[10px] font-black text-white/25 tabular-nums">
                {String(active + 1).padStart(2, "0")}/{String(PRODUCTS.length).padStart(2, "0")}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0b0f14] to-transparent pointer-events-none" />
    </section>
  );
}
