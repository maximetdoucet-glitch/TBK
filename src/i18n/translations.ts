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
    nav: { aanstekers: string; kokersEtuis: string; knippersAsbakken: string; rookAccessoires: string; sale: string; klantenservice: string };
    mega: {
      aanstekers: { title: string; zippo: string; clipper: string; zippoAcc: string };
      kokers: { title: string; cigaretteCases: string; filters: string; ashtrays: string; rolling: string };
      knippers: { title: string; cigarCutters: string; cigarCases: string; cigarAshtrays: string; humidors: string };
      rook: { title: string; bruyerePipes: string; pipeCutlery: string; grinders: string; cannabis: string };
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
    items: { zippo: string; clipper: string; zippoAcc: string; cigaretteAcc: string; vloei: string; knippers: string; asbakken: string; pipesAcc: string };
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
  cart: {
    title: string;
    empty: string;
    emptyCta: string;
    itemsOne: string;
    itemsMany: string;
    qty: string;
    remove: string;
    subtotal: string;
    shipping: string;
    shippingFree: string;
    shippingFromBe: string;
    total: string;
    viewCart: string;
    checkout: string;
    continueShopping: string;
    addedToCart: string;
    buyNow: string;
    close: string;
  };
  checkout: {
    title: string;
    breadcrumb: string;
    backToCart: string;
    contact: string;
    contactNote: string;
    email: string;
    phone: string;
    shippingAddress: string;
    firstName: string;
    lastName: string;
    address: string;
    addressLine2: string;
    city: string;
    postcode: string;
    country: string;
    paymentMethod: string;
    paymentNote: string;
    methods: { ideal: string; card: string; klarna: string; paypal: string };
    summary: string;
    placeOrder: string;
    placing: string;
    success: { title: string; body: string; orderNumber: string; backHome: string };
    emptyState: string;
    emptyStateCta: string;
    required: string;
    delivery: {
      sectionTitle: string;
      sectionNote: string;
      home: string;
      homeNote: string;
      pickupPrefix: string;
      free: string;
      pickupHintBefore: string;
      pickupHintAfter: string;
      pickupNameSection: string;
      summaryPickup: string;
    };
  };
  reviews: {
    eyebrow: string;
    heading: string;
    outOf: string;
    summary: string;
    summaryOne: string;
    addReview: string;
    postedOn: string;
    showMore: string;
    showLess: string;
    empty: string;
    form: { title: string; nameLabel: string; namePlaceholder: string; ratingLabel: string; reviewLabel: string; reviewPlaceholder: string; submit: string; cancel: string; thanks: string; thanksBody: string };
    distribution: { title: string };
    filterAll: string;
    filterByStars: string;
    sortLabel: string;
    sort: { newest: string; highest: string; lowest: string };
    verified: string;
    helpful: string;
    helpfulMarked: string;
    noMatch: string;
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
    blog: {
      backToOverview: string;
      publishedOn: string;
      writtenBy: string;
      relatedTitle: string;
      indexTitle: string;
      indexLead: string;
      notFoundTitle: string;
      notFoundBody: string;
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
  categoryFaqs: {
    zippo: { intro: string; items: { q: string; a: string }[] };
    kokers: { intro: string; items: { q: string; a: string }[] };
    knippers: { intro: string; items: { q: string; a: string }[] };
  };
  product: {
    breadcrumbHome: string;
    notFound: string;
    notFoundCta: string;
    reviewsLabel: string;
    addToCart: string;
    addedToCart: string;
    buyNow: string;
    trust: { freeShipping: string; sameDay: string; freeReturns: string };
    accordion: {
      description: string;
      specs: string;
      shipping: string;
      shippingBody: string;
    };
    relatedHeading: string;
    backToCollection: string;
  };
  shippingNote: { eligible: string; notEligible: string };
  collection: {
    sidebar: {
      categoriesHeading: string;
      allInCategory: string;
      typeHeading: string;
      allTypes: string;
      brandsHeading: string;
      allBrands: string;
      priceHeading: string;
      clearPriceFilter: string;
    };
    toolbar: {
      filters: string;
      ofProducts: string; // template piece — used as "{showing} {ofProducts} {total} producten"
      productsWord: string;
      sortLabel: string;
      sortOptions: { recommended: string; priceAsc: string; priceDesc: string; rating: string };
    };
    chips: { clearAll: string };
    empty: { noProducts: string; clearFilters: string };
    pagination: { prev: string; next: string; pageWord: string; ofWord: string };
  };
  search: {
    promptHero: string;
    noResultsHeading: string;
    noResultsBodyBefore: string;
    noResultsBodyAfter: string;
    allResults: string;
    breadcrumb: string;
    headingDefault: string;
    headingForBefore: string;
    countBefore: string;
    countAfter: string;
    startTyping: string;
    catalogTagline: string;
    autocomplete: {
      clearQuery: string;
      submit: string;
      productsSection: string;
      categoriesSection: string;
      noResultsBeforeQuery: string;
      noResultsAfterQuery: string;
      tryBrand: string;
      allResultsForBefore: string;
      productSingular: string;
      productPlural: string;
    };
  };
  sale: {
    breadcrumb: string;
    heroTitleAll: string;
    heroTitlePrefix: string;
    heroSubBefore: string;
    heroSubMiddle: string;
    heroSubAfter: string;
    heroTagline: string;
    toolbarOver: string;
    toolbarSoldOut: string;
  };
  accountLogin: {
    heading: string;
    intro: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    forgot: string;
    remember: string;
    submit: string;
    noAccount: string;
    registerHere: string;
  };
};

const NL: Dict = {
  promo: {
    msg1: "Nieuw: Zippo Limited Edition 2025 collectie is binnen", msg1Cta: "Bekijk nu",
    msg2: "Gratis verzending vanaf €80 Standaard levertijd 2-3 werkdagen",
    msg3: "De grootste tabakspecialist van Nijmegen Bezoek onze winkel", msg3Cta: "Routebeschrijving",
    close: "Sluiten", prev: "Vorige", next: "Volgende",
  },
  header: {
    openMenu: "Menu openen", closeMenu: "Menu sluiten",
    searchPlaceholder: "Zoek op product, merk of categorie…",
    chooseLanguage: "Kies uw taal", chooseCurrency: "Kies uw valuta",
    account: "Account", wishlist: "Verlanglijst", cart: "Winkelwagen",
    assortiment: "Assortiment",
    nav: { aanstekers: "Aanstekers", kokersEtuis: "Kokers & Etuis", knippersAsbakken: "Knippers & Asbakken", rookAccessoires: "Rook-accessoires", sale: "Sale", klantenservice: "Klantenservice" },
    mega: {
      aanstekers: { title: "Aanstekers", zippo: "Zippo aanstekers", clipper: "Clipper & regulier", zippoAcc: "Zippo accessoires" },
      kokers: { title: "Kokers & Etuis", cigaretteCases: "Sigarettenkokers", filters: "Filters & houders", ashtrays: "Asbakken", rolling: "Hulzen & vloei" },
      knippers: { title: "Knippers & Asbakken", cigarCutters: "Sigarenknippers", cigarCases: "Sigaren-etuis", cigarAshtrays: "Sigaren-asbakken", humidors: "Humidors" },
      rook: { title: "Rook-accessoires", bruyerePipes: "Bruyère pijpen", pipeCutlery: "Pijp-bestek", grinders: "Tabaksgrinders", cannabis: "Cannabis-accessoires" },
      viewAll: "Bekijk volledig assortiment →", deals: "Aanbiedingen", newItems: "Nieuwe artikelen",
    },
    usp: { freeShipping: "Gratis verzending vanaf €80", sameDay: "Voor 17:00 besteld = vandaag verzonden", freeReturns: "14 dagen retourneren", securePay: "Veilig betalen via iDEAL & Klarna" },
    rating: "4.8 / 5 Google Reviews",
    mobileMenu: "Menu", mobileAccount: "Mijn account", mobileWishlist: "Verlanglijst",
  },
  hero: {
    eyebrow: "Tabaksspeciaalzaak Nijmegen",
    titleLine1: "500+ verschillende", titleLine2: "benodigdheden",
    description: "De grootste collectie rokersbenodigdheden van Nijmegen Zippo, Clipper, pijp-accessoires en meer.",
    cta: "Bekijk aanbod",
    imageAlt: "Aanstekers collectie",
  },
  quickCategories: {
    label: "Snel navigeren",
    items: { zippo: "Zippo aanstekers", clipper: "Clipper aanstekers", zippoAcc: "Zippo accessoires", cigaretteAcc: "Sigaretten-accessoires", vloei: "Vloei & filters", knippers: "Sigarenknippers", asbakken: "Asbakken", pipesAcc: "Pijpen & accessoires" },
  },
  categoryShowcase: {
    eyebrow: "Ons assortiment", heading: "Productcategorieën", viewAll: "Alles bekijken", cta: "Bekijk collectie",
    aanstekers: { name: "Aanstekers", tagline: "336 modellen", description: "Van tijdloze Zippo's tot betrouwbare Clipper en Ronson de grootste selectie aanstekers in Nederland.", stats: { zippoModels: "Zippo modellen", clipperRegular: "Clipper & regulier", zippoAcc: "Zippo accessoires" } },
    kokers: { name: "Kokers & Etuis", tagline: "70 producten", description: "Sigarettenkokers, etuis, filters en houders stijlvol en praktisch voor elke roker.", stats: { casesEtuis: "Kokers & etuis", filtersHolders: "Filters & houders", brands: "Merken" } },
    knippers: { name: "Knippers & Asbakken", tagline: "28 producten", description: "Precisieknippers, elegante asbakken en sigaren-etuis van topmerken zoals Bookwill en Faro.", stats: { cutters: "Knippers", ashtrays: "Asbakken", brands: "Merken" } },
    rook: { name: "Rook-accessoires", tagline: "15 producten", description: "Tabakspijpen, bestek en grinders vakkundig geselecteerd voor de echte liefhebber.", stats: { grinders: "Grinders", pipeSets: "Pijp-bestek sets", brands: "Merken" } },
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
    para2: "Met jarenlange ervaring adviseren wij onze klanten zowel in onze fysieke winkel als online. Ons team bestaat uit echte kenners geen callcenter, maar mensen die passie hebben voor het vak.",
    pillars: {
      dealer: { title: "Officieel dealer", body: "TBK is officieel gecertificeerd dealer van Zippo, Clipper, Colibri en Xikar. Elke aankoop is gegarandeerd authentiek." },
      shipping: { title: "Snelle levering", body: "Voor 17:00 besteld = dezelfde dag verzonden vanuit ons eigen magazijn in Nijmegen. Standaard levertijd 1-2 werkdagen binnen Nederland." },
      returns: { title: "Gratis retour", body: "Niet tevreden? Retourneer binnen 14 dagen gratis. Geen gedoe, geen vragen." },
      store: { title: "Twee winkels in Nijmegen", body: "Bezoek Tabak Molenstraat (Molenstraat 120) of Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26). Persoonlijk advies van echte kenners." },
    },
    faqEyebrow: "FAQ", faqHeading: "Veelgestelde vragen",
    faqs: {
      shipping: { q: "Wanneer wordt mijn bestelling verzonden?", a: "Bestel je vóór 17:00 op een werkdag, dan gaat je pakket dezelfde dag nog op de bus bij PostNL. Bestellingen na 17:00 of in het weekend versturen we de eerstvolgende werkdag. Je ontvangt een bevestigingsmail met track & trace zodra het pakket is ingescand. Standaard levertijd binnen Nederland is 1-2 werkdagen." },
      shippingCost: { q: "Betaal ik verzendkosten?", a: "Binnen Nederland is verzending volledig gratis vanaf €80. Onder dat bedrag rekenen we €4,95 voor standaard levering. Naar België geldt een gratis drempel van €100, daarna €6,95. Verzenden we naar andere landen, dan berekenen we het porto op basis van gewicht je ziet het exacte bedrag altijd vóór het afrekenen." },
      returns: { q: "Kan ik mijn bestelling retourneren?", a: "Je hebt 14 dagen na ontvangst de tijd om te retourneren, gratis binnen Nederland. Stuur ons een e-mail met je ordernummer, dan ontvang je een voorgefrankeerd retourlabel. Producten dienen ongeopend en in originele verpakking te zijn. Na goedkeuring wordt het aankoopbedrag binnen 5 werkdagen teruggestort." },
      authentic: { q: "Zijn de producten authentiek?", a: "Zonder uitzondering. TBK is officieel gecertificeerd dealer van Zippo, Clipper, Colibri, Xikar en alle andere merken in ons assortiment. We kopen uitsluitend in bij erkende Europese distributeurs nooit via marktplaatsen of derde partijen. Op alle Zippo-aanstekers ontvang je bovendien de levenslange fabrieksgarantie van Zippo zelf." },
      store: { q: "Kan ik ook in de winkel terecht?", a: "Zeker. We hebben twee fysieke winkels in Nijmegen: Tabak Molenstraat (Molenstraat 120, 6511 HG) en Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26, 6511 CK). Beide winkels zijn open op maandag t/m vrijdag van 09:00–18:00 en op zaterdag van 10:00–17:00. Je kunt er terecht voor persoonlijk advies, directe aankoop en de volledige collectie inclusief Zippo-modellen die niet online staan. Liever online bestellen? Kies bij het afrekenen voor 'Afhalen' en haal je bestelling gratis op in de winkel van je keuze." },
    },
    moreQuestions: "Staat je vraag er niet bij?", moreQuestionsBody: "Ons team staat klaar om je te helpen.", contactLink: "Neem contact op →",
  },
  email: {
    badgeLine1: "korting op je", badgeLine2: "eerste bestelling",
    eyebrow: "Exclusief voor abonnees",
    titleLine1: "Schrijf je in en", titleLine2: "ontvang direct je code",
    description: "Blijf op de hoogte van nieuwe collecties en deals. Alleen wat echt de moeite waard is.",
    descriptionMobile: "Nieuwe collecties, exclusieve deals direct in je inbox.",
    socialProof: "abonnees gingen je voor",
    trust: { noSpam: "Geen spam", unsubscribe: "Altijd uitschrijven", instant: "Direct geldig" },
    placeholder: "jouw@emailadres.nl",
    submit: "Ontvang 10%", submitMobile: "Ontvang 10% korting",
    successTitle: "🎉 Check je inbox!", successBody: "Je kortingscode van 10% is onderweg.",
  },
  cart: {
    title: "Winkelwagen",
    empty: "Je winkelwagen is leeg",
    emptyCta: "Verder winkelen",
    itemsOne: "{count} artikel",
    itemsMany: "{count} artikelen",
    qty: "Aantal",
    remove: "Verwijderen",
    subtotal: "Subtotaal",
    shipping: "Verzending",
    shippingFree: "Gratis vanaf €80",
    shippingFromBe: "Naar België vanaf €100",
    total: "Totaal",
    viewCart: "Winkelwagen bekijken",
    checkout: "Afrekenen",
    continueShopping: "Verder winkelen",
    addedToCart: "Toegevoegd aan je winkelwagen",
    buyNow: "Direct afrekenen",
    close: "Sluiten",
  },
  checkout: {
    title: "Afrekenen",
    breadcrumb: "Afrekenen",
    backToCart: "← Terug naar winkelwagen",
    contact: "Contact",
    contactNote: "We sturen je orderbevestiging hier naartoe.",
    email: "E-mailadres",
    phone: "Telefoonnummer",
    shippingAddress: "Verzendadres",
    firstName: "Voornaam",
    lastName: "Achternaam",
    address: "Straat en huisnummer",
    addressLine2: "Toevoeging (optioneel)",
    city: "Stad",
    postcode: "Postcode",
    country: "Land",
    paymentMethod: "Betaalmethode",
    paymentNote: "Demo-omgeving er wordt geen echte betaling verwerkt.",
    methods: { ideal: "iDEAL", card: "Creditcard", klarna: "Klarna Achteraf betalen", paypal: "PayPal" },
    summary: "Besteloverzicht",
    placeOrder: "Bestelling plaatsen",
    placing: "Bestelling plaatsen…",
    success: {
      title: "Bedankt voor je bestelling!",
      body: "We hebben je orderbevestiging per e-mail verstuurd.",
      orderNumber: "Bestelnummer",
      backHome: "Terug naar de winkel",
    },
    emptyState: "Je winkelwagen is leeg.",
    emptyStateCta: "Begin met winkelen",
    required: "Verplicht",
    delivery: {
      sectionTitle: "Bezorging of afhalen",
      sectionNote: "Kies waar je je bestelling wilt ontvangen",
      home: "Thuisbezorgd",
      homeNote: "Via PostNL · 1-2 werkdagen",
      pickupPrefix: "Afhalen — ",
      free: "Gratis",
      pickupHintBefore: "Je ontvangt een mail zodra je bestelling klaarligt in ",
      pickupHintAfter: ". Neem je orderbevestiging en een geldig ID mee.",
      pickupNameSection: "Naam voor afhalen",
      summaryPickup: "Afhalen in winkel",
    },
  },
  reviews: {
    eyebrow: "Klantbeoordelingen",
    heading: "Reviews",
    outOf: "/5",
    summary: "{rating} sterren op basis van {count} beoordelingen",
    summaryOne: "{rating} sterren op basis van {count} beoordeling",
    addReview: "Je beoordeling toevoegen",
    postedOn: "Geplaatst op",
    showMore: "Meer reviews tonen",
    showLess: "Minder tonen",
    empty: "Nog geen beoordelingen. Wees de eerste!",
    form: {
      title: "Schrijf je review",
      nameLabel: "Naam",
      namePlaceholder: "Je naam",
      ratingLabel: "Beoordeling",
      reviewLabel: "Je ervaring",
      reviewPlaceholder: "Vertel ons wat je van dit product vindt…",
      submit: "Plaatsen",
      cancel: "Annuleren",
      thanks: "Bedankt voor je review!",
      thanksBody: "Je beoordeling wordt na controle geplaatst.",
    },
    distribution: { title: "Verdeling" },
    filterAll: "Alle",
    filterByStars: "Filter op aantal sterren",
    sortLabel: "Sorteer op",
    sort: { newest: "Nieuwste eerst", highest: "Hoogste eerst", lowest: "Laagste eerst" },
    verified: "Geverifieerde aankoop",
    helpful: "Was dit nuttig?",
    helpfulMarked: "Bedankt voor je feedback",
    noMatch: "Geen reviews voor deze filter.",
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
      zippoChoice: { title: "Hoe kies je de perfecte Zippo voor jouw stijl?", excerpt: "Van gebürstet chrome tot gegraveerde limited editions Zippo biedt meer dan 1400 modellen. We helpen je kiezen op basis van gebruik, persoonlijkheid en budget." },
      zippoCare: { title: "Zippo onderhoud: zo blijft jouw aansteker als nieuw", excerpt: "Een Zippo gaat een leven lang mee maar alleen als je hem goed onderhoudt. Ontdek hoe je navult, de steen vervangt en de buitenkant polijst." },
      clipperVsZippo: { title: "Clipper vs Zippo: welke aansteker past bij jou?", excerpt: "Beide zijn legendarisch, maar voor heel verschillende gebruikers. We vergelijken vlam, navulbaarheid, design en prijs zodat jij de juiste keuze maakt." },
    },
    blog: {
      backToOverview: "← Terug naar de kennisbank",
      publishedOn: "Geplaatst op",
      writtenBy: "door",
      relatedTitle: "Lees ook",
      indexTitle: "Kennisbank",
      indexLead: "Alles wat je moet weten over aanstekers en rookaccessoires van keuzehulp tot onderhoud.",
      notFoundTitle: "Artikel niet gevonden",
      notFoundBody: "Het artikel dat je zoekt bestaat niet (meer).",
    },
  },
  footer: {
    description: "De grootste tabakspecialist van Nijmegen gespecialiseerd in aanstekers en rookaccessoires. Online en fysiek in de Molenstraat.",
    sections: { assortiment: "Assortiment", klantenservice: "Klantenservice", account: "Mijn account" },
    shop: { aanstekers: "Aanstekers", kokersEtuis: "Kokers & Etuis", knippersAsbakken: "Knippers & Asbakken", rookAccessoires: "Rook-accessoires", sale: "Sale" },
    service: { contact: "Contact", shipping: "Verzenden & leveren", returns: "Ruilen & retourneren", payment: "Betaalmethoden", faq: "Veelgestelde vragen", warranty: "Garantiebeleid" },
    accountLinks: { login: "Inloggen", register: "Registreren", orders: "Bestelhistorie", wishlist: "Verlanglijst", details: "Persoonlijke gegevens" },
    badge: { eyebrow: "Tabaksspeciaalzaak", city: "Nijmegen" },
    copyright: "Rokersbenodigdheden Nijmegen",
    legal: { privacy: "Privacybeleid", terms: "Algemene voorwaarden", cookies: "Cookiebeleid" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
  categoryFaqs: {
    zippo: {
      intro: "Alles wat je wilt weten over gebruik, onderhoud en aankoop - eerlijk en zonder verkooppraatjes.",
      items: [
        { q: "Hoe lang gaat een Zippo mee?", a: "Een Zippo heeft een levenslange garantie en gaat bij normaal gebruik generaties mee. De aanstekers worden al sinds 1932 op dezelfde manier gemaakt - van staal, voor de eeuwigheid." },
        { q: "Hoe weet ik of mijn Zippo origineel is?", a: "Kijk op de bodem: een echte Zippo heeft een datumcode, strakke scharnier, de verende klik van het deksel en een nette naad. Koop uitsluitend bij erkende verkopers zoals OneConnect." },
        { q: "Welke brandstof gebruik ik?", a: "Gebruik altijd originele Zippo-benzine. Andere benzinesoorten beschadigen de watten en geven meer reukgeur. Verkrijgbaar bij ons in de winkel en webshop." },
        { q: "Hoe vervang ik de vuursteentjes?", a: "Draai de schroef onderaan het binnenwerk eruit. Haal veer en oud steentje weg, leg een nieuw Zippo-steentje in, veer erop, schroef terug. Klaar in minder dan een minuut." },
        { q: "Mag ik een Zippo meenemen in het vliegtuig?", a: "Een gevulde aansteker is niet toegestaan in handbagage. Een lege aansteker mag in sommige gevallen wel, maar regels verschillen per maatschappij - check altijd van tevoren." },
        { q: "Hoe vaak moet ik bijvullen?", a: "Bij dagelijks gebruik gemiddeld elke 1-2 weken. Benzine verdampt ook als je hem niet gebruikt, dus vul bij wanneer de vlam zwakker wordt." },
        { q: "Kan ik een Zippo laten graveren?", a: "Ja. Veel modellen zijn geschikt voor gravure - naam, datum of afbeelding. Kom langs in onze winkel (Molenstraat 120 of Lange Hezelstraat 26 in Nijmegen) voor de mogelijkheden." },
      ],
    },
    kokers: {
      intro: "Welk materiaal past bij jou, hoe vaak vervang je filters, en waarom een houder echt verschil maakt - alles eerlijk uitgelegd.",
      items: [
        { q: "Wat is het verschil tussen een koker en een etui?", a: "Een koker is meestal van metaal, opent met een klikmechanisme en houdt sigaretten op hun plaats. Een etui is vaak van leer of textiel, soepeler in de hand en beschermt vooral tegen krassen en vocht. Beiden voorkomen breuk - kies op basis van stijl en gebruik." },
        { q: "Hoe vaak moet ik een filter in een sigarettenhouder vervangen?", a: "Bij een Denicotea-houder met actieve-koolfilter elke 5 tot 10 sigaretten. Je merkt het zelf: de trek wordt zwaarder en de smaak vlakker als het filter verzadigd is. Reservefilters bestel je per setje van 10 of 50." },
        { q: "Kan ik mijn leren etui wassen?", a: "Niet met water. Stof verwijder je met een droge doek; vlekken behandel je met een licht vochtige doek en speciale lederreiniger. Twee keer per jaar lederbalsem houdt het soepel. Onderdompelen of in de wasmachine vernielt het leer onherroepelijk." },
        { q: "Welke kokergrootte heb ik nodig?", a: "Standaard 84mm sigaretten passen in nagenoeg alle kokers in onze collectie. Voor 100mm (lange) sigaretten kies je expliciet een 'long' uitvoering. Capaciteit varieert van 10 (zakformaat) tot 20 (een hele pakje)." },
        { q: "Werken filterhouders ook bij sigaren?", a: "Voor sigaren gebruik je speciale sigarenhouders of pijpfilters - ze hebben een grotere doorgang en vaak een andere filterstructuur. Onze sigaarafdeling onder Knippers & Asbakken heeft de bijpassende accessoires." },
        { q: "Is een houder met filter beter dan zonder?", a: "Voor wie minder teer wil inademen: ja, aanzienlijk. Tests tonen 30-60% reductie in teer en nicotine bij goed onderhouden actieve-koolfilters. Voor wie de pure smaak wil: nee, een houder zonder filter behoudt het volle aroma." },
        { q: "Hoe lang gaat een goede koker mee?", a: "Bij normaal gebruik decennia. Metalen kokers van Belbox of Denicotea zijn vaak nog functioneel na 30+ jaar - alleen het scharniermechanisme kan slijten. Leer ontwikkelt patina en wordt mooier met de jaren, mits goed onderhouden." },
      ],
    },
    knippers: {
      intro: "Welke knipper voor welke sigaar, hoe je een goede asbak herkent, en wat een etui echt moet kunnen - eerlijk uitgelegd.",
      items: [
        { q: "Welke knipper is het beste - guillotine, V-cut of punch?", a: "Voor de meeste sigaren: guillotine - een rechte snede, voorspelbare trek. V-cut concentreert de rook richting tong en accentueert smaak - populair bij robusto's. Punch maakt een klein gaatje, geeft een geconcentreerde trek maar minder rookvolume. Beginners kiezen guillotine; daar gaat zelden iets mis." },
        { q: "Kan ik mijn knipper laten slijpen?", a: "Ja, kwalitatieve knippers zoals Bookwill en Faro hebben verwisselbare of slijpbare lemmeten. Breng hem langs in onze winkel; voor een paar euro snijdt hij weer als nieuw. Goedkope wegwerpknippers laten zich helaas niet slijpen - daarom investeer je beter in één goede." },
        { q: "Waarom een sigaren-asbak en geen gewone?", a: "Een sigaar duurt 30-90 minuten. In die tijd vormt zich een lange askolom die je liever niet afklopt. Sigaren-asbakken hebben uitsparingen breed genoeg om een sigaar rustig neer te leggen zonder dat de as eraf valt, en zijn diep genoeg om geen geur te verspreiden." },
        { q: "Hoe lang houdt een sigaar in een etui?", a: "In een goed cederhouten etui blijft een sigaar 5-7 dagen in optimale conditie - genoeg voor een lang weekend of zakenreis. Voor langer (weken tot maanden) is een humidor met vocht-regulatie nodig. Een etui is voor onderweg, niet voor opslag." },
        { q: "Welke kant van de sigaar knip ik?", a: "De cap - de gesloten, afgeronde kant. De andere kant (de voet) is de open kant die je aansteekt. Knip altijd net voor de schouder, het zichtbare lijntje waar de cap aan de wikkel is bevestigd. Knip je in de schouder, dan valt de wikkel uit." },
        { q: "Mag ik mijn sigarenetui in de koelkast bewaren?", a: "Liever niet. Koelkasten zijn droog en koud - slecht voor sigaren. Bewaar het etui op kamertemperatuur (16-22°C), uit direct zonlicht. Een lade of kast is prima. Een humidor blijft de gouden standaard voor langere bewaring." },
        { q: "Is een dure asbak echt beter dan een goedkope?", a: "Voor sigaren: ja. Goedkope asbakken zijn vaak licht, plaatstalen, met scherpe randen. Een Faro-asbak is gegoten massief, weegt 800g+, kantelt niet en heeft gepolijste uitsparingen die de sigaar niet beschadigen. Het verschil voel je elke avond opnieuw." },
      ],
    },
  },
  product: {
    breadcrumbHome: "Home",
    notFound: "Product niet gevonden",
    notFoundCta: "Terug naar de collectie",
    reviewsLabel: "beoordelingen",
    addToCart: "In winkelwagen",
    addedToCart: "Toegevoegd",
    buyNow: "Direct bestellen",
    trust: {
      freeShipping: "Gratis verzending vanaf € 80 (NL) & € 100 (BE)",
      sameDay: "Voor 17:00 besteld = vandaag verzonden",
      freeReturns: "14 dagen retourneren binnen Nederland",
    },
    accordion: {
      description: "Productomschrijving",
      specs: "Specificaties",
      shipping: "Verzending & levering",
      shippingBody: "Bestel je vóór 17:00 op een werkdag, dan gaat je pakket dezelfde dag nog op de bus bij PostNL. Standaard levertijd binnen Nederland is 1-2 werkdagen. Gratis verzending bij bestellingen vanaf € 80 (NL) / € 100 (BE).",
    },
    relatedHeading: "Gerelateerde producten",
    backToCollection: "Terug naar collectie",
  },
  shippingNote: {
    eligible: "Voor 17:00 besteld = vandaag verzonden",
    notEligible: "Niet beschikbaar voor same-day verzending",
  },
  collection: {
    sidebar: {
      categoriesHeading: "Categorieën",
      allInCategory: "Alle producten",
      typeHeading: "Type product",
      allTypes: "Alle types",
      brandsHeading: "Merken",
      allBrands: "Alle merken",
      priceHeading: "Prijs",
      clearPriceFilter: "Prijs filter wissen",
    },
    toolbar: {
      filters: "Filters",
      ofProducts: "van",
      productsWord: "producten",
      sortLabel: "Sorteren:",
      sortOptions: {
        recommended: "Meest geliefd",
        priceAsc: "Prijs ↑",
        priceDesc: "Prijs ↓",
        rating: "Beoordeling",
      },
    },
    chips: { clearAll: "Wis alle filters" },
    empty: { noProducts: "Geen producten gevonden", clearFilters: "Wis filters" },
    pagination: { prev: "← Vorige", next: "Volgende →", pageWord: "Pagina", ofWord: "van" },
  },
  search: {
    promptHero: "Gebruik de zoekbalk hierboven om producten te vinden.",
    noResultsHeading: "Geen producten gevonden",
    noResultsBodyBefore: "We konden niets vinden voor ",
    noResultsBodyAfter: ". Probeer een ander woord, merk of categorie.",
    allResults: "Alle resultaten",
    breadcrumb: "Zoekresultaten",
    headingDefault: "Zoeken",
    headingForBefore: "Resultaten voor ",
    countBefore: "",
    countAfter: " producten gevonden",
    startTyping: "Type een zoekterm om te beginnen",
    catalogTagline: "449 producten · Grootste tabakspecialist van Nijmegen",
    autocomplete: {
      clearQuery: "Wis zoekopdracht",
      submit: "Zoeken",
      productsSection: "Producten",
      categoriesSection: "Categorieën",
      noResultsBeforeQuery: "Geen resultaten voor \"",
      noResultsAfterQuery: "\"",
      tryBrand: "Probeer een merk (Zippo, Clipper) of categorie.",
      allResultsForBefore: "Alle resultaten voor \"",
      productSingular: "product",
      productPlural: "producten",
    },
  },
  sale: {
    breadcrumb: "Sale",
    heroTitleAll: "Sale · Tijdelijke aanbiedingen",
    heroTitlePrefix: "Sale · ",
    heroSubBefore: "Nog ",
    heroSubMiddle: " stuks op voorraad uit onze premium sale-collectie · ",
    heroSubAfter: " uitverkocht",
    heroTagline: "Op = op · Tabaksspeciaalzaak Nijmegen",
    toolbarOver: "over",
    toolbarSoldOut: "uitverkocht",
  },
  accountLogin: {
    heading: "Inloggen",
    intro: "Log in om je bestellingen, verlanglijst en persoonlijke gegevens in één plek terug te vinden.",
    emailLabel: "E-mailadres",
    emailPlaceholder: "naam@voorbeeld.nl",
    passwordLabel: "Wachtwoord",
    forgot: "Vergeten?",
    remember: "Onthoud mij op dit apparaat",
    submit: "Inloggen",
    noAccount: "Nog geen account?",
    registerHere: "Registreer hier",
  },
};

const EN: Dict = {
  promo: {
    msg1: "New: Zippo Limited Edition 2025 collection is in", msg1Cta: "Shop now",
    msg2: "Free shipping from €80 standard delivery 2-3 working days",
    msg3: "Nijmegen's largest tobacco specialist visit our store", msg3Cta: "Get directions",
    close: "Close", prev: "Previous", next: "Next",
  },
  header: {
    openMenu: "Open menu", closeMenu: "Close menu",
    searchPlaceholder: "Search by product, brand or category…",
    chooseLanguage: "Choose your language", chooseCurrency: "Choose your currency",
    account: "Account", wishlist: "Wishlist", cart: "Cart",
    assortiment: "Shop",
    nav: { aanstekers: "Lighters", kokersEtuis: "Cases & Sleeves", knippersAsbakken: "Cutters & Ashtrays", rookAccessoires: "Smoking accessories", sale: "Sale", klantenservice: "Customer service" },
    mega: {
      aanstekers: { title: "Lighters", zippo: "Zippo lighters", clipper: "Clipper & regular", zippoAcc: "Zippo accessories" },
      kokers: { title: "Cases & Sleeves", cigaretteCases: "Cigarette cases", filters: "Filters & holders", ashtrays: "Ashtrays", rolling: "Tubes & rolling paper" },
      knippers: { title: "Cutters & Ashtrays", cigarCutters: "Cigar cutters", cigarCases: "Cigar cases", cigarAshtrays: "Cigar ashtrays", humidors: "Humidors" },
      rook: { title: "Smoking accessories", bruyerePipes: "Briar pipes", pipeCutlery: "Pipe tools", grinders: "Tobacco grinders", cannabis: "Cannabis accessories" },
      viewAll: "View full assortment →", deals: "Deals", newItems: "New arrivals",
    },
    usp: { freeShipping: "Free shipping from €80", sameDay: "Order by 5 pm = same-day shipping", freeReturns: "14-day returns", securePay: "Secure payment via iDEAL & Klarna" },
    rating: "4.8 / 5 Google Reviews",
    mobileMenu: "Menu", mobileAccount: "My account", mobileWishlist: "Wishlist",
  },
  hero: {
    eyebrow: "Tobacco specialist Nijmegen",
    titleLine1: "500+ different", titleLine2: "essentials",
    description: "Nijmegen's largest collection of smoking essentials Zippo, Clipper, pipe accessories and more.",
    cta: "Shop now",
    imageAlt: "Lighter collection",
  },
  quickCategories: {
    label: "Quick navigation",
    items: { zippo: "Zippo lighters", clipper: "Clipper lighters", zippoAcc: "Zippo accessories", cigaretteAcc: "Cigarette accessories", vloei: "Papers & filters", knippers: "Cigar cutters", asbakken: "Ashtrays", pipesAcc: "Pipes & accessories" },
  },
  categoryShowcase: {
    eyebrow: "Our assortment", heading: "Product categories", viewAll: "View all", cta: "Shop collection",
    aanstekers: { name: "Lighters", tagline: "336 models", description: "From timeless Zippos to reliable Clipper and Ronson the largest selection of lighters in the Netherlands.", stats: { zippoModels: "Zippo models", clipperRegular: "Clipper & regular", zippoAcc: "Zippo accessories" } },
    kokers: { name: "Cases & Sleeves", tagline: "70 products", description: "Cigarette cases, sleeves, filters and holders stylish and practical for every smoker.", stats: { casesEtuis: "Cases & sleeves", filtersHolders: "Filters & holders", brands: "Brands" } },
    knippers: { name: "Cutters & Ashtrays", tagline: "28 products", description: "Precision cutters, elegant ashtrays and cigar cases from top brands like Bookwill and Faro.", stats: { cutters: "Cutters", ashtrays: "Ashtrays", brands: "Brands" } },
    rook: { name: "Smoking accessories", tagline: "15 products", description: "Tobacco pipes, tools and grinders expertly selected for the true enthusiast.", stats: { grinders: "Grinders", pipeSets: "Pipe tool sets", brands: "Brands" } },
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
    para2: "With years of experience we advise our customers both in our physical store and online. Our team consists of true connoisseurs no call center, just people with a passion for the craft.",
    pillars: {
      dealer: { title: "Authorised dealer", body: "TBK is an officially certified dealer of Zippo, Clipper, Colibri and Xikar. Every purchase is guaranteed authentic." },
      shipping: { title: "Fast delivery", body: "Order by 5 pm = same-day shipping from our own warehouse in Nijmegen. Standard delivery 1-2 working days within the Netherlands." },
      returns: { title: "Free returns", body: "Not satisfied? Return free of charge within 14 days. No hassle, no questions." },
      store: { title: "Two shops in Nijmegen", body: "Visit Tabak Molenstraat (Molenstraat 120) or Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26). Personal advice from real experts." },
    },
    faqEyebrow: "FAQ", faqHeading: "Frequently asked questions",
    faqs: {
      shipping: { q: "When will my order be shipped?", a: "Order before 5 pm on a working day and your parcel goes out with PostNL the same day. Orders placed after 5 pm or during the weekend are shipped the next working day. You'll receive a confirmation email with track & trace as soon as the parcel is scanned. Standard delivery within the Netherlands is 1-2 working days." },
      shippingCost: { q: "Do I pay shipping costs?", a: "Within the Netherlands, shipping is fully free from €80. Below that we charge €4.95 for standard delivery. To Belgium the free threshold is €100, after which it's €6.95. For other countries we calculate postage based on weight you'll always see the exact amount before checkout." },
      returns: { q: "Can I return my order?", a: "You have 14 days after receipt to return your order, free within the Netherlands. Send us an email with your order number and you'll receive a prepaid return label. Products must be unopened and in their original packaging. After approval the purchase amount is refunded within 5 working days." },
      authentic: { q: "Are the products authentic?", a: "Without exception. TBK is an officially certified dealer of Zippo, Clipper, Colibri, Xikar and every other brand in our assortment. We buy exclusively from authorised European distributors never via marketplaces or third parties. On all Zippo lighters you also receive Zippo's lifetime factory warranty." },
      store: { q: "Can I visit the store in person?", a: "Absolutely. We have two physical shops in Nijmegen: Tabak Molenstraat (Molenstraat 120, 6511 HG) and Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26, 6511 CK). Both shops are open Monday to Friday from 9 AM to 6 PM and on Saturdays from 10 AM to 5 PM. You can come for personal advice, immediate purchase and to view the full collection including Zippo models that aren't online. Prefer to order online? Choose 'Pickup' at checkout and collect your order for free at either shop." },
    },
    moreQuestions: "Don't see your question?", moreQuestionsBody: "Our team is ready to help.", contactLink: "Get in touch →",
  },
  email: {
    badgeLine1: "off your", badgeLine2: "first order",
    eyebrow: "Exclusive for subscribers",
    titleLine1: "Sign up and", titleLine2: "get your code instantly",
    description: "Stay up to date with new collections and deals. Only what's truly worth it.",
    descriptionMobile: "New collections, exclusive deals straight to your inbox.",
    socialProof: "subscribers already joined",
    trust: { noSpam: "No spam", unsubscribe: "Unsubscribe anytime", instant: "Instantly valid" },
    placeholder: "your@email.com",
    submit: "Get 10%", submitMobile: "Get 10% off",
    successTitle: "🎉 Check your inbox!", successBody: "Your 10% discount code is on its way.",
  },
  cart: {
    title: "Cart",
    empty: "Your cart is empty",
    emptyCta: "Continue shopping",
    itemsOne: "{count} item",
    itemsMany: "{count} items",
    qty: "Qty",
    remove: "Remove",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shippingFree: "Free over €80",
    shippingFromBe: "To Belgium free over €100",
    total: "Total",
    viewCart: "View cart",
    checkout: "Checkout",
    continueShopping: "Continue shopping",
    addedToCart: "Added to your cart",
    buyNow: "Buy now",
    close: "Close",
  },
  checkout: {
    title: "Checkout",
    breadcrumb: "Checkout",
    backToCart: "← Back to cart",
    contact: "Contact",
    contactNote: "We'll send your order confirmation here.",
    email: "Email address",
    phone: "Phone number",
    shippingAddress: "Shipping address",
    firstName: "First name",
    lastName: "Last name",
    address: "Street and number",
    addressLine2: "Apartment, suite (optional)",
    city: "City",
    postcode: "Postcode",
    country: "Country",
    paymentMethod: "Payment method",
    paymentNote: "Demo environment no real payment is processed.",
    methods: { ideal: "iDEAL", card: "Credit card", klarna: "Klarna Pay later", paypal: "PayPal" },
    summary: "Order summary",
    placeOrder: "Place order",
    placing: "Placing order…",
    success: {
      title: "Thank you for your order!",
      body: "We've sent your order confirmation by email.",
      orderNumber: "Order number",
      backHome: "Back to the shop",
    },
    emptyState: "Your cart is empty.",
    emptyStateCta: "Start shopping",
    required: "Required",
    delivery: {
      sectionTitle: "Delivery or pickup",
      sectionNote: "Choose where you want to receive your order",
      home: "Home delivery",
      homeNote: "Via PostNL · 1-2 working days",
      pickupPrefix: "Pickup — ",
      free: "Free",
      pickupHintBefore: "You'll receive an email as soon as your order is ready at ",
      pickupHintAfter: ". Please bring your order confirmation and a valid ID.",
      pickupNameSection: "Name for pickup",
      summaryPickup: "In-store pickup",
    },
  },
  reviews: {
    eyebrow: "Customer reviews",
    heading: "Reviews",
    outOf: "/5",
    summary: "{rating} stars based on {count} reviews",
    summaryOne: "{rating} stars based on {count} review",
    addReview: "Write a review",
    postedOn: "Posted on",
    showMore: "Show more reviews",
    showLess: "Show fewer",
    empty: "No reviews yet. Be the first!",
    form: {
      title: "Write your review",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      ratingLabel: "Rating",
      reviewLabel: "Your experience",
      reviewPlaceholder: "Tell us what you think of this product…",
      submit: "Submit",
      cancel: "Cancel",
      thanks: "Thanks for your review!",
      thanksBody: "Your review will be published after moderation.",
    },
    distribution: { title: "Distribution" },
    filterAll: "All",
    filterByStars: "Filter by star rating",
    sortLabel: "Sort by",
    sort: { newest: "Newest first", highest: "Highest rated", lowest: "Lowest rated" },
    verified: "Verified buyer",
    helpful: "Was this helpful?",
    helpfulMarked: "Thanks for your feedback",
    noMatch: "No reviews match this filter.",
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
      zippoChoice: { title: "How to pick the perfect Zippo for your style", excerpt: "From brushed chrome to engraved limited editions Zippo offers more than 1,400 models. We'll help you choose based on use, personality and budget." },
      zippoCare: { title: "Zippo care: keep your lighter looking new", excerpt: "A Zippo lasts a lifetime but only if you maintain it properly. Learn how to refill, replace the flint and polish the case." },
      clipperVsZippo: { title: "Clipper vs Zippo: which lighter suits you?", excerpt: "Both are legendary, but they serve very different users. We compare flame, refillability, design and price so you can make the right choice." },
    },
    blog: {
      backToOverview: "← Back to the knowledge base",
      publishedOn: "Published on",
      writtenBy: "by",
      relatedTitle: "Read next",
      indexTitle: "Knowledge base",
      indexLead: "Everything you need to know about lighters and smoking accessories from picking the right one to maintenance.",
      notFoundTitle: "Article not found",
      notFoundBody: "The article you're looking for doesn't exist (any more).",
    },
  },
  footer: {
    description: "Nijmegen's largest tobacco specialist specialised in lighters and smoking accessories. Online and at our physical store on Molenstraat.",
    sections: { assortiment: "Shop", klantenservice: "Customer service", account: "My account" },
    shop: { aanstekers: "Lighters", kokersEtuis: "Cases & Sleeves", knippersAsbakken: "Cutters & Ashtrays", rookAccessoires: "Smoking accessories", sale: "Sale" },
    service: { contact: "Contact", shipping: "Shipping & delivery", returns: "Exchanges & returns", payment: "Payment methods", faq: "FAQ", warranty: "Warranty policy" },
    accountLinks: { login: "Log in", register: "Register", orders: "Order history", wishlist: "Wishlist", details: "Personal details" },
    badge: { eyebrow: "Tobacco specialist", city: "Nijmegen" },
    copyright: "Rokersbenodigdheden Nijmegen",
    legal: { privacy: "Privacy policy", terms: "Terms & conditions", cookies: "Cookie policy" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
  categoryFaqs: {
    zippo: {
      intro: "Everything you want to know about use, maintenance and purchase - honest and without the sales pitch.",
      items: [
        { q: "How long does a Zippo last?", a: "A Zippo comes with a lifetime warranty and, in normal use, lasts for generations. The lighters have been built the same way since 1932 - steel, made to outlast you." },
        { q: "How do I know my Zippo is original?", a: "Check the bottom: a real Zippo has a date code, a tight hinge, the springy click of the lid and a clean seam. Only buy from authorised resellers like OneConnect." },
        { q: "Which fuel should I use?", a: "Always use original Zippo lighter fluid. Other fuels damage the wick and give off more odour. Available in our shop and webshop." },
        { q: "How do I replace the flints?", a: "Unscrew the screw at the bottom of the insert. Remove the spring and the old flint, drop in a new Zippo flint, replace the spring, screw back in. Done in under a minute." },
        { q: "Can I take a Zippo on a plane?", a: "A filled lighter is not allowed in hand luggage. An empty lighter is sometimes permitted, but rules vary by airline - always check beforehand." },
        { q: "How often do I need to refill?", a: "With daily use, on average every 1-2 weeks. Lighter fluid also evaporates when you don't use it, so top up when the flame weakens." },
        { q: "Can I have a Zippo engraved?", a: "Yes. Many models are suitable for engraving - name, date or image. Come by our shop (Molenstraat 120 or Lange Hezelstraat 26 in Nijmegen) to discuss the options." },
      ],
    },
    kokers: {
      intro: "Which material suits you, how often to change filters, and why a holder genuinely makes a difference - explained honestly.",
      items: [
        { q: "What is the difference between a case and a sleeve?", a: "A case is usually metal, opens with a click mechanism and keeps cigarettes in place. A sleeve is often leather or fabric, softer in the hand and mainly protects against scratches and moisture. Both prevent breakage - choose based on style and use." },
        { q: "How often should I replace the filter in a cigarette holder?", a: "In a Denicotea holder with an activated-charcoal filter, every 5 to 10 cigarettes. You'll notice it yourself: the draw gets heavier and the taste flatter when the filter is saturated. Replacement filters are sold in sets of 10 or 50." },
        { q: "Can I wash my leather sleeve?", a: "Not with water. Remove dust with a dry cloth; treat stains with a slightly damp cloth and dedicated leather cleaner. Apply leather balm twice a year to keep it supple. Submerging it or putting it in the washing machine ruins the leather permanently." },
        { q: "What case size do I need?", a: "Standard 84mm cigarettes fit in virtually every case in our collection. For 100mm (long) cigarettes choose a 'long' version explicitly. Capacity ranges from 10 (pocket size) to 20 (a full pack)." },
        { q: "Do filter holders also work for cigars?", a: "For cigars you use dedicated cigar holders or pipe filters - they have a larger bore and often a different filter structure. Our cigar department under Cutters & Ashtrays carries the matching accessories." },
        { q: "Is a holder with filter better than without?", a: "For those who want to inhale less tar: yes, considerably. Tests show 30-60% reduction in tar and nicotine with a well-maintained activated-charcoal filter. For those who want pure flavour: no, a holder without filter preserves the full aroma." },
        { q: "How long does a good case last?", a: "With normal use, decades. Metal cases from Belbox or Denicotea are often still functional after 30+ years - only the hinge mechanism can wear out. Leather develops patina and gets better with age, provided it is well maintained." },
      ],
    },
    knippers: {
      intro: "Which cutter for which cigar, how to recognise a good ashtray, and what a case really needs to do - explained honestly.",
      items: [
        { q: "Which cutter is best - guillotine, V-cut or punch?", a: "For most cigars: guillotine - a straight cut, predictable draw. V-cut concentrates the smoke toward the tongue and accentuates flavour - popular with robustos. Punch makes a small hole, giving a concentrated draw but less smoke volume. Beginners choose guillotine; little can go wrong with it." },
        { q: "Can I have my cutter sharpened?", a: "Yes, quality cutters from Bookwill and Faro have replaceable or re-sharpenable blades. Bring it to our shop; for a few euros it cuts like new again. Cheap disposable cutters unfortunately can't be sharpened - which is why investing in one good cutter pays off." },
        { q: "Why a cigar ashtray and not a regular one?", a: "A cigar lasts 30-90 minutes. In that time a long column of ash forms that you'd rather not tap off. Cigar ashtrays have rests wide enough to lay a cigar down without the ash falling off, and are deep enough not to spread smell." },
        { q: "How long does a cigar last in a case?", a: "In a good cedar-lined case a cigar stays in optimal condition for 5-7 days - enough for a long weekend or business trip. For longer (weeks to months) you need a humidor with humidity control. A case is for travel, not for storage." },
        { q: "Which end of the cigar do I cut?", a: "The cap - the closed, rounded end. The other end (the foot) is the open end you light. Always cut just before the shoulder, the visible line where the cap meets the wrapper. Cut into the shoulder and the wrapper unravels." },
        { q: "Can I store my cigar case in the fridge?", a: "Better not. Fridges are dry and cold - bad for cigars. Store the case at room temperature (16-22°C), out of direct sunlight. A drawer or cabinet is fine. A humidor remains the gold standard for longer storage." },
        { q: "Is an expensive ashtray really better than a cheap one?", a: "For cigars: yes. Cheap ashtrays are often light, thin steel, with sharp edges. A Faro ashtray is solid cast, weighs 800g+, doesn't tip and has polished rests that don't damage the cigar. The difference you feel every evening." },
      ],
    },
  },
  product: {
    breadcrumbHome: "Home",
    notFound: "Product not found",
    notFoundCta: "Back to the collection",
    reviewsLabel: "reviews",
    addToCart: "Add to cart",
    addedToCart: "Added",
    buyNow: "Buy now",
    trust: {
      freeShipping: "Free shipping from € 80 (NL) & € 100 (BE)",
      sameDay: "Order by 5 pm = same-day shipping",
      freeReturns: "14-day returns within the Netherlands",
    },
    accordion: {
      description: "Product description",
      specs: "Specifications",
      shipping: "Shipping & delivery",
      shippingBody: "Order before 5 pm on a working day and your parcel goes out with PostNL the same day. Standard delivery within the Netherlands is 1-2 working days. Free shipping from € 80 (NL) / € 100 (BE).",
    },
    relatedHeading: "Related products",
    backToCollection: "Back to collection",
  },
  shippingNote: {
    eligible: "Order by 5 pm = same-day shipping",
    notEligible: "Not eligible for same-day shipping",
  },
  collection: {
    sidebar: {
      categoriesHeading: "Categories",
      allInCategory: "All products",
      typeHeading: "Product type",
      allTypes: "All types",
      brandsHeading: "Brands",
      allBrands: "All brands",
      priceHeading: "Price",
      clearPriceFilter: "Clear price filter",
    },
    toolbar: {
      filters: "Filters",
      ofProducts: "of",
      productsWord: "products",
      sortLabel: "Sort:",
      sortOptions: {
        recommended: "Most loved",
        priceAsc: "Price ↑",
        priceDesc: "Price ↓",
        rating: "Rating",
      },
    },
    chips: { clearAll: "Clear all filters" },
    empty: { noProducts: "No products found", clearFilters: "Clear filters" },
    pagination: { prev: "← Previous", next: "Next →", pageWord: "Page", ofWord: "of" },
  },
  search: {
    promptHero: "Use the search bar above to find products.",
    noResultsHeading: "No products found",
    noResultsBodyBefore: "We couldn't find anything for ",
    noResultsBodyAfter: ". Try a different word, brand or category.",
    allResults: "All results",
    breadcrumb: "Search results",
    headingDefault: "Search",
    headingForBefore: "Results for ",
    countBefore: "",
    countAfter: " products found",
    startTyping: "Type a search term to begin",
    catalogTagline: "449 products · Largest tobacco specialist in Nijmegen",
    autocomplete: {
      clearQuery: "Clear search",
      submit: "Search",
      productsSection: "Products",
      categoriesSection: "Categories",
      noResultsBeforeQuery: "No results for \"",
      noResultsAfterQuery: "\"",
      tryBrand: "Try a brand (Zippo, Clipper) or category.",
      allResultsForBefore: "All results for \"",
      productSingular: "product",
      productPlural: "products",
    },
  },
  sale: {
    breadcrumb: "Sale",
    heroTitleAll: "Sale · Limited-time offers",
    heroTitlePrefix: "Sale · ",
    heroSubBefore: "Still ",
    heroSubMiddle: " items left from our premium sale collection · ",
    heroSubAfter: " sold out",
    heroTagline: "While stocks last · Tabaksspeciaalzaak Nijmegen",
    toolbarOver: "left",
    toolbarSoldOut: "sold out",
  },
  accountLogin: {
    heading: "Sign in",
    intro: "Sign in to find your orders, wishlist and personal details in one place.",
    emailLabel: "Email address",
    emailPlaceholder: "name@example.com",
    passwordLabel: "Password",
    forgot: "Forgot?",
    remember: "Remember me on this device",
    submit: "Sign in",
    noAccount: "No account yet?",
    registerHere: "Register here",
  },
};

const DE: Dict = {
  promo: {
    msg1: "Neu: Zippo Limited Edition 2025 Kollektion ist da", msg1Cta: "Jetzt entdecken",
    msg2: "Kostenloser Versand ab €80 Standardlieferzeit 2-3 Werktage",
    msg3: "Der größte Tabakfachhandel in Nijmegen besuchen Sie unser Geschäft", msg3Cta: "Wegbeschreibung",
    close: "Schließen", prev: "Zurück", next: "Weiter",
  },
  header: {
    openMenu: "Menü öffnen", closeMenu: "Menü schließen",
    searchPlaceholder: "Suche nach Produkt, Marke oder Kategorie…",
    chooseLanguage: "Sprache wählen", chooseCurrency: "Währung wählen",
    account: "Konto", wishlist: "Wunschliste", cart: "Warenkorb",
    assortiment: "Sortiment",
    nav: { aanstekers: "Feuerzeuge", kokersEtuis: "Etuis & Hüllen", knippersAsbakken: "Cutter & Aschenbecher", rookAccessoires: "Raucherzubehör", sale: "Sale", klantenservice: "Kundenservice" },
    mega: {
      aanstekers: { title: "Feuerzeuge", zippo: "Zippo Feuerzeuge", clipper: "Clipper & Standard", zippoAcc: "Zippo Zubehör" },
      kokers: { title: "Etuis & Hüllen", cigaretteCases: "Zigarettenetuis", filters: "Filter & Halter", ashtrays: "Aschenbecher", rolling: "Hülsen & Papier" },
      knippers: { title: "Cutter & Aschenbecher", cigarCutters: "Zigarrencutter", cigarCases: "Zigarrenetuis", cigarAshtrays: "Zigarren-Aschenbecher", humidors: "Humidore" },
      rook: { title: "Raucherzubehör", bruyerePipes: "Bruyère-Pfeifen", pipeCutlery: "Pfeifenbesteck", grinders: "Tabakmühlen", cannabis: "Cannabis-Zubehör" },
      viewAll: "Gesamtes Sortiment ansehen →", deals: "Angebote", newItems: "Neuheiten",
    },
    usp: { freeShipping: "Kostenloser Versand ab €80", sameDay: "Vor 17 Uhr bestellt = heute versendet", freeReturns: "14 Tage Rückgaberecht", securePay: "Sicher bezahlen via iDEAL & Klarna" },
    rating: "4.8 / 5 Google Bewertungen",
    mobileMenu: "Menü", mobileAccount: "Mein Konto", mobileWishlist: "Wunschliste",
  },
  hero: {
    eyebrow: "Tabakfachhandel Nijmegen",
    titleLine1: "500+ verschiedene", titleLine2: "Artikel",
    description: "Die größte Auswahl an Raucherbedarf in Nijmegen Zippo, Clipper, Pfeifenzubehör und mehr.",
    cta: "Sortiment ansehen",
    imageAlt: "Feuerzeug-Kollektion",
  },
  quickCategories: {
    label: "Schnellzugriff",
    items: { zippo: "Zippo Feuerzeuge", clipper: "Clipper Feuerzeuge", zippoAcc: "Zippo Zubehör", cigaretteAcc: "Zigarettenzubehör", vloei: "Blättchen & Filter", knippers: "Zigarrenscheren", asbakken: "Aschenbecher", pipesAcc: "Pfeifen & Zubehör" },
  },
  categoryShowcase: {
    eyebrow: "Unser Sortiment", heading: "Produktkategorien", viewAll: "Alle ansehen", cta: "Kollektion ansehen",
    aanstekers: { name: "Feuerzeuge", tagline: "336 Modelle", description: "Von zeitlosen Zippos bis zu zuverlässigen Clipper und Ronson die größte Feuerzeugauswahl in den Niederlanden.", stats: { zippoModels: "Zippo Modelle", clipperRegular: "Clipper & Standard", zippoAcc: "Zippo Zubehör" } },
    kokers: { name: "Etuis & Hüllen", tagline: "70 Produkte", description: "Zigarettenetuis, Hüllen, Filter und Halter stilvoll und praktisch für jeden Raucher.", stats: { casesEtuis: "Etuis & Hüllen", filtersHolders: "Filter & Halter", brands: "Marken" } },
    knippers: { name: "Cutter & Aschenbecher", tagline: "28 Produkte", description: "Präzisionscutter, elegante Aschenbecher und Zigarrenetuis von Top-Marken wie Bookwill und Faro.", stats: { cutters: "Cutter", ashtrays: "Aschenbecher", brands: "Marken" } },
    rook: { name: "Raucherzubehör", tagline: "15 Produkte", description: "Tabakpfeifen, Besteck und Mühlen sorgfältig ausgewählt für den echten Liebhaber.", stats: { grinders: "Mühlen", pipeSets: "Pfeifenbesteck-Sets", brands: "Marken" } },
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
    para2: "Mit langjähriger Erfahrung beraten wir unsere Kunden im Geschäft wie auch online. Unser Team besteht aus echten Kennern kein Callcenter, sondern Menschen mit Leidenschaft für das Handwerk.",
    pillars: {
      dealer: { title: "Offizieller Händler", body: "TBK ist offiziell zertifizierter Händler von Zippo, Clipper, Colibri und Xikar. Jeder Kauf ist garantiert authentisch." },
      shipping: { title: "Schnelle Lieferung", body: "Vor 17:00 Uhr bestellt = noch am selben Tag aus unserem Lager in Nijmegen versendet. Standardlieferzeit 1-2 Werktage innerhalb der Niederlande." },
      returns: { title: "Kostenlose Rücksendung", body: "Nicht zufrieden? Rücksendung innerhalb von 14 Tagen kostenlos. Kein Aufwand, keine Fragen." },
      store: { title: "Zwei Geschäfte in Nijmegen", body: "Besuchen Sie Tabak Molenstraat (Molenstraat 120) oder Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26). Persönliche Beratung von echten Kennern." },
    },
    faqEyebrow: "FAQ", faqHeading: "Häufig gestellte Fragen",
    faqs: {
      shipping: { q: "Wann wird meine Bestellung versendet?", a: "Bestellungen, die werktags vor 17:00 Uhr eingehen, versenden wir noch am selben Tag mit PostNL. Bestellungen nach 17:00 Uhr oder am Wochenende werden am nächsten Werktag versendet. Sobald Ihr Paket gescannt wurde, erhalten Sie eine Bestätigungsmail mit Track & Trace. Die Standardlieferzeit innerhalb der Niederlande beträgt 1-2 Werktage." },
      shippingCost: { q: "Zahle ich Versandkosten?", a: "Innerhalb der Niederlande ist der Versand ab €80 vollständig kostenlos. Darunter berechnen wir €4,95 für die Standardlieferung. Nach Belgien gilt die kostenlose Schwelle von €100, danach €6,95. Versenden wir in andere Länder, berechnen wir das Porto nach Gewicht den genauen Betrag sehen Sie immer vor dem Bezahlen." },
      returns: { q: "Kann ich meine Bestellung zurücksenden?", a: "Sie haben 14 Tage nach Erhalt Zeit zur Rücksendung, kostenlos innerhalb der Niederlande. Senden Sie uns eine E-Mail mit Ihrer Bestellnummer, dann erhalten Sie ein vorfrankiertes Retourenetikett. Produkte müssen ungeöffnet und in Originalverpackung sein. Nach Genehmigung wird der Kaufbetrag innerhalb von 5 Werktagen erstattet." },
      authentic: { q: "Sind die Produkte authentisch?", a: "Ohne Ausnahme. TBK ist offiziell zertifizierter Händler von Zippo, Clipper, Colibri, Xikar und allen weiteren Marken in unserem Sortiment. Wir kaufen ausschließlich bei autorisierten europäischen Distributoren niemals über Marktplätze oder Drittanbieter. Auf alle Zippo-Feuerzeuge erhalten Sie zudem die lebenslange Werksgarantie von Zippo." },
      store: { q: "Kann ich auch im Geschäft vorbeikommen?", a: "Selbstverständlich. Wir haben zwei Ladengeschäfte in Nijmegen: Tabak Molenstraat (Molenstraat 120, 6511 HG) und Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26, 6511 CK). Beide Geschäfte sind Montag bis Freitag von 09:00–18:00 und samstags von 10:00–17:00 geöffnet. Sie erhalten persönliche Beratung, können direkt einkaufen und die gesamte Kollektion ansehen einschließlich Zippo-Modellen, die nicht online sind. Lieber online bestellen? Wählen Sie an der Kasse „Abholung\" und holen Sie Ihre Bestellung kostenlos in einem unserer Geschäfte ab." },
    },
    moreQuestions: "Ihre Frage nicht dabei?", moreQuestionsBody: "Unser Team hilft Ihnen gerne weiter.", contactLink: "Kontakt aufnehmen →",
  },
  email: {
    badgeLine1: "Rabatt auf Ihre", badgeLine2: "erste Bestellung",
    eyebrow: "Exklusiv für Abonnenten",
    titleLine1: "Anmelden und", titleLine2: "Code sofort erhalten",
    description: "Bleiben Sie über neue Kollektionen und Angebote informiert. Nur was wirklich lohnenswert ist.",
    descriptionMobile: "Neue Kollektionen, exklusive Angebote direkt in Ihren Posteingang.",
    socialProof: "Abonnenten sind schon dabei",
    trust: { noSpam: "Kein Spam", unsubscribe: "Jederzeit abbestellen", instant: "Sofort gültig" },
    placeholder: "ihre@email.de",
    submit: "10% erhalten", submitMobile: "10% Rabatt erhalten",
    successTitle: "🎉 Posteingang prüfen!", successBody: "Ihr 10% Rabattcode ist unterwegs.",
  },
  cart: {
    title: "Warenkorb",
    empty: "Ihr Warenkorb ist leer",
    emptyCta: "Weiter einkaufen",
    itemsOne: "{count} Artikel",
    itemsMany: "{count} Artikel",
    qty: "Menge",
    remove: "Entfernen",
    subtotal: "Zwischensumme",
    shipping: "Versand",
    shippingFree: "Gratis ab €80",
    shippingFromBe: "Nach Belgien gratis ab €100",
    total: "Gesamt",
    viewCart: "Warenkorb ansehen",
    checkout: "Zur Kasse",
    continueShopping: "Weiter einkaufen",
    addedToCart: "Zum Warenkorb hinzugefügt",
    buyNow: "Jetzt kaufen",
    close: "Schließen",
  },
  checkout: {
    title: "Kasse",
    breadcrumb: "Kasse",
    backToCart: "← Zurück zum Warenkorb",
    contact: "Kontakt",
    contactNote: "Wir senden Ihre Bestellbestätigung an diese Adresse.",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer",
    shippingAddress: "Lieferadresse",
    firstName: "Vorname",
    lastName: "Nachname",
    address: "Straße und Hausnummer",
    addressLine2: "Adresszusatz (optional)",
    city: "Stadt",
    postcode: "PLZ",
    country: "Land",
    paymentMethod: "Zahlungsmethode",
    paymentNote: "Demo-Umgebung es wird keine echte Zahlung verarbeitet.",
    methods: { ideal: "iDEAL", card: "Kreditkarte", klarna: "Klarna Später bezahlen", paypal: "PayPal" },
    summary: "Bestellübersicht",
    placeOrder: "Bestellung aufgeben",
    placing: "Bestellung wird aufgegeben…",
    success: {
      title: "Vielen Dank für Ihre Bestellung!",
      body: "Wir haben Ihre Bestellbestätigung per E-Mail gesendet.",
      orderNumber: "Bestellnummer",
      backHome: "Zurück zum Shop",
    },
    emptyState: "Ihr Warenkorb ist leer.",
    emptyStateCta: "Mit dem Einkauf beginnen",
    required: "Pflichtfeld",
    delivery: {
      sectionTitle: "Lieferung oder Abholung",
      sectionNote: "Wählen Sie, wo Sie Ihre Bestellung erhalten möchten",
      home: "Heimlieferung",
      homeNote: "Via PostNL · 1-2 Werktage",
      pickupPrefix: "Abholung — ",
      free: "Gratis",
      pickupHintBefore: "Sie erhalten eine E-Mail, sobald Ihre Bestellung bereitliegt in ",
      pickupHintAfter: ". Bitte bringen Sie Ihre Bestellbestätigung und einen gültigen Ausweis mit.",
      pickupNameSection: "Name für die Abholung",
      summaryPickup: "Abholung im Geschäft",
    },
  },
  reviews: {
    eyebrow: "Kundenbewertungen",
    heading: "Bewertungen",
    outOf: "/5",
    summary: "{rating} Sterne basierend auf {count} Bewertungen",
    summaryOne: "{rating} Sterne basierend auf {count} Bewertung",
    addReview: "Bewertung schreiben",
    postedOn: "Veröffentlicht am",
    showMore: "Mehr Bewertungen zeigen",
    showLess: "Weniger zeigen",
    empty: "Noch keine Bewertungen. Seien Sie der Erste!",
    form: {
      title: "Bewertung schreiben",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      ratingLabel: "Bewertung",
      reviewLabel: "Ihre Erfahrung",
      reviewPlaceholder: "Erzählen Sie uns, was Sie von diesem Produkt halten…",
      submit: "Absenden",
      cancel: "Abbrechen",
      thanks: "Vielen Dank für Ihre Bewertung!",
      thanksBody: "Ihre Bewertung wird nach der Prüfung veröffentlicht.",
    },
    distribution: { title: "Verteilung" },
    filterAll: "Alle",
    filterByStars: "Nach Sternen filtern",
    sortLabel: "Sortieren nach",
    sort: { newest: "Neueste zuerst", highest: "Beste Bewertung", lowest: "Schlechteste Bewertung" },
    verified: "Verifizierter Kauf",
    helpful: "War das hilfreich?",
    helpfulMarked: "Danke für Ihr Feedback",
    noMatch: "Keine Bewertungen für diesen Filter.",
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
      zippoChoice: { title: "Wie wählen Sie das perfekte Zippo für Ihren Stil?", excerpt: "Von gebürstetem Chrom bis zu gravierten Limited Editions Zippo bietet über 1.400 Modelle. Wir helfen Ihnen bei der Wahl nach Nutzung, Persönlichkeit und Budget." },
      zippoCare: { title: "Zippo-Pflege: So bleibt Ihr Feuerzeug wie neu", excerpt: "Ein Zippo hält ein Leben lang aber nur, wenn Sie es richtig pflegen. Erfahren Sie, wie Sie nachfüllen, den Stein wechseln und das Gehäuse polieren." },
      clipperVsZippo: { title: "Clipper vs. Zippo: Welches Feuerzeug passt zu Ihnen?", excerpt: "Beide sind legendär, aber für sehr unterschiedliche Nutzer. Wir vergleichen Flamme, Nachfüllbarkeit, Design und Preis, damit Sie die richtige Wahl treffen." },
    },
    blog: {
      backToOverview: "← Zurück zur Wissensdatenbank",
      publishedOn: "Veröffentlicht am",
      writtenBy: "von",
      relatedTitle: "Weiterlesen",
      indexTitle: "Wissensdatenbank",
      indexLead: "Alles Wissenswerte über Feuerzeuge und Raucherzubehör von der Auswahl bis zur Pflege.",
      notFoundTitle: "Artikel nicht gefunden",
      notFoundBody: "Der gesuchte Artikel existiert nicht (mehr).",
    },
  },
  footer: {
    description: "Der größte Tabakfachhandel in Nijmegen spezialisiert auf Feuerzeuge und Raucherzubehör. Online und im Geschäft in der Molenstraat.",
    sections: { assortiment: "Sortiment", klantenservice: "Kundenservice", account: "Mein Konto" },
    shop: { aanstekers: "Feuerzeuge", kokersEtuis: "Etuis & Hüllen", knippersAsbakken: "Cutter & Aschenbecher", rookAccessoires: "Raucherzubehör", sale: "Sale" },
    service: { contact: "Kontakt", shipping: "Versand & Lieferung", returns: "Umtausch & Rücksendung", payment: "Zahlungsmethoden", faq: "Häufige Fragen", warranty: "Garantie" },
    accountLinks: { login: "Anmelden", register: "Registrieren", orders: "Bestellverlauf", wishlist: "Wunschliste", details: "Persönliche Daten" },
    badge: { eyebrow: "Tabakfachhandel", city: "Nijmegen" },
    copyright: "Rokersbenodigdheden Nijmegen",
    legal: { privacy: "Datenschutz", terms: "AGB", cookies: "Cookie-Richtlinie" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
  categoryFaqs: {
    zippo: {
      intro: "Alles, was Sie über Gebrauch, Pflege und Kauf wissen möchten - ehrlich und ohne Verkaufsgespräch.",
      items: [
        { q: "Wie lange hält ein Zippo?", a: "Ein Zippo hat eine lebenslange Garantie und überdauert bei normalem Gebrauch Generationen. Die Feuerzeuge werden seit 1932 gleich gebaut - aus Stahl, für die Ewigkeit." },
        { q: "Woran erkenne ich ein originales Zippo?", a: "Schauen Sie auf den Boden: ein echtes Zippo hat einen Datumscode, ein straffes Scharnier, den federnden Klick des Deckels und eine saubere Naht. Kaufen Sie ausschließlich bei autorisierten Händlern wie OneConnect." },
        { q: "Welchen Brennstoff verwende ich?", a: "Verwenden Sie immer originales Zippo-Benzin. Andere Brennstoffe beschädigen den Docht und verursachen mehr Geruch. Erhältlich in unserem Geschäft und Webshop." },
        { q: "Wie ersetze ich die Feuersteine?", a: "Drehen Sie die Schraube am Boden des Einsatzes heraus. Entfernen Sie Feder und alten Stein, legen Sie einen neuen Zippo-Stein ein, Feder darauf, Schraube wieder rein. In weniger als einer Minute fertig." },
        { q: "Darf ich ein Zippo im Flugzeug mitnehmen?", a: "Ein gefülltes Feuerzeug ist im Handgepäck nicht erlaubt. Ein leeres Feuerzeug ist manchmal gestattet, doch die Regeln unterscheiden sich je nach Fluggesellschaft - prüfen Sie das immer vorab." },
        { q: "Wie oft muss ich nachfüllen?", a: "Bei täglichem Gebrauch durchschnittlich alle 1-2 Wochen. Benzin verdunstet auch ohne Gebrauch, also füllen Sie nach, sobald die Flamme schwächer wird." },
        { q: "Kann ich ein Zippo gravieren lassen?", a: "Ja. Viele Modelle eignen sich für Gravuren - Name, Datum oder Bild. Kommen Sie in unserem Geschäft (Molenstraat 120 oder Lange Hezelstraat 26 in Nijmegen) vorbei, um die Möglichkeiten zu besprechen." },
      ],
    },
    kokers: {
      intro: "Welches Material passt zu Ihnen, wie oft müssen Filter gewechselt werden und warum ein Halter wirklich einen Unterschied macht - ehrlich erklärt.",
      items: [
        { q: "Was ist der Unterschied zwischen einem Etui und einer Hülle?", a: "Ein Etui ist meist aus Metall, öffnet sich per Klickmechanismus und hält die Zigaretten an Ort und Stelle. Eine Hülle ist häufig aus Leder oder Stoff, geschmeidiger in der Hand und schützt vor allem vor Kratzern und Feuchtigkeit. Beide verhindern Bruch - wählen Sie nach Stil und Gebrauch." },
        { q: "Wie oft muss ich den Filter im Zigarettenhalter wechseln?", a: "Bei einem Denicotea-Halter mit Aktivkohlefilter alle 5 bis 10 Zigaretten. Sie merken es selbst: der Zug wird schwerer und der Geschmack flacher, wenn der Filter gesättigt ist. Ersatzfilter bestellen Sie im Set von 10 oder 50." },
        { q: "Kann ich meine Lederhülle waschen?", a: "Nicht mit Wasser. Staub entfernen Sie mit einem trockenen Tuch; Flecken behandeln Sie mit einem leicht feuchten Tuch und speziellem Lederreiniger. Zweimal jährlich Lederbalsam hält es geschmeidig. Eintauchen oder Waschmaschine ruinieren das Leder unwiderruflich." },
        { q: "Welche Etui-Größe brauche ich?", a: "Standard-Zigaretten von 84mm passen in nahezu alle Etuis unserer Kollektion. Für 100mm-Zigaretten (lang) wählen Sie ausdrücklich eine 'Long'-Ausführung. Die Kapazität reicht von 10 (Taschenformat) bis 20 (eine ganze Packung)." },
        { q: "Funktionieren Filterhalter auch bei Zigarren?", a: "Für Zigarren verwenden Sie spezielle Zigarrenhalter oder Pfeifenfilter - sie haben einen größeren Durchgang und oft eine andere Filterstruktur. Unsere Zigarrenabteilung unter Cutter & Aschenbecher führt das passende Zubehör." },
        { q: "Ist ein Halter mit Filter besser als ohne?", a: "Wer weniger Teer einatmen möchte: ja, deutlich. Tests zeigen eine Reduktion von 30-60% bei Teer und Nikotin mit gepflegtem Aktivkohlefilter. Wer den puren Geschmack will: nein, ein Halter ohne Filter erhält das volle Aroma." },
        { q: "Wie lange hält ein gutes Etui?", a: "Bei normalem Gebrauch jahrzehntelang. Metalletuis von Belbox oder Denicotea sind oft noch nach 30+ Jahren funktionstüchtig - nur das Scharnier kann verschleißen. Leder entwickelt Patina und wird mit den Jahren schöner, sofern es gut gepflegt wird." },
      ],
    },
    knippers: {
      intro: "Welcher Cutter für welche Zigarre, wie Sie einen guten Aschenbecher erkennen und was ein Etui wirklich können muss - ehrlich erklärt.",
      items: [
        { q: "Welcher Cutter ist am besten - Guillotine, V-Cut oder Punch?", a: "Für die meisten Zigarren: Guillotine - ein gerader Schnitt, vorhersehbarer Zug. V-Cut lenkt den Rauch zur Zunge und betont den Geschmack - beliebt bei Robustos. Punch macht ein kleines Loch, gibt einen konzentrierten Zug, aber weniger Rauchvolumen. Anfänger wählen die Guillotine; damit geht selten etwas schief." },
        { q: "Kann ich meinen Cutter schärfen lassen?", a: "Ja, hochwertige Cutter wie Bookwill und Faro haben austauschbare oder nachschleifbare Klingen. Bringen Sie ihn in unser Geschäft; für ein paar Euro schneidet er wieder wie neu. Billige Wegwerf-Cutter lassen sich leider nicht schärfen - daher investieren Sie besser in einen guten." },
        { q: "Warum einen Zigarrenaschenbecher und keinen normalen?", a: "Eine Zigarre dauert 30-90 Minuten. In dieser Zeit bildet sich eine lange Aschesäule, die man lieber nicht abklopft. Zigarrenaschenbecher haben Auflagen breit genug, um eine Zigarre ruhig abzulegen, ohne dass die Asche herunterfällt, und sind tief genug, um keinen Geruch zu verbreiten." },
        { q: "Wie lange hält eine Zigarre im Etui?", a: "In einem guten Etui mit Zedernholzfutter bleibt eine Zigarre 5-7 Tage in optimalem Zustand - genug für ein langes Wochenende oder eine Geschäftsreise. Für längere Lagerung (Wochen bis Monate) ist ein Humidor mit Feuchteregulierung nötig. Ein Etui ist für unterwegs, nicht für die Lagerung." },
        { q: "Welche Seite der Zigarre schneide ich?", a: "Die Kappe - die geschlossene, abgerundete Seite. Die andere Seite (der Fuß) ist die offene Seite, die Sie anzünden. Schneiden Sie immer kurz vor der Schulter, der sichtbaren Linie, an der die Kappe mit dem Deckblatt verbunden ist. Schneiden Sie in die Schulter, fällt das Deckblatt auseinander." },
        { q: "Darf ich mein Zigarrenetui im Kühlschrank aufbewahren?", a: "Besser nicht. Kühlschränke sind trocken und kalt - schlecht für Zigarren. Bewahren Sie das Etui bei Zimmertemperatur auf (16-22°C), nicht in direktem Sonnenlicht. Eine Schublade oder ein Schrank ist ideal. Ein Humidor bleibt der Goldstandard für längere Aufbewahrung." },
        { q: "Ist ein teurer Aschenbecher wirklich besser als ein günstiger?", a: "Für Zigarren: ja. Günstige Aschenbecher sind oft leicht, aus dünnem Blech, mit scharfen Kanten. Ein Faro-Aschenbecher ist massiv gegossen, wiegt 800g+, kippt nicht und hat polierte Auflagen, die die Zigarre nicht beschädigen. Den Unterschied spüren Sie jeden Abend aufs Neue." },
      ],
    },
  },
  product: {
    breadcrumbHome: "Startseite",
    notFound: "Produkt nicht gefunden",
    notFoundCta: "Zurück zur Kollektion",
    reviewsLabel: "Bewertungen",
    addToCart: "In den Warenkorb",
    addedToCart: "Hinzugefügt",
    buyNow: "Sofort kaufen",
    trust: {
      freeShipping: "Kostenloser Versand ab € 80 (NL) & € 100 (BE)",
      sameDay: "Vor 17 Uhr bestellt = heute versendet",
      freeReturns: "14 Tage Rückgaberecht innerhalb der Niederlande",
    },
    accordion: {
      description: "Produktbeschreibung",
      specs: "Spezifikationen",
      shipping: "Versand & Lieferung",
      shippingBody: "Bestellungen, die werktags vor 17:00 Uhr eingehen, versenden wir noch am selben Tag mit PostNL. Standardlieferzeit innerhalb der Niederlande beträgt 1-2 Werktage. Kostenloser Versand ab € 80 (NL) / € 100 (BE).",
    },
    relatedHeading: "Ähnliche Produkte",
    backToCollection: "Zurück zur Kollektion",
  },
  shippingNote: {
    eligible: "Vor 17 Uhr bestellt = heute versendet",
    notEligible: "Nicht für Same-Day-Versand verfügbar",
  },
  collection: {
    sidebar: {
      categoriesHeading: "Kategorien",
      allInCategory: "Alle Produkte",
      typeHeading: "Produkttyp",
      allTypes: "Alle Typen",
      brandsHeading: "Marken",
      allBrands: "Alle Marken",
      priceHeading: "Preis",
      clearPriceFilter: "Preisfilter zurücksetzen",
    },
    toolbar: {
      filters: "Filter",
      ofProducts: "von",
      productsWord: "Produkten",
      sortLabel: "Sortieren:",
      sortOptions: {
        recommended: "Beliebteste",
        priceAsc: "Preis ↑",
        priceDesc: "Preis ↓",
        rating: "Bewertung",
      },
    },
    chips: { clearAll: "Alle Filter löschen" },
    empty: { noProducts: "Keine Produkte gefunden", clearFilters: "Filter löschen" },
    pagination: { prev: "← Zurück", next: "Weiter →", pageWord: "Seite", ofWord: "von" },
  },
  search: {
    promptHero: "Verwenden Sie die Suchleiste oben, um Produkte zu finden.",
    noResultsHeading: "Keine Produkte gefunden",
    noResultsBodyBefore: "Wir konnten nichts finden für ",
    noResultsBodyAfter: ". Versuchen Sie ein anderes Wort, eine Marke oder Kategorie.",
    allResults: "Alle Ergebnisse",
    breadcrumb: "Suchergebnisse",
    headingDefault: "Suche",
    headingForBefore: "Ergebnisse für ",
    countBefore: "",
    countAfter: " Produkte gefunden",
    startTyping: "Geben Sie einen Suchbegriff ein",
    catalogTagline: "449 Produkte · Größter Tabakspezialist in Nijmegen",
    autocomplete: {
      clearQuery: "Suche leeren",
      submit: "Suchen",
      productsSection: "Produkte",
      categoriesSection: "Kategorien",
      noResultsBeforeQuery: "Keine Ergebnisse für \"",
      noResultsAfterQuery: "\"",
      tryBrand: "Versuchen Sie eine Marke (Zippo, Clipper) oder Kategorie.",
      allResultsForBefore: "Alle Ergebnisse für \"",
      productSingular: "Produkt",
      productPlural: "Produkte",
    },
  },
  sale: {
    breadcrumb: "Sale",
    heroTitleAll: "Sale · Befristete Angebote",
    heroTitlePrefix: "Sale · ",
    heroSubBefore: "Noch ",
    heroSubMiddle: " Stück auf Lager aus unserer Premium-Sale-Kollektion · ",
    heroSubAfter: " ausverkauft",
    heroTagline: "Solange der Vorrat reicht · Tabaksspeciaalzaak Nijmegen",
    toolbarOver: "übrig",
    toolbarSoldOut: "ausverkauft",
  },
  accountLogin: {
    heading: "Anmelden",
    intro: "Melden Sie sich an, um Ihre Bestellungen, Wunschliste und persönliche Daten an einem Ort zu finden.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "name@beispiel.de",
    passwordLabel: "Passwort",
    forgot: "Vergessen?",
    remember: "Auf diesem Gerät angemeldet bleiben",
    submit: "Anmelden",
    noAccount: "Noch kein Konto?",
    registerHere: "Hier registrieren",
  },
};

const FR: Dict = {
  promo: {
    msg1: "Nouveau : la collection Zippo Édition Limitée 2025 est arrivée", msg1Cta: "Découvrir",
    msg2: "Livraison gratuite dès 80 € délai de livraison 2-3 jours ouvrés",
    msg3: "Le plus grand spécialiste du tabac à Nijmegen visitez notre boutique", msg3Cta: "Itinéraire",
    close: "Fermer", prev: "Précédent", next: "Suivant",
  },
  header: {
    openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
    searchPlaceholder: "Rechercher un produit, une marque ou une catégorie…",
    chooseLanguage: "Choisissez votre langue", chooseCurrency: "Choisissez votre devise",
    account: "Compte", wishlist: "Favoris", cart: "Panier",
    assortiment: "Boutique",
    nav: { aanstekers: "Briquets", kokersEtuis: "Étuis & pochettes", knippersAsbakken: "Coupe-cigares & cendriers", rookAccessoires: "Accessoires fumeur", sale: "Soldes", klantenservice: "Service client" },
    mega: {
      aanstekers: { title: "Briquets", zippo: "Briquets Zippo", clipper: "Clipper & classiques", zippoAcc: "Accessoires Zippo" },
      kokers: { title: "Étuis & pochettes", cigaretteCases: "Étuis à cigarettes", filters: "Filtres & fume-cigarette", ashtrays: "Cendriers", rolling: "Tubes & papier" },
      knippers: { title: "Coupe-cigares & cendriers", cigarCutters: "Coupe-cigares", cigarCases: "Étuis à cigares", cigarAshtrays: "Cendriers à cigares", humidors: "Caves à cigares" },
      rook: { title: "Accessoires fumeur", bruyerePipes: "Pipes en bruyère", pipeCutlery: "Outils à pipe", grinders: "Grinders à tabac", cannabis: "Accessoires cannabis" },
      viewAll: "Voir tout l'assortiment →", deals: "Promotions", newItems: "Nouveautés",
    },
    usp: { freeShipping: "Livraison gratuite dès 80 €", sameDay: "Commandé avant 17h = expédié le jour même", freeReturns: "Retour sous 14 jours", securePay: "Paiement sécurisé via iDEAL & Klarna" },
    rating: "4,8 / 5 Avis Google",
    mobileMenu: "Menu", mobileAccount: "Mon compte", mobileWishlist: "Favoris",
  },
  hero: {
    eyebrow: "Spécialiste du tabac à Nijmegen",
    titleLine1: "500+ articles", titleLine2: "pour fumeurs",
    description: "La plus grande sélection d'accessoires fumeur de Nijmegen Zippo, Clipper, accessoires de pipe et plus encore.",
    cta: "Voir l'offre",
    imageAlt: "Collection de briquets",
  },
  quickCategories: {
    label: "Navigation rapide",
    items: { zippo: "Briquets Zippo", clipper: "Briquets Clipper", zippoAcc: "Accessoires Zippo", cigaretteAcc: "Accessoires cigarettes", vloei: "Feuilles & filtres", knippers: "Coupe-cigares", asbakken: "Cendriers", pipesAcc: "Pipes & accessoires" },
  },
  categoryShowcase: {
    eyebrow: "Notre assortiment", heading: "Catégories de produits", viewAll: "Tout voir", cta: "Voir la collection",
    aanstekers: { name: "Briquets", tagline: "336 modèles", description: "Des Zippos intemporels aux Clipper et Ronson fiables la plus grande sélection de briquets aux Pays-Bas.", stats: { zippoModels: "Modèles Zippo", clipperRegular: "Clipper & classiques", zippoAcc: "Accessoires Zippo" } },
    kokers: { name: "Étuis & pochettes", tagline: "70 produits", description: "Étuis à cigarettes, pochettes, filtres et fume-cigarette élégants et pratiques pour chaque fumeur.", stats: { casesEtuis: "Étuis & pochettes", filtersHolders: "Filtres & fume-cigarette", brands: "Marques" } },
    knippers: { name: "Coupe-cigares & cendriers", tagline: "28 produits", description: "Coupe-cigares de précision, cendriers élégants et étuis à cigares de marques de prestige comme Bookwill et Faro.", stats: { cutters: "Coupe-cigares", ashtrays: "Cendriers", brands: "Marques" } },
    rook: { name: "Accessoires fumeur", tagline: "15 produits", description: "Pipes à tabac, outils et grinders sélectionnés avec soin pour les véritables passionnés.", stats: { grinders: "Grinders", pipeSets: "Sets d'outils à pipe", brands: "Marques" } },
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
    para2: "Forts d'une longue expérience, nous conseillons nos clients aussi bien en boutique qu'en ligne. Notre équipe est composée de véritables connaisseurs pas de centre d'appels, mais des passionnés du métier.",
    pillars: {
      dealer: { title: "Revendeur officiel", body: "TBK est revendeur officiellement certifié de Zippo, Clipper, Colibri et Xikar. Chaque achat est authentique, garanti." },
      shipping: { title: "Livraison rapide", body: "Commandé avant 17h = expédié le jour même depuis notre entrepôt à Nijmegen. Délai de livraison standard 1-2 jours ouvrés aux Pays-Bas." },
      returns: { title: "Retours gratuits", body: "Pas satisfait ? Retournez gratuitement sous 14 jours. Sans tracas, sans questions." },
      store: { title: "Deux boutiques à Nijmegen", body: "Visitez Tabak Molenstraat (Molenstraat 120) ou Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26). Conseils personnalisés par de véritables experts." },
    },
    faqEyebrow: "FAQ", faqHeading: "Questions fréquentes",
    faqs: {
      shipping: { q: "Quand ma commande sera-t-elle expédiée ?", a: "Pour toute commande passée avant 17h un jour ouvré, votre colis part le jour même chez PostNL. Les commandes passées après 17h ou pendant le week-end sont expédiées le jour ouvré suivant. Vous recevez un e-mail de confirmation avec suivi dès que le colis est scanné. Délai de livraison standard aux Pays-Bas : 1-2 jours ouvrés." },
      shippingCost: { q: "Y a-t-il des frais de port ?", a: "Aux Pays-Bas, la livraison est entièrement gratuite à partir de 80 €. En dessous, nous facturons 4,95 € pour la livraison standard. Vers la Belgique, le seuil de gratuité est de 100 €, puis 6,95 €. Pour les autres pays, nous calculons le port en fonction du poids vous voyez toujours le montant exact avant le paiement." },
      returns: { q: "Puis-je retourner ma commande ?", a: "Vous disposez de 14 jours après réception pour retourner votre commande, gratuitement aux Pays-Bas. Envoyez-nous un e-mail avec votre numéro de commande et vous recevrez une étiquette retour prépayée. Les produits doivent être non ouverts et dans leur emballage d'origine. Après validation, le montant est remboursé sous 5 jours ouvrés." },
      authentic: { q: "Les produits sont-ils authentiques ?", a: "Sans exception. TBK est revendeur officiellement certifié de Zippo, Clipper, Colibri, Xikar et de toutes les autres marques de notre assortiment. Nous nous fournissons exclusivement auprès de distributeurs européens agréés jamais via des places de marché ou des tiers. Sur tous les briquets Zippo, vous bénéficiez en outre de la garantie usine à vie de Zippo." },
      store: { q: "Puis-je venir en boutique ?", a: "Bien entendu. Nous avons deux boutiques physiques à Nijmegen : Tabak Molenstraat (Molenstraat 120, 6511 HG) et Tabaksspeciaalzaak Lange Hezelstraat (Lange Hezelstraat 26, 6511 CK). Les deux boutiques sont ouvertes du lundi au vendredi de 9 h à 18 h et le samedi de 10 h à 17 h. Conseils personnalisés, achat direct et accès à toute la collection y compris des modèles Zippo non disponibles en ligne. Vous préférez commander en ligne ? Choisissez « Retrait en boutique » au paiement et récupérez gratuitement votre commande dans l'une des deux boutiques." },
    },
    moreQuestions: "Vous ne trouvez pas votre question ?", moreQuestionsBody: "Notre équipe est là pour vous aider.", contactLink: "Nous contacter →",
  },
  email: {
    badgeLine1: "de réduction sur votre", badgeLine2: "première commande",
    eyebrow: "Exclusif aux abonnés",
    titleLine1: "Inscrivez-vous et", titleLine2: "recevez votre code immédiatement",
    description: "Restez informé des nouvelles collections et des bons plans. Uniquement ce qui en vaut la peine.",
    descriptionMobile: "Nouvelles collections, offres exclusives directement dans votre boîte mail.",
    socialProof: "abonnés vous ont précédé",
    trust: { noSpam: "Pas de spam", unsubscribe: "Désinscription à tout moment", instant: "Valable immédiatement" },
    placeholder: "votre@email.fr",
    submit: "Obtenir 10 %", submitMobile: "Obtenir 10 % de réduction",
    successTitle: "🎉 Vérifiez votre boîte mail !", successBody: "Votre code de réduction de 10 % est en route.",
  },
  cart: {
    title: "Panier",
    empty: "Votre panier est vide",
    emptyCta: "Continuer mes achats",
    itemsOne: "{count} article",
    itemsMany: "{count} articles",
    qty: "Qté",
    remove: "Supprimer",
    subtotal: "Sous-total",
    shipping: "Livraison",
    shippingFree: "Offerte dès 80 €",
    shippingFromBe: "Vers la Belgique offerte dès 100 €",
    total: "Total",
    viewCart: "Voir le panier",
    checkout: "Commander",
    continueShopping: "Continuer mes achats",
    addedToCart: "Ajouté à votre panier",
    buyNow: "Acheter maintenant",
    close: "Fermer",
  },
  checkout: {
    title: "Commander",
    breadcrumb: "Commande",
    backToCart: "← Retour au panier",
    contact: "Contact",
    contactNote: "Nous enverrons votre confirmation de commande ici.",
    email: "Adresse e-mail",
    phone: "Téléphone",
    shippingAddress: "Adresse de livraison",
    firstName: "Prénom",
    lastName: "Nom",
    address: "Rue et numéro",
    addressLine2: "Complément d'adresse (optionnel)",
    city: "Ville",
    postcode: "Code postal",
    country: "Pays",
    paymentMethod: "Mode de paiement",
    paymentNote: "Environnement de démonstration aucun paiement réel n'est traité.",
    methods: { ideal: "iDEAL", card: "Carte bancaire", klarna: "Klarna Payer plus tard", paypal: "PayPal" },
    summary: "Récapitulatif",
    placeOrder: "Passer commande",
    placing: "Validation de la commande…",
    success: {
      title: "Merci pour votre commande !",
      body: "Nous vous avons envoyé la confirmation par e-mail.",
      orderNumber: "Numéro de commande",
      backHome: "Retour à la boutique",
    },
    emptyState: "Votre panier est vide.",
    emptyStateCta: "Commencer mes achats",
    required: "Obligatoire",
    delivery: {
      sectionTitle: "Livraison ou retrait",
      sectionNote: "Choisissez où recevoir votre commande",
      home: "Livraison à domicile",
      homeNote: "Via PostNL · 1-2 jours ouvrés",
      pickupPrefix: "Retrait — ",
      free: "Gratuit",
      pickupHintBefore: "Vous recevrez un e-mail dès que votre commande sera prête au ",
      pickupHintAfter: ". Munissez-vous de votre confirmation de commande et d'une pièce d'identité valide.",
      pickupNameSection: "Nom pour le retrait",
      summaryPickup: "Retrait en boutique",
    },
  },
  reviews: {
    eyebrow: "Avis clients",
    heading: "Avis",
    outOf: "/5",
    summary: "{rating} étoiles sur la base de {count} avis",
    summaryOne: "{rating} étoiles sur la base de {count} avis",
    addReview: "Écrire un avis",
    postedOn: "Publié le",
    showMore: "Afficher plus d'avis",
    showLess: "Afficher moins",
    empty: "Aucun avis pour le moment. Soyez le premier !",
    form: {
      title: "Rédigez votre avis",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      ratingLabel: "Note",
      reviewLabel: "Votre expérience",
      reviewPlaceholder: "Dites-nous ce que vous pensez de ce produit…",
      submit: "Envoyer",
      cancel: "Annuler",
      thanks: "Merci pour votre avis !",
      thanksBody: "Votre avis sera publié après modération.",
    },
    distribution: { title: "Répartition" },
    filterAll: "Tous",
    filterByStars: "Filtrer par étoiles",
    sortLabel: "Trier par",
    sort: { newest: "Plus récents", highest: "Meilleures notes", lowest: "Moins bonnes notes" },
    verified: "Achat vérifié",
    helpful: "Cet avis vous a-t-il été utile ?",
    helpfulMarked: "Merci pour votre retour",
    noMatch: "Aucun avis ne correspond à ce filtre.",
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
      zippoChoice: { title: "Comment choisir le Zippo parfait pour votre style ?", excerpt: "Du chrome brossé aux éditions limitées gravées Zippo propose plus de 1 400 modèles. Nous vous aidons à choisir selon l'usage, la personnalité et le budget." },
      zippoCare: { title: "Entretien du Zippo : gardez votre briquet comme neuf", excerpt: "Un Zippo dure toute une vie à condition d'en prendre soin. Découvrez comment le remplir, remplacer la pierre et polir le boîtier." },
      clipperVsZippo: { title: "Clipper vs Zippo : quel briquet vous convient ?", excerpt: "Tous deux sont légendaires, mais pour des utilisateurs très différents. Nous comparons flamme, rechargeabilité, design et prix pour vous aider à choisir." },
    },
    blog: {
      backToOverview: "← Retour à la base de connaissances",
      publishedOn: "Publié le",
      writtenBy: "par",
      relatedTitle: "À lire ensuite",
      indexTitle: "Base de connaissances",
      indexLead: "Tout ce qu'il faut savoir sur les briquets et accessoires fumeur du choix à l'entretien.",
      notFoundTitle: "Article introuvable",
      notFoundBody: "L'article que vous cherchez n'existe pas (plus).",
    },
  },
  footer: {
    description: "Le plus grand spécialiste du tabac de Nijmegen spécialisé dans les briquets et accessoires fumeur. En ligne et en boutique au Molenstraat.",
    sections: { assortiment: "Boutique", klantenservice: "Service client", account: "Mon compte" },
    shop: { aanstekers: "Briquets", kokersEtuis: "Étuis & pochettes", knippersAsbakken: "Coupe-cigares & cendriers", rookAccessoires: "Accessoires fumeur", sale: "Soldes" },
    service: { contact: "Contact", shipping: "Expédition & livraison", returns: "Échanges & retours", payment: "Moyens de paiement", faq: "Questions fréquentes", warranty: "Garantie" },
    accountLinks: { login: "Connexion", register: "Inscription", orders: "Historique", wishlist: "Favoris", details: "Données personnelles" },
    badge: { eyebrow: "Spécialiste tabac", city: "Nijmegen" },
    copyright: "Rokersbenodigdheden Nijmegen",
    legal: { privacy: "Confidentialité", terms: "Conditions générales", cookies: "Politique cookies" },
    socials: { instagram: "Instagram", facebook: "Facebook" },
  },
  categoryFaqs: {
    zippo: {
      intro: "Tout ce que vous voulez savoir sur l'utilisation, l'entretien et l'achat - sans détour et sans baratin commercial.",
      items: [
        { q: "Combien de temps dure un Zippo ?", a: "Un Zippo bénéficie d'une garantie à vie et, en usage normal, traverse les générations. Les briquets sont fabriqués de la même façon depuis 1932 - en acier, faits pour durer." },
        { q: "Comment savoir si mon Zippo est authentique ?", a: "Regardez le dessous : un vrai Zippo porte un code de date, une charnière ajustée, le clic du couvercle ressort et une soudure nette. Achetez uniquement chez des revendeurs agréés comme OneConnect." },
        { q: "Quel carburant utiliser ?", a: "Utilisez toujours l'essence Zippo d'origine. D'autres carburants endommagent la mèche et dégagent plus d'odeur. Disponible en boutique et dans notre webshop." },
        { q: "Comment remplacer les pierres ?", a: "Dévissez la vis sous l'insert. Retirez le ressort et l'ancienne pierre, placez une pierre Zippo neuve, replacez le ressort et revissez. Fait en moins d'une minute." },
        { q: "Puis-je emporter un Zippo en avion ?", a: "Un briquet rempli est interdit en cabine. Un briquet vide est parfois autorisé, mais les règles diffèrent selon la compagnie - vérifiez toujours au préalable." },
        { q: "À quelle fréquence faut-il remplir ?", a: "En usage quotidien, environ toutes les 1 à 2 semaines. L'essence s'évapore même sans usage, remplissez dès que la flamme faiblit." },
        { q: "Puis-je faire graver un Zippo ?", a: "Oui. De nombreux modèles se prêtent à la gravure - prénom, date ou motif. Passez en boutique (Molenstraat 120 ou Lange Hezelstraat 26 à Nijmegen) pour voir les possibilités." },
      ],
    },
    kokers: {
      intro: "Quelle matière vous correspond, à quelle fréquence changer les filtres et pourquoi un fume-cigarette change vraiment les choses - expliqué simplement.",
      items: [
        { q: "Quelle est la différence entre un étui et une pochette ?", a: "L'étui est généralement en métal, s'ouvre par un mécanisme à clic et maintient les cigarettes en place. La pochette est souvent en cuir ou en tissu, plus souple en main et protège surtout contre les rayures et l'humidité. Les deux évitent la casse - choisissez selon le style et l'usage." },
        { q: "À quelle fréquence remplacer le filtre d'un fume-cigarette ?", a: "Dans un Denicotea à filtre charbon actif, toutes les 5 à 10 cigarettes. Vous le sentez vous-même : le tirage devient plus difficile et le goût s'aplatit lorsque le filtre est saturé. Les filtres de rechange sont vendus par 10 ou par 50." },
        { q: "Puis-je laver ma pochette en cuir ?", a: "Pas à l'eau. Retirez la poussière au chiffon sec ; traitez les taches avec un chiffon légèrement humide et un nettoyant cuir dédié. Deux fois par an un baume cuir le garde souple. Le tremper ou le passer en machine ruine le cuir définitivement." },
        { q: "Quelle taille d'étui me faut-il ?", a: "Les cigarettes standard de 84mm rentrent dans presque tous les étuis de notre collection. Pour les 100mm (longues), choisissez explicitement une version 'long'. La capacité va de 10 (format poche) à 20 (un paquet entier)." },
        { q: "Les fume-cigarettes fonctionnent-ils aussi pour les cigares ?", a: "Pour les cigares, utilisez des fume-cigares spécifiques ou des filtres à pipe - le canal est plus large et la structure du filtre souvent différente. Notre rayon cigares sous Coupe-cigares & cendriers propose les accessoires adaptés." },
        { q: "Un fume-cigarette avec filtre est-il préférable ?", a: "Pour qui veut inhaler moins de goudron : oui, nettement. Les tests montrent 30 à 60 % de réduction de goudron et de nicotine avec un filtre charbon actif bien entretenu. Pour qui veut un goût pur : non, un fume-cigarette sans filtre conserve tout l'arôme." },
        { q: "Combien de temps dure un bon étui ?", a: "En usage normal, des décennies. Les étuis métalliques de Belbox ou Denicotea sont souvent encore fonctionnels après 30 ans - seul le mécanisme de charnière peut s'user. Le cuir développe une patine et s'embellit avec le temps, à condition d'être bien entretenu." },
      ],
    },
    knippers: {
      intro: "Quel coupe-cigare pour quel cigare, comment reconnaître un bon cendrier, et ce qu'un étui doit vraiment savoir faire - expliqué simplement.",
      items: [
        { q: "Quel coupe-cigare est le meilleur - guillotine, V-cut ou punch ?", a: "Pour la plupart des cigares : guillotine - une coupe droite, un tirage prévisible. Le V-cut concentre la fumée vers la langue et accentue les arômes - apprécié des robustos. Le punch perce un petit trou, donne un tirage concentré mais moins de fumée. Les débutants choisissent la guillotine ; on s'y trompe rarement." },
        { q: "Puis-je faire affûter mon coupe-cigare ?", a: "Oui, les coupe-cigares de qualité comme Bookwill et Faro ont des lames remplaçables ou ré-affûtables. Apportez-le en boutique ; pour quelques euros il coupe à nouveau comme neuf. Les coupe-cigares jetables bon marché ne s'affûtent malheureusement pas - mieux vaut investir dans un bon modèle." },
        { q: "Pourquoi un cendrier à cigares plutôt qu'un cendrier classique ?", a: "Un cigare se fume en 30 à 90 minutes. Pendant ce temps, une longue colonne de cendre se forme qu'on préfère ne pas faire tomber. Les cendriers à cigares ont des reposoirs assez larges pour y poser un cigare sans que la cendre tombe, et sont suffisamment profonds pour ne pas dégager d'odeur." },
        { q: "Combien de temps un cigare se conserve-t-il dans un étui ?", a: "Dans un bon étui doublé de bois de cèdre, un cigare reste en condition optimale 5 à 7 jours - suffisant pour un long week-end ou un voyage d'affaires. Au-delà (semaines ou mois), il faut une cave à cigares régulée en humidité. L'étui sert pour le transport, pas pour le stockage." },
        { q: "De quel côté couper le cigare ?", a: "La tête - le côté fermé et arrondi. L'autre côté (le pied) est l'extrémité ouverte qu'on allume. Coupez toujours juste avant l'épaule, la ligne visible où la tête rejoint la cape. Couper dans l'épaule fait défaire la cape." },
        { q: "Puis-je conserver mon étui à cigares au réfrigérateur ?", a: "Mieux vaut éviter. Les réfrigérateurs sont secs et froids - mauvais pour les cigares. Conservez l'étui à température ambiante (16-22°C), à l'abri du soleil direct. Un tiroir ou une armoire fait l'affaire. Une cave à cigares reste la référence pour une conservation prolongée." },
        { q: "Un cendrier cher est-il vraiment meilleur qu'un bon marché ?", a: "Pour les cigares : oui. Les cendriers bon marché sont souvent légers, en tôle fine, avec des arêtes vives. Un cendrier Faro est en fonte massive, pèse 800g et plus, ne bascule pas et présente des reposoirs polis qui ne marquent pas le cigare. La différence se sent chaque soir." },
      ],
    },
  },
  product: {
    breadcrumbHome: "Accueil",
    notFound: "Produit introuvable",
    notFoundCta: "Retour à la collection",
    reviewsLabel: "avis",
    addToCart: "Ajouter au panier",
    addedToCart: "Ajouté",
    buyNow: "Acheter maintenant",
    trust: {
      freeShipping: "Livraison gratuite dès 80 € (NL) & 100 € (BE)",
      sameDay: "Commandé avant 17h = expédié le jour même",
      freeReturns: "Retour sous 14 jours aux Pays-Bas",
    },
    accordion: {
      description: "Description du produit",
      specs: "Caractéristiques",
      shipping: "Expédition & livraison",
      shippingBody: "Pour toute commande passée avant 17h un jour ouvré, votre colis part le jour même chez PostNL. Délai de livraison standard aux Pays-Bas : 1-2 jours ouvrés. Livraison gratuite à partir de 80 € (NL) / 100 € (BE).",
    },
    relatedHeading: "Produits associés",
    backToCollection: "Retour à la collection",
  },
  shippingNote: {
    eligible: "Commandé avant 17h = expédié le jour même",
    notEligible: "Non éligible à l'expédition le jour même",
  },
  collection: {
    sidebar: {
      categoriesHeading: "Catégories",
      allInCategory: "Tous les produits",
      typeHeading: "Type de produit",
      allTypes: "Tous les types",
      brandsHeading: "Marques",
      allBrands: "Toutes les marques",
      priceHeading: "Prix",
      clearPriceFilter: "Effacer le filtre de prix",
    },
    toolbar: {
      filters: "Filtres",
      ofProducts: "sur",
      productsWord: "produits",
      sortLabel: "Trier :",
      sortOptions: {
        recommended: "Les plus aimés",
        priceAsc: "Prix ↑",
        priceDesc: "Prix ↓",
        rating: "Note",
      },
    },
    chips: { clearAll: "Effacer tous les filtres" },
    empty: { noProducts: "Aucun produit trouvé", clearFilters: "Effacer les filtres" },
    pagination: { prev: "← Précédent", next: "Suivant →", pageWord: "Page", ofWord: "sur" },
  },
  search: {
    promptHero: "Utilisez la barre de recherche ci-dessus pour trouver des produits.",
    noResultsHeading: "Aucun produit trouvé",
    noResultsBodyBefore: "Nous n'avons rien trouvé pour ",
    noResultsBodyAfter: ". Essayez un autre mot, une marque ou une catégorie.",
    allResults: "Tous les résultats",
    breadcrumb: "Résultats de recherche",
    headingDefault: "Rechercher",
    headingForBefore: "Résultats pour ",
    countBefore: "",
    countAfter: " produits trouvés",
    startTyping: "Saisissez un terme de recherche",
    catalogTagline: "449 produits · Le plus grand spécialiste tabac à Nijmegen",
    autocomplete: {
      clearQuery: "Effacer la recherche",
      submit: "Rechercher",
      productsSection: "Produits",
      categoriesSection: "Catégories",
      noResultsBeforeQuery: "Aucun résultat pour « ",
      noResultsAfterQuery: " »",
      tryBrand: "Essayez une marque (Zippo, Clipper) ou une catégorie.",
      allResultsForBefore: "Tous les résultats pour « ",
      productSingular: "produit",
      productPlural: "produits",
    },
  },
  sale: {
    breadcrumb: "Sale",
    heroTitleAll: "Sale · Offres à durée limitée",
    heroTitlePrefix: "Sale · ",
    heroSubBefore: "Encore ",
    heroSubMiddle: " pièces en stock de notre collection sale premium · ",
    heroSubAfter: " épuisé",
    heroTagline: "Jusqu'à épuisement des stocks · Tabaksspeciaalzaak Nijmegen",
    toolbarOver: "restants",
    toolbarSoldOut: "épuisé",
  },
  accountLogin: {
    heading: "Connexion",
    intro: "Connectez-vous pour retrouver vos commandes, votre liste de souhaits et vos informations personnelles au même endroit.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "nom@exemple.fr",
    passwordLabel: "Mot de passe",
    forgot: "Oublié ?",
    remember: "Se souvenir de moi sur cet appareil",
    submit: "Connexion",
    noAccount: "Pas encore de compte ?",
    registerHere: "Inscrivez-vous ici",
  },
};

export const translations: Record<Locale, Dict> = { NL, EN, DE, FR };
