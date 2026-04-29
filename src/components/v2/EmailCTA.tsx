"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

export default function EmailCTA() {
  const { t } = useLocale();
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
        <div className="w-[700px] h-[300px] bg-[#f5a623]/10 rounded-full blur-[90px]" />
      </div>
      {/* Subtle left warmth */}
      <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-[#f5a623]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">

        {/* ── Desktop: 3-zone horizontal band ── */}
        <div className="hidden lg:grid grid-cols-[220px_1px_1fr_1px_1fr] items-center gap-0">

          {/* Zone 1 — 10% anchor */}
          <div className="flex flex-col items-center justify-center pr-10 gap-1 text-center">
            <span className="font-montserrat text-[88px] font-black text-[#f5a623] leading-none tracking-tighter">
              10%
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                {t("email.badgeLine1")}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                {t("email.badgeLine2")}
              </span>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="self-stretch bg-white/8" />

          {/* Zone 2 — offer text */}
          <div className="flex flex-col justify-center gap-3 px-10">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-[#f5a623]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                {t("email.eyebrow")}
              </span>
            </div>
            <h2 className="font-montserrat font-black text-white text-3xl tracking-tighter leading-[0.95]">
              {t("email.titleLine1")}<br />
              <span className="text-[#f5a623]">{t("email.titleLine2")}</span>
            </h2>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs">
              {t("email.description")}
            </p>
          </div>

          {/* Divider 2 */}
          <div className="self-stretch bg-white/8" />

          {/* Zone 3 — form */}
          <div className="flex flex-col justify-center gap-4 pl-10">
            {submitted ? (
              <div className="flex flex-col gap-2 py-4">
                <p className="font-montserrat font-black text-white text-xl tracking-tight">
                  {t("email.successTitle")}
                </p>
                <p className="text-[#f5a623] text-sm">
                  {t("email.successBody")}
                </p>
              </div>
            ) : (
              <>
                {/* Social proof — top */}
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    {["bg-[#f5a623]", "bg-[#4a7c5e]", "bg-[#f5a623]", "bg-[#2b3e51]"].map((cls) => (
                      <div
                        key={cls}
                        className={`size-6 rounded-full border-[1.5px] border-[#0f0d0a] ${cls}`}
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-white/30">
                    <span className="text-white/50 font-bold">2.400+</span> {t("email.socialProof")}
                  </p>
                </div>

                {/* Trust checks — middle */}
                <div className="flex items-center gap-4 text-[11px] text-white/25">
                  {(["noSpam", "unsubscribe", "instant"] as const).map((k) => (
                    <span key={k} className="flex items-center gap-1.5">
                      <span className="text-[#f5a623] text-xs">✓</span>
                      {t(`email.trust.${k}`)}
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
                    placeholder={t("email.placeholder")}
                    className="flex-1 h-12 px-5 bg-white/6 border border-white/12 hover:border-white/22 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#f5a623]/40 focus:bg-white/8 transition-all rounded-lg"
                  />
                  <button
                    type="submit"
                    className="h-12 px-6 bg-[#f5a623] hover:bg-[#e08e0b] text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition-colors shrink-0 rounded-lg group whitespace-nowrap"
                  >
                    {t("email.submit")}
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
          <div className="flex items-baseline gap-2 bg-[#f5a623]/12 border border-[#f5a623]/25 rounded-2xl px-7 py-4">
            <span className="font-montserrat text-5xl font-black text-[#f5a623] leading-none tracking-tighter">
              10%
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#f5a623]/70 leading-snug text-left">
              {t("email.badgeLine1")}<br />{t("email.badgeLine2")}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-montserrat font-black text-white text-3xl tracking-tighter leading-[0.95]">
              {t("email.titleLine1")}<br />
              <span className="text-[#f5a623]">{t("email.titleLine2")}</span>
            </h2>
            <p className="text-[13px] text-white/40 max-w-xs mx-auto leading-relaxed">
              {t("email.descriptionMobile")}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-2">
              <p className="font-montserrat font-black text-white text-lg">{t("email.successTitle")}</p>
              <p className="text-[#f5a623] text-sm mt-1">{t("email.successBody")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("email.placeholder")}
                className="w-full h-12 px-5 bg-white/6 border border-white/12 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#f5a623]/40 rounded-lg text-center"
              />
              <button
                type="submit"
                className="w-full h-12 bg-[#f5a623] hover:bg-[#e08e0b] text-white font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 rounded-lg transition-colors group"
              >
                {t("email.submitMobile")}
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-[11px] text-white/25">
                ✓ {t("email.trust.noSpam")} &nbsp;·&nbsp; ✓ {t("email.trust.unsubscribe")} &nbsp;·&nbsp; ✓ {t("email.trust.instant")}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
