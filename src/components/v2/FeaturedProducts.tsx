"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRODUCTS, type Product } from "@/lib/products";

function badgeColor(badge: string | null | undefined) {
  if (badge === "Bestseller") return "#829e85";
  if (badge === "Nieuw") return "#2b3e51";
  if (badge === "Sale") return "#e53e3e";
  return "#829e85";
}

function getCardBg(product: Product): string {
  const brand = product.brand?.toLowerCase() ?? "";
  const cat = (product.xmlCategory ?? product.category ?? "").toLowerCase();
  if (brand === "zippo") return "/images/categories/zippo.jpg";
  if (brand === "clipper") return "/images/categories/clipper.jpg";
  if (cat.includes("jetflame") || cat.includes("e-sigaret") || ["smok","vaporesso","voopoo","aspire","lost vape"].includes(brand))
    return "/images/categories/jetflame.jpg";
  if (cat.includes("humidor") || brand === "adorini") return "/images/categories/humidors.jpg";
  if (cat.includes("knipper") || cat.includes("cutter")) return "/images/categories/knippers.jpg";
  if (cat.includes("koker") || cat.includes("tube")) return "/images/categories/kokers.jpg";
  if (cat.includes("vloei") || cat.includes("filter") || cat.includes("liquid")) return "/images/categories/vloei.jpg";
  return "/images/categories/zippo.jpg";
}

// Curated featured product IDs (Zippo + accessories + e-sig)
const FEATURED_IDS = [156, 33, 151, 48, 421, 414, 331, 528];

function getFeatured(): Product[] {
  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
  const curated = FEATURED_IDS.map((id) => byId.get(id)).filter(Boolean) as Product[];
  // Fill remaining slots from bestsellers
  const bs = PRODUCTS.filter((p) => p.badge === "Bestseller" && !FEATURED_IDS.includes(p.id));
  return [...curated, ...bs].slice(0, 8);
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
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn("size-3 fill-current", i < Math.round(rating) ? "text-[#f39c12]" : "text-gray-200")}
          />
        ))}
      </div>
      <span className="text-[10px] text-gray-400 font-medium">({count})</span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const price = parseFloat(product.price);
  const bg = getCardBg(product);

  const handleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Atmospheric background image */}
        <Image
          src={bg}
          alt=""
          fill
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 blur-[2px]"
          unoptimized
          aria-hidden
        />
        {/* Dark overlay so product stands out */}
        <div className="absolute inset-0 bg-[#1a2535]/60 group-hover:bg-[#1a2535]/50 transition-colors duration-500" />
        {/* Product image on top */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="relative object-contain p-6 transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
          style={{ zIndex: 1 }}
          unoptimized
        />
        {product.badge && (
          <div
            className="absolute top-3 left-3 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md"
            style={{ backgroundColor: badgeColor(product.badge) }}
          >
            {product.badge}
          </div>
        )}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted((w) => !w); }}
          className={cn(
            "absolute bottom-3 right-3 size-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm",
            wishlisted
              ? "bg-red-50 text-red-500 opacity-100"
              : "bg-white/80 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-400 backdrop-blur-sm"
          )}
          aria-label="Verlanglijst"
        >
          <Heart className={cn("size-4", wishlisted && "fill-current")} />
        </button>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/30 mb-1">
          {product.brand} · {product.category}
        </p>
        <h3 className="font-montserrat text-sm font-black text-[#2b3e51] leading-snug mb-1.5 group-hover:text-[#829e85] transition-colors line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <span className="font-montserrat text-xl font-black text-[#2b3e51]">
            € {price.toFixed(2)}
          </span>
          <button
            onClick={handleCart}
            className={cn(
              "flex items-center gap-2 px-3.5 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300",
              addedToCart
                ? "bg-green-500 text-white scale-95"
                : "bg-[#2b3e51] hover:bg-[#829e85] text-white"
            )}
            aria-label="In winkelwagen"
          >
            <ShoppingBag className="size-4 shrink-0" />
            <span className="hidden sm:block">{addedToCart ? "Toegevoegd!" : "In wagen"}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("bestsellers");

  const tabs = [
    { id: "bestsellers", label: "Bestsellers" },
    { id: "nieuw", label: "Nieuw binnen" },
    { id: "sale", label: "Voordeel" },
  ];

  const filtered = getTabProducts(activeTab);

  return (
    <section className="bg-[#f8f8f8] py-12 sm:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#829e85] mb-1">
              Populair dit seizoen
            </p>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              Aanbevolen producten
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/aanstekers"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#2b3e51] hover:bg-[#829e85] text-white font-bold uppercase tracking-widest text-[11px] transition-all duration-300 rounded-none group"
          >
            Bekijk volledig aanbod
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
