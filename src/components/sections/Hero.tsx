import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[1300px] px-4">
        {/* New Premium Lifestyle Banner */}
        <div className="relative bg-[#111] overflow-hidden group min-h-[450px] md:min-h-[600px] border border-gray-100 shadow-xl">
          {/* Background Image - Cinematic Zippo Shot */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/images/tbk-hero-new.png"
                alt="TBK Lightshop Premium Lifestyle"
                fill
                className="object-cover object-center scale-100 transition-transform duration-1000 group-hover:scale-105"
                priority
             />
             {/* Subtle vignette for high-end boutique look and text contrast */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Corrected Live Text - No ghosting, perfectly visible */}
          <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-20 text-white max-w-2xl">
             <span className="text-primary font-bold text-[10px] uppercase tracking-[0.5em] mb-4">
                TBK LIGHTSHOP — NIJMEGEN
             </span>
             <h2 className="font-montserrat text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
                1400+ VERSCHILLENDE <br />
                ZIPPO AANSTEKERS
             </h2>
             <p className="text-white/80 text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-10 max-w-md italic">
                De grootste collectie verzamelobjecten van de regio, nu in Nijmegen.
             </p>
             <div className="flex">
                <Button className="bg-[#829e85] hover:bg-[#6b8e6b] text-white rounded-none h-14 px-12 font-bold uppercase tracking-widest text-[12px] shadow-lg transition-all hover:scale-105">
                   Bekijk aanbod
                </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
