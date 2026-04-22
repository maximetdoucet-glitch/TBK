"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    id: 1,
    name: "Zippo Street Chrome",
    brand: "Zippo",
    description: "Klassieke Zippo. Levenslange garantie.",
    price: 39.95,
    oldPrice: null,
    image: "/images/hero_zippo.png",
    rating: 5,
    reviewCount: 342,
    badge: "Bestseller",
    badgeColor: "#829e85",
    category: "Aanstekers",
    inStock: true,
  },
  {
    id: 2,
    name: "Clipper Metal Edition",
    brand: "Clipper",
    description: "Premium metalen behuizing, navulbaar.",
    price: 18.95,
    oldPrice: 22.50,
    image: "/images/clipper.png",
    rating: 4,
    reviewCount: 58,
    badge: "Sale",
    badgeColor: "#e53e3e",
    category: "Aanstekers",
    inStock: true,
  },
  {
    id: 3,
    name: "Rizla Oranje Box",
    brand: "Rizla",
    description: "50 pakjes per doos. De standaard.",
    price: 24.50,
    oldPrice: 29.95,
    image: "/images/rizla.png",
    rating: 5,
    reviewCount: 218,
    badge: "Sale",
    badgeColor: "#e53e3e",
    category: "Vloei",
    inStock: true,
  },
  {
    id: 4,
    name: "Colibri V-Cut Knipper",
    brand: "Colibri",
    description: "Diepe V-snede voor een perfecte rookervaring.",
    price: 45.00,
    oldPrice: null,
    image: "/images/cutters.png",
    rating: 5,
    reviewCount: 77,
    badge: "Nieuw",
    badgeColor: "#2b3e51",
    category: "Sigarenknippers",
    inStock: true,
  },
  {
    id: 5,
    name: "Clipper Eco Bio Aansteker",
    brand: "Clipper",
    description: "Gerecycled materiaal, volledig navulbaar.",
    price: 11.95,
    oldPrice: null,
    image: "/images/featured_1.png",
    rating: 5,
    reviewCount: 91,
    badge: "Eco",
    badgeColor: "#276749",
    category: "Aanstekers",
    inStock: true,
  },
  {
    id: 6,
    name: "Clipper Classic 3-pack",
    brand: "Clipper",
    description: "Altijd een aansteker bij de hand.",
    price: 9.95,
    oldPrice: null,
    image: "/images/vloei.png",
    rating: 5,
    reviewCount: 212,
    badge: null,
    badgeColor: null,
    category: "Aanstekers",
    inStock: true,
  },
  {
    id: 7,
    name: "BIC Maxi J26",
    brand: "BIC",
    description: "De meest betrouwbare wegwerpaansteker.",
    price: 1.95,
    oldPrice: null,
    image: "/images/featured_1.png",
    rating: 4,
    reviewCount: 450,
    badge: null,
    badgeColor: null,
    category: "Aanstekers",
    inStock: true,
  },
  {
    id: 8,
    name: "Mascotte Original Box",
    brand: "Mascotte",
    description: "Premium vloei, Nederlandse kwaliteit.",
    price: 12.20,
    oldPrice: null,
    image: "/images/vloei.png",
    rating: 5,
    reviewCount: 134,
    badge: null,
    badgeColor: null,
    category: "Vloei",
    inStock: false,
  },
];

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-3 fill-current",
              i < rating ? "text-[#f39c12]" : "text-gray-200"
            )}
          />
        ))}
      </div>
      <span className="text-[10px] text-gray-400 font-medium">({count})</span>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image area */}
      <div className="relative bg-gray-50 aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-108"
        />

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-3 left-3 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md"
            style={{ backgroundColor: product.badgeColor! }}
          >
            {product.badge}
          </div>
        )}

        {/* Discount badge */}
        {discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md">
            -{discount}%
          </div>
        )}

        {/* Wishlist button */}
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

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-white text-[#2b3e51] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              Niet op voorraad
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/30 mb-1">
          {product.brand} · {product.category}
        </p>

        <h3 className="font-montserrat text-sm font-black text-[#2b3e51] leading-snug mb-1.5 group-hover:text-[#829e85] transition-colors">
          {product.name}
        </h3>

        <p className="text-[11px] text-gray-400 italic leading-snug mb-3 flex-1">
          {product.description}
        </p>

        <StarRating rating={product.rating} count={product.reviewCount} />

        {/* Price + cart row */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-[10px] text-gray-300 line-through leading-none mb-0.5">
                € {product.oldPrice.toFixed(2)}
              </span>
            )}
            <span className="font-montserrat text-xl font-black text-[#2b3e51]">
              € {product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCart}
            disabled={!product.inStock}
            className={cn(
              "flex items-center gap-2 px-3.5 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300",
              addedToCart
                ? "bg-green-500 text-white scale-95"
                : product.inStock
                ? "bg-[#2b3e51] hover:bg-[#829e85] text-white"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            )}
            aria-label="In winkelwagen"
          >
            <ShoppingBag className="size-4 shrink-0" />
            <span className="hidden sm:block">
              {addedToCart ? "Toegevoegd!" : "In wagen"}
            </span>
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
    { id: "sale", label: "Sale" },
  ];

  const filtered = PRODUCTS.filter((p) => {
    if (activeTab === "sale") return p.oldPrice !== null;
    if (activeTab === "nieuw") return p.badge === "Nieuw" || p.badge === "Eco";
    return true;
  });

  return (
    <section className="bg-[#f8f8f8] py-12 sm:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#829e85] mb-1">
              Populair dit seizoen
            </p>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              Aanbevolen producten
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex rounded-full border border-gray-200 bg-white p-1 self-start sm:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all",
                  activeTab === tab.id
                    ? "bg-[#2b3e51] text-white"
                    : "text-gray-400 hover:text-[#2b3e51]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
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
