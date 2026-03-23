// ──────────────────────────────────────────────────────────
// Types et données pour les pages d'avis éditoriaux
// Template réutilisable : livres, guides, outils, sites
// ──────────────────────────────────────────────────────────

export type ReviewCartouche = {
  label: string;
  value: string;
};

export type ReviewContribution = {
  title: string;
  description: string;
};

export type ReviewAudienceProfile = {
  profile: string;
  description: string;
  /** Degré d'adéquation avec ce profil lecteur */
  fit: "ideal" | "good" | "limited";
};

export type ReviewDetailItem = {
  label: string;
  text: string;
};

export type ReviewRatingItem = {
  label: string;
  /** Score de 1.0 à 5.0 */
  score: number;
};

export type ReviewFaqItem = {
  question: string;
  answer: string;
};

export type ReviewRelatedLink = {
  tag: string;
  title: string;
  description: string;
  href: string;
};

export type Review = {
  // ── Identité ─────────────────────────────────────────
  slug: string;
  categorySlug: string;
  categoryLabel: string;
  categoryHref: string;
  resourceType: "livre" | "guide" | "site" | "outil" | "film";

  // ── Bibliographie ────────────────────────────────────
  bookTitle: string;
  author: string;
  /** Pour les ouvrages à plusieurs auteurs, utilisé dans les données structurées */
  authors?: string[];
  publisher?: string;
  year?: number;
  pages?: number;
  isbn?: string;

  // ── Visuel ───────────────────────────────────────────
  /** Image de couverture (toujours présente pour les livres) */
  coverImage?: { src: string; alt: string };

  // ── SEO ──────────────────────────────────────────────
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;

  // ── Hero ─────────────────────────────────────────────
  /** H1 éditorial : contient le titre du livre + angle */
  heroTitle: string;
  heroSubtitle: string;
  heroIntro: string;
  cartouches: ReviewCartouche[];

  // ── Notation ─────────────────────────────────────────
  globalRating: number; // 1.0–5.0
  ratingItems: ReviewRatingItem[];

  // ── Verdict ──────────────────────────────────────────
  verdictSummary: string;
  verdictForWho: string;
  verdictWhyWorthIt: string;
  verdictKeyTakeaway?: string;

  // ── Apports ──────────────────────────────────────────
  contributions: ReviewContribution[];

  // ── Forces et limites ────────────────────────────────
  strengths: string[];
  limitations: string[];

  // ── Audience ─────────────────────────────────────────
  audienceProfiles: ReviewAudienceProfile[];
  audienceWhenToRead?: string;
  audienceProjectStage?: string;

  // ── Analyse détaillée ────────────────────────────────
  details: ReviewDetailItem[];

  // ── Note éditoriale ──────────────────────────────────
  /** Reformulation éditoriale. Jamais une citation inventée. */
  editorialNote: string;

  // ── FAQ ──────────────────────────────────────────────
  faq: ReviewFaqItem[];

  // ── Liens connexes ───────────────────────────────────
  relatedLinks: ReviewRelatedLink[];
};

// ══════════════════════════════════════════════════════════
// Avis : Manuel d'architecture naturelle — David Wright
// ══════════════════════════════════════════════════════════

export const manuelArchitectureNaturelle: Review = {
  slug: "manuel-architecture-naturelle",
  categorySlug: "livres-eco-construction",
  categoryLabel: "Livres d'éco-construction",
  categoryHref: "/livres-eco-construction/",
  resourceType: "livre",

  bookTitle: "Manuel d'architecture naturelle",
  author: "David Wright",
  publisher: "Edisud",
  year: 1981,
  pages: 186,

  coverImage: {
    src: "/ressources/livres-eco-construction/manuel-architecture-naturelle.jpg",
    alt: "Couverture du livre Manuel d'architecture naturelle, David Wright, éditions Edisud",
  },

  metaTitle: "Avis sur Manuel d'architecture naturelle — David Wright",
  metaDescription:
    "Avis éditorial complet sur Manuel d'architecture naturelle de David Wright : ce que ce livre fondateur apporte sur le solaire passif, l'architecture vernaculaire et les matériaux naturels, à qui il s'adresse et pourquoi il reste utile.",
  canonicalUrl:
    "https://www.maisonbionat.fr/livres-eco-construction/manuel-architecture-naturelle/",

  heroTitle:
    "Manuel d'architecture naturelle : le solaire passif expliqué simplement, appris des traditions vernaculaires",
  heroSubtitle: "David Wright, éd. Edisud — 1981",
  heroIntro:
    "Avant les logiciels de simulation et les cahiers des charges Passivhaus, des architectes comme David Wright observaient les maisons paysannes pour en extraire des principes universels. Ce manuel revient à l'essentiel : utiliser le soleil, la terre et les matériaux locaux pour concevoir un habitat confortable et sobre. Un classique fondateur, accessible et toujours pertinent.",

  cartouches: [
    { label: "Auteur", value: "David Wright" },
    { label: "Éditeur", value: "Edisud" },
    { label: "Parution", value: "1981 — 186 pages" },
    { label: "Niveau", value: "Débutant à intermédiaire" },
    { label: "Thème", value: "Solaire passif" },
  ],

  globalRating: 4.0,
  ratingItems: [
    { label: "Accessibilité", score: 5.0 },
    { label: "Clarté pédagogique", score: 4.5 },
    { label: "Richesse du contenu", score: 3.5 },
    { label: "Utilité pratique", score: 3.5 },
  ],

  verdictSummary:
    "Un manuel fondateur, ancré dans la tradition vernaculaire et le solaire passif, qui enseigne à concevoir un habitat sobre et confortable sans recourir à la complexité technique. Accessible aux non-professionnels, il offre une introduction solide aux principes naturels de l'architecture.",
  verdictForWho:
    "Toute personne qui entame une réflexion sur l'habitat naturel, les auto-constructeurs en phase d'initiation, les lecteurs curieux du lien entre architecture traditionnelle et confort moderne, et les porteurs de projets souhaitant comprendre les bases du solaire passif.",
  verdictWhyWorthIt:
    "Parce qu'il démontre, à travers des exemples concrets tirés de l'architecture vernaculaire mondiale, que les solutions aux problèmes de confort thermique existent depuis des siècles. Pas de technologie complexe, pas de jargon : une lecture du monde bâti qui s'apprend.",
  verdictKeyTakeaway:
    "Les maisons paysannes qui ont traversé les siècles le savent déjà : s'orienter vers le soleil, s'abriter du vent, utiliser la terre comme masse thermique. Ce livre met des mots simples sur cette sagesse ancestrale.",

  contributions: [
    {
      title: "Lire l'architecture vernaculaire comme un manuel vivant",
      description:
        "Les maisons troglodytes, les pueblos adobe, les bastides méditerranéennes : chaque tradition constructive locale a répondu au climat de façon cohérente. Ce livre apprend à décoder ces solutions ancestrales pour en extraire des principes applicables aujourd'hui.",
    },
    {
      title: "Comprendre le solaire passif sans équations",
      description:
        "Comment orienter une façade, dimensionner des ouvertures, éviter la surchauffe estivale et maximiser les apports hivernaux — expliqués en termes visuels et intuitifs, sans calculs complexes.",
    },
    {
      title: "Utiliser la masse thermique comme régulateur naturel",
      description:
        "La terre, la pierre, l'adobe stockent la chaleur le jour et la restituent la nuit. David Wright explique comment ce principe, connu depuis des millénaires, s'intègre dans une conception contemporaine.",
    },
    {
      title: "Concevoir pour le rafraîchissement naturel",
      description:
        "Ventilation traversante, effet de cheminée thermique, enterrement partiel : des stratégies passives pour maintenir le confort en été sans climatisation, illustrées par des exemples issus des zones arides et chaudes.",
    },
    {
      title: "Adopter une démarche adaptée au site et au climat local",
      description:
        "Le livre insiste sur l'importance de partir de son propre contexte : latitude, régime de vents, pluviométrie, matériaux disponibles localement. Il n'y a pas de recette universelle, seulement une méthode d'observation.",
    },
  ],

  strengths: [
    "Très accessible : aucune formation technique préalable n'est nécessaire",
    "Richement illustré, avec des schémas clairs et des exemples issus de cultures constructives variées",
    "Approche non dogmatique : apprendre des traditions, non les singer",
    "Traite à la fois le chauffage passif et le rafraîchissement naturel",
    "Donne une vision géographiquement diverse, utile pour les contextes méditerranéens et continentaux",
    "Format compact et lisible d'un bout à l'autre sans effort excessif",
  ],

  limitations: [
    "Publié en 1981 : certains aspects réglementaires et matériaux mentionnés ont évolué",
    "Moins rigoureux techniquement que des ouvrages plus récents sur le même sujet",
    "Les exemples sont souvent issus du contexte américain (sud-ouest des États-Unis), nécessitant une transposition pour le contexte européen",
    "Ne traite pas de la rénovation de l'existant, centré sur la conception neuve",
    "Peu d'attention portée à l'isolation et à l'étanchéité à l'air, que l'on considère aujourd'hui comme fondamentales",
  ],

  audienceProfiles: [
    {
      profile: "Débutant ou curieux sans bagage technique",
      description:
        "C'est probablement le meilleur livre pour démarrer. Le langage est clair, les illustrations abondantes, la progressivité bien calibrée. Aucune connaissance préalable n'est requise.",
      fit: "ideal",
    },
    {
      profile: "Auto-constructeur en phase de sensibilisation",
      description:
        "Idéal pour construire une culture générale sur le solaire passif avant d'entrer dans les aspects techniques. Se lit bien avant d'autres ouvrages plus spécialisés.",
      fit: "ideal",
    },
    {
      profile: "Porteur de projet en construction neuve",
      description:
        "Utile pour comprendre les grandes orientations et dialoguer avec son maître d'œuvre. À compléter par des ouvrages plus récents pour les aspects techniques et réglementaires.",
      fit: "good",
    },
    {
      profile: "Professionnel expérimenté",
      description:
        "L'intérêt est surtout culturel et historique. Les fondements restent valides, mais la profondeur technique est insuffisante pour un usage professionnel direct.",
      fit: "limited",
    },
  ],

  audienceWhenToRead:
    "En amont de tout projet, pour acquérir une culture de l'habitat naturel. Ou simplement par intérêt pour les liens entre architecture traditionnelle et écologie.",
  audienceProjectStage:
    "Sensibilisation et phase de réflexion préalable, avant d'entrer dans la programmation technique du projet.",

  details: [
    {
      label: "Approche du sujet",
      text: "Empirique et culturelle. David Wright part de l'observation des architectures vernaculaires mondiales pour en dégager des principes universels. L'architecture naturelle n'est pas présentée comme une invention moderne, mais comme une redécouverte.",
    },
    {
      label: "Clarté pédagogique",
      text: "Excellente. Le texte est fluide, les schémas explicatifs font le travail là où les mots seuls ne suffisent pas. On comprend les principes sans avoir besoin de relire.",
    },
    {
      label: "Profondeur de traitement",
      text: "Volontairement limitée. Ce manuel n'est pas un traité. Il n'entend pas couvrir tous les cas de figure, mais donner les grandes clés de lecture. Pour aller plus loin, d'autres ouvrages sont nécessaires.",
    },
    {
      label: "Utilité pratique",
      text: "Bonne pour les principes fondamentaux, plus nuancée pour les détails d'application. L'aspect le plus directement utilisable reste l'orientation, la relation aux ouvertures et la logique des masses thermiques.",
    },
    {
      label: "Lisibilité et structure",
      text: "Le livre se lit comme un voyage : des traditions vernaculaires vers les principes, puis vers des exemples de projets. La progression est naturelle et maintient l'attention du début à la fin.",
    },
    {
      label: "Ton de l'auteur",
      text: "Enthousiaste et chaleureux, sans être militant. David Wright aime l'architecture et le fait sentir. Sa conviction repose sur des exemples concrets, pas sur une idéologie.",
    },
  ],

  editorialNote:
    "Ce qui frappe à la lecture de ce manuel, c'est la modestie de la démarche : David Wright ne prétend pas inventer quoi que ce soit. Il observe, il montre, il transmet. Là où d'autres ouvrages sur l'architecture écologique cherchent à convaincre, celui-ci se contente d'ouvrir les yeux. C'est peut-être ce qui en fait un livre durable : il ne vieillit pas parce qu'il parle de choses qui ne changent pas.",

  faq: [
    {
      question: "Ce livre est-il encore pertinent malgré sa date de publication ?",
      answer:
        "Pour les principes fondamentaux, oui. La course du soleil, la physique de la masse thermique, les stratégies de rafraîchissement passif : ces réalités n'ont pas changé. En revanche, les aspects réglementaires, les normes d'isolation et certains matériaux mentionnés dans le texte ont évolué. Il convient de le lire comme une introduction aux principes, non comme un guide technique à jour.",
    },
    {
      question: "Par quoi compléter ce livre si on veut aller plus loin ?",
      answer:
        "Pour la conception bioclimatique appliquée au contexte français, 'La conception bioclimatique' de Courgey et Oliva est la suite naturelle : plus rigoureux techniquement, ancré dans les réglementations et les pratiques françaises. Pour les matériaux, des ouvrages spécialisés sur la construction en terre, en bois ou en pierre complèteront utilement la perspective ouverte par David Wright.",
    },
    {
      question: "Ce livre est-il adapté à la rénovation ?",
      answer:
        "Non, ou très marginalement. David Wright traite essentiellement de conception neuve. Les principes sur la masse thermique et l'orientation peuvent orienter certaines décisions de rénovation, mais l'ouvrage ne s'adresse pas directement aux projets sur l'existant.",
    },
    {
      question: "Quelle est la différence entre architecture naturelle et éco-construction ?",
      answer:
        "L'architecture naturelle, au sens de David Wright, insiste sur l'utilisation passive du site et des matériaux naturels locaux pour assurer le confort sans mécanismes actifs. L'éco-construction est un terme plus large qui englobe aussi les matériaux à faible impact, la gestion de l'eau, les systèmes de chauffage renouvelables et les certifications environnementales. Les deux se recoupent largement, mais l'architecture naturelle est plus spécifiquement centrée sur la relation entre le bâtiment et son environnement immédiat.",
    },
    {
      question: "Faut-il avoir des bases en architecture pour lire ce livre ?",
      answer:
        "Non. C'est l'un des ouvrages les plus accessibles qui existent sur ce sujet. Il convient aussi bien à un lecteur sans formation technique qu'à un professionnel cherchant à revenir aux fondamentaux. Le vocabulaire est clair, les illustrations font la majeure partie du travail pédagogique.",
    },
  ],

  relatedLinks: [
    {
      tag: "Matériaux sains",
      title: "Matériaux naturels : terre, bois, pierre",
      description:
        "Les matériaux que privilégie l'architecture naturelle : propriétés thermiques, hygroscopicité, impact environnemental. Choisir des matériaux qui respirent et régulent.",
      href: "/materiaux-sains/",
    },
    {
      tag: "Rénovation saine",
      title: "Rénovation saine : par où commencer ?",
      description:
        "Pour ceux qui travaillent sur l'existant plutôt que le neuf : comment intégrer les principes de l'habitat naturel dans une démarche de rénovation.",
      href: "/renovation-saine/",
    },
    {
      tag: "Air intérieur",
      title: "Ventilation naturelle et qualité de l'air",
      description:
        "La ventilation passive est au cœur de l'architecture naturelle. Comprendre les liens entre conception bioclimatique et qualité de l'air intérieur.",
      href: "/air-interieur/",
    },
  ],
};

// ══════════════════════════════════════════════════════════
// Avis : La conception bioclimatique — Jean-Pierre Oliva
// ══════════════════════════════════════════════════════════

export const laConceptionBioclimatique: Review = {
  slug: "la-conception-bioclimatique",
  categorySlug: "livres-eco-construction",
  categoryLabel: "Livres d'éco-construction",
  categoryHref: "/livres-eco-construction/",
  resourceType: "livre",

  bookTitle: "La conception bioclimatique",
  author: "Samuel Courgey et Jean-Pierre Oliva",
  authors: ["Samuel Courgey", "Jean-Pierre Oliva"],
  publisher: "Terre Vivante",
  year: 2006,
  pages: 240,
  isbn: "978-2-914717-21-2",

  coverImage: {
    src: "/ressources/livres-eco-construction/la-conception-bioclimatique.jpg",
    alt: "Couverture du livre La conception bioclimatique, Samuel Courgey et Jean-Pierre Oliva, éditions Terre Vivante",
  },

  metaTitle: "Avis sur La conception bioclimatique — Samuel Courgey et Jean-Pierre Oliva",
  metaDescription:
    "Avis éditorial complet sur La conception bioclimatique de Samuel Courgey et Jean-Pierre Oliva : ce que ce livre apporte vraiment, à qui il s'adresse, ses points forts, ses limites et pourquoi il reste une référence en éco-construction.",
  canonicalUrl:
    "https://www.maisonbionat.fr/livres-eco-construction/la-conception-bioclimatique/",

  heroTitle:
    "La conception bioclimatique : la référence pour concevoir une maison qui travaille avec son environnement",
  heroSubtitle: "Samuel Courgey et Jean-Pierre Oliva, éd. Terre Vivante — 2006",
  heroIntro:
    "Ce livre enseigne à concevoir un bâtiment qui utilise le soleil, le vent et la géographie du site comme des ressources. Une approche systémique, pédagogique, ancrée dans la réalité des projets français. Voici ce qu'il apporte réellement, et pour qui il vaut le détour.",

  cartouches: [
    { label: "Auteurs", value: "S. Courgey & J.-P. Oliva" },
    { label: "Éditeur", value: "Terre Vivante" },
    { label: "Parution", value: "2006 — 240 pages" },
    { label: "Niveau", value: "Intermédiaire" },
    { label: "Thème", value: "Bioclimatique" },
  ],

  globalRating: 4.5,
  ratingItems: [
    { label: "Clarté pédagogique", score: 4.5 },
    { label: "Richesse du contenu", score: 5.0 },
    { label: "Accessibilité", score: 4.0 },
    { label: "Utilité pratique", score: 4.0 },
  ],

  verdictSummary:
    "Un ouvrage de fond qui dépasse largement le manuel technique. Il apprend à lire un site, un ensoleillement, un régime de vents pour en faire des alliés de la conception. Incontournable pour tout projet de construction neuve sérieux.",
  verdictForWho:
    "Auto-constructeurs, maîtres d'ouvrage impliqués, architectes souhaitant structurer leur approche bioclimatique, propriétaires en projet de rénovation, lecteurs curieux de comprendre les fondamentaux de l'architecture passive.",
  verdictWhyWorthIt:
    "Parce qu'il ne vend pas de recettes miracles. Il construit une méthode de pensée qui reste utile à chaque étape d'un projet, du choix du terrain à la disposition des pièces.",
  verdictKeyTakeaway:
    "Une maison bioclimatique ne tire pas parti du soleil par hasard : c'est le résultat d'une lecture rigoureuse du site et de choix pensés dès les premières esquisses.",

  contributions: [
    {
      title: "Lire un site comme un architecte",
      description:
        "Analyser l'ensoleillement, les vents dominants, la topographie et les masques pour intégrer ces données dès la conception, et non après coup.",
    },
    {
      title: "Maîtriser les apports solaires passifs",
      description:
        "Comprendre comment capter la chaleur du soleil en hiver, la stocker dans la masse thermique, et s'en protéger efficacement en été sans climatisation.",
    },
    {
      title: "Concevoir des protections solaires adaptées",
      description:
        "Dimensionner les casquettes, débords et brise-soleil en fonction de la latitude et de l'orientation : ni trop, ni trop peu.",
    },
    {
      title: "Exploiter la ventilation naturelle",
      description:
        "Utiliser les différences de pression et de température pour ventiler sans mécanismes, réduire la chaleur estivale et améliorer le confort quotidien.",
    },
    {
      title: "Penser la maison comme un système",
      description:
        "Chaque choix de conception a des effets en cascade sur le confort, l'énergie et la qualité de l'air. Ce livre aide à raisonner en cohérence globale.",
    },
  ],

  strengths: [
    "Vision systémique : la maison est traitée comme un organisme en interaction avec son environnement",
    "Très pédagogique : les concepts progressent sans jargon inutile",
    "Nombreux schémas et exemples ancrés dans des projets réels",
    "Applicable à diverses configurations climatiques françaises",
    "Non dogmatique : l'auteur expose les compromis et nuances de chaque choix",
    "Traite aussi bien la conception que la réflexion préliminaire au projet",
  ],

  limitations: [
    "La construction neuve est traitée plus en profondeur que la réhabilitation, même si les deux sont abordées",
    "Certains passages supposent des bases en physique du bâtiment (thermique, hygrométrie)",
    "Les outils de simulation mentionnés peuvent sembler pointus pour les non-professionnels",
    "Les projets très spécifiques (maison de ville dense, climat de montagne extrême) nécessitent des adaptations que le livre n'aborde pas en détail",
  ],

  audienceProfiles: [
    {
      profile: "Auto-constructeur ou maître d'ouvrage impliqué",
      description:
        "Idéal pour comprendre les enjeux de conception avant de rencontrer un architecte, ou pour dialoguer sur un pied d'égalité avec son équipe de maîtrise d'œuvre.",
      fit: "ideal",
    },
    {
      profile: "Architecte ou étudiant en architecture",
      description:
        "Excellent complément pour structurer une approche bioclimatique. Utile même pour ceux qui ont déjà des bases, car la méthode est bien articulée.",
      fit: "ideal",
    },
    {
      profile: "Propriétaire en projet de rénovation",
      description:
        "Utile pour comprendre les grands principes, mais plusieurs recommandations ne s'appliquent pas directement à l'existant. À lire en gardant ce biais en tête.",
      fit: "good",
    },
    {
      profile: "Lecteur curieux sans projet immédiat",
      description:
        "Accessible et stimulant intellectuellement. Quelques passages techniques demandent de la patience, mais l'essentiel est compréhensible.",
      fit: "good",
    },
  ],

  audienceWhenToRead:
    "Avant de choisir un terrain, en phase de programmation d'un projet neuf, ou avant d'entamer une rénovation avec des ambitions bioclimatiques.",
  audienceProjectStage:
    "Conception et avant-projet pour le neuf. Diagnostic et programmation pour la réhabilitation.",

  details: [
    {
      label: "Approche du sujet",
      text: "Globale et systémique. L'auteur ne traite pas le bioclimatique comme une liste de solutions techniques, mais comme une façon de lire et d'intégrer le contexte naturel dans la conception architecturale.",
    },
    {
      label: "Clarté pédagogique",
      text: "Bonne. Les concepts progressent logiquement, du site vers le bâtiment, de l'enveloppe vers les usages. Les schémas jouent un rôle essentiel dans la compréhension.",
    },
    {
      label: "Profondeur de traitement",
      text: "Réelle. On ne reste pas en surface. Les mécanismes physiques sont expliqués, les ordres de grandeur donnés, les compromis exposés honnêtement.",
    },
    {
      label: "Utilité pratique",
      text: "Élevée pour un projet neuf. Plus nuancée pour la rénovation. Les outils d'analyse du site et de dimensionnement des protections solaires sont directement applicables.",
    },
    {
      label: "Lisibilité et structure",
      text: "Claire. La progression logique du livre facilite une lecture linéaire, mais on peut aussi naviguer par thèmes grâce à une structure bien découpée.",
    },
    {
      label: "Ton de l'auteur",
      text: "Sobre, technique sans être aride. Pas de militantisme écologique. Jean-Pierre Oliva explique, démontre et nuance plutôt que de convaincre.",
    },
  ],

  editorialNote:
    "Ce qui distingue ce livre de la plupart des ouvrages sur l'éco-construction, c'est qu'il n'essaie pas de convaincre. Il n'y a pas de chiffres chocs ni de promesses sur les économies d'énergie. Il y a une méthode : observer le site, comprendre le soleil et le vent, en déduire des choix de conception cohérents. C'est cette rigueur tranquille qui en fait une référence durable.",

  faq: [
    {
      question: "Ce livre est-il adapté à un projet de rénovation ?",
      answer:
        "Oui, en partie. Le sous-titre de l'ouvrage mentionne explicitement la réhabilitation, et les auteurs y consacrent des développements spécifiques. Cela dit, la construction neuve reste le contexte dans lequel la démarche bioclimatique est la plus libre et la plus complète. Pour la rénovation, le cadre contraint de l'existant impose des adaptations que le livre ne couvre pas toujours en détail. Les principes fondamentaux restent pleinement applicables, mais d'autres ouvrages traitent plus spécifiquement de la rénovation écologique dans ses aspects les plus techniques.",
    },
    {
      question: "Faut-il être architecte pour comprendre ce livre ?",
      answer:
        "Non. L'ouvrage est accessible à un lecteur motivé sans formation technique. Certains passages sur la physique du bâtiment sont plus denses, mais ne sont pas indispensables pour saisir l'essentiel de la démarche. La plupart des propriétaires engagés dans un projet neuf y trouveront leur compte.",
    },
    {
      question:
        "Quelle est la différence entre conception bioclimatique et maison passive ?",
      answer:
        "La maison passive (standard Passivhaus) est un cahier des charges énergétique précis, avec des critères de consommation stricts et un protocole de certification. La conception bioclimatique est une approche plus large : elle vise à utiliser le site, le soleil et le vent pour améliorer le confort et réduire les besoins énergétiques, sans forcément viser une certification. Les deux sont complémentaires mais ne sont pas équivalents.",
    },
    {
      question: "Ce livre est-il encore pertinent aujourd'hui ?",
      answer:
        "Oui. Les principes bioclimatiques reposent sur des réalités physiques (course du soleil, propriétés thermiques des matériaux, mécanique des fluides) qui ne changent pas. La réglementation thermique évolue et les outils de simulation aussi, mais les fondamentaux que ce livre enseigne restent pleinement d'actualité.",
    },
    {
      question:
        "Par quoi commencer si on veut appliquer la conception bioclimatique ?",
      answer:
        "Par l'analyse du site : exposition au soleil, vents dominants, masques naturels ou bâtis. Avant même de dessiner un plan, comprendre les ressources et contraintes du terrain est l'étape clé. Ce livre vous donne exactement les outils pour mener cette analyse avec méthode.",
    },
  ],

  relatedLinks: [
    {
      tag: "Matériaux sains",
      title: "Matériaux naturels et performance thermique",
      description:
        "Choisir des matériaux d'isolation sains qui performent aussi bien thermiquement : laine de bois, chanvre, ouate de cellulose.",
      href: "/materiaux-sains/",
    },
    {
      tag: "Rénovation saine",
      title: "Rénovation saine : par où commencer ?",
      description:
        "Quand on n'est pas en construction neuve, la rénovation impose d'autres priorités. Comment concilier performance et habitat sain dans l'existant.",
      href: "/renovation-saine/",
    },
    {
      tag: "Air intérieur",
      title: "Ventilation et qualité de l'air intérieur",
      description:
        "La conception bioclimatique influence directement la ventilation. Comprendre les liens entre la conception du bâtiment et la qualité de l'air.",
      href: "/air-interieur/",
    },
  ],
};
