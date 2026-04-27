"use client";

import { Scissors, Award, Wind, Flame, Hand, Wrench } from "lucide-react";
import CategoryInfoSection, { type CategoryInfoData } from "./CategoryInfoSection";

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
        "Een Bookwill-knipper sluit met de strakheid van een chirurgisch instrument. Faro-asbakken zijn gegoten messing, geen geperst plaatwerk. Fox levert sigarenetuis met cederhouten interieur — hetzelfde hout dat in serieuze humidoren zit. Dit is gereedschap voor wie weet waarom een sigaar tien jaar in de kelder mag liggen voor hij rookt.",
    },
    {
      icon: Scissors,
      title: "Een schone snede maakt de trek",
      body:
        "Een rafelige snede plet de wikkel en blokkeert de trek. Een scherpe guillotine-knipper of V-cutter laat het binnenwerk intact. Onze knippers zijn vervangbaar te slijpen — geen wegwerpartikel.",
    },
    {
      icon: Wind,
      title: "Asbakken die niet vegen",
      body:
        "Sigaren-as is fijner en lichter dan sigarettenas. Speciale sigarenasbakken hebben bredere uitsparingen, gewicht in de basis en hoge zijkanten — geen as die wegwaait, geen rommel op de tafel.",
    },
    {
      icon: Flame,
      title: "Etuis met cederhout",
      body:
        "Een sigarenetui van Bookwill of Fox heeft cederhouten binnenkant. Cederhout houdt vocht vast, weert tabakskevers af en geeft de sigaar de subtiele kruidige toon die je in serieuze humidoren proeft.",
    },
  ],

  stepsLabel: "Een sigaar knippen — Stap voor stap",
  stepsHeading: "In vier stappen<br />klaar voor de match.",
  stepsTipIcon: Hand,
  stepsTip:
    "<span class='text-gray-700 font-bold'>Tip:</span> Knip nooit dieper dan de schouder van de sigaar — daaronder valt de wikkel uit elkaar.",
  steps: [
    {
      n: "01",
      title: "Bekijk de sigaar",
      desc: "Houd de cap tegen het licht. Je ziet de schouderlijn — daar net voor knip je, niet erin.",
    },
    {
      n: "02",
      title: "Plaats de knipper",
      desc: "Hou de sigaar verticaal, schuif de knipper over de cap tot tegen de stop. Geen wiebel.",
    },
    {
      n: "03",
      title: "Snel en beslissend",
      desc: "Eén kordate beweging — geen halve poging. Een aarzelende snede plet juist wat je wilt openen.",
    },
    {
      n: "04",
      title: "Controleer de trek",
      desc: "Blaas zachtjes door de sigaar zonder hem aan te steken. Te veel weerstand? Knip iets dieper.",
    },
  ],
  bottomBadgeIcon: Wrench,
  bottomBadgeText: "Knippers slijpen & asbakken polijsten — vraag in de winkel",

  faqHeadingDark: "Vragen over",
  faqHeadingAccent: "sigaren-accessoires?",
  faqIntro:
    "Welke knipper voor welke sigaar, hoe je een goede asbak herkent, en wat een etui echt moet kunnen — eerlijk uitgelegd.",
  faqs: [
    {
      q: "Welke knipper is het beste — guillotine, V-cut of punch?",
      a: "Voor de meeste sigaren: guillotine — een rechte snede, voorspelbare trek. V-cut concentreert de rook richting tong en accentueert smaak — populair bij robusto's. Punch maakt een klein gaatje, geeft een geconcentreerde trek maar minder rookvolume. Beginners kiezen guillotine; daar gaat zelden iets mis.",
    },
    {
      q: "Kan ik mijn knipper laten slijpen?",
      a: "Ja, kwalitatieve knippers zoals Bookwill en Faro hebben verwisselbare of slijpbare lemmeten. Breng hem langs in onze winkel; voor een paar euro snijdt hij weer als nieuw. Goedkope wegwerpknippers laten zich helaas niet slijpen — daarom investeer je beter in één goede.",
    },
    {
      q: "Waarom een sigaren-asbak en geen gewone?",
      a: "Een sigaar duurt 30–90 minuten. In die tijd vormt zich een lange askolom die je liever niet afklopt. Sigaren-asbakken hebben uitsparingen breed genoeg om een sigaar rustig neer te leggen zonder dat de as eraf valt, en zijn diep genoeg om geen geur te verspreiden.",
    },
    {
      q: "Hoe lang houdt een sigaar in een etui?",
      a: "In een goed cederhouten etui blijft een sigaar 5–7 dagen in optimale conditie — genoeg voor een lang weekend of zakenreis. Voor langer (weken tot maanden) is een humidor met vocht-regulatie nodig. Een etui is voor onderweg, niet voor opslag.",
    },
    {
      q: "Welke kant van de sigaar knip ik?",
      a: "De cap — de gesloten, afgeronde kant. De andere kant (de voet) is de open kant die je aansteekt. Knip altijd net voor de schouder, het zichtbare lijntje waar de cap aan de wikkel is bevestigd. Knip je in de schouder, dan valt de wikkel uit.",
    },
    {
      q: "Mag ik mijn sigarenetui in de koelkast bewaren?",
      a: "Liever niet. Koelkasten zijn droog en koud — slecht voor sigaren. Bewaar het etui op kamertemperatuur (16–22°C), uit direct zonlicht. Een lade of kast is prima. Een humidor blijft de gouden standaard voor langere bewaring.",
    },
    {
      q: "Is een dure asbak echt beter dan een goedkope?",
      a: "Voor sigaren: ja. Goedkope asbakken zijn vaak licht, plaatstalen, met scherpe randen. Een Faro-asbak is gegoten massief, weegt 800g+, kantelt niet en heeft gepolijste uitsparingen die de sigaar niet beschadigen. Het verschil voel je elke avond opnieuw.",
    },
  ],
};

export default function KnippersAsbakkenInfoSection() {
  return <CategoryInfoSection data={DATA} />;
}
