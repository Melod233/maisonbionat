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
  title: "Panneaux bois agglomérés, MDF et OSB : émissions et choix",
  description:
    "E1, E0, ENF, CARB Phase 2, future E05 (août 2026) : comprendre les émissions des panneaux MDF, agglomérés et OSB pour choisir un mobilier moins émissif.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/materiaux-sains/panneaux-bois-formaldehyde/",
  },
  openGraph: {
    title: "Panneaux bois agglomérés, MDF et OSB : émissions et choix",
    description:
      "E1, E0, ENF, CARB Phase 2, future E05 (août 2026) : comprendre les émissions des panneaux MDF, agglomérés et OSB pour choisir un mobilier moins émissif.",
    url: "https://www.maisonbionat.fr/materiaux-sains/panneaux-bois-formaldehyde/",
  },
};

const faqItems = [
  {
    question: "Quelle est la différence entre E1, E0 et E05 ?",
    answer:
      "E1 est le seuil réglementaire européen actuel, à 0,124 mg/m³ en chambre d'essai. E0 est un engagement volontaire de fabricant, à 0,05 mg/m³, soit moins de la moitié de E1. E05 est la nouvelle classe réglementaire qui entrera en vigueur le 6 août 2026, à 0,062 mg/m³, qui se positionne entre les deux. Pour une chambre, E0 reste aujourd'hui le bon repère ; à compter de 2026, E05 sera le nouveau minimum.",
  },
  {
    question: "Les meubles IKEA sont-ils E1 ou E0 ?",
    answer:
      "IKEA déclare appliquer la limite IOS-MAT-0003, qui est plus stricte que E1 sans atteindre systématiquement E0. La marque a réduit progressivement les émissions de ses panneaux depuis le début des années 2010. Pour un usage en chambre, demandez la fiche technique du produit précis qui vous intéresse : les niveaux varient selon la gamme. Les meubles d'entrée de gamme et les solutions placage MDF restent souvent E1 stricte.",
  },
  {
    question: "Le contreplaqué est-il moins émissif que le MDF ?",
    answer:
      "Selon le liant. Un contreplaqué à colle phénol-formaldéhyde (typique du contreplaqué marine ou extérieur) émet bien moins qu'un MDF urée-formol. Un contreplaqué bon marché à colle urée peut au contraire émettre autant qu'un MDF. La référence est la classe d'émission affichée, pas le type de panneau. CARB Phase 2 ou ENF restent les meilleurs repères.",
  },
  {
    question: "Existe-t-il des panneaux vraiment sans formaldéhyde ?",
    answer:
      "Oui, les panneaux ENF (en Europe) ou NAF (en Amérique du Nord) utilisent des liants sans formaldéhyde ajouté : pMDI (isocyanate) ou colles aux protéines de soja. Ils émettent uniquement le formaldéhyde naturel du bois (très faible, autour de 0,01 à 0,02 mg/m³). C'est le meilleur choix disponible pour les pièces sensibles, à un coût supérieur de 20 à 50 % selon la gamme.",
  },
];

export default function PanneauxBoisFormaldehydePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    {
      name: "Panneaux bois agglomérés, MDF et OSB : émissions et choix",
      href: "https://www.maisonbionat.fr/materiaux-sains/panneaux-bois-formaldehyde/",
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
        tag="Guide pratique"
        title="Panneaux bois agglomérés, MDF et OSB : ce qu'ils émettent vraiment et comment choisir moins émissif"
        quickAnswer="MDF, panneaux de particules agglomérés et OSB sont les principaux matériaux du mobilier et de l'aménagement intérieur en France. La quasi-totalité utilise des résines à base d'urée-formaldéhyde, qui émettent du formaldéhyde de manière continue, surtout pendant les premières années. La norme européenne EN 13986 impose au minimum la classe E1 (≤ 0,124 mg/m³ en chambre d'essai). Les classes E0 (≤ 0,05 mg/m³), ENF (sans formaldéhyde ajouté) et la certification américaine CARB Phase 2 vont nettement plus loin. Une révision européenne (classe E05, ≤ 0,062 mg/m³) entrera en vigueur le 6 août 2026 et divisera par deux le seuil minimum autorisé. Choisir un panneau étiqueté E0/CARB Phase 2/ULEF, faire dégazer les meubles neufs et privilégier le bois massif pour les chambres restent les leviers les plus efficaces."
        stats={[
          {
            value: "0,124 mg/m³",
            label: "limite actuelle de la classe E1, minimum légal en Europe (norme EN 13986)",
          },
          {
            value: "0,062 mg/m³",
            label: "future limite E05 applicable au 6 août 2026, qui divise par deux le seuil européen",
          },
          {
            value: "0,05 mg/m³",
            label: "limite de la classe E0, plus stricte que E1, déjà disponible chez plusieurs fabricants",
          },
          {
            value: "CARB Phase 2",
            label: "certification américaine de référence, équivalente ou supérieure à E0 selon le type de panneau",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les classes" },
          { id: "signes", label: "Reconnaître un panneau émissif" },
          { id: "causes", label: "Pourquoi ils émettent" },
          { id: "actions", label: "Bien choisir" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les classes d'émission applicables aux panneaux bois en France."
        description="Les panneaux à base de bois (MDF, panneaux de particules, OSB, contreplaqués) sont régis en Europe par la norme harmonisée EN 13986, qui impose un classement des émissions de formaldéhyde mesurées en chambre d'essai selon la norme EN 717-1. À cette base s'ajoutent des classes plus strictes utilisées par certains fabricants comme arguments commerciaux et certifications volontaires. Les nomenclatures peuvent varier : un même panneau peut être annoncé en E1, E0, low-formaldehyde, CARB Phase 2 ou ULEF selon le marché. Comprendre cette grille permet d'éviter les confusions au moment de l'achat."
        variants={[
          {
            indicator: "Classe E1",
            name: "Minimum réglementaire européen",
            description:
              "≤ 0,124 mg/m³ en chambre d'essai EN 717-1. Seuil obligatoire pour la mise sur le marché européen depuis 2010 (norme EN 13986). C'est le niveau d'émission par défaut de la grande majorité des panneaux MDF, agglomérés et OSB grand public. Compatible avec un usage en logement, mais non optimal pour les chambres ou les enfants.",
          },
          {
            indicator: "Classe E0",
            name: "Engagement volontaire de fabricant",
            description:
              "≤ 0,05 mg/m³, soit moins de la moitié de la limite E1. Pas de définition réglementaire harmonisée à l'échelle européenne, mais utilisée par plusieurs fabricants sérieux. Recommandée pour les chambres, les pièces de vie et le mobilier d'enfant.",
          },
          {
            indicator: "CARB Phase 2 / TSCA Title VI",
            name: "Référence nord-américaine, exigeante",
            description:
              "Standard californien (CARB) puis fédéral américain (TSCA Title VI) qui fixe des seuils selon le type de panneau : 0,09 ppm pour les particules, 0,11 ppm pour le MDF, 0,13 ppm pour le contreplaqué. De nombreux fabricants européens proposent désormais cette certification pour exporter, ce qui en fait un repère utile en France.",
          },
          {
            indicator: "ULEF, NAF, ENF",
            name: "Sans formaldéhyde ajouté ou ultra-faibles émissions",
            description:
              "ULEF (Ultra Low-Emitting Formaldehyde) et NAF (No Added Formaldehyde) sont des qualifications CARB pour des panneaux à liants alternatifs (résines pMDI, colles aux protéines de soja). ENF est la nouvelle classe européenne en préparation pour les panneaux à émissions très basses. C'est le meilleur choix disponible aujourd'hui pour les pièces sensibles.",
          },
          {
            indicator: "Future classe E05",
            name: "Nouvelle limite européenne au 6 août 2026",
            description:
              "≤ 0,062 mg/m³, soit la moitié de la limite E1 actuelle. Cette révision de la norme harmonisée fera passer le seuil E0 d'engagement volontaire à un nouveau quasi-minimum réglementaire. Les fabricants se préparent depuis plusieurs années, ce qui élargit déjà l'offre disponible en magasin.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître un panneau ou un meuble particulièrement émissif."
        subtitle="Quelques indices visuels et organoleptiques aident à distinguer les panneaux à risque, surtout pour les achats en grande surface ou en marketplaces."
        signs={[
          {
            label: "Forte odeur âcre ou chimique au déballage",
            description:
              "Une odeur prononcée, irritante pour les yeux ou la gorge, signale une concentration en formaldéhyde élevée. Les panneaux E1 grand public dégagent une odeur perceptible, les panneaux E0/ENF beaucoup moins. Un meuble livré qui sent fort dans son emballage doit être déballé et aéré avant installation.",
            severity: "modéré",
          },
          {
            label: "Aucune mention de classe d'émission sur la fiche produit",
            description:
              "Les panneaux européens devraient au minimum afficher la classe E1 (norme EN 13986). Une absence totale de mention sur l'emballage, le marquage CE ou la fiche technique est un indice de panneau d'importation hors normes ou de fabricant peu transparent. Demandez la classe avant de finaliser l'achat.",
            severity: "critique",
          },
          {
            label: "Tranches non couvertes ou mal scellées",
            description:
              "Les bords coupés d'un panneau MDF ou aggloméré émettent davantage que les surfaces stratifiées. Un meuble mal fini, avec des tranches brutes visibles ou un placage qui se décolle, augmente significativement les émissions par unité de surface.",
            severity: "modéré",
          },
          {
            label: "Bois clair, fin et très uniforme : MDF probable",
            description:
              "Le MDF se reconnaît à sa coupe lisse, sa densité homogène et sa surface fine sans grain visible. Il est l'un des panneaux les plus émissifs en formaldéhyde par défaut, sauf mention E0 ou ENF. Les meubles d'entrée de gamme « blanc laqué » sont quasi systématiquement en MDF.",
            severity: "modéré",
          },
          {
            label: "Meuble en kit très bon marché, sans information sur l'origine",
            description:
              "Les meubles à très bas prix, surtout vendus en marketplace, peuvent provenir de fabricants hors Union européenne où la norme E1 n'est pas appliquée. Les contrôles à l'entrée du marché européen existent mais ne couvrent pas tous les flux. Un prix anormalement bas justifie d'exiger la classe d'émission.",
            severity: "léger",
          },
        ]}
        footerNote="Aucune odeur ou aucune absence d'odeur ne garantit à elle seule le niveau d'émission : le seuil de perception olfactive du formaldéhyde est élevé. La fiche technique et les certifications restent le critère objectif principal."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi les panneaux bois reconstitués émettent du formaldéhyde."
        subtitle="L'émission n'est pas un défaut isolé : elle est intrinsèque au type de liant utilisé. Comprendre la chimie permet de comprendre l'arbitrage économique."
        causes={[
          {
            number: "01",
            cause: "Les colles à base de résines urée-formol",
            explanation:
              "Le liant le plus couramment utilisé pour le MDF, les panneaux de particules et certains contreplaqués est la résine urée-formaldéhyde. Économique et performante, elle libère lentement du formaldéhyde par hydrolyse pendant des années, surtout en présence d'humidité ou de chaleur. La masse de colle représente 8 à 12 % du panneau.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les résines mélamine-formol et phénol-formol",
            explanation:
              "Pour les usages structurels (OSB extérieur, contreplaqué marine) ou décoratifs (stratifiés), les résines mélamine-formol et phénol-formol sont plus stables et émettent moins. C'est pour cette raison que l'OSB destiné à un usage extérieur est souvent moins émissif que le MDF d'entrée de gamme.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les conditions d'usage qui accélèrent l'émission",
            explanation:
              "L'émission de formaldéhyde augmente avec la température et l'humidité. Un panneau dans une salle de bain, près d'un radiateur ou dans une véranda exposée au soleil émet bien plus que le même panneau dans une chambre fraîche. Les concentrations mesurées varient typiquement d'un facteur 2 à 5 selon les conditions.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les surfaces nues coupées sur place",
            explanation:
              "Un panneau découpé en magasin ou sur chantier expose des surfaces non stratifiées qui émettent davantage. Les bords non couverts d'un meuble d'autoconstruction, les chants non revêtus d'un plan de travail ou les perçages contribuent significativement à l'émission totale.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Les liants alternatifs encore minoritaires",
            explanation:
              "Les liants à base de pMDI (isocyanate, sans formaldéhyde) ou de protéines de soja existent mais coûtent plus cher et restent minoritaires en Europe. Les panneaux ULEF/NAF sont de plus en plus disponibles, surtout sur les gammes premium et le mobilier de marque engagée, mais représentent encore une part faible du marché.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir et utiliser des panneaux bois moins émissifs."
        immediate={[
          {
            label: "Demander la classe d'émission avant d'acheter",
            description:
              "Pour tout meuble ou panneau, demandez la classe E1, E0, ENF ou la certification CARB Phase 2. Pour une chambre ou une chambre d'enfant, exigez E0 ou mieux. Cette information doit figurer sur la fiche technique : si le vendeur ne la fournit pas, c'est un signal en soi.",
            effort: "Question avant achat",
          },
          {
            label: "Faire dégazer les meubles neufs avant installation",
            description:
              "Le pic d'émission a lieu les premières semaines. Laissez les meubles neufs (surtout en MDF ou aggloméré) 2 à 4 semaines dans un garage ouvert, une véranda ou une pièce ventilée et inoccupée avant de les placer dans une chambre. Cette étape simple réduit la dose d'exposition initiale.",
            effort: "Organisation logistique",
          },
          {
            label: "Aérer intensément les premières semaines",
            description:
              "Dans une chambre récemment meublée, ouvrez les fenêtres 15 à 20 minutes par jour, en plus de l'aération courante, pendant les 4 à 6 premières semaines. Vérifiez que la VMC fonctionne et que les bouches ne sont pas obstruées. C'est l'action la plus efficace pour absorber le pic d'émission.",
            effort: "Gratuit, habitude temporaire",
          },
          {
            label: "Couvrir les tranches coupées",
            description:
              "Sur un meuble en kit, vérifiez que tous les chants sont stratifiés ou plaqués. Sur une découpe sur mesure, demandez ou posez un chant ABS ou mélaminé : la diminution des émissions par unité de surface peut atteindre 50 % par rapport à un panneau brut.",
            effort: "Étape de finition",
          },
        ]}
        structural={[
          {
            label: "Privilégier le bois massif pour les pièces sensibles",
            description:
              "Pour une chambre d'enfant, une chambre principale, ou des meubles utilisés intensément (lit, bureau, étagère bibliothèque), le bois massif (pin, hêtre, chêne, peuplier) reste la référence. Plus cher à l'achat mais zéro émission de formaldéhyde structurelle, durée de vie supérieure, et meilleure valeur résiduelle.",
            effort: "Surcoût à l'achat",
          },
          {
            label: "Choisir des fabricants engagés sur les émissions",
            description:
              "Plusieurs fabricants européens (souvent allemands, autrichiens, scandinaves) proposent une gamme entière en E0 ou ENF. Les certifications PEFC, FSC, Blauer Engel, Nature Plus ou Greenguard apportent un niveau supplémentaire d'assurance documentée.",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Préférer l'OSB aux panneaux agglomérés en aménagement intérieur",
            description:
              "L'OSB structurel utilise généralement des résines moins émissives que l'aggloméré standard. Pour un aménagement type bibliothèque ou cloison apparente, c'est un compromis correct, à condition de choisir un OSB avec mention E1 stricte ou mieux.",
            effort: "Choix de matériau",
          },
          {
            label: "Anticiper la classe E05 dès aujourd'hui",
            description:
              "La nouvelle limite européenne E05 entrera en vigueur le 6 août 2026. Choisir dès maintenant des panneaux conformes à ce nouveau seuil garantit un meuble durablement aux normes et permet d'anticiper la transition. De nombreux fabricants proposent déjà des panneaux E05-ready.",
            effort: "Choix au moment de l'achat",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les panneaux bois."
        errors={[
          {
            label: "\"E1, c'est suffisant pour une chambre d'enfant\"",
            explanation:
              "E1 est le minimum réglementaire, pas un objectif sanitaire optimal. Plusieurs études et recommandations (Allemagne, Scandinavie) considèrent E0 comme le seuil de référence pour les pièces de sommeil et les enfants. La future classe E05 confirme cette tendance européenne. Pour une chambre, visez au moins E0.",
          },
          {
            label: "\"Un meuble en bois est forcément en bois massif\"",
            explanation:
              "La grande majorité des meubles vendus en grande surface sont en MDF ou aggloméré recouverts de placage ou de stratifié. Le terme « bois » est utilisé largement et n'implique pas le bois massif. Vérifiez la composition exacte sur la fiche produit : « bois massif », « plaqué bois sur MDF » et « panneau de particules » désignent des réalités très différentes.",
          },
          {
            label: "\"Une fois sec, le meuble n'émet plus rien\"",
            explanation:
              "L'émission de formaldéhyde par les panneaux à urée-formol n'est pas un séchage, mais une hydrolyse continue qui peut durer des années. Le pic se situe les premières semaines, mais l'émission résiduelle se poursuit, surtout en présence d'humidité ou de chaleur. Un meuble installé depuis 2 ans émet moins, mais émet encore.",
          },
          {
            label: "\"L'OSB est plus naturel donc plus sain\"",
            explanation:
              "L'OSB est un panneau collé, comme le MDF ou l'aggloméré. Selon le type de résine utilisée, il peut être plus ou moins émissif. Sa structure en lamelles visibles ne dit rien de la composition de son liant. Vérifiez la classe d'émission, comme pour tout autre panneau bois.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les panneaux bois et le formaldéhyde"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Meubles à faibles émissions : choisir et faire dégazer",
            description:
              "Au-delà du panneau, la classe d'émission complète d'un meuble fini : étiquetage, certifications et organisation du dégazage avant installation.",
            href: "/materiaux-sains/meubles-faibles-emissions/",
          },
          {
            tag: "Air intérieur",
            title: "Le formaldéhyde dans la maison",
            description:
              "Sources, niveaux mesurés en France et leviers globaux pour réduire l'exposition, dont les panneaux bois.",
            href: "/air-interieur/formaldehyde-maison/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux",
            description:
              "Comprendre la cinétique d'émission des panneaux et organiser un dégazage efficace avant emménagement ou pose en chambre.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
        ]}
      />
    </>
  );
}
