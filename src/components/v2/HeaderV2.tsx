"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search, ShoppingCart, User, Heart, ChevronDown, Menu, X, Check,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/translations";

// Circular SVG flags — clipped to circle, no external deps
function FlagNL({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <clipPath id="c-nl"><circle cx="10" cy="10" r="10"/></clipPath>
      <g clipPath="url(#c-nl)">
        <rect width="20" height="7" fill="#AE1C28"/>
        <rect y="7" width="20" height="6" fill="#fff"/>
        <rect y="13" width="20" height="7" fill="#21468B"/>
      </g>
    </svg>
  );
}
function FlagGB({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <clipPath id="c-gb"><circle cx="10" cy="10" r="10"/></clipPath>
      <g clipPath="url(#c-gb)">
        <rect width="20" height="20" fill="#012169"/>
        <path d="M0,0 L20,20 M20,0 L0,20" stroke="#fff" strokeWidth="3.5"/>
        <path d="M0,0 L20,20 M20,0 L0,20" stroke="#C8102E" strokeWidth="2"/>
        <path d="M10,0 V20 M0,10 H20" stroke="#fff" strokeWidth="5"/>
        <path d="M10,0 V20 M0,10 H20" stroke="#C8102E" strokeWidth="3"/>
      </g>
    </svg>
  );
}
function FlagDE({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <clipPath id="c-de"><circle cx="10" cy="10" r="10"/></clipPath>
      <g clipPath="url(#c-de)">
        <rect width="20" height="7" fill="#000"/>
        <rect y="7" width="20" height="6" fill="#D00"/>
        <rect y="13" width="20" height="7" fill="#FFCE00"/>
      </g>
    </svg>
  );
}
function FlagFR({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <clipPath id="c-fr"><circle cx="10" cy="10" r="10"/></clipPath>
      <g clipPath="url(#c-fr)">
        <rect width="7" height="20" fill="#002395"/>
        <rect x="7" width="6" height="20" fill="#fff"/>
        <rect x="13" width="7" height="20" fill="#ED2939"/>
      </g>
    </svg>
  );
}
const FLAG_COMPONENTS: Record<string, ({ size }: { size?: number }) => React.JSX.Element> = {
  NL: FlagNL, EN: FlagGB, DE: FlagDE, FR: FlagFR,
};

const LOCALES: { code: Locale; label: string }[] = [
  { code: "NL", label: "Nederlands" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
];

const CURRENCIES = [
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "GBP", symbol: "£", label: "British Pound" },
  { code: "USD", symbol: "$", label: "US Dollar" },
];

const NAV_ITEMS = [
  { key: "aanstekers", href: "/aanstekers" },
  { key: "kokersEtuis", href: "/kokers-etuis" },
  { key: "knippersAsbakken", href: "/knippers-asbakken" },
  { key: "rookAccessoires", href: "/rook-accessoires" },
  { key: "sale", href: "/sale", accent: true },
] as const;

const MEGA_MENU = [
  {
    titleKey: "header.mega.aanstekers.title",
    items: [
      { labelKey: "header.mega.aanstekers.zippo", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/_/0/_0140_60007371.jpg" },
      { labelKey: "header.mega.aanstekers.clipper", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/1/8/189079-3.jpg" },
      { labelKey: "header.mega.aanstekers.zippoAcc", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/z/i/zippo_butane_1__1_25.jpg" },
    ],
  },
  {
    titleKey: "header.mega.kokers.title",
    items: [
      { labelKey: "header.mega.kokers.cigaretteCases", href: "/kokers-etuis", image: "https://www.uegholland.com/media/catalog/product/9/7/970713_18.jpg" },
      { labelKey: "header.mega.kokers.filters", href: "/kokers-etuis", image: "https://www.uegholland.com/media/catalog/product/d/e/denicotea-filter_1_14.jpg" },
      { labelKey: "header.mega.kokers.ashtrays", href: "/kokers-etuis", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill-auto-asbak_1_14.jpg" },
    ],
  },
  {
    titleKey: "header.mega.knippers.title",
    items: [
      { labelKey: "header.mega.knippers.cigarCutters", href: "/knippers-asbakken", image: "https://www.uegholland.com/media/catalog/product/2/7/270078_1_22.jpg" },
      { labelKey: "header.mega.knippers.cigarCases", href: "/knippers-asbakken", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill-sigarenetui_1_14.jpg" },
      { labelKey: "header.mega.knippers.cigarAshtrays", href: "/knippers-asbakken", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill-sigaren-asbak_1_14.jpg" },
    ],
  },
  {
    titleKey: "header.mega.rook.title",
    items: [
      { labelKey: "header.mega.rook.bruyerePipes", href: "/rook-accessoires", image: "https://www.uegholland.com/media/catalog/product/2/7/279803_1_33.jpg" },
      { labelKey: "header.mega.rook.pipeCutlery", href: "/rook-accessoires", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill_-_pijp-bestek_-_3-delig_-_basic.jpg" },
      { labelKey: "header.mega.rook.grinders", href: "/rook-accessoires", image: "https://www.uegholland.com/media/catalog/product/c/h/champ-420-grinder-small_1_1.jpg" },
    ],
  },
] as const;

export default function HeaderV2() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const selectedLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);
  const localeRef = useRef<HTMLDivElement>(null);

  // Close mega menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        megaRef.current && !megaRef.current.contains(e.target as Node) &&
        megaBtnRef.current && !megaBtnRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
      if (localeRef.current && !localeRef.current.contains(e.target as Node)) {
        setLocaleOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Collapse nav + USP bar on scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("w-full bg-white sticky top-0 z-50 transition-shadow duration-300", scrolled ? "shadow-md" : "shadow-sm")}>
      {/* ── Top row: logo / search / actions ── */}
      <div className={cn(
        "max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 md:gap-6 transition-all duration-300",
        scrolled ? "py-2.5" : "py-3.5"
      )}>
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-[#2b3e51] hover:text-primary transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label={t("header.openMenu")}
        >
          <Menu className="size-6" />
        </button>

        {/* Logo */}
        <Link
          href="/preview"
          className="shrink-0 flex items-center gap-2 leading-none group"
          aria-label="Rokersbenodigheden — naar startpagina"
        >
          <span className="flex flex-col leading-none text-[#2b3e51]">
            <span className="text-[17px] sm:text-[19px] font-black uppercase tracking-[0.15em]">
              Rokers
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.42em] text-[#2b3e51]/55 mt-1">
              benodigheden
            </span>
          </span>
        </Link>

        {/* Search — desktop only; mobile uses drawer */}
        <div className={cn(
          "hidden md:flex flex-1 relative transition-all duration-200",
          searchFocused ? "max-w-2xl" : "max-w-xl"
        )}>
          <Input
            placeholder={t("header.searchPlaceholder")}
            className="w-full h-10 pl-4 pr-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white focus:border-[#f5a623] text-sm transition-all"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
        </div>

        {/* Actions — ml-auto pins to far right */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">

          {/* Locale / currency picker */}
          <div ref={localeRef} className="relative">
            <button
              type="button"
              onClick={() => setLocaleOpen((o) => !o)}
              className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="hidden sm:inline text-[11px] font-bold text-[#2b3e51]/70 uppercase tracking-wider">
                {selectedCurrency.code}
              </span>
              <span className="inline-flex rounded-full overflow-hidden ring-1 ring-gray-200 shrink-0">
                {React.createElement(FLAG_COMPONENTS[selectedLocale.code], { size: 22 })}
              </span>
              <ChevronDown className={cn("size-3 text-[#2b3e51]/40 transition-transform duration-200", localeOpen && "rotate-180")} />
            </button>

            {localeOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                {/* Language */}
                <div className="px-4 pt-4 pb-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">
                    {t("header.chooseLanguage")}
                  </p>
                  <div className="space-y-0.5">
                    {LOCALES.map((loc) => (
                      <button
                        type="button"
                        key={loc.code}
                        onClick={() => { setLocale(loc.code); setLocaleOpen(false); }}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                          selectedLocale.code === loc.code
                            ? "bg-[#f5a623]/10 text-[#f5a623]"
                            : "hover:bg-gray-50 text-[#2b3e51]"
                        )}
                      >
                        <span className="inline-flex rounded-full overflow-hidden ring-1 ring-gray-200 shrink-0">
                          {React.createElement(FLAG_COMPONENTS[loc.code], { size: 24 })}
                        </span>
                        <span className="text-sm font-semibold">{loc.label}</span>
                        {selectedLocale.code === loc.code && (
                          <Check className="size-3.5 ml-auto text-[#f5a623]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 mx-4" />

                {/* Currency */}
                <div className="px-4 pt-3 pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">
                    {t("header.chooseCurrency")}
                  </p>
                  <div className="space-y-0.5">
                    {CURRENCIES.map((cur) => (
                      <button
                        type="button"
                        key={cur.code}
                        onClick={() => { setSelectedCurrency(cur); setLocaleOpen(false); }}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                          selectedCurrency.code === cur.code
                            ? "bg-[#f5a623]/10 text-[#f5a623]"
                            : "hover:bg-gray-50 text-[#2b3e51]"
                        )}
                      >
                        <span className="size-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-[#2b3e51] shrink-0">
                          {cur.symbol}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{cur.code}</span>
                          <span className="text-[11px] text-gray-400">{cur.label}</span>
                        </div>
                        {selectedCurrency.code === cur.code && (
                          <Check className="size-3.5 ml-auto text-[#f5a623]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/account/inloggen"
            className="hidden sm:flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <User className="size-5 text-[#2b3e51] group-hover:text-[#f5a623] transition-colors" />
            <span className="hidden xl:block text-[10px] font-bold uppercase tracking-wider text-[#2b3e51]/60">
              {t("header.account")}
            </span>
          </Link>
          <Link
            href="/account/verlanglijst"
            className="hidden sm:flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <Heart className="size-5 text-[#2b3e51] group-hover:text-[#f5a623] transition-colors" />
            <span className="hidden xl:block text-[10px] font-bold uppercase tracking-wider text-[#2b3e51]/60">
              {t("header.wishlist")}
            </span>
          </Link>
          <Link
            href="#"
            className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <ShoppingCart className="size-5 text-[#2b3e51] group-hover:text-[#f5a623] transition-colors" />
            <span className="hidden xl:block text-[10px] font-bold uppercase tracking-wider text-[#2b3e51]/60">
              {t("header.cart")}
            </span>
            <span className="absolute top-1 right-1 bg-[#2b3e51] text-white text-[9px] font-black size-4 rounded-full flex items-center justify-center border border-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* ── Nav bar — hidden on mobile (handled by drawer) and when scrolled ── */}
      <nav className={cn("w-full bg-[#2e4560] text-white relative transition-all duration-300 hidden lg:block", scrolled ? "h-0 overflow-hidden" : "overflow-visible")}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-11">
          {/* Assortiment mega button */}
          <button
            ref={megaBtnRef}
            onClick={() => setMegaOpen((o) => !o)}
            className={cn(
              "flex items-center gap-2 h-full px-5 font-bold uppercase tracking-widest text-[11px] transition-colors shrink-0",
              megaOpen ? "bg-[#f5a623]" : "bg-[#f5a623] hover:bg-[#e0890d]"
            )}
          >
            <Menu className="size-4" />
            {t("header.assortiment")}
            <ChevronDown className={cn("size-3.5 transition-transform duration-200", megaOpen && "rotate-180")} />
          </button>

          {/* Nav links */}
          <div className="hidden lg:flex items-center h-full divide-x divide-white/10 border-l border-white/10">
            {NAV_ITEMS.map((item) => {
              const accent = "accent" in item ? item.accent : false;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "px-5 h-full flex items-center text-[11px] font-bold uppercase tracking-widest transition-colors",
                    accent
                      ? "text-[#f5a623] hover:text-[#f5a623]/80"
                      : "hover:bg-white/10 text-white/90 hover:text-white"
                  )}
                >
                  {t(`header.nav.${item.key}`)}
                </Link>
              );
            })}
          </div>

          {/* Google rating */}
          <div className="hidden md:flex items-center gap-2 ml-auto text-[10px] font-bold tracking-widest">
            <div className="flex text-[#f5a623] gap-px">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <span className="text-white/60">{t("header.rating")}</span>
          </div>
        </div>

        {/* ── Mega menu dropdown ── */}
        {megaOpen && (
          <div
            ref={megaRef}
            className="absolute top-full left-0 right-0 bg-white text-[#2b3e51] shadow-2xl z-50 border-t-2 border-[#f5a623]"
          >
            <div className="max-w-[1300px] mx-auto px-8 py-8">
              <div className="grid grid-cols-4 gap-8">
                {MEGA_MENU.map((group) => (
                  <div key={group.titleKey}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/40 mb-4 border-b border-gray-100 pb-2">
                      {t(group.titleKey)}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => {
                        const label = t(item.labelKey);
                        return (
                          <li key={item.labelKey}>
                            <Link
                              href={item.href}
                              onClick={() => setMegaOpen(false)}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="size-10 rounded-md overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                                <Image
                                  src={item.image}
                                  alt={label}
                                  width={40}
                                  height={40}
                                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <span className="text-sm font-semibold group-hover:text-[#f5a623] transition-colors">
                                {label}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                {/* Featured promo tile */}
                <div className="col-span-3 lg:col-span-0 lg:hidden xl:block mt-2 lg:mt-0">
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-6">
                <Link href="#" onClick={() => setMegaOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#f5a623] hover:underline">
                  {t("header.mega.viewAll")}
                </Link>
                <Link href="#" onClick={() => setMegaOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/40 hover:text-[#2b3e51] transition-colors">
                  {t("header.mega.deals")}
                </Link>
                <Link href="#" onClick={() => setMegaOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/40 hover:text-[#2b3e51] transition-colors">
                  {t("header.mega.newItems")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── USP bar — hidden when scrolled ── */}
      <div className={cn("w-full bg-gray-50 overflow-hidden transition-all duration-300", scrolled ? "max-h-0 py-0" : "max-h-12 py-2")}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 overflow-x-auto scrollbar-none text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 whitespace-nowrap">
          {(["freeShipping", "sameDay", "freeReturns", "securePay"] as const).map((k) => (
            <div key={k} className="flex items-center gap-1.5 shrink-0">
              <Check className="size-3 text-[#f5a623] shrink-0" />
              <span>{t(`header.usp.${k}`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[88%] max-w-[340px] bg-white flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
              <span className="flex flex-col leading-none text-[#2b3e51]">
                <span className="text-[16px] font-black uppercase tracking-[0.15em]">Rokers</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.42em] text-[#2b3e51]/55 mt-1">benodigheden</span>
              </span>
              <button type="button" aria-label={t("header.closeMenu")} onClick={() => setMobileOpen(false)} className="size-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#2b3e51] hover:bg-gray-100 transition-colors">
                <X className="size-4" />
              </button>
            </div>

            {/* Search */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="relative">
                <Input
                  placeholder={t("header.searchPlaceholder")}
                  className="w-full h-11 pl-4 pr-11 rounded-full border-gray-200 bg-gray-50 focus:bg-white focus:border-[#f5a623] text-sm"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto">
              <div className="py-2">
                {[
                  ...NAV_ITEMS.map((i) => ({ label: t(`header.nav.${i.key}`), href: i.href, accent: "accent" in i ? i.accent : false })),
                  { label: t("header.mobileAccount"), href: "/account/inloggen", accent: false },
                  { label: t("header.mobileWishlist"), href: "/account/verlanglijst", accent: false },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-5 py-3.5 text-[15px] font-semibold border-b border-gray-50 transition-colors",
                      item.accent
                        ? "text-[#f5a623] hover:bg-[#f5a623]/5"
                        : "text-[#2b3e51] hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-4 -rotate-90 text-gray-300" />
                  </Link>
                ))}
              </div>

              {/* Language picker */}
              <div className="px-5 py-5 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">
                  {t("header.chooseLanguage")}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {LOCALES.map((loc) => (
                    <button
                      type="button"
                      key={loc.code}
                      onClick={() => { setLocale(loc.code); }}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors",
                        selectedLocale.code === loc.code
                          ? "bg-[#f5a623]/10 text-[#f5a623] ring-1 ring-[#f5a623]/30"
                          : "bg-gray-50 hover:bg-gray-100 text-[#2b3e51]"
                      )}
                    >
                      <span className="inline-flex rounded-full overflow-hidden ring-1 ring-gray-200 shrink-0">
                        {React.createElement(FLAG_COMPONENTS[loc.code], { size: 18 })}
                      </span>
                      <span className="text-[13px] font-semibold">{loc.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Footer USP strip */}
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500">
              <Check className="size-3 text-[#f5a623] shrink-0" />
              <span>{t("header.usp.freeShipping")}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
