import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const LINKS = {
  shop: [
    { label: "Zippo aanstekers", href: "#" },
    { label: "Clipper aanstekers", href: "/aanstekers" },
    { label: "Jetflame aanstekers", href: "#" },
    { label: "Sigarenknippers", href: "#" },
    { label: "Humidors", href: "#" },
    { label: "Vloei & Filters", href: "#" },
  ],
  service: [
    { label: "Contact", href: "#" },
    { label: "Verzenden & leveren", href: "#" },
    { label: "Ruilen & retourneren", href: "#" },
    { label: "Betaalmethoden", href: "#" },
    { label: "Veelgestelde vragen", href: "#" },
    { label: "Garantiebeleid", href: "#" },
  ],
  account: [
    { label: "Inloggen", href: "#" },
    { label: "Registreren", href: "#" },
    { label: "Bestelhistorie", href: "#" },
    { label: "Verlanglijst", href: "#" },
    { label: "Persoonlijke gegevens", href: "#" },
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
        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr 1fr 1fr' }}>

          {/* ── Row 1: nav columns ── */}

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6 pr-10 py-16">
            <Link href="/" className="inline-flex flex-col w-fit">
              <span className="font-montserrat text-3xl font-black tracking-tight text-white leading-none">OneConnect</span>
              <span className="font-montserrat text-[9px] font-bold tracking-[0.5em] text-white/40 mt-1">LIGHTSHOP</span>
            </Link>
            <p className="text-white/45 text-[13px] leading-relaxed">
              Nijmegen's specialist in aanstekers en rookaccessoires. Opgericht in 1928. Online en fysiek in de Molenstraat.
            </p>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: "Molenstraat 44, 6511 HG Nijmegen" },
                { icon: Phone, text: "+31 (0)24 123 4567" },
                { icon: Mail, text: "service@tbk-lightshop.nl" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[12px] text-white/40 hover:text-white/70 transition-colors">
                  <Icon className="size-3.5 text-[#f9c76b] shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 pt-1">
              {[
                { label: "Instagram", svg: <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg> },
                { label: "Facebook", svg: <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                { label: "X / Twitter", svg: <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
              ].map(({ label, svg }) => (
                <Link key={label} href="#" aria-label={label} className="size-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#f9c76b] hover:bg-[#f9c76b]/10 transition-all">
                  {svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Assortiment */}
          <div className="px-6 py-16">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 pb-3 border-b border-white/8">Assortiment</p>
            <ul className="space-y-3">
              {LINKS.shop.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Klantenservice */}
          <div className="px-6 py-16">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 pb-3 border-b border-white/8">Klantenservice</p>
            <ul className="space-y-3">
              {LINKS.service.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Mijn account */}
          <div className="pl-6 py-16">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 pb-3 border-b border-white/8">Mijn account</p>
            <ul className="space-y-3">
              {LINKS.account.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            <div className="mt-8 inline-flex flex-col border border-white/8 px-4 py-3 rounded-lg">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25">Opgericht</span>
              <span className="font-montserrat text-2xl font-black text-white/20 tracking-tight mt-0.5">1928</span>
            </div>
          </div>

          {/* ── Divider: spans all 4 columns ── */}
          <div style={{ gridColumn: 'span 4', borderTop: '1px solid rgba(255,255,255,0.06)' }} />

          {/* ── Row 2: bottom bar ── */}

          {/* Cols 1-3 — Legal links */}
          <div style={{ gridColumn: 'span 3' }} className="flex flex-wrap items-center gap-x-5 gap-y-1 py-6">
            <span className="text-[11px] text-white/25">© {new Date().getFullYear()} OneConnect Lightshop</span>
            {["Privacybeleid", "Algemene voorwaarden", "Cookiebeleid"].map((label) => (
              <Link key={label} href="#" className="text-[11px] text-white/25 hover:text-white/60 transition-colors">{label}</Link>
            ))}
          </div>

          {/* Col 4 — Payment icons, right-aligned within MIJN ACCOUNT column */}
          <div className="pl-6 py-6 flex items-center justify-end gap-2">
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
