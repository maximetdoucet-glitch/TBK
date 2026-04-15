import React from "react";
import Image from "next/image";
import Link from "next/link";

const HIGHLIGHTS = [
  {
    type: "custom",
    title_line1: "ZIPPO",
    title_line2: "AANSTEKERS",
    tagline: "Verzamel ze allemaal",
    image: "/images/tbk-highlight-zippos.png",
    href: "/aanstekers",
  },
  {
    type: "haddock",
    title_line1: "",
    title_line2: "",
    tagline: "",
    image: "/images/haddock-banner-vloei.png",
    href: "/aanstekers",
  },
  {
    type: "haddock",
    title_line1: "",
    title_line2: "",
    tagline: "",
    image: "/images/haddock-banner-cutters.png",
    href: "/aanstekers",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white pb-10 sm:pb-12">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, idx) => {
            if (item.type === "custom") {
              return (
                <Link 
                  key={idx} 
                  href={item.href}
                  className="bg-[#f2f2f2] border border-gray-100 flex items-center justify-between aspect-[820/450] group transition-all hover:shadow-lg overflow-hidden relative px-7 md:px-9"
                >
                   <div className="flex-1 pr-2 z-10">
                      {/* Title: Montserrat 900, #333333 matching Haddock's heading color */}
                      <div style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(26px, 2.8vw, 36px)",
                        lineHeight: 0.95,
                        letterSpacing: "-0.04em",
                        color: "#5669aa",
                        textTransform: "uppercase" as const,
                      }}>
                         {item.title_line1}<br />{item.title_line2}
                      </div>
                      {/* Subtitle: Nunito Sans 400 matching Haddock's body font */}
                      <p style={{
                        fontFamily: "'Nunito Sans', 'Helvetica', 'Arial', sans-serif",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "#5669aa",
                        marginTop: "8px",
                        marginBottom: "20px",
                      }}>
                         {item.tagline}
                      </p>
                      {/* Button: Haddock's exact #829d79 */}
                      <button style={{
                        backgroundColor: "#829d79",
                        color: "#ffffff",
                        fontFamily: "'Nunito Sans', 'Helvetica', 'Arial', sans-serif",
                        fontWeight: 700,
                        fontSize: "13px",
                        padding: "10px 22px",
                        border: "none",
                        cursor: "pointer",
                      }} className="hover:brightness-90 transition-all">
                         Bekijk aanbod
                      </button>
                   </div>

                   <div className="relative w-40 md:w-48 h-full flex-shrink-0 z-0 group-hover:scale-105 transition-transform duration-700">
                      <Image 
                         src={item.image}
                         alt="Zippo Aanstekers"
                         fill
                         className="object-contain object-right mix-blend-multiply"
                      />
                   </div>
                </Link>
              );
            }

            return (
              <Link 
                key={idx} 
                href={item.href}
                className="bg-[#f2f2f2] border border-gray-100 block transition-all hover:shadow-lg overflow-hidden relative aspect-[820/450] group"
              >
                 <div className="absolute inset-0 z-0">
                    <Image 
                       src={item.image}
                       alt={item.title_line1 || "Highlight"}
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
