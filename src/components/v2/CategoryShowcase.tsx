import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Aanstekers",
    sub: "330+ modellen — Zippo, Clipper & meer",
    href: "/aanstekers",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60001317_22.jpg",
  },
  {
    name: "E-sigaretten",
    sub: "Startsets, pods & mods",
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/l/a/large-aspire_oby_stick-pod_4_17.jpg",
  },
  {
    name: "Accessoires",
    sub: "Asbakken, kokers & meer",
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/2/7/279803_1_33.jpg",
  },
  {
    name: "E-liquids",
    sub: "Smaken, aromas & capsules",
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/a/r/aroma-king-flavour-balls-watermelon-mint_40.jpg",
  },
];

export default function CategoryShowcase() {
  const [featured, ...rest] = CATEGORIES;

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#829e85] mb-1">
              Ons assortiment
            </p>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              Productcategorieën
            </h2>
          </div>
          <Link
            href="/aanstekers"
            className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/50 hover:text-[#829e85] transition-colors"
          >
            Alles bekijken <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/*
          Layout on desktop (md+):
          [  Aanstekers 2×2  ] [ E-sig    ] [ Acc     ]
          [  Aanstekers 2×2  ] [ E-liq, span 2        ]
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

          {/* Featured tile — 2 cols × 2 rows */}
          <Link
            href={featured.href}
            className="col-span-2 row-span-2 relative overflow-hidden group bg-gray-100 rounded-xl aspect-square md:aspect-auto"
          >
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#829e85] mb-1.5">
                {featured.sub}
              </p>
              <h3 className="font-montserrat text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3">
                {featured.name}
              </h3>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white bg-white/15 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full group-hover:bg-[#829e85] group-hover:border-[#829e85] transition-all duration-300">
                Bekijk collectie <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>

          {/* Small tiles: first 2 normal, last one spans 2 cols to fill the row */}
          {rest.map((cat, idx) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`relative overflow-hidden group bg-gray-100 rounded-xl aspect-[4/3]${idx === rest.length - 1 ? " col-span-2 md:col-span-2" : ""}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/60 mb-0.5">
                  {cat.sub}
                </p>
                <h3 className="font-montserrat text-sm sm:text-base font-black text-white leading-tight tracking-tight">
                  {cat.name}
                </h3>
              </div>
              <div className="absolute top-3 right-3 z-10 size-7 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 duration-300">
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
