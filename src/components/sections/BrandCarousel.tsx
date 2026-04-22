"use client";

import { motion } from "framer-motion";

const BRANDS = [
  { name: "Zippo",      img: "/brands/zippo.png" },
  { name: "BIC",        img: "/brands/bic.png" },
  { name: "Clipper",    img: "/brands/clipper.png" },
  { name: "Ronson",     img: "/brands/ronson.png" },
  { name: "Zorr",       img: "/brands/zorr.png" },
  { name: "Zengaz",     img: "/brands/zengaz.png" },
  { name: "Mascotte",   img: "/brands/mascotte.png" },
  { name: "SMOK",       img: "/brands/smok.png" },
  { name: "Vaporesso",  img: "/brands/vaporesso.png" },
  { name: "VOOPOO",     img: "/brands/voopoo.png" },
  { name: "Aspire",     img: "/brands/aspire.png" },
  { name: "Lost Vape",  img: "/brands/lostvape.png" },
  { name: "AromaKING",  img: "/brands/aromaking.png" },
];

// Duplicate twice for seamless infinite loop
const ALL_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS];


export default function BrandCarousel() {
  return (
    <section className="bg-white py-14 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-xl font-semibold text-[#2b3e51] mb-3">Onze merken</h2>
        <div className="h-1.5 w-24 bg-[#829e85]" />
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, -(BRANDS.length * 228)] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {ALL_BRANDS.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-[228px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.img}
                alt={brand.name}
                className="h-20 w-auto max-w-[180px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 [filter:drop-shadow(0_1px_4px_rgba(0,0,0,0.10))]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
