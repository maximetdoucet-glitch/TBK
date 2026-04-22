"use client";

import { motion } from "framer-motion";

// Actual brands from the product XML (shown categories: Aanstekers, Accessoires, E-liquids)
const BRANDS = [
  "Zippo",
  "Clipper",
  "Zorr",
  "Champ",
  "Ronson",
  "Prof",
  "AromaKING",
  "Bookwill",
  "LUX",
  "Sansie",
  "Mascotte",
  "Zengaz",
  "Formula",
  "BIC",
];

const ALL_BRANDS = [...BRANDS, ...BRANDS];

export default function BrandCarousel() {
  return (
    <section className="bg-white py-14 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-xl font-semibold text-[#2b3e51] mb-3">Onze merken</h2>
        <div className="h-1.5 w-24 bg-[#829e85]" />
      </div>

      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex items-center gap-0"
          animate={{ x: [0, `-${BRANDS.length * 200}px`] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {ALL_BRANDS.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center gap-0 px-10"
            >
              <span className="font-montserrat font-black text-2xl tracking-tighter text-[#2b3e51]/20 hover:text-[#829e85] transition-colors duration-300 cursor-default select-none uppercase">
                {brand}
              </span>
              <span className="ml-10 text-[#2b3e51]/10 text-lg select-none">·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
