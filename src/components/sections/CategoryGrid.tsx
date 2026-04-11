import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  { name: "Zippo aanstekers", href: "/category/zippo", image: "/images/categories/zippo.jpg" },
  { name: "Clipper aanstekers", href: "/category/clipper", image: "/images/categories/clipper.jpg" },
  { name: "Jetflame aanstekers", href: "/category/jetflame", image: "/images/categories/jetflame.jpg" },
  { name: "Vloei", href: "/category/vloei", image: "/images/categories/vloei.jpg" },
  { name: "Hulzen", href: "/category/hulzen", image: "/images/categories/hulzen.jpg" },
  { name: "Sigarettenkokers", href: "/category/kokers", image: "/images/categories/kokers.jpg" },
  { name: "Sigarenknippers", href: "/category/knippers", image: "/images/categories/knippers.jpg" },
  { name: "Humidors", href: "/category/humidors", image: "/images/categories/humidors.jpg" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4">
                 <div className="size-16 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
                    <Image 
                       src={cat.image}
                       alt={cat.name}
                       width={64}
                       height={64}
                       className="object-cover transition-transform group-hover:scale-110"
                    />
                 </div>
                 <span className="font-sans text-sm font-bold text-[#2b3e51]">
                    {cat.name}
                 </span>
              </div>
              <div className="size-8 rounded-full bg-[#829e85]/10 flex items-center justify-center text-[#829e85] group-hover:bg-[#829e85] group-hover:text-white transition-all">
                 <ArrowRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
