import rawProducts from "@/data/products.json";

export type Product = {
  id: number;
  artikelcode?: string;
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
  xmlCategory?: string;
  badge?: string | null;
  variants: { label: string; values: string[] };
  specs: { label: string; value: string }[];
  inStock: boolean;
};

export const PRODUCTS: Product[] = rawProducts as Product[];

export const CATEGORIES = ['Aanstekers', 'E-sigaretten', 'Accessoires', 'E-liquids'] as const;
export type CategoryName = (typeof CATEGORIES)[number];
