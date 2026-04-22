"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, Check, ChevronDown, ArrowLeft } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === Number(id));

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("beschrijving");

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl font-semibold text-[#2b3e51] mb-3">404</p>
            <p className="text-sm text-gray-400 mb-8">Product niet gevonden</p>
            <Link href="/aanstekers">
              <Button className="bg-[#f5a623] hover:bg-[#6b8e6b] rounded-sm text-sm px-8 h-11">
                Terug naar aanstekers
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const discount = product.oldPrice
    ? Math.round((1 - Number(product.price) / Number(product.oldPrice)) * 100)
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-white">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 lg:mb-10 overflow-hidden">
            <Link href="/" className="hover:text-[#2b3e51] transition-colors shrink-0">Home</Link>
            <span className="shrink-0">/</span>
            <Link href="/aanstekers" className="hover:text-[#2b3e51] transition-colors shrink-0">Aanstekers</Link>
            <span className="shrink-0">/</span>
            <span className="text-[#2b3e51] truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
            {/* ── LEFT: Gallery ── */}
            <div className="flex flex-col gap-3">
              <div className="relative bg-[#f8f8f8] aspect-square overflow-hidden flex items-center justify-center p-6 sm:p-12 rounded-sm">
                <Image
                  src={product.images[activeImg]}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full transition-all duration-300"
                />
                {product.badge && (
                  <span className="absolute top-5 left-5 bg-[#f5a623] text-white text-[10px] font-medium px-2.5 py-1 rounded-sm">
                    {product.badge}
                  </span>
                )}
                {discount && (
                  <span className="absolute top-5 right-5 bg-[#2b3e51] text-white text-[10px] font-medium px-2.5 py-1 rounded-sm">
                    −{discount}%
                  </span>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`bg-[#f8f8f8] aspect-square w-20 overflow-hidden flex items-center justify-center p-3 border-2 transition-all duration-200 rounded-sm ${
                        activeImg === i ? "border-[#2b3e51]" : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <Image src={img} alt="" width={80} height={80} className="object-contain w-full h-full" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: Product Info ── */}
            <div className="flex flex-col">
              {/* Brand */}
              <p className="text-xs text-[#f5a623] font-medium mb-2">{product.brand}</p>

              {/* Title */}
              <h1 className="text-2xl xl:text-3xl font-semibold text-[#2b3e51] leading-snug mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 fill-current ${i < product.rating ? "text-[#f5a623]" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">
                  {product.rating}.0 / 5 · {product.reviewCount} beoordelingen
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-7 pb-7 border-b border-gray-100">
                <span className="text-3xl font-semibold text-[#2b3e51]">€ {product.price}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-base text-gray-400 line-through">€ {product.oldPrice}</span>
                    <span className="text-xs font-semibold bg-[#f5a623]/10 text-[#f5a623] px-2 py-0.5 rounded">
                      −{discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-7">{product.description}</p>

              {/* Variant Selector */}
              <div className="mb-7">
                <p className="text-xs text-gray-500 mb-3">
                  {product.variants.label}:{" "}
                  <span className="text-[#2b3e51] font-semibold">{product.variants.values[selectedVariant]}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.values.map((v, i) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(i)}
                      className={`text-xs px-4 py-2 border rounded-sm transition-all ${
                        selectedVariant === i
                          ? "border-[#2b3e51] bg-[#2b3e51] text-white"
                          : "border-gray-200 text-gray-500 hover:border-[#2b3e51] hover:text-[#2b3e51]"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex flex-wrap gap-3 mb-7">
                <div className="flex items-center border border-gray-200 rounded-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 flex items-center justify-center text-lg text-[#2b3e51] hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-11 h-11 flex items-center justify-center text-sm font-semibold text-[#2b3e51] border-x border-gray-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    className="w-11 h-11 flex items-center justify-center text-lg text-[#2b3e51] hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className={`flex-1 min-w-[160px] h-11 rounded-sm text-sm font-semibold transition-all ${
                    added
                      ? "bg-[#f5a623] hover:bg-[#f5a623]"
                      : "bg-[#2b3e51] hover:bg-[#1e2d3d]"
                  }`}
                >
                  {added ? (
                    <><Check className="size-4 mr-2" /> Toegevoegd</>
                  ) : (
                    <><ShoppingBag className="size-4 mr-2" /> In winkelwagen</>
                  )}
                </Button>

                <button className="w-11 h-11 border border-gray-200 rounded-sm flex items-center justify-center text-gray-400 hover:border-[#2b3e51] hover:text-[#2b3e51] transition-all">
                  <Heart className="size-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col gap-2.5 py-5 border-t border-b border-gray-100 mb-7">
                {[
                  "Gratis verzending vanaf € 80,- (NL) & € 100,- (BE)",
                  "Op werkdagen voor 16:00 besteld, dezelfde dag verstuurd",
                  "Gratis retourneren binnen Nederland",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="size-3.5 text-[#f5a623] shrink-0" />
                    <span className="text-xs text-gray-500">{item}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="flex flex-col">
                {[
                  {
                    key: "beschrijving",
                    label: "Productomschrijving",
                    content: (
                      <p className="text-sm text-gray-500 leading-relaxed">{product.longDescription}</p>
                    ),
                  },
                  {
                    key: "specs",
                    label: "Specificaties",
                    content: (
                      <div className="flex flex-col gap-2.5">
                        {product.specs.map((s) => (
                          <div key={s.label} className="flex gap-4 text-sm">
                            <span className="text-gray-400 w-32 shrink-0">{s.label}</span>
                            <span className="text-[#2b3e51] font-medium">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                  {
                    key: "levering",
                    label: "Verzending & levering",
                    content: (
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Bestellingen geplaatst voor 16:00 worden dezelfde werkdag verstuurd.
                        Levering in Nederland 1–2 werkdagen · België 2–3 werkdagen.
                        Gratis verzending bij bestellingen vanaf € 80 (NL) / € 100 (BE).
                      </p>
                    ),
                  },
                ].map((section) => (
                  <div key={section.key} className="border-b border-gray-100">
                    <button
                      className="w-full flex justify-between items-center py-4 text-sm font-medium text-[#2b3e51] hover:text-primary transition-colors text-left"
                      onClick={() => setOpenAccordion(openAccordion === section.key ? null : section.key)}
                    >
                      {section.label}
                      <ChevronDown
                        className={`size-4 text-gray-400 transition-transform duration-200 ${
                          openAccordion === section.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openAccordion === section.key && (
                      <div className="pb-5">{section.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12 lg:mt-20 pt-10 lg:pt-12 border-t border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-[#2b3e51]">Gerelateerde producten</h2>
              <Link
                href="/aanstekers"
                className="flex items-center gap-1.5 text-xs text-[#f5a623] hover:text-[#2b3e51] transition-colors"
              >
                <ArrowLeft className="size-3" /> Terug naar collectie
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {PRODUCTS.filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.id}
                    href={`/product/${related.id}`}
                    className="group bg-white border border-gray-100 hover:shadow-md transition-all duration-300 block rounded-sm"
                  >
                    <div className="bg-[#f8f8f8] aspect-square overflow-hidden flex items-center justify-center p-4 sm:p-8">
                      <Image
                        src={related.image}
                        alt={related.name}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] text-[#f5a623] font-medium mb-1">{related.brand}</p>
                      <p className="text-sm font-medium text-[#2b3e51] leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {related.name}
                      </p>
                      <p className="text-sm font-semibold text-[#2b3e51]">€ {related.price}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
