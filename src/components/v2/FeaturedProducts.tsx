"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRODUCTS, type Product } from "@/lib/products";

function badgeColor(badge: string | null | undefined) {
  if (badge === "Bestseller") return "#f5a623";
  if (badge === "Nieuw") return "#2b3e51";
  if (badge === "Sale") return "#e53e3e";
  return "#f5a623";
}


// Curated featured product IDs — spread across the 4 collections
const FEATURED_IDS = [156, 151, 421, 414, 528, 92, 229, 226];

function getFeatured(): Product[] {
  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
  const curated = FEATURED_IDS.map((id) => byId.get(id)).filter(Boolean) as Product[];
  // Fill any missing slots with the highest-rated remaining products
  if (curated.length < 8) {
    const fill = PRODUCTS
      .filter((p) => !FEATURED_IDS.includes(p.id))
      .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    return [...curated, ...fill].slice(0, 8);
  }
  return curated;
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
            className={cn("size-3 fill-current", i < Math.round(rating) ? "text-[#f5a623]" : "text-gray-200")}
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
      <div className="relative aspect-square overflow-hidden bg-[#f4f5f6]">
        {/* multiply blend makes the product image's white bg invisible */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          style={{ mixBlendMode: "multiply" }}
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
        <h3 className="font-montserrat text-sm font-black text-[#2b3e51] leading-snug mb-1.5 group-hover:text-[#f5a623] transition-colors line-clamp-2">
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
                : "bg-[#2b3e51] hover:bg-[#f5a623] text-white"
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
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1">
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
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#2b3e51] hover:bg-[#f5a623] text-white font-bold uppercase tracking-widest text-[11px] transition-all duration-300 rounded-lg group"
          >
            Bekijk volledig aanbod
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
