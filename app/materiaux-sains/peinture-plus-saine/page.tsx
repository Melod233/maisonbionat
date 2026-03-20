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
  title: "Choisir une peinture plus saine : label A+, COV et alternatives",
  description:
    "Comment lire l'étiquette d'une peinture, comprendre le label A+, identifier les alternatives naturelles et éviter les erreurs fréquentes lors de l'achat.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/peinture-plus-saine/",
  },
  openGraph: {
    title: "Choisir une peinture plus saine : label A+, COV et alternatives",
    description:
      "Comment lire l'étiquette d'une peinture, comprendre le label A+, identifier les alternatives naturelles et éviter les erreurs fréquentes lors de l'achat.",
    url: "https://www.maisonbionat.fr/materiaux-sains/peinture-plus-saine/",
  },
};

export default function ChoisirPeinturePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Choisir une peinture plus saine : label A+, COV et alternatives", href: "https://www.maisonbionat.fr/materiaux-sains/peinture-plus-saine/" },
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
        tag="Aide au choix"
        title="Choisir une peinture moins émissive. Ce qu'il faut vraiment regarder."
        quickAnswer="En France, l'étiquetage des émissions de COV est obligatoire sur toutes les peintures depuis 2013. Le label A+ est le minimum recommandé pour une pièce de vie ou une chambre. Mais le A+ ne signifie pas zéro émission : la ventilation post-application reste indispensable."
        stats={[
          { value: "A+", label: "label obligatoire en France depuis sept. 2013 (décret 2011-321)" },
          { value: "A–C", label: "quatre classes d'émissions, A+ étant la meilleure" },
          { value: "4–6 sem.", label: "durée de ventilation recommandée après application" },
          { value: "≠", label: "teneur en COV sur l'emballage ≠ émissions dans l'air" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre l'étiquetage" },
          { id: "signes", label: "Critères d'évaluation" },
          { id: "causes", label: "Les pièges courants" },
          { id: "actions", label: "Comment choisir" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Comprendre le système"
        title="Deux mesures différentes sur l'emballage d'une peinture."
        description="L'emballage d'une peinture contient deux informations sur les COV qui n'ont pas le même sens. Savoir les distinguer est la clé pour faire un choix éclairé."
        variants={[
          {
            indicator: "La teneur en COV",
            name: "COV dans le produit (en g/L)",
            description:
              "Indique la quantité de composés organiques volatils dans la peinture liquide. Mesure réglementaire européenne (directive 2004/42/CE). Un produit peut afficher une faible teneur en COV et émettre beaucoup une fois appliqué, si ces composés se libèrent lentement.",
          },
          {
            indicator: "Les émissions dans l'air",
            name: "Label A+/A/B/C (étiquetage français)",
            description:
              "Mesure les concentrations de formaldéhyde, d'acétaldéhyde et de COV totaux dans l'air d'une chambre d'essai normalisée après 28 jours. C'est cette mesure qui prédit réellement l'impact sur la qualité de l'air intérieur. A+ = très faibles émissions.",
          },
          {
            indicator: "Les alternatives",
            name: "Peintures naturelles et biosourcées",
            description:
              "Peintures à la chaux, à la caséine (protéine de lait), à l'argile, aux pigments naturels : ces formulations évitent les solvants de synthèse et les résines plastiques. Elles ont souvent un comportement hygroscopique (régulent l'humidité) bénéfique pour les murs.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Critères d'évaluation"
        title="Comment évaluer une peinture avant l'achat."
        subtitle="Ce qu'il faut vérifier sur l'emballage et en magasin, dans l'ordre de priorité."
        signs={[
          {
            label: "Le label A+ est présent et visible sur l'emballage",
            description:
              "C'est le critère principal en France. Sans ce label, on ignore le niveau d'émission du produit dans l'air intérieur. Le A+ est obligatoire depuis 2013 : un produit sans étiquette est soit importé irrégulièrement soit ancien.",
            severity: "critique",
          },
          {
            label: "La liste des ingrédients est accessible",
            description:
              "Une peinture transparente sur sa composition permet de vérifier l'absence de composés connus comme irritants ou sensibilisants (formaldéhyde, bisphénol, certains biocides). Les marques qui jouent la transparence l'affichent sur leur site.",
            severity: "modéré",
          },
          {
            label: "La teneur en COV est indiquée en g/L",
            description:
              "Ce n'est pas le critère le plus important (voir différence avec le label A+) mais une peinture avec une teneur très basse en COV est souvent aussi une peinture à faibles émissions. Cherchez moins de 30 g/L pour les peintures d'intérieur.",
            severity: "léger",
          },
          {
            label: "La peinture est formulée pour une utilisation intérieure",
            description:
              "Les peintures extérieures et les vernis sont souvent plus émissifs, formulés pour résister aux intempéries avec des additifs supplémentaires. Ne les utilisez pas en intérieur même ponctuellement.",
            severity: "modéré",
          },
          {
            label: "Présence d'un écolabel complémentaire (Ecolabel européen)",
            description:
              "L'Ecolabel européen (fleur) sur une peinture garantit des critères environnementaux plus larges : faibles émissions, absence de certains métaux lourds et de certains biocides. Complément utile au label A+.",
            severity: "léger",
          },
          {
            label: "Absence d'odeur forte en ouvrant le pot",
            description:
              "Une peinture qui sent fort l'ammoniaque ou les solvants à l'ouverture va émettre davantage. Ce n'est pas une mesure précise, mais c'est un signal complémentaire. Les peintures A+ à l'eau ont généralement peu d'odeur.",
            severity: "léger",
          },
        ]}
        footerNote="Le label A+ est une mesure standardisée et fiable. Faites-lui confiance plutôt qu'aux mentions marketing comme 'peinture saine', 'écologique' ou 'zéro COV' non appuyées par un étiquetage."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pièges courants"
        title="Ce qui induit en erreur lors du choix d'une peinture."
        subtitle="Les formulations marketing ne correspondent pas toujours à la réalité des émissions."
        causes={[
          {
            number: "01",
            cause: "Confondre 'zéro COV' et 'sans émissions'",
            explanation:
              "Des peintures affichent 'zéro COV' ou 'sans solvant' mais peuvent tout de même émettre des composés lors de la prise (réaction chimique des résines). Le seul indicateur fiable des émissions dans l'air intérieur est le label A+ de l'étiquetage français.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Se fier à la mention 'naturel' sans vérification",
            explanation:
              "Une peinture à l'huile de lin ou aux résines naturelles peut émettre des terpènes naturels en quantités significatives lors de la prise. 'Naturel' ne signifie pas 'non émissif'. Cherchez le label A+ même sur les peintures naturelles.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Négliger la ventilation après application",
            explanation:
              "Même avec une peinture A+, les émissions sont maximales dans les premières semaines. Peindre une chambre d'enfant 2 jours avant l'emménagement est une erreur fréquente. La ventilation intense post-application est obligatoire, quel que soit le produit.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Acheter au prix le moins cher sans vérifier l'étiquette",
            explanation:
              "Les peintures les moins chères sont souvent les plus émissives, sans étiquette A+. La différence de prix entre un produit standard et un A+ est souvent de 2 à 5 € par litre, soit marginale sur un projet de rénovation.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Utiliser des restes d'anciens pots sans étiquette",
            explanation:
              "Les peintures antérieures à 2013 ne sont pas soumises à l'étiquetage obligatoire et peuvent être très émissives. Ne les utilisez pas dans des pièces de vie, a fortiori dans une chambre d'enfant.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir et utiliser une peinture plus saine."
        immediateLabel="Lors de l'achat"
        structuralLabel="Lors de l'application"
        immediate={[
          {
            label: "Vérifiez le label A+ sur l'emballage",
            description:
              "Avant tout autre critère : cherchez le label d'émissions de COV sur l'emballage. A+ = très faibles émissions (mesurées à 28 jours). C'est le seul critère obligatoire et fiable pour évaluer l'impact sur l'air intérieur.",
            effort: "Gratuit, attention à l'achat",
          },
          {
            label: "Choisissez une peinture à l'eau plutôt qu'une peinture à l'huile",
            description:
              "Les peintures acryliques à base d'eau sont généralement moins émissives et à séchage plus rapide que les peintures glycérophtaliques à l'huile. Pour les murs intérieurs, elles conviennent à la quasi-totalité des usages.",
            effort: "Même gamme de prix",
          },
          {
            label: "Calculez la surface à couvrir précisément",
            description:
              "Achetez juste ce qu'il faut. Les restes de peinture stockés dans le logement continuent d'émettre des COV en dégazant à travers le couvercle. Stockez les restes dans un local extérieur ou donnez-les.",
            effort: "Gratuit, organisation",
          },
          {
            label: "Vérifiez la destination du produit : intérieur uniquement",
            description:
              "N'utilisez jamais de peinture extérieure, de vernis ou de lasure à l'intérieur. Ces produits ont des formulations incompatibles avec un usage dans des espaces clos habités.",
            effort: "Gratuit, vigilance",
          },
        ]}
        structural={[
          {
            label: "Ventiler intensément pendant 4 à 6 semaines",
            description:
              "Dès l'application et pendant les semaines suivantes, aérez la pièce au moins 30 minutes matin et soir. Les émissions de COV sont maximales les premières semaines, même pour les peintures A+. La ventilation est le levier de réduction le plus efficace.",
            effort: "Gratuit, discipline",
          },
          {
            label: "Ne pas réoccuper une chambre d'enfant trop tôt",
            description:
              "Pour une chambre d'enfant ou de bébé : 6 à 8 semaines de dégazage avec ventilation intensive avant toute occupation. Pour une chambre adulte : 4 semaines minimum. Si ce délai n'est pas possible, optez pour A+ et aérez au maximum.",
            effort: "Organisation",
          },
          {
            label: "Envisager les peintures naturelles pour les chambres",
            description:
              "Pour les espaces de sommeil, notamment les chambres d'enfant, les peintures à la chaux, à l'argile ou à la caséine offrent une alternative saine, souvent avec des propriétés hygroscopiques bénéfiques. Elles demandent parfois un mode de pose spécifique.",
            effort: "Prix légèrement supérieur",
          },
          {
            label: "Conserver la fiche de données de sécurité du produit",
            description:
              "La fiche de données de sécurité (FDS) d'une peinture liste sa composition complète. En cas de symptôme inhabituel après les travaux, elle permet au médecin d'identifier rapidement les substances en cause.",
            effort: "Gratuit, téléchargeable en ligne",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs les plus courantes lors du choix et de l'application."
        errors={[
          {
            label: "Acheter une peinture sans label d'émissions",
            explanation:
              "En France, l'étiquetage est obligatoire depuis 2013. Un produit sans label A+/A/B/C est soit non conforme, soit ancien. Ne l'utilisez pas en intérieur, a fortiori dans une chambre de bébé ou une chambre d'enfant.",
          },
          {
            label: "Peindre une chambre de bébé quelques jours avant la naissance",
            explanation:
              "Les émissions de COV sont maximales les premières semaines après application. Même avec une peinture A+, un délai de 6 à 8 semaines avec ventilation intensive est nécessaire avant qu'un nourrisson occupe la pièce.",
          },
          {
            label: "Confondre la teneur en COV et les émissions",
            explanation:
              "L'indication 'faible teneur en COV' en g/L sur l'emballage mesure la quantité dans le produit liquide, pas ce qui s'évapore dans l'air une fois la peinture appliquée. Le label A+/A/B/C mesure les émissions réelles dans l'air.",
          },
          {
            label: "Repeindre sans ventiler en gardant la pièce occupée",
            explanation:
              "Peindre dans une pièce fermée et occupée le soir même est une erreur sérieuse, même avec une peinture A+. Les premières heures d'application sont les plus émissives. La pièce doit être vide et ventilée pendant toute la durée du séchage.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les peintures"
        items={[
          {
            question: "Le label A+ garantit-il l'absence de COV ?",
            answer:
              "Non. Le label A+ atteste de très faibles émissions mesurées dans des conditions standardisées après 28 jours. Cela ne signifie pas zéro émission. Les premières semaines après application, les émissions sont plus élevées même pour un produit A+. La ventilation post-application reste obligatoire.",
          },
          {
            question: "Les peintures 'écologiques' sont-elles vraiment meilleures ?",
            answer:
              "Pas nécessairement. Une peinture affichée comme 'écologique' ou 'naturelle' sans label d'émissions est une mention marketing sans valeur technique. Cherchez le label A+ ou l'Ecolabel européen, qui reposent sur des mesures standardisées et vérifiées.",
          },
          {
            question: "Peut-on peindre soi-même ou faut-il un professionnel ?",
            answer:
              "La peinture intérieure est accessible aux particuliers. Pour la qualité de l'air, le choix du produit et la ventilation post-application importent plus que qui réalise les travaux. Si vous faites appel à un professionnel, demandez-lui d'utiliser des produits A+ et incluez cette exigence dans le devis.",
          },
          {
            question: "Quelle est la différence entre peinture glycérophtalique et acrylique ?",
            answer:
              "La peinture glycérophtalique (à l'huile) contient des solvants organiques et est plus émissive, avec un temps de séchage plus long. La peinture acrylique (à l'eau) a des solvants en moindre quantité, sèche plus vite et est généralement moins émissive. Pour les murs intérieurs, les acryliques A+ sont recommandées. Les glycérophtaliques restent utilisées pour certaines finitions (boiseries, radiateurs) où leur dureté est nécessaire.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions",
            description:
              "La peinture n'est qu'un des matériaux à surveiller. Sols, meubles, colles : comprendre l'étiquetage sur l'ensemble des matériaux d'une rénovation.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover sans dégrader l'air",
            description:
              "Le choix des matériaux s'inscrit dans une stratégie globale. Ventilation, ordre des travaux et délais de dégazage.",
            href: "/renovation-saine/",
          },
          {
            tag: "Maison saine famille",
            title: "Préparer la chambre bébé",
            description:
              "La chambre de bébé est l'espace où le choix des peintures est le plus critique. Délais, matériaux et précautions.",
            href: "/maison-saine-famille/chambre-bebe-saine/",
          },
        ]}
      />
    </>
  );
}
