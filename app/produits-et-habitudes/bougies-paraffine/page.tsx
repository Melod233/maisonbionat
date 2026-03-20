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
  title: "Bougies à la paraffine : impact sur l'air intérieur et alternatives",
  description:
    "Les bougies à la paraffine libèrent benzène, toluène, formaldéhyde et particules fines lors de leur combustion. Comprendre l'impact réel et comment minimiser les risques.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/bougies-paraffine/",
  },
  openGraph: {
    title: "Bougies à la paraffine : impact sur l'air intérieur et alternatives",
    description:
      "Les bougies à la paraffine libèrent benzène, toluène, formaldéhyde et particules fines lors de leur combustion. Comprendre l'impact réel et comment minimiser les risques.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/bougies-paraffine/",
  },
};

export default function BougiesParafinePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Bougies à la paraffine : impact sur l'air intérieur et alternatives", href: "https://www.maisonbionat.fr/produits-et-habitudes/bougies-paraffine/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Produits et habitudes"
        parentHref="/produits-et-habitudes/"
        tag="Comprendre"
        title="Bougies à la paraffine : ce qu'elles libèrent dans l'air et comment minimiser l'impact."
        quickAnswer="La paraffine est un dérivé pétrolier. En brûlant, une bougie à la paraffine libère du benzène, du toluène, du formaldéhyde et des particules fines (PM2.5). Les parfums synthétiques ajoutent des composés organiques volatils supplémentaires. Le risque réel dépend de l'usage : une bougie occasionnelle dans une grande pièce bien ventilée est très différente de plusieurs bougies allumées en permanence dans une petite pièce fermée. La gestion du risque est simple : ventiler, limiter la durée d'allumage et préférer les bougies non parfumées ou à la cire d'abeille."
        stats={[
          { value: "5–10x", label: "l'air intérieur peut être plus pollué que l'air extérieur (ANSES)" },
          { value: "PM2.5", label: "particules fines émises lors de la combustion d'une bougie à la paraffine" },
          { value: "3–5 mm", label: "longueur de mèche recommandée pour une combustion plus propre" },
          { value: "80–90 %", label: "du temps passé en intérieur, d'où l'importance des sources domestiques (ANSES)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Ce qu'émet une bougie" },
          { id: "signes", label: "Quand la bougie dégrade l'air" },
          { id: "causes", label: "Cire et parfum : ce qui détermine l'impact" },
          { id: "actions", label: "Minimiser l'impact" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'émet une bougie lors de sa combustion."
        description="La combustion d'une bougie produit différentes catégories de substances selon la nature de la cire, du parfum et des conditions d'utilisation. Toutes ne présentent pas le même niveau de préoccupation."
        variants={[
          {
            indicator: "Émission principale",
            name: "Particules fines et suie",
            description:
              "Toute combustion produit des particules en suspension. Les bougies à la paraffine émettent plus de suie que les bougies à la cire d'abeille ou au soja, surtout quand la mèche est trop longue ou que la bougie brûle dans un courant d'air. Ces particules fines (PM2.5) peuvent atteindre les voies respiratoires profondes. La fumée noire visible sur les murs ou les plafonds est le signe d'une émission élevée.",
          },
          {
            indicator: "Émission chimique",
            name: "Composés organiques volatils et gaz de combustion",
            description:
              "La combustion de la paraffine libère du benzène, du toluène, du formaldéhyde et d'autres COV en faibles quantités lors d'une utilisation normale. Les parfums synthétiques ajoutent leurs propres composés volatils. La concentration atteinte dans une pièce dépend directement du volume de la pièce, du nombre de bougies et de la ventilation.",
          },
          {
            indicator: "Variable selon la cire",
            name: "Différences entre types de cires",
            description:
              "La cire d'abeille est considérée comme la plus propre à la combustion, avec très peu de suie et pas de résidus pétroliers. La cire de soja produit moins de particules que la paraffine mais les parfums synthétiques restent le facteur déterminant. Une bougie non parfumée, quelle que soit la cire, émet beaucoup moins de COV qu'une bougie parfumée.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quand une bougie dégrade vraiment la qualité de l'air intérieur."
        subtitle="L'usage occasionnel d'une bougie ne constitue pas un risque majeur dans un logement normalement aéré. Certaines situations amplifient en revanche l'impact de façon significative."
        signs={[
          {
            label: "Dépôts noirs sur les murs ou plafonds près de la bougie",
            description:
              "La suie noire qui se dépose sur les surfaces au-dessus d'une bougie est le signe d'une combustion incomplète et d'une émission élevée de particules. Cela survient quand la mèche est trop longue, quand la bougie brûle dans un courant d'air ou est de mauvaise qualité.",
            severity: "critique",
          },
          {
            label: "Plusieurs bougies allumées dans une petite pièce fermée",
            description:
              "Dans un espace de moins de 20 m² sans ventilation, trois bougies ou plus allumées simultanément peuvent élever la concentration de PM2.5 et de COV à des niveaux comparables à d'autres sources de pollution intérieure importantes.",
            severity: "critique",
          },
          {
            label: "Odeur persistante de cire et de parfum après extinction",
            description:
              "Si l'odeur de la bougie reste presente longtemps après son extinction, cela signale que les COV émis sont restés dans l'air faute de ventilation. Aérer pendant et après l'utilisation est indispensable.",
            severity: "modéré",
          },
          {
            label: "Usage quotidien dans une chambre",
            description:
              "Une bougie allumée chaque soir dans une chambre fermée accumule progressivement des résidus de combustion sur les surfaces. La chambre est aussi la pièce où le temps d'exposition est le plus long.",
            severity: "modéré",
          },
          {
            label: "Usage en présence d'enfants, d'asthmatiques ou de femmes enceintes",
            description:
              "Ces populations sont plus sensibles aux particules fines et aux COV. L'usage de bougies parfumées à leur proximité régulière est à limiter fortement.",
            severity: "critique",
          },
        ]}
        footerNote="Une bougie allumée occasionnellement dans une grande pièce bien ventilée représente une exposition modérée. Le risque est principalement lié à la fréquence, au nombre de bougies, à la taille de la pièce et à la qualité de la ventilation."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi la cire et le parfum déterminent l'impact d'une bougie."
        subtitle="Deux facteurs principaux conditionnent la quantité et la nature des émissions d'une bougie : la nature de la cire et la présence ou non de parfum synthétique."
        causes={[
          {
            number: "01",
            cause: "La paraffine est un dérivé pétrolier",
            explanation:
              "La paraffine est un sous-produit du raffinage du pétrole. Sa combustion libère, en plus des produits attendus (CO2, H2O), des hydrocarbures aromatiques comme le benzène et le toluène, ainsi que du formaldéhyde. Ces composés sont présents en faibles quantités lors d'une utilisation normale, mais leur accumulation dans une pièce fermée n'est pas négligeable.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les parfums synthétiques ajoutent des COV supplémentaires",
            explanation:
              "Les huiles parfumantes utilisées dans les bougies commerciales contiennent des dizaines de composés chimiques dont certains sont volatils et potentiellement irritants. Lors de la combustion, ces composés sont libérés dans l'air. Une bougie parfumée émet significativement plus de COV qu'une bougie non parfumée de même cire.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Une mèche trop longue augmente la suie et les émissions",
            explanation:
              "Quand la mèche est trop longue (plus de 5 à 7 mm), la flamme est trop grande, la combustion est incomplète et la production de suie et de particules augmente. Tailler la mèche à 3-5 mm avant chaque allumage est la mesure technique la plus simple pour réduire les émissions.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "La cire d'abeille est la moins émissive",
            explanation:
              "La cire d'abeille brûle plus proprement que la paraffine : moins de suie, pas de résidus pétroliers. La cire de soja est intermédiaire. Dans les deux cas, si la bougie est parfumée avec des huiles synthétiques, l'avantage de la cire est en grande partie annulé par les émissions du parfum.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Comment minimiser l'impact des bougies sur la qualité de l'air."
        immediate={[
          {
            label: "Ventiler pendant et après l'utilisation",
            description:
              "Ouvrir une fenêtre ou s'assurer que la ventilation fonctionne pendant qu'une bougie est allumée dilue les émissions et empêche leur accumulation. Aérer 10 minutes après extinction permet d'évacuer les résidus encore présents dans l'air.",
            effort: "Gratuit",
          },
          {
            label: "Tailler la mèche à 3-5 mm avant chaque allumage",
            description:
              "Une mèche trop longue produit une grande flamme vacillante et beaucoup de suie. Couper la mèche avec des petits ciseaux ou un coupe-mèche avant chaque utilisation réduit significativement les particules émises.",
            effort: "Gratuit",
          },
          {
            label: "Éteindre la bougie avant de quitter la pièce",
            description:
              "Ne laissez jamais une bougie brûler dans une pièce vide ou sans surveillance. En dehors de l'aspect sécurité, les émissions continuent sans que personne soit là pour aérer ou surveiller.",
            effort: "Gratuit",
          },
          {
            label: "Préférer les bougies non parfumées",
            description:
              "Le parfum synthétique est la principale source de COV supplémentaires. Une bougie non parfumée, même à la paraffine, émet bien moins de composés organiques volatils qu'une bougie très parfumée, quelle que soit la cire.",
            effort: "Gratuit ou minime selon le produit",
          },
        ]}
        structural={[
          {
            label: "Passer aux bougies à la cire d'abeille non parfumées",
            description:
              "La cire d'abeille brûle plus proprement que la paraffine et ne contient pas de résidus pétroliers. Combinée à l'absence de parfum synthétique, c'est l'option la moins émissive pour profiter d'une bougie tout en minimisant l'impact sur l'air intérieur.",
            effort: "Prix légèrement supérieur aux bougies classiques",
          },
          {
            label: "Réduire la fréquence et le nombre de bougies allumées simultanément",
            description:
              "Une ou deux bougies en usage modéré dans une grande pièce bien ventilée représente un risque très différent de cinq bougies dans une salle de bain fermée. Réduire la fréquence et le nombre est plus efficace que de changer de type de cire.",
            effort: "Gratuit",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui amplifient l'impact des bougies sur l'air."
        errors={[
          {
            label: "Croire que 'soja' ou 'naturel' signifie sans émissions",
            explanation:
              "La cire de soja produit moins de particules que la paraffine, mais si la bougie est parfumée avec des huiles synthétiques ou des huiles essentielles, les émissions de COV restent significatives. Le qualificatif 'naturel' ne garantit pas l'absence d'impact sur l'air intérieur.",
          },
          {
            label: "Allumer plusieurs bougies pour une atmosphère de spa dans une salle de bain",
            explanation:
              "Les salles de bain sont souvent petites et peu ventilées. Allumer plusieurs bougies parfumées dans ce contexte peut générer des concentrations élevées de COV et de particules dans un espace confiné. C'est précisément la situation à éviter.",
          },
          {
            label: "Ne jamais tailler la mèche",
            explanation:
              "Une mèche non taillée produit une combustion incomplète, davantage de suie et de particules fines. Ce détail technique a un impact direct sur la qualité des émissions. Tailler la mèche à 3-5 mm avant chaque utilisation est la mesure technique la plus simple.",
          },
          {
            label: "Allumer une bougie pour masquer une odeur",
            explanation:
              "Allumer une bougie parfumée pour couvrir une odeur de cuisine ou d'humidité ajoute des COV à un air déjà chargé sans traiter la source. Ventiler et identifier la cause de l'odeur est plus efficace et sans risque supplémentaire.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les bougies et la qualité de l'air"
        items={[
          {
            question: "Les bougies à la cire de soja sont-elles vraiment meilleures que la paraffine ?",
            answer:
              "La cire de soja produit effectivement moins de suie et pas de résidus pétroliers lors de la combustion. Mais l'essentiel des COV émis par une bougie parfumée vient du parfum, pas de la cire. Si une bougie à la cire de soja est fortement parfumée avec des huiles synthétiques, elle peut émettre autant ou plus de COV qu'une bougie à la paraffine non parfumée. Le critère le plus important est l'absence de parfum synthétique.",
          },
          {
            question: "Les bougies à la cire d'abeille sont-elles vraiment les moins polluantes ?",
            answer:
              "La cire d'abeille est généralement considérée comme la cire brûlant le plus proprement : peu de suie, pas de dérivés pétroliers, point de fusion élevé qui limite les résidus. C'est la meilleure option pour une combustion propre, à condition qu'elle soit non parfumée ou parfumée avec des huiles essentielles de qualité et en faible quantité.",
          },
          {
            question: "Peut-on utiliser des bougies en présence d'enfants ?",
            answer:
              "Avec précautions. Les enfants sont plus sensibles aux particules fines et aux COV que les adultes. L'usage de bougies parfumées dans leurs chambres ou les espaces où ils passent beaucoup de temps est à limiter. Si vous utilisez des bougies, préférez-les non parfumées, à la cire d'abeille, et veillez à bien ventiler. Ne laissez jamais une bougie allumée dans une pièce où un enfant est seul.",
          },
          {
            question: "Quelle est la différence entre une bougie parfumée aux huiles essentielles et une bougie aux huiles synthétiques ?",
            answer:
              "Les huiles essentielles sont d'origine végétale et contiennent des terpènes et autres composés naturels, qui sont eux aussi des COV mais généralement mieux tolérés que les composés synthétiques. Les huiles parfumantes synthétiques contiennent souvent des phtalates et des composés aromatiques de synthèse. Dans les deux cas, une combustion produit des émissions. La bougie non parfumée reste l'option la moins émissive.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Désodorisants d'intérieur et qualité de l'air",
            description:
              "Les désodorisants, comme les bougies parfumées, ajoutent des COV sans traiter les odeurs à la source. Les alternatives efficaces.",
            href: "/produits-et-habitudes/desodorisants-air-interieur/",
          },
          {
            tag: "Air intérieur",
            title: "Sources de pollution de l'air intérieur",
            description:
              "Tour d'horizon des principales sources de polluants dans les logements : produits, matériaux, activités.",
            href: "/air-interieur/sources-pollution-air/",
          },
          {
            tag: "Air intérieur",
            title: "Bien aérer son logement",
            description:
              "L'aération dilue et évacue les polluants émis par les bougies et les produits ménagers. Les bonnes pratiques.",
            href: "/air-interieur/bien-aerer-maison/",
          },
        ]}
      />
    </>
  );
}
