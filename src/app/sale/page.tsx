import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Tag, ShoppingBag } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import PromoBar from "@/components/v2/PromoBar";
import { PRODUCTS, type Product } from "@/lib/products";

export const metadata = {
  title: "Sale — OneConnect Lightshop",
  description:
    "Tijdelijke aanbiedingen op aanstekers, kokers, knippers en pijp-accessoires bij OneConnect Lightshop Nijmegen. Op = op.",
};

// ─── Curated sale list — 18 active products with 10–20% discount ──────────────
const SALE_ITEMS: { id: number; discount: number }[] = [
  { id: 233, discount: 0.15 },
  { id: 236, discount: 0.20 },
  { id: 157, discount: 0.10 },
  { id: 151, discount: 0.15 },
  { id: 209, discount: 0.20 },
  { id: 433, discount: 0.12 },
  { id: 456, discount: 0.18 },
  { id: 410, discount: 0.10 },
  { id: 92,  discount: 0.15 },
  { id: 543, discount: 0.20 },
  { id: 296, discount: 0.10 },
  { id: 297, discount: 0.15 },
  { id: 229, discount: 0.18 },
  { id: 293, discount: 0.12 },
  { id: 286, discount: 0.20 },
  { id: 226, discount: 0.10 },
  { id: 191, discount: 0.15 },
  { id: 227, discount: 0.18 },
];

// ─── 8 sold-out items pulled from the XML feed (premium pieces, marked
//     "Niet leverbaar" by the supplier) — 2 from each on-site collection.
type SoldOutItem = {
  sku: string;
  name: string;
  brand: string;
  image: string;
  price: string;
  category: string;
};

const SOLD_OUT: SoldOutItem[] = [
  // Aanstekers — 1 premium showcase + 1 upper-mid + 2 cheap entry points
  { sku: "60004897", name: "Zippo — Ouija Board",                                 brand: "Zippo",    image: "https://www.uegholland.com/media/catalog/product/6/0/60004897-6_16.jpg", price: "229.90", category: "Aanstekers" },
  { sku: "2007831",  name: "Zippo — Werewolf",                                    brand: "Zippo",    image: "https://www.uegholland.com/media/catalog/product/2/0/2007831_19.jpg",     price: "89.90",  category: "Aanstekers" },
  { sku: "419112",   name: "Clipper Metal aansteker — Zwart Gradient (Giftbox)",  brand: "Clipper",  image: "https://www.uegholland.com/media/catalog/product/4/1/419112-1_9.jpg",     price: "13.20",  category: "Aanstekers" },
  { sku: "424813",   name: "Zorr — Turbo aansteker Crown — Display (6-stuks)",    brand: "Zorr",     image: "https://www.uegholland.com/media/catalog/product/z/o/zorr_-_turbo_aansteker_-_crown_-_display_6-stuks__4.jpg", price: "11.50", category: "Aanstekers" },
  // Kokers & Etuis — 2 upper-mid leather cases
  { sku: "310411",   name: "Bookwill — Sigarettenkoker Leer Suede Zwart",         brand: "Bookwill", image: "https://www.uegholland.com/media/catalog/product/3/1/310411_1_22.jpg",    price: "43.00",  category: "Kokers & Etuis" },
  { sku: "310415",   name: "Bookwill — Sigarettenkoker Leer Black Carbon",        brand: "Bookwill", image: "https://www.uegholland.com/media/catalog/product/3/1/310415_1_21.jpg",    price: "37.00",  category: "Kokers & Etuis" },
  // Knippers & Asbakken — 1 premium humidor + 1 upper-mid cigar cutter
  { sku: "425583",   name: "Bookwill Humidor — Kabinet 4-lades, 80 sigaren",      brand: "Bookwill", image: "https://www.uegholland.com/media/catalog/product/4/2/425583_7.jpg",       price: "199.50", category: "Knippers & Asbakken" },
  { sku: "422394",   name: "FOX — Otello Sigarenknipper Chrome",                  brand: "Fox",      image: "https://www.uegholland.com/media/catalog/product/4/2/422394-1.jpg",       price: "89.95",  category: "Knippers & Asbakken" },
  // Rook-accessoires — Hookah + premium pipe filters
  { sku: "422736",   name: "Hookah — Waterpijp set (2-slangen) Zwart, Alukoffer", brand: "Hookah",   image: "https://www.uegholland.com/media/catalog/product/h/o/hookah_-_waterpijp_2-slangen_-_zwart_-_in_alukoffer_26.jpg", price: "34.95", category: "Rook-accessoires" },
  { sku: "420748",   name: "Big Ben — Premium 9mm Pijpfilters (200 stuks)",       brand: "Big Ben",  image: "https://www.uegholland.com/media/catalog/product/4/2/420748_3.jpg",       price: "33.25",  category: "Rook-accessoires" },
];

// ─── Build interleaved render list — every 3rd slot is sold-out ──────────────
type SaleEntry =
  | { kind: "active"; product: Product; oldPrice: string; newPrice: string; pct: number }
  | { kind: "sold"; item: SoldOutItem };

const COLLECTIONS = [
  "Aanstekers",
  "Kokers & Etuis",
  "Knippers & Asbakken",
  "Rook-accessoires",
] as const;

function buildLists() {
  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
  const active: Extract<SaleEntry, { kind: "active" }>[] = [];
  for (const { id, discount } of SALE_ITEMS) {
    const p = byId.get(id);
    if (!p) continue;
    const old = parseFloat(p.price);
    const next = old * (1 - discount);
    active.push({
      kind: "active",
      product: p,
      oldPrice: old.toFixed(2),
      newPrice: next.toFixed(2),
      pct: Math.round(discount * 100),
    });
  }
  const sold: Extract<SaleEntry, { kind: "sold" }>[] = SOLD_OUT.map((item) => ({ kind: "sold", item }));
  return { active, sold };
}

function entryCategory(e: SaleEntry): string {
  return e.kind === "active" ? e.product.category : e.item.category;
}

export default async function SalePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const activeCat = sp.cat ?? "";
  const requestedPage = Math.max(1, parseInt(sp.page ?? "1", 10));

  const { active, sold } = buildLists();

  // Apply category filter to both lists
  const activeFiltered = activeCat ? active.filter((e) => entryCategory(e) === activeCat) : active;
  const soldFiltered = activeCat ? sold.filter((e) => entryCategory(e) === activeCat) : sold;

  // Two pages: page 1 = active items still on sale, page 2 = sold-out picks
  const hasSoldPage = soldFiltered.length > 0;
  const totalPages = hasSoldPage ? 2 : 1;
  const page = Math.min(requestedPage, totalPages);
  const entries: SaleEntry[] = page === 1 ? activeFiltered : soldFiltered;

  // Counts for sidebar (combined active + sold per category)
  const counts = COLLECTIONS.reduce<Record<string, number>>((acc, c) => {
    acc[c] = active.filter((e) => entryCategory(e) === c).length
           + sold.filter((e) => entryCategory(e) === c).length;
    return acc;
  }, {});
  const allCount = active.length + sold.length;
  const totalActiveFiltered = activeFiltered.length;
  const totalSoldFiltered = soldFiltered.length;

  function buildUrl(overrides: Partial<{ cat: string | undefined; page: string | undefined }>): string {
    const merged = { cat: activeCat, page: page > 1 ? String(page) : undefined, ...overrides };
    const p = new URLSearchParams();
    if (merged.cat) p.set("cat", merged.cat);
    if (merged.page && merged.page !== "1") p.set("page", merged.page);
    const qs = p.toString();
    return `/sale${qs ? `?${qs}` : ""}`;
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
              <span className="text-white/70">Sale</span>
              {activeCat && (
                <>
                  <ChevronRight className="size-3" />
                  <span className="text-white/70">{activeCat}</span>
                </>
              )}
            </nav>
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-[#e53e3e] flex items-center justify-center flex-shrink-0">
                  <Tag className="size-5 text-white" />
                </div>
                <div>
                  <h1 className="font-montserrat text-2xl font-black text-white tracking-tight">
                    {activeCat ? `Sale · ${activeCat}` : "Sale · Tijdelijke aanbiedingen"}
                  </h1>
                  <p className="text-white/35 text-[11px] mt-1">
                    Nog {totalActiveFiltered} stuks op voorraad uit onze premium sale-collectie · {totalSoldFiltered} uitverkocht
                  </p>
                </div>
              </div>
              <p className="text-white/25 text-[11px] hidden md:block tracking-wide">
                Op = op · Tabaksspeciaalzaak Nijmegen
              </p>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8 items-start">

            {/* ═══════════════════════════════
                SIDEBAR — mirrors the other collection pages
            ═══════════════════════════════ */}
            <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-6 space-y-0 bg-white border border-gray-100 rounded-sm overflow-hidden">

              {/* Categorieën */}
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-3">
                  Categorieën
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href={buildUrl({ cat: undefined })}
                      className="flex items-center gap-2.5 py-1 group"
                    >
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${!activeCat ? "border-[#2b3e51] bg-[#2b3e51]" : "border-gray-300 group-hover:border-[#2b3e51]"}`}>
                        {!activeCat && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <span className={`text-[12px] transition-colors ${!activeCat ? "text-[#2b3e51] font-bold" : "text-gray-500 group-hover:text-[#2b3e51]"}`}>
                        Alle categorieën
                      </span>
                      <span className="ml-auto text-[10px] text-gray-300 tabular-nums">{allCount}</span>
                    </Link>
                  </li>
                  {COLLECTIONS.map((c) => {
                    const count = counts[c] ?? 0;
                    if (count === 0) return null;
                    const isActive = activeCat === c;
                    return (
                      <li key={c}>
                        <Link
                          href={buildUrl({ cat: isActive ? undefined : c })}
                          className="flex items-center gap-2.5 py-1 group"
                        >
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "border-[#2b3e51] bg-[#2b3e51]" : "border-gray-300 group-hover:border-[#2b3e51]"}`}>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span className={`text-[12px] transition-colors ${isActive ? "text-[#2b3e51] font-bold" : "text-gray-500 group-hover:text-[#2b3e51]"}`}>
                            {c}
                          </span>
                          <span className="ml-auto text-[10px] text-gray-300 tabular-nums">{count}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </aside>

            {/* ═══════════════════════════════
                MAIN
            ═══════════════════════════════ */}
            <div className="flex-1 min-w-0">

              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <p className="text-[11px] text-gray-400">
                  <span className="font-bold text-[#e53e3e]">{totalActiveFiltered} over</span>
                  {" "}· <span className="font-bold text-gray-500">{totalSoldFiltered} uitverkocht</span>
                  {totalPages > 1 && (
                    <>
                      {" "}·{" "}
                      <span className="text-gray-400">
                        Pagina {page} van {totalPages}
                      </span>
                    </>
                  )}
                </p>
                {activeCat && (
                  <Link
                    href="/sale"
                    className="text-[11px] px-3 py-1.5 border border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white rounded-full transition-all"
                  >
                    Wis filters
                  </Link>
                )}
              </div>

              {/* Active filter chip */}
              {activeCat && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <Link
                    href={buildUrl({ cat: undefined })}
                    className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-[#2b3e51] hover:bg-[#f5a623] text-white rounded-full transition-colors"
                  >
                    {activeCat} ✕
                  </Link>
                </div>
              )}

              {/* Product grid */}
              {entries.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-gray-400 font-semibold">Geen producten gevonden</p>
                  <Link href="/sale" className="text-[#f5a623] text-sm mt-2 inline-block underline">
                    Wis filters
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {entries.map((entry, idx) =>
                    entry.kind === "active" ? (
                      <ActiveCard key={`a-${entry.product.id}`} entry={entry} />
                    ) : (
                      <SoldCard key={`s-${entry.item.sku}-${idx}`} item={entry.item} />
                    )
                  )}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-1 mt-12 flex-wrap">
                  {page > 1 && (
                    <Link
                      href={buildUrl({ page: String(page - 1) })}
                      className="px-4 py-2 text-[11px] font-bold border border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white rounded transition-all"
                    >
                      ← Op voorraad
                    </Link>
                  )}
                  {[1, 2].slice(0, totalPages).map((n) => (
                    <Link
                      key={n}
                      href={buildUrl({ page: String(n) })}
                      className={`w-9 h-9 flex items-center justify-center text-[11px] font-bold border rounded transition-all ${
                        n === page
                          ? "bg-[#f5a623] border-[#f5a623] text-white"
                          : "border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white"
                      }`}
                    >
                      {n}
                    </Link>
                  ))}
                  {page < totalPages && (
                    <Link
                      href={buildUrl({ page: String(page + 1) })}
                      className="px-4 py-2 text-[11px] font-bold border border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white rounded transition-all"
                    >
                      Uitverkocht →
                    </Link>
                  )}
                </nav>
              )}

              {/* Footer note */}
              <div className="mt-12 pt-6 border-t border-gray-100 text-center">
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Aanbiedingen geldig zolang de voorraad strekt · Prijzen incl. BTW · Vragen? Bezoek ons in de{" "}
                  <span className="text-[#2b3e51] font-bold">Molenstraat 120 in Nijmegen</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ─── Card variants ───────────────────────────────────────────────────────────

function ActiveCard({
  entry,
}: {
  entry: Extract<SaleEntry, { kind: "active" }>;
}) {
  const { product, oldPrice, newPrice, pct } = entry;
  return (
    <div className="group bg-white border border-gray-100 flex flex-col hover:shadow-md transition-all duration-300 rounded-sm">
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
        {/* SALE percentage badge */}
        <span className="absolute top-2 left-2 bg-[#e53e3e] text-white text-[9px] font-black px-2 py-0.5 rounded-sm tracking-wide">
          −{pct}%
        </span>
      </Link>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <p className="text-[10px] text-[#f5a623] font-black mb-1 tracking-wide">{product.brand}</p>

        <Link
          href={`/product/${product.id}`}
          className="text-[12px] font-semibold text-[#2b3e51] leading-snug mb-auto hover:text-[#f5a623] transition-colors line-clamp-2"
        >
          {product.name}
        </Link>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 line-through leading-none mb-0.5">€ {oldPrice}</span>
            <span className="text-[13px] font-black text-[#e53e3e]">€ {newPrice}</span>
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
  );
}

function SoldCard({ item }: { item: SoldOutItem }) {
  return (
    <div className="group bg-white border border-gray-100 flex flex-col rounded-sm relative overflow-hidden">
      {/* Image with grayscale + overlay */}
      <div className="relative block overflow-hidden bg-[#f8f8f8] aspect-square p-4 sm:p-6">
        <Image
          src={item.image}
          alt={item.name}
          width={280}
          height={280}
          className="w-full h-full object-contain grayscale opacity-60"
          unoptimized
        />
        <span className="absolute top-2 left-2 bg-[#2b3e51] text-white text-[9px] font-black px-2 py-0.5 rounded-sm tracking-wide">
          UITVERKOCHT
        </span>
        {/* Sold-out diagonal stamp */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-montserrat text-[14px] font-black uppercase tracking-[0.25em] text-[#2b3e51]/50 border-2 border-[#2b3e51]/40 px-4 py-1.5 -rotate-12 backdrop-blur-[1px] bg-white/30">
            Niet leverbaar
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <p className="text-[10px] text-gray-400 font-black mb-1 tracking-wide">{item.brand}</p>
        <p className="text-[12px] font-semibold text-gray-500 leading-snug mb-auto line-clamp-2">{item.name}</p>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-300 leading-none mb-0.5">Adviesprijs</span>
            <span className="text-[13px] font-black text-gray-400 line-through">€ {item.price}</span>
          </div>
          <button
            type="button"
            disabled
            aria-label="Niet leverbaar"
            className="size-8 bg-gray-200 rounded-sm flex items-center justify-center cursor-not-allowed"
          >
            <ShoppingBag className="size-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
