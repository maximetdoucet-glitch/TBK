import { Box, Filter, Sparkles, Award, Droplet, Wrench } from "lucide-react";
import CategoryInfoSection, { type CategoryInfoData } from "./CategoryInfoSection";

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
        "Belbox uit Duitsland, Bookwill uit Nederland, Denicotea sinds 1925 — de merken die wij voeren maken kokers en filterhouders die generaties meegaan. Geborsteld staal, echt leer, gepolijst messing. Geen plastic dat na zes maanden splijt; dit is gereedschap voor wie het verschil voelt.",
    },
    {
      icon: Filter,
      title: "Filters & houders — zachtere rook",
      body:
        "Een Denicotea-houder met actieve-koolfilter vangt teer en nicotine af voordat ze je longen bereiken. Vervang het filter elke 5–10 sigaretten; je proeft direct het verschil. Verkrijgbaar voor sigaretten, sigaren en pijpen.",
    },
    {
      icon: Box,
      title: "Materialen voor elk gebruik",
      body:
        "Metaal voor de zakelijke gebruiker — strak, krasvast, koel in de hand. Leer voor wie warmte en patina waardeert. Kunststof als lichtgewicht reisoptie. Maten van 10 tot 20 sigaretten, met of zonder klikvergrendeling.",
    },
    {
      icon: Sparkles,
      title: "Houdbaarheid & hygiëne",
      body:
        "Sigaretten in een koker drogen niet uit en breken niet. Filters in een afgesloten houder blijven schoon. Een goede koker is niet luxe — hij is praktisch, en daarom ook na vijf jaar nog dagelijks in gebruik.",
    },
  ],

  stepsLabel: "Onderhoud — Stap voor stap",
  stepsHeading: "Verzorgen in<br />vier stappen.",
  stepsTipIcon: Droplet,
  stepsTip:
    "<span class='text-gray-700 font-bold'>Tip:</span> Reinig leren etuis nooit met water — gebruik een licht vochtige doek en lederconditioner.",
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
  faqIntro:
    "Welk materiaal past bij jou, hoe vaak vervang je filters, en waarom een houder echt verschil maakt — alles eerlijk uitgelegd.",
  faqs: [
    {
      q: "Wat is het verschil tussen een koker en een etui?",
      a: "Een koker is meestal van metaal, opent met een klikmechanisme en houdt sigaretten op hun plaats. Een etui is vaak van leer of textiel, soepeler in de hand en beschermt vooral tegen krassen en vocht. Beiden voorkomen breuk — kies op basis van stijl en gebruik.",
    },
    {
      q: "Hoe vaak moet ik een filter in een sigarettenhouder vervangen?",
      a: "Bij een Denicotea-houder met actieve-koolfilter elke 5 tot 10 sigaretten. Je merkt het zelf: de trek wordt zwaarder en de smaak vlakker als het filter verzadigd is. Reservefilters bestel je per setje van 10 of 50.",
    },
    {
      q: "Kan ik mijn leren etui wassen?",
      a: "Niet met water. Stof verwijder je met een droge doek; vlekken behandel je met een licht vochtige doek en speciale lederreiniger. Twee keer per jaar lederbalsem houdt het soepel. Onderdompelen of in de wasmachine vernielt het leer onherroepelijk.",
    },
    {
      q: "Welke kokergrootte heb ik nodig?",
      a: "Standaard 84mm sigaretten passen in nagenoeg alle kokers in onze collectie. Voor 100mm (lange) sigaretten kies je expliciet een 'long' uitvoering. Capaciteit varieert van 10 (zakformaat) tot 20 (een hele pakje).",
    },
    {
      q: "Werken filterhouders ook bij sigaren?",
      a: "Voor sigaren gebruik je speciale sigarenhouders of pijpfilters — ze hebben een grotere doorgang en vaak een andere filterstructuur. Onze sigaarafdeling onder Knippers & Asbakken heeft de bijpassende accessoires.",
    },
    {
      q: "Is een houder met filter beter dan zonder?",
      a: "Voor wie minder teer wil inademen: ja, aanzienlijk. Tests tonen 30–60% reductie in teer en nicotine bij goed onderhouden actieve-koolfilters. Voor wie de pure smaak wil: nee, een houder zonder filter behoudt het volle aroma.",
    },
    {
      q: "Hoe lang gaat een goede koker mee?",
      a: "Bij normaal gebruik decennia. Metalen kokers van Belbox of Denicotea zijn vaak nog functioneel na 30+ jaar — alleen het scharniermechanisme kan slijten. Leer ontwikkelt patina en wordt mooier met de jaren, mits goed onderhouden.",
    },
  ],
};

export default function KokersEtuisInfoSection() {
  return <CategoryInfoSection data={DATA} />;
}
