"use client";

import { Scissors, Award, Wind, Flame, Hand, Wrench } from "lucide-react";
import CategoryInfoSection, { type CategoryInfoData } from "./CategoryInfoSection";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/translations";

type LocalizedText = Omit<CategoryInfoData, "faqIntro" | "faqs">;

const LOCALIZED: Record<Locale, LocalizedText> = {
  NL: {
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
        body: "Een Bookwill-knipper sluit met de strakheid van een chirurgisch instrument. Faro-asbakken zijn gegoten messing, geen geperst plaatwerk. Fox levert sigarenetuis met cederhouten interieur - hetzelfde hout dat in serieuze humidoren zit. Dit is gereedschap voor wie weet waarom een sigaar tien jaar in de kelder mag liggen voor hij rookt.",
      },
      {
        icon: Scissors,
        title: "Een schone snede maakt de trek",
        body: "Een rafelige snede plet de wikkel en blokkeert de trek. Een scherpe guillotine-knipper of V-cutter laat het binnenwerk intact. Onze knippers zijn vervangbaar te slijpen - geen wegwerpartikel.",
      },
      {
        icon: Wind,
        title: "Asbakken die niet vegen",
        body: "Sigaren-as is fijner en lichter dan sigarettenas. Speciale sigarenasbakken hebben bredere uitsparingen, gewicht in de basis en hoge zijkanten - geen as die wegwaait, geen rommel op de tafel.",
      },
      {
        icon: Flame,
        title: "Etuis met cederhout",
        body: "Een sigarenetui van Bookwill of Fox heeft cederhouten binnenkant. Cederhout houdt vocht vast, weert tabakskevers af en geeft de sigaar de subtiele kruidige toon die je in serieuze humidoren proeft.",
      },
    ],
    stepsLabel: "Een sigaar knippen - Stap voor stap",
    stepsHeading: "In vier stappen<br />klaar voor de match.",
    stepsTipIcon: Hand,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Tip:</span> Knip nooit dieper dan de schouder van de sigaar - daaronder valt de wikkel uit elkaar.",
    steps: [
      { n: "01", title: "Bekijk de sigaar", desc: "Houd de cap tegen het licht. Je ziet de schouderlijn - daar net voor knip je, niet erin." },
      { n: "02", title: "Plaats de knipper", desc: "Hou de sigaar verticaal, schuif de knipper over de cap tot tegen de stop. Geen wiebel." },
      { n: "03", title: "Snel en beslissend", desc: "Eén kordate beweging - geen halve poging. Een aarzelende snede plet juist wat je wilt openen." },
      { n: "04", title: "Controleer de trek", desc: "Blaas zachtjes door de sigaar zonder hem aan te steken. Te veel weerstand? Knip iets dieper." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Knippers slijpen via Bookwill - vraag in de winkel",
    faqHeadingDark: "Vragen over",
    faqHeadingAccent: "sigaren-accessoires?",
  },
  EN: {
    aboutLabel: "All about cigar accessories",
    headlineDark: "The right",
    headlineAccent: "tools.",
    introBody:
      "A cigar deserves more than a kitchen knife and a saucer. A sharp cutter makes a clean cut, a good ashtray prevents ash from spilling and a cigar case protects against dryness. Small tools, big difference.",
    bento: [
      {
        icon: Award,
        hero: true,
        heroBgNumber: "EST",
        heroTagline: "Bookwill · Faro · Fox",
        title: "Precision that respects the cigar",
        body: "A Bookwill cutter closes with the tightness of a surgical instrument. Faro ashtrays are cast brass, not stamped sheet metal. Fox makes cigar cases with cedar-wood interior - the same wood found in serious humidors. This is gear for those who understand why a cigar may rest in the cellar for ten years before being smoked.",
      },
      {
        icon: Scissors,
        title: "A clean cut makes the draw",
        body: "A frayed cut crushes the wrapper and blocks the draw. A sharp guillotine cutter or V-cutter leaves the filler intact. Our cutters have replaceable and sharpenable blades - not disposable.",
      },
      {
        icon: Wind,
        title: "Ashtrays that don't spill",
        body: "Cigar ash is finer and lighter than cigarette ash. Dedicated cigar ashtrays have wider rests, weight in the base and high sides - no ash blowing away, no mess on the table.",
      },
      {
        icon: Flame,
        title: "Cases with cedar wood",
        body: "A Bookwill or Fox cigar case is lined with cedar wood. Cedar holds humidity, repels tobacco beetles and gives the cigar the subtle spicy note you taste in serious humidors.",
      },
    ],
    stepsLabel: "Cutting a cigar - step by step",
    stepsHeading: "Match-ready in<br />four steps.",
    stepsTipIcon: Hand,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Tip:</span> Never cut past the shoulder of the cigar - below that the wrapper unravels.",
    steps: [
      { n: "01", title: "Inspect the cigar", desc: "Hold the cap to the light. You'll see the shoulder line - cut just before it, not into it." },
      { n: "02", title: "Place the cutter", desc: "Hold the cigar vertically, slide the cutter over the cap up to the stop. No wobble." },
      { n: "03", title: "Quick and decisive", desc: "One firm motion - no half attempt. A hesitant cut crushes exactly what you want to open." },
      { n: "04", title: "Check the draw", desc: "Blow gently through the cigar without lighting it. Too much resistance? Cut a little deeper." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Cutter sharpening via Bookwill - ask in the shop",
    faqHeadingDark: "Questions about",
    faqHeadingAccent: "cigar accessories?",
  },
  DE: {
    aboutLabel: "Alles über Zigarrenzubehör",
    headlineDark: "Das richtige",
    headlineAccent: "Werkzeug.",
    introBody:
      "Eine Zigarre verdient mehr als ein Küchenmesser und eine Untertasse. Ein scharfer Cutter macht einen sauberen Schnitt, ein guter Aschenbecher verhindert verteilte Asche und ein Zigarrenetui schützt vor Austrocknung. Kleines Werkzeug, großer Unterschied.",
    bento: [
      {
        icon: Award,
        hero: true,
        heroBgNumber: "EST",
        heroTagline: "Bookwill · Faro · Fox",
        title: "Präzision, die die Zigarre respektiert",
        body: "Ein Bookwill-Cutter schließt mit der Präzision eines chirurgischen Instruments. Faro-Aschenbecher sind aus Gussmessing, nicht aus gepresstem Blech. Fox baut Zigarrenetuis mit Zedernholzauskleidung - dasselbe Holz wie in seriösen Humidoren. Werkzeug für alle, die wissen, warum eine Zigarre zehn Jahre im Keller liegen darf, bevor sie geraucht wird.",
      },
      {
        icon: Scissors,
        title: "Ein sauberer Schnitt entscheidet über den Zug",
        body: "Ein ausgefranster Schnitt zerdrückt das Deckblatt und blockiert den Zug. Ein scharfer Guillotine-Cutter oder V-Cutter lässt die Einlage intakt. Unsere Cutter haben austauschbare und nachschleifbare Klingen - kein Wegwerfartikel.",
      },
      {
        icon: Wind,
        title: "Aschenbecher, die nicht verteilen",
        body: "Zigarrenasche ist feiner und leichter als Zigarettenasche. Spezielle Zigarrenaschenbecher haben breitere Auflagen, Gewicht im Boden und hohe Seiten - keine wegfliegende Asche, kein Schmutz auf dem Tisch.",
      },
      {
        icon: Flame,
        title: "Etuis mit Zedernholz",
        body: "Ein Zigarrenetui von Bookwill oder Fox ist innen mit Zedernholz ausgekleidet. Zedernholz hält Feuchtigkeit, wehrt Tabakkäfer ab und verleiht der Zigarre die subtile würzige Note, die man in seriösen Humidoren schmeckt.",
      },
    ],
    stepsLabel: "Zigarre schneiden - Schritt für Schritt",
    stepsHeading: "In vier Schritten<br />bereit für die Zündung.",
    stepsTipIcon: Hand,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Tipp:</span> Schneiden Sie nie tiefer als die Schulter der Zigarre - darunter zerfällt das Deckblatt.",
    steps: [
      { n: "01", title: "Zigarre prüfen", desc: "Halten Sie die Kappe ins Licht. Sie sehen die Schulterlinie - direkt davor wird geschnitten, nicht hinein." },
      { n: "02", title: "Cutter ansetzen", desc: "Halten Sie die Zigarre senkrecht, schieben Sie den Cutter über die Kappe bis zum Anschlag. Kein Wackeln." },
      { n: "03", title: "Schnell und entschlossen", desc: "Eine bestimmte Bewegung - kein halber Versuch. Ein zögerlicher Schnitt zerdrückt genau das, was Sie öffnen wollen." },
      { n: "04", title: "Zug prüfen", desc: "Blasen Sie sanft durch die Zigarre, ohne sie anzuzünden. Zu viel Widerstand? Schneiden Sie etwas tiefer." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Cutter-Schliff über Bookwill - fragen Sie im Geschäft",
    faqHeadingDark: "Fragen zu",
    faqHeadingAccent: "Zigarrenzubehör?",
  },
  FR: {
    aboutLabel: "Tout sur les accessoires à cigares",
    headlineDark: "Le bon",
    headlineAccent: "outillage.",
    introBody:
      "Un cigare mérite mieux qu'un couteau de cuisine et une soucoupe. Un coupe-cigare bien affûté fait une coupe nette, un bon cendrier évite la cendre éparpillée et un étui à cigares protège du dessèchement. Petit outillage, grande différence.",
    bento: [
      {
        icon: Award,
        hero: true,
        heroBgNumber: "EST",
        heroTagline: "Bookwill · Faro · Fox",
        title: "Une précision qui respecte le cigare",
        body: "Un coupe-cigare Bookwill se ferme avec la précision d'un instrument chirurgical. Les cendriers Faro sont en laiton coulé, pas en tôle emboutie. Fox fabrique des étuis à cigares à intérieur en bois de cèdre - le même bois que dans les caves sérieuses. Un outillage pour qui sait pourquoi un cigare peut reposer dix ans en cave avant d'être fumé.",
      },
      {
        icon: Scissors,
        title: "Une coupe nette fait le tirage",
        body: "Une coupe effilochée écrase la cape et bloque le tirage. Un coupe-cigare guillotine ou V-cut bien affûté laisse la tripe intacte. Nos coupe-cigares ont des lames remplaçables et ré-affûtables - pas un consommable.",
      },
      {
        icon: Wind,
        title: "Des cendriers qui ne dispersent pas",
        body: "La cendre de cigare est plus fine et plus légère que celle des cigarettes. Les cendriers à cigares dédiés ont des reposoirs plus larges, du poids dans la base et des bords hauts - pas de cendre qui s'envole, pas de désordre sur la table.",
      },
      {
        icon: Flame,
        title: "Étuis en cèdre",
        body: "Un étui à cigares Bookwill ou Fox est doublé de cèdre. Le cèdre retient l'humidité, éloigne les coléoptères du tabac et apporte au cigare la note épicée subtile que l'on retrouve dans les caves sérieuses.",
      },
    ],
    stepsLabel: "Couper un cigare - étape par étape",
    stepsHeading: "Prêt en<br />quatre étapes.",
    stepsTipIcon: Hand,
    stepsTip:
      "<span class='text-gray-700 font-bold'>Astuce :</span> Ne coupez jamais au-delà de l'épaule du cigare - en dessous, la cape se défait.",
    steps: [
      { n: "01", title: "Examinez le cigare", desc: "Placez la tête à contre-jour. Vous voyez la ligne d'épaule - coupez juste avant, pas dedans." },
      { n: "02", title: "Positionnez le coupe-cigare", desc: "Tenez le cigare vertical, glissez le coupe-cigare sur la tête jusqu'à la butée. Sans bouger." },
      { n: "03", title: "Rapide et décidé", desc: "Un geste ferme - pas de demi-tentative. Une coupe hésitante écrase précisément ce que vous voulez ouvrir." },
      { n: "04", title: "Vérifiez le tirage", desc: "Soufflez doucement à travers le cigare sans l'allumer. Trop de résistance ? Coupez un peu plus profond." },
    ],
    bottomBadgeIcon: Wrench,
    bottomBadgeText: "Affûtage des coupe-cigares via Bookwill - renseignez-vous en boutique",
    faqHeadingDark: "Questions sur",
    faqHeadingAccent: "les accessoires à cigares ?",
  },
};

export default function KnippersAsbakkenInfoSection() {
  const { locale, dict } = useLocale();
  const text = LOCALIZED[locale] ?? LOCALIZED.NL;
  const faq = dict.categoryFaqs.knippers;
  return <CategoryInfoSection data={{ ...text, faqIntro: faq.intro, faqs: faq.items }} />;
}
