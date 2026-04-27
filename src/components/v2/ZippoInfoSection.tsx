"use client";

import { useState } from "react";
import { Flame, RefreshCw, Wind, Shield, Wrench, Star, MessageCircle, ChevronRight } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: "01",
    title: "Haal het binnenwerk eruit",
    desc: "Druk het metalen binnenwerk uit de buitenkast. Geen gereedschap nodig.",
  },
  {
    n: "02",
    title: "Open de vulplek",
    desc: "Til de vilten bodemplaat op en je ziet de katoenen watten.",
  },
  {
    n: "03",
    title: "Vul bij",
    desc: "Druppel Zippo-benzine langzaam op de watten tot ze verzadigd zijn — niet overladen.",
  },
  {
    n: "04",
    title: "Sluit en wacht 1 minuut",
    desc: "Vilten plaat terug, binnenwerk in de kast. Even geduld voorkomt een flits.",
  },
  {
    n: "05",
    title: "Klaar om aan te steken",
    desc: "Veeg restdruppels weg en test de vlam. Je Zippo is weer volledig operationeel.",
  },
];

const FAQS = [
  {
    q: "Hoe lang gaat een Zippo mee?",
    a: "Een Zippo heeft een levenslange garantie en gaat bij normaal gebruik generaties mee. De aanstekers worden al sinds 1932 op dezelfde manier gemaakt — van staal, voor de eeuwigheid.",
  },
  {
    q: "Hoe weet ik of mijn Zippo origineel is?",
    a: "Kijk op de bodem: een echte Zippo heeft een datumcode, strakke scharnier, de verende klik van het deksel en een nette naad. Koop uitsluitend bij erkende verkopers zoals OneConnect.",
  },
  {
    q: "Welke brandstof gebruik ik?",
    a: "Gebruik altijd originele Zippo-benzine. Andere benzinesoorten beschadigen de watten en geven meer reukgeur. Verkrijgbaar bij ons in de winkel en webshop.",
  },
  {
    q: "Hoe vervang ik de vuursteentjes?",
    a: "Draai de schroef onderaan het binnenwerk eruit. Haal veer en oud steentje weg, leg een nieuw Zippo-steentje in, veer erop, schroef terug. Klaar in minder dan een minuut.",
  },
  {
    q: "Mag ik een Zippo meenemen in het vliegtuig?",
    a: "Een gevulde aansteker is niet toegestaan in handbagage. Een lege aansteker mag in sommige gevallen wel, maar regels verschillen per maatschappij — check altijd van tevoren.",
  },
  {
    q: "Hoe vaak moet ik bijvullen?",
    a: "Bij dagelijks gebruik gemiddeld elke 1–2 weken. Benzine verdampt ook als je hem niet gebruikt, dus vul bij wanneer de vlam zwakker wordt.",
  },
  {
    q: "Kan ik een Zippo laten graveren?",
    a: "Ja. Veel modellen zijn geschikt voor gravure — naam, datum of afbeelding. Kom langs in de Molenstraat 120 voor de mogelijkheden.",
  },
];

// ─── FAQ Item ────────────────────────────────────────────────────────────────

function FaqItem({ index, q, a }: { index: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`relative pl-5 border-l-2 transition-all duration-300 ${
        open ? "border-[#f5a623]" : "border-white/10 hover:border-white/25"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start gap-4 py-5 text-left group"
      >
        {/* Number tag */}
        <span
          className={`font-montserrat text-[10px] font-black tabular-nums mt-0.5 flex-shrink-0 transition-colors ${
            open ? "text-[#f5a623]" : "text-white/20 group-hover:text-white/40"
          }`}
        >
          {num}
        </span>

        <span
          className={`flex-1 text-[13px] font-bold leading-snug transition-colors ${
            open ? "text-white" : "text-white/60 group-hover:text-white/85"
          }`}
        >
          {q}
        </span>

        <ChevronRight
          className={`size-4 flex-shrink-0 mt-0.5 transition-all duration-300 ${
            open
              ? "rotate-90 text-[#f5a623]"
              : "text-white/20 group-hover:text-white/40"
          }`}
        />
      </button>

      {open && (
        <p className="text-[12px] text-white/50 leading-relaxed pb-5 pr-6 ml-9">
          {a}
        </p>
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ZippoInfoSection() {
  return (
    <div>

      {/* ══════════════════════════════════════════════
          SECTION 1 — WHY ZIPPO  (white bg)
      ══════════════════════════════════════════════ */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Lead-in label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#f5a623]/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
              Alles over Zippo aanstekers
            </span>
          </div>

          {/* Editorial headline */}
          <div className="mb-10">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h2 className="font-montserrat font-black text-[#2b3e51] leading-[0.88] tracking-tighter text-[clamp(38px,5vw,72px)]">
                Gebouwd voor
              </h2>
              <span className="font-montserrat font-black text-[#f5a623] leading-[0.88] tracking-tighter text-[clamp(38px,5vw,72px)]">
                de eeuwigheid.
              </span>
            </div>
            <p className="text-gray-500 text-[13px] mt-4 max-w-lg leading-relaxed">
              Zippo wordt al gemaakt op dezelfde manier — van 1932 tot nu. Niet omdat het goedkoop is, maar omdat het goed is.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* Hero card — spans 2 cols */}
            <div className="lg:col-span-2 relative overflow-hidden bg-[#f5a623]/6 border border-[#f5a623]/25 rounded-sm p-8 group hover:border-[#f5a623]/50 transition-all duration-300">
              <span
                className="absolute right-6 bottom-2 font-montserrat font-black text-[#f5a623] select-none pointer-events-none leading-none text-[clamp(80px,10vw,140px)] opacity-[0.08]"
                aria-hidden
              >
                1932
              </span>
              <div className="relative z-10">
                <Shield className="size-8 text-[#f5a623] mb-5 opacity-90" />
                <h3 className="font-montserrat text-xl font-black text-[#2b3e51] tracking-tight mb-3">
                  Levenslange garantie — zonder uitzondering
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-md">
                  Elke Zippo die ooit is gemaakt — van 1932 tot vandaag — valt onder de levenslange garantie. Geen aankoopbewijs nodig, geen tijdslimiet, geen kleine lettertjes. Een kapotte scharnier van dertig jaar oud? Zippo repareert of vervangt hem, kosteloos. Dat is niet marketing; het staat gewoon in hun beleid.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#f5a623]">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Lifetime warranty since 1932</span>
                  <div className="h-px flex-1 bg-[#f5a623]/30 max-w-[60px]" />
                </div>
              </div>
            </div>

            {/* Card 2 — Navulbaar */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 group hover:border-[#f5a623]/40 hover:bg-[#f5a623]/3 transition-all duration-300">
              <RefreshCw className="size-5 text-gray-400 mb-4 group-hover:text-[#f5a623] transition-colors duration-300" />
              <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] tracking-tight mb-2">
                Navulbaar & milieuvriendelijk
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                Een wegwerpaansteker gooi je na 3.000 vonken weg. Een Zippo vul je bij — onbeperkt, voor een paar euro per jaar. Gebruik uitsluitend originele Zippo-benzine: andere soorten tasten de watten aan en geven ongewenste reukgeur.
              </p>
            </div>

            {/* Card 3 — Windbestendig */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 group hover:border-[#f5a623]/40 hover:bg-[#f5a623]/3 transition-all duration-300">
              <Wind className="size-5 text-gray-400 mb-4 group-hover:text-[#f5a623] transition-colors duration-300" />
              <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] tracking-tight mb-2">
                Windbestendig door ontwerp
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                De perforaties in het binnenwerk laten lucht van onderaf toe en blokkeren zijwind. Dat is geen toeval — het is een beproefd mechanisme dat al negen decennia onveranderd werkt, van bergkampen tot scheepsdekken.
              </p>
            </div>

            {/* Card 4 — Collector */}
            <div className="sm:col-span-2 lg:col-span-1 bg-gray-50 border border-gray-200 rounded-sm p-6 group hover:border-[#f5a623]/40 hover:bg-[#f5a623]/3 transition-all duration-300">
              <Star className="size-5 text-gray-400 mb-4 group-hover:text-[#f5a623] transition-colors duration-300" />
              <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] tracking-tight mb-2">
                500+ modellen, limited editions
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                Zippo brengt jaarlijks gelimiteerde series uit die binnen uren uitverkopen. Vintage modellen uit de jaren &apos;40–&apos;60 worden op veilingen verhandeld voor honderden euro&apos;s. Elke aankoop is een stuk dat potentieel in waarde stijgt.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 — HOW TO REFILL  (white bg)
      ══════════════════════════════════════════════ */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 mb-3">
                Onderhoud — Stap voor stap
              </p>
              <h2 className="font-montserrat font-black text-[#2b3e51] tracking-tight leading-tight text-[clamp(28px,3.5vw,48px)]">
                Bijvullen in<br />vijf stappen.
              </h2>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f5a623]/6 border border-[#f5a623]/20 rounded-sm max-w-xs">
              <Flame className="size-4 text-[#f5a623] mt-0.5 flex-shrink-0" />
              <p className="text-[11px] text-gray-500 leading-relaxed">
                <span className="text-gray-700 font-bold">Tip:</span> Wacht na het vullen 1 minuut. Zo voorkom je een flits bij de eerste vlam.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {STEPS.map((step) => (
              <div key={step.n} className="relative pt-10 pb-8 px-6 group overflow-hidden first:pl-0 last:pr-0">
                <span
                  className="absolute top-0 left-4 font-montserrat font-black text-black/[0.04] select-none leading-none pointer-events-none text-[6rem]"
                  aria-hidden
                >
                  {step.n}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623] mb-4 relative z-10 group-hover:scale-150 transition-transform duration-300" />
                <h4 className="relative z-10 text-[12px] font-black text-[#2b3e51] leading-snug mb-2">
                  {step.title}
                </h4>
                <p className="relative z-10 text-[11px] text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom badge */}
          <div className="mt-10 flex items-center gap-3 text-gray-300">
            <Wrench className="size-4" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Zippo reparatieservice beschikbaar in onze winkel</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FAQ
          Left border treatment, numbered tags
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0d1117] border-t border-white/6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-10">
              {/* Big decorative question mark */}
              <div className="relative mb-6 inline-block">
                <span
                  className="font-montserrat font-black text-white/5 leading-none select-none pointer-events-none absolute -top-4 -left-4 text-[8rem]"
                  aria-hidden
                >
                  ?
                </span>
                <h2 className="font-montserrat font-black text-white tracking-tight leading-tight relative text-[clamp(28px,3vw,40px)]">
                  Vragen over<br />
                  <span className="text-[#f5a623]">Zippo?</span>
                </h2>
              </div>
              <p className="text-[12px] text-white/35 leading-relaxed mb-8">
                Alles wat je wilt weten over gebruik, onderhoud en aankoop — eerlijk en zonder omhaal.
              </p>

              {/* Contact card — no border box, just inline */}
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                  Niet gevonden?
                </p>
                <div className="flex items-center gap-2 group cursor-pointer">
                  <MessageCircle className="size-4 text-[#f5a623]" />
                  <span className="text-[12px] text-white/50 group-hover:text-white/80 transition-colors">
                    Molenstraat 120, Nijmegen
                  </span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer">
                  <MessageCircle className="size-4 text-[#f5a623] opacity-0" />
                  <span className="text-[12px] text-white/50 group-hover:text-white/80 transition-colors">
                    service@tbk-lightshop.nl
                  </span>
                </div>
              </div>
            </div>

            {/* Right: FAQ items */}
            <div className="space-y-1">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} index={i} q={faq.q} a={faq.a} />
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
