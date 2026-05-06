import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, ChevronRight, SearchX } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import PromoBar from "@/components/v2/PromoBar";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Zoekresultaten — OneConnect Lightshop",
  description: "Zoek door alle 449 producten van OneConnect Lightshop Nijmegen.",
};

type SP = { q?: string };

function tokenize(q: string): string[] {
  return q.toLowerCase().split(/\s+/).filter(Boolean);
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;
  const query = (sp.q ?? "").trim();
  const tokens = tokenize(query);

  const results = tokens.length === 0
    ? []
    : PRODUCTS.filter((p) => {
        const hay = `${p.name} ${p.brand} ${p.category} ${p.xmlCategory ?? ""} ${p.artikelcode ?? ""}`.toLowerCase();
        return tokens.every((t) => hay.includes(t));
      });

  return (
    <div className="flex flex-col min-h-screen">
      <PromoBar />
      <Header />

      <main className="flex-1 bg-[#f8f9fa]">
        {/* Banner */}
        <div className="bg-[#111820] py-10">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-[11px] text-white/40 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-3" />
              <span className="text-white/70">Zoekresultaten</span>
            </nav>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1 className="font-montserrat text-2xl font-black text-white tracking-tight">
                  {query ? <>Resultaten voor &ldquo;{query}&rdquo;</> : "Zoeken"}
                </h1>
                <p className="text-white/35 text-[11px] mt-1">
                  {query ? `${results.length} ${results.length === 1 ? "product" : "producten"} gevonden` : "Type een zoekterm om te beginnen"}
                </p>
              </div>
              <p className="text-white/25 text-[11px] hidden md:block tracking-wide">
                449 producten · Grootste tabakspecialist van Nijmegen
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {!query ? (
            <div className="text-center py-20 border border-dashed border-gray-200 rounded bg-white">
              <p className="text-gray-500 text-sm">Gebruik de zoekbalk hierboven om producten te vinden.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-gray-200 rounded bg-white">
              <SearchX className="size-10 text-gray-300 mx-auto mb-3" />
              <p className="text-[#2b3e51] font-bold text-base mb-1">Geen producten gevonden</p>
              <p className="text-gray-500 text-sm mb-6">
                We konden niets vinden voor &ldquo;{query}&rdquo;. Probeer een ander woord, merk of categorie.
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {["Zippo", "Clipper", "aansteker", "asbak", "etui"].map((s) => (
                  <Link
                    key={s}
                    href={`/search?q=${encodeURIComponent(s)}`}
                    className="px-3 py-1.5 text-[11px] font-bold border border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white rounded transition-all"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-100 hover:shadow-md transition-all duration-200 rounded-sm overflow-hidden flex flex-col group"
                >
                  <Link href={`/product/${product.id}`} className="relative block aspect-square bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {product.badge && (
                      <span className="absolute top-2 left-2 bg-[#f5a623] text-white text-[9px] font-black px-2 py-0.5 rounded-sm tracking-wide">
                        {product.badge}
                      </span>
                    )}
                    {product.oldPrice && !product.badge && (
                      <span className="absolute top-2 left-2 bg-[#2b3e51] text-white text-[9px] font-black px-2 py-0.5 rounded-sm tracking-wide">
                        SALE
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label="Voeg toe aan verlanglijst"
                      className="absolute bottom-2 right-2 p-1.5 bg-white shadow-sm text-[#2b3e51] hover:text-[#f5a623] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                    >
                      <Heart className="size-3.5" />
                    </button>
                  </Link>

                  <div className="p-3 sm:p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <StarRating rating={product.rating} size={10} />
                      <span className="text-[10px] text-gray-400">({product.reviewCount})</span>
                    </div>

                    <p className="text-[10px] text-[#f5a623] font-black mb-1 tracking-wide">
                      {product.brand}
                    </p>

                    <Link
                      href={`/product/${product.id}`}
                      className="text-[12px] font-semibold text-[#2b3e51] leading-snug mb-auto hover:text-[#f5a623] transition-colors line-clamp-2"
                    >
                      {product.name}
                    </Link>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                      <div className="flex flex-col">
                        {product.oldPrice && (
                          <span className="text-[10px] text-gray-400 line-through leading-none mb-0.5">
                            € {product.oldPrice}
                          </span>
                        )}
                        <span className="text-[13px] font-black text-[#2b3e51]">
                          € {product.price}
                        </span>
                      </div>
                      <button
                        type="button"
                        aria-label="Voeg toe aan winkelwagen"
                        className="size-8 bg-[#2b3e51] hover:bg-[#f5a623] rounded-sm flex items-center justify-center transition-colors"
                      >
                        <ShoppingBag className="size-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
