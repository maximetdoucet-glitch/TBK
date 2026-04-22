import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Hero banner — tall on mobile, cinematic on desktop */}
        <div className="relative bg-[#111] overflow-hidden group aspect-[4/3] sm:aspect-[16/7] md:aspect-[2048/540] border border-gray-100 shadow-xl">
          <div className="absolute inset-0 z-0">
             <Image
                src="/images/tbk-hero-final.png"
                alt="TBK Lightshop Premium Hero"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 py-8 sm:px-12 md:px-20 text-white max-w-xl">
             <span className="text-primary font-semibold text-[10px] uppercase tracking-[0.4em] mb-3">
                TBK LIGHTSHOP — NIJMEGEN
             </span>
             <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] mb-4">
                1400+ VERSCHILLENDE <br />
                ZIPPO AANSTEKERS
             </h2>
             <p className="text-white/75 text-xs sm:text-sm font-medium italic mb-6 sm:mb-10 max-w-sm">
                De grootste collectie verzamelobjecten van de regio.
             </p>
             <div>
                <Button className="bg-[#f5a623] hover:bg-[#6b8e6b] text-white rounded-lg h-11 sm:h-14 px-8 sm:px-12 font-semibold text-xs sm:text-sm shadow-md transition-colors">
                   Bekijk aanbod
                </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
