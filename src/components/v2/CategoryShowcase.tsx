import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Aanstekers",
    sub: "336+ modellen",
    detail: "Zippo, Clipper & meer",
    href: "/aanstekers",
    image: "https://images.unsplash.com/photo-1565555384748-b7032af559fc?w=1200&q=85&fit=crop",
    accent: "#f5a623",
  },
  {
    name: "Rook-accessoires",
    sub: "Sigaren, pijpen & meer",
    detail: "Kokers, knippers & accessoires",
    href: "#",
    image: "https://images.unsplash.com/photo-1776983585314-8704eca507ac?w=1200&q=85&fit=crop",
    accent: "#c8922a",
  },
];

export default function CategoryShowcase() {
  const [aanstekers, rook] = CATEGORIES;

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1">
              Ons assortiment
            </p>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              Productcategorieën
            </h2>
          </div>
          <Link
            href="/aanstekers"
            className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/50 hover:text-[#f5a623] transition-colors"
          >
            Alles bekijken <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* ── Desktop: two equal columns ── */}
        <div className="hidden md:grid grid-cols-2 gap-3">

          {/* Aanstekers */}
          <Link
            href={aanstekers.href}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[3/2]"
          >
            <Image
              src={aanstekers.image}
              alt={aanstekers.name}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: aanstekers.accent }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] mb-1" style={{ color: aanstekers.accent }}>
                {aanstekers.sub}
              </p>
              <h3 className="font-montserrat text-3xl font-black text-white tracking-tighter leading-none mb-1">
                {aanstekers.name}
              </h3>
              <p className="text-[12px] text-white/50 mb-4">{aanstekers.detail}</p>
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white border border-white/25 px-4 py-2 rounded-full transition-all duration-300 group-hover:border-transparent group-hover:bg-[#f5a623]">
                Bekijk collectie <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* Rook-accessoires */}
          <Link
            href={rook.href}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[3/2]"
          >
            <Image
              src={rook.image}
              alt={rook.name}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: rook.accent }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] mb-1" style={{ color: rook.accent }}>
                {rook.sub}
              </p>
              <h3 className="font-montserrat text-3xl font-black text-white tracking-tighter leading-none mb-1">
                {rook.name}
              </h3>
              <p className="text-[12px] text-white/50 mb-4">{rook.detail}</p>
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white border border-white/25 px-4 py-2 rounded-full transition-all duration-300 group-hover:border-transparent group-hover:bg-[#c8922a]">
                Bekijk collectie <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </div>

        {/* ── Mobile: vertical stack ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-[16/7]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                unoptimized
                className="object-cover object-center opacity-75 group-hover:opacity-85 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-0.5" style={{ color: cat.accent }}>
                  {cat.sub}
                </p>
                <h3 className="font-montserrat text-xl font-black text-white tracking-tight">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
