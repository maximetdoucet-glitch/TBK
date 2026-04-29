export type Locale = "NL" | "EN" | "DE" | "FR";

export type Dict = {
  promo: {
    msg1: string; msg1Cta: string;
    msg2: string;
    msg3: string; msg3Cta: string;
    close: string; prev: string; next: string;
  };
  header: {
    openMenu: string; closeMenu: string;
    searchPlaceholder: string;
    chooseLanguage: string; chooseCurrency: string;
    account: string; wishlist: string; cart: string;
    assortiment: string;
    nav: { aanstekers: string; kokersEtuis: string; knippersAsbakken: string; rookAccessoires: string; sale: string };
    mega: {
      aanstekers: { title: string; zippo: string; clipper: string; zippoAcc: string };
      kokers: { title: string; cigaretteCases: string; filters: string; ashtrays: string };
      knippers: { title: string; cigarCutters: string; cigarCases: string; cigarAshtrays: string };
      rook: { title: string; bruyerePipes: string; pipeCutlery: string; grinders: string };
      viewAll: string; deals: string; newItems: string;
    };
    usp: { freeShipping: string; sameDay: string; freeReturns: string; securePay: string };
    rating: string;
    mobileMenu: string; mobileAccount: string; mobileWishlist: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string; titleLine2: string;
    description: string;
    cta: string;
    imageAlt: string;
  };
  quickCategories: {
    label: string;
    items: { zippo: string; clipper: string; cigaretteAcc: string; cigarAcc: string; pipesAcc: string };
  };
  categoryShowcase: {
    eyebrow: string; heading: string; viewAll: string; cta: string;
    aanstekers: { name: string; tagline: string; description: string; stats: { zippoModels: string; clipperRegular: string; zippoAcc: string } };
    kokers: { name: string; tagline: string; description: string; stats: { casesEtuis: string; filtersHolders: string; brands: string } };
    knippers: { name: string; tagline: string; description: string; stats: { cutters: string; ashtrays: string; brands: string } };
    rook: { name: string; tagline: string; description: string; stats: { grinders: string; pipeSets: string; brands: string } };
  };
  featuredProducts: {
    eyebrow: string; heading: string;
    tabs: { bestsellers: string; new: string; sale: string };
    addedToCart: string; addToCart: string;
    viewAll: string;
    badges: { bestseller: string; new: string; sale: string };
    wishlist: string;
    inCart: string;
  };
  about: {
    stats: { specialist: string; zippoModels: string; products: string; reviews: string };
    eyebrow: string;
    titleLine1: string; titleLine2: string;
    para1: string; para2: string;
    pillars: {
      dealer: { title: string; body: string };
      shipping: { title: string; body: string };
      returns: { title: string; body: string };
      store: { title: string; body: string };
    };
    faqEyebrow: string; faqHeading: string;
    faqs: {
      shipping: { q: string; a: string };
      shippingCost: { q: string; a: string };
      returns: { q: string; a: string };
      authentic: { q: string; a: string };
      store: { q: string; a: string };
    };
    moreQuestions: string; moreQuestionsBody: string; contactLink: string;
  };
  email: {
    badgeLine1: string; badgeLine2: string;
    eyebrow: string;
    titleLine1: string; titleLine2: string;
    description: string;
    descriptionMobile: string;
    socialProof: string;
    trust: { noSpam: string; unsubscribe: string; instant: string };
    placeholder: string;
    submit: string; submitMobile: string;
    successTitle: string; successBody: string;
  };
  subcategoryNav: {
    eyebrow: string;
    heading: string;
    productsLabel: string;
    items: { zippo: string; clipper: string; jetflame: string; zippoAcc: string; kokers: string; knippers: string; rook: string; pipeCutlery: string };
  };
  articles: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    viewAll: string;
    readArticle: string;
    moreLabel: string;
    moreCta: string;
    categories: { lighters: string; maintenance: string; comparison: string };
    items: {
      zippoChoice: { title: string; excerpt: string };
      zippoCare: { title: string; excerpt: string };
      clipperVsZippo: { title: string; excerpt: string };
    };
  };
  footer: {
    description: string;
    sections: { assortiment: string; klantenservice: string; account: string };
    shop: { aanstekers: string; kokersEtuis: string; knippersAsbakken: string; rookAccessoires: string; sale: string };
    service: { contact: string; shipping: string; returns: string; payment: string; faq: string; warranty: string };
    accountLinks: { login: string; register: string; orders: string; wishlist: string; details: string };
    badge: { eyebrow: string; city: string };
    copyright: string;
    legal: { privacy: string; terms: string; cookies: string };
    socials: { instagram: string; facebook: string };
  };
};

const NL: Dict = {
  promo: {
    msg1: "Nieuw: Zippo Limited Edition 2025 collectie is binnen", msg1Cta: "Bekijk nu",
    msg2: "Gratis verzending vanaf €80 — Voor 16:00 besteld, dezelfde dag verstuurd",
    msg3: "De grootste tabakspecialist van Nijmegen — Bezoek onze winkel", msg3Cta: "Routebeschrijving",
    close: "Sluiten", prev: "Vorige", next: "Volgende",
  },
  header: {
    openMenu: "Menu openen", closeMenu: "Menu sluiten",
    searchPlaceholder: "Zoek op product, merk of categorie…",
    chooseLanguage: "Kies uw taal", chooseCurrency: "Kies uw valuta",
    account: "Account", wishlist: "Verlanglijst", cart: "Winkelwagen",
    assortiment: "Assortiment",
    nav: { aanstekers: "Aanstekers", kokersEtuis: "Kokers & Etuis", knippersAsbakken: "Knippers & Asbakken", rookAccessoires: "Rook-accessoires", sale: "Sale" },
    mega: {
      aanstekers: { title: "Aanstekers", zippo: "Zippo aanstekers", clipper: "Clipper & regulier", zippoAcc: "Zippo accessoires" },
      kokers: { title: "Kokers & Etuis", cigaretteCases: "Sigarettenkokers", filters: "Filters & houders", ashtrays: "Asbakken" },
      knippers: { title: "Knippers & Asbakken", cigarCutters: "Sigarenknippers", cigarCases: "Sigaren-etuis", cigarAshtrays: "Sigaren-asbakken" },
      rook: { title: "Rook-accessoires", bruyerePipes: "Bruyère pijpen", pipeCutlery: "Pijp-bestek", grinders: "Tabaksgrinders" },
      viewAll: "Bekijk volledig assortiment →", deals: "Aanbiedingen", newItems: "Nieuwe artikelen",
    },
    usp: { freeShipping: "Gratis verzending vanaf €80", sameDay: "Voor 16:00 besteld — zelfde dag verstuurd", freeReturns: "Gratis retourneren", securePay: "Veilig betalen via iDEAL & Klarna" },
    rating: "4.8 / 5 Google Reviews",
    mobileMenu: "Menu", mobileAccount: "Mijn account", mobileWishlist: "Verlanglijst",
  },
  hero: {
    eyebrow: "Tabaksspeciaalzaak Nijmegen",
    titleLine1: "500+ verschillende", titleLine2: "benodigdheden",
    description: "De grootste collectie rokersbenodigdheden van Nijmegen — Zippo, Clipper, pijp-accessoires en meer.",
    cta: "Bekijk aanbod",
    imageAlt: "Aanstekers collectie",
  },
  quickCategories: {
    label: "Snel navigeren",
    items: { zippo: "Zippo aanstekers", clipper: "Clipper aanstekers", cigaretteAcc: "Sigaretten-accessoires", cigarAcc: "Sigaren-accessoires", pipesAcc: "Pijpen & accessoires" },
  },
  categoryShowcase: {
    eyebrow: "Ons assortiment", heading: "Productcategorieën", viewAll: "Alles bekijken", cta: "Bekijk collectie",
    aanstekers: { name: "Aanstekers", tagline: "336 modellen", description: "Van tijdloze Zippo's tot betrouwbare Clipper en Ronson — de grootste selectie aanstekers in Nederland.", stats: { zippoModels: "Zippo modellen", clipperRegular: "Clipper & regulier", zippoAcc: "Zippo accessoires" } },
    kokers: { name: "Kokers & Etuis", tagline: "70 producten", description: "Sigarettenkokers, etuis, filters en houders — stijlvol en praktisch voor elke roker.", stats: { casesEtuis: "Kokers & etuis", filtersHolders: "Filters & houders", brands: "Merken" } },
    knippers: { name: "Knippers & Asbakken", tagline: "28 producten", description: "Precisieknippers, elegante asbakken en sigaren-etuis van topmerken zoals Bookwill en Faro.", stats: { cutters: "Knippers", ashtrays: "Asbakken", brands: "Merken" } },
    rook: { name: "Rook-accessoires", tagline: "15 producten", description: "Tabakspijpen, bestek en grinders — vakkundig geselecteerd voor de echte liefhebber.", stats: { grinders: "Grinders", pipeSets: "Pijp-bestek sets", brands: "Merken" } },
  },
  featuredProducts: {
    eyebrow: "Populair dit seizoen", heading: "Aanbevolen producten",
    tabs: { bestsellers: "Bestsellers", new: "Nieuw binnen", sale: "Voordeel" },
    addedToCart: "Toegevoegd!", addToCart: "In wagen",
    viewAll: "Bekijk volledig aanbod",
    badges: { bestseller: "Bestseller", new: "Nieuw", sale: "Sale" },
    wishlist: "Verlanglijst", inCart: "In winkelwagen",
  },
  about: {
    stats: { specialist: "Tabakspecialist Nijmegen", zippoModels: "Zippo modellen", products: "Producten", reviews: "Google Reviews" },
    eyebrow: "Over ons",
    titleLine1: "Grootste tabaksspeciaalzaak", titleLine2: "van Nijmegen",
    para1: "In onze speciaalzaak in hartje Nijmegen vind je alles om jouw rookmoment compleet te maken. Van exclusieve Zippo's tot dagelijkse benodigdheden zoals vloei en filters.",
    para2: "Met jarenlange ervaring adviseren wij onze klanten zowel in onze fysieke winkel als online. Ons team bestaat uit echte kenners — geen callcenter, maar mensen die passie hebben voor het vak.",
    pillars: {
      dealer: { title: "Officieel dealer", body: "TBK is officieel gecertificeerd dealer van Zippo, Clipper, Colibri en Xikar. Elke aankoop is gegarandeerd authentiek." },
      shipping: { title: "Snelle levering", body: "Voor 16:00 besteld, dezelfde dag verstuurd vanuit ons eigen magazijn in Nijmegen. Wereldwijd geleverd." },
      returns: { title: "Gratis retour", body: "Niet tevreden? Retourneer binnen 30 dagen gratis. Geen gedoe, geen vragen." },
      store: { title: "Fysieke winkel", body: "Bezoek ons in de Molenstraat 120 in hartje Nijmegen. Persoonlijk advies van echte kenners." },
    },
    faqEyebrow: "FAQ", faqHeading: "Veelgestelde vragen",
    faqs: {
      shipping: { q: "Wanneer wordt mijn bestelling verzonden?", a: "Bestellingen op werkdagen vóór 16:00 worden dezelfde dag verstuurd via PostNL — op zaterdag verwerken we tot 13:00. Je ontvangt direct een bevestigingsmail met track & trace zodra je pakket is ingescand. Standaard levertijd binnen Nederland is 1–2 werkdagen." },
      shippingCost: { q: "Betaal ik verzendkosten?", a: "Binnen Nederland is verzending volledig gratis vanaf €80. Onder dat bedrag rekenen we €4,95 voor standaard levering. Naar België geldt een gratis drempel van €100, daarna €6,95. Verzenden we naar andere landen, dan berekenen we het porto op basis van gewicht — je ziet het exacte bedrag altijd vóór het afrekenen." },
      returns: { q: "Kan ik mijn bestelling retourneren?", a: "Je hebt 30 dagen na ontvangst de tijd om te retourneren, gratis binnen Nederland. Stuur ons een e-mail met je ordernummer, dan ontvang je een voorgefrankeerd retourlabel. Producten dienen ongeopend en in originele verpakking te zijn. Na goedkeuring wordt het aankoopbedrag binnen 5 werkdagen teruggestort." },
      authentic: { q: "Zijn de producten authentiek?", a: "Zonder uitzondering. TBK is officieel gecertificeerd dealer van Zippo, Clipper, Colibri, Xikar en alle andere merken in ons assortiment. We kopen uitsluitend in bij erkende Europese distributeurs — nooit via marktplaatsen of derde partijen. Op alle Zippo-aanstekers ontvang je bovendien de levenslange fabrieksgarantie van Zippo zelf." },
      store: { q: "Kan ik ook in de winkel terecht?", a: "Zeker. Onze winkel in de Molenstraat 120 in Nijmegen is open op maandag t/m vrijdag van 09:00–18:00 en op zaterdag van 10:00–17:00. Je kunt er terecht voor persoonlijk advies, directe aankoop en het bekijken van de volledige collectie — inclusief Zippo-modellen die niet online staan." },
    },
    moreQuestions: "Staat je vraag er niet bij?", moreQuestionsBody: "Ons team staat klaar om je te helpen.", contactLink: "Neem contact op →",
  },
  email: {
    badgeLine1: "korting op je", badgeLine2: "eerste bestelling",
    eyebrow: "Exclusief voor abonnees",
    titleLine1: "Schrijf je in en", titleLine2: "ontvang direct je code",
    description: "Blijf op de hoogte van nieuwe collecties en deals. Alleen wat echt de moeite waard is.",
    descriptionMobile: "Nieuwe collecties, exclusieve deals — direct in je inbox.",
    socialProof: "abonnees gingen je voor",
    trust: { noSpam: "Geen spam", unsubscribe: "Altijd uitschrijven", instant: "Direct geldig" },
    placeholder: "jouw@emailadres.nl",
    submit: "Ontvang 10%", submitMobile: "Ontvang 10% korting",
    successTitle: "🎉 Check je inbox!", successBody: "Je kortingscode van 10% is onderweg.",
  },
  subcategoryNav: {
    eyebrow: "Snel navigeren", heading: "Populaire categorieën", productsLabel: "producten",
    items: { zippo: "Zippo Aanstekers", clipper: "Clipper & Regulier", jetflame: "Jetflame Aanstekers", zippoAcc: "Zippo Accessoires", kokers: "Kokers & Etuis", knippers: "Knippers & Asbakken", rook: "Rook-accessoires", pipeCutlery: "Pijp-bestek" },
  },
  articles: {
    eyebrow: "Kennisbank",
    headingLine1: "Alles wat je moet weten over",
    headingLine2: "aanstekers & accessoires",
    viewAll: "Bekijk alle artikelen",
    readArticle: "Lees artikel",
    moreLabel: "Meer lezen",
    moreCta: "Bekijk de volledige kennisbank →",
    categories: { lighters: "Aanstekers", maintenance: "Onderhoud", comparison: "Vergelijking" },
    items: {
      zippoChoice: { title: "Hoe kies je de perfecte Zippo voor jouw stijl?", excerpt: "Van gebürstet chrome tot gegraveerde limited editions — Zippo biedt meer dan 1400 modellen. We helpen je kiezen op basis van gebruik, persoonlijkheid en budget." },
      zippoCare: { title: "Zippo onderhoud: zo blijft jouw aansteker als nieuw", excerpt: "Een Zippo gaat een leven lang mee — maar alleen als je hem goed onderhoudt. Ontdek hoe je navult, de steen vervangt en de buitenkant polijst." },
      clipperVsZippo: { title: "Clipper vs Zippo: welke aansteker past bij jou?", excerpt: "Beide zijn legendarisch, maar voor heel verschillende gebruikers. We vergelijken vlam, navulbaarheid, design en prijs zodat jij de juiste keuze maakt." },
    },
  },
  footer: {
    description: "De grootste tabakspecialist van Nijmegen — gespecialiseerd in aanstekers en rookaccessoires. Online en fysiek in de Molenstraat.",
    sections: { assortiment: "Assortiment", klantenservice: "Klantenservice", account: "Mijn account" },
    shop: { aanstekers: "Aanstekers", kokersEtuis: "Kokers & Etuis", knippersAsbakken: "Knippers & Asbakken", rookAccessoires: "Rook-accessoires", sale: "Sale" },
    service: { contact: "Contact", shipping: "Verzenden & leveren", returns: "Ruilen & retourneren", payment: "Betaalmethoden", faq: "Veelgestelde vragen", warranty: "Garantiebeleid" },
    accountLinks: { login: "Inloggen", register: "Registreren", orders: "Bestelhistorie", wishlist: "Verlanglijst", details: "Persoonlijke gegevens" },
    badge: { eyebrow: "Tabaksspeciaalzaak", city: "Nijmegen" },
    copyright: "Rokersbenodigheden Nijmegen",
    legal: { privacy: "Privacybeleid", terms: "Algemene voorwaarden", cookies: "Cookiebeleid" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
};

const EN: Dict = {
  promo: {
    msg1: "New: Zippo Limited Edition 2025 collection is in", msg1Cta: "Shop now",
    msg2: "Free shipping from €80 — order before 4 PM, shipped the same day",
    msg3: "Nijmegen's largest tobacco specialist — visit our store", msg3Cta: "Get directions",
    close: "Close", prev: "Previous", next: "Next",
  },
  header: {
    openMenu: "Open menu", closeMenu: "Close menu",
    searchPlaceholder: "Search by product, brand or category…",
    chooseLanguage: "Choose your language", chooseCurrency: "Choose your currency",
    account: "Account", wishlist: "Wishlist", cart: "Cart",
    assortiment: "Shop",
    nav: { aanstekers: "Lighters", kokersEtuis: "Cases & Sleeves", knippersAsbakken: "Cutters & Ashtrays", rookAccessoires: "Smoking accessories", sale: "Sale" },
    mega: {
      aanstekers: { title: "Lighters", zippo: "Zippo lighters", clipper: "Clipper & regular", zippoAcc: "Zippo accessories" },
      kokers: { title: "Cases & Sleeves", cigaretteCases: "Cigarette cases", filters: "Filters & holders", ashtrays: "Ashtrays" },
      knippers: { title: "Cutters & Ashtrays", cigarCutters: "Cigar cutters", cigarCases: "Cigar cases", cigarAshtrays: "Cigar ashtrays" },
      rook: { title: "Smoking accessories", bruyerePipes: "Briar pipes", pipeCutlery: "Pipe tools", grinders: "Tobacco grinders" },
      viewAll: "View full assortment →", deals: "Deals", newItems: "New arrivals",
    },
    usp: { freeShipping: "Free shipping from €80", sameDay: "Order before 4 PM — shipped same day", freeReturns: "Free returns", securePay: "Secure payment via iDEAL & Klarna" },
    rating: "4.8 / 5 Google Reviews",
    mobileMenu: "Menu", mobileAccount: "My account", mobileWishlist: "Wishlist",
  },
  hero: {
    eyebrow: "Tobacco specialist Nijmegen",
    titleLine1: "500+ different", titleLine2: "essentials",
    description: "Nijmegen's largest collection of smoking essentials — Zippo, Clipper, pipe accessories and more.",
    cta: "Shop now",
    imageAlt: "Lighter collection",
  },
  quickCategories: {
    label: "Quick navigation",
    items: { zippo: "Zippo lighters", clipper: "Clipper lighters", cigaretteAcc: "Cigarette accessories", cigarAcc: "Cigar accessories", pipesAcc: "Pipes & accessories" },
  },
  categoryShowcase: {
    eyebrow: "Our assortment", heading: "Product categories", viewAll: "View all", cta: "Shop collection",
    aanstekers: { name: "Lighters", tagline: "336 models", description: "From timeless Zippos to reliable Clipper and Ronson — the largest selection of lighters in the Netherlands.", stats: { zippoModels: "Zippo models", clipperRegular: "Clipper & regular", zippoAcc: "Zippo accessories" } },
    kokers: { name: "Cases & Sleeves", tagline: "70 products", description: "Cigarette cases, sleeves, filters and holders — stylish and practical for every smoker.", stats: { casesEtuis: "Cases & sleeves", filtersHolders: "Filters & holders", brands: "Brands" } },
    knippers: { name: "Cutters & Ashtrays", tagline: "28 products", description: "Precision cutters, elegant ashtrays and cigar cases from top brands like Bookwill and Faro.", stats: { cutters: "Cutters", ashtrays: "Ashtrays", brands: "Brands" } },
    rook: { name: "Smoking accessories", tagline: "15 products", description: "Tobacco pipes, tools and grinders — expertly selected for the true enthusiast.", stats: { grinders: "Grinders", pipeSets: "Pipe tool sets", brands: "Brands" } },
  },
  featuredProducts: {
    eyebrow: "Popular this season", heading: "Recommended products",
    tabs: { bestsellers: "Bestsellers", new: "New arrivals", sale: "Deals" },
    addedToCart: "Added!", addToCart: "Add to cart",
    viewAll: "View full range",
    badges: { bestseller: "Bestseller", new: "New", sale: "Sale" },
    wishlist: "Wishlist", inCart: "Add to cart",
  },
  about: {
    stats: { specialist: "Tobacco specialist Nijmegen", zippoModels: "Zippo models", products: "Products", reviews: "Google Reviews" },
    eyebrow: "About us",
    titleLine1: "The largest tobacco specialist", titleLine2: "in Nijmegen",
    para1: "In our specialist shop in the heart of Nijmegen you'll find everything to complete your smoking ritual. From exclusive Zippos to daily essentials like rolling papers and filters.",
    para2: "With years of experience we advise our customers both in our physical store and online. Our team consists of true connoisseurs — no call center, just people with a passion for the craft.",
    pillars: {
      dealer: { title: "Authorised dealer", body: "TBK is an officially certified dealer of Zippo, Clipper, Colibri and Xikar. Every purchase is guaranteed authentic." },
      shipping: { title: "Fast delivery", body: "Order before 4 PM and we ship the same day from our own warehouse in Nijmegen. Delivered worldwide." },
      returns: { title: "Free returns", body: "Not satisfied? Return free of charge within 30 days. No hassle, no questions." },
      store: { title: "Physical store", body: "Visit us at Molenstraat 120 in the heart of Nijmegen. Personal advice from real experts." },
    },
    faqEyebrow: "FAQ", faqHeading: "Frequently asked questions",
    faqs: {
      shipping: { q: "When will my order be shipped?", a: "Orders placed on weekdays before 4 PM are shipped the same day via PostNL — on Saturdays we process until 1 PM. You'll receive a confirmation email with track & trace as soon as your parcel is scanned. Standard delivery within the Netherlands takes 1–2 working days." },
      shippingCost: { q: "Do I pay shipping costs?", a: "Within the Netherlands, shipping is fully free from €80. Below that we charge €4.95 for standard delivery. To Belgium the free threshold is €100, after which it's €6.95. For other countries we calculate postage based on weight — you'll always see the exact amount before checkout." },
      returns: { q: "Can I return my order?", a: "You have 30 days after receipt to return your order, free within the Netherlands. Send us an email with your order number and you'll receive a prepaid return label. Products must be unopened and in their original packaging. After approval the purchase amount is refunded within 5 working days." },
      authentic: { q: "Are the products authentic?", a: "Without exception. TBK is an officially certified dealer of Zippo, Clipper, Colibri, Xikar and every other brand in our assortment. We buy exclusively from authorised European distributors — never via marketplaces or third parties. On all Zippo lighters you also receive Zippo's lifetime factory warranty." },
      store: { q: "Can I visit the store in person?", a: "Absolutely. Our store at Molenstraat 120 in Nijmegen is open Monday to Friday from 9 AM to 6 PM and on Saturdays from 10 AM to 5 PM. You can come for personal advice, immediate purchase and to view the full collection — including Zippo models that aren't online." },
    },
    moreQuestions: "Don't see your question?", moreQuestionsBody: "Our team is ready to help.", contactLink: "Get in touch →",
  },
  email: {
    badgeLine1: "off your", badgeLine2: "first order",
    eyebrow: "Exclusive for subscribers",
    titleLine1: "Sign up and", titleLine2: "get your code instantly",
    description: "Stay up to date with new collections and deals. Only what's truly worth it.",
    descriptionMobile: "New collections, exclusive deals — straight to your inbox.",
    socialProof: "subscribers already joined",
    trust: { noSpam: "No spam", unsubscribe: "Unsubscribe anytime", instant: "Instantly valid" },
    placeholder: "your@email.com",
    submit: "Get 10%", submitMobile: "Get 10% off",
    successTitle: "🎉 Check your inbox!", successBody: "Your 10% discount code is on its way.",
  },
  subcategoryNav: {
    eyebrow: "Quick navigation", heading: "Popular categories", productsLabel: "products",
    items: { zippo: "Zippo lighters", clipper: "Clipper & regular", jetflame: "Jetflame lighters", zippoAcc: "Zippo accessories", kokers: "Cases & sleeves", knippers: "Cutters & ashtrays", rook: "Smoking accessories", pipeCutlery: "Pipe tools" },
  },
  articles: {
    eyebrow: "Knowledge base",
    headingLine1: "Everything you need to know about",
    headingLine2: "lighters & accessories",
    viewAll: "View all articles",
    readArticle: "Read article",
    moreLabel: "Read more",
    moreCta: "Explore the full knowledge base →",
    categories: { lighters: "Lighters", maintenance: "Maintenance", comparison: "Comparison" },
    items: {
      zippoChoice: { title: "How to pick the perfect Zippo for your style", excerpt: "From brushed chrome to engraved limited editions — Zippo offers more than 1,400 models. We'll help you choose based on use, personality and budget." },
      zippoCare: { title: "Zippo care: keep your lighter looking new", excerpt: "A Zippo lasts a lifetime — but only if you maintain it properly. Learn how to refill, replace the flint and polish the case." },
      clipperVsZippo: { title: "Clipper vs Zippo: which lighter suits you?", excerpt: "Both are legendary, but they serve very different users. We compare flame, refillability, design and price so you can make the right choice." },
    },
  },
  footer: {
    description: "Nijmegen's largest tobacco specialist — specialised in lighters and smoking accessories. Online and at our physical store on Molenstraat.",
    sections: { assortiment: "Shop", klantenservice: "Customer service", account: "My account" },
    shop: { aanstekers: "Lighters", kokersEtuis: "Cases & Sleeves", knippersAsbakken: "Cutters & Ashtrays", rookAccessoires: "Smoking accessories", sale: "Sale" },
    service: { contact: "Contact", shipping: "Shipping & delivery", returns: "Exchanges & returns", payment: "Payment methods", faq: "FAQ", warranty: "Warranty policy" },
    accountLinks: { login: "Log in", register: "Register", orders: "Order history", wishlist: "Wishlist", details: "Personal details" },
    badge: { eyebrow: "Tobacco specialist", city: "Nijmegen" },
    copyright: "Rokersbenodigheden Nijmegen",
    legal: { privacy: "Privacy policy", terms: "Terms & conditions", cookies: "Cookie policy" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
};

const DE: Dict = {
  promo: {
    msg1: "Neu: Zippo Limited Edition 2025 Kollektion ist da", msg1Cta: "Jetzt entdecken",
    msg2: "Kostenloser Versand ab €80 — vor 16:00 bestellt, am selben Tag versendet",
    msg3: "Der größte Tabakfachhandel in Nijmegen — besuchen Sie unser Geschäft", msg3Cta: "Wegbeschreibung",
    close: "Schließen", prev: "Zurück", next: "Weiter",
  },
  header: {
    openMenu: "Menü öffnen", closeMenu: "Menü schließen",
    searchPlaceholder: "Suche nach Produkt, Marke oder Kategorie…",
    chooseLanguage: "Sprache wählen", chooseCurrency: "Währung wählen",
    account: "Konto", wishlist: "Wunschliste", cart: "Warenkorb",
    assortiment: "Sortiment",
    nav: { aanstekers: "Feuerzeuge", kokersEtuis: "Etuis & Hüllen", knippersAsbakken: "Cutter & Aschenbecher", rookAccessoires: "Raucherzubehör", sale: "Sale" },
    mega: {
      aanstekers: { title: "Feuerzeuge", zippo: "Zippo Feuerzeuge", clipper: "Clipper & Standard", zippoAcc: "Zippo Zubehör" },
      kokers: { title: "Etuis & Hüllen", cigaretteCases: "Zigarettenetuis", filters: "Filter & Halter", ashtrays: "Aschenbecher" },
      knippers: { title: "Cutter & Aschenbecher", cigarCutters: "Zigarrencutter", cigarCases: "Zigarrenetuis", cigarAshtrays: "Zigarren-Aschenbecher" },
      rook: { title: "Raucherzubehör", bruyerePipes: "Bruyère-Pfeifen", pipeCutlery: "Pfeifenbesteck", grinders: "Tabakmühlen" },
      viewAll: "Gesamtes Sortiment ansehen →", deals: "Angebote", newItems: "Neuheiten",
    },
    usp: { freeShipping: "Kostenloser Versand ab €80", sameDay: "Vor 16:00 bestellt — taggleich versendet", freeReturns: "Kostenlose Rücksendung", securePay: "Sicher bezahlen via iDEAL & Klarna" },
    rating: "4.8 / 5 Google Bewertungen",
    mobileMenu: "Menü", mobileAccount: "Mein Konto", mobileWishlist: "Wunschliste",
  },
  hero: {
    eyebrow: "Tabakfachhandel Nijmegen",
    titleLine1: "500+ verschiedene", titleLine2: "Artikel",
    description: "Die größte Auswahl an Raucherbedarf in Nijmegen — Zippo, Clipper, Pfeifenzubehör und mehr.",
    cta: "Sortiment ansehen",
    imageAlt: "Feuerzeug-Kollektion",
  },
  quickCategories: {
    label: "Schnellzugriff",
    items: { zippo: "Zippo Feuerzeuge", clipper: "Clipper Feuerzeuge", cigaretteAcc: "Zigarettenzubehör", cigarAcc: "Zigarrenzubehör", pipesAcc: "Pfeifen & Zubehör" },
  },
  categoryShowcase: {
    eyebrow: "Unser Sortiment", heading: "Produktkategorien", viewAll: "Alle ansehen", cta: "Kollektion ansehen",
    aanstekers: { name: "Feuerzeuge", tagline: "336 Modelle", description: "Von zeitlosen Zippos bis zu zuverlässigen Clipper und Ronson — die größte Feuerzeugauswahl in den Niederlanden.", stats: { zippoModels: "Zippo Modelle", clipperRegular: "Clipper & Standard", zippoAcc: "Zippo Zubehör" } },
    kokers: { name: "Etuis & Hüllen", tagline: "70 Produkte", description: "Zigarettenetuis, Hüllen, Filter und Halter — stilvoll und praktisch für jeden Raucher.", stats: { casesEtuis: "Etuis & Hüllen", filtersHolders: "Filter & Halter", brands: "Marken" } },
    knippers: { name: "Cutter & Aschenbecher", tagline: "28 Produkte", description: "Präzisionscutter, elegante Aschenbecher und Zigarrenetuis von Top-Marken wie Bookwill und Faro.", stats: { cutters: "Cutter", ashtrays: "Aschenbecher", brands: "Marken" } },
    rook: { name: "Raucherzubehör", tagline: "15 Produkte", description: "Tabakpfeifen, Besteck und Mühlen — sorgfältig ausgewählt für den echten Liebhaber.", stats: { grinders: "Mühlen", pipeSets: "Pfeifenbesteck-Sets", brands: "Marken" } },
  },
  featuredProducts: {
    eyebrow: "Beliebt diese Saison", heading: "Empfohlene Produkte",
    tabs: { bestsellers: "Bestseller", new: "Neuheiten", sale: "Angebote" },
    addedToCart: "Hinzugefügt!", addToCart: "In den Warenkorb",
    viewAll: "Komplettes Sortiment ansehen",
    badges: { bestseller: "Bestseller", new: "Neu", sale: "Sale" },
    wishlist: "Wunschliste", inCart: "In den Warenkorb",
  },
  about: {
    stats: { specialist: "Tabakfachhandel Nijmegen", zippoModels: "Zippo Modelle", products: "Produkte", reviews: "Google Bewertungen" },
    eyebrow: "Über uns",
    titleLine1: "Größter Tabakfachhandel", titleLine2: "in Nijmegen",
    para1: "In unserem Fachgeschäft im Herzen von Nijmegen finden Sie alles, was Ihren Rauchgenuss vollkommen macht. Von exklusiven Zippos bis hin zu täglichem Bedarf wie Blättchen und Filtern.",
    para2: "Mit langjähriger Erfahrung beraten wir unsere Kunden im Geschäft wie auch online. Unser Team besteht aus echten Kennern — kein Callcenter, sondern Menschen mit Leidenschaft für das Handwerk.",
    pillars: {
      dealer: { title: "Offizieller Händler", body: "TBK ist offiziell zertifizierter Händler von Zippo, Clipper, Colibri und Xikar. Jeder Kauf ist garantiert authentisch." },
      shipping: { title: "Schnelle Lieferung", body: "Vor 16:00 bestellt, am selben Tag aus unserem eigenen Lager in Nijmegen versendet. Weltweite Lieferung." },
      returns: { title: "Kostenlose Rücksendung", body: "Nicht zufrieden? Rücksendung innerhalb von 30 Tagen kostenlos. Kein Aufwand, keine Fragen." },
      store: { title: "Ladengeschäft", body: "Besuchen Sie uns in der Molenstraat 120 im Herzen von Nijmegen. Persönliche Beratung von echten Kennern." },
    },
    faqEyebrow: "FAQ", faqHeading: "Häufig gestellte Fragen",
    faqs: {
      shipping: { q: "Wann wird meine Bestellung versendet?", a: "Bestellungen werktags vor 16:00 werden am selben Tag per PostNL versendet — samstags bearbeiten wir bis 13:00. Sie erhalten sofort eine Bestätigungsmail mit Track & Trace, sobald Ihr Paket gescannt wurde. Standardlieferzeit innerhalb der Niederlande beträgt 1–2 Werktage." },
      shippingCost: { q: "Zahle ich Versandkosten?", a: "Innerhalb der Niederlande ist der Versand ab €80 vollständig kostenlos. Darunter berechnen wir €4,95 für die Standardlieferung. Nach Belgien gilt die kostenlose Schwelle von €100, danach €6,95. Versenden wir in andere Länder, berechnen wir das Porto nach Gewicht — den genauen Betrag sehen Sie immer vor dem Bezahlen." },
      returns: { q: "Kann ich meine Bestellung zurücksenden?", a: "Sie haben 30 Tage nach Erhalt Zeit zur Rücksendung, kostenlos innerhalb der Niederlande. Senden Sie uns eine E-Mail mit Ihrer Bestellnummer, dann erhalten Sie ein vorfrankiertes Retourenetikett. Produkte müssen ungeöffnet und in Originalverpackung sein. Nach Genehmigung wird der Kaufbetrag innerhalb von 5 Werktagen erstattet." },
      authentic: { q: "Sind die Produkte authentisch?", a: "Ohne Ausnahme. TBK ist offiziell zertifizierter Händler von Zippo, Clipper, Colibri, Xikar und allen weiteren Marken in unserem Sortiment. Wir kaufen ausschließlich bei autorisierten europäischen Distributoren — niemals über Marktplätze oder Drittanbieter. Auf alle Zippo-Feuerzeuge erhalten Sie zudem die lebenslange Werksgarantie von Zippo." },
      store: { q: "Kann ich auch im Geschäft vorbeikommen?", a: "Selbstverständlich. Unser Geschäft in der Molenstraat 120 in Nijmegen ist Montag bis Freitag von 09:00–18:00 und samstags von 10:00–17:00 geöffnet. Sie erhalten persönliche Beratung, können direkt einkaufen und die gesamte Kollektion ansehen — einschließlich Zippo-Modellen, die nicht online sind." },
    },
    moreQuestions: "Ihre Frage nicht dabei?", moreQuestionsBody: "Unser Team hilft Ihnen gerne weiter.", contactLink: "Kontakt aufnehmen →",
  },
  email: {
    badgeLine1: "Rabatt auf Ihre", badgeLine2: "erste Bestellung",
    eyebrow: "Exklusiv für Abonnenten",
    titleLine1: "Anmelden und", titleLine2: "Code sofort erhalten",
    description: "Bleiben Sie über neue Kollektionen und Angebote informiert. Nur was wirklich lohnenswert ist.",
    descriptionMobile: "Neue Kollektionen, exklusive Angebote — direkt in Ihren Posteingang.",
    socialProof: "Abonnenten sind schon dabei",
    trust: { noSpam: "Kein Spam", unsubscribe: "Jederzeit abbestellen", instant: "Sofort gültig" },
    placeholder: "ihre@email.de",
    submit: "10% erhalten", submitMobile: "10% Rabatt erhalten",
    successTitle: "🎉 Posteingang prüfen!", successBody: "Ihr 10% Rabattcode ist unterwegs.",
  },
  subcategoryNav: {
    eyebrow: "Schnellzugriff", heading: "Beliebte Kategorien", productsLabel: "Produkte",
    items: { zippo: "Zippo Feuerzeuge", clipper: "Clipper & Standard", jetflame: "Jetflame Feuerzeuge", zippoAcc: "Zippo Zubehör", kokers: "Etuis & Hüllen", knippers: "Cutter & Aschenbecher", rook: "Raucherzubehör", pipeCutlery: "Pfeifenbesteck" },
  },
  articles: {
    eyebrow: "Wissensdatenbank",
    headingLine1: "Alles Wissenswerte über",
    headingLine2: "Feuerzeuge & Zubehör",
    viewAll: "Alle Artikel ansehen",
    readArticle: "Artikel lesen",
    moreLabel: "Mehr lesen",
    moreCta: "Zur vollständigen Wissensdatenbank →",
    categories: { lighters: "Feuerzeuge", maintenance: "Pflege", comparison: "Vergleich" },
    items: {
      zippoChoice: { title: "Wie wählen Sie das perfekte Zippo für Ihren Stil?", excerpt: "Von gebürstetem Chrom bis zu gravierten Limited Editions — Zippo bietet über 1.400 Modelle. Wir helfen Ihnen bei der Wahl nach Nutzung, Persönlichkeit und Budget." },
      zippoCare: { title: "Zippo-Pflege: So bleibt Ihr Feuerzeug wie neu", excerpt: "Ein Zippo hält ein Leben lang — aber nur, wenn Sie es richtig pflegen. Erfahren Sie, wie Sie nachfüllen, den Stein wechseln und das Gehäuse polieren." },
      clipperVsZippo: { title: "Clipper vs. Zippo: Welches Feuerzeug passt zu Ihnen?", excerpt: "Beide sind legendär, aber für sehr unterschiedliche Nutzer. Wir vergleichen Flamme, Nachfüllbarkeit, Design und Preis, damit Sie die richtige Wahl treffen." },
    },
  },
  footer: {
    description: "Der größte Tabakfachhandel in Nijmegen — spezialisiert auf Feuerzeuge und Raucherzubehör. Online und im Geschäft in der Molenstraat.",
    sections: { assortiment: "Sortiment", klantenservice: "Kundenservice", account: "Mein Konto" },
    shop: { aanstekers: "Feuerzeuge", kokersEtuis: "Etuis & Hüllen", knippersAsbakken: "Cutter & Aschenbecher", rookAccessoires: "Raucherzubehör", sale: "Sale" },
    service: { contact: "Kontakt", shipping: "Versand & Lieferung", returns: "Umtausch & Rücksendung", payment: "Zahlungsmethoden", faq: "Häufige Fragen", warranty: "Garantie" },
    accountLinks: { login: "Anmelden", register: "Registrieren", orders: "Bestellverlauf", wishlist: "Wunschliste", details: "Persönliche Daten" },
    badge: { eyebrow: "Tabakfachhandel", city: "Nijmegen" },
    copyright: "Rokersbenodigheden Nijmegen",
    legal: { privacy: "Datenschutz", terms: "AGB", cookies: "Cookie-Richtlinie" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
};

const FR: Dict = {
  promo: {
    msg1: "Nouveau : la collection Zippo Édition Limitée 2025 est arrivée", msg1Cta: "Découvrir",
    msg2: "Livraison gratuite dès 80 € — commande avant 16 h, expédiée le jour même",
    msg3: "Le plus grand spécialiste du tabac à Nijmegen — visitez notre boutique", msg3Cta: "Itinéraire",
    close: "Fermer", prev: "Précédent", next: "Suivant",
  },
  header: {
    openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
    searchPlaceholder: "Rechercher un produit, une marque ou une catégorie…",
    chooseLanguage: "Choisissez votre langue", chooseCurrency: "Choisissez votre devise",
    account: "Compte", wishlist: "Favoris", cart: "Panier",
    assortiment: "Boutique",
    nav: { aanstekers: "Briquets", kokersEtuis: "Étuis & pochettes", knippersAsbakken: "Coupe-cigares & cendriers", rookAccessoires: "Accessoires fumeur", sale: "Soldes" },
    mega: {
      aanstekers: { title: "Briquets", zippo: "Briquets Zippo", clipper: "Clipper & classiques", zippoAcc: "Accessoires Zippo" },
      kokers: { title: "Étuis & pochettes", cigaretteCases: "Étuis à cigarettes", filters: "Filtres & fume-cigarette", ashtrays: "Cendriers" },
      knippers: { title: "Coupe-cigares & cendriers", cigarCutters: "Coupe-cigares", cigarCases: "Étuis à cigares", cigarAshtrays: "Cendriers à cigares" },
      rook: { title: "Accessoires fumeur", bruyerePipes: "Pipes en bruyère", pipeCutlery: "Outils à pipe", grinders: "Grinders à tabac" },
      viewAll: "Voir tout l'assortiment →", deals: "Promotions", newItems: "Nouveautés",
    },
    usp: { freeShipping: "Livraison gratuite dès 80 €", sameDay: "Commande avant 16 h — expédiée le jour même", freeReturns: "Retours gratuits", securePay: "Paiement sécurisé via iDEAL & Klarna" },
    rating: "4,8 / 5 Avis Google",
    mobileMenu: "Menu", mobileAccount: "Mon compte", mobileWishlist: "Favoris",
  },
  hero: {
    eyebrow: "Spécialiste du tabac à Nijmegen",
    titleLine1: "500+ articles", titleLine2: "pour fumeurs",
    description: "La plus grande sélection d'accessoires fumeur de Nijmegen — Zippo, Clipper, accessoires de pipe et plus encore.",
    cta: "Voir l'offre",
    imageAlt: "Collection de briquets",
  },
  quickCategories: {
    label: "Navigation rapide",
    items: { zippo: "Briquets Zippo", clipper: "Briquets Clipper", cigaretteAcc: "Accessoires cigarettes", cigarAcc: "Accessoires cigares", pipesAcc: "Pipes & accessoires" },
  },
  categoryShowcase: {
    eyebrow: "Notre assortiment", heading: "Catégories de produits", viewAll: "Tout voir", cta: "Voir la collection",
    aanstekers: { name: "Briquets", tagline: "336 modèles", description: "Des Zippos intemporels aux Clipper et Ronson fiables — la plus grande sélection de briquets aux Pays-Bas.", stats: { zippoModels: "Modèles Zippo", clipperRegular: "Clipper & classiques", zippoAcc: "Accessoires Zippo" } },
    kokers: { name: "Étuis & pochettes", tagline: "70 produits", description: "Étuis à cigarettes, pochettes, filtres et fume-cigarette — élégants et pratiques pour chaque fumeur.", stats: { casesEtuis: "Étuis & pochettes", filtersHolders: "Filtres & fume-cigarette", brands: "Marques" } },
    knippers: { name: "Coupe-cigares & cendriers", tagline: "28 produits", description: "Coupe-cigares de précision, cendriers élégants et étuis à cigares de marques de prestige comme Bookwill et Faro.", stats: { cutters: "Coupe-cigares", ashtrays: "Cendriers", brands: "Marques" } },
    rook: { name: "Accessoires fumeur", tagline: "15 produits", description: "Pipes à tabac, outils et grinders — sélectionnés avec soin pour les véritables passionnés.", stats: { grinders: "Grinders", pipeSets: "Sets d'outils à pipe", brands: "Marques" } },
  },
  featuredProducts: {
    eyebrow: "Populaire cette saison", heading: "Produits recommandés",
    tabs: { bestsellers: "Meilleures ventes", new: "Nouveautés", sale: "Promotions" },
    addedToCart: "Ajouté !", addToCart: "Ajouter",
    viewAll: "Voir toute l'offre",
    badges: { bestseller: "Best-seller", new: "Nouveau", sale: "Solde" },
    wishlist: "Favoris", inCart: "Ajouter au panier",
  },
  about: {
    stats: { specialist: "Spécialiste tabac Nijmegen", zippoModels: "Modèles Zippo", products: "Produits", reviews: "Avis Google" },
    eyebrow: "À propos",
    titleLine1: "Le plus grand spécialiste du tabac", titleLine2: "à Nijmegen",
    para1: "Dans notre boutique spécialisée au cœur de Nijmegen, vous trouverez tout pour parfaire votre moment fumeur. Des Zippos exclusifs aux essentiels du quotidien comme le papier à rouler et les filtres.",
    para2: "Forts d'une longue expérience, nous conseillons nos clients aussi bien en boutique qu'en ligne. Notre équipe est composée de véritables connaisseurs — pas de centre d'appels, mais des passionnés du métier.",
    pillars: {
      dealer: { title: "Revendeur officiel", body: "TBK est revendeur officiellement certifié de Zippo, Clipper, Colibri et Xikar. Chaque achat est authentique, garanti." },
      shipping: { title: "Livraison rapide", body: "Commande avant 16 h, expédiée le jour même depuis notre propre entrepôt à Nijmegen. Livraison dans le monde entier." },
      returns: { title: "Retours gratuits", body: "Pas satisfait ? Retournez gratuitement sous 30 jours. Sans tracas, sans questions." },
      store: { title: "Boutique physique", body: "Visitez-nous au Molenstraat 120, au cœur de Nijmegen. Conseils personnalisés par de véritables experts." },
    },
    faqEyebrow: "FAQ", faqHeading: "Questions fréquentes",
    faqs: {
      shipping: { q: "Quand ma commande sera-t-elle expédiée ?", a: "Les commandes passées en semaine avant 16 h sont expédiées le jour même via PostNL — le samedi nous traitons jusqu'à 13 h. Vous recevez immédiatement un e-mail de confirmation avec suivi dès que votre colis est scanné. Le délai de livraison standard aux Pays-Bas est de 1 à 2 jours ouvrés." },
      shippingCost: { q: "Y a-t-il des frais de port ?", a: "Aux Pays-Bas, la livraison est entièrement gratuite à partir de 80 €. En dessous, nous facturons 4,95 € pour la livraison standard. Vers la Belgique, le seuil de gratuité est de 100 €, puis 6,95 €. Pour les autres pays, nous calculons le port en fonction du poids — vous voyez toujours le montant exact avant le paiement." },
      returns: { q: "Puis-je retourner ma commande ?", a: "Vous disposez de 30 jours après réception pour retourner votre commande, gratuitement aux Pays-Bas. Envoyez-nous un e-mail avec votre numéro de commande et vous recevrez une étiquette retour prépayée. Les produits doivent être non ouverts et dans leur emballage d'origine. Après validation, le montant est remboursé sous 5 jours ouvrés." },
      authentic: { q: "Les produits sont-ils authentiques ?", a: "Sans exception. TBK est revendeur officiellement certifié de Zippo, Clipper, Colibri, Xikar et de toutes les autres marques de notre assortiment. Nous nous fournissons exclusivement auprès de distributeurs européens agréés — jamais via des places de marché ou des tiers. Sur tous les briquets Zippo, vous bénéficiez en outre de la garantie usine à vie de Zippo." },
      store: { q: "Puis-je venir en boutique ?", a: "Bien entendu. Notre boutique au Molenstraat 120 à Nijmegen est ouverte du lundi au vendredi de 9 h à 18 h et le samedi de 10 h à 17 h. Vous pouvez y obtenir des conseils personnalisés, acheter directement et découvrir toute la collection — y compris des modèles Zippo non disponibles en ligne." },
    },
    moreQuestions: "Vous ne trouvez pas votre question ?", moreQuestionsBody: "Notre équipe est là pour vous aider.", contactLink: "Nous contacter →",
  },
  email: {
    badgeLine1: "de réduction sur votre", badgeLine2: "première commande",
    eyebrow: "Exclusif aux abonnés",
    titleLine1: "Inscrivez-vous et", titleLine2: "recevez votre code immédiatement",
    description: "Restez informé des nouvelles collections et des bons plans. Uniquement ce qui en vaut la peine.",
    descriptionMobile: "Nouvelles collections, offres exclusives — directement dans votre boîte mail.",
    socialProof: "abonnés vous ont précédé",
    trust: { noSpam: "Pas de spam", unsubscribe: "Désinscription à tout moment", instant: "Valable immédiatement" },
    placeholder: "votre@email.fr",
    submit: "Obtenir 10 %", submitMobile: "Obtenir 10 % de réduction",
    successTitle: "🎉 Vérifiez votre boîte mail !", successBody: "Votre code de réduction de 10 % est en route.",
  },
  subcategoryNav: {
    eyebrow: "Navigation rapide", heading: "Catégories populaires", productsLabel: "produits",
    items: { zippo: "Briquets Zippo", clipper: "Clipper & classiques", jetflame: "Briquets Jetflame", zippoAcc: "Accessoires Zippo", kokers: "Étuis & pochettes", knippers: "Coupe-cigares & cendriers", rook: "Accessoires fumeur", pipeCutlery: "Outils à pipe" },
  },
  articles: {
    eyebrow: "Base de connaissances",
    headingLine1: "Tout ce qu'il faut savoir sur",
    headingLine2: "les briquets & accessoires",
    viewAll: "Voir tous les articles",
    readArticle: "Lire l'article",
    moreLabel: "Lire plus",
    moreCta: "Explorer toute la base de connaissances →",
    categories: { lighters: "Briquets", maintenance: "Entretien", comparison: "Comparaison" },
    items: {
      zippoChoice: { title: "Comment choisir le Zippo parfait pour votre style ?", excerpt: "Du chrome brossé aux éditions limitées gravées — Zippo propose plus de 1 400 modèles. Nous vous aidons à choisir selon l'usage, la personnalité et le budget." },
      zippoCare: { title: "Entretien du Zippo : gardez votre briquet comme neuf", excerpt: "Un Zippo dure toute une vie — à condition d'en prendre soin. Découvrez comment le remplir, remplacer la pierre et polir le boîtier." },
      clipperVsZippo: { title: "Clipper vs Zippo : quel briquet vous convient ?", excerpt: "Tous deux sont légendaires, mais pour des utilisateurs très différents. Nous comparons flamme, rechargeabilité, design et prix pour vous aider à choisir." },
    },
  },
  footer: {
    description: "Le plus grand spécialiste du tabac de Nijmegen — spécialisé dans les briquets et accessoires fumeur. En ligne et en boutique au Molenstraat.",
    sections: { assortiment: "Boutique", klantenservice: "Service client", account: "Mon compte" },
    shop: { aanstekers: "Briquets", kokersEtuis: "Étuis & pochettes", knippersAsbakken: "Coupe-cigares & cendriers", rookAccessoires: "Accessoires fumeur", sale: "Soldes" },
    service: { contact: "Contact", shipping: "Expédition & livraison", returns: "Échanges & retours", payment: "Moyens de paiement", faq: "Questions fréquentes", warranty: "Garantie" },
    accountLinks: { login: "Connexion", register: "Inscription", orders: "Historique", wishlist: "Favoris", details: "Données personnelles" },
    badge: { eyebrow: "Spécialiste tabac", city: "Nijmegen" },
    copyright: "Rokersbenodigheden Nijmegen",
    legal: { privacy: "Confidentialité", terms: "Conditions générales", cookies: "Politique cookies" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
};

export const translations: Record<Locale, Dict> = { NL, EN, DE, FR };
