import { cookies } from "next/headers";
import { translations, type Locale, type Dict } from "./translations";

export const LOCALE_COOKIE = "tbk-locale";

// Read the active locale from the cookie set by LocaleContext.setLocale.
// Server components call this to render in the user's chosen language.
// Falls back to NL when no cookie is present (or contains an unknown value).
export async function getServerLocale(): Promise<Locale> {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  if (raw && raw in translations) return raw as Locale;
  return "NL";
}

export async function getServerDict(): Promise<Dict> {
  const locale = await getServerLocale();
  return translations[locale];
}
