import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import PromoBar from "@/components/v2/PromoBar";
import Sidebar from "./_components/Sidebar";

export default function KlantenserviceLayout({ children }: { children: React.ReactNode }) {
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
              <span className="text-white/70">Klantenservice</span>
            </nav>
            <div className="flex items-end justify-between">
              <div>
                <h1 className="font-montserrat text-2xl font-black text-white tracking-tight">
                  Klantenservice
                </h1>
                <p className="text-white/35 text-[11px] mt-1">
                  Tabaksspeciaalzaak Nijmegen · Persoonlijk advies sinds altijd
                </p>
              </div>
              <p className="text-white/25 text-[11px] hidden md:block tracking-wide">
                Molenstraat 120 · service@tbk-lightshop.nl
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <Sidebar />
            <div className="flex-1 min-w-0 bg-white border border-gray-100 rounded-sm p-6 sm:p-10">
              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
