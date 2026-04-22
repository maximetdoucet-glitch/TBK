"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EmailCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#0f0d0a]">
      {/* Warm amber glow — centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-[#f39c12]/10 rounded-full blur-[90px]" />
      </div>
      {/* Subtle left warmth */}
      <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-[#f39c12]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">

        {/* ── Desktop: 3-zone horizontal band ── */}
        <div className="hidden lg:grid grid-cols-[220px_1px_1fr_1px_1fr] items-center gap-0">

          {/* Zone 1 — 10% anchor */}
          <div className="flex flex-col items-center justify-center pr-10 gap-1 text-center">
            <span className="font-montserrat text-[88px] font-black text-[#f39c12] leading-none tracking-tighter">
              10%
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                korting op je
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                eerste bestelling
              </span>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="self-stretch bg-white/8" />

          {/* Zone 2 — offer text */}
          <div className="flex flex-col justify-center gap-3 px-10">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-[#f39c12]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                Exclusief voor abonnees
              </span>
            </div>
            <h2 className="font-montserrat font-black text-white text-3xl tracking-tighter leading-[0.95]">
              Schrijf je in en<br />
              <span className="text-[#829e85]">ontvang direct je code</span>
            </h2>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs">
              Blijf op de hoogte van nieuwe collecties en deals. Alleen wat echt de moeite waard is.
            </p>
          </div>

          {/* Divider 2 */}
          <div className="self-stretch bg-white/8" />

          {/* Zone 3 — form */}
          <div className="flex flex-col justify-center gap-4 pl-10">
            {submitted ? (
              <div className="flex flex-col gap-2 py-4">
                <p className="font-montserrat font-black text-white text-xl tracking-tight">
                  🎉 Check je inbox!
                </p>
                <p className="text-[#829e85] text-sm">
                  Je kortingscode van 10% is onderweg.
                </p>
              </div>
            ) : (
              <>
                {/* Social proof — top */}
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    {["bg-[#829e85]", "bg-[#4a7c5e]", "bg-[#f39c12]", "bg-[#2b3e51]"].map((cls) => (
                      <div
                        key={cls}
                        className={`size-6 rounded-full border-[1.5px] border-[#0f0d0a] ${cls}`}
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-white/30">
                    <span className="text-white/50 font-bold">2.400+</span> abonnees gingen je voor
                  </p>
                </div>

                {/* Trust checks — middle */}
                <div className="flex items-center gap-4 text-[11px] text-white/25">
                  {["Geen spam", "Altijd uitschrijven", "Direct geldig"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span className="text-[#829e85] text-xs">✓</span>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Form — bottom */}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jouw@emailadres.nl"
                    className="flex-1 h-12 px-5 bg-white/6 border border-white/12 hover:border-white/22 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#f39c12]/40 focus:bg-white/8 transition-all rounded-lg"
                  />
                  <button
                    type="submit"
                    className="h-12 px-6 bg-[#f39c12] hover:bg-[#e08e0b] text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition-colors shrink-0 rounded-lg group whitespace-nowrap"
                  >
                    Ontvang 10%
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* ── Mobile: stacked ── */}
        <div className="lg:hidden flex flex-col items-center gap-6 text-center">
          {/* 10% badge */}
          <div className="flex items-baseline gap-2 bg-[#f39c12]/12 border border-[#f39c12]/25 rounded-2xl px-7 py-4">
            <span className="font-montserrat text-5xl font-black text-[#f39c12] leading-none tracking-tighter">
              10%
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#f39c12]/70 leading-snug text-left">
              korting op je<br />eerste bestelling
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-montserrat font-black text-white text-3xl tracking-tighter leading-[0.95]">
              Schrijf je in en<br />
              <span className="text-[#829e85]">ontvang direct je code</span>
            </h2>
            <p className="text-[13px] text-white/40 max-w-xs mx-auto leading-relaxed">
              Nieuwe collecties, exclusieve deals — direct in je inbox.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-2">
              <p className="font-montserrat font-black text-white text-lg">🎉 Check je inbox!</p>
              <p className="text-[#829e85] text-sm mt-1">Je kortingscode van 10% is onderweg.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@emailadres.nl"
                className="w-full h-12 px-5 bg-white/6 border border-white/12 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#f39c12]/40 rounded-lg text-center"
              />
              <button
                type="submit"
                className="w-full h-12 bg-[#f39c12] hover:bg-[#e08e0b] text-white font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 rounded-lg transition-colors group"
              >
                Ontvang 10% korting
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-[11px] text-white/25">
                ✓ Geen spam &nbsp;·&nbsp; ✓ Altijd uitschrijven &nbsp;·&nbsp; ✓ Direct geldig
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
