"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { motion } from "framer-motion";

const HERO_PRODUCTS = [
  {
    id: 48,
    name: "Wild West Cowboy",
    price: "€ 49.95",
    image: "https://www.uegholland.com/media/catalog/product/_/0/_0116_60007379.jpg",
    rotate: -10,
    x: -80,
    y: 30,
    scale: 0.82,
    z: 0,
  },
  {
    id: 156,
    name: "Vintage Street Chrome",
    price: "€ 34.95",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60001317_22.jpg",
    rotate: 0,
    x: 0,
    y: 0,
    scale: 1,
    z: 10,
  },
  {
    id: 151,
    name: "Armor Case Brushed Chrome",
    price: "€ 59.95",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60000849_22.jpg",
    rotate: 10,
    x: 80,
    y: 30,
    scale: 0.82,
    z: 0,
  },
];

const STATS = [
  { value: "1400+", label: "Zippo modellen" },
  { value: "98 jr", label: "vakmanschap" },
  { value: "4.8★", label: "Google reviews" },
];

export default function HeroCarousel() {
  return (
    <section className="relative bg-[#0d1520] overflow-hidden min-h-[560px] md:min-h-[640px] flex items-center">

      {/* Background texture: subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Green glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#829e85]/10 blur-[100px] pointer-events-none" />

      {/* Green glow right (behind products) */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#829e85]/12 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 max-w-lg"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <Flame className="size-3.5 text-[#829e85]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#829e85]">
                Nijmegen's aansteker specialist
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-montserrat font-black leading-[0.88] tracking-tighter text-white">
                <span className="block text-6xl sm:text-7xl lg:text-8xl">1400+</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white/90">Zippo</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#829e85]">Aanstekers</span>
              </h1>
              {/* Green accent line */}
              <div className="mt-5 h-[3px] w-20 bg-[#829e85]" />
            </div>

            {/* Sub */}
            <p className="text-white/55 text-[15px] leading-relaxed font-medium">
              De grootste collectie van de regio — elk model, elk ontwerp.
              Online besteld, morgen in huis.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/aanstekers"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#829e85] hover:bg-[#6f8a72] text-white font-black uppercase tracking-widest text-[11px] transition-all duration-300 hover:gap-3.5 group"
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

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-2 border-t border-white/8">
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="flex flex-col">
                    <span className="font-montserrat text-xl font-black text-white tracking-tight">{s.value}</span>
                    <span className="text-[10px] text-white/35 uppercase tracking-wider font-bold">{s.label}</span>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="h-8 w-px bg-white/10" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Product showcase ── */}
          <div className="relative flex items-center justify-center h-[340px] md:h-[420px]">
            {HERO_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40, rotate: product.rotate * 0.5 }}
                animate={{ opacity: 1, y: product.y, rotate: product.rotate }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  translateX: product.x,
                  zIndex: product.z,
                  scale: product.scale,
                }}
                whileHover={product.z === 10 ? { scale: 1.05, transition: { duration: 0.3 } } : undefined}
                className="flex flex-col items-center gap-2"
              >
                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #1a2535 0%, #111820 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    width: product.z === 10 ? 180 : 148,
                    height: product.z === 10 ? 220 : 180,
                    boxShadow: product.z === 10
                      ? "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(130,158,133,0.15)"
                      : "0 20px 50px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-5"
                    unoptimized
                  />
                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Price tag — only on center product */}
                {product.z === 10 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="px-4 py-1.5 rounded-full text-[11px] font-black text-white tracking-wider"
                    style={{ background: "rgba(130,158,133,0.25)", border: "1px solid rgba(130,158,133,0.4)" }}
                  >
                    {product.price}
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Floating "Zippo" badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute top-4 right-0 md:right-4 flex flex-col items-end gap-1"
            >
              <div className="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.3em] text-[#829e85]"
                style={{ background: "rgba(130,158,133,0.12)", border: "1px solid rgba(130,158,133,0.2)" }}>
                Authentiek
              </div>
              <div className="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.3em] text-white/50"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                Levenslange garantie
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d1520]/60 to-transparent pointer-events-none" />
    </section>
  );
}
