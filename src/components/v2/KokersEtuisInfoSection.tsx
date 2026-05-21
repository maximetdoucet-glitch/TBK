"use client";

import { Box, Filter, Sparkles, Award, Droplet, Wrench } from "lucide-react";
import CategoryInfoSection, { type CategoryInfoData } from "./CategoryInfoSection";
import { useLocale } from "@/i18n/LocaleContext";

const DATA: CategoryInfoData = {
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
      body:
        "Belbox uit Duitsland, Bookwill uit Nederland, Denicotea sinds 1925 de merken die wij voeren maken kokers en filterhouders die generaties meegaan. Geborsteld staal, echt leer, gepolijst messing. Geen plastic dat na zes maanden splijt; dit is gereedschap voor wie het verschil voelt.",
    },
    {
      icon: Filter,
      title: "Filters & houders zachtere rook",
      body:
        "Een Denicotea-houder met actieve-koolfilter vangt teer en nicotine af voordat ze je longen bereiken. Vervang het filter elke 5–10 sigaretten; je proeft direct het verschil. Verkrijgbaar voor sigaretten, sigaren en pijpen.",
    },
    {
      icon: Box,
      title: "Materialen voor elk gebruik",
      body:
        "Metaal voor de zakelijke gebruiker strak, krasvast, koel in de hand. Leer voor wie warmte en patina waardeert. Kunststof als lichtgewicht reisoptie. Maten van 10 tot 20 sigaretten, met of zonder klikvergrendeling.",
    },
    {
      icon: Sparkles,
      title: "Houdbaarheid & hygiëne",
      body:
        "Sigaretten in een koker drogen niet uit en breken niet. Filters in een afgesloten houder blijven schoon. Een goede koker is niet luxe hij is praktisch, en daarom ook na vijf jaar nog dagelijks in gebruik.",
    },
  ],

  stepsLabel: "Onderhoud Stap voor stap",
  stepsHeading: "Verzorgen in<br />vier stappen.",
  stepsTipIcon: Droplet,
  stepsTip:
    "<span class='text-gray-700 font-bold'>Tip:</span> Reinig leren etuis nooit met water gebruik een licht vochtige doek en lederconditioner.",
  steps: [
    {
      n: "01",
      title: "Reinig regelmatig",
      desc: "Veeg de binnenkant maandelijks droog. Kruimels en tabaksresten beïnvloeden geur én smaak.",
    },
    {
      n: "02",
      title: "Bewaar droog",
      desc: "Vermijd vocht. Een koker in de badkamer of buitenjas in de regen verkort de levensduur.",
    },
    {
      n: "03",
      title: "Vervang filters tijdig",
      desc: "Bij Denicotea-houders elke 5–10 sigaretten. Een verzadigd filter doet niets meer.",
    },
    {
      n: "04",
      title: "Conditioneer leer",
      desc: "Twee keer per jaar lederbalsem aanbrengen. Het leer blijft soepel en kraakt niet.",
    },
  ],
  bottomBadgeIcon: Wrench,
  bottomBadgeText: "Reserve-onderdelen & filters op voorraad in onze winkel",

  faqHeadingDark: "Vragen over",
  faqHeadingAccent: "kokers & etuis?",
  // faqIntro + faqs are filled in at render-time from the active locale
  faqIntro: "",
  faqs: [],
};

export default function KokersEtuisInfoSection() {
  const { dict } = useLocale();
  const localized = dict.categoryFaqs.kokers;
  return <CategoryInfoSection data={{ ...DATA, faqIntro: localized.intro, faqs: localized.items }} />;
}
