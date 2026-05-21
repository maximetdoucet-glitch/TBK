"use client";

import { useState } from "react";
import { Flame, RefreshCw, Wind, Shield, Star, MessageCircle, ChevronRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/translations";

// ─── Localised copy ──────────────────────────────────────────────────────────

type ZippoText = {
  aboutLabel: string;
  headlineDark: string;
  headlineAccent: string;
  intro: string;
  hero: { title: string; body: string; caption: string };
  card2: { title: string; body: string };
  card3: { title: string; body: string };
  card4: { title: string; body: string };
  stepsLabel: string;
  stepsHeadingLine1: string;
  stepsHeadingLine2: string;
  stepsTipBold: string;
  stepsTipBody: string;
  steps: { n: string; title: string; desc: string }[];
  faqHeadingDark: string;
  faqHeadingAccent: string;
  faqNotFound: string;
};

const LOCALIZED: Record<Locale, ZippoText> = {
  NL: {
    aboutLabel: "Alles over Zippo aanstekers",
    headlineDark: "Gebouwd voor",
    headlineAccent: "de eeuwigheid.",
    intro:
      "Zippo wordt al gemaakt op dezelfde manier - van 1932 tot nu. Niet omdat het goedkoop is, maar omdat het goed is.",
    hero: {
      title: "Levenslange garantie - zonder uitzondering",
      body: "Elke Zippo die ooit is gemaakt - van 1932 tot vandaag - valt onder de levenslange garantie. Geen aankoopbewijs nodig, geen tijdslimiet, geen kleine lettertjes. Een kapotte scharnier van dertig jaar oud? Zippo repareert of vervangt hem kosteloos. Dat is geen marketing; het staat gewoon in hun beleid.",
      caption: "Levenslange garantie sinds 1932",
    },
    card2: {
      title: "Navulbaar & milieuvriendelijk",
      body: "Een wegwerpaansteker gooi je na 3.000 vonken weg. Een Zippo vul je bij - onbeperkt, voor een paar euro per jaar. Gebruik uitsluitend originele Zippo-benzine: andere soorten tasten de watten aan en geven ongewenste reukgeur.",
    },
    card3: {
      title: "Windbestendig door ontwerp",
      body: "De perforaties in het binnenwerk laten lucht van onderaf toe en blokkeren zijwind. Dat is geen toeval - het is een beproefd mechanisme dat al negen decennia onveranderd werkt, van bergkampen tot scheepsdekken.",
    },
    card4: {
      title: "500+ modellen, limited editions",
      body: "Zippo brengt jaarlijks gelimiteerde series uit die binnen uren uitverkopen. Vintage modellen uit de jaren '40-'60 worden op veilingen verhandeld voor honderden euro's. Elke aankoop is een stuk dat potentieel in waarde stijgt.",
    },
    stepsLabel: "Onderhoud - Stap voor stap",
    stepsHeadingLine1: "Bijvullen in",
    stepsHeadingLine2: "vijf stappen.",
    stepsTipBold: "Tip:",
    stepsTipBody:
      "Wacht na het vullen 1 minuut. Zo voorkom je een flits bij de eerste vlam.",
    steps: [
      { n: "01", title: "Haal het binnenwerk eruit", desc: "Druk het metalen binnenwerk uit de buitenkast. Geen gereedschap nodig." },
      { n: "02", title: "Open de vulplek", desc: "Til de vilten bodemplaat op en je ziet de katoenen watten." },
      { n: "03", title: "Vul bij", desc: "Druppel Zippo-benzine langzaam op de watten tot ze verzadigd zijn - niet overladen." },
      { n: "04", title: "Sluit en wacht 1 minuut", desc: "Vilten plaat terug, binnenwerk in de kast. Even geduld voorkomt een flits." },
      { n: "05", title: "Klaar om aan te steken", desc: "Veeg restdruppels weg en test de vlam. Je Zippo is weer volledig operationeel." },
    ],
    faqHeadingDark: "Vragen over",
    faqHeadingAccent: "Zippo?",
    faqNotFound: "Niet gevonden?",
  },
  EN: {
    aboutLabel: "All about Zippo lighters",
    headlineDark: "Built to last",
    headlineAccent: "forever.",
    intro:
      "Zippo has been made the same way - from 1932 to today. Not because it's cheap, but because it's good.",
    hero: {
      title: "Lifetime warranty - no exceptions",
      body: "Every Zippo ever made - from 1932 to today - is covered by the lifetime warranty. No proof of purchase, no time limit, no fine print. A broken hinge from thirty years ago? Zippo repairs or replaces it free of charge. That's not marketing; it's literally their policy.",
      caption: "Lifetime warranty since 1932",
    },
    card2: {
      title: "Refillable & eco-friendly",
      body: "A disposable lighter is thrown away after 3,000 sparks. A Zippo refills - indefinitely, for a few euros a year. Only use original Zippo fluid: other types damage the wick and produce unwanted odour.",
    },
    card3: {
      title: "Windproof by design",
      body: "The perforations in the insert draw air from below and block side wind. That's no coincidence - it's a proven mechanism that has worked unchanged for nine decades, from mountain camps to ship decks.",
    },
    card4: {
      title: "500+ models, limited editions",
      body: "Zippo releases limited series every year that sell out within hours. Vintage models from the '40s-'60s trade at auction for hundreds of euros. Every purchase is a piece with potential to appreciate.",
    },
    stepsLabel: "Maintenance - step by step",
    stepsHeadingLine1: "Refill in",
    stepsHeadingLine2: "five steps.",
    stepsTipBold: "Tip:",
    stepsTipBody:
      "Wait 1 minute after refilling. It prevents a flare-up on the first flame.",
    steps: [
      { n: "01", title: "Remove the insert", desc: "Push the metal insert out of the outer case. No tools needed." },
      { n: "02", title: "Open the fill area", desc: "Lift the felt bottom plate and you'll see the cotton wadding." },
      { n: "03", title: "Refill", desc: "Drip Zippo fluid slowly onto the wadding until saturated - don't overfill." },
      { n: "04", title: "Close and wait 1 minute", desc: "Felt plate back, insert into the case. A little patience prevents a flare-up." },
      { n: "05", title: "Ready to light", desc: "Wipe away any residue and test the flame. Your Zippo is fully operational again." },
    ],
    faqHeadingDark: "Questions about",
    faqHeadingAccent: "Zippo?",
    faqNotFound: "Didn't find it?",
  },
  DE: {
    aboutLabel: "Alles über Zippo-Feuerzeuge",
    headlineDark: "Gebaut für",
    headlineAccent: "die Ewigkeit.",
    intro:
      "Zippo wird seit 1932 unverändert gefertigt. Nicht weil es billig ist, sondern weil es gut ist.",
    hero: {
      title: "Lebenslange Garantie - ohne Ausnahme",
      body: "Jedes je gefertigte Zippo - von 1932 bis heute - fällt unter die lebenslange Garantie. Kein Kaufbeleg nötig, keine Zeitbegrenzung, kein Kleingedrucktes. Ein kaputtes Scharnier nach dreißig Jahren? Zippo repariert oder ersetzt es kostenlos. Das ist kein Marketing; es steht so in deren Richtlinie.",
      caption: "Lebenslange Garantie seit 1932",
    },
    card2: {
      title: "Wiederbefüllbar & umweltfreundlich",
      body: "Ein Einwegfeuerzeug landet nach 3.000 Funken im Müll. Ein Zippo füllen Sie immer wieder nach - unbegrenzt, für ein paar Euro pro Jahr. Verwenden Sie ausschließlich originales Zippo-Benzin: andere Sorten greifen den Docht an und erzeugen unerwünschten Geruch.",
    },
    card3: {
      title: "Windfest durch Konstruktion",
      body: "Die Perforationen im Einsatz lassen Luft von unten zu und blockieren Seitenwind. Das ist kein Zufall - es ist ein bewährter Mechanismus, der seit neun Jahrzehnten unverändert funktioniert, vom Bergcamp bis zum Schiffsdeck.",
    },
    card4: {
      title: "500+ Modelle, Limited Editions",
      body: "Zippo bringt jährlich limitierte Serien heraus, die binnen Stunden ausverkauft sind. Vintage-Modelle aus den 40er-60er Jahren werden bei Auktionen für hunderte Euro gehandelt. Jeder Kauf ist ein Stück mit Wertsteigerungspotenzial.",
    },
    stepsLabel: "Pflege - Schritt für Schritt",
    stepsHeadingLine1: "Nachfüllen in",
    stepsHeadingLine2: "fünf Schritten.",
    stepsTipBold: "Tipp:",
    stepsTipBody:
      "Warten Sie nach dem Befüllen 1 Minute. So vermeiden Sie eine Stichflamme beim ersten Funken.",
    steps: [
      { n: "01", title: "Einsatz herausnehmen", desc: "Drücken Sie den Metalleinsatz aus dem Außengehäuse. Kein Werkzeug nötig." },
      { n: "02", title: "Befüllbereich öffnen", desc: "Heben Sie die Filzplatte am Boden an, darunter sehen Sie die Baumwollwatte." },
      { n: "03", title: "Nachfüllen", desc: "Träufeln Sie Zippo-Benzin langsam auf die Watte, bis sie gesättigt ist - nicht überfüllen." },
      { n: "04", title: "Schließen und 1 Minute warten", desc: "Filzplatte zurück, Einsatz in das Gehäuse. Kurze Geduld verhindert eine Stichflamme." },
      { n: "05", title: "Bereit zum Anzünden", desc: "Restspuren abwischen und Flamme testen. Ihr Zippo ist wieder voll einsatzbereit." },
    ],
    faqHeadingDark: "Fragen zum",
    faqHeadingAccent: "Zippo?",
    faqNotFound: "Nicht gefunden?",
  },
  FR: {
    aboutLabel: "Tout sur les briquets Zippo",
    headlineDark: "Construit pour",
    headlineAccent: "l'éternité.",
    intro:
      "Zippo est fabriqué de la même manière depuis 1932. Pas parce que c'est bon marché, mais parce que c'est bien fait.",
    hero: {
      title: "Garantie à vie - sans exception",
      body: "Tout Zippo jamais produit - de 1932 à aujourd'hui - est couvert par la garantie à vie. Pas de preuve d'achat, pas de limite de temps, pas de petits caractères. Une charnière cassée vieille de trente ans ? Zippo la répare ou la remplace gratuitement. Ce n'est pas du marketing ; c'est littéralement leur politique.",
      caption: "Garantie à vie depuis 1932",
    },
    card2: {
      title: "Rechargeable & écologique",
      body: "Un briquet jetable finit à la poubelle après 3 000 étincelles. Un Zippo se recharge indéfiniment, pour quelques euros par an. Utilisez uniquement de l'essence Zippo d'origine : les autres carburants attaquent la mèche et dégagent une odeur indésirable.",
    },
    card3: {
      title: "Coupe-vent par conception",
      body: "Les perforations de l'insert laissent passer l'air par le bas et bloquent le vent latéral. Ce n'est pas un hasard - c'est un mécanisme éprouvé, inchangé depuis neuf décennies, du camp de montagne au pont d'un navire.",
    },
    card4: {
      title: "500+ modèles, éditions limitées",
      body: "Zippo sort chaque année des séries limitées qui s'épuisent en quelques heures. Les modèles vintage des années 40-60 se vendent aux enchères à plusieurs centaines d'euros. Chaque achat est une pièce qui peut prendre de la valeur.",
    },
    stepsLabel: "Entretien - étape par étape",
    stepsHeadingLine1: "Remplir en",
    stepsHeadingLine2: "cinq étapes.",
    stepsTipBold: "Astuce :",
    stepsTipBody:
      "Attendez 1 minute après le remplissage. Cela évite une flambée à la première étincelle.",
    steps: [
      { n: "01", title: "Sortez l'insert", desc: "Faites glisser l'insert métallique hors du boîtier. Aucun outil nécessaire." },
      { n: "02", title: "Ouvrez la zone de remplissage", desc: "Soulevez le feutre du fond, vous voyez la ouate en coton." },
      { n: "03", title: "Remplissez", desc: "Versez lentement de l'essence Zippo sur la ouate jusqu'à saturation - sans déborder." },
      { n: "04", title: "Fermez et attendez 1 minute", desc: "Remettez le feutre, replacez l'insert dans le boîtier. Un peu de patience évite la flambée." },
      { n: "05", title: "Prêt à allumer", desc: "Essuyez les résidus et testez la flamme. Votre Zippo est de nouveau pleinement opérationnel." },
    ],
    faqHeadingDark: "Questions sur",
    faqHeadingAccent: "Zippo ?",
    faqNotFound: "Pas trouvé ?",
  },
};

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
  const { locale, dict } = useLocale();
  const text = LOCALIZED[locale] ?? LOCALIZED.NL;
  const faqData = dict.categoryFaqs.zippo;

  return (
    <div>

      {/* ══════════════════════════════════════════════
          SECTION 1 - WHY ZIPPO  (white bg)
      ══════════════════════════════════════════════ */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#f5a623]/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
              {text.aboutLabel}
            </span>
          </div>

          <div className="mb-10">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h2 className="font-montserrat font-black text-[#2b3e51] leading-[0.88] tracking-tighter text-[clamp(38px,5vw,72px)]">
                {text.headlineDark}
              </h2>
              <span className="font-montserrat font-black text-[#f5a623] leading-[0.88] tracking-tighter text-[clamp(38px,5vw,72px)]">
                {text.headlineAccent}
              </span>
            </div>
            <p className="text-gray-500 text-[13px] mt-4 max-w-lg leading-relaxed">
              {text.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* Hero card - spans 2 cols */}
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
                  {text.hero.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-md">
                  {text.hero.body}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#f5a623]">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">{text.hero.caption}</span>
                  <div className="h-px flex-1 bg-[#f5a623]/30 max-w-[60px]" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 group hover:border-[#f5a623]/40 hover:bg-[#f5a623]/3 transition-all duration-300">
              <RefreshCw className="size-5 text-gray-400 mb-4 group-hover:text-[#f5a623] transition-colors duration-300" />
              <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] tracking-tight mb-2">
                {text.card2.title}
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                {text.card2.body}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 group hover:border-[#f5a623]/40 hover:bg-[#f5a623]/3 transition-all duration-300">
              <Wind className="size-5 text-gray-400 mb-4 group-hover:text-[#f5a623] transition-colors duration-300" />
              <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] tracking-tight mb-2">
                {text.card3.title}
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                {text.card3.body}
              </p>
            </div>

            {/* Card 4 */}
            <div className="sm:col-span-2 lg:col-span-1 bg-gray-50 border border-gray-200 rounded-sm p-6 group hover:border-[#f5a623]/40 hover:bg-[#f5a623]/3 transition-all duration-300">
              <Star className="size-5 text-gray-400 mb-4 group-hover:text-[#f5a623] transition-colors duration-300" />
              <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] tracking-tight mb-2">
                {text.card4.title}
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                {text.card4.body}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 - HOW TO REFILL  (white bg)
      ══════════════════════════════════════════════ */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 mb-3">
                {text.stepsLabel}
              </p>
              <h2 className="font-montserrat font-black text-[#2b3e51] tracking-tight leading-tight text-[clamp(28px,3.5vw,48px)]">
                {text.stepsHeadingLine1}<br />{text.stepsHeadingLine2}
              </h2>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f5a623]/6 border border-[#f5a623]/20 rounded-sm max-w-xs">
              <Flame className="size-4 text-[#f5a623] mt-0.5 flex-shrink-0" />
              <p className="text-[11px] text-gray-500 leading-relaxed">
                <span className="text-gray-700 font-bold">{text.stepsTipBold}</span> {text.stepsTipBody}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {text.steps.map((step) => (
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

        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 - FAQ
          Left border treatment, numbered tags
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0d1117] border-t border-white/6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start">

            <div className="lg:sticky lg:top-10">
              <div className="relative mb-6 inline-block">
                <span
                  className="font-montserrat font-black text-white/5 leading-none select-none pointer-events-none absolute -top-4 -left-4 text-[8rem]"
                  aria-hidden
                >
                  ?
                </span>
                <h2 className="font-montserrat font-black text-white tracking-tight leading-tight relative text-[clamp(28px,3vw,40px)]">
                  {text.faqHeadingDark}<br />
                  <span className="text-[#f5a623]">{text.faqHeadingAccent}</span>
                </h2>
              </div>
              <p className="text-[12px] text-white/35 leading-relaxed mb-8">
                {faqData.intro}
              </p>

              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                  {text.faqNotFound}
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
                    Lange Hezelstraat 26, Nijmegen
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

            <div className="space-y-1">
              {faqData.items.map((faq, i) => (
                <FaqItem key={i} index={i} q={faq.q} a={faq.a} />
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
