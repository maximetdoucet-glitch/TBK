"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight, Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  { id: 1, name: "Rizla Vloei Oranje Box", description: "Volledige doos met 50 pakjes Rizla Oranje.", price: "24.50", oldPrice: "29.95", image: "/images/rizla.png", rating: 5, category: "Vloei" },
  { id: 2, name: "Zippo Street Chrome", description: "Klassieke Zippo met een robuuste chrome afwerking.", price: "39.95", image: "/images/hero_zippo.png", rating: 4, category: "Zippo" },
  { id: 3, name: "Mascotte Original Vloei Box", description: "Premium vloei van Nederlandse bodem.", price: "12.20", image: "/images/vloei.png", rating: 5, category: "Vloei" },
  { id: 4, name: "Clipper Classic - Set", description: "Set van 4 iconische hervulbare aanstekers.", price: "12.50", image: "/images/clipper.png", rating: 5, category: "Aanstekers" },
  { id: 5, name: "Colibri V-Cut", description: "Hoogwaardige sigarenknipper met diepe V-snede.", price: "45.00", image: "/images/cutters.png", rating: 5, category: "Sigarenknippers" },
  { id: 6, name: "BIC Maxi J26", description: "De betrouwbaarste wegwerpaansteker ter wereld.", price: "1.95", image: "/images/featured_1.png", rating: 4, category: "Aanstekers" },
];

export default function ProductSlider() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto max-w-[1300px] px-4">
        {/* Header with Arrows Top-Right */}
        <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6">
          <h2 className="font-montserrat text-3xl font-black text-[#2b3e51] uppercase tracking-tighter">
            Deze week het vaakst verkocht
          </h2>
          <div className="flex gap-4">
             <button className="swiper-prev-btn text-[#2b3e51] hover:text-primary transition-colors">
                <ArrowLeft className="size-6" />
             </button>
             <button className="swiper-next-btn text-[#2b3e51] hover:text-primary transition-colors">
                <ArrowRight className="size-6" />
             </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-prev-btn",
            nextEl: ".swiper-next-btn",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group bg-white border border-gray-100 p-8 flex flex-col h-full hover:shadow-lg transition-all rounded-lg">
                <div className="relative aspect-square w-full mb-8 overflow-hidden bg-[#f8f8f8] flex items-center justify-center p-8">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="p-2 bg-white shadow-md text-gray-400 hover:text-primary rounded-full">
                        <Heart className="size-4" />
                     </button>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex gap-0.5 mb-2 text-[#f39c12]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("size-3 fill-current", i >= product.rating && "text-gray-200")} />
                    ))}
                  </div>
                  <Link href={`/product/${product.id}`} className="font-montserrat text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </Link>
                  <p className="text-[10px] text-gray-400 mb-3 italic">
                    {product.description}
                  </p>
                  <p className="text-[10px] text-[#2b3e51]/40 uppercase font-bold tracking-[0.2em] mb-4">
                    {product.category}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-col">
                    {product.oldPrice && (
                       <span className="text-[10px] text-gray-400 line-through">€ {product.oldPrice}</span>
                    )}
                    <span className="font-montserrat text-lg font-black text-[#2b3e51]">€ {product.price}</span>
                  </div>
                  <Button size="icon" className="bg-[#829e85] hover:bg-[#6b8e6b] rounded-lg size-10">
                    <ShoppingBag className="size-5" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Button Below Swiper */}
        <div className="flex justify-center mt-12">
           <Button className="bg-[#829e85] hover:bg-[#6b8e6b] text-white rounded-none h-14 px-12 font-bold uppercase tracking-widest text-xs">
              Bekijk aanbod <ArrowRight className="ml-2 size-4" />
           </Button>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
