"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { translations, type Locale, type Dict } from "./translations";

const STORAGE_KEY = "tbk-locale";
// Cookie consumed by the server-side getServerLocale() helper so RSC payloads
// render in the user's chosen language. Keep the name in sync with src/i18n/server.ts.
const LOCALE_COOKIE = "tbk-locale";

function writeLocaleCookie(value: Locale) {
  if (typeof document === "undefined") return;
  // 1-year lifetime, root path, lax-secure defaults
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${value}; max-age=${oneYear}; path=/; samesite=lax`;
}

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  // Raw locale dictionary — use when you need a structured value (array,
  // nested object) that `t()` can't return.
  dict: Dict;
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
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && stored in translations) {
        setLocaleState(stored);
        // Mirror to cookie so server components pick up the right locale on
        // subsequent navigations (the cookie may not exist yet if the user
        // last set the locale before the cookie was wired up).
        writeLocaleCookie(stored);
      }
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
    writeLocaleCookie(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l.toLowerCase();
    }
    // Re-fetch any server-rendered content so RSC chrome (collection-page
    // sidebar, pagination, etc. that reads getServerLocale) picks up the
    // newly-set locale cookie.
    router.refresh();
  }, [router]);

  const t = useCallback(
    (key: string) => {
      const dict = translations[locale] ?? translations.NL;
      const value = lookup(dict, key);
      if (value === key && locale !== "NL") return lookup(translations.NL, key);
      return value;
    },
    [locale]
  );

  const dict = translations[locale] ?? translations.NL;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
