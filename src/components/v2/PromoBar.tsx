"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

const MESSAGES = [
  { textKey: "promo.msg1", ctaKey: "promo.msg1Cta", href: "#" },
  { textKey: "promo.msg2", ctaKey: null, href: null },
  { textKey: "promo.msg3", ctaKey: "promo.msg3Cta", href: "#" },
] as const;

export default function PromoBar() {
  const { t } = useLocale();
  const [dismissed, setDismissed] = useState(false);
  const [current, setCurrent] = useState(0);

  if (dismissed) return null;

  const msg = MESSAGES[current];

  return (
    <div className="w-full bg-[#2e4560] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.12em]">
      <div className="max-w-[1300px] mx-auto px-3 sm:px-4 flex items-center justify-center gap-2 sm:gap-4 h-9 sm:h-9 relative pl-8 pr-9 sm:pl-12 sm:pr-12">
        {/* Prev */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + MESSAGES.length) % MESSAGES.length)}
          className="absolute left-4 text-white/40 hover:text-white transition-colors hidden sm:block"
          aria-label={t("promo.prev")}
        >
          ‹
        </button>

        <span className="text-white/70 truncate">{t(msg.textKey)}</span>

        {msg.ctaKey && (
          <Link
            href={msg.href!}
            className="hidden sm:flex items-center gap-0.5 text-[#f5a623] hover:text-[#f5a623]/80 transition-colors whitespace-nowrap shrink-0"
          >
            {t(msg.ctaKey)} <ChevronRight className="size-3" />
          </Link>
        )}

        {/* Next */}
        <button
          onClick={() => setCurrent((c) => (c + 1) % MESSAGES.length)}
          className="absolute right-10 text-white/40 hover:text-white transition-colors hidden sm:block"
          aria-label={t("promo.next")}
        >
          ›
        </button>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 sm:right-3 text-white/40 hover:text-white transition-colors p-1"
          aria-label={t("promo.close")}
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
