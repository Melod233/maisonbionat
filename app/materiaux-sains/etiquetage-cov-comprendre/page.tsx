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
  title: "Étiquetage A+ : comprendre les classes COV des produits de construction",
  description:
    "Décret 2011-321, classes A+ à C, 10 substances mesurées : ce que dit vraiment l'étiquette des peintures, sols, isolants, et ses limites pour choisir un produit sain.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/materiaux-sains/etiquetage-cov-comprendre/",
  },
  openGraph: {
    title: "Étiquetage A+ : comprendre les classes COV des produits de construction",
    description:
      "Décret 2011-321, classes A+ à C, 10 substances mesurées : ce que dit vraiment l'étiquette des peintures, sols, isolants, et ses limites pour choisir un produit sain.",
    url: "https://www.maisonbionat.fr/materiaux-sains/etiquetage-cov-comprendre/",
  },
};

const faqItems = [
  {
    question: "Que signifie concrètement la classe A+ ?",
    answer:
      "A+ correspond à la meilleure classe d'émission de l'étiquetage français des produits de construction et de décoration (décret 2011-321 et arrêté du 19 avril 2011). Pour qu'un produit soit classé A+, il doit respecter les seuils les plus stricts pour les 10 substances réglementées et pour le paramètre composés organiques volatils totaux (COVT), mesurés en chambre d'essai à 28 jours après application. Pour le formaldéhyde par exemple, le seuil A+ est inférieur à 10 µg/m³ d'air.",
  },
  {
    question: "Tous les produits du bâtiment sont-ils étiquetés ?",
    answer:
      "Non. L'étiquetage est obligatoire depuis le 1er janvier 2012 pour les nouveaux produits, et depuis le 1er septembre 2013 pour tous les produits de construction, revêtements de mur ou de sol et peintures et vernis destinés à un usage intérieur. Il s'applique aussi aux colles et produits servant à leur pose. Les meubles n'y sont pas soumis ; un étiquetage spécifique aux produits d'ameublement a été en consultation mais reste à finaliser. Les produits anciens en stock peuvent encore être présents sans étiquette.",
  },
  {
    question: "La classe affichée garantit-elle un produit sain ?",
    answer:
      "Pas totalement. L'étiquette ne couvre que 10 substances précises plus le COVT, mesurées à 28 jours en conditions standardisées. Elle ne dit rien sur l'odeur, les semi-volatils, les particules émises à la pose, les phtalates des PVC, ou les émissions à long terme au-delà de 28 jours. Elle ne reflète pas non plus l'usage réel (température, humidité, surface couverte). C'est un repère utile et obligatoire, pas une certification de salubrité absolue.",
  },
  {
    question: "Vaut-il mieux préférer une certification environnementale en complément ?",
    answer:
      "Pour les usages les plus sensibles (chambre d'enfant, rénovation complète, personnes asthmatiques), oui. Des certifications comme l'Écolabel européen, NF Environnement, l'Ange Bleu allemand ou Natureplus vont plus loin que l'étiquetage français en couvrant un spectre plus large de substances et le cycle de vie complet. La combinaison étiquette A+ obligatoire et certification volontaire reste le meilleur garde-fou.",
  },
];

export default function EtiquetageCovComprendrePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    {
      name: "Étiquetage A+ : comprendre les classes COV des produits de construction",
      href: "https://www.maisonbionat.fr/materiaux-sains/etiquetage-cov-comprendre/",
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
        tag="Repère réglementaire"
        title="Étiquetage A+ des produits de construction : ce qu'il dit, ce qu'il ne dit pas"
        quickAnswer="Depuis le 1er septembre 2013, les peintures, vernis, revêtements de sol, revêtements muraux, isolants, cloisons, colles et produits associés vendus en France pour un usage intérieur portent obligatoirement une étiquette indiquant leur niveau d'émission en composés organiques volatils. Quatre classes existent : A+ (très faibles émissions), A, B, C (fortes émissions). La classification s'appuie sur le décret n° 2011-321 du 23 mars 2011 et l'arrêté du 19 avril 2011 : 10 substances réglementées plus le paramètre COVT (composés organiques volatils totaux), mesurés en chambre d'essai à 28 jours. La classe affichée est la moins bonne des 11 mesures. C'est un repère utile pour comparer des produits, mais il ne couvre ni les meubles, ni l'ensemble des polluants, ni les émissions à long terme."
        stats={[
          {
            value: "4 classes",
            label: "A+ (meilleure) / A / B / C (moins bonne) sur l'étiquette française obligatoire",
          },
          {
            value: "10 substances",
            label: "polluants volatils réglementés, plus le paramètre COVT mesuré à l'émission",
          },
          {
            value: "28 jours",
            label: "durée d'essai en chambre normalisée pour mesurer les émissions",
          },
          {
            value: "1er sept. 2013",
            label: "date à partir de laquelle l'étiquetage est obligatoire pour tous les produits commercialisés",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Que dit l'étiquette" },
          { id: "signes", label: "Lire l'étiquette en magasin" },
          { id: "causes", label: "Ce que l'étiquette ne couvre pas" },
          { id: "actions", label: "Bien utiliser le repère" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Le cadre réglementaire et les substances couvertes."
        description="L'étiquetage des produits de construction est encadré par le décret n° 2011-321 du 23 mars 2011 et l'arrêté du 19 avril 2011, transposant les exigences européennes pour réduire l'exposition aux polluants intérieurs. Le dispositif vise les produits qui restent durablement dans le logement et dont les émissions s'ajoutent les unes aux autres : peintures, vernis, papiers peints, revêtements de sol stratifiés ou textiles, parquets, isolants, cloisons, colles et mastics. La mesure se fait en chambre d'essai normalisée à 28 jours après application, dans des conditions de température et d'humidité contrôlées. Le résultat est exprimé en µg/m³ d'air pour chacune des 10 substances et pour le COVT, et la classe affichée correspond à la moins bonne de ces 11 mesures."
        variants={[
          {
            indicator: "A+",
            name: "Très faibles émissions",
            description:
              "Classe la plus stricte. Pour le formaldéhyde par exemple, le seuil A+ est inférieur à 10 µg/m³ d'air en chambre d'essai. Pour le COVT, inférieur à 1000 µg/m³. C'est la classe à privilégier pour les pièces très occupées (chambre, séjour) et les usages sensibles (chambre d'enfant, présence de personnes asthmatiques).",
          },
          {
            indicator: "A",
            name: "Faibles émissions",
            description:
              "Classe intermédiaire haute. Acceptable dans les pièces moins exposées (couloir, dégagement, garage chauffé). Pour le formaldéhyde : seuil inférieur à 60 µg/m³ ; pour le COVT, inférieur à 1500 µg/m³.",
          },
          {
            indicator: "B",
            name: "Émissions modérées",
            description:
              "À éviter dans les pièces de vie occupées plusieurs heures par jour. Pour le formaldéhyde : seuil inférieur à 120 µg/m³, soit au-dessus de la valeur guide ANSES long terme (100 µg/m³). Acceptable seulement pour des produits techniques sans alternative et en faible surface.",
          },
          {
            indicator: "C",
            name: "Fortes émissions",
            description:
              "Classe la plus permissive, au-dessus des seuils précédents. Tous les produits qui dépassent les seuils B sont classés C. À éviter en intérieur pour un usage durable. Le simple fait qu'un produit soit étiqueté C n'interdit pas sa commercialisation, mais il informe du niveau d'émission.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Lire l'étiquette correctement en magasin ou sur fiche technique."
        subtitle="L'étiquette est petite et standardisée. Quelques réflexes permettent d'éviter les pièges courants."
        signs={[
          {
            label: "Repérer la lettre, pas le pictogramme générique",
            description:
              "L'étiquette officielle française a un fond noir, une lettre blanche en grand (A+, A, B ou C) et précise « Émissions dans l'air intérieur ». Elle est différente des écolabels environnementaux qui peuvent coexister sur l'emballage. Sans cette étiquette précise, le produit n'est pas conforme.",
            severity: "modéré",
          },
          {
            label: "Vérifier que la classe est bien la classe finale, pas un sous-score",
            description:
              "Certains fabricants mettent en avant un score A+ sur le formaldéhyde alors que la classe globale est A ou B. La classe à retenir est toujours la moins bonne des 11 substances et paramètres. C'est elle qui apparaît sur l'étiquette officielle.",
            severity: "modéré",
          },
          {
            label: "Pour un usage chambre, viser A+ par défaut",
            description:
              "Pour une chambre d'adulte, une chambre d'enfant et plus encore une chambre de bébé, l'étiquette A+ est le bon repère par défaut. Une classe A peut convenir sur de petites surfaces ; au-dessus de B, l'usage en chambre n'est pas justifié.",
            severity: "léger",
          },
          {
            label: "Demander la fiche technique pour comparer plusieurs A+",
            description:
              "Deux produits A+ peuvent avoir des niveaux d'émission très différents tant qu'ils restent sous le seuil A+. La fiche technique du fabricant donne les valeurs précises en µg/m³ pour chaque substance et permet une comparaison fine entre marques.",
            severity: "léger",
          },
          {
            label: "Sur les colles et primaires, vérifier l'étiquette aussi",
            description:
              "Une peinture A+ posée avec une colle ou un primaire de classe B perd l'essentiel de son intérêt. Tous les produits de la pose (colles, sous-couches, joints) sont concernés par l'étiquetage. À vérifier systématiquement, pas seulement le produit visible.",
            severity: "modéré",
          },
          {
            label: "Sur le mobilier, l'étiquette n'est pas obligatoire",
            description:
              "Les meubles ne sont pas soumis à l'étiquetage français. Un étiquetage spécifique a été mis en consultation mais n'est pas en vigueur. Pour les meubles, des certifications volontaires (Écolabel européen, OEKO-TEX, NF Environnement Ameublement) restent les seuls repères publics fiables.",
            severity: "modéré",
          },
        ]}
        footerNote="L'étiquetage des produits anciens en stock peut être absent : c'est légal pour les produits commercialisés avant les dates d'obligation, mais c'est aussi un signe que le produit est ancien."
      />

      <IssueCauses
        id="causes"
        title="Ce que l'étiquette française ne couvre pas, et pourquoi."
        subtitle="Le dispositif est utile mais limité. Connaître ses angles morts évite de surinterpréter une classe A+."
        causes={[
          {
            number: "01",
            cause: "Mesure à 28 jours, pas sur la durée de vie du produit",
            explanation:
              "Les émissions sont mesurées à 28 jours dans une chambre d'essai. Au-delà, la décroissance des émissions n'est pas évaluée par l'étiquette. Or des matériaux à urée-formol peuvent continuer à émettre du formaldéhyde pendant des années à un niveau plus bas mais constant. Une classe A+ à 28 jours ne garantit pas une émission négligeable à 5 ans.",
            frequency: "fréquent",
          },
          {
            number: "02",
            cause: "10 substances couvertes sur des centaines de COV existants",
            explanation:
              "L'étiquette mesure 10 substances ciblées (formaldéhyde, acétaldéhyde, toluène, xylène, styrène et autres) plus le paramètre COVT global. Des centaines d'autres composés organiques volatils ne sont pas individuellement réglementés. Pour les phtalates, semi-volatils, biocides et conservateurs, l'information n'apparaît pas.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Pas de mesure des émissions de pose",
            explanation:
              "Les solvants émis pendant l'application (peinture, vernis, colle), souvent les plus concentrés, ne sont pas évalués à l'instant de la pose mais après 28 jours. Pour les artisans et les occupants pendant les travaux, le risque d'exposition aigu n'est pas couvert par l'étiquette.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Le mobilier hors du périmètre",
            explanation:
              "L'étiquetage français ne couvre pas les meubles. Or le mobilier est une source majeure de formaldéhyde dans une chambre. Choisir un parquet A+ et meubler la pièce avec du mobilier en aggloméré non certifié peut annuler le bénéfice du choix de revêtement de sol.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Pas d'évaluation de l'usage en surface réelle",
            explanation:
              "L'essai mesure une émission par mètre carré, mais l'exposition réelle dépend de la surface posée, du volume de la pièce et de la ventilation. Repeindre 50 m² de murs en A+ dans une chambre de 12 m² peu ventilée donne un cumul plus élevé que 5 m² du même produit dans un grand séjour ventilé.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Utiliser l'étiquette comme un repère, sans en faire un absolu."
        immediate={[
          {
            label: "Privilégier A+ par défaut, sans rechercher absolument le mieux que A+",
            description:
              "Pour la quasi-totalité des usages domestiques, l'étiquette A+ couvre le besoin. Inutile de chercher des certifications complémentaires pour chaque produit. La rigueur se concentre sur les pièces sensibles (chambre, chambre enfant) et sur les surfaces importantes (murs, sol).",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Vérifier l'étiquette de tous les produits du chantier",
            description:
              "Peinture A+ posée avec colle B ou primaire C : le résultat global est dégradé. Demander systématiquement la classe des sous-couches, colles, joints et mastics. La cohérence du chantier compte plus que la performance d'un seul produit.",
            effort: "Quelques minutes par produit",
          },
          {
            label: "Aérer intensivement pendant et après les travaux",
            description:
              "Quel que soit le niveau A+ des produits, les émissions de pose sont importantes. Aérer fenêtres ouvertes, VMC en marche forcée si possible, ne pas occuper la pièce pendant la phase humide, et maintenir une aération renforcée pendant 2 à 6 semaines selon les produits.",
            effort: "Gratuit, organisation du chantier",
          },
          {
            label: "Faire dégazer les meubles neufs avant la chambre",
            description:
              "L'étiquette ne couvre pas les meubles. Pour un meuble neuf en panneaux de bois, prévoir 2 à 4 semaines de dégazage dans une pièce ventilée (garage, véranda) avant installation dans la chambre. Vérifier les certifications volontaires disponibles (Écolabel, NF Environnement Ameublement).",
            effort: "Organisation, surcoût certif",
          },
        ]}
        structural={[
          {
            label: "Combiner A+ et certification environnementale en chambre d'enfant",
            description:
              "Pour une chambre d'enfant, viser A+ et chercher en complément un produit certifié Écolabel européen, NF Environnement, Ange Bleu ou Natureplus. Ces certifications couvrent un spectre plus large de substances et incluent des critères de cycle de vie. Le surcoût est limité (10-20 % typiquement) sur les peintures et revêtements grand public.",
            effort: "Surcoût modéré à l'achat",
          },
          {
            label: "Prévoir des matériaux à émissions intrinsèquement faibles",
            description:
              "Bois massif non traité, peintures à la chaux ou au silicate, isolants biosourcés, parquets huilés à l'huile naturelle : ces matériaux sont structurellement moins émissifs que leurs équivalents industriels et restent A+ sans difficulté. Privilégier ce type d'arbitrage en rénovation lourde.",
            effort: "Surcoût à l'achat, durabilité supérieure",
          },
          {
            label: "Demander la fiche de données environnementales et sanitaires (FDES)",
            description:
              "Pour les produits utilisés sur grande surface (sols, murs, isolants), la FDES (norme NF EN 15804) fournit un détail complet des émissions, des impacts et de la composition. Disponible auprès des fabricants pour les produits sérieux, elle complète utilement l'étiquette.",
            effort: "Quelques minutes auprès du fabricant",
          },
          {
            label: "Faire mesurer la qualité de l'air après une rénovation lourde",
            description:
              "Pour une rénovation complète d'une chambre ou d'un logement, un kit de mesure laboratoire (formaldéhyde, COV) à 50-150 € permet de vérifier que les choix de produits ont effectivement maintenu une bonne qualité d'air avant occupation. Particulièrement pertinent pour les chambres d'enfant.",
            effort: "Coût ponctuel modéré",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur l'étiquetage A+."
        errors={[
          {
            label: "\"Un produit A+ n'émet rien du tout\"",
            explanation:
              "Faux. A+ correspond à des seuils stricts mais non nuls. Pour le formaldéhyde, le seuil A+ est inférieur à 10 µg/m³, ce qui n'est pas zéro. Sur grande surface, en pièce mal ventilée, plusieurs produits A+ cumulés peuvent générer un niveau total d'émission non négligeable.",
          },
          {
            label: "\"Une peinture sans odeur est forcément A+\"",
            explanation:
              "L'odeur n'est pas un indicateur fiable. Le formaldéhyde, certains COV et la plupart des semi-volatils sont inodores ou perçus seulement au-dessus de seuils élevés. Une peinture peut sembler sans odeur tout en étant classée B, et inversement une peinture A+ à la chaux peut avoir une odeur typique mais inoffensive.",
          },
          {
            label: "\"L'étiquette française est équivalente aux écolabels\"",
            explanation:
              "Non. L'étiquetage français est obligatoire et limité à 10 substances plus COVT. Les écolabels (Écolabel européen, NF Environnement, Ange Bleu, Natureplus) sont volontaires et couvrent un spectre plus large : davantage de substances, cycle de vie, biocides, conservateurs, conditions de fabrication. Ils se complètent, ils ne se remplacent pas.",
          },
          {
            label: "\"Si je rénove avec du A+, je peux occuper la pièce immédiatement\"",
            explanation:
              "L'étiquette mesure les émissions à 28 jours dans une chambre normalisée. Pendant et juste après les travaux, les émissions de pose sont les plus fortes, A+ ou pas. Une chambre fraîchement repeinte, même en A+, ne devrait pas être occupée par un enfant pendant au moins quelques jours d'aération renforcée.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'étiquetage A+ des produits de construction"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Peintures et revêtements à faibles émissions",
            description:
              "Les peintures classées A+ et leurs alternatives plus naturelles (chaux, silicate, argile) : critères de choix et arbitrages.",
            href: "/materiaux-sains/peintures-revetements-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Revêtements de sol à faibles émissions",
            description:
              "Parquets, stratifiés, vinyles : comprendre l'étiquetage spécifique des sols et choisir selon les pièces et les usages.",
            href: "/materiaux-sains/revetements-sol-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux : comment ça fonctionne",
            description:
              "L'étiquette mesure à 28 jours, mais les émissions continuent. Comprendre le phénomène physique du dégazage et l'accélérer après installation.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
        ]}
      />
    </>
  );
}
