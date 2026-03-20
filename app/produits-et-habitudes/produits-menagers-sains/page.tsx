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
  title: "Choisir des produits ménagers sains : labels, ingrédients à éviter",
  description:
    "Comment lire une étiquette de produit ménager, quels labels sont fiables et quels ingrédients surveiller pour choisir des produits moins irritants et moins polluants.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/produits-menagers-sains/",
  },
  openGraph: {
    title: "Choisir des produits ménagers sains : labels, ingrédients à éviter",
    description:
      "Comment lire une étiquette de produit ménager, quels labels sont fiables et quels ingrédients surveiller pour choisir des produits moins irritants et moins polluants.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/produits-menagers-sains/",
  },
};

export default function ProduitsMenuagersSainsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Choisir des produits ménagers sains : labels, ingrédients à éviter", href: "https://www.maisonbionat.fr/produits-et-habitudes/produits-menagers-sains/" },
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
        tag="Guide pratique"
        title="Produits ménagers du commerce : comment choisir les moins problématiques."
        quickAnswer="La plupart des produits ménagers du commerce contiennent des substances qui peuvent irriter les voies respiratoires, la peau ou perturber certaines fonctions biologiques à exposition répétée. Mais il n'est pas nécessaire de tout fabriquer soi-même pour améliorer la situation : lire les étiquettes, repérer les labels fiables et éviter quelques ingrédients à risque permet de faire des choix plus éclairés parmi les produits disponibles. Les labels Écolabel Européen et NF Environnement offrent des garanties réelles sur les formulations."
        stats={[
          { value: "5–10x", label: "l'air intérieur peut être plus pollué que l'air extérieur (ANSES)" },
          { value: "COV", label: "les sprays ménagers figurent parmi les sources d'émission les plus élevées dans les logements (ADEME PRESSENS)" },
          { value: "EU Ecolabel", label: "label européen réglementé avec critères sur les substances nocives pour les produits nettoyants" },
          { value: "80–90 %", label: "du temps passé en intérieur : l'impact des produits ménagers est une exposition quotidienne (ANSES)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Labels et ce qu'ils garantissent" },
          { id: "signes", label: "Signes qu'un produit est trop irritant" },
          { id: "causes", label: "Pourquoi l'étiquette ne suffit pas" },
          { id: "actions", label: "Méthode pour choisir de meilleurs produits" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les labels sur les produits ménagers : ce qu'ils garantissent réellement."
        description="Face à une multitude de produits affichant des arguments environnementaux ou sanitaires, distinguer les labels qui reposent sur des critères vérifiables de ceux qui relèvent du marketing est la première étape d'un choix éclairé."
        variants={[
          {
            indicator: "Label le plus fiable",
            name: "Écolabel Européen (fleur verte)",
            description:
              "Label officiel de l'Union Européenne, réglementé et contrôlé par des organismes indépendants. Pour les produits nettoyants, il impose des critères stricts sur les substances nocives, la biodégradabilité, la concentration des formulations et les emballages. C'est le label le plus rigoureux disponible sur les produits ménagers vendus en Europe.",
          },
          {
            indicator: "Label national fiable",
            name: "NF Environnement",
            description:
              "Label français certifié par AFNOR Certification. Il couvre les produits ménagers avec des critères de performance environnementale et d'innocuité. Moins exigeant que l'Écolabel Européen sur certains points, mais reconnu et contrôlé. Présent sur des produits de marques françaises.",
          },
          {
            indicator: "Arguments à ne pas confondre avec des labels",
            name: "Allégations marketing sans certification",
            description:
              "Les mentions 'vert', 'éco', 'naturel', 'respectueux de l'environnement', 'sans phosphates' ou 'biodégradable' ne correspondent à aucune norme certifiée. Un produit peut les afficher sans aucun contrôle extérieur. Ces allégations ne garantissent ni l'absence d'ingrédients problématiques ni une formulation réellement plus saine.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signes qu'un produit ménager est trop irritant ou peu sain."
        subtitle="Certains effets indésirables lors de l'utilisation ou après contact sont des signaux que le produit utilisé mérite d'être reconsidéré."
        signs={[
          {
            label: "Irritation des yeux, du nez ou de la gorge pendant l'utilisation",
            description:
              "Les vapeurs de solvants, de parfums synthétiques ou de certains agents tensioactifs peuvent irriter les muqueuses. Si ces symptômes apparaissent systématiquement lors de l'utilisation d'un produit, c'est un signe à prendre au sérieux.",
            severity: "modéré",
          },
          {
            label: "Mains sèches, rougeurs ou irritations cutanées après utilisation sans gants",
            description:
              "Certains agents nettoyants, conservateurs et parfums sont irritants pour la peau à contact répété. Des mains abîmées après utilisation régulière signalent que le produit n'est pas adapté à une utilisation sans protection.",
            severity: "modéré",
          },
          {
            label: "Odeur très forte persistant longtemps après utilisation",
            description:
              "Une odeur intense et durable indique que des composés volatils sont toujours présents dans l'air bien après l'application. Cela peut signifier des solvants ou des parfums fortement émissifs. Ventiler pendant et après l'utilisation est dans ce cas indispensable.",
            severity: "léger",
          },
          {
            label: "Réactions chez des personnes asthmatiques ou allergiques dans le foyer",
            description:
              "Les conservateurs comme la méthylisothiazolinone (MIT/CMIT), les parfums synthétiques et certains agents nettoyants sont reconnus comme allergisants. Si un membre du foyer réagit régulièrement lors du ménage, identifier le produit en cause est prioritaire.",
            severity: "critique",
          },
          {
            label: "Emballage sans liste d'ingrédients accessible",
            description:
              "Depuis 2021, les produits ménagers vendus en Europe doivent afficher leurs ingrédients sur l'emballage ou via un QR code. Un produit qui ne respecte pas cette obligation est un signal de manque de transparence.",
            severity: "léger",
          },
        ]}
        footerNote="L'exposition aux produits ménagers est quotidienne et cumulée. Une réaction isolée n'est pas systématiquement grave, mais des symptômes récurrents lors de l'utilisation d'un produit spécifique méritent d'être pris au sérieux et d'orienter vers un produit alternatif."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi l'étiquette seule ne suffit pas et comment la lire."
        subtitle="La réglementation impose une certaine transparence sur les ingrédients, mais la lecture d'une liste INCI ou d'une composition de produit ménager n'est pas intuitive. Quelques repères permettent de s'y retrouver."
        causes={[
          {
            number: "01",
            cause: "Les noms INCI des ingrédients sont souvent peu lisibles",
            explanation:
              "La liste des ingrédients des produits ménagers utilise la nomenclature INCI (International Nomenclature of Cosmetic Ingredients) ou des dénominations chimiques. Un ingrédient comme 'methylisothiazolinone' ne parle pas immédiatement à un consommateur, mais c'est un conservateur reconnu comme allergisant et interdit dans certaines applications depuis 2017 en Europe.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Certains ingrédients à surveiller sont courants dans les formules classiques",
            explanation:
              "Méthylisothiazolinone et méthylchloroisothiazolinone (MIT/CMIT) : conservateurs allergisants. Phosphates : favorisent l'eutrophisation des eaux. Azurants optiques : substances fluorescentes persistantes. Muscs synthétiques : molécules persistantes soupçonnées d'être des perturbateurs endocriniens. Ces ingrédients sont légaux mais présents dans de nombreux produits courants.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les produits concentrés sont généralement moins problématiques",
            explanation:
              "Un produit concentré nécessite moins de volume par usage. Il contient moins d'eau et souvent moins d'agents de remplissage et d'épaississants. L'emballage plus petit réduit aussi les déchets. Les formats concentrés à diluer sont souvent plus transparents sur leurs formulations.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les parfums regroupent de nombreux composés sous un seul terme",
            explanation:
              "La mention 'parfum' ou 'fragrance' sur une étiquette peut regrouper des dizaines de composés différents dont la composition n'est pas détaillée (exception faite des 26 allergènes à déclaration obligatoire depuis la réglementation cosmétique). Préférer les produits 'sans parfum' ou 'fragrance-free' réduit l'exposition aux composés volatils des fragrances.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Le format aérosol multiplie l'exposition aux ingrédients par inhalation",
            explanation:
              "Un spray en aérosol disperse les ingrédients du produit directement dans l'air sous forme de gouttelettes et de vapeur. Cette voie d'exposition est plus directe que le contact cutané. Un même produit en spray irrite davantage les voies respiratoires que le même produit en gel ou liquide appliqué à la main.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="La méthode pour choisir de meilleurs produits ménagers."
        immediate={[
          {
            label: "Repérer l'Écolabel Européen ou NF Environnement",
            description:
              "Ces deux labels offrent des garanties réelles sur la formulation. En priorité, pour les produits que vous utilisez fréquemment (liquide vaisselle, lessive, nettoyant multi-surfaces), rechercher un de ces labels est le moyen le plus simple de faire un meilleur choix sans analyser chaque ingrédient.",
            effort: "Quelques minutes en rayon ou en ligne",
          },
          {
            label: "Éviter les produits avec MIT/CMIT dans la liste d'ingrédients",
            description:
              "La méthylisothiazolinone (MIT) et la méthylchloroisothiazolinone (CMIT) sont des conservateurs allergisants courants. Ils figurent dans de nombreux produits ménagers classiques. Les chercher dans la liste d'ingrédients (ou sur les applications d'analyse comme INCI Beauty ou QuelProduit) permet d'éviter les formulations les plus problématiques.",
            effort: "Gratuit avec une application d'analyse",
          },
          {
            label: "Préférer les formats sans parfum ou à parfum naturel certifié",
            description:
              "Les mentions 'sans parfum', 'fragrance-free' ou 'non parfumé' réduisent l'exposition aux composés volatils des fragrances synthétiques. Pour les produits parfumés, préférer ceux dont les parfums sont d'origine naturelle certifiée.",
            effort: "Sélection en rayon, prix équivalent",
          },
          {
            label: "Éviter les formats aérosol pour les produits à usage fréquent",
            description:
              "Remplacer les sprays ménagers aérosols par des formats en gâchette manuelle (trigger spray) ou en liquide réduit l'émission de fines particules dans l'air. Pour les produits comme les nettoyants WC ou les nettoyants vitres, des formats gel ou liquide existent.",
            effort: "Gratuit, prix souvent équivalent ou inférieur",
          },
        ]}
        structural={[
          {
            label: "Rationaliser la gamme de produits utilisés",
            description:
              "Un foyer utilise en moyenne 6 à 10 produits ménagers différents. Un nettoyant multi-surfaces avec Écolabel Européen peut en remplacer plusieurs. Réduire le nombre de produits réduit mécaniquement le nombre de substances auxquelles vous êtes exposé.",
            effort: "Économie sur les achats à terme",
          },
          {
            label: "Utiliser une application d'analyse des produits ménagers",
            description:
              "Des applications permettent de scanner les codes-barres des produits et d'analyser leurs ingrédients (QuelProduit, INCI Beauty ou équivalents). Elles identifient les ingrédients problématiques connus et proposent parfois des alternatives.",
            effort: "Gratuit (applications gratuites disponibles)",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui faussent le choix d'un produit ménager."
        errors={[
          {
            label: "Faire confiance aux allégations 'vert' ou 'éco' sans label",
            explanation:
              "Les termes 'vert', 'éco', 'naturel' ou 'respectueux de l'environnement' ne sont réglementés par aucune norme certifiée. N'importe quel fabricant peut les utiliser sans contrôle extérieur. Un produit arborant ces mentions peut très bien contenir des ingrédients problématiques. Seuls les labels certifiés (Écolabel Européen, NF Environnement) offrent des garanties vérifiables.",
          },
          {
            label: "Supposer qu'un prix élevé garantit une meilleure formulation",
            explanation:
              "Le prix d'un produit ménager reflète principalement le marketing, le packaging et les coûts de distribution. Des produits très bon marché avec Écolabel Européen existent, tout comme des produits coûteux avec des formulations peu transparentes. Le label est un indicateur plus fiable que le prix.",
          },
          {
            label: "Ignorer la liste des ingrédients parce qu'elle est illisible",
            explanation:
              "La liste INCI peut sembler impénétrable, mais quelques ingrédients clés à surveiller (MIT, CMIT, parfums synthétiques, phosphates) peuvent être repérés avec un peu de pratique ou via une application. Se passer de cette lecture revient à acheter à l'aveugle.",
          },
          {
            label: "Acheter un produit de nettoyage 'bio' sans vérifier sa composition",
            explanation:
              "Le terme 'bio' n'est pas réglementé pour les produits ménagers (contrairement aux produits alimentaires). Un produit ménager bio peut contenir des ingrédients d'origine naturelle mais aussi des substances irritantes ou des huiles essentielles fortement émissives. Vérifier la liste d'ingrédients reste nécessaire, même pour les produits qui se revendiquent bio.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le choix des produits ménagers"
        items={[
          {
            question: "L'Écolabel Européen garantit-il l'absence de tous les ingrédients problématiques ?",
            answer:
              "L'Écolabel Européen impose des critères stricts sur les substances les plus problématiques connues au moment de sa rédaction : il interdit ou limite de nombreux biocides, parfums allergisants et substances persistantes. Il ne garantit pas l'absence absolue de tout composé potentiellement irritant, car la science évolue. Mais c'est le niveau d'exigence le plus élevé disponible sur le marché européen pour les produits ménagers.",
          },
          {
            question: "Les produits concentrés sont-ils vraiment meilleurs ?",
            answer:
              "Oui, sur plusieurs points. Ils nécessitent moins de volume par usage, donc moins d'emballage et de transport. Ils contiennent souvent moins d'eau, d'agents de remplissage et d'épaississants. Leur formulation est parfois plus transparente. Et leur coût à l'usage est généralement inférieur. Pour la lessive et le liquide vaisselle notamment, les formats concentrés sont une option avantageuse.",
          },
          {
            question: "Peut-on utiliser des applications comme INCI Beauty pour les produits ménagers ?",
            answer:
              "Oui, partiellement. Ces applications sont conçues principalement pour les cosmétiques, mais leur base de données d'ingrédients couvre aussi des composés présents dans les produits ménagers (conservateurs, parfums, tensioactifs). Elles permettent d'identifier rapidement les ingrédients problématiques connus. Des applications spécifiques aux produits ménagers, comme QuelProduit, sont encore plus adaptées.",
          },
          {
            question: "Quelle est la différence entre 'sans phosphates' et vraiment écologique ?",
            answer:
              "L'absence de phosphates est un critère positif (les phosphates favorisent l'eutrophisation des cours d'eau) mais très partiel. Un produit peut être sans phosphates et contenir des parfums synthétiques allergisants, des conservateurs problématiques ou des composés organiques volatils. 'Sans phosphates' est donc une allégation utile mais insuffisante pour qualifier un produit ménager de globalement meilleur pour la santé et l'environnement.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Alternatives aux produits ménagers chimiques",
            description:
              "Si vous souhaitez aller plus loin en remplaçant certains produits du commerce par des alternatives moins chimiques.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers irritants",
            description:
              "Identifier les produits les plus problématiques dans votre logement et leurs alternatives.",
            href: "/produits-et-habitudes/produits-menagers-irritants/",
          },
          {
            tag: "Produits et habitudes",
            title: "Lessive saine",
            description:
              "Critères de sélection, labels et ingrédients à éviter spécifiquement pour la lessive.",
            href: "/produits-et-habitudes/lessive-saine/",
          },
        ]}
      />
    </>
  );
}
