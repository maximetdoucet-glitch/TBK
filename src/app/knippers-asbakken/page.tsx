import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, ChevronRight, SlidersHorizontal } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import PromoBar from "@/components/v2/PromoBar";
import { PRODUCTS } from "@/lib/products";
import PriceRangeSlider, { PRICE_ABSOLUTE_MAX } from "@/components/v2/PriceRangeSlider";
import KnippersAsbakkenInfoSection from "@/components/v2/KnippersAsbakkenInfoSection";

export const metadata = {
  title: "Knippers & Asbakken — OneConnect Lightshop",
  description:
    "Precisieknippers, elegante asbakken en sigaren-etuis van topmerken zoals Bookwill en Faro. Bestel online bij OneConnect Lightshop Nijmegen.",
};

const PER_PAGE = 24;
const COLLECTION_NAME = "Knippers & Asbakken";
const COLLECTION_SLUG = "/knippers-asbakken";
const COLLECTION_TAGLINE = "28 producten · Grootste tabakspecialist van Nijmegen";

const ALL_PRODUCTS = PRODUCTS.filter((p) => p.category === COLLECTION_NAME);

const SUBCATEGORIES = [
  { label: "Sigaren-accessoires", xmlCat: "Sigaren-accessoires" },
];

const CAT_COUNTS = ALL_PRODUCTS.reduce<Record<string, number>>((acc, p) => {
  if (p.xmlCategory) acc[p.xmlCategory] = (acc[p.xmlCategory] ?? 0) + 1;
  return acc;
}, {});

const ALL_BRANDS = Object.entries(
  ALL_PRODUCTS.reduce<Record<string, number>>((acc, p) => {
    acc[p.brand] = (acc[p.brand] ?? 0) + 1;
    return acc;
  }, {})
).sort((a, b) => b[1] - a[1]);

const SORT_OPTIONS = [
  { label: "Aanbevolen", value: "recommended" },
  { label: "Prijs ↑", value: "price_asc" },
  { label: "Prijs ↓", value: "price_desc" },
  { label: "Beoordeling", value: "rating" },
];

type SP = Record<string, string | undefined>;

function buildUrl(base: SP, overrides: SP): string {
  const merged = { ...base, ...overrides };
  const p = new URLSearchParams();
  if (merged.cat) p.set("cat", merged.cat);
  if (merged.brand) p.set("brand", merged.brand);
  if (merged.sort && merged.sort !== "recommended") p.set("sort", merged.sort);
  if (merged.min_price && merged.min_price !== "0") p.set("min_price", merged.min_price);
  if (merged.max_price && merged.max_price !== String(PRICE_ABSOLUTE_MAX)) p.set("max_price", merged.max_price);
  if (merged.page && merged.page !== "1") p.set("page", merged.page);
  const qs = p.toString();
  return `${COLLECTION_SLUG}${qs ? `?${qs}` : ""}`;
}

export default async function KnippersAsbakkenPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const activeCat = sp.cat ?? "";
  const activeBrand = sp.brand ?? "";
  const activeSort = sp.sort ?? "recommended";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10));
  const minPrice = parseFloat(sp.min_price ?? "0");
  const maxPrice = parseFloat(sp.max_price ?? String(PRICE_ABSOLUTE_MAX));

  let filtered = ALL_PRODUCTS;
  if (activeCat) filtered = filtered.filter((p) => p.xmlCategory === activeCat);
  if (activeBrand) filtered = filtered.filter((p) => p.brand === activeBrand);
  if (sp.min_price) filtered = filtered.filter((p) => parseFloat(p.price) >= minPrice);
  if (sp.max_price) filtered = filtered.filter((p) => parseFloat(p.price) <= maxPrice);

  if (activeSort === "price_asc")
    filtered = [...filtered].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  else if (activeSort === "price_desc")
    filtered = [...filtered].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  else if (activeSort === "rating")
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pageProducts = filtered.slice(start, start + PER_PAGE);

  const brandBase = activeCat
    ? ALL_PRODUCTS.filter((p) => p.xmlCategory === activeCat)
    : ALL_PRODUCTS;
  const brandCounts = brandBase.reduce<Record<string, number>>((acc, p) => {
    acc[p.brand] = (acc[p.brand] ?? 0) + 1;
    return acc;
  }, {});
  const scopedBrands = ALL_BRANDS.map(([brand]) => ({
    brand,
    count: brandCounts[brand] ?? 0,
  })).filter((b) => b.count > 0);

  const activeCatLabel = SUBCATEGORIES.find((s) => s.xmlCat === activeCat)?.label ?? activeCat;
  const hasPriceFilter = sp.min_price !== undefined || sp.max_price !== undefined;
  const showSubcatBlock = SUBCATEGORIES.length > 1;

  const pageNumbers: (number | "…")[] = [];
  for (let n = 1; n <= totalPages; n++) {
    if (n === 1 || n === totalPages || Math.abs(n - safePage) <= 2) {
      if (pageNumbers.length > 0 && typeof pageNumbers[pageNumbers.length - 1] === "number") {
        if (n - (pageNumbers[pageNumbers.length - 1] as number) > 1) pageNumbers.push("…");
      }
      pageNumbers.push(n);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PromoBar />
      <Header />

      <main className="flex-1 bg-[#f8f9fa]">

        {/* ── Banner ── */}
        <div className="bg-[#111820] py-10">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-[11px] text-white/40 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-3" />
              <span className="text-white/70">{COLLECTION_NAME}</span>
              {activeCat && (
                <>
                  <ChevronRight className="size-3" />
                  <span className="text-white/70">{activeCatLabel}</span>
                </>
              )}
              {activeBrand && (
                <>
                  <ChevronRight className="size-3" />
                  <span className="text-white/70">{activeBrand}</span>
                </>
              )}
            </nav>
            <div className="flex items-end justify-between">
              <div>
                <h1 className="font-montserrat text-2xl font-black text-white tracking-tight">
                  {activeCat ? activeCatLabel : activeBrand ? `${activeBrand} ${COLLECTION_NAME.toLowerCase()}` : COLLECTION_NAME}
                </h1>
                <p className="text-white/35 text-[11px] mt-1">{total} producten</p>
              </div>
              <p className="text-white/25 text-[11px] hidden md:block tracking-wide">
                {COLLECTION_TAGLINE}
              </p>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8 items-start">

            {/* ═══════════════════════════════
                SIDEBAR
            ═══════════════════════════════ */}
            <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-6 space-y-0 bg-white border border-gray-100 rounded-sm overflow-hidden">

              {showSubcatBlock && (
                <div className="px-5 py-4 border-b border-gray-100">
                  <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-3">
                    Categorieën
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href={COLLECTION_SLUG}
                        className="flex items-center gap-2.5 py-1 group"
                      >
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${!activeCat ? "border-[#2b3e51] bg-[#2b3e51]" : "border-gray-300 group-hover:border-[#2b3e51]"}`}>
                          {!activeCat && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span className={`text-[12px] transition-colors ${!activeCat ? "text-[#2b3e51] font-bold" : "text-gray-500 group-hover:text-[#2b3e51]"}`}>
                          Alle {COLLECTION_NAME.toLowerCase()}
                        </span>
                        <span className="ml-auto text-[10px] text-gray-300 tabular-nums">{ALL_PRODUCTS.length}</span>
                      </Link>
                    </li>
                    {SUBCATEGORIES.map(({ label, xmlCat }) => {
                      const count = CAT_COUNTS[xmlCat] ?? 0;
                      if (count === 0) return null;
                      const isActive = activeCat === xmlCat;
                      return (
                        <li key={xmlCat}>
                          <Link
                            href={buildUrl(sp, { cat: isActive ? undefined : xmlCat, page: "1" })}
                            className="flex items-center gap-2.5 py-1 group"
                          >
                            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "border-[#2b3e51] bg-[#2b3e51]" : "border-gray-300 group-hover:border-[#2b3e51]"}`}>
                              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                            <span className={`text-[12px] transition-colors ${isActive ? "text-[#2b3e51] font-bold" : "text-gray-500 group-hover:text-[#2b3e51]"}`}>
                              {label}
                            </span>
                            <span className="ml-auto text-[10px] text-gray-300 tabular-nums">{count}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-3">
                  Merken
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href={buildUrl(sp, { brand: undefined, page: "1" })}
                      className="flex items-center gap-2.5 py-1 group"
                    >
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${!activeBrand ? "border-[#2b3e51] bg-[#2b3e51]" : "border-gray-300 group-hover:border-[#2b3e51]"}`}>
                        {!activeBrand && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <span className={`text-[12px] transition-colors ${!activeBrand ? "text-[#2b3e51] font-bold" : "text-gray-500 group-hover:text-[#2b3e51]"}`}>
                        Alle merken
                      </span>
                    </Link>
                  </li>
                  {scopedBrands.map(({ brand, count }) => {
                    const isActive = activeBrand === brand;
                    return (
                      <li key={brand}>
                        <Link
                          href={buildUrl(sp, { brand: isActive ? undefined : brand, page: "1" })}
                          className="flex items-center gap-2.5 py-1 group"
                        >
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "border-[#2b3e51] bg-[#2b3e51]" : "border-gray-300 group-hover:border-[#2b3e51]"}`}>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span className={`text-[12px] transition-colors ${isActive ? "text-[#2b3e51] font-bold" : "text-gray-500 group-hover:text-[#2b3e51]"}`}>
                            {brand}
                          </span>
                          <span className="ml-auto text-[10px] text-gray-300 tabular-nums">{count}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="px-5 py-4">
                <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-3">
                  Prijs
                </p>
                <PriceRangeSlider
                  initMin={minPrice}
                  initMax={maxPrice}
                  cat={activeCat || undefined}
                  brand={activeBrand || undefined}
                  sort={activeSort !== "recommended" ? activeSort : undefined}
                />
                {hasPriceFilter && (
                  <Link
                    href={buildUrl(sp, { min_price: undefined, max_price: undefined, page: "1" })}
                    className="block text-center text-[10px] text-[#2b3e51] hover:text-[#f5a623] mt-3 transition-colors"
                  >
                    Prijs filter wissen
                  </Link>
                )}
              </div>
            </aside>

            {/* ═══════════════════════════════
                MAIN CONTENT
            ═══════════════════════════════ */}
            <div className="flex-1 min-w-0">

              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="lg:hidden flex items-center gap-1.5 text-[11px] font-bold text-[#2b3e51] border border-gray-200 bg-white px-3 py-2 rounded"
                  >
                    <SlidersHorizontal className="size-3.5" />
                    Filters
                  </button>
                  <p className="text-[11px] text-gray-400">
                    <span className="font-bold text-[#2b3e51]">
                      {total > 0 ? `${start + 1}–${Math.min(start + PER_PAGE, total)}` : "0"}
                    </span>{" "}
                    van {total} producten
                  </p>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] text-gray-400 hidden sm:inline">Sorteren:</span>
                  {SORT_OPTIONS.map((opt) => (
                    <Link
                      key={opt.value}
                      href={buildUrl(sp, { sort: opt.value, page: "1" })}
                      className={`text-[11px] px-3 py-1.5 border rounded-full transition-all ${
                        activeSort === opt.value
                          ? "border-[#2b3e51] bg-[#2b3e51] text-white"
                          : "border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </Link>
                  ))}
                </div>
              </div>

              {(activeCat || activeBrand || hasPriceFilter) && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {activeCat && (
                    <Link
                      href={buildUrl(sp, { cat: undefined, page: "1" })}
                      className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-[#2b3e51] hover:bg-[#f5a623] text-white rounded-full transition-colors"
                    >
                      {activeCatLabel} ✕
                    </Link>
                  )}
                  {activeBrand && (
                    <Link
                      href={buildUrl(sp, { brand: undefined, page: "1" })}
                      className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-[#2b3e51] hover:bg-[#f5a623] text-white rounded-full transition-colors"
                    >
                      {activeBrand} ✕
                    </Link>
                  )}
                  {hasPriceFilter && (
                    <Link
                      href={buildUrl(sp, { min_price: undefined, max_price: undefined, page: "1" })}
                      className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-[#2b3e51] hover:bg-[#f5a623] text-white rounded-full transition-colors"
                    >
                      €{sp.min_price ?? "0"} – €{sp.max_price ?? PRICE_ABSOLUTE_MAX} ✕
                    </Link>
                  )}
                  <Link
                    href={COLLECTION_SLUG}
                    className="text-[11px] px-3 py-1.5 border border-[#2b3e51] bg-white text-[#2b3e51] rounded-full hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white transition-colors"
                  >
                    Wis alle filters
                  </Link>
                </div>
              )}

              {pageProducts.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-gray-400 font-semibold">Geen producten gevonden</p>
                  <Link href={COLLECTION_SLUG} className="text-[#f5a623] text-sm mt-2 inline-block underline">
                    Wis filters
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {pageProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white border border-gray-100 flex flex-col hover:shadow-md transition-all duration-300 rounded-sm"
                    >
                      <Link
                        href={`/product/${product.id}`}
                        className="relative block overflow-hidden bg-[#f8f8f8] aspect-square p-4 sm:p-6"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={280}
                          height={280}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          unoptimized
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
                        <div className="flex items-center gap-0.5 mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`size-2.5 fill-current ${
                                i < Math.round(product.rating) ? "text-[#f5a623]" : "text-gray-200"
                              }`}
                            />
                          ))}
                          <span className="text-[10px] text-gray-400 ml-1">({product.reviewCount})</span>
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

              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-1 mt-12 flex-wrap">
                  {safePage > 1 && (
                    <Link
                      href={buildUrl(sp, { page: String(safePage - 1) })}
                      className="px-4 py-2 text-[11px] font-bold border border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white rounded transition-all"
                    >
                      ← Vorige
                    </Link>
                  )}
                  {pageNumbers.map((item, i) =>
                    item === "…" ? (
                      <span key={`dots-${i}`} className="px-2 text-gray-400 text-[11px] select-none">…</span>
                    ) : (
                      <Link
                        key={item}
                        href={buildUrl(sp, { page: String(item) })}
                        className={`w-9 h-9 flex items-center justify-center text-[11px] font-bold border rounded transition-all ${
                          item === safePage
                            ? "bg-[#f5a623] border-[#f5a623] text-white"
                            : "border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white"
                        }`}
                      >
                        {item}
                      </Link>
                    )
                  )}
                  {safePage < totalPages && (
                    <Link
                      href={buildUrl(sp, { page: String(safePage + 1) })}
                      className="px-4 py-2 text-[11px] font-bold border border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white rounded transition-all"
                    >
                      Volgende →
                    </Link>
                  )}
                </nav>
              )}

              {totalPages > 1 && (
                <p className="text-center text-[11px] text-gray-400 mt-3">
                  Pagina {safePage} van {totalPages}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <KnippersAsbakkenInfoSection />
      <Footer />
    </div>
  );
}
