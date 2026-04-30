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
  title: "Filtre à eau du robinet : carafe, charbon actif, osmoseur",
  description:
    "Comparatif des solutions de filtration domestique : ce que filtre vraiment chaque dispositif, coût d'achat et d'entretien, recommandations ANSES.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/filtre-eau-robinet/",
  },
  openGraph: {
    title: "Filtre à eau du robinet : carafe, charbon actif, osmoseur",
    description:
      "Comparatif des solutions de filtration domestique : ce que filtre vraiment chaque dispositif, coût d'achat et d'entretien, recommandations ANSES.",
    url: "https://www.maisonbionat.fr/eau-maison/filtre-eau-robinet/",
  },
};

const faqItems = [
  {
    question: "Faut-il vraiment un filtre à eau si l'eau du robinet est conforme ?",
    answer:
      "Pas nécessairement. Pour la majorité des Français desservis par un réseau public conforme, l'eau du robinet est consommable sans filtration. Une carafe peut améliorer le goût (chlore résiduel) mais n'est pas une nécessité sanitaire. La filtration devient pertinente dans trois cas précis : 1) canalisations en plomb suspectées dans un logement pré-1949 (osmoseur sous évier en attendant les travaux). 2) Eau de puits ou forage privé (charbon actif + UV ou osmoseur selon analyse). 3) Contamination locale documentée (pesticides, nitrates au-dessus de 10 mg/L pour nourrissons : osmoseur ou eau en bouteille adaptée). Sans cause identifiée, filtrer revient à dépenser pour un bénéfice nul.",
  },
  {
    question: "Quelle est la différence entre carafe filtrante et filtre sous évier ?",
    answer:
      "La carafe filtrante (Brita, Aarke, Philips...) utilise une cartouche compacte combinant charbon actif et résines échangeuses d'ions. Coût d'entrée 25-60 €, recharges 3-8 €/cartouche/mois. Volume traité limité (1-2 L à la fois), qualité variable selon usage et entretien. Le filtre sous évier (au charbon actif ou à osmose inverse) est un dispositif fixe raccordé à la plomberie, avec robinet dédié pour l'eau filtrée. Coût 80-300 € pour un charbon actif, 400-1500 € pour un osmoseur, recharges 30-150 €/an. Volume illimité, qualité plus stable, mais entretien à programmer (changement annuel des cartouches).",
  },
  {
    question: "Quel filtre choisir contre les PFAS (« polluants éternels ») ?",
    answer:
      "Sujet sensible et en évolution. Les PFAS (substances per- et polyfluoroalkylées) sont peu retenus par la majorité des dispositifs grand public. L'ANSES a explicitement signalé que les carafes filtrantes ne sont pas efficaces contre les PFAS. Seul l'osmose inverse offre une réduction significative (souvent 80-95 % selon les molécules), confirmée par les tests de l'UFC Que Choisir et de 60 Millions de Consommateurs. Si votre commune est concernée par une contamination PFAS documentée (zone industrielle, ancien site militaire), l'osmoseur sous évier devient pertinent. La directive UE 2020/2184 imposera la surveillance systématique des PFAS dans l'eau du robinet, avec un seuil de 0,1 µg/L pour la somme des 20 PFAS surveillés.",
  },
  {
    question: "Que recommande l'ANSES pour les carafes filtrantes ?",
    answer:
      "L'ANSES a publié plusieurs avis (notamment EAUX2015SA0083) sur les carafes filtrantes. Trois recommandations clés : 1) respecter strictement le calendrier de remplacement de la cartouche indiqué par le fabricant (en général toutes les 4 à 6 semaines), une cartouche en fin de vie peut relarguer les contaminants captés. 2) Conserver la carafe et l'eau filtrée au réfrigérateur, pour limiter la prolifération microbienne. 3) Consommer l'eau filtrée idéalement dans les 24 heures après filtration. L'ANSES rappelle aussi que les carafes ne se substituent pas à un contrôle de la qualité de l'eau du robinet et qu'elles n'apportent un bénéfice réel que sur des paramètres limités (chlore, certains pesticides, certaines molécules organiques).",
  },
];

export default function FiltreEauRobinetPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Filtre à eau du robinet",
      href: "https://www.maisonbionat.fr/eau-maison/filtre-eau-robinet/",
    },
  ]);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroIssue
        parentLabel="Eau maison"
        parentHref="/eau-maison/"
        tag="Choix de filtration"
        title="Filtre à eau du robinet : carafe, charbon actif, osmoseur, lequel choisir ?"
        quickAnswer="Tous les filtres à eau ne se valent pas et chacun est conçu pour des polluants spécifiques. La carafe filtrante (charbon actif + résines échangeuses d'ions) améliore le goût en retenant le chlore résiduel et capture partiellement certaines molécules organiques, mais n'a pas d'effet documenté sur les PFAS, peu sur les métaux lourds et aucun sur les nitrates. Le filtre sous évier au charbon actif fait mieux sur les COV, pesticides et chlore mais pas sur les sels minéraux ni les métaux lourds. L'osmoseur sous évier est le seul dispositif domestique à filtrer efficacement métaux lourds, nitrates, pesticides et PFAS, mais coûte 400 à 1500 € installé et rejette 3 à 5 L d'eau pour 1 L filtré. La règle d'arbitrage : ne filtrer que si une cause est identifiée (canalisation plomb, nitrates en zone agricole, contamination locale documentée). Sans cause, filtrer revient à dépenser pour un bénéfice marginal sur le seul goût."
        stats={[
          {
            value: "25-60 €",
            label: "coût d'entrée d'une carafe filtrante (recharges 3-8 € par mois)",
          },
          {
            value: "400-1500 €",
            label: "coût d'un osmoseur sous évier installé en 2026",
          },
          {
            value: "3 à 5 L",
            label: "eau rejetée par l'osmoseur pour 1 L d'eau filtrée produite",
          },
          {
            value: "0 % PFAS",
            label: "efficacité documentée des carafes filtrantes contre les polluants éternels (ANSES)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les technologies" },
          { id: "signes", label: "Cas où filtrer est utile" },
          { id: "causes", label: "Limites par technologie" },
          { id: "actions", label: "Choisir et entretenir" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les trois grandes familles de filtres et ce qu'elles font vraiment."
        description="Le marché grand public propose une dizaine de technologies différentes regroupées en trois familles principales. Chacune cible des polluants spécifiques selon des principes physico-chimiques distincts. Aucun dispositif ne filtre tout : choisir un filtre, c'est choisir contre quel polluant on veut agir. La règle préalable est de connaître la qualité de son eau (paramètres précis : chlore, nitrates, plomb, pesticides, PFAS) avant de choisir un dispositif, et non l'inverse."
        variants={[
          {
            indicator: "Charbon actif",
            name: "Carafe filtrante et filtre sous évier",
            description:
              "Principe : adsorption des molécules organiques sur la surface poreuse du charbon actif. Efficace sur le chlore résiduel, certains pesticides, certains COV, certains résidus médicamenteux. Inefficace sur les sels minéraux dissous (nitrates, fluorures, sulfates), peu efficace sur les métaux lourds, aucun effet documenté sur les PFAS. Capacité limitée par la saturation du charbon, d'où la nécessité de remplacer régulièrement la cartouche.",
          },
          {
            indicator: "Résines échangeuses",
            name: "Adoucissement et déminéralisation partielle",
            description:
              "Principe : échange d'ions entre l'eau et la résine. Les résines échangeuses de cations remplacent calcium et magnésium par sodium (adoucissement), celles de type anion peuvent capturer certains nitrates. Présentes dans les carafes filtrantes en complément du charbon actif. Limite : saturation rapide, risque de relargage si cartouche trop âgée, augmentation du sodium pour les modèles Ca/Mg → Na.",
          },
          {
            indicator: "Osmose inverse",
            name: "Membrane semi-perméable haute pression",
            description:
              "Principe : l'eau est forcée à travers une membrane microporeuse qui ne laisse passer que les molécules d'eau et arrête la majorité des autres espèces. Réduction très efficace sur métaux lourds (plomb, mercure, arsenic), nitrates (85-95 %), pesticides, PFAS, certains résidus médicamenteux. Limite : déminéralise totalement (à reminéraliser ensuite), rejette 3-5 L pour 1 L filtré, énergie pour la pompe, encombrement sous évier, coût élevé.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Identifier les situations où filtrer apporte un bénéfice réel."
        subtitle="La filtration n'est pas universellement utile. Voici les configurations où un dispositif est justifié, et celles où il s'agit plutôt d'un confort ou d'une dépense superflue."
        signs={[
          {
            label: "Logement avec canalisations privatives en plomb suspectées (pré-1949)",
            description:
              "Cas où la filtration est sanitairement justifiée. En attendant le remplacement des canalisations, un osmoseur sous évier réduit fortement le plomb dans l'eau de boisson (90-99 %). Il ne traite pas l'eau de cuisson ni les autres robinets, donc reste un palliatif. Voir notre page plomb pour le détail des arbitrages.",
            severity: "critique",
          },
          {
            label: "Eau de puits ou forage privé sans contrôle systématique",
            description:
              "Filtration adaptée quasi obligatoire. Charbon actif + UV pour la microbiologie en cas d'eau peu polluée. Osmoseur si l'analyse révèle nitrates, pesticides ou métaux. Ne jamais consommer d'eau de puits sans analyse complète préalable et adaptation du dispositif au profil de pollution identifié.",
            severity: "critique",
          },
          {
            label: "Eau de votre commune avec nitrates > 10 mg/L et présence de bébé ou grossesse",
            description:
              "L'eau en bouteille adaptée est généralement plus simple et moins coûteuse pour la durée d'allaitement (6 mois) ou de grossesse (9 mois) qu'un osmoseur. Mais en cas de dépassement chronique sur plusieurs années, l'osmoseur (réduction des nitrates de 85-95 %) devient pertinent.",
            severity: "modéré",
          },
          {
            label: "Goût marqué de chlore résiduel désagréable",
            description:
              "Cas typique de la carafe filtrante, qui rend ici un service utile. Améliore le confort de consommation sans enjeu sanitaire. Alternative gratuite : laisser l'eau reposer 30 minutes en carafe ouverte, le chlore s'évapore en grande partie. La carafe filtre sans attendre, à coût modéré, choix légitime.",
            severity: "léger",
          },
          {
            label: "Zone connue de contamination PFAS (ancienne usine, site militaire)",
            description:
              "Sujet émergent. Si votre commune ou son captage est répertorié comme contaminé par les PFAS (information disponible auprès de l'ARS ou de la DREAL), seul l'osmoseur sous évier offre une réduction significative. Les carafes filtrantes sont inefficaces sur les PFAS selon l'ANSES.",
            severity: "modéré",
          },
          {
            label: "Eau parfaitement conforme et sans goût marqué : aucun filtre nécessaire",
            description:
              "Cas le plus fréquent en France. Filtrer revient à dépenser sans bénéfice sanitaire ni gustatif. Mieux vaut investir cette dépense ailleurs (hygromètre, capteur CO2, dosimètre radon en zone à potentiel) qui apporteront davantage à la qualité de l'environnement domestique.",
            severity: "léger",
          },
        ]}
        footerNote="La règle simple : commencer par identifier la qualité de l'eau de votre commune (page qualité-eau-robinet) et la situation de votre logement, et seulement ensuite décider d'un dispositif. L'inverse (acheter un filtre puis se demander à quoi il sert) est une logique commerciale, pas sanitaire."
      />

      <IssueCauses
        id="causes"
        title="Les limites concrètes de chaque technologie."
        subtitle="Connaître précisément ce qu'un filtre ne peut pas faire évite les déceptions et les achats redondants. Voici les écueils principaux par technologie."
        causes={[
          {
            number: "01",
            cause: "Carafe filtrante : pas de polluants éternels (PFAS)",
            explanation:
              "L'ANSES a explicitement signalé l'absence d'efficacité documentée des carafes filtrantes contre les PFAS. La structure du charbon actif et des résines des cartouches grand public ne retient pas durablement ces molécules très solubles. Si votre préoccupation principale est PFAS, la carafe est un mauvais choix : seul l'osmoseur fait sens.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Carafe filtrante : risque de relargage en fin de vie",
            explanation:
              "Une cartouche saturée peut relarguer les contaminants qu'elle a captés (ions argent du traitement antibactérien, certains pesticides). L'ANSES insiste sur le respect strict du calendrier de remplacement (4-6 semaines généralement). Une cartouche conservée trop longtemps peut dégrader la qualité de l'eau au lieu de l'améliorer.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Charbon actif sous évier : pas de nitrates ni de métaux lourds",
            explanation:
              "Le charbon actif retient les molécules organiques mais pas les sels minéraux dissous (nitrates) ni les métaux dans la majorité des configurations. Pour le plomb ou les nitrates, le charbon actif seul est insuffisant. Choisir un osmoseur (ou un dispositif spécialisé) si ces polluants sont la cible.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Osmoseur : déminéralisation totale de l'eau",
            explanation:
              "L'osmose inverse retire calcium, magnésium et autres minéraux utiles en plus des polluants. L'eau obtenue est très peu minéralisée, ce qui peut être inadapté à une consommation exclusive sur le long terme (apport en minéraux de l'alimentation devient critique). Les osmoseurs récents intègrent une cartouche de reminéralisation, à entretenir comme les autres.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Osmoseur : volume d'eau rejetée et coût énergétique",
            explanation:
              "Un osmoseur classique rejette 3 à 5 L d'eau pour produire 1 L filtré. Sur une famille de 4 personnes consommant 5 L par jour, cela représente 7 à 10 m³ d'eau perdue par an, soit 30-50 € sur la facture. La pompe consomme aussi de l'électricité. Les modèles récents 'à débit direct' réduisent le ratio à 1:1 mais coûtent plus cher.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir, installer et entretenir le bon dispositif."
        immediate={[
          {
            label: "Identifier d'abord la cause précise qui justifie un filtre",
            description:
              "Plomb suspect, nitrates en zone agricole, eau de puits, PFAS documentés, simple goût de chlore : chaque cas appelle une réponse différente. Ne JAMAIS partir du dispositif vers le besoin, mais l'inverse. Sans cause identifiée par analyse ou par contexte, ne pas filtrer.",
            effort: "Réflexion en amont",
          },
          {
            label: "Pour le seul goût de chlore : carafe filtrante avec entretien rigoureux",
            description:
              "Si l'objectif est uniquement le goût et l'odeur, une carafe est suffisante. Compter 25-60 € à l'achat et 30-100 € de cartouches par an. Suivre strictement les recommandations ANSES : changement de cartouche selon le calendrier fabricant, conservation au frigo, eau consommée dans les 24 heures.",
            effort: "Investissement modéré",
          },
          {
            label: "Pour COV et pesticides organiques : filtre sous évier au charbon actif",
            description:
              "Compter 80-300 € installé selon le modèle. Robinet dédié pour l'eau filtrée. Cartouche à changer tous les 6-12 mois (30-80 €). Plus stable qu'une carafe, capacité illimitée, mais inefficace sur nitrates, métaux lourds et PFAS.",
            effort: "Investissement modéré",
          },
          {
            label: "Pour métaux lourds, nitrates ou PFAS : osmoseur sous évier",
            description:
              "Seul dispositif qui couvre l'ensemble. Compter 400-1500 € posé selon modèle (à débit direct ou avec réservoir, avec ou sans reminéralisation). Cartouches à changer annuellement (50-200 €). Vérifier le ratio eau filtrée / eau rejetée avant achat (privilégier les modèles 1:1).",
            effort: "Investissement durable",
          },
        ]}
        structural={[
          {
            label: "Faire poser par un plombier qualifié pour les dispositifs sous évier",
            description:
              "Pose en autonomie possible mais déconseillée pour les non-bricoleurs : raccordement au circuit d'eau froide, percement du plan de travail pour le robinet dédié, raccordement à l'évacuation pour l'osmoseur. Compter 100-300 € de pose en plus du dispositif. Garantie fabricant souvent conditionnée à une pose professionnelle.",
            effort: "Pose 2 à 4 heures",
          },
          {
            label: "Tenir un calendrier d'entretien strict",
            description:
              "Carafe : remplacement cartouche 4-6 semaines, lavage carafe hebdomadaire à l'eau savonneuse. Charbon actif sous évier : cartouche 6-12 mois selon modèle. Osmoseur : pré-filtres 6-12 mois, membrane 2-5 ans, post-filtre annuel. Acheter d'avance les cartouches compatibles. Sans entretien, performance fortement dégradée et risque de relargage.",
            effort: "Routine 1 à 2 fois par an",
          },
          {
            label: "Faire analyser l'eau filtrée 1 fois par an si dispositif sanitaire critique",
            description:
              "Pour les cas où la filtration est sanitairement justifiée (plomb, nitrates, PFAS) : analyse annuelle de l'eau au robinet filtré pour valider que le dispositif fait son office. Coût 80-150 € selon panel. Permet aussi de détecter une saturation prématurée ou un défaut d'installation.",
            effort: "80-150 € annuel",
          },
          {
            label: "Reconsidérer la filtration en cas d'évolution de la qualité de l'eau",
            description:
              "Si votre commune améliore sa ressource (changement de captage, traitement renforcé) ou si vous remplacez vos canalisations en plomb, le dispositif de filtration peut devenir inutile. Vérifier annuellement la qualité de l'eau du robinet sur le site ARS et démonter le filtre si la cause initiale a disparu.",
            effort: "Évaluation annuelle",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les filtres à eau."
        errors={[
          {
            label: "\"Un filtre, c'est toujours mieux que rien\"",
            explanation:
              "Faux pour deux raisons. 1) Une carafe mal entretenue (cartouche périmée) peut dégrader la qualité de l'eau au lieu de l'améliorer. 2) Un filtre inadapté (charbon actif contre nitrates, par exemple) ne change rien et donne une fausse impression de sécurité. Le filtre doit correspondre au polluant ciblé, sinon c'est une dépense inutile au mieux, contre-productive au pire.",
          },
          {
            label: "\"Un osmoseur, c'est toujours la meilleure solution\"",
            explanation:
              "Pas pour la majorité des Français. L'osmoseur est efficace mais coûteux, gourmand en eau (3-5 L rejetés par L filtré), déminéralise totalement (à reminéraliser ensuite). Pour une eau du robinet conforme et sans contamination spécifique, l'osmoseur est largement disproportionné. Il devient pertinent uniquement face à des polluants ciblés (métaux, nitrates, PFAS).",
          },
          {
            label: "\"Mon adoucisseur d'eau filtre les polluants\"",
            explanation:
              "Non. L'adoucisseur retire le calcium et le magnésium pour réduire le calcaire, mais ne retient ni les nitrates, ni les métaux lourds, ni les pesticides, ni les PFAS. Il a en plus l'inconvénient d'augmenter la teneur en sodium de l'eau adoucie (relargage par les résines). Ne jamais boire l'eau adoucie sans by-pass préservant un robinet d'eau non adoucie pour la consommation.",
          },
          {
            label: "\"Plus mon filtre est cher, mieux il filtre\"",
            explanation:
              "Le prix reflète davantage la marque, le design, les fonctionnalités secondaires (mémoire d'usage, indicateur lumineux, format) que la performance épuratoire. Pour la même technologie (charbon actif ou osmose inverse), un produit milieu de gamme correctement entretenu fait aussi bien qu'un haut de gamme négligé. L'entretien et le respect des préconisations comptent plus que le prix.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les filtres à eau du robinet"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Qualité de l'eau du robinet",
            description:
              "Identifier d'abord la qualité de votre eau et les polluants présents avant de choisir un dispositif de filtration adapté.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Plomb dans les canalisations",
            description:
              "Si la filtration est envisagée pour traiter le plomb : ce que l'osmoseur peut faire et ce qu'aucun filtre ne remplace (le remplacement des canalisations).",
            href: "/eau-maison/plomb-canalisations/",
          },
          {
            tag: "Eau maison",
            title: "Nitrates dans l'eau du robinet",
            description:
              "Pour les nourrissons et femmes enceintes en zone à nitrates : eau en bouteille adaptée vs osmoseur, comparaison des solutions.",
            href: "/eau-maison/nitrates-eau-robinet/",
          },
        ]}
      />
    </>
  );
}
