import React from "react";
import Image from "next/image";
import Link from "next/link";

const HIGHLIGHTS = [
  {
    title: "Clipper Aanstekers",
    image: "/images/haddock-banner-clipper.png",
    href: "/category/clipper",
  },
  {
    title: "Vloei",
    image: "/images/haddock-banner-vloei.png",
    href: "/category/vloei",
  },
  {
    title: "Sigarenknippers",
    image: "/images/haddock-banner-cutters.png",
    href: "/category/cutters",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <Link 
              key={item.title} 
              href={item.href}
              className="bg-[#ebebeb] border border-gray-100 block transition-all hover:shadow-lg overflow-hidden relative min-h-[220px] group"
            >
               {/* 1:1 Haddock's look: Image contains both the text and button */}
               <div className="absolute inset-0 z-0">
                  <Image 
                     src={item.image}
                     alt={item.title}
                     fill
                     className="object-cover object-right transition-transform duration-700 group-hover:scale-105"
                  />
               </div>
               
               {/* Subtle branding line to tie it to TBK */}
               <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-black uppercase tracking-widest bg-white/80 px-2 py-1 text-[#2b3e51] rounded-sm shadow-sm">
                     TBK COLLECTION
                  </span>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
