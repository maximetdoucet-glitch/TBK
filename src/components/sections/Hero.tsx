import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[1300px] px-4">
        {/* Aspect Ratio Box: Native Haddock 2048x540 (3.79:1) */}
        <a 
          href="/category/zippo" 
          className="block relative bg-[#ebebeb] overflow-hidden group border border-gray-100 shadow-sm transition-all hover:shadow-md aspect-[2048/540]"
        >
          {/* Background Image - Scale: Fill ensures width is always 100% and no clipping occurs at the sides */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/images/haddock-hero.png"
                alt="TBK Lightshop Hero"
                fill
                className="object-cover object-center scale-100 transition-transform duration-1000 group-hover:scale-[1.01]"
                priority
             />
          </div>

          {/* Branding Tag */}
          <div className="absolute bottom-4 left-6 z-10 hidden md:block">
             <div className="bg-white/80 backdrop-blur-sm px-4 py-2 border-l-4 border-primary shadow-sm flex items-center gap-3">
                <span className="font-montserrat text-[9px] font-black tracking-[0.2em] text-[#2b3e51]">
                   TBK LIGHTSHOP — NIJMEGEN
                </span>
             </div>
          </div>
        </a>
      </div>
    </section>
  );
}
