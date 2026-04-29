"use client";

import React, { useState } from "react";
import { Plus, Minus, Award, Truck, ShieldCheck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleContext";

const STATS = [
  { value: "Nr. 1", labelKey: "specialist" },
  { value: "185+", labelKey: "zippoModels" },
  { value: "400+", labelKey: "products" },
  { value: "4.8 ★", labelKey: "reviews" },
] as const;

const PILLARS = [
  { icon: Award, key: "dealer" },
  { icon: Truck, key: "shipping" },
  { icon: ShieldCheck, key: "returns" },
  { icon: MapPin, key: "store" },
] as const;

const FAQ_KEYS = ["shipping", "shippingCost", "returns", "authentic", "store"] as const;

function Accordion({ faqKey }: { faqKey: string }) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border-b border-gray-100 last:border-0", open && "")}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span
          className={cn(
            "text-sm font-bold text-[#2b3e51] leading-snug transition-colors",
            open ? "text-[#f5a623]" : "group-hover:text-[#f5a623]"
          )}
        >
          {t(`about.faqs.${faqKey}.q`)}
        </span>
        <span
          className={cn(
            "shrink-0 size-6 rounded-full border flex items-center justify-center transition-all mt-0.5",
            open
              ? "bg-[#f5a623] border-[#f5a623] text-white"
              : "border-gray-200 text-gray-400 group-hover:border-[#f5a623] group-hover:text-[#f5a623]"
          )}
        >
          {open ? <Minus className="size-3" /> : <Plus className="size-3" />}
        </span>
      </button>
      {open && (
        <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-10 animate-in fade-in slide-in-from-top-1 duration-200">
          {t(`about.faqs.${faqKey}.a`)}
        </p>
      )}
    </div>
  );
}

export default function AboutSection() {
  const { t } = useLocale();
  return (
    <section className="bg-white">
      {/* ── Stats bar ── */}
      <div className="bg-[#2b3e51]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.labelKey}
                className="flex flex-col items-center justify-center py-6 sm:py-8 px-3 sm:px-4 gap-1 text-center"
              >
                <span className="font-montserrat text-2xl sm:text-4xl font-black text-white tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/40 leading-tight">
                  {t(`about.stats.${stat.labelKey}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About + Pillars ── */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          {/* Left — brand story */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-3">
              {t("about.eyebrow")}
            </p>
            <h2 className="font-montserrat text-3xl sm:text-5xl font-black text-[#2b3e51] tracking-tighter leading-[0.95] sm:leading-[0.92] mb-6 sm:mb-8">
              {t("about.titleLine1")}<br />
              <span className="text-[#f5a623]">{t("about.titleLine2")}</span>
            </h2>
            <div className="space-y-4 text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
              <p>{t("about.para1")}</p>
              <p>{t("about.para2")}</p>
            </div>

            {/* Pillar grid */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {PILLARS.map((p) => (
                <div key={p.key} className="group flex gap-4">
                  <div className="shrink-0 size-10 rounded-lg bg-[#f8f8f8] border border-gray-100 flex items-center justify-center group-hover:bg-[#f5a623] group-hover:border-[#f5a623] transition-all duration-300">
                    <p.icon className="size-4.5 text-[#f5a623] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2b3e51] text-sm mb-1">
                      {t(`about.pillars.${p.key}.title`)}
                    </p>
                    <p className="text-[12px] text-gray-400 leading-relaxed">
                      {t(`about.pillars.${p.key}.body`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — FAQ */}
          <div className="lg:pt-2">
            <div className="flex items-end justify-between mb-6 sm:mb-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-2">
                  {t("about.faqEyebrow")}
                </p>
                <h3 className="font-montserrat text-xl sm:text-3xl font-black text-[#2b3e51] tracking-tighter">
                  {t("about.faqHeading")}
                </h3>
              </div>
            </div>

            <div className="divide-y divide-gray-100 border-t border-gray-100">
              {FAQ_KEYS.map((k) => (
                <Accordion key={k} faqKey={k} />
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-8 p-6 bg-[#f8f8f8] rounded-xl flex items-start gap-4">
              <div className="size-10 rounded-full bg-[#f5a623]/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="font-bold text-sm text-[#2b3e51] mb-1">
                  {t("about.moreQuestions")}
                </p>
                <p className="text-[12px] text-gray-400 leading-relaxed">
                  {t("about.moreQuestionsBody")}{" "}
                  <a
                    href="#"
                    className="text-[#f5a623] font-bold hover:underline"
                  >
                    {t("about.contactLink")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
