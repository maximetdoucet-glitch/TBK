import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, SlidersHorizontal } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Clipper Aanstekers — TBK Lightshop",
  description:
    "Ontdek het volledige assortiment Clipper aanstekers bij TBK Lightshop Nijmegen. Navulbaar, duurzaam en altijd betrouwbaar.",
};

const FILTERS = ["Alle merken", "Clipper", "Zippo", "BIC"];
const SORT_OPTIONS = [
  "Aanbevolen",
  "Nieuwste eerst",
  "Prijs: laag → hoog",
  "Prijs: hoog → laag",
  "Meest beoordeeld",
];

export default function AanstekersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-white">
        {/* Page Header Banner */}
        <div className="w-full bg-[#2b3e51] py-10">
          <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/aanstekers" className="hover:text-white transition-colors">Aanstekers</Link>
              <span>/</span>
              <span className="text-white/80">Clipper Aanstekers</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div>
                <h1 className="text-2xl font-semibold text-white leading-snug">
                  Clipper Aanstekers
                </h1>
                <p className="text-white/40 text-xs mt-1">{PRODUCTS.length} producten</p>
              </div>
              <p className="text-white/40 text-xs hidden md:block">
                Specialist in herlaadbare aanstekers ·{" "}
                <span className="text-white/60">Gevestigd in Nijmegen</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-10">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 mb-8 pb-6 border-b border-gray-100">
            {/* Filters + Sort row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none flex-1">
                <SlidersHorizontal className="size-4 text-gray-400 shrink-0" />
                {FILTERS.map((f, i) => (
                  <button
                    key={f}
                    className={`text-xs px-4 py-1.5 border rounded-full transition-all whitespace-nowrap shrink-0 ${
                      i === 0
                        ? "border-[#2b3e51] bg-[#2b3e51] text-white"
                        : "border-gray-200 text-gray-500 hover:border-[#2b3e51] hover:text-[#2b3e51]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-gray-400 hidden sm:inline">Sorteren:</span>
                <select className="text-xs text-[#2b3e51] border border-gray-200 px-3 py-1.5 rounded appearance-none cursor-pointer focus:outline-none focus:border-[#2b3e51] bg-white">
                  {SORT_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-100 flex flex-col hover:shadow-md transition-all duration-300 rounded-sm"
              >
                {/* Image */}
                <Link href={`/product/${product.id}`} className="relative block overflow-hidden bg-[#f8f8f8] aspect-square p-5 sm:p-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#f39c12] text-white text-[10px] font-medium px-2.5 py-0.5 rounded-sm">
                      {product.badge}
                    </span>
                  )}
                  {product.oldPrice && (
                    <span className="absolute top-3 right-3 bg-[#2b3e51] text-white text-[10px] font-medium px-2.5 py-0.5 rounded-sm">
                      Sale
                    </span>
                  )}
                  <button className="absolute bottom-3 right-3 p-2 bg-white shadow-sm text-gray-300 hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full">
                    <Heart className="size-4" />
                  </button>
                </Link>

                {/* Info */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-3 fill-current ${i < product.rating ? "text-[#f39c12]" : "text-gray-200"}`}
                      />
                    ))}
                    <span className="text-[10px] text-gray-400 ml-1">({product.reviewCount})</span>
                  </div>

                  <p className="text-[10px] text-[#829e85] font-medium mb-1">{product.brand}</p>

                  <Link
                    href={`/product/${product.id}`}
                    className="text-sm font-semibold text-[#2b3e51] leading-snug mb-2 hover:text-primary transition-colors line-clamp-2"
                  >
                    {product.name}
                  </Link>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                      {product.oldPrice && (
                        <span className="text-[10px] text-gray-400 line-through leading-none mb-0.5">
                          € {product.oldPrice}
                        </span>
                      )}
                      <span className="text-base font-semibold text-[#2b3e51]">
                        € {product.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/product/${product.id}`}
                        className="text-xs text-[#2b3e51] hover:text-primary transition-colors underline underline-offset-4"
                      >
                        Bekijk
                      </Link>
                      <Button size="icon" className="bg-[#829e85] hover:bg-[#6b8e6b] rounded-sm size-8">
                        <ShoppingBag className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
