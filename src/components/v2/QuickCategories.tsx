"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

const CATS = [
  { key: "zippo", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/6/0/60004741-5_18.jpg" },
  { key: "clipper", href: "/aanstekers", image: "https://www.uegholland.com/media/catalog/product/1/8/184170_conf.jpg" },
  { key: "cigaretteAcc", href: "/kokers-etuis", image: "https://www.uegholland.com/media/catalog/product/9/7/970713_18.jpg" },
  { key: "cigarAcc", href: "/knippers-asbakken", image: "https://www.uegholland.com/media/catalog/product/2/7/270078_1_22.jpg" },
  { key: "pipesAcc", href: "/rook-accessoires", image: "https://www.uegholland.com/media/catalog/product/b/o/bookwill_-_pijp-bestek_-_3-delig_-_basic.jpg" },
] as const;

export default function QuickCategories() {
  const { t } = useLocale();
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2b3e51] mb-5">
          {t("quickCategories.label")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {CATS.map((cat) => {
            const label = t(`quickCategories.items.${cat.key}`);
            return (
            <Link
              key={cat.key}
              href={cat.href}
              className="group flex items-center gap-3 bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 hover:border-[#f5a623]/50 hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-[#f4f5f6]">
                <Image
                  src={cat.image}
                  alt={label}
                  fill
                  className="object-contain p-1"
                  style={{ mixBlendMode: "multiply" }}
                  unoptimized
                />
              </div>

              {/* Label */}
              <span className="flex-1 font-montserrat text-[12px] font-black text-[#2b3e51] leading-tight group-hover:text-[#f5a623] transition-colors duration-200 min-w-0 truncate">
                {label}
              </span>

              {/* Arrow */}
              <div className="w-6 h-6 rounded-full bg-[#2b3e51] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f5a623] transition-colors duration-200">
                <ArrowRight className="size-3 text-white" />
              </div>
            </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
