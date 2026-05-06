// Blog article content. The title and excerpt are pulled from i18n
// (articles.items.<itemKey>.title / .excerpt). The long-form body is
// stored here per locale so the article page can render fully translated.

export type Locale = "NL" | "EN" | "DE" | "FR";

export type ArticleSection = { heading: string; body: string };
export type ArticleBody = {
  intro: string;
  sections: ArticleSection[];
};

export type BlogArticle = {
  slug: string;
  itemKey: "zippoChoice" | "zippoCare" | "clipperVsZippo";
  categoryKey: "lighters" | "maintenance" | "comparison";
  image: string;
  readTime: string;
  publishedAt: string;     // ISO date
  authorName: string;
  related: string[];       // other slugs
  content: Record<Locale, ArticleBody>;
};

// ─── ZIPPO KIEZEN ──────────────────────────────────────────────────────────
const zippoKiezen: BlogArticle = {
  slug: "zippo-kiezen",
  itemKey: "zippoChoice",
  categoryKey: "lighters",
  image: "https://images.unsplash.com/photo-1543750747-927e0e817a89?w=1600&q=85&fit=crop",
  readTime: "5 min",
  publishedAt: "2026-01-12",
  authorName: "Team Rokersbenodigdheden",
  related: ["zippo-onderhoud", "clipper-vs-zippo"],
  content: {
    NL: {
      intro:
        "Een Zippo is geen gewoon aansteker het is een levenslang gebruiksvoorwerp dat je dagelijks bij je draagt. Met meer dan 1.400 modellen kan de keuze overweldigend zijn. We helpen je drie vragen beantwoorden: hoe gebruik je 'm, wat past bij jouw stijl en wat is het waard?",
      sections: [
        {
          heading: "Hoe ga je 'm gebruiken?",
          body:
            "Als de Zippo vooral bij je sleutels mag rondreizen kies je een gebürstet chrome of zwart matte uitvoering die laten krassen het minst zien. Voor een vaste plek in een binnenzak of op je bureau kun je gerust gaan voor een hoogglans of gegraveerd model: ze stralen meer maar slijten visueel sneller.",
        },
        {
          heading: "Welke stijl past bij jou?",
          body:
            "Klassiek (chrome, brass, antiqued silver) past altijd. De Limited Editions Skull, Harley-Davidson, Marvel zijn meer een statement en bouwen als verzamelobject waarde op door de jaren heen. Twijfel je? Begin met het Slim-model: hetzelfde Zippo-DNA in een dunner formaat dat lekker in een broekzak zit.",
        },
        {
          heading: "Wat is het waard?",
          body:
            "Een instap-Zippo zit rond €25-30 en gaat met goed onderhoud écht een leven lang mee Zippo geeft levenslange fabrieksgarantie op het werk van het mechaniek. Voor een gegraveerd of Limited Edition model betaal je €60-150. Boven de €200 koop je een verzamelobject; daar zit de waarde in zeldzaamheid, niet meer in de vlam zelf.",
        },
        {
          heading: "Onze drie aanraders",
          body:
            "Beginners: Zippo Brushed Chrome (klassiek, krasvergevingsgezind, betaalbaar). Cadeau: Zippo Skull Design High Polish Brass opvallend zonder kitsch. Verzamelaar: een Limited Edition uit het lopende jaar schaarste maakt waarde.",
        },
      ],
    },
    EN: {
      intro:
        "A Zippo isn't just a lighter it's a lifelong everyday object you carry with you. With over 1,400 models the choice can be overwhelming. We'll help you answer three questions: how will you use it, what suits your style, and what's it worth?",
      sections: [
        {
          heading: "How will you use it?",
          body:
            "If the Zippo mostly travels with your keys, pick a brushed chrome or black matte finish they hide scratches best. For a fixed spot in an inside pocket or on your desk you can confidently go for a high-polish or engraved model: they shine more but show wear sooner.",
        },
        {
          heading: "Which style suits you?",
          body:
            "Classic (chrome, brass, antiqued silver) always works. The Limited Editions Skull, Harley-Davidson, Marvel are more of a statement and tend to gain collector value over the years. Unsure? Start with the Slim model: same Zippo DNA in a thinner format that sits comfortably in a trouser pocket.",
        },
        {
          heading: "What's it worth?",
          body:
            "An entry-level Zippo lands around €25-30 and, with proper care, genuinely lasts a lifetime Zippo offers a lifetime factory warranty on the mechanism. For an engraved or Limited Edition model you'll pay €60-150. Above €200 you're buying a collector's piece; the value lives in rarity, not in the flame itself.",
        },
        {
          heading: "Our three picks",
          body:
            "Beginners: Zippo Brushed Chrome (classic, scratch-forgiving, affordable). Gift: Zippo Skull Design High Polish Brass eye-catching without kitsch. Collector: a Limited Edition from the current year scarcity drives value.",
        },
      ],
    },
    DE: {
      intro:
        "Ein Zippo ist kein gewöhnliches Feuerzeug es ist ein lebenslanges Alltagsobjekt, das Sie täglich bei sich tragen. Bei über 1.400 Modellen kann die Wahl überwältigend sein. Wir helfen Ihnen, drei Fragen zu beantworten: Wie werden Sie es nutzen, was passt zu Ihrem Stil und was ist es wert?",
      sections: [
        {
          heading: "Wie werden Sie es nutzen?",
          body:
            "Wenn das Zippo meist mit Ihren Schlüsseln unterwegs ist, wählen Sie eine gebürstete Chrom- oder schwarz-matte Ausführung sie kaschieren Kratzer am besten. Für einen festen Platz in der Innentasche oder auf dem Schreibtisch können Sie ruhig zu einem Hochglanz- oder Gravurmodell greifen: Sie strahlen mehr, zeigen aber schneller Abnutzung.",
        },
        {
          heading: "Welcher Stil passt zu Ihnen?",
          body:
            "Klassisch (Chrom, Messing, antik silber) passt immer. Die Limited Editions Skull, Harley-Davidson, Marvel sind eher ein Statement und gewinnen über die Jahre an Sammlerwert. Unsicher? Beginnen Sie mit dem Slim-Modell: dasselbe Zippo-DNA in einem dünneren Format, das angenehm in der Hosentasche sitzt.",
        },
        {
          heading: "Was ist es wert?",
          body:
            "Ein Einsteiger-Zippo liegt bei €25-30 und hält bei guter Pflege wirklich ein Leben lang Zippo gibt lebenslange Werksgarantie auf den Mechanismus. Für ein graviertes oder Limited Edition-Modell zahlen Sie €60-150. Über €200 kaufen Sie ein Sammlerstück; der Wert steckt in der Seltenheit, nicht mehr in der Flamme selbst.",
        },
        {
          heading: "Unsere drei Empfehlungen",
          body:
            "Einsteiger: Zippo Brushed Chrome (klassisch, kratzunempfindlich, erschwinglich). Geschenk: Zippo Skull Design High Polish Brass auffällig ohne Kitsch. Sammler: eine Limited Edition aus dem laufenden Jahr Knappheit treibt den Wert.",
        },
      ],
    },
    FR: {
      intro:
        "Un Zippo n'est pas un briquet ordinaire c'est un objet du quotidien que l'on garde toute une vie. Avec plus de 1 400 modèles, le choix peut être déroutant. Nous vous aidons à répondre à trois questions : comment l'utiliserez-vous, quel style vous correspond et que vaut-il ?",
      sections: [
        {
          heading: "Comment l'utiliserez-vous ?",
          body:
            "Si le Zippo voyage surtout avec vos clés, optez pour une finition chrome brossé ou noir mat elles masquent le mieux les rayures. Pour une place fixe dans une poche intérieure ou sur votre bureau, vous pouvez sans hésiter choisir un modèle poli ou gravé : ils brillent davantage mais marquent plus vite.",
        },
        {
          heading: "Quel style vous correspond ?",
          body:
            "Le classique (chrome, laiton, argent vieilli) passe toujours. Les éditions limitées Skull, Harley-Davidson, Marvel sont plus affirmées et prennent de la valeur de collection avec le temps. Vous hésitez ? Commencez par le modèle Slim : le même ADN Zippo dans un format plus fin qui se glisse confortablement dans une poche.",
        },
        {
          heading: "Que vaut-il ?",
          body:
            "Un Zippo d'entrée de gamme tourne autour de 25-30 € et, bien entretenu, dure véritablement toute une vie Zippo offre une garantie usine à vie sur le mécanisme. Pour un modèle gravé ou en édition limitée, comptez 60-150 €. Au-delà de 200 €, vous achetez un objet de collection ; la valeur réside dans la rareté, plus dans la flamme.",
        },
        {
          heading: "Nos trois sélections",
          body:
            "Débutants : Zippo Brushed Chrome (classique, indulgent aux rayures, abordable). Cadeau : Zippo Skull Design High Polish Brass frappant sans être kitsch. Collectionneur : une édition limitée de l'année la rareté fait la valeur.",
        },
      ],
    },
  },
};

// ─── ZIPPO ONDERHOUD ──────────────────────────────────────────────────────
const zippoOnderhoud: BlogArticle = {
  slug: "zippo-onderhoud",
  itemKey: "zippoCare",
  categoryKey: "maintenance",
  image: "https://images.unsplash.com/photo-1734984099763-717aafbd419f?w=1600&q=85&fit=crop",
  readTime: "4 min",
  publishedAt: "2026-02-08",
  authorName: "Team Rokersbenodigdheden",
  related: ["zippo-kiezen", "clipper-vs-zippo"],
  content: {
    NL: {
      intro:
        "Een Zippo gaat letterlijk een leven lang mee maar alleen als je 'm goed onderhoudt. Drie eenvoudige rituelen houden je aansteker als nieuw en voorkomen dat je 'm naar de fabriek hoeft op te sturen.",
      sections: [
        {
          heading: "Vloeistof navullen",
          body:
            "Open de aansteker, til het binnenwerk uit de behuizing en draai het om. Druk het vilt voorzichtig terug en vul de watten met Zippo Premium Lighter Fluid tot ze verzadigd zijn niet meer. Te veel vloeistof lekt langs de naden en zorgt voor uitstekende vlammen. Veeg overtollige vloeistof af voor je 'm sluit.",
        },
        {
          heading: "Steen vervangen",
          body:
            "Als de vonk verdwijnt is je vuursteen op. Verwijder het binnenwerk, draai het kleine schroefje aan de onderzijde los, schud de oude steen eruit, plaats een nieuwe en draai het schroefje terug aan. Een set van 6 stenen kost een paar euro en gaat een paar maanden tot een jaar mee.",
        },
        {
          heading: "Lont vervangen",
          body:
            "Als de vlam onregelmatig wordt of de lont kort en zwart, is het tijd voor een nieuwe. Trek de oude lont met een pincet door het brandgat, voer een nieuwe in van onderen door de watten en knip 'm op de juiste lengte (vlak boven de wind hood). Veel kleiner dan een Euro-muntje.",
        },
        {
          heading: "Wat je niet moet doen",
          body:
            "Geen butaan in je benzine-Zippo. Geen ontstoken Zippo in een binnenzak (de vloeistof verdampt en kan vlekken). En laat 'm niet wekenlang ongebruikt: vloeistof verdampt sowieso langzaam. Topup elke twee weken houdt 'm in topvorm.",
        },
      ],
    },
    EN: {
      intro:
        "A Zippo really does last a lifetime but only with proper care. Three simple rituals keep your lighter looking new and save you from shipping it back to the factory.",
      sections: [
        {
          heading: "Refilling the fluid",
          body:
            "Open the lighter, lift the insert out of the case and flip it upside down. Gently lift the felt pad and saturate the cotton with Zippo Premium Lighter Fluid until just full no more. Overfilling leaks through the seams and causes runaway flames. Wipe off any excess before closing.",
        },
        {
          heading: "Replacing the flint",
          body:
            "If the spark dies, your flint is spent. Remove the insert, unscrew the small screw on the bottom, shake out the old flint, drop in a new one and tighten the screw back. A pack of 6 flints costs a few euros and lasts months to a year.",
        },
        {
          heading: "Replacing the wick",
          body:
            "If the flame becomes uneven or the wick goes short and blackened, it's time for a fresh one. Use tweezers to pull the old wick through the burn hole, feed a new wick from below through the cotton and trim it to the right length (just above the wind hood). Much smaller than a euro coin.",
        },
        {
          heading: "What not to do",
          body:
            "No butane in your fuel Zippo. Don't keep a freshly-fueled Zippo in an inside pocket (fluid evaporates and can stain). And don't leave it unused for weeks: fluid evaporates slowly anyway. A top-up every two weeks keeps it in top shape.",
        },
      ],
    },
    DE: {
      intro:
        "Ein Zippo hält wirklich ein Leben lang aber nur mit der richtigen Pflege. Drei einfache Rituale halten Ihr Feuerzeug wie neu und ersparen Ihnen den Weg zurück zum Hersteller.",
      sections: [
        {
          heading: "Flüssigkeit nachfüllen",
          body:
            "Öffnen Sie das Feuerzeug, heben Sie den Einsatz aus dem Gehäuse und drehen Sie ihn um. Heben Sie den Filz vorsichtig an und tränken Sie die Watte mit Zippo Premium Feuerzeugbenzin, bis sie gerade gesättigt ist nicht mehr. Zu viel läuft durch die Nähte und führt zu unkontrollierten Flammen. Wischen Sie überschüssiges Benzin ab, bevor Sie schließen.",
        },
        {
          heading: "Stein wechseln",
          body:
            "Wenn der Funke verschwindet, ist Ihr Feuerstein verbraucht. Nehmen Sie den Einsatz heraus, lösen Sie die kleine Schraube am Boden, schütteln Sie den alten Stein heraus, setzen Sie einen neuen ein und ziehen Sie die Schraube wieder fest. Ein Set mit 6 Steinen kostet wenige Euro und hält Monate bis ein Jahr.",
        },
        {
          heading: "Docht wechseln",
          body:
            "Wenn die Flamme ungleichmäßig wird oder der Docht kurz und geschwärzt ist, brauchen Sie einen neuen. Ziehen Sie den alten Docht mit einer Pinzette durch das Brandloch, führen Sie einen neuen von unten durch die Watte und schneiden Sie ihn auf die richtige Länge (knapp über der Windkappe).",
        },
        {
          heading: "Was Sie nicht tun sollten",
          body:
            "Kein Butan in Ihrem Benzin-Zippo. Bewahren Sie ein frisch betanktes Zippo nicht in der Innentasche auf (Flüssigkeit verdunstet und kann Flecken hinterlassen). Und lassen Sie es nicht wochenlang ungenutzt: Benzin verdunstet langsam. Eine Auffüllung alle zwei Wochen hält es in Bestform.",
        },
      ],
    },
    FR: {
      intro:
        "Un Zippo dure vraiment toute une vie mais seulement avec un bon entretien. Trois rituels simples gardent votre briquet comme neuf et vous évitent de le renvoyer en usine.",
      sections: [
        {
          heading: "Recharger l'essence",
          body:
            "Ouvrez le briquet, sortez le mécanisme du boîtier et retournez-le. Soulevez doucement le feutre et imbibez le coton de Zippo Premium Lighter Fluid jusqu'à saturation pas plus. Trop d'essence fuit par les coutures et provoque des flammes incontrôlées. Essuyez le surplus avant de refermer.",
        },
        {
          heading: "Remplacer la pierre",
          body:
            "Si l'étincelle disparaît, votre pierre est usée. Sortez le mécanisme, dévissez la petite vis du dessous, secouez la pierre usagée, mettez-en une neuve et resserrez la vis. Un pack de 6 pierres coûte quelques euros et dure de plusieurs mois à un an.",
        },
        {
          heading: "Remplacer la mèche",
          body:
            "Si la flamme devient irrégulière ou la mèche est courte et noircie, il est temps de la changer. Avec une pince à épiler, tirez la vieille mèche par le trou de combustion, enfilez une mèche neuve par le bas à travers le coton et coupez-la à la bonne longueur (juste au-dessus du capuchon).",
        },
        {
          heading: "Ce qu'il ne faut pas faire",
          body:
            "Pas de butane dans un Zippo à essence. Ne gardez pas un Zippo fraîchement rempli dans une poche intérieure (l'essence s'évapore et peut tacher). Et ne le laissez pas inutilisé pendant des semaines : l'essence s'évapore de toute façon lentement. Un appoint toutes les deux semaines le maintient au top.",
        },
      ],
    },
  },
};

// ─── CLIPPER vs ZIPPO ─────────────────────────────────────────────────────
const clipperVsZippo: BlogArticle = {
  slug: "clipper-vs-zippo",
  itemKey: "clipperVsZippo",
  categoryKey: "comparison",
  image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=1600&q=85&fit=crop",
  readTime: "3 min",
  publishedAt: "2026-03-15",
  authorName: "Team Rokersbenodigdheden",
  related: ["zippo-kiezen", "zippo-onderhoud"],
  content: {
    NL: {
      intro:
        "Beide zijn iconen, maar dienen totaal andere gebruikers. We zetten Zippo en Clipper naast elkaar op vlam, navulbaarheid, design en prijs zodat jij in twee minuten weet welke bij jou past.",
      sections: [
        {
          heading: "Vlam & windvastheid",
          body:
            "Zippo: zachte, brede vlam die door zijn diepe behuizing en wind hood ook in stevige wind blijft staan. Clipper: kortere, harde vlam minder windvast in de standaard uitvoering, maar de Jet- en Turbo-modellen produceren een blauwe straalvlam die zelfs een sigaar aankan. Voor pijproken: Zippo. Voor sigaretten op een terras: Clipper Jet.",
        },
        {
          heading: "Navulbaarheid",
          body:
            "Allebei zijn navulbaar, maar verschillend. Zippo werkt op vloeibare nafta je vult de watten van bovenaf na en vervangt steen en lont apart. Clipper werkt op butaangas je vult van onderen via een ventiel, in 15 seconden klaar. Clipper is sneller, Zippo voelt ritueler.",
        },
        {
          heading: "Design & gevoel",
          body:
            "Zippo is metaal, klikt open met een hoorbare 'tink', voelt zwaar in je hand en is een statement. Clipper is plastic of metaal, ronde vorm, past in elk broekzakje, en de afneembare poker (vuurstenenhouder) is handig voor pijprokers. Zippo is bezit; Clipper is gebruik.",
        },
        {
          heading: "Wat past bij jou?",
          body:
            "Kies Zippo als je iets wilt dat decennia meegaat, een verhaal vertelt en levenslange garantie heeft. Kies Clipper als je dagelijks een kleine, snel-navulbare aansteker zoekt voor een tientje. Veel rokers hebben er trouwens beide de Zippo voor 's avonds, de Clipper voor in de auto.",
        },
      ],
    },
    EN: {
      intro:
        "Both are icons, but they serve very different users. We'll put Zippo and Clipper side by side on flame, refillability, design and price so you know in two minutes which one suits you.",
      sections: [
        {
          heading: "Flame & wind resistance",
          body:
            "Zippo: a soft, wide flame that thanks to the deep housing and wind hood stays lit in serious wind. Clipper: a shorter, harder flame; less wind-resistant in the standard form, but the Jet and Turbo models produce a blue jet flame that can handle a cigar. Pipe smokers: Zippo. Cigarettes on a terrace: Clipper Jet.",
        },
        {
          heading: "Refillability",
          body:
            "Both refill, but differently. Zippo runs on liquid naphtha you saturate the cotton from the top and replace flint and wick separately. Clipper runs on butane gas you fill from below through a valve, done in 15 seconds. Clipper is faster, Zippo is more ritual.",
        },
        {
          heading: "Design & feel",
          body:
            "Zippo is metal, clicks open with that audible 'ting', feels heavy in your hand and is a statement object. Clipper is plastic or metal, round shape, fits any pocket, and the removable poker (flint holder) is handy for pipe smokers. Zippo is ownership; Clipper is use.",
        },
        {
          heading: "Which suits you?",
          body:
            "Choose Zippo if you want something that lasts decades, tells a story and carries a lifetime warranty. Choose Clipper if you want a small, quick-refill daily lighter for a tenner. Plenty of smokers have both the Zippo for evenings, the Clipper for the car.",
        },
      ],
    },
    DE: {
      intro:
        "Beide sind Ikonen, dienen aber sehr unterschiedlichen Nutzern. Wir stellen Zippo und Clipper bei Flamme, Nachfüllbarkeit, Design und Preis nebeneinander damit Sie in zwei Minuten wissen, welches zu Ihnen passt.",
      sections: [
        {
          heading: "Flamme & Windbeständigkeit",
          body:
            "Zippo: weiche, breite Flamme, die dank tiefem Gehäuse und Windkappe auch bei kräftigem Wind brennt. Clipper: kürzere, härtere Flamme; in der Standardausführung weniger windfest, aber Jet- und Turbo-Modelle erzeugen eine blaue Strahlflamme, die sogar eine Zigarre meistert. Pfeifenraucher: Zippo. Zigaretten auf der Terrasse: Clipper Jet.",
        },
        {
          heading: "Nachfüllbarkeit",
          body:
            "Beide sind nachfüllbar, aber unterschiedlich. Zippo läuft mit flüssigem Naphtha Sie tränken die Watte von oben und wechseln Stein und Docht separat. Clipper läuft mit Butangas Sie füllen von unten durch ein Ventil, in 15 Sekunden fertig. Clipper ist schneller, Zippo wirkt ritueller.",
        },
        {
          heading: "Design & Haptik",
          body:
            "Zippo ist Metall, klappt mit hörbarem 'Tink' auf, liegt schwer in der Hand und ist ein Statement-Objekt. Clipper ist Kunststoff oder Metall, runde Form, passt in jede Tasche, und der abnehmbare Stocher (Steinhalter) ist praktisch für Pfeifenraucher. Zippo ist Besitz; Clipper ist Gebrauch.",
        },
        {
          heading: "Was passt zu Ihnen?",
          body:
            "Wählen Sie Zippo, wenn Sie etwas möchten, das Jahrzehnte hält, eine Geschichte erzählt und lebenslange Garantie hat. Wählen Sie Clipper, wenn Sie ein kleines, schnell nachfüllbares Alltagsfeuerzeug für einen Zehner suchen. Viele Raucher haben übrigens beides den Zippo für abends, den Clipper fürs Auto.",
        },
      ],
    },
    FR: {
      intro:
        "Les deux sont des icônes, mais s'adressent à des utilisateurs très différents. Nous comparons Zippo et Clipper sur la flamme, la rechargeabilité, le design et le prix pour que vous sachiez en deux minutes lequel vous convient.",
      sections: [
        {
          heading: "Flamme & résistance au vent",
          body:
            "Zippo : flamme douce et large qui, grâce au boîtier profond et au capuchon coupe-vent, tient face à un vent soutenu. Clipper : flamme plus courte et plus dure ; moins résistante au vent dans la version standard, mais les modèles Jet et Turbo produisent une flamme bleue jet capable d'allumer un cigare. Fumeurs de pipe : Zippo. Cigarettes en terrasse : Clipper Jet.",
        },
        {
          heading: "Rechargeabilité",
          body:
            "Les deux se rechargent, mais différemment. Le Zippo fonctionne au naphta liquide on imbibe le coton par le haut et on remplace pierre et mèche séparément. Le Clipper fonctionne au butane on recharge par le bas via une valve, en 15 secondes. Clipper est plus rapide, Zippo plus rituel.",
        },
        {
          heading: "Design & sensation",
          body:
            "Zippo est en métal, s'ouvre avec un « tink » sonore, pèse dans la main et fait objet de statement. Clipper est en plastique ou métal, forme ronde, tient dans n'importe quelle poche, et son tisonnier amovible (porte-pierre) est pratique pour les fumeurs de pipe. Zippo, c'est posséder ; Clipper, c'est utiliser.",
        },
        {
          heading: "Lequel choisir ?",
          body:
            "Choisissez Zippo si vous voulez un objet qui dure des décennies, raconte une histoire et bénéficie d'une garantie à vie. Choisissez Clipper si vous cherchez un briquet quotidien petit, à recharge rapide, pour une dizaine d'euros. Beaucoup de fumeurs en possèdent d'ailleurs les deux le Zippo pour le soir, le Clipper pour la voiture.",
        },
      ],
    },
  },
};

export const BLOG_ARTICLES: BlogArticle[] = [zippoKiezen, zippoOnderhoud, clipperVsZippo];

export function getArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}
