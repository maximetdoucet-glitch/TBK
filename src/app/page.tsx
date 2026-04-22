import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import CategoryGrid from "@/components/sections/CategoryGrid";
import ProductSlider from "@/components/sections/ProductSlider";
import ArticleSection from "@/components/sections/ArticleSection";
import BrandCarousel from "@/components/sections/BrandCarousel";
import NewsletterSection from "@/components/sections/NewsletterSection";
import SEOContent from "@/components/sections/SEOContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <CategoryGrid />
        <ProductSlider />
        <ArticleSection />
        <BrandCarousel />
        <NewsletterSection />
        <SEOContent />
      </main>
      <Footer />
    </div>
  );
}
