import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, ChevronRight, SlidersHorizontal } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import PromoBar from "@/components/v2/PromoBar";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Aanstekers — OneConnect Lightshop",
  description:
    "Ontdek 330+ aanstekers van Zippo, Clipper, Ronson en meer bij OneConnect Lightshop Nijmegen. Gratis verzending vanaf €50.",
};

const PER_PAGE = 24;

// Only lighters — everything else gets its own page later
const ALL_LIGHTERS = PRODUCTS.filter((p) => p.category === "Aanstekers");

// Sidebar subcategories (xmlCategory within Aanstekers)
const SUBCATEGORIES: { label: string; xmlCat: string }[] = [
  { label: "Zippo aanstekers", xmlCat: "Zippo-aanstekers" },
  { label: "Alle aanstekers", xmlCat: "Aanstekers" },
  { label: "Zippo accessoires", xmlCat: "Zippo-accessoires" },
];

// Pre-computed counts (static, based on full lighter set)
const CAT_COUNTS = ALL_LIGHTERS.reduce<Record<string, number>>((acc, p) => {
  if (p.xmlCategory) acc[p.xmlCategory] = (acc[p.xmlCategory] ?? 0) + 1;
  return acc;
}, {});

const ALL_BRANDS = Object.entries(
  ALL_LIGHTERS.reduce<Record<string, number>>((acc, p) => {
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
  if (merged.page && merged.page !== "1") p.set("page", merged.page);
  const qs = p.toString();
  return `/aanstekers${qs ? `?${qs}` : ""}`;
}

export default async function AanstekersPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const activeCat = sp.cat ?? "";
  const activeBrand = sp.brand ?? "";
  const activeSort = sp.sort ?? "recommended";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10));

  // --- Filter within lighters only ---
  let filtered = ALL_LIGHTERS;
  if (activeCat) filtered = filtered.filter((p) => p.xmlCategory === activeCat);
  if (activeBrand) filtered = filtered.filter((p) => p.brand === activeBrand);

  // --- Sort ---
  if (activeSort === "price_asc")
    filtered = [...filtered].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  else if (activeSort === "price_desc")
    filtered = [...filtered].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  else if (activeSort === "rating")
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  // --- Paginate ---
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pageProducts = filtered.slice(start, start + PER_PAGE);

  // Brand counts scoped to current cat filter
  const brandBase = activeCat
    ? ALL_LIGHTERS.filter((p) => p.xmlCategory === activeCat)
    : ALL_LIGHTERS;
  const brandCounts = brandBase.reduce<Record<string, number>>((acc, p) => {
    acc[p.brand] = (acc[p.brand] ?? 0) + 1;
    return acc;
  }, {});
  const scopedBrands = ALL_BRANDS.map(([brand]) => ({
    brand,
    count: brandCounts[brand] ?? 0,
  })).filter((b) => b.count > 0);

  // Active filter display label
  const activeCatLabel =
    SUBCATEGORIES.find((s) => s.xmlCat === activeCat)?.label ?? activeCat;

  // Pagination numbers with ellipsis
  const pageNumbers: (number | "…")[] = [];
  for (let n = 1; n <= totalPages; n++) {
    if (n === 1 || n === totalPages || Math.abs(n - safePage) <= 2) {
      if (
        pageNumbers.length > 0 &&
        typeof pageNumbers[pageNumbers.length - 1] === "number"
      ) {
        const prev = pageNumbers[pageNumbers.length - 1] as number;
        if (n - prev > 1) pageNumbers.push("…");
      }
      pageNumbers.push(n);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PromoBar />
      <Header />

      <main className="flex-1 bg-[#f8f9fa]">

        {/* ── Page banner ── */}
        <div className="bg-[#111820] py-10">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-[11px] text-white/40 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-3" />
              <span className="text-white/70">Aanstekers</span>
              {activeCatLabel && activeCat && (
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
                  {activeCatLabel && activeCat
                    ? activeCatLabel
                    : activeBrand
                    ? `${activeBrand} aanstekers`
                    : "Aanstekers"}
                </h1>
                <p className="text-white/35 text-[11px] mt-1">{total} producten</p>
              </div>
              <p className="text-white/25 text-[11px] hidden md:block tracking-wide">
                330+ aanstekers · Nijmegen · Specialist since 1928
              </p>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8 items-start">

            {/* ── Sidebar ── */}
            <aside className="hidden lg:flex flex-col gap-7 w-52 flex-shrink-0 sticky top-6">

              {/* All lighters */}
              <div>
                <Link
                  href="/aanstekers"
                  className={`flex items-center justify-between text-[11px] font-black uppercase tracking-[0.15em] pb-2 border-b border-gray-200 transition-colors ${
                    !activeCat && !activeBrand
                      ? "text-[#f5a623]"
                      : "text-[#2b3e51] hover:text-[#f5a623]"
                  }`}
                >
                  Alle aanstekers
                  <span className="text-[11px] font-normal text-gray-400 tabular-nums">
                    {ALL_LIGHTERS.length}
                  </span>
                </Link>
              </div>

              {/* Subcategories */}
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Categorie
                </p>
                <ul className="space-y-0.5">
                  {SUBCATEGORIES.map(({ label, xmlCat }) => {
                    const count = CAT_COUNTS[xmlCat] ?? 0;
                    if (count === 0) return null;
                    const isActive = activeCat === xmlCat;
                    return (
                      <li key={xmlCat}>
                        <Link
                          href={buildUrl(sp, {
                            cat: isActive ? undefined : xmlCat,
                            page: "1",
                          })}
                          className={`flex items-center justify-between text-[12px] py-1.5 px-2 rounded transition-colors ${
                            isActive
                              ? "bg-[#f5a623]/10 text-[#f5a623] font-bold"
                              : "text-gray-500 hover:text-[#2b3e51] hover:bg-gray-100"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] flex-shrink-0" />
                            )}
                            {label}
                          </span>
                          <span className="text-[10px] text-gray-300 tabular-nums">{count}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Brands */}
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Merk
                </p>
                <ul className="space-y-0.5">
                  {scopedBrands.map(({ brand, count }) => {
                    const isActive = activeBrand === brand;
                    return (
                      <li key={brand}>
                        <Link
                          href={buildUrl(sp, {
                            brand: isActive ? undefined : brand,
                            page: "1",
                          })}
                          className={`flex items-center justify-between text-[12px] py-1.5 px-2 rounded transition-colors ${
                            isActive
                              ? "bg-[#f5a623]/10 text-[#f5a623] font-bold"
                              : "text-gray-500 hover:text-[#2b3e51] hover:bg-gray-100"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] flex-shrink-0" />
                            )}
                            {brand}
                          </span>
                          <span className="text-[10px] text-gray-300 tabular-nums">{count}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* ── Main content ── */}
            <div className="flex-1 min-w-0">

              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <button type="button" className="lg:hidden flex items-center gap-1.5 text-[11px] font-bold text-[#2b3e51] border border-gray-200 px-3 py-2 rounded">
                    <SlidersHorizontal className="size-3.5" />
                    Filters
                  </button>
                  <p className="text-[11px] text-gray-400">
                    <span className="font-bold text-[#2b3e51]">
                      {total > 0
                        ? `${start + 1}–${Math.min(start + PER_PAGE, total)}`
                        : "0"}
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
                          : "border-gray-200 text-gray-500 hover:border-[#2b3e51] hover:text-[#2b3e51]"
                      }`}
                    >
                      {opt.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Active filter chips */}
              {(activeCat || activeBrand) && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {activeCat && (
                    <Link
                      href={buildUrl(sp, { cat: undefined, page: "1" })}
                      className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-[#2b3e51] text-white rounded-full"
                    >
                      {activeCatLabel} ✕
                    </Link>
                  )}
                  {activeBrand && (
                    <Link
                      href={buildUrl(sp, { brand: undefined, page: "1" })}
                      className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-[#2b3e51] text-white rounded-full"
                    >
                      {activeBrand} ✕
                    </Link>
                  )}
                  <Link
                    href="/aanstekers"
                    className="text-[11px] px-3 py-1.5 border border-gray-200 text-gray-400 rounded-full hover:border-[#2b3e51] hover:text-[#2b3e51] transition-colors"
                  >
                    Wis alle filters
                  </Link>
                </div>
              )}

              {/* Product grid */}
              {pageProducts.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-gray-400 font-semibold">Geen producten gevonden</p>
                  <Link
                    href="/aanstekers"
                    className="text-[#f5a623] text-sm mt-2 inline-block underline"
                  >
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
                      {/* Image */}
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
                        <button type="button" aria-label="Voeg toe aan verlanglijst" className="absolute bottom-2 right-2 p-1.5 bg-white shadow-sm text-gray-300 hover:text-[#f5a623] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full">
                          <Heart className="size-3.5" />
                        </button>
                      </Link>

                      {/* Info */}
                      <div className="p-3 sm:p-4 flex flex-col flex-1">
                        <div className="flex items-center gap-0.5 mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`size-2.5 fill-current ${
                                i < Math.round(product.rating)
                                  ? "text-[#f5a623]"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                          <span className="text-[10px] text-gray-400 ml-1">
                            ({product.reviewCount})
                          </span>
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

                        {/* Price + CTA */}
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
                          <button type="button" aria-label="Voeg toe aan winkelwagen" className="size-8 bg-[#f5a623] hover:bg-[#2b3e51] rounded-sm flex items-center justify-center transition-colors">
                            <ShoppingBag className="size-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Pagination ── */}
              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-1 mt-12 flex-wrap">
                  {safePage > 1 && (
                    <Link
                      href={buildUrl(sp, { page: String(safePage - 1) })}
                      className="px-4 py-2 text-[11px] font-bold border border-gray-200 text-gray-500 hover:border-[#2b3e51] hover:text-[#2b3e51] rounded transition-all"
                    >
                      ← Vorige
                    </Link>
                  )}

                  {pageNumbers.map((item, i) =>
                    item === "…" ? (
                      <span
                        key={`dots-${i}`}
                        className="px-2 text-gray-400 text-[11px] select-none"
                      >
                        …
                      </span>
                    ) : (
                      <Link
                        key={item}
                        href={buildUrl(sp, { page: String(item) })}
                        className={`w-9 h-9 flex items-center justify-center text-[11px] font-bold border rounded transition-all ${
                          item === safePage
                            ? "bg-[#2b3e51] border-[#2b3e51] text-white"
                            : "border-gray-200 text-gray-500 hover:border-[#2b3e51] hover:text-[#2b3e51]"
                        }`}
                      >
                        {item}
                      </Link>
                    )
                  )}

                  {safePage < totalPages && (
                    <Link
                      href={buildUrl(sp, { page: String(safePage + 1) })}
                      className="px-4 py-2 text-[11px] font-bold border border-gray-200 text-gray-500 hover:border-[#2b3e51] hover:text-[#2b3e51] rounded transition-all"
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

      <Footer />
    </div>
  );
}
