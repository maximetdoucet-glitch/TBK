"use client";

import { Box, Filter, Sparkles, Award, Droplet, Wrench } from "lucide-react";
import CategoryInfoSection, { type CategoryInfoData } from "./CategoryInfoSection";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/translations";

type LocalizedText = Omit<CategoryInfoData, "faqIntro" | "faqs">;

const LOCALIZED: Record<Locale, LocalizedText> = {
  NL: {
    aboutLabel: "Alles over kokers, etuis & filters",
    headlineDark: "Bescherming",
    headlineAccent: "& stijl in één.",
    introBody:
      "Een sigarettenkoker doet meer dan beschermen. Hij houdt sigaretten droog, voorkomt breuk in je broekzak en geeft een dagelijks ritueel klasse. Filters en houders maken de rook zachter en schoner.",
    bento: [
      {
        icon: Award,
        hero: true,
        heroBgNumber: "1925",
        heroTagline: "Belbox · Bookwill · Denicotea",
        title: "Vakmanschap dat al een eeuw meegaat",
        body: "Belbox uit Duitsland, Bookwill uit Nederland, Denicotea sinds 1925 - de merken die wij voeren maken kokers en filterhouders die generaties meegaan. Geborsteld staal, echt leer, gepolijst messing. Geen plastic dat na zes maanden splijt; dit is gereedschap voor wie het verschil voelt.",
      },
      {
        icon: Filter,
        title: "Filters & houders - zachtere rook",
        body: "Een Denicotea-houder met actieve-koolfilter vangt teer en nicotine af voordat ze je longen bereiken. Vervang het filter elke 5-10 sigaretten; je proeft direct het verschil. Verkrijgbaar voor sigaretten, sigaren en pijpen.",
      },
      {
        icon: Box,
        title: "Materialen voor elk gebruik",
        body: "Metaal voor de zakelijke gebruiker - strak, krasvast, koel in de hand. Leer voor wie warmte en patina waardeert. Kunststof als lichtgewicht reisoptie. Maten van 10 tot 20 sigaretten, met of zonder klikvergrendeling.",
      },
      {
        icon: Sparkles,
        title: "Houdbaarheid & hygiëne",
        body: "Sigaretten in een koker drogen niet uit en breken niet. Filters in een afgesloten houder blijven schoon. Een goede koker is niet luxe - hij is praktisch, en daarom ook na vijf jaar nog dagelijks in gebruik.",
      },
    ],
    stepsLabel: "Onderhoud - Stap voor stap",
    stepsHeading: "Verzorgen in<br />vier stappen.",
    stepsTipIcon: Droplet,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Tip:</span> Reinig leren etuis nooit met water - gebruik een licht vochtige doek en lederconditioner.",
    steps: [
      { n: "01", title: "Reinig regelmatig", desc: "Veeg de binnenkant maandelijks droog. Kruimels en tabaksresten beïnvloeden geur én smaak." },
      { n: "02", title: "Bewaar droog", desc: "Vermijd vocht. Een koker in de badkamer of buitenjas in de regen verkort de levensduur." },
      { n: "03", title: "Vervang filters tijdig", desc: "Bij Denicotea-houders elke 5-10 sigaretten. Een verzadigd filter doet niets meer." },
      { n: "04", title: "Conditioneer leer", desc: "Twee keer per jaar lederbalsem aanbrengen. Het leer blijft soepel en kraakt niet." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Reserve-onderdelen & filters op voorraad in onze winkels",
    faqHeadingDark: "Vragen over",
    faqHeadingAccent: "kokers & etuis?",
  },
  EN: {
    aboutLabel: "All about cases, sleeves & filters",
    headlineDark: "Protection",
    headlineAccent: "& style in one.",
    introBody:
      "A cigarette case does more than protect. It keeps cigarettes dry, prevents breakage in your pocket and gives a daily ritual a touch of class. Filters and holders make the smoke softer and cleaner.",
    bento: [
      {
        icon: Award,
        hero: true,
        heroBgNumber: "1925",
        heroTagline: "Belbox · Bookwill · Denicotea",
        title: "Craftsmanship that lasts a century",
        body: "Belbox from Germany, Bookwill from the Netherlands, Denicotea since 1925 - the brands we carry make cases and filter holders built to last generations. Brushed steel, genuine leather, polished brass. No plastic that splits after six months; this is gear for those who feel the difference.",
      },
      {
        icon: Filter,
        title: "Filters & holders - softer smoke",
        body: "A Denicotea holder with activated-charcoal filter captures tar and nicotine before they reach your lungs. Change the filter every 5-10 cigarettes; you'll taste the difference immediately. Available for cigarettes, cigars and pipes.",
      },
      {
        icon: Box,
        title: "Materials for every use",
        body: "Metal for the professional user - sleek, scratch-resistant, cool in the hand. Leather for those who value warmth and patina. Plastic as a lightweight travel option. Sizes from 10 to 20 cigarettes, with or without click closure.",
      },
      {
        icon: Sparkles,
        title: "Durability & hygiene",
        body: "Cigarettes in a case don't dry out or break. Filters in a closed holder stay clean. A good case is not luxury - it's practical, and that's why it's still in daily use after five years.",
      },
    ],
    stepsLabel: "Maintenance - step by step",
    stepsHeading: "Care in<br />four steps.",
    stepsTipIcon: Droplet,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Tip:</span> Never clean leather sleeves with water - use a slightly damp cloth and leather conditioner.",
    steps: [
      { n: "01", title: "Clean regularly", desc: "Wipe the interior dry monthly. Crumbs and tobacco residue affect both scent and taste." },
      { n: "02", title: "Store dry", desc: "Avoid moisture. A case in the bathroom or coat pocket in the rain shortens its life." },
      { n: "03", title: "Replace filters on time", desc: "On Denicotea holders, every 5-10 cigarettes. A saturated filter does nothing anymore." },
      { n: "04", title: "Condition the leather", desc: "Apply leather balm twice a year. The leather stays supple and doesn't crack." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Replacement parts & filters in stock in our shops",
    faqHeadingDark: "Questions about",
    faqHeadingAccent: "cases & sleeves?",
  },
  DE: {
    aboutLabel: "Alles über Etuis, Hüllen & Filter",
    headlineDark: "Schutz",
    headlineAccent: "& Stil in einem.",
    introBody:
      "Ein Zigarettenetui tut mehr als schützen. Es hält Zigaretten trocken, verhindert Bruch in der Hosentasche und verleiht einem täglichen Ritual Klasse. Filter und Halter machen den Rauch weicher und sauberer.",
    bento: [
      {
        icon: Award,
        hero: true,
        heroBgNumber: "1925",
        heroTagline: "Belbox · Bookwill · Denicotea",
        title: "Handwerk, das ein Jahrhundert überdauert",
        body: "Belbox aus Deutschland, Bookwill aus den Niederlanden, Denicotea seit 1925 - die Marken in unserem Sortiment fertigen Etuis und Filterhalter, die Generationen überdauern. Gebürsteter Stahl, echtes Leder, poliertes Messing. Kein Plastik, das nach sechs Monaten reißt; das ist Werkzeug für Kenner.",
      },
      {
        icon: Filter,
        title: "Filter & Halter - weicherer Rauch",
        body: "Ein Denicotea-Halter mit Aktivkohlefilter fängt Teer und Nikotin ab, bevor sie in die Lunge gelangen. Wechseln Sie den Filter alle 5-10 Zigaretten; Sie schmecken den Unterschied sofort. Erhältlich für Zigaretten, Zigarren und Pfeifen.",
      },
      {
        icon: Box,
        title: "Materialien für jeden Einsatz",
        body: "Metall für den professionellen Nutzer - schnörkellos, kratzfest, kühl in der Hand. Leder für alle, die Wärme und Patina schätzen. Kunststoff als leichte Reiseoption. Größen von 10 bis 20 Zigaretten, mit oder ohne Klickverschluss.",
      },
      {
        icon: Sparkles,
        title: "Haltbarkeit & Hygiene",
        body: "Zigaretten im Etui trocknen nicht aus und brechen nicht. Filter im geschlossenen Halter bleiben sauber. Ein gutes Etui ist kein Luxus - es ist praktisch, und deshalb auch nach fünf Jahren noch im täglichen Gebrauch.",
      },
    ],
    stepsLabel: "Pflege - Schritt für Schritt",
    stepsHeading: "Pflege in<br />vier Schritten.",
    stepsTipIcon: Droplet,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Tipp:</span> Lederhüllen niemals mit Wasser reinigen - verwenden Sie ein leicht feuchtes Tuch und Lederconditioner.",
    steps: [
      { n: "01", title: "Regelmäßig reinigen", desc: "Wischen Sie das Innere monatlich trocken aus. Krümel und Tabakreste beeinträchtigen Geruch und Geschmack." },
      { n: "02", title: "Trocken lagern", desc: "Vermeiden Sie Feuchtigkeit. Ein Etui im Bad oder in der Außenjacke bei Regen verkürzt die Lebensdauer." },
      { n: "03", title: "Filter rechtzeitig wechseln", desc: "Bei Denicotea-Haltern alle 5-10 Zigaretten. Ein gesättigter Filter wirkt nicht mehr." },
      { n: "04", title: "Leder pflegen", desc: "Zweimal jährlich Lederbalsam auftragen. Das Leder bleibt geschmeidig und reißt nicht ein." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Ersatzteile & Filter in unseren Geschäften vorrätig",
    faqHeadingDark: "Fragen zu",
    faqHeadingAccent: "Etuis & Hüllen?",
  },
  FR: {
    aboutLabel: "Tout sur les étuis, pochettes & filtres",
    headlineDark: "Protection",
    headlineAccent: "& style en un.",
    introBody:
      "Un étui à cigarettes fait plus que protéger. Il garde les cigarettes au sec, évite les casses en poche et donne du cachet à un rituel quotidien. Filtres et fume-cigarette rendent la fumée plus douce et plus propre.",
    bento: [
      {
        icon: Award,
        hero: true,
        heroBgNumber: "1925",
        heroTagline: "Belbox · Bookwill · Denicotea",
        title: "Un savoir-faire qui traverse le siècle",
        body: "Belbox d'Allemagne, Bookwill des Pays-Bas, Denicotea depuis 1925 - les marques de notre sélection fabriquent des étuis et fume-cigarette faits pour durer des générations. Acier brossé, cuir véritable, laiton poli. Pas de plastique qui se fend après six mois ; c'est de l'outillage pour qui sait reconnaître la différence.",
      },
      {
        icon: Filter,
        title: "Filtres & fume-cigarette - fumée plus douce",
        body: "Un fume-cigarette Denicotea à filtre charbon actif retient le goudron et la nicotine avant qu'ils n'atteignent les poumons. Changez le filtre toutes les 5 à 10 cigarettes ; la différence se sent immédiatement. Disponible pour cigarettes, cigares et pipes.",
      },
      {
        icon: Box,
        title: "Matériaux pour chaque usage",
        body: "Le métal pour l'utilisateur professionnel - sobre, résistant aux rayures, frais en main. Le cuir pour qui apprécie la chaleur et la patine. Le plastique comme option voyage légère. Capacités de 10 à 20 cigarettes, avec ou sans fermeture clic.",
      },
      {
        icon: Sparkles,
        title: "Durabilité & hygiène",
        body: "Les cigarettes dans un étui ne sèchent pas et ne cassent pas. Les filtres dans un fume-cigarette fermé restent propres. Un bon étui n'est pas un luxe - il est pratique, et c'est pourquoi il reste en usage quotidien après cinq ans.",
      },
    ],
    stepsLabel: "Entretien - étape par étape",
    stepsHeading: "Entretien en<br />quatre étapes.",
    stepsTipIcon: Droplet,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Astuce :</span> Ne nettoyez jamais une pochette en cuir à l'eau - utilisez un chiffon légèrement humide et un soin pour cuir.",
    steps: [
      { n: "01", title: "Nettoyez régulièrement", desc: "Essuyez l'intérieur à sec chaque mois. Miettes et résidus de tabac altèrent l'odeur et le goût." },
      { n: "02", title: "Conservez au sec", desc: "Évitez l'humidité. Un étui dans la salle de bain ou un manteau sous la pluie raccourcit la durée de vie." },
      { n: "03", title: "Changez les filtres à temps", desc: "Sur les fume-cigarette Denicotea, toutes les 5 à 10 cigarettes. Un filtre saturé ne sert plus à rien." },
      { n: "04", title: "Nourrissez le cuir", desc: "Appliquez un baume cuir deux fois par an. Le cuir reste souple et ne craquelle pas." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Pièces & filtres de rechange en stock dans nos boutiques",
    faqHeadingDark: "Questions sur",
    faqHeadingAccent: "étuis & pochettes ?",
  },
};

export default function KokersEtuisInfoSection() {
  const { locale, dict } = useLocale();
  const text = LOCALIZED[locale] ?? LOCALIZED.NL;
  const faq = dict.categoryFaqs.kokers;
  return <CategoryInfoSection data={{ ...text, faqIntro: faq.intro, faqs: faq.items }} />;
}
