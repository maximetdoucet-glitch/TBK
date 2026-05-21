"use client";

import React, { useState, useRef } from "react";
import SafeImage from "@/components/v2/SafeImage";
import ShippingNote from "@/components/v2/ShippingNote";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import StarRow from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";
import { PRODUCTS, type Product } from "@/lib/products";
import { useLocale } from "@/i18n/LocaleContext";
import { useCart } from "@/cart/CartContext";

function badgeColor(badge: string | null | undefined) {
  if (badge === "Bestseller") return "#f5a623";
  if (badge === "Nieuw") return "#2b3e51";
  if (badge === "Sale") return "#e53e3e";
  return "#f5a623";
}


// Sort by external-popularity score (Bol.com / Amazon.nl review counts × rating)
// scraped via scripts/scrape-popularity.mjs. Falls back to in-house rating.
function popularityKey(p: Product): number {
  if (typeof p.popularityScore === "number" && p.popularityScore > 0) {
    return p.popularityScore;
  }
  return p.rating * Math.log2(1 + p.reviewCount);
}

function getFeatured(): Product[] {
  // Spread across the 4 main categories so the row isn't all Zippos
  const PER_CAT = 2;
  const buckets = new Map<string, Product[]>();
  const sorted = [...PRODUCTS].sort((a, b) => popularityKey(b) - popularityKey(a));
  for (const p of sorted) {
    const arr = buckets.get(p.category) ?? [];
    if (arr.length < PER_CAT) {
      arr.push(p);
      buckets.set(p.category, arr);
    }
  }
  const picked = Array.from(buckets.values()).flat();
  // If we didn't fill 8 slots (small categories), top up with global ranking
  if (picked.length < 8) {
    const seen = new Set(picked.map((p) => p.id));
    for (const p of sorted) {
      if (picked.length >= 8) break;
      if (!seen.has(p.id)) picked.push(p);
    }
  }
  return picked.slice(0, 8);
}

function getTabProducts(tab: string): Product[] {
  if (tab === "nieuw") {
    return PRODUCTS.filter((p) => p.xmlCategory === "Zippo-aanstekers").slice(0, 8);
  }
  if (tab === "sale") {
    return PRODUCTS.filter(
      (p) => p.category === "Aanstekers" && parseFloat(p.price) <= 14
    ).slice(0, 8);
  }
  return getFeatured();
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <StarRow rating={rating} size={12} />
      <span className="text-[10px] text-gray-400 font-medium">({count})</span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { t } = useLocale();
  const { add, openDrawer } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const price = parseFloat(product.price);
  const badgeMap: Record<string, string> = {
    Bestseller: t("featuredProducts.badges.bestseller"),
    Nieuw: t("featuredProducts.badges.new"),
    Sale: t("featuredProducts.badges.sale"),
  };

  const handleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    add({
      id: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      price,
      quantity: 1,
    });
    setAddedToCart(true);
    openDrawer();
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f4f5f6]">
        {/* multiply blend makes the product image's white bg invisible */}
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
          style={{ mixBlendMode: "multiply" }}
        />
        {product.badge && (
          <div
            className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
            style={{ backgroundColor: badgeColor(product.badge) }}
          >
            {badgeMap[product.badge] ?? product.badge}
          </div>
        )}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted((w) => !w); }}
          className={cn(
            "absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 size-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm",
            wishlisted
              ? "bg-red-50 text-red-500 opacity-100"
              : "bg-white/80 text-gray-400 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:text-red-400 backdrop-blur-sm"
          )}
          aria-label={t("featuredProducts.wishlist")}
        >
          <Heart className={cn("size-4", wishlisted && "fill-current")} />
        </button>
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/30 mb-1 truncate">
          {product.brand} · {product.category}
        </p>
        <h3 className="font-montserrat text-[13px] sm:text-sm font-black text-[#2b3e51] leading-snug mb-1.5 group-hover:text-[#f5a623] transition-colors line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <ShippingNote sameDay={product.sameDayDelivery} className="mt-1.5 sm:mt-2" />
        <div className="flex items-center justify-between mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-gray-50 gap-2">
          <span className="font-montserrat text-lg sm:text-xl font-black text-[#2b3e51]">
            € {price.toFixed(2)}
          </span>
          <button
            onClick={handleCart}
            className={cn(
              "flex items-center gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300 shrink-0",
              addedToCart
                ? "bg-green-500 text-white scale-95"
                : "bg-[#2b3e51] hover:bg-[#f5a623] text-white"
            )}
            aria-label={t("featuredProducts.inCart")}
          >
            <ShoppingBag className="size-4 shrink-0" />
            <span className="hidden md:block">{addedToCart ? t("featuredProducts.addedToCart") : t("featuredProducts.addToCart")}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProducts() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState("bestsellers");

  const tabs = [
    { id: "bestsellers", label: t("featuredProducts.tabs.bestsellers") },
    { id: "nieuw", label: t("featuredProducts.tabs.new") },
    { id: "sale", label: t("featuredProducts.tabs.sale") },
  ];

  const filtered = getTabProducts(activeTab);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f8f8f8] py-10 sm:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1">
              {t("featuredProducts.eyebrow")}
            </p>
            <h2 className="font-montserrat text-2xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              {t("featuredProducts.heading")}
            </h2>
          </div>
          <div className="flex rounded-full border border-gray-200 bg-white p-1 self-start sm:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all",
                  activeTab === tab.id ? "bg-[#2b3e51] text-white" : "text-gray-400 hover:text-[#2b3e51]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Vorige producten"
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 size-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-[#2b3e51] hover:bg-[#f5a623] hover:text-white hover:border-[#f5a623] transition-all"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div
            ref={scrollerRef}
            className="flex gap-2.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          >
            {filtered.map((product) => (
              <div
                key={product.id}
                data-card
                className="snap-start shrink-0 w-[55%] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Volgende producten"
            className="flex absolute right-2 top-1/2 -translate-y-1/2 z-10 size-11 rounded-full bg-[#2b3e51] shadow-lg items-center justify-center text-white hover:bg-[#f5a623] transition-all"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/aanstekers"
            className="inline-flex items-center gap-2.5 sm:gap-3 px-7 sm:px-10 py-3.5 sm:py-4 bg-[#2b3e51] hover:bg-[#f5a623] text-white font-bold uppercase tracking-widest text-[11px] transition-all duration-300 rounded-lg group"
          >
            {t("featuredProducts.viewAll")}
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
