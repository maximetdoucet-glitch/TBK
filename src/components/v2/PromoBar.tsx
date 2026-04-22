"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";

const MESSAGES = [
  { text: "Nieuw: Zippo Limited Edition 2025 collectie is binnen", cta: "Bekijk nu", href: "#" },
  { text: "Gratis verzending vanaf €80 — Voor 16:00 besteld, dezelfde dag verstuurd", cta: null, href: null },
  { text: "Gevestigd in Nijmegen sinds 1928 — Bezoek onze winkel", cta: "Routebeschrijving", href: "#" },
];

export default function PromoBar() {
  const [dismissed, setDismissed] = useState(false);
  const [current, setCurrent] = useState(0);

  if (dismissed) return null;

  const msg = MESSAGES[current];

  return (
    <div className="w-full bg-[#2b3e51] text-white text-[11px] font-bold uppercase tracking-[0.12em]">
      <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-center gap-4 h-9 relative">
        {/* Prev */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + MESSAGES.length) % MESSAGES.length)}
          className="absolute left-4 text-white/40 hover:text-white transition-colors hidden sm:block"
          aria-label="Previous"
        >
          ‹
        </button>

        <span className="text-white/70">{msg.text}</span>

        {msg.cta && (
          <Link
            href={msg.href!}
            className="flex items-center gap-0.5 text-[#f9c76b] hover:text-[#f9c76b]/80 transition-colors whitespace-nowrap"
          >
            {msg.cta} <ChevronRight className="size-3" />
          </Link>
        )}

        {/* Next */}
        <button
          onClick={() => setCurrent((c) => (c + 1) % MESSAGES.length)}
          className="absolute right-10 text-white/40 hover:text-white transition-colors hidden sm:block"
          aria-label="Next"
        >
          ›
        </button>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 text-white/40 hover:text-white transition-colors"
          aria-label="Sluiten"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
