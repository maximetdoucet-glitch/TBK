"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search, ShoppingCart, User, Heart, ChevronDown, Menu, X, Check,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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
function FlagES({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <clipPath id="c-es"><circle cx="10" cy="10" r="10"/></clipPath>
      <g clipPath="url(#c-es)">
        <rect width="20" height="5" fill="#c60b1e"/>
        <rect y="5" width="20" height="10" fill="#ffc400"/>
        <rect y="15" width="20" height="5" fill="#c60b1e"/>
      </g>
    </svg>
  );
}

const FLAG_COMPONENTS: Record<string, ({ size }: { size?: number }) => React.JSX.Element> = {
  NL: FlagNL, EN: FlagGB, DE: FlagDE, FR: FlagFR, ES: FlagES,
};

const LOCALES = [
  { code: "NL", label: "Nederlands" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
];

const CURRENCIES = [
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "GBP", symbol: "£", label: "British Pound" },
  { code: "USD", symbol: "$", label: "US Dollar" },
];

const NAV_ITEMS = [
  { label: "Aanstekers", href: "/aanstekers" },
  { label: "Kokers & Etuis", href: "/kokers-etuis" },
  { label: "Knippers & Asbakken", href: "/knippers-asbakken" },
  { label: "Rook-accessoires", href: "/rook-accessoires" },
  { label: "Sale", href: "/sale", accent: true },
];

const MEGA_MENU = [
  {
    title: "Aanstekers",
    items: [
      { label: "Zippo aanstekers", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/_/0/_0140_60007371.jpg" },
      { label: "Clipper & regulier", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/1/8/189079-3.jpg" },
      { label: "Zippo accessoires", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/z/i/zippo_butane_1__1_25.jpg" },
    ],
  },
  {
    title: "Kokers & Etuis",
    items: [
      { label: "Sigarettenkokers", href: "/kokers-etuis", image: "https://www.uegholland.com/media/catalog/product/9/7/970713_18.jpg" },
      { label: "Filters & houders", href: "/kokers-etuis", image: "https://www.uegholland.com/media/catalog/product/d/e/denicotea-filter_1_14.jpg" },
      { label: "Asbakken", href: "/kokers-etuis", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill-auto-asbak_1_14.jpg" },
    ],
  },
  {
    title: "Knippers & Asbakken",
    items: [
      { label: "Sigarenknippers", href: "/knippers-asbakken", image: "https://www.uegholland.com/media/catalog/product/2/7/270078_1_22.jpg" },
      { label: "Sigaren-etuis", href: "/knippers-asbakken", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill-sigarenetui_1_14.jpg" },
      { label: "Sigaren-asbakken", href: "/knippers-asbakken", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill-sigaren-asbak_1_14.jpg" },
    ],
  },
  {
    title: "Rook-accessoires",
    items: [
      { label: "Bruyère pijpen", href: "/rook-accessoires", image: "https://www.uegholland.com/media/catalog/product/2/7/279803_1_33.jpg" },
      { label: "Pijp-bestek", href: "/rook-accessoires", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill_-_pijp-bestek_-_3-delig_-_basic.jpg" },
      { label: "Tabaksgrinders", href: "/rook-accessoires", image: "https://www.uegholland.com/media/catalog/product/c/h/champ-420-grinder-small_1_1.jpg" },
    ],
  },
];

export default function HeaderV2() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(LOCALES[0]);
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
        "max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 md:gap-6 transition-all duration-300",
        scrolled ? "py-2.5" : "py-3.5"
      )}>
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-[#2b3e51] hover:text-primary transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Menu openen"
        >
          <Menu className="size-6" />
        </button>

        {/* Logo */}
        <Link href="/preview" className="shrink-0 flex flex-col leading-none">
          <span className="font-montserrat text-xl font-black tracking-tight text-[#2b3e51]">OneConnect</span>
          <span className="font-montserrat text-[9px] font-bold tracking-[0.4em] text-[#94a3b8] uppercase mt-0.5">Lightshop</span>
        </Link>

        {/* Search — grows to fill space, pushing icons to far right */}
        <div className={cn(
          "flex flex-1 relative transition-all duration-200",
          searchFocused ? "max-w-2xl" : "max-w-xl"
        )}>
          <Input
            placeholder="Zoek op product, merk of categorie…"
            className="w-full h-10 pl-4 pr-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white focus:border-[#f5a623] text-sm transition-all"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
        </div>

        {/* Actions — ml-auto pins to far right */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">

          {/* Locale / currency picker */}
          <div ref={localeRef} className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLocaleOpen((o) => !o)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[11px] font-bold text-[#2b3e51]/70 uppercase tracking-wider">
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
                    Kies uw taal
                  </p>
                  <div className="space-y-0.5">
                    {LOCALES.map((loc) => (
                      <button
                        type="button"
                        key={loc.code}
                        onClick={() => { setSelectedLocale(loc); setLocaleOpen(false); }}
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
                    Kies uw valuta
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
              Account
            </span>
          </Link>
          <Link
            href="/account/verlanglijst"
            className="hidden sm:flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <Heart className="size-5 text-[#2b3e51] group-hover:text-[#f5a623] transition-colors" />
            <span className="hidden xl:block text-[10px] font-bold uppercase tracking-wider text-[#2b3e51]/60">
              Verlanglijst
            </span>
          </Link>
          <Link
            href="#"
            className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <ShoppingCart className="size-5 text-[#2b3e51] group-hover:text-[#f5a623] transition-colors" />
            <span className="hidden xl:block text-[10px] font-bold uppercase tracking-wider text-[#2b3e51]/60">
              Winkelwagen
            </span>
            <span className="absolute top-1 right-1 bg-[#2b3e51] text-white text-[9px] font-black size-4 rounded-full flex items-center justify-center border border-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* ── Nav bar — hidden when scrolled ── */}
      <nav className={cn("w-full bg-[#2e4560] text-white relative transition-all duration-300", scrolled ? "h-0 overflow-hidden" : "overflow-visible")}>
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
            Assortiment
            <ChevronDown className={cn("size-3.5 transition-transform duration-200", megaOpen && "rotate-180")} />
          </button>

          {/* Nav links */}
          <div className="hidden lg:flex items-center h-full divide-x divide-white/10 border-l border-white/10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-5 h-full flex items-center text-[11px] font-bold uppercase tracking-widest transition-colors",
                  item.accent
                    ? "text-[#f5a623] hover:text-[#f5a623]/80"
                    : "hover:bg-white/10 text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Google rating */}
          <div className="hidden md:flex items-center gap-2 ml-auto text-[10px] font-bold tracking-widest">
            <div className="flex text-[#f5a623] gap-px">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <span className="text-white/60">4.8 / 5 Google Reviews</span>
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
                  <div key={group.title}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/40 mb-4 border-b border-gray-100 pb-2">
                      {group.title}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="size-10 rounded-md overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                              <Image
                                src={item.image}
                                alt={item.label}
                                width={40}
                                height={40}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <span className="text-sm font-semibold group-hover:text-[#f5a623] transition-colors">
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Featured promo tile */}
                <div className="col-span-3 lg:col-span-0 lg:hidden xl:block mt-2 lg:mt-0">
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-6">
                <Link href="#" onClick={() => setMegaOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#f5a623] hover:underline">
                  Bekijk volledig assortiment →
                </Link>
                <Link href="#" onClick={() => setMegaOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/40 hover:text-[#2b3e51] transition-colors">
                  Aanbiedingen
                </Link>
                <Link href="#" onClick={() => setMegaOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/40 hover:text-[#2b3e51] transition-colors">
                  Nieuwe artikelen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── USP bar — hidden when scrolled ── */}
      <div className={cn("w-full bg-gray-50 border-b border-gray-100 overflow-hidden transition-all duration-300", scrolled ? "max-h-0 py-0" : "max-h-12 py-2")}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 overflow-x-auto scrollbar-none text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 whitespace-nowrap">
          {[
            "Gratis verzending vanaf €80",
            "Voor 16:00 besteld — zelfde dag verstuurd",
            "Gratis retourneren",
            "Veilig betalen via iDEAL & Klarna",
          ].map((usp) => (
            <div key={usp} className="flex items-center gap-1.5 shrink-0">
              <Check className="size-3 text-[#f5a623] shrink-0" />
              <span>{usp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-montserrat text-lg font-black tracking-widest text-[#2b3e51] uppercase">
                Menu
              </span>
              <button type="button" aria-label="Menu sluiten" onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-gray-700">
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {[...NAV_ITEMS, { label: "Mijn account", href: "/account/inloggen" }, { label: "Verlanglijst", href: "/account/verlanglijst" }].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-[#2b3e51] hover:bg-gray-50 border-b border-gray-50 transition-colors"
                >
                  {item.label}
                  <ChevronDown className="size-4 -rotate-90 text-gray-300" />
                </Link>
              ))}
            </nav>
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50 flex items-center gap-3">
              <span className="flex flex-col leading-none">
                <span className="font-montserrat text-base font-black tracking-tight text-[#2b3e51]">OneConnect</span>
                <span className="font-montserrat text-[8px] font-bold tracking-[0.4em] text-[#94a3b8] uppercase mt-0.5">Lightshop</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
