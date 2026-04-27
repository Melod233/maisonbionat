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
  title: "Sources de pollution de l'air intérieur : d'où vient la pollution chez vous",
  description:
    "La pollution de l'air intérieur ne vient pas d'une seule source. Matériaux, mobilier, activités domestiques, produits : découvrez les quatre grandes catégories et comment agir sur chacune.",
  alternates: { canonical: "https://www.maisonbionat.fr/air-interieur/sources-pollution-air/" },
  openGraph: {
    title: "Sources de pollution de l'air intérieur : d'où vient la pollution chez vous",
    description:
      "La pollution de l'air intérieur ne vient pas d'une seule source. Matériaux, mobilier, activités domestiques, produits : découvrez les quatre grandes catégories et comment agir sur chacune.",
    url: "https://www.maisonbionat.fr/air-interieur/sources-pollution-air/",
  },
};

export default function SourcesPollutionAirPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Sources de pollution de l'air intérieur : d'où vient la pollution chez vous", href: "https://www.maisonbionat.fr/air-interieur/sources-pollution-air/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Air intérieur"
        parentHref="/air-interieur/"
        tag="Comprendre"
        title="D'où vient la pollution de l'air intérieur : les quatre grandes catégories de sources."
        quickAnswer="L'air intérieur est pollué par des sources multiples et simultanées : les matériaux de construction et de finition, le mobilier, les activités domestiques (cuisson, douche, ménage) et les produits du quotidien. Chaque catégorie émet des polluants différents à des moments différents. Les identifier permet d'agir de façon ciblée plutôt que de tout traiter de la même façon."
        stats={[
          { value: "5–10×", label: "plus pollué : l'air intérieur par rapport à l'extérieur selon l'ANSES" },
          { value: "300+", label: "composés chimiques différents peuvent être présents dans l'air d'un logement ordinaire" },
          { value: "80–90 %", label: "du temps passé en intérieur (OMS) : la qualité de ces sources compte vraiment" },
          { value: "A+", label: "label d'émission des matériaux de construction, obligatoire en France depuis 2012" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les quatre grandes catégories" },
          { id: "signes", label: "Identifier les sources les plus actives" },
          { id: "causes", label: "Pourquoi certaines sources sont plus problématiques" },
          { id: "actions", label: "Agir sur chaque catégorie" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Quatre grandes catégories"
        title="Les quatre familles de sources de pollution intérieure"
        description="Comprendre d'où vient la pollution permet de cibler les actions les plus efficaces. Ces quatre catégories couvrent la quasi-totalité des sources présentes dans un logement ordinaire. Elles n'émettent pas toutes en continu : certaines sources sont permanentes, d'autres sont actives uniquement lors d'une activité précise."
        variants={[
          {
            indicator: "Sources permanentes, souvent sous-estimées",
            name: "Catégorie 1 : matériaux de construction et de finition",
            description:
              "Peintures, revêtements de sol (moquette, PVC, parquet collé), colles, enduits, isolants synthétiques : ces matériaux émettent des composés organiques volatils (COV) et, pour certains, du formaldéhyde. Les émissions sont les plus élevées dans les premiers mois après la pose ou la rénovation, puis diminuent progressivement. Le formaldéhyde, classé cancérigène avéré (groupe 1, CIRC 2004), est présent dans beaucoup de colles et résines. La valeur guide ANSES pour une exposition chronique est de 10 µg/m³ depuis janvier 2023.",
          },
          {
            indicator: "Pics d'émission les premières semaines",
            name: "Catégorie 2 : mobilier et objets",
            description:
              "Les meubles en panneaux de bois aggloméré (MDF, aggloméré, contreplaqué standard) sont une source importante de formaldéhyde et de COV. Les émissions sont maximales dans les premières semaines suivant la fabrication, puis décroissent. Les textiles traités (moquettes, rideaux) peuvent aussi émettre des composés ignifuges ou des parfums de synthèse. Les bougies et diffuseurs d'ambiance ajoutent des aldéhydes et des particules fines à cette catégorie.",
          },
          {
            indicator: "Sources ponctuelles, mais régulières",
            name: "Catégorie 3 : activités domestiques",
            description:
              "La cuisson (surtout au gaz) produit du dioxyde d'azote (NO2), du monoxyde de carbone (CO) et des particules fines. La douche génère plusieurs litres de vapeur qui font monter le taux d'humidité. Le tabac intérieur est une source dense de particules fines et de COV. Le bricolage et la peinture sont des sources ponctuelles très concentrées.",
          },
          {
            indicator: "Souvent ignorés car quotidiens",
            name: "Catégorie 4 : produits ménagers et de soin",
            description:
              "Sprays nettoyants, désodorisants, parfums d'ambiance, produits assouplissants, cosmétiques en spray : tous émettent des COV lors de leur utilisation. Les sprays sont particulièrement problématiques car ils génèrent des particules fines en plus des composés gazeux. La concentration est forte pendant l'utilisation et quelques minutes après, notamment dans les pièces fermées.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Identifier les sources actives"
        title="Les signaux qui révèlent quelle catégorie de source est la plus active chez vous"
        subtitle="Ces signes ne permettent pas de mesurer précisément la pollution, mais ils orientent vers la ou les catégories à traiter en priorité."
        signs={[
          {
            label: "Odeur chimique après rénovation ou installation de mobilier neuf",
            description:
              "Une odeur caractéristique de 'neuf' (légèrement piquante, douce-chimique) est un signe typique d'émissions de COV et de formaldéhyde par des matériaux ou meubles récents. Elle est normale les premières semaines mais doit diminuer avec une bonne aération.",
            severity: "modéré",
          },
          {
            label: "Irritations des yeux ou de la gorge dans certaines pièces",
            description:
              "Des yeux qui picotent ou une gorge irritée dans une pièce spécifique peuvent indiquer une concentration en formaldéhyde ou en COV supérieure aux autres. Cela arrive souvent dans des pièces récemment renovées ou garnies de mobilier neuf.",
            severity: "modéré",
          },
          {
            label: "Condensation matinale sur les vitres dans plusieurs pièces",
            description:
              "Une humidité élevée de façon diffuse (pas seulement en salle de bain) peut indiquer que les activités domestiques produisent plus de vapeur que la ventilation ne peut en évacuer : cuisson sans aération, linge séché à l'intérieur, nombreuses plantes d'intérieur.",
            severity: "léger",
          },
          {
            label: "Air lourd pendant ou après la cuisson",
            description:
              "Une sensation d'air étouffant pendant la cuisson, surtout au gaz, est un signal que les émissions de NO2, CO et particules fines sont élevées. La présence d'une hotte non raccordée à l'extérieur aggrave la situation car elle recircule simplement l'air sans l'évacuer.",
            severity: "modéré",
          },
          {
            label: "Odeurs persistantes de produits même après séchage",
            description:
              "Un sol ou des surfaces qui sentent encore le nettoyant plusieurs heures après le ménage indiquent que les composés volatils des produits ménagers sont encore présents dans l'air. Cela arrive souvent dans des pièces mal ventilées ou avec des produits très parfumés.",
            severity: "léger",
          },
          {
            label: "Symptômes qui disparaissent en dehors du logement",
            description:
              "Maux de tête, fatigue, nez qui coule ou irritations qui s'améliorent systématiquement quand vous quittez le logement sont un signal fort que la qualité de l'air intérieur est problématique. Ce type de symptôme mérite une attention particulière et éventuellement une mesure professionnelle.",
            severity: "critique",
          },
        ]}
        footerNote="Ces observations ne remplacent pas une mesure de qualité d'air. Des capteurs de CO2 et COV grand public permettent d'avoir une idée des niveaux. Pour une mesure précise du formaldéhyde ou des polluants spécifiques, un diagnostic professionnel est nécessaire."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi certaines sources sont plus problématiques"
        title="Ce qui rend certaines sources particulièrement préoccupantes"
        subtitle="La dangerosité d'une source dépend de sa fréquence, de l'intensité des émissions et de la ventilation du logement."
        causes={[
          {
            number: "01",
            cause: "La combinaison de plusieurs sources simultanées dans un espace confiné",
            explanation:
              "Une source isolée est rarement dangereuse. C'est la combinaison de sources multiples dans un espace peu ventilé qui crée des concentrations problématiques. Un logement avec des meubles en MDF, peint récemment, où l'on cuisine et utilise des sprays ménagers peut dépasser les valeurs guides pour plusieurs polluants en même temps.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les matériaux et meubles à fort taux de formaldéhyde",
            explanation:
              "Le formaldéhyde est classé cancérigène avéré (CIRC groupe 1) et présent dans de nombreux panneaux de bois et colles. La valeur guide ANSES de 10 µg/m³ pour une exposition chronique peut être dépassée dans des logements neufs ou récemment meublés sans ventilation suffisante. Les émissions durent des mois, pas seulement les premières semaines.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "La cuisson au gaz dans une cuisine mal ventilée",
            explanation:
              "La combustion du gaz produit du NO2 et du CO. En l'absence de hotte raccordée à l'extérieur ou de fenêtre ouverte, les concentrations peuvent dépasser les valeurs guides de l'OMS dans les 30 minutes suivant la cuisson. Les personnes asthmatiques ou les jeunes enfants sont particulièrement sensibles au NO2.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les sprays et produits en aérosol utilisés dans des pièces fermées",
            explanation:
              "Les sprays (nettoyants, désodorisants, laques, parfums) génèrent à la fois des particules fines et des COV. Utilisés dans une salle de bain fermée ou un couloir, ils créent des pics de concentration élevés qui se dissipent lentement. Leur usage répété dans des espaces non ventilés est une source sous-estimée d'exposition.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Le linge séché à l'intérieur sans ventilation suffisante",
            explanation:
              "Le linge humide ajoute plusieurs litres de vapeur à l'air intérieur. Dans un logement sous-ventilé, cela fait monter le taux d'humidité au-dessus de 65 %, ce qui favorise les moisissures. Les assouplissants et lessives peuvent également libérer des composés volatils pendant le séchage.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Agir sur chaque catégorie de source"
        immediateLabel="Actions immédiates"
        structuralLabel="Changements durables"
        immediate={[
          {
            label: "Identifier les sources actives dans chaque pièce",
            description:
              "Faites un tour de chaque pièce avec une liste : matériaux récents, mobilier neuf, produits de nettoyage, appareils de cuisson, humidité. Repérer les sources présentes est la première étape avant d'agir.",
            effort: "30 min, à faire une fois",
          },
          {
            label: "Aérer systématiquement après les activités à fortes émissions",
            description:
              "Cuisson, douche, nettoyage au spray : ouvrir les fenêtres pendant et après chaque activité réduit les concentrations avant qu'elles ne s'accumulent. C'est la mesure la plus simple et la plus immédiatement efficace.",
            effort: "Gratuit, réflexe à adopter",
          },
          {
            label: "Laisser dégazer les meubles neufs avant installation dans une chambre",
            description:
              "Installez les meubles neufs en MDF dans une pièce bien ventilée et aérée pendant 2 à 4 semaines avant de les placer dans une chambre, surtout celle des enfants. Les émissions de formaldéhyde et de COV sont maximales dans cette période.",
            effort: "2 à 4 semaines de précaution",
          },
          {
            label: "Remplacer les sprays par des produits en format liquide ou solide",
            description:
              "Un spray nettoyant peut être remplacé par un produit liquide dilué dans de l'eau et appliqué avec un chiffon. Cela réduit la génération de particules fines et de COV lors de l'application.",
            effort: "Changement d'habitude",
          },
        ]}
        structural={[
          {
            label: "Choisir des matériaux et finitions labellisés A+ ou à faibles émissions",
            description:
              "Lors d'une rénovation ou d'un achat de mobilier, privilégiez les produits portant le label d'émission A+ (obligatoire en France pour les matériaux de construction depuis 2012) et les meubles certifiés faibles émissions (label EMICODE, Blue Angel). Ces produits émettent significativement moins de COV et de formaldéhyde.",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Installer une hotte raccordée à l'extérieur au-dessus de la cuisinière",
            description:
              "Une hotte à recirculation filtre les particules mais renvoie l'air (avec ses COV gazeux et son humidité) dans la cuisine. Une hotte raccordée à l'extérieur évacue réellement les polluants. C'est un investissement structurant mais très efficace pour la qualité de l'air en cuisine.",
            effort: "500 à 2 000 euros selon l'installation",
          },
          {
            label: "Réduire les sources de parfum artificiel dans le logement",
            description:
              "Bougies parfumées, désodorisants, diffuseurs de parfum : ces produits ajoutent des aldéhydes et des COV à l'air intérieur en continu ou lors de leur utilisation. Les remplacer par une bonne ventilation et, si souhaité, des plantes dont les effets restent modestes, réduit la charge chimique globale.",
            effort: "Changement de pratique",
          },
          {
            label: "Éviter de sécher le linge en intérieur, ou ventiler fortement si inévitable",
            description:
              "Si le séchage en intérieur est nécessaire, l'associer à une VMC correctement dimensionnée et à une aération régulière de la pièce concernée. Un déshumidificateur peut aussi réduire le pic d'humidité produit.",
            effort: "Organisation du quotidien",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les idées fausses sur les sources de pollution"
        errors={[
          {
            label: "Une maison propre est une maison saine",
            explanation:
              "Le nettoyage avec des produits chimiques peut ajouter des polluants à l'air intérieur au moment même où l'on croit assainir l'espace. Une maison sans poussière visible peut contenir des concentrations élevées de COV ou de formaldéhyde.",
          },
          {
            label: "Seuls les matériaux de construction polluent vraiment",
            explanation:
              "Les activités domestiques (cuisson, nettoyage, utilisation de sprays) contribuent autant que les matériaux, parfois davantage lors des pics. L'approche la plus efficace tient compte des quatre catégories de sources simultanément.",
          },
          {
            label: "Les produits naturels ou bio ne polluent pas",
            explanation:
              "Certains produits d'entretien naturels ou les huiles essentielles émettent des terpènes qui peuvent réagir avec d'autres composés de l'air pour former des polluants secondaires. Naturel ne signifie pas inoffensif pour la qualité de l'air.",
          },
          {
            label: "La pollution vient surtout de l'extérieur",
            explanation:
              "L'ANSES estime que l'air intérieur peut contenir 5 à 10 fois plus de polluants que l'air extérieur dans un logement ordinaire. La pollution extérieure contribue, mais les sources intérieures sont généralement prépondérantes.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les sources de pollution de l'air intérieur"
        items={[
          {
            question: "Quelle est la source de pollution la plus importante dans un logement ?",
            answer:
              "Il n'y a pas de source unique prédominante : cela dépend du logement, de son âge, des matériaux utilisés, des habitudes de vie et de la qualité de la ventilation. Dans un logement récemment rénové ou meublé, les matériaux peuvent dominer. Dans un logement ancien bien entretenu, les activités domestiques et les produits ménagers peuvent représenter la part la plus importante.",
          },
          {
            question: "Les meubles IKEA ou les grandes surfaces polluent-ils autant que les meubles bas de gamme ?",
            answer:
              "Les grandes enseignes ont généralement adopté des standards d'émissions plus stricts ces dernières années. Mais les meubles en panneaux de bois aggloméré, MDF ou contreplaqué standard émettent tous du formaldéhyde, quelle que soit la marque. Pour limiter l'exposition, choisissez des meubles certifiés faibles émissions et aérez bien lors de l'installation.",
          },
          {
            question: "Comment mesurer la qualité de l'air chez soi ?",
            answer:
              "Des capteurs grand public permettent de mesurer le CO2, les COV totaux et les particules fines. Ils donnent une indication utile mais ne mesurent pas les polluants spécifiques comme le formaldéhyde. Pour une analyse précise (en cas de symptômes, de rénovation récente ou d'un doute sérieux), un diagnostic professionnel avec des mesures certifiées est nécessaire.",
          },
          {
            question: "Le formaldéhyde est-il présent dans tous les logements ?",
            answer:
              "Oui, le formaldéhyde est présent à des concentrations variables dans la quasi-totalité des logements. Il est émis par de nombreux matériaux et produits courants. La valeur guide ANSES pour une exposition chronique est de 10 µg/m³. Dans les logements bien ventilés avec des matériaux à faibles émissions, les concentrations restent généralement en dessous de ce seuil.",
          },
          {
            question: "La cuisson au gaz est-elle vraiment problématique ?",
            answer:
              "Elle peut l'être dans une cuisine mal ventilée. La cuisson au gaz produit du NO2, du CO et des particules fines, notamment lors de cuissons à haute température. En ouvrant la fenêtre ou en utilisant une hotte raccordée à l'extérieur, les concentrations restent dans des niveaux acceptables pour la plupart des usages.",
          },
          {
            question: "Y a-t-il des sources que l'on ne peut pas supprimer et qu'il faut juste ventiler ?",
            answer:
              "Oui. Les occupants eux-mêmes sont une source de CO2, de vapeur et de composés organiques (respiration, transpiration). Cuisiner, se laver, faire le ménage : ces activités sont inévitables. La stratégie efficace consiste à les accompagner d'une bonne ventilation plutôt que de chercher à les éliminer.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Les polluants intérieurs les plus fréquents",
            description:
              "COV, formaldéhyde, particules fines, radon : ce guide catalogue les polluants eux-mêmes, leurs effets et les seuils de référence.",
            href: "/air-interieur/polluants-interieurs-frequents/",
          },
          {
            tag: "Air intérieur",
            title: "Le formaldéhyde dans la maison",
            description:
              "Cancérogène avéré et présent partout : sources réelles, valeurs guides ANSES et leviers concrets pour réduire l'exposition.",
            href: "/air-interieur/formaldehyde-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Plantes dépolluantes : ce que la science dit vraiment",
            description:
              "Étude NASA 1989 et avis ADEME 2011 : pourquoi les plantes ne dépolluent pas un logement, et le rôle utile qu'elles jouent vraiment.",
            href: "/air-interieur/plantes-depolluantes-maison/",
          },
        ]}
      />
    </>
  );
}
