"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations, type Locale, type Dict } from "./translations";

const STORAGE_KEY = "tbk-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<Ctx | null>(null);

function lookup(dict: Dict, key: string): string {
  const parts = key.split(".");
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return key;
    }
  }
  return typeof cur === "string" ? cur : key;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer reads the stored locale synchronously on first client render.
  // On the server it always returns NL (no localStorage), and the very first client
  // render matches that for hydration safety; the second render picks up the stored
  // value via the useEffect below.
  const [locale, setLocaleState] = useState<Locale>("NL");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && stored in translations) setLocaleState(stored);
    } catch {}
    setHydrated(true);
  }, []);

  // Keep <html lang> in sync once we know the real locale client-side.
  useEffect(() => {
    if (hydrated && typeof document !== "undefined") {
      document.documentElement.lang = locale.toLowerCase();
    }
  }, [hydrated, locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = l.toLowerCase();
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = translations[locale] ?? translations.NL;
      const value = lookup(dict, key);
      if (value === key && locale !== "NL") return lookup(translations.NL, key);
      return value;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
