"use client";

import { Scissors, Award, Wind, Flame, Hand, Wrench } from "lucide-react";
import CategoryInfoSection, { type CategoryInfoData } from "./CategoryInfoSection";
import { useLocale } from "@/i18n/LocaleContext";

const DATA: CategoryInfoData = {
  aboutLabel: "Alles over sigaren-accessoires",
  headlineDark: "Het juiste",
  headlineAccent: "gereedschap.",
  introBody:
    "Een sigaar verdient meer dan een keukenmes en een schoteltje. Een scherpe knipper geeft een nette snede, een goede asbak voorkomt asvegen en een sigarenetui beschermt tegen droogte. Klein gereedschap, groot verschil.",

  bento: [
    {
      icon: Award,
      hero: true,
      heroBgNumber: "EST",
      heroTagline: "Bookwill · Faro · Fox",
      title: "Precisie die de sigaar respecteert",
      body:
        "Een Bookwill-knipper sluit met de strakheid van een chirurgisch instrument. Faro-asbakken zijn gegoten messing, geen geperst plaatwerk. Fox levert sigarenetuis met cederhouten interieur hetzelfde hout dat in serieuze humidoren zit. Dit is gereedschap voor wie weet waarom een sigaar tien jaar in de kelder mag liggen voor hij rookt.",
    },
    {
      icon: Scissors,
      title: "Een schone snede maakt de trek",
      body:
        "Een rafelige snede plet de wikkel en blokkeert de trek. Een scherpe guillotine-knipper of V-cutter laat het binnenwerk intact. Onze knippers zijn vervangbaar te slijpen geen wegwerpartikel.",
    },
    {
      icon: Wind,
      title: "Asbakken die niet vegen",
      body:
        "Sigaren-as is fijner en lichter dan sigarettenas. Speciale sigarenasbakken hebben bredere uitsparingen, gewicht in de basis en hoge zijkanten geen as die wegwaait, geen rommel op de tafel.",
    },
    {
      icon: Flame,
      title: "Etuis met cederhout",
      body:
        "Een sigarenetui van Bookwill of Fox heeft cederhouten binnenkant. Cederhout houdt vocht vast, weert tabakskevers af en geeft de sigaar de subtiele kruidige toon die je in serieuze humidoren proeft.",
    },
  ],

  stepsLabel: "Een sigaar knippen Stap voor stap",
  stepsHeading: "In vier stappen<br />klaar voor de match.",
  stepsTipIcon: Hand,
  stepsTip:
    "<span class='text-gray-700 font-bold'>Tip:</span> Knip nooit dieper dan de schouder van de sigaar daaronder valt de wikkel uit elkaar.",
  steps: [
    {
      n: "01",
      title: "Bekijk de sigaar",
      desc: "Houd de cap tegen het licht. Je ziet de schouderlijn daar net voor knip je, niet erin.",
    },
    {
      n: "02",
      title: "Plaats de knipper",
      desc: "Hou de sigaar verticaal, schuif de knipper over de cap tot tegen de stop. Geen wiebel.",
    },
    {
      n: "03",
      title: "Snel en beslissend",
      desc: "Eén kordate beweging geen halve poging. Een aarzelende snede plet juist wat je wilt openen.",
    },
    {
      n: "04",
      title: "Controleer de trek",
      desc: "Blaas zachtjes door de sigaar zonder hem aan te steken. Te veel weerstand? Knip iets dieper.",
    },
  ],
  bottomBadgeIcon: Wrench,
  bottomBadgeText: "Knippers slijpen & asbakken polijsten vraag in de winkel",

  faqHeadingDark: "Vragen over",
  faqHeadingAccent: "sigaren-accessoires?",
  // faqIntro + faqs are filled in at render-time from the active locale
  faqIntro: "",
  faqs: [],
};

export default function KnippersAsbakkenInfoSection() {
  const { dict } = useLocale();
  const localized = dict.categoryFaqs.knippers;
  return <CategoryInfoSection data={{ ...DATA, faqIntro: localized.intro, faqs: localized.items }} />;
}
