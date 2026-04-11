"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BRANDS = [
  { name: "Caseti", image: "/images/brands/caseti.jpg" },
  { name: "Clipper", image: "/images/brands/clipper.jpg" },
  { name: "Colibri", image: "/images/brands/colibri.jpg" },
  { name: "Guy Janot", image: "/images/brands/guy-janot.jpg" },
  { name: "Hemparillo", image: "/images/brands/hemparillo.jpg" },
  { name: "Juicy Jay's", image: "/images/brands/juicy-jays.jpg" },
  { name: "S.T. Dupont", image: "/images/brands/st-dupont.jpg" },
  { name: "vom Hofe", image: "/images/brands/vom-hofe.jpg" },
  { name: "Xikar", image: "/images/brands/xikar.jpg" },
  { name: "Zippo", image: "/images/brands/zippo.jpg" },
];

// Double the brands array for a seamless loop
const ALL_BRANDS = [...BRANDS, ...BRANDS];

export default function BrandCarousel() {
  return (
    <section className="bg-white py-20 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto max-w-[1300px] px-4 mb-12">
        <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] uppercase tracking-tighter mb-4">
           Onze merken
        </h2>
        <div className="flex h-1.5 w-24 bg-[#829e85]" />
      </div>

      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex gap-12 md:gap-24 items-center"
          animate={{ x: [0, -1200] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {ALL_BRANDS.map((brand, i) => (
             <div key={`${brand.name}-${i}`} className="relative h-16 w-32 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                <Image 
                   src={brand.image}
                   alt={brand.name}
                   fill
                   className="object-contain"
                />
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
