import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/*
  Layout (desktop):
  ┌─────────────────────┬──────────┬──────────────┐
  │                     │ E-sig    │              │
  │  Aanstekers         ├──────────┤  E-liquids   │
  │  (col 1, 2 rows)    │ Access.  │  (col 3, 2r) │
  │                     │          │              │
  └─────────────────────┴──────────┴──────────────┘
  Grid: 2fr 1fr 1.2fr
  Aanstekers spans rows 1-2 (dominant, left hero)
  E-liquids spans rows 1-2 (accent, right portrait)
  E-sig and Accessoires split the middle column
*/

const CATEGORIES = [
  {
    name: "Aanstekers",
    sub: "330+ modellen",
    detail: "Zippo, Clipper & meer",
    href: "/aanstekers",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60001317_22.jpg",
    span: "row",   // spans both rows
    accent: "#f9c76b",
  },
  {
    name: "E-sigaretten",
    sub: "Startsets & pods",
    detail: "Aspire, Joyetech & meer",
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/4/2/422831_23.jpg",
    span: null,
    accent: "#4a7fa5",
  },
  {
    name: "Accessoires",
    sub: "Asbakken & kokers",
    detail: "Alles voor de roker",
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/3/1/310144_34.png",
    span: null,
    accent: "#b07d4a",
  },
  {
    name: "E-liquids",
    sub: "Smaken & aromas",
    detail: "Filter capsules & bases",
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/a/r/aroma-king-flavour-balls-watermelon-mint_40.jpg",
    span: "row",   // spans both rows
    accent: "#c0392b",
  },
];

export default function CategoryShowcase() {
  const [aanstekers, esig, acc, eliquids] = CATEGORIES;

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f9c76b] mb-1">
              Ons assortiment
            </p>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter">
              Productcategorieën
            </h2>
          </div>
          <Link
            href="/aanstekers"
            className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/50 hover:text-[#f9c76b] transition-colors"
          >
            Alles bekijken <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* ── Desktop grid ── */}
        <div
          className="hidden md:grid gap-3"
          style={{ gridTemplateColumns: "2fr 1fr 1.2fr", gridTemplateRows: "auto auto" }}
        >
          {/* Col 1 — Aanstekers, spans both rows */}
          <Link
            href={aanstekers.href}
            className="group relative overflow-hidden rounded-2xl bg-gray-900"
            style={{ gridRow: "1 / 3" }}
          >
            <Image
              src={aanstekers.image}
              alt={aanstekers.name}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-85"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: aanstekers.accent }}
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] mb-1" style={{ color: aanstekers.accent }}>
                {aanstekers.sub}
              </p>
              <h3 className="font-montserrat text-3xl font-black text-white tracking-tighter leading-none mb-1">
                {aanstekers.name}
              </h3>
              <p className="text-[12px] text-white/50 mb-4">{aanstekers.detail}</p>
              <span
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white border border-white/25 px-4 py-2 rounded-full transition-all duration-300 group-hover:border-transparent group-hover:text-white"
                style={{ "--hover-bg": aanstekers.accent } as React.CSSProperties}
              >
                Bekijk collectie <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* Col 2 Row 1 — E-sigaretten */}
          <Link
            href={esig.href}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3]"
          >
            <Image
              src={esig.image}
              alt={esig.name}
              fill
              unoptimized
              className="object-contain object-center p-8 transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: esig.accent }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-0.5" style={{ color: esig.accent }}>
                {esig.sub}
              </p>
              <h3 className="font-montserrat text-base font-black text-white tracking-tight leading-none mb-2">
                {esig.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                Bekijken <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Col 2 Row 2 — Accessoires */}
          <Link
            href={acc.href}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3]"
          >
            <Image
              src={acc.image}
              alt={acc.name}
              fill
              unoptimized
              className="object-contain object-center p-8 transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: acc.accent }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-0.5" style={{ color: acc.accent }}>
                {acc.sub}
              </p>
              <h3 className="font-montserrat text-base font-black text-white tracking-tight leading-none mb-2">
                {acc.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                Bekijken <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Col 3 — E-liquids, spans both rows */}
          <Link
            href={eliquids.href}
            className="group relative overflow-hidden rounded-2xl bg-gray-900"
            style={{ gridRow: "1 / 3" }}
          >
            <Image
              src={eliquids.image}
              alt={eliquids.name}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: eliquids.accent }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] mb-0.5" style={{ color: eliquids.accent }}>
                {eliquids.sub}
              </p>
              <h3 className="font-montserrat text-xl font-black text-white tracking-tighter leading-none mb-1">
                {eliquids.name}
              </h3>
              <p className="text-[11px] text-white/45 mb-4">{eliquids.detail}</p>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                Bekijken <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
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
