import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import PromoBar from "@/components/v2/PromoBar";
import HeroCarousel from "@/components/v2/HeroCarousel";
import CategoryShowcase from "@/components/v2/CategoryShowcase";
import FeaturedProducts from "@/components/v2/FeaturedProducts";
import BrandCarousel from "@/components/sections/BrandCarousel";
import AboutSection from "@/components/v2/AboutSection";
import EmailCTA from "@/components/v2/EmailCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoBar />
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <CategoryShowcase />
        <FeaturedProducts />
        <BrandCarousel />
        <AboutSection />
      </main>
      <EmailCTA />
      <Footer />
    </div>
  );
}
