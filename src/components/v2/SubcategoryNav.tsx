import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SUBCATEGORIES = [
  {
    label: "Zippo Aanstekers",
    count: 170,
    href: "/aanstekers?categorie=zippo-aanstekers",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60006392_8.jpg",
  },
  {
    label: "Clipper & Regulier",
    count: 149,
    href: "/aanstekers?categorie=aanstekers",
    image: "https://www.uegholland.com/media/catalog/product/4/1/418915330.jpg",
  },
  {
    label: "Jetflame Aanstekers",
    count: 36,
    href: "/aanstekers?categorie=aanstekers",
    image: "https://www.uegholland.com/media/catalog/product/1/8/184170_conf.jpg",
  },
  {
    label: "Zippo Accessoires",
    count: 12,
    href: "/aanstekers?categorie=zippo-accessoires",
    image: "https://www.uegholland.com/media/catalog/product/6/0/60001324-1.jpg",
  },
  {
    label: "Sigaretten-accessoires",
    count: 70,
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/9/7/970713_18.jpg",
  },
  {
    label: "Sigaren-accessoires",
    count: 28,
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/2/7/270078_1_22.jpg",
  },
  {
    label: "Cannabis-accessoires",
    count: 9,
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/4/2/426010-7.jpg",
  },
  {
    label: "Pijpen & accessoires",
    count: 6,
    href: "#",
    image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill_-_pijp-bestek_-_3-delig_-_basic.jpg",
  },
];

export default function SubcategoryNav() {
  return (
    <section className="bg-[#f8f9fb] py-10 sm:py-12 border-y border-gray-200/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1">
          Snel navigeren
        </p>
        <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tighter mb-6">
          Populaire categorieën
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SUBCATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-3 py-3 hover:border-[#f5a623] hover:shadow-md transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="size-12 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Label */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-[#2b3e51] group-hover:text-[#f5a623] transition-colors leading-tight truncate">
                  {cat.label}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">{cat.count} producten</p>
              </div>

              {/* Arrow */}
              <div className="size-7 rounded-full bg-[#2b3e51]/8 group-hover:bg-[#f5a623] flex items-center justify-center shrink-0 transition-all duration-200">
                <ArrowRight className="size-3.5 text-[#2b3e51]/50 group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
