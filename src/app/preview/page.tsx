// Preview route — v2 design. Original page.tsx is completely untouched.
import PromoBar from "@/components/v2/PromoBar";
import HeaderV2 from "@/components/v2/HeaderV2";
import HeroCarousel from "@/components/v2/HeroCarousel";
import CategoryShowcase from "@/components/v2/CategoryShowcase";
import FeaturedProducts from "@/components/v2/FeaturedProducts";
import AboutSection from "@/components/v2/AboutSection";
import EmailCTA from "@/components/v2/EmailCTA";
import FooterV2 from "@/components/v2/FooterV2";

// Kept from original — no changes needed
import ArticleSection from "@/components/sections/ArticleSection";
import BrandCarousel from "@/components/sections/BrandCarousel";

export default function PreviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoBar />
      <HeaderV2 />
      <main className="flex-1">
        <HeroCarousel />
        <CategoryShowcase />
        <FeaturedProducts />
        <ArticleSection />
        <BrandCarousel />
        <AboutSection />
        <EmailCTA />
      </main>
      <FooterV2 />
    </div>
  );
}
