import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ARTICLES = [
  {
    title: "Welke snit is het beste voor sigaren?",
    excerpt: "Het correct snijden van een sigaar speelt een grote rol in hoe de ervaring verloopt. Het is namelijk niet alleen een kwestie van techniek, maar ook van persoonlijke voorkeur.",
    image: "/images/featured_1.png",
    href: "/blog/sigaar-snijden",
  },
  {
    title: "Hoe vaak moet je een humidor bevochtigen?",
    excerpt: "Een humidor is een must-have voor elke sigarenliefhebber. Dit kastje of doosje zorgt ervoor dat je sigaren op de juiste vochtigheidsgraad blijven.",
    image: "/images/hero_zippo.png",
    href: "/blog/humidor-bevochtigen",
  },
];

export default function ArticleSection() {
  return (
    <section className="bg-white py-12 sm:py-16 border-t border-gray-100">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {ARTICLES.map((article) => (
             <Link key={article.title} href={article.href} className="flex gap-5 group">
                <div className="relative size-24 sm:size-36 md:size-44 flex-shrink-0 overflow-hidden rounded-full border-4 border-gray-100 bg-gray-50">
                   <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                   <h3 className="text-base font-semibold text-[#2b3e51] mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                   </h3>
                   <p className="text-[#2b3e51]/50 text-xs leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                   </p>
                   <span className="text-xs font-medium text-[#2b3e51] border-b border-[#2b3e51] w-max pb-0.5 group-hover:text-primary group-hover:border-primary transition-all">
                      Lees meer
                   </span>
                </div>
             </Link>
          ))}
        </div>
        <div className="flex justify-center">
           <Button className="bg-[#f39c12] hover:bg-[#6b8e6b] text-white rounded-none h-14 px-12 font-bold uppercase tracking-widest text-xs">
              Bekijk alles <ArrowRight className="ml-2 size-4" />
           </Button>
        </div>
      </div>
    </section>
  );
}
