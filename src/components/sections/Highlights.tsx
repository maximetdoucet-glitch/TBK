import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HIGHLIGHTS = [
  {
    title: "Zippo Aanstekers",
    tagline: "Verzamel ze allemaal",
    image: "/images/tbk-highlight-zippos.png",
    href: "/category/zippo",
  },
  {
    title: "Vloei",
    tagline: "Verschillende soorten",
    image: "/images/haddock-banner-vloei.png",
    href: "/category/vloei",
  },
  {
    title: "Sigarenknippers",
    tagline: "Budget en exclusief",
    image: "/images/haddock-banner-cutters.png",
    href: "/category/sigarenknippers",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <Link 
              key={item.title} 
              href={item.href}
              className="bg-[#ebebeb] border border-gray-100 flex items-center justify-between min-h-[220px] group transition-all hover:shadow-lg overflow-hidden relative p-8 md:p-10"
            >
               {/* Live Text Overlay - Restored for perfect TBK branding */}
               <div className="flex-1 pr-4 z-10">
                  <h3 className="font-montserrat text-2xl font-black text-[#2b3e51] mb-1 uppercase tracking-tighter leading-[0.9] group-hover:text-primary transition-colors">
                     {item.title}
                  </h3>
                  <p className="text-[#2b3e51]/50 text-[10px] font-bold uppercase tracking-widest mb-6">
                     {item.tagline}
                  </p>
                  <Button className="bg-[#829e85] hover:bg-[#6b8e6b] text-white rounded-none h-10 px-6 font-bold uppercase tracking-widest text-[11px] shadow-sm transform transition-transform group-hover:scale-105">
                     Bekijk aanbod
                  </Button>
               </div>

               {/* Image Container - Scaled to fit next to text */}
               <div className="relative size-32 md:size-44 flex-shrink-0 z-0 group-hover:scale-110 transition-transform duration-700">
                  <Image 
                     src={item.image}
                     alt={item.title}
                     fill
                     className="object-contain object-right"
                  />
               </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
