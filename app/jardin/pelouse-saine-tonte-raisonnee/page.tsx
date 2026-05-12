import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import IssueDiagnosis from "@/components/issue/IssueDiagnosis";
import IssueSigns from "@/components/issue/IssueSigns";
import IssueCauses from "@/components/issue/IssueCauses";
import IssueActions from "@/components/issue/IssueActions";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Pelouse saine et tonte raisonnée : moins d'arrosage, plus de biodiversité",
  description:
    "Hauteur de tonte 6 à 8 cm, fréquence ajustée à la saison, pelouse fleurie : les principes d'une pelouse saine qui résiste mieux à la sécheresse et accueille les pollinisateurs. Méthode pratique pour particuliers.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/pelouse-saine-tonte-raisonnee/",
  },
  openGraph: {
    title: "Pelouse saine et tonte raisonnée : moins d'arrosage, plus de biodiversité",
    description:
      "Hauteur 6 à 8 cm, fréquence saisonnière, pelouse fleurie : la pelouse plus résistante, plus accueillante, moins entretenue.",
    url: "https://www.maisonbionat.fr/jardin/pelouse-saine-tonte-raisonnee/",
  },
};

export default function PelouseSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Pelouse saine et tonte raisonnée",
      href: "https://www.maisonbionat.fr/jardin/pelouse-saine-tonte-raisonnee/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Jardin"
        parentHref="/jardin/"
        tag="Entretien et biodiversité"
        title="Une pelouse saine : tondre moins court, accepter la diversité, arroser moins."
        quickAnswer="Une pelouse à 3 cm exige plus d'arrosage, plus de désherbage, plus de tontes et résiste mal à la sécheresse. Une pelouse à 6 à 8 cm garde le sol frais, étouffe naturellement les adventices, demande moins d'eau et reste verte plus longtemps en été. Trois leviers structurent une pelouse saine : la hauteur de coupe (jamais sous 5 cm), la fréquence de tonte (ajustée à la saison, pas figée à la semaine), l'acceptation d'une certaine diversité (pissenlits, trèfles, pâquerettes sont des indicateurs de sol vivant, pas des défauts). Une pelouse fleurie tolérée 2 ou 3 mois par an favorise pollinisateurs et oiseaux, sans renoncer à un espace praticable. La tonte mulching (lames qui broient finement les déchets) restitue l'azote au sol et supprime l'évacuation des tontes."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "6–8 cm", label: "hauteur de coupe recommandée pour une pelouse durable" },
          { value: "−40 %", label: "d'arrosage économisé en gardant une hauteur supérieure à 5 cm" },
          { value: "1/3", label: "règle d'or : ne jamais couper plus d'un tiers de la hauteur en une fois" },
          { value: "20+", label: "espèces de pollinisateurs accueillis par une pelouse fleurie urbaine (INRAE)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Le mythe du gazon parfait" },
          { id: "signes", label: "Évaluer sa pelouse" },
          { id: "causes", label: "Pourquoi tondre haut" },
          { id: "actions", label: "Méthode et calendrier" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Approches"
        title="Gazon ras, pelouse mixte, prairie fleurie : trois choix possibles"
        description="Une pelouse n'est pas un objet unique : trois grandes approches coexistent, avec des coûts d'entretien et des bénéfices écologiques très différents."
        variants={[
          {
            indicator: "Coûteux et fragile",
            name: "Gazon monospécifique tondu ras (3 à 4 cm)",
            description:
              "Une seule espèce de graminée (souvent ray-grass anglais), tondue chaque semaine à 3 cm, arrosée régulièrement, parfois traitée contre adventices et mousses. Modèle hérité du jardin à l'anglaise. Exige beaucoup d'eau, devient jaune à la moindre sécheresse, accueille peu de biodiversité, demande tondeuse et traitements réguliers.",
          },
          {
            indicator: "Recommandé",
            name: "Pelouse mixte tondue haut (6 à 8 cm)",
            description:
              "Mélange de graminées et de plantes basses (trèfle, pâquerette, achillée, plantain), tondue moins souvent à 6 à 8 cm. Plus résistante à la sécheresse, plus accueillante pour la biodiversité, esthétique cohérente avec un jardin contemporain. Permet de garder un espace praticable tout en allégeant l'entretien.",
          },
          {
            indicator: "Pour grandes surfaces",
            name: "Prairie fleurie laissée pousser (saison)",
            description:
              "Une partie du jardin volontairement laissée en prairie : tonte 1 à 2 fois par an (en juillet après les floraisons, en automne pour limiter), conservation des hautes herbes et fleurs spontanées. Accueille fortement insectes, oiseaux, petite faune. Pertinent sur zones non praticables ou bords de jardin. Peut se combiner avec une pelouse classique sur les zones de passage.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Diagnostic"
        title="Reconnaître l'état réel de sa pelouse."
        subtitle="Avant de changer ses pratiques, quelques observations simples révèlent ce qui se passe sous une pelouse qui semble propre ou abîmée."
        signs={[
          {
            label: "Pelouse jaune dès juin sur sol nu après tonte",
            description:
              "Une pelouse qui jaunit rapidement en été est une pelouse coupée trop court, sur un sol pauvre en matière organique, ou avec un système racinaire superficiel. Tondre plus haut, pailler les zones nues, ne pas évacuer les tontes (mulching) : la pelouse retrouve sa résistance en une saison.",
            severity: "modéré",
          },
          {
            label: "Mousses étendues malgré les efforts",
            description:
              "Les mousses signalent généralement : sol acide (pH inférieur à 5,5), sol compacté ou mal drainé, ombre importante, tonte trop rase. Plutôt que de traiter chimiquement (interdit pour particuliers depuis 2022), corriger les causes : amendement calcaire léger sur sol acide, scarification au printemps, élagage des arbres si ombre excessive.",
            severity: "léger",
          },
          {
            label: "Pissenlits, plantains, trèfles abondants",
            description:
              "Ces espèces ne sont pas des défauts : elles indiquent un sol biologiquement actif, riche en certains éléments. Le trèfle blanc apporte gratuitement de l'azote à la pelouse (fixation atmosphérique). Le pissenlit est mellifère. Considérer leur présence comme une pelouse fleurie plutôt qu'une dégradation simplifie l'entretien.",
            severity: "léger",
          },
          {
            label: "Sol qui résonne sous le pied (tassement)",
            description:
              "Un sol tassé par les passages répétés ou par des engins lourds résiste à l'infiltration de l'eau, étouffe les racines, favorise mousses et adventices. Test simple : enfoncer un tournevis ou un long couteau dans le sol humide ; s'il enfonce moins de 10 cm, le sol est tassé. Scarification et aération au printemps règlent souvent la situation.",
            severity: "modéré",
          },
          {
            label: "Présence de vers de terre et de leurs turricules",
            description:
              "Les petits monticules de terre fine déposés à la surface (turricules) sont les déjections de vers de terre, indicateur d'un sol vivant. Ne pas traiter ces dépôts comme un défaut : ils enrichissent la pelouse et tassent moins le sol que toute aération mécanique. Laisser sécher, le râteau les disperse naturellement.",
            severity: "léger",
          },
          {
            label: "Zones systématiquement chauves",
            description:
              "Zones de passage répétées (chemin), zone d'ombre dense, sol pauvre, ancienne fosse de plantation : selon le cas, accepter (chemin pavé ou en gravier), changer d'espèce (graminées d'ombre, vivaces couvre-sol), ou amender (apport de compost). Forcer une pelouse uniforme sur une zone défavorable est rarement une bonne idée.",
            severity: "léger",
          },
        ]}
        footerNote="Une pelouse qui n'est pas un tapis vert uniforme n'est pas une pelouse ratée. La diversité visible est souvent le signe d'un sol en bonne santé. Avant de corriger, regarder si le défaut perçu est vraiment un problème."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi une pelouse haute résiste mieux à tout."
        subtitle="Les recommandations de tonte haute ne sont pas esthétiques : elles s'appuient sur le fonctionnement biologique de la pelouse, désormais bien documenté."
        causes={[
          {
            number: "01",
            cause: "Une herbe haute fait de l'ombre à son propre sol",
            explanation:
              "À 6–8 cm, le feuillage couvre le sol et réduit l'évaporation directe d'au moins 30 à 40 % par rapport à un gazon à 3 cm. Le sol reste frais, les racines ne se dessèchent pas, l'arrosage devient moins nécessaire. Sur un été chaud, la différence d'arrosage entre une pelouse à 3 cm et une pelouse à 7 cm est facilement de 30 à 50 %.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Des racines profondes accompagnent un feuillage haut",
            explanation:
              "Les graminées développent un système racinaire en miroir de leur partie aérienne : feuillage de 7 cm en moyenne, racines de 15 à 20 cm. Feuillage rasé à 3 cm, racines de 5 à 8 cm. Une pelouse à racines profondes accède à l'eau plus durablement, supporte des semaines de sécheresse sans jaunir et concurrence efficacement les adventices.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Tondre court stresse la plante",
            explanation:
              "Couper plus d'un tiers de la hauteur en une seule tonte est un stress majeur pour la graminée : elle réagit en investissant dans la reconstitution du feuillage au détriment des racines, qui s'affaiblissent. Règle d'or : ne jamais couper plus d'un tiers en une fois. Une pelouse à 10 cm peut descendre à 7 cm sans stress. Une pelouse à 5 cm à 3 cm est sévèrement stressée.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Le mulching restitue de l'azote au sol",
            explanation:
              "Une tondeuse mulching broie finement les tontes qui retombent au sol et se décomposent rapidement. Cette restitution représente l'équivalent de 30 à 50 % des besoins en azote annuels de la pelouse, sans aucun apport extérieur. Sur 10 ans, le sol s'enrichit en matière organique et la pelouse devient progressivement plus résiliente.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "La diversité résiste mieux aux stress",
            explanation:
              "Une pelouse mixte (graminées + trèfle + plantes basses indigènes) traverse beaucoup mieux les stress (canicule, gel, maladie) qu'un gazon monospécifique. Si une espèce souffre, les autres prennent le relais. Cette résilience écosystémique réduit fortement le besoin de regarnir, traiter ou réensemencer.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Adopter une tonte raisonnée en pratique."
        immediateLabel="Réglages et fréquence"
        structuralLabel="Évolution durable de la pelouse"
        immediate={[
          {
            label: "Régler la hauteur de coupe à 6–8 cm",
            description:
              "Sur tondeuse thermique ou électrique : choisir une hauteur de coupe maximale ou avant-dernier cran. Sur tondeuse robot : régler à 5 à 7 cm selon le modèle (certains montent à 6 cm maximum). Sur tondeuse manuelle hélicoïdale : hauteur de coupe modulable, idéale pour cette pratique. Cette seule mesure change la résistance et l'esthétique en quelques semaines.",
            effort: "5 minutes de réglage",
          },
          {
            label: "Adapter la fréquence à la saison",
            description:
              "Printemps actif (avril–mai) : tonte hebdomadaire si la pousse est rapide. Été (juin–août) : espacer à 10–15 jours, voire 3 semaines en cas de sécheresse. Automne (septembre–octobre) : 10 jours. Hiver : pas de tonte sauf coupe nettoyante en novembre. Le calendrier suit la pousse, pas le jour de la semaine.",
            effort: "Ajustement saisonnier",
          },
          {
            label: "Tondre par temps sec et frais (matinée)",
            description:
              "Tondre une pelouse humide arrache les brins plutôt que de les couper, abîme la pelouse, colmate la tondeuse. Tondre en plein soleil intense fait jaunir les coupes. Idéal : matinée après la rosée évaporée, ou fin de journée par temps frais. Lames toujours bien affûtées (à affûter une fois par an).",
            effort: "Choix du moment",
          },
          {
            label: "Pratiquer le mulching",
            description:
              "Activer le mulching sur la tondeuse (souvent un kit ou un bouchon dédié), ou utiliser une tondeuse mulching native. Les tontes broyées retombent au sol, plus besoin de bac ni de compostage. Pas de surépaisseur si la fréquence et la hauteur sont respectées (couches de 1 à 2 cm de tonte broyée se résorbent en quelques jours).",
            effort: "Kit mulching 20 à 60 € selon tondeuse",
          },
        ]}
        structural={[
          {
            label: "Tolérer une pelouse fleurie au printemps",
            description:
              "Avril–mai : laisser pousser les fleurs spontanées (pâquerettes, pissenlits, véroniques) pour les pollinisateurs. Première tonte une fois les principales floraisons passées (fin mai à mi-juin selon climat). Cette pause de 4 à 6 semaines au printemps fait une grande différence pour les insectes pollinisateurs et reste compatible avec une pelouse utilisable le reste de l'année.",
            effort: "Aucun effort, juste de la patience",
          },
          {
            label: "Réserver une zone non tondue toute la saison",
            description:
              "Sur un terrain de plus de 200 m², laisser 10 à 20 % en prairie : tonte 1 à 2 fois par an seulement, conservation des hautes herbes et fleurs. Pertinent en bord de jardin, sous des arbres, le long d'une haie. Impact biodiversité maximal pour un effort minimal. Esthétique différente, compatible avec un jardin contemporain.",
            effort: "Choix d'aménagement",
          },
          {
            label: "Sursemis pour enrichir la diversité",
            description:
              "À l'automne ou au printemps, semer un mélange « pelouse fleurie » ou « pelouse résiliente » sur la pelouse existante (sursemis) : ajoute trèfle blanc, achillée, lotier, plantain, autres espèces basses. Effet sur 2 à 3 ans. Augmente la résistance à la sécheresse et l'accueil des pollinisateurs.",
            effort: "20 à 60 € de graines",
          },
          {
            label: "Scarifier au printemps si feutrage important",
            description:
              "Au printemps tous les 2 à 3 ans, scarifier la pelouse (râteau scarificateur ou scarificateur motorisé en location) pour éliminer le feutrage de tontes anciennes et de mousses. Sol mieux aéré, eau pénètre mieux, graminées repartent plus vigoureusement. Compléter par sursemis si des trouées apparaissent.",
            effort: "1 à 2 heures, location 30 à 50 €",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs courantes d'entretien de pelouse."
        errors={[
          {
            label: "Tondre à ras pour espacer les tontes",
            explanation:
              "Tondre très court pour gagner du temps entre deux tontes a l'effet inverse : la pelouse stressée pousse plus vite pour se réparer, jaunit en pleine chaleur, demande arrosage et regarnissage. Tondre plus haut et plus rarement est paradoxalement moins de travail au final.",
          },
          {
            label: "Évacuer systématiquement les tontes",
            explanation:
              "Évacuer les tontes prive le sol d'azote et de matière organique. Sauf tonte exceptionnellement haute après plusieurs semaines d'absence, le mulching restitue les nutriments au sol et nourrit la vie microbienne. Les tontes évacuées peuvent aussi servir au compost ou en paillage léger sur le potager.",
          },
          {
            label: "Arroser tous les jours en été",
            explanation:
              "L'arrosage quotidien superficiel maintient un système racinaire superficiel, fragile, dépendant. Mieux vaut arroser 1 à 2 fois par semaine en profondeur (20 mm soit 20 L/m²) : l'eau pénètre, les racines descendent, la pelouse devient autonome. Sur pelouse haute en mulching, l'arrosage estival peut souvent être divisé par deux ou trois.",
          },
          {
            label: "Vouloir un gazon parfait à tout prix en climat tendu",
            explanation:
              "Sur le pourtour méditerranéen et de plus en plus en France centrale, un gazon dense de type « anglais » impose un arrosage massif incompatible avec les restrictions sécheresse. Préférer un mélange adapté au climat (fétuques, dichondra, sedum, pelouse fleurie résistante) ou des alternatives (gravier paysager, plantes couvre-sol). Forcer une pelouse inadaptée est coûteux et insatisfaisant.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la pelouse saine"
        items={[
          {
            question: "À quelle fréquence faut-il vraiment tondre ?",
            answer:
              "Pas une fréquence fixe : suivre la pousse. Règle pratique : tondre quand la pelouse atteint 10 à 12 cm pour la ramener à 6–8 cm. Au printemps actif, cela peut être chaque semaine. En été sec, toutes les 2 à 3 semaines. En automne, tous les 10 jours. En hiver, pas de tonte. Suivre la plante, pas le calendrier.",
          },
          {
            question: "Faut-il scarifier chaque année ?",
            answer:
              "Non, tous les 2 à 3 ans suffit dans la majorité des cas. La scarification annuelle systématique peut au contraire affaiblir la pelouse en arrachant des racines superficielles. Scarifier quand le feutrage devient visible (épaisseur de plus de 1 cm de tontes anciennes feutrées au pied des graminées) ou quand les mousses s'étendent.",
          },
          {
            question: "Le trèfle est-il un défaut ou une qualité ?",
            answer:
              "Une qualité dans la perspective d'une pelouse saine. Le trèfle blanc fixe l'azote atmosphérique et le partage avec les graminées voisines : pelouse plus verte sans engrais. Il fleurit (mellifère), résiste mieux que le ray-grass à la sécheresse, garde le sol couvert. Certains mélanges de graines « pelouse écologique » incluent même délibérément du trèfle blanc. À tolérer ou cultiver volontairement.",
          },
          {
            question: "Quelle tondeuse choisir pour une pelouse saine ?",
            answer:
              "Tondeuse électrique sur petite surface (jusqu'à 300 m²), thermique sur surface plus grande (4 temps, moins polluante que 2 temps), robot tondeur si la programmation correspond à votre rythme (régler à la hauteur maximale). Toujours équipée d'une option mulching. Lames bien affûtées (affûtage annuel). La meilleure tondeuse est celle bien entretenue.",
          },
          {
            question: "Une pelouse fleurie est-elle compatible avec des enfants qui jouent ?",
            answer:
              "Oui sur les zones de passage régulier : la tonte régulière à 6–8 cm garde un espace praticable et propre. Les zones de prairie fleurie laissée pousser peuvent être délimitées à des coins du jardin moins fréquentés. Précaution : surveiller les abeilles butineuses dans les zones très fleuries (trèfle blanc en pleine floraison attire les abeilles, qui ne piquent pas si elles ne sont pas écrasées).",
          },
          {
            question: "Peut-on supprimer la pelouse pour autre chose ?",
            answer:
              "Oui, et c'est parfois la meilleure solution. Sur les zones très ombragées, très ensoleillées sèches, ou de passage : remplacer par des plantes couvre-sol vivaces (lierre rampant, vinca, pervenche, fragaria), un dallage avec joints engazonnés, un paillage minéral planté de vivaces. Une pelouse fragile et toujours décevante peut céder la place à un aménagement plus pertinent. La pelouse n'est pas obligatoire.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Jardin",
            title: "Le silo jardin sain",
            description:
              "Sol vivant, eau de pluie, biodéchets, équipements durables : la vue d'ensemble du jardin sain.",
            href: "/jardin/",
          },
          {
            tag: "Jardin",
            title: "Sol vivant et paillage",
            description:
              "Une pelouse saine repose aussi sur un sol vivant : la logique amont du jardin résilient.",
            href: "/jardin/sol-vivant-paillage-matiere-organique/",
          },
          {
            tag: "Jardin",
            title: "Pesticides : alternatives concrètes",
            description:
              "Mousses et adventices de pelouse : ce qui remplace les anciens produits chimiques interdits depuis 2022.",
            href: "/jardin/pesticides-jardin-alternatives/",
          },
        ]}
      />
    </>
  );
}
