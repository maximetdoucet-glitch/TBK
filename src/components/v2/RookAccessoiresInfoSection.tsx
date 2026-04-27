import { Wind, Award, Leaf, Sparkles, Flame, Wrench } from "lucide-react";
import CategoryInfoSection, { type CategoryInfoData } from "./CategoryInfoSection";

const DATA: CategoryInfoData = {
  aboutLabel: "Alles over pijpen, bestek & grinders",
  headlineDark: "Een ritueel",
  headlineAccent: "uit de oude wereld.",
  introBody:
    "Een pijproker heeft geen haast. Een grinder vraagt geen batterij. De accessoires in deze collectie zijn voor wie het hele proces waardeert — niet alleen het eindresultaat. Bruyère hout, gepolijst messing, vlijmscherp staal.",

  bento: [
    {
      icon: Award,
      hero: true,
      heroBgNumber: "1850",
      heroTagline: "Bruyère · Cederhout · Massief messing",
      title: "Materialen die het proces respecteren",
      body:
        "Bruyère hout — de wortelknobbel van de heideboom — is sinds 1850 de standaard voor pijpen. Het is hittebestendig, neutraal van smaak en ontwikkelt na honderden vullingen een eigen rookkarakter. Onze grinders zijn vliegtuig-aluminium met diamantvormige tanden; ons pijp-bestek is messing dat niet roest in de tabak. Geen plastic, geen compromissen.",
    },
    {
      icon: Leaf,
      title: "Pijp-bestek — drie stuks die alles doen",
      body:
        "Een aandrukker, een ruimer, een prikker. Met deze drie houd je je pijp schoon, voorkom je verstopping en verleng je de levensduur tot decennia. Een Bookwill 3-delig bestek past in een binnenzak en gaat een leven mee.",
    },
    {
      icon: Sparkles,
      title: "Grinders met precisie-tanden",
      body:
        "Een goede grinder heeft scherpe diamantvormige tanden, magnetisch sluitend deksel en pollen-katcher. Champ-grinders zijn vliegtuig-aluminium, vaatwasserbestendig en houden hun snijvlak jaren. Het verschil met goedkope plastic versies merk je direct.",
    },
    {
      icon: Wind,
      title: "Bewaring & geur",
      body:
        "Tabak in een open zak verliest binnen dagen aroma. Een goede tabakspot of luchtdichte grinder houdt vocht en geur weken vast. Cederhouten bewaardozen voegen subtiele kruidigheid toe — hetzelfde principe als bij sigaren.",
    },
  ],

  stepsLabel: "Een pijp stoppen — Stap voor stap",
  stepsHeading: "Vullen in<br />vier stappen.",
  stepsTipIcon: Flame,
  stepsTip:
    "<span class='text-gray-700 font-bold'>Tip:</span> Vul nooit vast aan — een te strak gestopte pijp trekt slecht en bittert snel.",
  steps: [
    {
      n: "01",
      title: "Vul luchtig",
      desc: "Druppel tabak losjes in de kop tot net over de rand. Niet aanduwen — laat hem bezakken.",
    },
    {
      n: "02",
      title: "Lichte druk",
      desc: "Met de aandrukker zachtjes effen tot je trekt — als ademen door een rietje, niet door een blokje.",
    },
    {
      n: "03",
      title: "Aansteken in tweeën",
      desc: "Eerste vlam: charring light, laat doven. Tweede vlam: echt aansteken terwijl je rustig trekt.",
    },
    {
      n: "04",
      title: "Eerste asch",
      desc: "Na 2–3 minuten klop je de eerste asch eraf. Dit is de 'true light' — vanaf hier rookt hij gelijkmatig.",
    },
  ],
  bottomBadgeIcon: Wrench,
  bottomBadgeText: "Pijpreiniging & bestek-onderhoud beschikbaar in onze winkel",

  faqHeadingDark: "Vragen over",
  faqHeadingAccent: "pijpen & accessoires?",
  faqIntro:
    "Welke pijp voor de beginner, hoe je een grinder kiest, en waarom bestek geen luxe is maar noodzaak — eerlijk uitgelegd.",
  faqs: [
    {
      q: "Wat is bruyère hout en waarom is het de standaard?",
      a: "Bruyère is de wortelknobbel van de boomheide (Erica arborea), die groeit in het Middellandse Zeegebied. Het hout is van nature hittebestendig tot ver boven de rookgloed, geurneutraal en poreus genoeg om vocht te absorberen. Sinds 1850 het standaardmateriaal voor kwaliteitspijpen — geen synthetisch alternatief komt eraan.",
    },
    {
      q: "Heb ik echt een 3-delig pijp-bestek nodig?",
      a: "Ja, als je je pijp wilt onderhouden. De aandrukker zorgt voor gelijkmatige verbranding, de ruimer haalt verkoold residu uit de kop en de prikker maakt verstoppingen los. Zonder bestek raken pijpen verbrand, verstopt of bitter. Een set kost weinig en gaat decennia mee.",
    },
    {
      q: "Hoe vaak maak ik mijn pijp schoon?",
      a: "Na elke rooksessie: kop legen en met een pijpragertje door het mondstuk. Wekelijks: grondiger met de ruimer. Maandelijks (bij intensief gebruik): laat de pijp 24u rusten en wrijf de buitenkant met een zachte doek. Een goed onderhouden pijp gaat een leven mee.",
    },
    {
      q: "Welke grinder-grootte is praktisch?",
      a: "Voor thuisgebruik 50-55mm doorsnee — past in de hand, capaciteit voor meerdere sessies. Voor onderweg 40mm — past in een broekzak. 4-laags grinders met pollen-katcher zijn de gulden middenweg: bovenkant grind, middelste laag opvang, onderste laag pollen. Vliegtuig-aluminium boven plastic; magnetisch sluitend boven schroef.",
    },
    {
      q: "Kan ik een grinder in de vaatwasser?",
      a: "Aluminium grinders van Champ kunnen op koud programma — meestal niet aan te raden voor de afdichtingen. Beter: handmatig met warm water en een zachte borstel. Voor hardnekkig residu: 30 minuten in lauwwarm water met afwasmiddel, daarna goed drogen. Plastic grinders altijd handmatig.",
    },
    {
      q: "Welke pijp is geschikt voor een beginner?",
      a: "Een rechte (straight) bruyère-pijp van middelgrote kop, smooth-finish, met klassiek mondstuk. Vermijd extreem gebogen pijpen of zware meerschuim — die vragen ervaring. Een eenvoudige Bruyère-pijp uit onze collectie tussen 50–100 euro is duurzaam genoeg om jaren mee te leren.",
    },
    {
      q: "Hoe bewaar ik losse tabak?",
      a: "Luchtdichte tabakspot bij kamertemperatuur, weg van direct zonlicht. Voor langere bewaring (>1 maand): een vochtbalans-element zoals een Boveda erbij. Tabak in een open zak verliest binnen 7 dagen het grootste deel van zijn aroma — geur is vluchtig, vocht ook.",
    },
  ],
};

export default function RookAccessoiresInfoSection() {
  return <CategoryInfoSection data={DATA} />;
}
