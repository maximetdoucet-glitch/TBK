import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const LINKS = {
  shop: [
    { label: "Aanstekers", href: "/aanstekers" },
    { label: "Kokers & Etuis", href: "/kokers-etuis" },
    { label: "Knippers & Asbakken", href: "/knippers-asbakken" },
    { label: "Rook-accessoires", href: "/rook-accessoires" },
    { label: "Sale", href: "/sale" },
  ],
  service: [
    { label: "Contact", href: "/klantenservice/contact" },
    { label: "Verzenden & leveren", href: "/klantenservice/verzenden" },
    { label: "Ruilen & retourneren", href: "/klantenservice/retourneren" },
    { label: "Betaalmethoden", href: "/klantenservice/betaalmethoden" },
    { label: "Veelgestelde vragen", href: "/klantenservice/faq" },
    { label: "Garantiebeleid", href: "/klantenservice/garantie" },
  ],
  account: [
    { label: "Inloggen", href: "/account/inloggen" },
    { label: "Registreren", href: "/account/registreren" },
    { label: "Bestelhistorie", href: "/account/bestelhistorie" },
    { label: "Verlanglijst", href: "/account/verlanglijst" },
    { label: "Persoonlijke gegevens", href: "/account/gegevens" },
  ],
};

function IdealIcon() {
  return (
    <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="none">
      <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="4" y="16" fontSize="9" fontWeight="bold" fill="#cc0066" fontFamily="sans-serif">iDEAL</text>
    </svg>
  );
}
function VisaIcon() {
  return (
    <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="none">
      <rect width="38" height="24" rx="3" fill="#1a1f71" />
      <text x="5" y="16" fontSize="11" fontWeight="bold" fill="#fff" fontFamily="sans-serif" fontStyle="italic">VISA</text>
    </svg>
  );
}
function MastercardIcon() {
  return (
    <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="none">
      <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" strokeWidth="1"/>
      <circle cx="14" cy="12" r="7" fill="#eb001b"/>
      <circle cx="24" cy="12" r="7" fill="#f79e1b"/>
      <path d="M19 7.3a7 7 0 0 1 0 9.4A7 7 0 0 1 19 7.3z" fill="#ff5f00"/>
    </svg>
  );
}
function KlarnaIcon() {
  return (
    <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="none">
      <rect width="38" height="24" rx="3" fill="#ffb3c7"/>
      <text x="5" y="16" fontSize="9" fontWeight="bold" fill="#0a0a0a" fontFamily="sans-serif">klarna</text>
    </svg>
  );
}
function PaypalIcon() {
  return (
    <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="none">
      <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="4" y="16" fontSize="8" fontWeight="bold" fill="#003087" fontFamily="sans-serif">Pay</text>
      <text x="16" y="16" fontSize="8" fontWeight="bold" fill="#009cde" fontFamily="sans-serif">Pal</text>
    </svg>
  );
}

export default function FooterV2() {
  return (
    <footer className="bg-[#111820] text-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/*
          Single CSS grid: 4 columns — [brand 420px] [assortiment 1fr] [klantenservice 1fr] [mijn account 1fr]
          Both the nav row and bottom bar use this same grid, so column boundaries are identical.
          Payment icons live in column 4 only → right edge of PayPal = right edge of MIJN ACCOUNT. Guaranteed.
        */}
        {/* ── Row 1: nav columns ── */}
        <div className="flex gap-12 py-16">

          {/* Brand */}
          <div className="w-60 shrink-0 flex flex-col gap-6">
            <Link href="/" className="inline-flex w-fit group" aria-label="Rokersbenodigheden — naar startpagina">
              <span className="flex flex-col leading-none">
                <span className="text-[28px] font-black uppercase tracking-[0.15em] text-white">
                  Rokers
                </span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.42em] text-white/45 mt-1.5">
                  benodigheden
                </span>
              </span>
            </Link>
            <p className="text-white/45 text-[13px] leading-relaxed">
              De grootste tabakspecialist van Nijmegen — gespecialiseerd in aanstekers en rookaccessoires. Online en fysiek in de Molenstraat.
            </p>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: "Molenstraat 120, 6511 HG Nijmegen" },
                { icon: Phone, text: "+31 (0)24 123 4567" },
                { icon: Mail, text: "service@tbk-lightshop.nl" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[12px] text-white/40 hover:text-white/70 transition-colors">
                  <Icon className="size-3.5 text-[#f5a623] shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 pt-1">
              {[
                { label: "Instagram", href: "https://www.instagram.com/tabaksspeciaalzaaknijmegen", svg: <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg> },
                { label: "Facebook", href: "https://www.facebook.com/61558015454029/", svg: <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
              ].map(({ label, href, svg }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="size-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#f5a623] hover:bg-[#f5a623]/10 transition-all">
                  {svg}
                </Link>
              ))}
            </div>
          </div>

          {/* 3 nav columns — each flex-1 so they share and fill all remaining space */}

          {/* Assortiment */}
          <div className="flex-1 px-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 pb-3 border-b border-white/8">Assortiment</p>
            <ul className="space-y-3">
              {LINKS.shop.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Klantenservice */}
          <div className="flex-1 px-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 pb-3 border-b border-white/8">Klantenservice</p>
            <ul className="space-y-3">
              {LINKS.service.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Mijn account */}
          <div className="flex-1 px-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 pb-3 border-b border-white/8">Mijn account</p>
            <ul className="space-y-3">
              {LINKS.account.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            <div className="mt-8 inline-flex flex-col items-center border border-white/8 px-4 py-3 rounded-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25">Tabaksspeciaalzaak</span>
              <span className="font-montserrat text-lg font-black tracking-tight text-white/30 mt-1">Nijmegen</span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex items-center justify-between py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="text-[11px] text-white/25">© {new Date().getFullYear()} Rokersbenodigheden Nijmegen</span>
            {["Privacybeleid", "Algemene voorwaarden", "Cookiebeleid"].map((label) => (
              <Link key={label} href="#" className="text-[11px] text-white/25 hover:text-white/60 transition-colors">{label}</Link>
            ))}
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            <IdealIcon />
            <VisaIcon />
            <MastercardIcon />
            <KlarnaIcon />
            <PaypalIcon />
          </div>

        </div>
      </div>
    </footer>
  );
}
