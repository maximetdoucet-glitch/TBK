import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[1300px] px-4">
        {/* Link wrapper to match Haddock's banner behavior */}
        <a href="/category/zippo" className="block relative bg-[#ebebeb] overflow-hidden group min-h-[400px] md:min-h-[550px] border border-gray-100 shadow-sm transition-all hover:shadow-md">
          {/* Background Image - Local Haddock Hero (contains baked-in text) */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/images/haddock-hero.png"
                alt="TBK Lightshop Hero"
                fill
                className="object-cover object-center scale-100 transition-transform duration-1000 group-hover:scale-[1.02]"
                priority
             />
          </div>

          {/* TBK Branding - Clean overlay in corner to identify store without ghosting */}
          <div className="absolute bottom-6 left-8 z-10">
             <div className="bg-white/90 backdrop-blur-sm px-4 py-2 border-l-4 border-primary shadow-sm flex items-center gap-3">
                <span className="font-montserrat text-[10px] font-black tracking-[0.2em] text-[#2b3e51]">
                   TBK LIGHTSHOP NIJMEGEN
                </span>
             </div>
          </div>
        </a>
      </div>
    </section>
  );
}
