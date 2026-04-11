import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2b3e51] py-24 text-white">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex flex-col group">
              <span className="font-montserrat text-3xl font-black tracking-[0.1em] text-white leading-none group-hover:text-primary transition-colors uppercase">
                TBK
              </span>
              <span className="font-montserrat text-[10px] font-bold tracking-[0.4em] text-white mt-1 opacity-60 uppercase">
                LIGHTSHOP
              </span>
            </Link>
            <p className="text-white/60 text-[11px] leading-relaxed uppercase tracking-widest font-bold pr-12">
              Sinds 1928 de specialist in aanstekers en rookaccessoires. Nu gevestigd in hartje Nijmegen. Kwaliteit, service en vakmanschap staan centraal.
            </p>
            <div className="flex gap-4">
               {["IG", "FB", "X"].map((social) => (
                  <Link 
                    key={social}
                    href="#" 
                    className="size-10 border border-white/10 rounded-lg flex items-center justify-center text-white font-black text-[10px] hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                  >
                    {social}
                  </Link>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat text-[13px] font-black uppercase tracking-widest mb-10 text-white border-b-2 border-primary w-max pb-2">Klantenservice</h4>
            <ul className="flex flex-col gap-5 text-[11px] uppercase tracking-widest font-bold text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group underline-offset-4 hover:underline">Contact <ArrowUpRight className="size-3" /></Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group underline-offset-4 hover:underline">Verzenden & Leveren <ArrowUpRight className="size-3" /></Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group underline-offset-4 hover:underline">Ruilen & Retourneren <ArrowUpRight className="size-3" /></Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group underline-offset-4 hover:underline">Betaalmethoden <ArrowUpRight className="size-3" /></Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group underline-offset-4 hover:underline">Veelgestelde Vragen <ArrowUpRight className="size-3" /></Link></li>
            </ul>
          </div>

          {/* Shop Info */}
          <div>
            <h4 className="font-montserrat text-[13px] font-black uppercase tracking-widest mb-10 text-white border-b-2 border-primary w-max pb-2">Mijn Account</h4>
            <ul className="flex flex-col gap-5 text-[11px] uppercase tracking-widest font-bold text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Inloggen</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Registreren</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Persoonlijke Gegevens</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Bestelhistorie</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacybeleid</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat text-[13px] font-black uppercase tracking-widest mb-10 text-white border-b-2 border-primary w-max pb-2">Winkel Nijmegen</h4>
            <ul className="flex flex-col gap-6 text-[11px] uppercase tracking-widest font-bold text-white/50">
              <li className="flex gap-4 group">
                <MapPin className="size-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span className="leading-relaxed">Molenstraat 44, <br /> 6511 HG Nijmegen, NL</span>
              </li>
              <li className="flex gap-4 group">
                <Phone className="size-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span>+31 (0)24 123 4567</span>
              </li>
              <li className="flex gap-4 group">
                <Mail className="size-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span>service@tbk-lightshop.nl</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col gap-2">
              <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-black">
                 © {new Date().getFullYear()} TBK LIGHTSHOP — NIJMEGEN
              </p>
              <div className="flex gap-12 text-[9px] font-black uppercase tracking-widest text-white/10">
                 <span>ALL RIGHTS RESERVED</span>
                 <div className="flex gap-4">
                    <span className="text-primary tracking-[0.2em]">TBK</span>
                    <span>EST. 1928</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
