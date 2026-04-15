export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  longDescription: string;
  price: string;
  oldPrice?: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  category: string;
  badge?: string;
  variants: { label: string; values: string[] };
  specs: { label: string; value: string }[];
  inStock: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Clipper Vuursteen Systeem",
    brand: "Clipper",
    description: "Navulbaar aanstekersysteem met vervangbaar vuursteen.",
    longDescription:
      "Het Clipper Vuursteen Systeem is een herlaadbaar aanstekersysteem dat al decennialang bekend staat om zijn kwaliteit. Het vuursteen is eenvoudig te vervangen en het brandstofniveau is zichtbaar dankzij het transparante reservoir. Geschikt voor dagelijks gebruik en inclusief garantie.",
    price: "12.50",
    oldPrice: "14.95",
    image: "/images/clipper.png",
    images: ["/images/clipper.png", "/images/featured_1.png", "/images/hero_zippo.png"],
    rating: 5,
    reviewCount: 124,
    category: "Aanstekers",
    badge: "Bestseller",
    variants: { label: "Kleur", values: ["Classic Rood", "Zwart", "Blauw", "Transparant"] },
    specs: [
      { label: "Merk", value: "Clipper" },
      { label: "Type", value: "Navulbaar" },
      { label: "Brandstof", value: "Butaan" },
      { label: "Afmetingen", value: "6,8 × 2,1 cm" },
      { label: "Gewicht", value: "19g" },
      { label: "Herkomst", value: "Spanje" },
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Clipper Metal Edition",
    brand: "Clipper",
    description: "Premium metalen behuizing, navulbaar en stijlvol.",
    longDescription:
      "De Clipper Metal Edition combineert het betrouwbare Clipper vuursteen-mechanisme met een duurzame metalen behuizing. Ideaal als cadeau of voor dagelijks gebruik met een premium uitstraling.",
    price: "18.95",
    image: "/images/featured_1.png",
    images: ["/images/featured_1.png", "/images/clipper.png"],
    rating: 4,
    reviewCount: 58,
    category: "Aanstekers",
    variants: { label: "Kleur", values: ["Zilver", "Goud", "Zwart Mat"] },
    specs: [
      { label: "Merk", value: "Clipper" },
      { label: "Type", value: "Navulbaar" },
      { label: "Materiaal", value: "Metaal" },
      { label: "Brandstof", value: "Butaan" },
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Clipper Aansteker 3-pack",
    brand: "Clipper",
    description: "Voordelige set van 3 klassieke Clipper aanstekers.",
    longDescription:
      "Altijd een aansteker bij de hand met deze voordelige 3-pack. Elk aansteker is navulbaar en heeft het bekende Clipper vuursteen-systeem. Leverbaar in willekeurige kleuren.",
    price: "9.95",
    image: "/images/vloei.png",
    images: ["/images/vloei.png", "/images/clipper.png"],
    rating: 5,
    reviewCount: 212,
    category: "Aanstekers",
    badge: "Nieuw",
    variants: { label: "Pakket", values: ["Willekeurige kleuren", "Alleen zwart"] },
    specs: [
      { label: "Merk", value: "Clipper" },
      { label: "Inhoud", value: "3 stuks" },
      { label: "Type", value: "Navulbaar" },
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Clipper Limited Edition Print",
    brand: "Clipper",
    description: "Collector's editie met exclusief grafisch ontwerp.",
    longDescription:
      "De Clipper Limited Edition Print is een must-have voor de verzamelaar. Met een uniek gedrukt design is elke aansteker een kunstwerkje. Navulbaar en volledig functioneel als dagelijkse aansteker.",
    price: "13.95",
    oldPrice: "16.50",
    image: "/images/rizla.png",
    images: ["/images/rizla.png", "/images/clipper.png"],
    rating: 5,
    reviewCount: 77,
    category: "Aanstekers",
    variants: { label: "Design", values: ["Floral", "Abstract", "Geometric"] },
    specs: [
      { label: "Merk", value: "Clipper" },
      { label: "Type", value: "Navulbaar" },
      { label: "Editie", value: "Gelimiteerd" },
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Clipper Navulgas 300ml",
    brand: "Clipper",
    description: "Hoogwaardige butaangas voor alle navulbare aanstekers.",
    longDescription:
      "Houd je Clipper altijd gevuld met de originele Clipper navulgas. De 300ml bus is voldoende voor tientallen vulbeurten en garandeert een constante vlam.",
    price: "7.50",
    image: "/images/cutters.png",
    images: ["/images/cutters.png"],
    rating: 4,
    reviewCount: 43,
    category: "Accessoires",
    variants: { label: "Inhoud", values: ["300ml", "500ml"] },
    specs: [
      { label: "Merk", value: "Clipper" },
      { label: "Inhoud", value: "300ml" },
      { label: "Type", value: "Butaangas" },
    ],
    inStock: true,
  },
  {
    id: 6,
    name: "Clipper Eco Bio Aansteker",
    brand: "Clipper",
    description: "Duurzaam gemaakt van gerecycled materiaal.",
    longDescription:
      "De Clipper Eco Bio Aansteker is gemaakt van gerecyclede materialen en is een bewuste keuze voor het milieu. Volledig navulbaar en uitgerust met het klassieke Clipper vuursteen-systeem.",
    price: "11.95",
    image: "/images/hero_zippo.png",
    images: ["/images/hero_zippo.png", "/images/clipper.png"],
    rating: 5,
    reviewCount: 91,
    category: "Aanstekers",
    badge: "Eco",
    variants: { label: "Kleur", values: ["Naturel", "Groen", "Bruin"] },
    specs: [
      { label: "Merk", value: "Clipper" },
      { label: "Materiaal", value: "Gerecycled plastic" },
      { label: "Type", value: "Navulbaar" },
      { label: "Certificering", value: "FSC gecertificeerd" },
    ],
    inStock: true,
  },
];

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
