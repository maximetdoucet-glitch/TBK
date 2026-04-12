import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              // Zippo box: exact Haddock's styling
              return (
                <Link 
                  key={item.title} 
                  href={item.href}
                  className="bg-[#f2f2f2] border border-gray-100 flex items-center justify-between aspect-[820/450] group transition-all hover:shadow-lg overflow-hidden relative px-8 md:px-10"
                >
                   {/* Text - Exact Haddock's: Montserrat Black, uppercase, #2b3e51, tight tracking */}
                   <div className="flex-1 pr-4 z-10">
                      <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1.05, color: "#2b3e51", textTransform: "uppercase" as const, fontSize: "clamp(24px, 2.5vw, 34px)" }}>
                         ZIPPO<br />AANSTEKERS
                      </h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#2b3e51", fontSize: "13px", marginTop: "6px", marginBottom: "18px" }}>
                         Verzamel ze allemaal
                      </p>
                      <button style={{ backgroundColor: "#7b927a", color: "#ffffff", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "12px", padding: "10px 20px", border: "none", cursor: "pointer", textTransform: "uppercase" as const, letterSpacing: "0.02em" }} className="hover:brightness-90 transition-all">
                         Bekijk aanbod
                      </button>
                   </div>

                   {/* Image - Clean white background Zippos, blended into #f2f2f2 box */}
                   <div className="relative w-40 md:w-48 h-full flex-shrink-0 z-0 group-hover:scale-105 transition-transform duration-700">
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
