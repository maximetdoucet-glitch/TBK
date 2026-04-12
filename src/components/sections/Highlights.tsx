import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HIGHLIGHTS = [
  {
    type: "custom",
    title: "Zippo Aanstekers",
    tagline: "Verzamel ze allemaal",
    image: "/images/tbk-highlight-zippos.png",
    href: "/category/zippo",
  },
  {
    type: "haddock",
    title: "Vloei",
    image: "/images/haddock-banner-vloei.png",
    href: "/category/vloei",
  },
  {
    type: "haddock",
    title: "Sigarenknippers",
    image: "/images/haddock-banner-cutters.png",
    href: "/category/sigarenknippers",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => {
            if (item.type === "custom") {
              // Zippo box: same aspect ratio as Haddock banners, matching typography
              return (
                <Link 
                  key={item.title} 
                  href={item.href}
                  className="bg-[#f2f2f2] border border-gray-100 flex items-center justify-between aspect-[820/450] group transition-all hover:shadow-lg overflow-hidden relative px-8 md:px-10"
                >
                   {/* Text - Matching Haddock's condensed bold style */}
                   <div className="flex-1 pr-4 z-10">
                      <h3 className="font-montserrat text-[28px] md:text-[32px] font-black text-[#2b3e51] mb-1 uppercase tracking-tighter leading-[1.05]">
                         ZIPPO<br />AANSTEKERS
                      </h3>
                      <p className="text-[#2b3e51]/50 text-[11px] font-medium mb-5">
                         Verzamel ze allemaal
                      </p>
                      <button className="bg-[#7b927a] hover:bg-[#6b8e6b] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wide rounded-sm transition-colors">
                         Bekijk aanbod
                      </button>
                   </div>

                   {/* Image - blended into background */}
                   <div className="relative w-36 md:w-44 h-full flex-shrink-0 z-0 group-hover:scale-105 transition-transform duration-700">
                      <Image 
                         src={item.image}
                         alt={item.title}
                         fill
                         className="object-contain object-right mix-blend-multiply"
                      />
                   </div>
                </Link>
              );
            }

            // Haddock banners: full-image with baked-in text
            return (
              <Link 
                key={item.title} 
                href={item.href}
                className="bg-[#f2f2f2] border border-gray-100 block transition-all hover:shadow-lg overflow-hidden relative aspect-[820/450] group"
              >
                 <div className="absolute inset-0 z-0">
                    <Image 
                       src={item.image}
                       alt={item.title}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
