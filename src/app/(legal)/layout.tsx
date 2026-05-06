import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import PromoBar from "@/components/v2/PromoBar";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
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
              <span className="text-white/70">Juridisch</span>
            </nav>
            <h1 className="font-montserrat text-2xl font-black text-white tracking-tight">
              Juridische informatie
            </h1>
            <p className="text-white/35 text-[11px] mt-1">
              Privacy, voorwaarden en cookies van Tabaksspeciaalzaak Molenstraat
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Sub-nav between the three legal pages */}
          <nav className="flex flex-wrap gap-2 mb-6">
            {[
              { label: "Privacybeleid", href: "/privacybeleid" },
              { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
              { label: "Cookiebeleid", href: "/cookiebeleid" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider border border-gray-200 bg-white text-gray-500 hover:border-[#f5a623] hover:text-[#f5a623] rounded transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <article className="bg-white border border-gray-100 rounded-sm p-6 sm:p-10 prose-legal">
            {children}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
