"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PRODUCTS, type Product } from "@/lib/products";
import { useLocale } from "@/i18n/LocaleContext";
import { cn } from "@/lib/utils";

type Variant = "desktop" | "mobile";

const MAX_PRODUCTS = 6;
const MAX_CATEGORIES = 3;

const CATEGORY_HREF: Record<string, string> = {
  "Aanstekers": "/aanstekers",
  "Kokers & Etuis": "/kokers-etuis",
  "Knippers & Asbakken": "/knippers-asbakken",
  "Rook-accessoires": "/rook-accessoires",
};

function tokenize(q: string): string[] {
  return q.toLowerCase().split(/\s+/).filter(Boolean);
}

function scoreProduct(p: Product, tokens: string[]): number {
  if (!tokens.length) return 0;
  const name = p.name.toLowerCase();
  const brand = p.brand.toLowerCase();
  const cat = p.category.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (name.startsWith(t)) score += 6;
    else if (name.includes(` ${t}`)) score += 4;
    else if (name.includes(t)) score += 3;
    else if (brand.includes(t)) score += 2;
    else if (cat.includes(t)) score += 1;
    else return -1;
  }
  return score;
}

export default function SearchAutocomplete({
  variant = "desktop",
  onNavigate,
}: {
  variant?: Variant;
  onNavigate?: () => void;
}) {
  const { t, dict } = useLocale();
  const ac = dict.search.autocomplete;
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  const trimmed = query.trim();
  const tokens = useMemo(() => tokenize(trimmed), [trimmed]);

  const products = useMemo(() => {
    if (!tokens.length) return [];
    const scored: Array<{ p: Product; s: number }> = [];
    for (const p of PRODUCTS) {
      const s = scoreProduct(p, tokens);
      if (s > 0) scored.push({ p, s });
    }
    scored.sort((a, b) => b.s - a.s);
    return scored.slice(0, MAX_PRODUCTS).map((x) => x.p);
  }, [tokens]);

  const categories = useMemo(() => {
    if (!tokens.length) return [];
    const seen = new Map<string, number>();
    for (const p of PRODUCTS) {
      const cat = p.category;
      if (!CATEGORY_HREF[cat]) continue;
      const haystack = `${cat} ${p.brand}`.toLowerCase();
      if (tokens.every((t) => haystack.includes(t))) {
        seen.set(cat, (seen.get(cat) ?? 0) + 1);
      }
    }
    return Array.from(seen.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, MAX_CATEGORIES)
      .map(([name, count]) => ({ name, count, href: CATEGORY_HREF[name] }));
  }, [tokens]);

  const totalItems = products.length + categories.length + 1;

  useEffect(() => {
    setActiveIndex(-1);
  }, [trimmed]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(href);
  }

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!trimmed) return;
    go(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setOpen(false);
      (e.target as HTMLInputElement).blur();
      return;
    }
    if (!open || totalItems === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % totalItems);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? totalItems - 1 : i - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      if (activeIndex < products.length) {
        go(`/product/${products[activeIndex].id}`);
      } else if (activeIndex < products.length + categories.length) {
        go(categories[activeIndex - products.length].href);
      } else {
        submit();
      }
    }
  }

  const showDropdown = open && focused && trimmed.length > 0;
  const empty = showDropdown && products.length === 0 && categories.length === 0;

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative transition-all duration-200",
        variant === "desktop" ? "hidden md:flex flex-1" : "w-full",
        variant === "desktop" && (focused ? "max-w-2xl" : "max-w-xl")
      )}
    >
      <form onSubmit={submit} className="relative w-full">
        <Input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setFocused(true);
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          placeholder={t("header.searchPlaceholder")}
          className={cn(
            "w-full pl-4 pr-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white focus:border-[#f5a623] text-sm transition-all",
            variant === "desktop" ? "h-10" : "h-11"
          )}
          autoComplete="off"
          role="combobox"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
        />
        {query && (
          <button
            type="button"
            aria-label={ac.clearQuery}
            onClick={() => {
              setQuery("");
              setActiveIndex(-1);
            }}
            className="absolute right-10 top-1/2 -translate-y-1/2 size-6 rounded-full flex items-center justify-center text-gray-400 hover:text-[#2b3e51] hover:bg-gray-100 transition-colors"
          >
            <X className="size-3.5" />
          </button>
        )}
        <button
          type="submit"
          aria-label={ac.submit}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-gray-400 hover:text-[#2b3e51] hover:bg-gray-100 transition-colors",
            variant === "desktop" ? "size-7" : "size-8"
          )}
        >
          <Search className="size-4" />
        </button>
      </form>

      {showDropdown && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+8px)] bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden z-50"
          style={{ boxShadow: "0 24px 60px -16px rgba(11, 19, 32, .25)" }}
        >
          {empty && (
            <div className="px-5 py-8 text-center">
              <p className="font-montserrat text-[13px] font-bold text-[#2b3e51] mb-1">
                {ac.noResultsBeforeQuery}{trimmed}{ac.noResultsAfterQuery}
              </p>
              <p className="text-[12px] text-gray-500">
                {ac.tryBrand}
              </p>
            </div>
          )}

          {products.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/60">
                {ac.productsSection}
              </div>
              <ul>
                {products.map((p, i) => {
                  const active = i === activeIndex;
                  return (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.id}`}
                        onClick={() => go(`/product/${p.id}`)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 transition-colors",
                          active ? "bg-[#f8f9fa]" : "hover:bg-[#f8f9fa]"
                        )}
                      >
                        <div className="relative w-11 h-11 flex-shrink-0 rounded-lg overflow-hidden bg-[#f4f5f6]">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-contain p-1"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-[#2b3e51] truncate leading-tight">
                            {p.name}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5 truncate">
                            {p.brand} · {p.category}
                          </p>
                        </div>
                        <span className="text-[13px] font-black text-[#2b3e51] flex-shrink-0">
                          €{p.price}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {categories.length > 0 && (
            <div className="py-2 border-t border-gray-100">
              <div className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/60">
                {ac.categoriesSection}
              </div>
              <ul>
                {categories.map((c, i) => {
                  const idx = products.length + i;
                  const active = idx === activeIndex;
                  return (
                    <li key={c.name}>
                      <Link
                        href={c.href}
                        onClick={() => go(c.href)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={cn(
                          "flex items-center justify-between px-4 py-2 transition-colors",
                          active ? "bg-[#f8f9fa]" : "hover:bg-[#f8f9fa]"
                        )}
                      >
                        <span className="text-[13px] font-semibold text-[#2b3e51]">
                          {c.name}
                        </span>
                        <span className="text-[11px] text-gray-500">
                          {c.count} {c.count === 1 ? ac.productSingular : ac.productPlural}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {!empty && (
            <button
              type="button"
              onMouseEnter={() => setActiveIndex(totalItems - 1)}
              onClick={() => submit()}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 border-t border-gray-100 font-montserrat text-[12px] font-black uppercase tracking-[0.12em] transition-colors",
                activeIndex === totalItems - 1
                  ? "bg-[#2b3e51] text-white"
                  : "text-[#2b3e51] hover:bg-[#2b3e51] hover:text-white"
              )}
            >
              <span>{ac.allResultsForBefore}{trimmed}{ac.noResultsAfterQuery}</span>
              <ArrowRight className="size-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
