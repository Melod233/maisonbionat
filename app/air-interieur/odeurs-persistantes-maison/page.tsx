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
  title: "Odeurs persistantes dans la maison : identifier la cause et agir",
  description:
    "Une odeur qui revient malgré le ménage est toujours le signe d'une cause active. Méthode pour identifier l'origine exacte et la traiter durablement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/odeurs-persistantes-maison/",
  },
  openGraph: {
    title: "Odeurs persistantes dans la maison : identifier la cause et agir",
    description:
      "Une odeur qui revient malgré le ménage est toujours le signe d'une cause active. Méthode pour identifier l'origine exacte et la traiter durablement.",
    url: "https://www.maisonbionat.fr/air-interieur/odeurs-persistantes-maison/",
  },
};

export default function OdeursPersistantesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Odeurs persistantes dans la maison : identifier la cause et agir", href: "https://www.maisonbionat.fr/air-interieur/odeurs-persistantes-maison/" },
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
        tag="Problème fréquent"
        title="Une odeur qui revient. Comment trouver la cause et la traiter."
        quickAnswer="Une odeur persistante après aération est toujours le signe d'une source active. Masquer avec un spray ou un diffuseur ne règle rien : cela ajoute des COV à l'air en plus de l'odeur. La méthode : localiser d'abord, traiter ensuite."
        stats={[
          { value: "1re", label: "cause : mauvaise ventilation ou source humide cachée" },
          { value: "0", label: "spray d'ambiance efficace sur une odeur structurelle" },
          { value: "10 min", label: "d'aération suffisent pour tester si l'odeur revient" },
          { value: "48h", label: "max pour agir sur une odeur de moisi avant aggravation" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types d'odeurs" },
          { id: "signes", label: "Diagnostic par odeur" },
          { id: "causes", label: "Causes fréquentes" },
          { id: "actions", label: "Que faire" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Identifier l'odeur"
        title="L'odeur est un signal. Il faut d'abord la lire."
        description="Les odeurs persistantes ne sont pas un problème unique. Elles ont des origines très différentes selon leur nature, leur localisation et le moment où elles apparaissent. Identifier le type d'odeur est la première étape du diagnostic."
        variants={[
          {
            indicator: "Odeur terreuse ou musquée",
            name: "Odeur de moisi ou de renfermé",
            description:
              "Caractéristique de la présence de moisissures, souvent cachées (derrière un meuble, sous un revêtement de sol, dans une cloison). Ne disparaît pas avec l'aération si la source n'est pas traitée. Peut indiquer aussi une VMC encrassée.",
          },
          {
            indicator: "Odeur grasse ou rance",
            name: "Odeur de cuisine ou de graisse",
            description:
              "Liée à des résidus de cuisson qui s'imprègnent dans les textiles, les meubles et les parois. S'accumule en l'absence de hotte efficace ou de renouvellement d'air suffisant après la cuisson.",
          },
          {
            indicator: "Odeur chimique ou âcre",
            name: "Odeur de COV ou de matériaux",
            description:
              "Peinture fraîche, meuble neuf, solvant, colle : les matériaux récents dégazent des composés organiques volatils. Cette odeur peut persister plusieurs semaines à plusieurs mois selon les produits.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Diagnostic"
        title="Quelle odeur, dans quelle pièce, à quel moment."
        subtitle="Trois questions qui permettent d'identifier la cause avant d'agir."
        signs={[
          {
            label: "Odeur de moisi persistante, même portes et fenêtres ouvertes",
            description:
              "Indique une source active de moisissures dans le logement. Cherchez derrière les meubles adossés aux murs extérieurs, sous les meubles de salle de bain, dans les angles peu ventilés.",
            severity: "critique",
          },
          {
            label: "Odeur de renfermé au réveil dans la chambre",
            description:
              "CO₂, vapeur d'eau et COV s'accumulent dans une chambre fermée pendant 7 à 8 heures. Disparaît après une aération de 10 minutes. Si elle persiste, la source est ailleurs : VMC, moisissure, mobilier émissif.",
            severity: "léger",
          },
          {
            label: "Odeur après la pluie ou par temps humide",
            description:
              "Une odeur qui s'intensifie avec l'humidité extérieure indique souvent une infiltration ou des remontées capillaires. L'humidité active une source de moisissures latente.",
            severity: "critique",
          },
          {
            label: "Odeur localisée à un seul endroit de la pièce",
            description:
              "Si l'odeur est plus forte derrière un meuble, sous un lavabo ou dans un coin précis, la source est là. Déplacez les meubles, regardez les joints de plomberie, vérifiez les espaces cachés.",
            severity: "modéré",
          },
          {
            label: "Odeur de cuisine dans toutes les pièces",
            description:
              "Indique une hotte inefficace ou à recyclage (sans extraction extérieure). Les vapeurs de cuisson se diffusent dans tout le logement et s'imprègnent dans les textiles et les revêtements.",
            severity: "léger",
          },
          {
            label: "Odeur chimique après une rénovation ou un emménagement",
            description:
              "Le dégazage des matériaux neufs (peintures, sols, colles, meubles) est normal et temporaire. Si l'odeur dure plus de 3 à 4 semaines avec une aération correcte, le produit est probablement à niveau d'émission élevé.",
            severity: "modéré",
          },
        ]}
        footerNote="Méthode diagnostic simple : aérez 30 minutes, fermez, revenez 2 heures plus tard. Si l'odeur est revenue, la source est à l'intérieur. Si non, le logement manque simplement d'aération régulière."
      />

      <IssueCauses
        id="causes"
        title="Les sources les plus fréquentes d'odeurs persistantes."
        causes={[
          {
            number: "01",
            cause: "Moisissures cachées",
            explanation:
              "Les moisissures derrière les meubles, sous les revêtements ou dans les cloisons humides sont la première cause d'odeur persistante de moisi. L'odeur précède souvent les taches visibles. Elle ne disparaît pas avec l'aération si la source n'est pas traitée.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "VMC encrassée ou absente",
            explanation:
              "Une VMC dont les gaines ne sont jamais nettoyées peut elle-même devenir source d'odeur : poussières accumulées, résidus de cuisson, humidité. Elle transporte aussi les odeurs d'une pièce à l'autre au lieu de les évacuer.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Textiles gorgés de résidus",
            explanation:
              "Tapis, canapés, rideaux, literie : les textiles absorbent les odeurs de cuisine, de transpiration, d'animaux et de fumée. Sans lavage régulier, ils deviennent des sources persistantes difficiles à identifier car omniprésentes.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Problème de plomberie ou d'évacuation",
            explanation:
              "Un siphon à sec, un joint de WC défectueux ou une fuite dans un conduit d'évacuation peut laisser passer des gaz d'égout. L'odeur est souvent sulfureuse ou âcre et varie selon la pression dans les canalisations.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Matériaux récents qui dégazent",
            explanation:
              "Peintures, colles, parquets stratifiés, meubles en aggloméré : les matériaux neufs émettent des COV dont l'odeur est perceptible. Le dégazage diminue progressivement si la ventilation est suffisante, mais peut durer plusieurs semaines.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Éliminer une odeur persistante, pas la masquer."
        immediateLabel="Identifier et traiter"
        structuralLabel="Prévenir le retour"
        immediate={[
          {
            label: "Localiser la source précisément",
            description:
              "Testez pièce par pièce, puis zone par zone. Fermez chaque pièce 2 heures et entrez-y nez en alerte. Déplacez les meubles, regardez les angles, vérifiez derrière les appareils électroménagers. Ne cherchez pas l'odeur avec un spray, cherchez-la au nez.",
            effort: "Gratuit, méthode",
          },
          {
            label: "Aérer intensément en premier",
            description:
              "Fenêtres ouvertes en grand pendant 30 à 60 minutes pour diluer et évacuer les particules odorantes en suspension. Si l'odeur disparaît complètement, c'est un problème de ventilation régulière. Si elle revient, la source est active.",
            effort: "Gratuit",
          },
          {
            label: "Traiter la source identifiée",
            description:
              "Moisissures : nettoyez et traitez l'humidité. Textiles : lavez à haute température ou faites nettoyer. Siphon : versez un litre d'eau pour le remettre en charge. Matériaux neufs : ventilez intensément 4 à 6 semaines.",
            effort: "Variable selon cause",
          },
          {
            label: "Neutraliser sans masquer avec du bicarbonate",
            description:
              "Le bicarbonate de soude posé en coupelle dans une pièce fermée absorbe les odeurs ambiantes sans en ajouter. Il ne traite pas la source, mais peut aider pendant la période de traitement. Le vinaigre blanc en surface nettoie et neutralise.",
            effort: "2–3 €",
          },
        ]}
        structural={[
          {
            label: "Faire nettoyer ou réviser la VMC",
            description:
              "Les gaines d'une VMC peuvent être nettoyées par un professionnel, ce qui améliore le débit et supprime une source d'odeur potentielle. Prévoir un entretien tous les 5 à 10 ans selon l'installation.",
            effort: "200–500 € selon installation",
          },
          {
            label: "Remplacer une hotte à recyclage par une hotte avec extraction",
            description:
              "Une hotte avec conduit vers l'extérieur est la seule solution efficace contre les odeurs de cuisson. Elle évacue les vapeurs, les graisses et les polluants au lieu de les filtrer et recirculer dans la pièce.",
            effort: "300–800 €",
          },
          {
            label: "Traiter les moisissures structurelles",
            description:
              "Si l'odeur revient malgré un nettoyage de surface, les moisissures sont dans la structure (cloison, plancher). Un professionnel peut évaluer l'étendue et préconiser le traitement adapté.",
            effort: "Devis professionnel",
          },
          {
            label: "Laver régulièrement les textiles absorbants",
            description:
              "Rideaux, coussins, couvre-lits : planifiez un lavage mensuel ou trimestriel. Pour les canapés et tapis non lavables : aérez-les à l'extérieur régulièrement et bicarbonate posé dessus une nuit.",
            effort: "Organisation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les réflexes qui ne règlent rien."
        errors={[
          {
            label: "Utiliser un spray ou un diffuseur pour couvrir l'odeur",
            explanation:
              "Les sprays désodorisants et les diffuseurs parfumés ajoutent des COV à l'air en plus de l'odeur source. Ils masquent temporairement sans traiter, et selon les études ADEME, font partie des sources les plus émissives en termes de polluants intérieurs.",
          },
          {
            label: "Penser que l'aération suffit quand l'odeur revient",
            explanation:
              "Si l'odeur revient rapidement après une aération, il y a une source active dans le logement. L'aération dilue, elle ne supprime pas. Continuer à aérer sans chercher la source laisse le problème s'aggraver.",
          },
          {
            label: "Ignorer une odeur de moisi persistante",
            explanation:
              "L'odeur de moisi indique la présence de moisissures libérant des spores dans l'air. Laisser une source de moisissures active dégrade la qualité de l'air et peut provoquer des symptômes respiratoires, surtout chez les enfants et les personnes sensibles.",
          },
          {
            label: "Chercher l'odeur avec un désodorisant",
            explanation:
              "Un espace parfumé masque l'odeur problématique et rend sa localisation impossible. Pour investiguer, travaillez toujours dans un air neutre, sans produit parfumé dans le logement, en laissant vos sens jouer leur rôle.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les odeurs persistantes"
        items={[
          {
            question: "Comment savoir si une odeur vient des moisissures ou autre chose ?",
            answer:
              "L'odeur de moisissures est terreuse, musquée et légèrement âcre. Elle s'intensifie par temps humide et ne disparaît pas complètement avec l'aération. Elle varie selon les zones de la pièce : plus forte près des murs extérieurs, derrière les meubles ou dans les angles. Si vous hésitez, cherchez des taches ou de la condensation récurrente dans la zone la plus odorante.",
          },
          {
            question: "Combien de temps dure l'odeur d'une peinture neuve ?",
            answer:
              "Avec une peinture standard, l'odeur perceptible dure 1 à 3 jours avec une bonne aération. Mais les émissions de COV perdurent sans odeur notable pendant 4 à 6 semaines. Pour une peinture A+, l'odeur est souvent plus courte. Dans une chambre d'enfant, aérez intensément pendant 6 semaines minimum.",
          },
          {
            question: "Le bicarbonate de soude est-il vraiment efficace contre les odeurs ?",
            answer:
              "Le bicarbonate absorbe certains composés odorants acides et légèrement basiques. Il est utile pour neutraliser des odeurs légères dans une pièce ou sur un textile. Il ne traite pas les odeurs de moisissures (qui nécessitent un traitement de la source) ni les odeurs chimiques fortes. C'est un complément, pas une solution principale.",
          },
          {
            question: "Un logement neuf peut-il sentir mauvais à cause des matériaux ?",
            answer:
              "Oui, fréquemment. Un logement neuf contient des matériaux qui n'ont pas encore dégazé : peintures, colles, parquets, revêtements synthétiques. L'odeur est souvent chimique ou légèrement plastique. Elle diminue avec une ventilation intensive mais peut durer plusieurs mois pour les matériaux les plus émissifs. C'est pourquoi l'aération intensive les premières semaines est particulièrement importante dans un logement neuf.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "L'odeur de moisi est souvent le premier signal d'une moisissure cachée. Comment identifier et traiter la source.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Air intérieur pollué",
            description:
              "Les odeurs chimiques indiquent des COV dans l'air. Comprendre les sources et les solutions pour un air intérieur plus sain.",
            href: "/air-interieur/air-interieur-pollue/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers irritants",
            description:
              "Les produits parfumés ajoutent des polluants tout en masquant les problèmes réels. Alternatives et substitutions.",
            href: "/produits-et-habitudes/produits-menagers-irritants/",
          },
        ]}
      />
    </>
  );
}
