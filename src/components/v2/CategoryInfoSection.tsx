"use client";

import { useState } from "react";
import { ChevronRight, MessageCircle, type LucideIcon } from "lucide-react";

export type BentoCard = {
  icon: LucideIcon;
  title: string;
  body: string;
  hero?: boolean;
  heroBgNumber?: string;
  heroTagline?: string;
};

export type Step = {
  n: string;
  title: string;
  desc: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type CategoryInfoData = {
  // Section 1 — Editorial intro + bento
  aboutLabel: string;
  headlineDark: string;
  headlineAccent: string;
  introBody: string;
  bento: BentoCard[];

  // Section 2 — How-to steps
  stepsLabel: string;
  stepsHeading: string;
  stepsTipIcon: LucideIcon;
  stepsTip: string;
  steps: Step[];
  bottomBadgeIcon: LucideIcon;
  bottomBadgeText: string;

  // Section 3 — FAQ
  faqHeadingDark: string;
  faqHeadingAccent: string;
  faqIntro: string;
  faqs: Faq[];
};

function FaqItem({ index, q, a }: { index: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`relative pl-5 border-l-2 transition-all duration-300 ${
        open ? "border-[#f5a623]" : "border-white/10 hover:border-white/25"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start gap-4 py-5 text-left group"
      >
        <span
          className={`font-montserrat text-[10px] font-black tabular-nums mt-0.5 flex-shrink-0 transition-colors ${
            open ? "text-[#f5a623]" : "text-white/20 group-hover:text-white/40"
          }`}
        >
          {num}
        </span>
        <span
          className={`flex-1 text-[13px] font-bold leading-snug transition-colors ${
            open ? "text-white" : "text-white/60 group-hover:text-white/85"
          }`}
        >
          {q}
        </span>
        <ChevronRight
          className={`size-4 flex-shrink-0 mt-0.5 transition-all duration-300 ${
            open ? "rotate-90 text-[#f5a623]" : "text-white/20 group-hover:text-white/40"
          }`}
        />
      </button>
      {open && (
        <p className="text-[12px] text-white/50 leading-relaxed pb-5 pr-6 ml-9">
          {a}
        </p>
      )}
    </div>
  );
}

export default function CategoryInfoSection({ data }: { data: CategoryInfoData }) {
  const TipIcon = data.stepsTipIcon;
  const BadgeIcon = data.bottomBadgeIcon;

  return (
    <div>
      {/* Section 1 — Editorial intro + bento */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#f5a623]/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
              {data.aboutLabel}
            </span>
          </div>

          <div className="mb-10">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h2 className="font-montserrat font-black text-[#2b3e51] leading-[0.88] tracking-tighter text-[clamp(38px,5vw,72px)]">
                {data.headlineDark}
              </h2>
              <span className="font-montserrat font-black text-[#f5a623] leading-[0.88] tracking-tighter text-[clamp(38px,5vw,72px)]">
                {data.headlineAccent}
              </span>
            </div>
            <p className="text-gray-500 text-[13px] mt-4 max-w-lg leading-relaxed">
              {data.introBody}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.bento.map((card, idx) => {
              const Icon = card.icon;
              if (card.hero) {
                return (
                  <div
                    key={idx}
                    className="lg:col-span-2 relative overflow-hidden bg-[#f5a623]/6 border border-[#f5a623]/25 rounded-sm p-8 group hover:border-[#f5a623]/50 transition-all duration-300"
                  >
                    {card.heroBgNumber && (
                      <span
                        className="absolute right-6 bottom-2 font-montserrat font-black text-[#f5a623] select-none pointer-events-none leading-none text-[clamp(80px,10vw,140px)] opacity-[0.08]"
                        aria-hidden
                      >
                        {card.heroBgNumber}
                      </span>
                    )}
                    <div className="relative z-10">
                      <Icon className="size-8 text-[#f5a623] mb-5 opacity-90" />
                      <h3 className="font-montserrat text-xl font-black text-[#2b3e51] tracking-tight mb-3">
                        {card.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed max-w-md">
                        {card.body}
                      </p>
                      {card.heroTagline && (
                        <div className="mt-6 flex items-center gap-2 text-[#f5a623]">
                          <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                            {card.heroTagline}
                          </span>
                          <div className="h-px flex-1 bg-[#f5a623]/30 max-w-[60px]" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-sm p-6 group hover:border-[#f5a623]/40 hover:bg-[#f5a623]/3 transition-all duration-300"
                >
                  <Icon className="size-5 text-gray-400 mb-4 group-hover:text-[#f5a623] transition-colors duration-300" />
                  <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 2 — Steps */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 mb-3">
                {data.stepsLabel}
              </p>
              <h2
                className="font-montserrat font-black text-[#2b3e51] tracking-tight leading-tight text-[clamp(28px,3.5vw,48px)]"
                dangerouslySetInnerHTML={{ __html: data.stepsHeading }}
              />
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f5a623]/6 border border-[#f5a623]/20 rounded-sm max-w-xs">
              <TipIcon className="size-4 text-[#f5a623] mt-0.5 flex-shrink-0" />
              <p
                className="text-[11px] text-gray-500 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.stepsTip }}
              />
            </div>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 ${
              data.steps.length === 5 ? "lg:grid-cols-5" : data.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {data.steps.map((step) => (
              <div
                key={step.n}
                className="relative pt-10 pb-8 px-6 group overflow-hidden first:pl-0 last:pr-0"
              >
                <span
                  className="absolute top-0 left-4 font-montserrat font-black text-black/[0.04] select-none leading-none pointer-events-none text-[6rem]"
                  aria-hidden
                >
                  {step.n}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623] mb-4 relative z-10 group-hover:scale-150 transition-transform duration-300" />
                <h4 className="relative z-10 text-[12px] font-black text-[#2b3e51] leading-snug mb-2">
                  {step.title}
                </h4>
                <p className="relative z-10 text-[11px] text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-gray-300">
            <BadgeIcon className="size-4" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
              {data.bottomBadgeText}
            </span>
          </div>
        </div>
      </div>

      {/* Section 3 — FAQ */}
      <div className="bg-[#0d1117] border-t border-white/6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-10">
              <div className="relative mb-6 inline-block">
                <span
                  className="font-montserrat font-black text-white/5 leading-none select-none pointer-events-none absolute -top-4 -left-4 text-[8rem]"
                  aria-hidden
                >
                  ?
                </span>
                <h2 className="font-montserrat font-black text-white tracking-tight leading-tight relative text-[clamp(28px,3vw,40px)]">
                  {data.faqHeadingDark}
                  <br />
                  <span className="text-[#f5a623]">{data.faqHeadingAccent}</span>
                </h2>
              </div>
              <p className="text-[12px] text-white/35 leading-relaxed mb-8">
                {data.faqIntro}
              </p>
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                  Niet gevonden?
                </p>
                <div className="flex items-center gap-2 group cursor-pointer">
                  <MessageCircle className="size-4 text-[#f5a623]" />
                  <span className="text-[12px] text-white/50 group-hover:text-white/80 transition-colors">
                    Molenstraat 44, Nijmegen
                  </span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer">
                  <MessageCircle className="size-4 text-[#f5a623] opacity-0" />
                  <span className="text-[12px] text-white/50 group-hover:text-white/80 transition-colors">
                    service@tbk-lightshop.nl
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {data.faqs.map((faq, i) => (
                <FaqItem key={faq.q} index={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
