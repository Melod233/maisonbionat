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
  title: "Colles à faibles émissions : choisir et poser sans dégrader l'air",
  description:
    "Colles à bois, à parquet, à carrelage, à papier peint : repérer les classes A+ et EC1, comprendre les alternatives sans formaldéhyde et éviter de gâcher un revêtement A+ par une mauvaise colle.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/colles-faibles-emissions/",
  },
  openGraph: {
    title: "Colles à faibles émissions : choisir et poser sans dégrader l'air",
    description:
      "Colles à bois, à parquet, à carrelage, à papier peint : repérer les classes A+ et EC1, comprendre les alternatives sans formaldéhyde et éviter de gâcher un revêtement A+ par une mauvaise colle.",
    url: "https://www.maisonbionat.fr/materiaux-sains/colles-faibles-emissions/",
  },
};

const faqItems = [
  {
    question: "Pourquoi se préoccuper des colles si je choisis des matériaux A+ ?",
    answer:
      "Une colle de pose représente une part importante du système collé, et son étiquetage est indépendant de celui du revêtement. Un parquet A+ posé avec une colle classée B émet largement plus que le parquet seul, surtout dans les premiers jours après pose. Les colles font partie des produits soumis à l'étiquetage français des polluants volatils depuis le 1er septembre 2013, au même titre que les peintures et les revêtements.",
  },
  {
    question: "Que signifient les labels EC1 et EC1+ que l'on voit sur les colles ?",
    answer:
      "EC1 et EC1+ sont les classes du référentiel allemand Emicode, géré par l'institut GEV. Elles évaluent les émissions de COV totaux à 3 jours puis à 28 jours après application. EC1 correspond à de très faibles émissions, EC1+ va encore plus loin. C'est un label volontaire reconnu en Europe, plus exigeant que la classe A+ française sur certains paramètres. Beaucoup de colles A+ portent aussi le marquage EC1 ou EC1+.",
  },
  {
    question: "Existe-t-il des panneaux de bois sans colle au formaldéhyde ?",
    answer:
      "Oui. Les classes NAF (No Added Formaldehyde) et NAUF (No Added Urea Formaldehyde) désignent des panneaux fabriqués sans colle à urée-formol. Elles utilisent des liants alternatifs : MDI (méthylène diphényl diisocyanate), résines à base de soja, de colza ou de tournesol. Côté norme américaine, la classe CARB Phase 2 et son équivalent ULEF (Ultra Low Emission Formaldehyde) imposent des seuils très bas. Le coût est généralement supérieur de 15 à 25 %, justifié pour les pièces sensibles.",
  },
  {
    question: "Les colles à carrelage sont-elles concernées aussi ?",
    answer:
      "Oui mais à un degré moindre. Les colles à carrelage classiques sont à base de ciment et émettent peu de COV. Les colles en pâte dispersée, plus utilisées en rénovation rapide, peuvent contenir davantage d'additifs et méritent d'être vérifiées. Toutes les colles de pose vendues en France pour usage intérieur portent l'étiquette obligatoire A+ à C, qui permet la comparaison.",
  },
];

export default function CollesFaiblesEmissionsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    {
      name: "Colles à faibles émissions : choisir et poser sans dégrader l'air",
      href: "https://www.maisonbionat.fr/materiaux-sains/colles-faibles-emissions/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Matériaux sains"
        parentHref="/materiaux-sains/"
        tag="Choix matériaux"
        title="Colles à faibles émissions : la pièce souvent oubliée d'un chantier sain"
        quickAnswer="Les colles concentrent une part importante des émissions de COV d'un chantier intérieur. Elles sont présentes partout : dans les panneaux de bois reconstitué (urée-formol des MDF, agglomérés, contreplaqués), dans la pose des sols (colles à parquet, à carrelage, à linoléum), dans la fixation des revêtements muraux et au montage des meubles. Choisir un revêtement A+ posé avec une colle non classée annule largement le bénéfice du choix de revêtement. L'étiquetage français A+ à C s'applique aux colles de pose au même titre qu'aux peintures et revêtements depuis le 1er septembre 2013. Le label volontaire Emicode EC1 et EC1+ complète utilement le repère, et plusieurs alternatives sans formaldéhyde existent désormais (NAF, NAUF, CARB Phase 2, liants soja ou colza)."
        stats={[
          {
            value: "A+ à C",
            label: "étiquetage obligatoire des colles de pose en intérieur depuis 2013",
          },
          {
            value: "EC1 / EC1+",
            label: "labels volontaires Emicode (GEV) pour les très faibles émissions à 3 et 28 jours",
          },
          {
            value: "NAF / NAUF",
            label: "panneaux de bois sans formaldéhyde ajouté, alternative aux colles urée-formol",
          },
          {
            value: "CARB Phase 2",
            label: "norme américaine de référence pour les très faibles émissions de panneaux",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Où sont les colles à problème" },
          { id: "signes", label: "Repérer une colle saine" },
          { id: "causes", label: "Pourquoi les colles émettent" },
          { id: "actions", label: "Bien choisir et bien poser" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les trois grandes familles de colles dans un logement et leur empreinte sur l'air."
        description="Toutes les colles ne sont pas équivalentes en termes d'émissions. Trois grandes familles structurent les arbitrages : les colles industrielles utilisées dans la fabrication des panneaux de bois reconstitué, les colles de pose employées sur chantier (parquet, carrelage, papier peint, revêtements souples) et les colles d'assemblage du mobilier. Les premières sont rarement visibles mais représentent l'une des plus grosses sources de formaldéhyde dans un logement neuf ou rénové. Les deuxièmes sont visibles à l'achat et soumises à l'étiquetage français obligatoire. Les troisièmes échappent à ce dispositif puisque le mobilier n'est pas couvert."
        variants={[
          {
            indicator: "Colles industrielles",
            name: "Liants des panneaux de bois reconstitué",
            description:
              "Présentes dans les MDF, agglomérés, contreplaqués, OSB. Historiquement à base d'urée-formol, source majeure de formaldéhyde dans les logements. Les classes E1 (norme européenne EN 13986), CARB Phase 2 (Californie), NAF et NAUF (sans formaldéhyde ajouté) et ULEF (ultra faibles émissions) sont les repères à chercher en achat. Un panneau classé E1 est très répandu mais émet plus qu'un NAF ou ULEF.",
          },
          {
            indicator: "Colles de pose",
            name: "Parquet, carrelage, sol souple, papier peint",
            description:
              "Soumises à l'étiquetage français A+ à C depuis 2013. Les colles acryliques en dispersion sont nettement moins émissives que les colles à solvants. Le label volontaire Emicode (EC1, EC1+) garantit des seuils encore plus bas. Une colle à parquet de classe A+ et EC1 est la cible courante pour une pièce de vie.",
          },
          {
            indicator: "Colles de mobilier",
            name: "Hors étiquetage obligatoire",
            description:
              "Colles d'assemblage des meubles, des cuisines équipées, des dressings : aucune obligation d'étiquetage en France. Les certifications volontaires (Écolabel européen, NF Environnement Ameublement, label Ange Bleu en Allemagne) sont les seuls repères publics. Pour les usages sensibles, privilégier le mobilier en bois massif assemblé par tenons et mortaises ou par chevilles plutôt que collé.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître une colle ou un panneau à privilégier en magasin."
        subtitle="Les bons repères sont peu nombreux mais visibles, à condition de savoir où regarder."
        signs={[
          {
            label: "Étiquette A+ visible et bien lisible sur l'emballage",
            description:
              "Les colles de pose vendues en France doivent porter l'étiquetage français des polluants volatils. Un produit sans cette étiquette est soit ancien (stock), soit non conforme. Pour une colle de pose en pièce de vie, exiger A+.",
            severity: "modéré",
          },
          {
            label: "Mention Emicode EC1 ou EC1+ en complément",
            description:
              "Les colles destinées à la pose de revêtements (sols, papiers peints, carrelage en pâte) portent fréquemment le marquage EC1 ou EC1+. C'est un repère plus exigeant que A+, particulièrement utile pour les chantiers en chambre d'enfant ou en rénovation lourde.",
            severity: "léger",
          },
          {
            label: "Colle à dispersion aqueuse plutôt que colle à solvant",
            description:
              "Les colles à dispersion aqueuse (acryliques, vinyliques, polyuréthane sans solvant) émettent fortement moins de COV que les colles à solvants organiques. La fiche technique précise systématiquement la nature de la colle : à privilégier en intérieur.",
            severity: "modéré",
          },
          {
            label: "Pour les panneaux de bois : mention NAF, NAUF ou ULEF",
            description:
              "Sur les panneaux MDF, agglomérés et contreplaqués, ces labels signalent l'absence de colle à urée-formol. Ils sont nettement moins courants que la classe E1 mais existent dans les enseignes spécialisées et chez les fournisseurs orientés rénovation saine. Cible privilégiée pour la chambre.",
            severity: "modéré",
          },
          {
            label: "Fiche technique cohérente avec l'étiquette",
            description:
              "Une fiche technique sérieuse précise le détail des émissions par substance en µg/m³, la classe finale et les certifications. Une colle vendue avec une simple mention « écologique » sans étiquette ni certification précise n'apporte aucune garantie objective.",
            severity: "léger",
          },
          {
            label: "Forte odeur chimique persistante : signe d'une colle à éviter",
            description:
              "Une colle qui dégage une forte odeur de solvant à l'application, qui persiste plusieurs jours, contient probablement des composés volatils en concentration élevée. À l'inverse, une colle à dispersion aqueuse de qualité a une odeur très discrète.",
            severity: "modéré",
          },
        ]}
        footerNote="Aucun de ces signes ne dispense de vérifier l'étiquette officielle. Le marketing « naturel » ou « écologique » seul ne remplace pas une classe A+ et une certification volontaire reconnue."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi certaines colles émettent fortement, et comment l'industrie évolue."
        subtitle="Les colles posent un problème quand elles relarguent de la vapeur de leurs solvants ou de leurs liants pendant des semaines ou des années après pose."
        causes={[
          {
            number: "01",
            cause: "Les résines urée-formol des panneaux de bois reconstitué",
            explanation:
              "Historiquement, MDF, agglomérés et contreplaqués utilisent des résines urée-formol, mélamine-urée-formol ou phénol-formol pour lier les fibres ou copeaux de bois. Ces résines libèrent du formaldéhyde de façon décroissante mais durable, parfois pendant plusieurs années. C'est l'une des sources principales de formaldéhyde domestique.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les solvants organiques des colles à parquet ou à sol",
            explanation:
              "Les colles à solvants utilisées historiquement pour la pose des parquets et des sols souples libèrent du toluène, du xylène et d'autres COV pendant et après la pose. Les colles modernes à dispersion aqueuse ont réduit ces émissions de façon importante, mais coexistent encore en stock.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les plastifiants et additifs des colles en pâte",
            explanation:
              "Phtalates, biocides, conservateurs, plastifiants : les colles en pâte de revêtement souple peuvent contenir une variété d'additifs qui ne sont pas tous mesurés par l'étiquette française (qui couvre 10 substances spécifiques plus le COVT). C'est l'une des limites de l'étiquette.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les colles de mobilier non encadrées",
            explanation:
              "Le mobilier français n'est pas soumis à l'étiquetage. Une cuisine équipée neuve, un dressing en panneaux assemblés par colle peuvent émettre des COV en grande quantité dans les premières semaines, notamment dans des espaces confinés comme l'intérieur de placards fermés.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Une cohérence imparfaite entre revêtement et colle",
            explanation:
              "Choisir un parquet A+ et le poser avec une colle B ou C est une erreur fréquente. L'attention va naturellement au revêtement visible, alors que la colle invisible peut représenter une part importante de l'émission totale du système. C'est la principale cause d'écart entre choix supposé sain et résultat mesuré.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir des colles A+ et organiser une pose qui ne dégrade pas le résultat."
        immediate={[
          {
            label: "Exiger l'étiquetage A+ sur toutes les colles de pose",
            description:
              "Pour une pose en pièce de vie ou en chambre, toutes les colles de pose (parquet, carrelage, sol souple, papier peint, revêtement mural) doivent être classées A+. La cohérence du chantier compte plus que le seul choix du revêtement visible.",
            effort: "Vérification au moment de l'achat",
          },
          {
            label: "Privilégier les colles à dispersion aqueuse",
            description:
              "Pour les sols, les revêtements souples et le papier peint, les colles à dispersion aqueuse (acryliques, vinyliques) sont nettement moins émissives. La fiche technique l'indique explicitement. À écarter par défaut les colles à solvants en intérieur.",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Aérer fortement pendant et après la pose",
            description:
              "Quel que soit le niveau A+ de la colle, les émissions de pose sont les plus élevées dans les premiers jours. Aérer fenêtres ouvertes pendant la pose et plusieurs heures après, VMC en marche forcée si possible, et idéalement ne pas occuper la pièce pendant 24 à 48 heures pour les chantiers en chambre.",
            effort: "Gratuit, organisation",
          },
          {
            label: "Reporter de quelques semaines la pose en chambre d'enfant",
            description:
              "Pour la chambre d'un enfant ou d'une personne sensible, prévoir 2 à 4 semaines de dégazage avec aération renforcée avant occupation. Les émissions chutent fortement sur cette période, et c'est ce que mesure justement l'étiquette à 28 jours.",
            effort: "Organisation, sans coût",
          },
        ]}
        structural={[
          {
            label: "Pour le mobilier, privilégier le bois massif aux panneaux collés",
            description:
              "Le mobilier en bois massif assemblé par tenons et mortaises, par chevilles ou par tourillons utilise très peu de colle, et celle-ci est souvent du PVA (acétate de polyvinyle) à très faibles émissions. Pour les meubles destinés à une chambre, c'est l'arbitrage le plus efficace face aux meubles en panneaux reconstitués.",
            effort: "Surcoût à l'achat, durabilité supérieure",
          },
          {
            label: "Choisir des panneaux NAF, NAUF ou CARB Phase 2 si reconstitué inévitable",
            description:
              "Si le projet impose des panneaux de bois reconstitué (cuisine sur mesure, dressing intégré), exiger des panneaux NAF, NAUF ou conformes à la norme CARB Phase 2. Ces panneaux utilisent des liants alternatifs (résines au soja, MDI, liants polysaccharides) avec des émissions de formaldéhyde équivalentes au bois naturel.",
            effort: "Surcoût 15-25 % vs panneau standard",
          },
          {
            label: "Demander la fiche technique des colles utilisées par l'artisan",
            description:
              "Les professionnels sérieux fournissent les fiches techniques des produits utilisés sur demande. C'est un test simple de la qualité d'un artisan en rénovation saine : refuser de fournir cette information révèle une attention insuffisante au sujet.",
            effort: "Quelques minutes de demande",
          },
          {
            label: "Vérifier la qualité de l'air après une rénovation lourde",
            description:
              "Pour une rénovation complète d'une chambre ou d'un logement intégrant beaucoup de colles, un kit de mesure laboratoire (formaldéhyde, COV) à 50-150 € permet de valider que les choix de produits ont effectivement maintenu une bonne qualité d'air avant occupation.",
            effort: "Coût ponctuel modéré",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les colles."
        errors={[
          {
            label: "\"Si je choisis un parquet A+, la colle n'a pas d'importance\"",
            explanation:
              "Faux. La colle de pose représente une part importante de l'émission totale du système collé, surtout dans les premiers jours. Un revêtement A+ posé avec une colle non classée annule largement le bénéfice du choix de revêtement. Les deux étiquettes doivent être cohérentes.",
          },
          {
            label: "\"Une colle naturelle ou écologique est forcément saine\"",
            explanation:
              "Le marketing écologique seul n'est pas un repère technique. Une colle « naturelle » sans étiquette A+ et sans certification volontaire (Emicode, Écolabel) peut émettre davantage qu'une colle synthétique correctement étiquetée. La certification publique reste le bon filtre.",
          },
          {
            label: "\"Toutes les colles à panneaux émettent du formaldéhyde\"",
            explanation:
              "Plus aujourd'hui. Les classes NAF (No Added Formaldehyde), NAUF (No Added Urea Formaldehyde) et les liants alternatifs (résines à base de soja, colza, tournesol, ou MDI sans formaldéhyde) existent et sont disponibles dans des enseignes spécialisées. Le surcoût existe mais reste modéré.",
          },
          {
            label: "\"Les meubles industriels respectent forcément l'étiquetage\"",
            explanation:
              "Faux. Le mobilier français n'est pas soumis à l'étiquetage A+ à C des produits de construction. Des certifications volontaires (Écolabel européen, NF Environnement Ameublement, Ange Bleu allemand) existent pour le mobilier et restent les seuls repères publics fiables.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les colles à faibles émissions"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Étiquetage A+ : comprendre les classes COV",
            description:
              "Décret 2011-321, 10 substances mesurées, classes A+ à C : lire correctement l'étiquette des colles, peintures et revêtements.",
            href: "/materiaux-sains/etiquetage-cov-comprendre/",
          },
          {
            tag: "Matériaux sains",
            title: "Panneaux de bois et formaldéhyde",
            description:
              "Le dossier dédié aux émissions des panneaux MDF, agglomérés et contreplaqués, et aux alternatives à urée-formol.",
            href: "/materiaux-sains/panneaux-bois-formaldehyde/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux : comment ça fonctionne",
            description:
              "Phénomène physique du dégazage, durée selon les matériaux et leviers pour accélérer la baisse des émissions après pose.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
        ]}
      />
    </>
  );
}
