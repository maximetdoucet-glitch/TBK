"use client";

import { useEffect, useState } from "react";
import { Flame, ShieldCheck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

const STORAGE_KEY = "tbk-age-verified";

const COPY = {
  NL: {
    eyebrow: "Leeftijdscontrole",
    title: "Ben je 18 jaar of ouder?",
    body: "Onze webshop verkoopt rokersbenodigdheden. Volgens de Nederlandse wet mogen wij deze producten alleen aan personen van 18 jaar en ouder tonen en verkopen.",
    confirm: "Ja, ik ben 18 jaar of ouder",
    deny: "Nee, ik ben jonger dan 18",
    disclaimer: "Door op \"Ja\" te klikken bevestig je dat je minimaal 18 jaar oud bent. Deze keuze wordt onthouden op dit apparaat.",
    brand: "Rokers Benodigdheden",
  },
  EN: {
    eyebrow: "Age verification",
    title: "Are you 18 years or older?",
    body: "Our shop sells smokers' supplies. Under Dutch law we may only display and sell these products to persons aged 18 and over.",
    confirm: "Yes, I am 18 or older",
    deny: "No, I am under 18",
    disclaimer: "By clicking \"Yes\" you confirm you are at least 18 years old. Your choice is remembered on this device.",
    brand: "Rokers Benodigdheden",
  },
  DE: {
    eyebrow: "Altersverifikation",
    title: "Bist du 18 Jahre oder älter?",
    body: "Unser Shop verkauft Raucherbedarf. Nach niederländischem Recht dürfen wir diese Produkte nur Personen ab 18 Jahren anzeigen und verkaufen.",
    confirm: "Ja, ich bin 18 oder älter",
    deny: "Nein, ich bin unter 18",
    disclaimer: "Mit Klick auf \"Ja\" bestätigst du, dass du mindestens 18 Jahre alt bist. Deine Auswahl wird auf diesem Gerät gespeichert.",
    brand: "Rokers Benodigdheden",
  },
  FR: {
    eyebrow: "Vérification d'âge",
    title: "Avez-vous 18 ans ou plus ?",
    body: "Notre boutique vend des articles pour fumeurs. Selon la loi néerlandaise, nous ne pouvons présenter et vendre ces produits qu'aux personnes âgées de 18 ans et plus.",
    confirm: "Oui, j'ai 18 ans ou plus",
    deny: "Non, j'ai moins de 18 ans",
    disclaimer: "En cliquant sur « Oui », vous confirmez avoir au moins 18 ans. Votre choix est mémorisé sur cet appareil.",
    brand: "Rokers Benodigdheden",
  },
} as const;

export default function AgeGate() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    try {
      const verified = localStorage.getItem(STORAGE_KEY) === "true";
      if (!verified) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  if (!open) return null;

  const c = COPY[locale] ?? COPY.NL;

  const onConfirm = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setOpen(false);
  };

  const onDeny = () => {
    setDenied(true);
    setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 bg-[#0b1320]/80 backdrop-blur-md animate-[fadeIn_.25s_ease-out]"
    >
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: translateY(10px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div
        className="relative w-full max-w-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-[scaleIn_.35s_cubic-bezier(.2,.8,.2,1)]"
        style={{ boxShadow: "0 30px 80px -20px rgba(11, 19, 32, .55)" }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#f5a623] via-[#ffb84d] to-[#f5a623]" />

        <div className="px-7 sm:px-9 pt-8 pb-7">
          {/* Brand mark */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#2b3e51] flex items-center justify-center">
                <Flame className="size-4 text-[#f5a623]" strokeWidth={2.5} />
              </div>
              <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.25em] text-[#2b3e51]">
                {c.brand}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#2b3e51]/70">
              <ShieldCheck className="size-3.5" />
              {c.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2
            id="age-gate-title"
            className="font-montserrat text-[26px] sm:text-[30px] font-black leading-[1.15] text-[#2b3e51] mb-3"
          >
            {c.title}
          </h2>

          {/* Body */}
          <p className="text-[14px] leading-[1.55] text-[#5a6573] mb-6">
            {c.body}
          </p>

          {denied ? (
            <div className="rounded-xl bg-[#f8f9fa] border border-gray-200 px-4 py-5 text-center">
              <p className="font-montserrat text-[13px] font-bold text-[#2b3e51]">
                {locale === "EN" && "Sorry, you must be 18 or older. Redirecting…"}
                {locale === "DE" && "Du musst mindestens 18 Jahre alt sein. Weiterleitung…"}
                {locale === "FR" && "Vous devez avoir au moins 18 ans. Redirection…"}
                {(locale === "NL" || !["EN","DE","FR"].includes(locale)) && "Je moet minimaal 18 jaar zijn. Je wordt doorgestuurd…"}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={onConfirm}
                className="w-full font-montserrat text-[13px] font-black uppercase tracking-[0.12em] text-white bg-[#2b3e51] hover:bg-[#f5a623] rounded-xl py-3.5 transition-colors duration-200"
              >
                {c.confirm}
              </button>
              <button
                type="button"
                onClick={onDeny}
                className="w-full font-montserrat text-[12px] font-bold uppercase tracking-[0.1em] text-[#2b3e51]/70 hover:text-[#2b3e51] bg-transparent rounded-xl py-3 transition-colors duration-200"
              >
                {c.deny}
              </button>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-5 text-[11px] leading-[1.5] text-[#8a94a3] text-center">
            {c.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
