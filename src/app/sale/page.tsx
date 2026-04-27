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
  { sku: "170432",  name: "Porsche Design — P3643 MPL JetFlame aansteker", brand: "Porsche Design", image: "https://www.uegholland.com/media/catalog/product/1/7/170432_1_15.jpg", price: "230.00", category: "Aanstekers" },
  { sku: "60004897", name: "Zippo — Ouija Board", brand: "Zippo", image: "https://www.uegholland.com/media/catalog/product/6/0/60004897-6_16.jpg", price: "229.90", category: "Aanstekers" },
  { sku: "970178",  name: "Shark — Hulzenstopper Elektrisch PowerMatic 3", brand: "Shark", image: "https://www.uegholland.com/media/catalog/product/9/7/970178.jpg", price: "299.00", category: "Kokers & Etuis" },
  { sku: "419707",  name: "Zorr — Hulzenstopper Elektrisch Powermatic 4", brand: "Zorr", image: "https://www.uegholland.com/media/catalog/product/4/1/419707-5.jpg", price: "125.00", category: "Kokers & Etuis" },
  { sku: "915623",  name: "Cigsor — Hygrometer WiFi Luxury 18K", brand: "Cigsor", image: "https://www.uegholland.com/media/catalog/product/9/1/915623_1_15.jpg", price: "899.00", category: "Knippers & Asbakken" },
  { sku: "425583",  name: "Bookwill Humidor — Kabinet 4-lades, 80 sigaren", brand: "Bookwill", image: "https://www.uegholland.com/media/catalog/product/4/2/425583_7.jpg", price: "199.50", category: "Knippers & Asbakken" },
  { sku: "930030",  name: "Bookwill — Pijpboor (Pipe Reamer) Chrome", brand: "Bookwill", image: "https://www.uegholland.com/media/catalog/product/9/3/930030-1.jpg", price: "37.95",  category: "Rook-accessoires" },
  { sku: "422736",  name: "Hookah — Waterpijp set (2-slangen) Zwart in Alukoffer", brand: "Hookah", image: "https://www.uegholland.com/media/catalog/product/h/o/hookah_-_waterpijp_2-slangen_-_zwart_-_in_alukoffer_26.jpg", price: "34.95", category: "Rook-accessoires" },
];

// ─── Build interleaved render list — every 3rd slot is sold-out ──────────────
type SaleEntry =
  | { kind: "active"; product: Product; oldPrice: string; newPrice: string; pct: number }
  | { kind: "sold"; item: SoldOutItem };

function buildEntries(): SaleEntry[] {
  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
  const active: SaleEntry[] = [];
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
  const sold: SaleEntry[] = SOLD_OUT.map((item) => ({ kind: "sold", item }));

  // Interleave: 2 active, 1 sold, repeat.
  const out: SaleEntry[] = [];
  let ai = 0;
  let si = 0;
  while (ai < active.length || si < sold.length) {
    if (ai < active.length) out.push(active[ai++]);
    if (ai < active.length) out.push(active[ai++]);
    if (si < sold.length) out.push(sold[si++]);
  }
  return out;
}

export default function SalePage() {
  const entries = buildEntries();
  const totalActive = SALE_ITEMS.length;
  const totalSold = SOLD_OUT.length;

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
            </nav>
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-[#e53e3e] flex items-center justify-center flex-shrink-0">
                  <Tag className="size-5 text-white" />
                </div>
                <div>
                  <h1 className="font-montserrat text-2xl font-black text-white tracking-tight">
                    Sale · Tijdelijke aanbiedingen
                  </h1>
                  <p className="text-white/35 text-[11px] mt-1">
                    {totalActive} aanbiedingen actief · {totalSold} premium items niet leverbaar
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
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Intro line */}
          <div className="mb-8 max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e53e3e] mb-2">
              Geselecteerde kortingen
            </p>
            <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-[#2b3e51] tracking-tight leading-tight">
              Van betaalbare klassiekers tot premium stukken — 10 tot 20% korting.
            </h2>
            <p className="text-[12px] text-gray-500 mt-3 leading-relaxed">
              Een wisselende selectie uit alle vier de collecties. Items met de label{" "}
              <span className="font-bold text-gray-700">Uitverkocht</span> zijn premium-stukken die
              tijdelijk niet leverbaar zijn — laat ons weten via{" "}
              <span className="text-[#2b3e51] font-bold">service@tbk-lightshop.nl</span> als je er een wilt reserveren.
            </p>
          </div>

          {/* Product grid — single page, 4 columns on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {entries.map((entry, idx) =>
              entry.kind === "active" ? (
                <ActiveCard key={`a-${entry.product.id}`} entry={entry} />
              ) : (
                <SoldCard key={`s-${entry.item.sku}-${idx}`} item={entry.item} />
              )
            )}
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
