"use client";

import { useState } from "react";
import { Flame, RefreshCw, Wind, Shield, ChevronDown, Wrench, Star, Plane } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Levenslange garantie",
    body: "Elke Zippo wordt geleverd met een levenslange garantie. Kapot? Stuur hem op — Zippo repareert of vervangt, altijd en gratis.",
  },
  {
    icon: RefreshCw,
    title: "Navulbaar & duurzaam",
    body: "Koop één keer, gebruik een leven lang. Vul bij met originele Zippo-benzine en je aansteker is weer klaar voor gebruik.",
  },
  {
    icon: Wind,
    title: "Windbestendig",
    body: "De iconische vlam brandt ook bij harde wind. Specifiek ontworpen voor buiten — in de bergen, op het terras, in de regen.",
  },
  {
    icon: Star,
    title: "Collector's item",
    body: "Met honderden ontwerpen en jaarlijkse limited editions is iedere Zippo een uniek stuk dat in waarde kan stijgen.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Haal het binnenwerk eruit",
    desc: "Druk het metalen binnenwerk (insert) uit de buitenkast. Je hoeft geen gereedschap te gebruiken.",
  },
  {
    n: "02",
    title: "Open de vulplek",
    desc: "Til de vilten bodemplaat aan de onderkant van het binnenwerk op. Zo kom je bij de katoenen watten.",
  },
  {
    n: "03",
    title: "Vul bij met benzine",
    desc: "Druppel Zippo-benzine langzaam op de watten totdat ze verzadigd zijn. Stop op tijd — niet overladen.",
  },
  {
    n: "04",
    title: "Sluit en wacht",
    desc: "Druk de vilten plaat terug, schuif het binnenwerk in de kast. Wacht 1 minuut voor je aansteekt.",
  },
  {
    n: "05",
    title: "Klaar",
    desc: "Veeg eventuele restdruppels weg aan de buitenkant en test de vlam. Je Zippo is weer volledig operationeel.",
  },
];

const FAQS = [
  {
    q: "Hoe lang gaat een Zippo mee?",
    a: "Een Zippo heeft een levenslange garantie en gaat bij normaal gebruik generaties mee. De iconische aanstekers worden al sinds 1932 op dezelfde manier gemaakt — van staal, voor de eeuwigheid.",
  },
  {
    q: "Hoe weet ik of mijn Zippo origineel is?",
    a: "Een originele Zippo herkent je aan de datumcode op de bodem, de strakke scharnier, de verende klik van het deksel en de nette naad van de behuizing. Bij twijfel: koop uitsluitend bij erkende verkopers zoals wij.",
  },
  {
    q: "Welke brandstof gebruik ik?",
    a: "Gebruik altijd originele Zippo-benzine (lighter fluid). Andere benzinesoorten kunnen de watten beschadigen en produceren meer reukgeur. Zippo-benzine is verkrijgbaar in onze winkel en webshop.",
  },
  {
    q: "Hoe vervang ik de vuursteentjes?",
    a: "Draai de schroef aan de onderkant van het binnenwerk eruit met een kleine schroevendraaier. Verwijder de veer en het oude steentje. Leg een nieuw Zippo-steentje in, plaats de veer en draai de schroef terug. Klaar in minder dan een minuut.",
  },
  {
    q: "Mag ik een Zippo meenemen in het vliegtuig?",
    a: "Een gevulde aansteker is niet toegestaan in handbagage. Een lege aansteker (zonder brandstof) mag in sommige gevallen wel mee in handbagage, maar de regels verschillen per luchtvaartmaatschappij. Check altijd de regels van je vlucht.",
  },
  {
    q: "Hoe vaak moet ik bijvullen?",
    a: "Bij dagelijks gebruik gemiddeld elke 1 tot 2 weken. Benzine verdampt ook als de aansteker niet gebruikt wordt, dus vul bij als je hem een tijdje niet hebt aangestoken.",
  },
  {
    q: "Kan ik een Zippo laten personaliseren?",
    a: "Ja. Veel modellen zijn geschikt voor gravure — een naam, datum of afbeelding. Neem contact op met onze winkel in de Molenstraat voor de mogelijkheden.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className={`text-[13px] font-bold leading-snug transition-colors ${open ? "text-[#f5a623]" : "text-white/80 group-hover:text-white"}`}>
          {q}
        </span>
        <ChevronDown
          className={`size-4 flex-shrink-0 transition-all duration-300 ${open ? "rotate-180 text-[#f5a623]" : "text-white/30 group-hover:text-white/60"}`}
        />
      </button>
      {open && (
        <p className="text-[12px] text-white/50 leading-relaxed pb-4 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export default function ZippoInfoSection() {
  return (
    <div className="bg-[#0d1117]">

      {/* ═══════════════════════════════════════
          SECTION 1 — Why Zippo (feature cards)
      ═══════════════════════════════════════ */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#f5a623]/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f5a623]/70">
              Meer dan een aansteker
            </span>
            <div className="h-px w-12 bg-[#f5a623]/40" />
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Waarom kiezen voor<br />
            <span className="text-[#f5a623]">een Zippo?</span>
          </h2>
          <p className="text-white/40 text-[13px] leading-relaxed max-w-md mt-4">
            Zippo wordt al sinds 1932 gemaakt. Niet omdat het moet, maar omdat kwaliteit en vakmanschap zichzelf bewijzen.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group bg-white/4 border border-white/8 rounded-sm p-6 hover:border-[#f5a623]/40 hover:bg-white/6 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center mb-5 group-hover:bg-[#f5a623]/20 transition-colors">
                <Icon className="size-5 text-[#f5a623]" />
              </div>
              <h3 className="font-montserrat text-[13px] font-black text-white mb-2 tracking-tight">
                {title}
              </h3>
              <p className="text-[12px] text-white/45 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          SECTION 2 — How to refill
      ═══════════════════════════════════════ */}
      <div className="border-t border-white/6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: intro text */}
            <div className="lg:sticky lg:top-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#f5a623]/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f5a623]/70">
                  Onderhoud
                </span>
              </div>
              <h2 className="font-montserrat text-3xl font-black text-white tracking-tight leading-tight mb-5">
                Hoe vul je een<br />
                <span className="text-[#f5a623]">Zippo bij?</span>
              </h2>
              <p className="text-white/45 text-[13px] leading-relaxed mb-6">
                Bijvullen kost minder dan twee minuten. Gebruik altijd originele Zippo-benzine — dat beschermt de watten en geeft de minste reukgeur.
              </p>
              <div className="flex items-start gap-3 p-4 bg-[#f5a623]/6 border border-[#f5a623]/20 rounded-sm">
                <Flame className="size-4 text-[#f5a623] mt-0.5 flex-shrink-0" />
                <p className="text-[12px] text-white/60 leading-relaxed">
                  <span className="text-white font-bold">Tip:</span> Laat de aansteker na het vullen altijd 1 minuut rusten voordat je hem aansteekt. Zo voorkom je een flits bij de eerste vlam.
                </p>
              </div>

              {/* Wrench icon badge */}
              <div className="mt-8 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center">
                  <Wrench className="size-4 text-white/40" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-white/70">Zippo reparatieservice</p>
                  <p className="text-[10px] text-white/30">Kapot? Wij regelen het — levenslange garantie.</p>
                </div>
              </div>
            </div>

            {/* Right: steps */}
            <div className="space-y-0">
              {STEPS.map((step, i) => (
                <div key={step.n} className="flex gap-5 group">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f5a623]/20 transition-colors">
                      <span className="font-montserrat text-[10px] font-black text-[#f5a623]">
                        {step.n}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 min-h-[32px] bg-white/8 mt-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8">
                    <h4 className="text-[13px] font-black text-white mb-1 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[12px] text-white/45 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          SECTION 3 — FAQ
      ═══════════════════════════════════════ */}
      <div className="border-t border-white/6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 items-start">

            {/* Left: header */}
            <div className="lg:sticky lg:top-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#f5a623]/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f5a623]/70">
                  FAQ
                </span>
              </div>
              <h2 className="font-montserrat text-3xl font-black text-white tracking-tight leading-tight mb-5">
                Veelgestelde<br />
                <span className="text-[#f5a623]">vragen</span>
              </h2>
              <p className="text-white/40 text-[13px] leading-relaxed mb-8">
                Alles wat je wilt weten over Zippo aanstekers, onderhoud en gebruik.
              </p>

              {/* Contact nudge */}
              <div className="p-5 bg-white/4 border border-white/8 rounded-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Plane className="size-4 text-[#f5a623]" />
                  <span className="text-[11px] font-black text-white">Nog een vraag?</span>
                </div>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  Kom langs in de Molenstraat 44, Nijmegen of stuur ons een bericht via de contactpagina.
                </p>
              </div>
            </div>

            {/* Right: accordion */}
            <div className="divide-y divide-white/0">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
