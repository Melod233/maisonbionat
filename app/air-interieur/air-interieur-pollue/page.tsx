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
  title: "Air intérieur pollué : sources, signes et solutions concrètes",
  description:
    "L'air de votre logement est souvent 5 à 10 fois plus pollué que l'air extérieur. Identifier les sources réelles, reconnaître les signes et agir dans le bon ordre.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/air-interieur-pollue/",
  },
  openGraph: {
    title: "Air intérieur pollué : sources, signes et solutions concrètes",
    description:
      "L'air de votre logement est souvent 5 à 10 fois plus pollué que l'air extérieur. Identifier les sources réelles, reconnaître les signes et agir dans le bon ordre.",
    url: "https://www.maisonbionat.fr/air-interieur/air-interieur-pollue/",
  },
};

export default function AirInterieurPolluePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Air intérieur pollué : sources, signes et solutions concrètes", href: "https://www.maisonbionat.fr/air-interieur/air-interieur-pollue/" },
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
        title="L'air de votre maison est probablement pollué. Voici pourquoi."
        quickAnswer="L'air intérieur contient en moyenne 5 à 10 fois plus de polluants que l'air extérieur, selon l'ANSES. La majorité des sources sont dans le logement lui-même : meubles, produits ménagers, cuisine, matériaux. L'aération et la réduction des sources sont les deux leviers principaux."
        stats={[
          { value: "5–10×", label: "plus pollué que l'air extérieur (ANSES)" },
          { value: "80–90%", label: "du temps passé en espace clos" },
          { value: "3e", label: "rang mondial des risques sanitaires selon l'OMS" },
          { value: "~100", label: "polluants différents mesurés dans un logement ordinaire" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de pollution" },
          { id: "signes", label: "Signes à reconnaître" },
          { id: "causes", label: "Principales sources" },
          { id: "actions", label: "Que faire" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="La pollution intérieure a plusieurs visages."
        description="On parle souvent de pollution comme d'une réalité uniforme. En fait, l'air intérieur est pollué par des familles de substances distinctes, avec des sources différentes. Agir efficacement suppose de savoir quel type de pollution domine chez vous."
        variants={[
          {
            indicator: "Polluants chimiques",
            name: "COV, formaldéhyde et particules fines",
            description:
              "Émis par les meubles (formaldéhyde dans les panneaux de bois), les peintures, les produits ménagers, la cuisson et les bougies. Présents dans tous les logements, leur concentration varie selon les matériaux, l'activité et la ventilation.",
          },
          {
            indicator: "Polluants biologiques",
            name: "Moisissures, acariens et pollens",
            description:
              "Les spores de moisissures (humidité), les allergènes d'acariens (literie, moquettes) et les pollens (fenêtres ouvertes) constituent une autre famille de polluants. Plus visibles dans leurs effets pour les personnes allergiques.",
          },
          {
            indicator: "Polluants physiques",
            name: "Particules fines et CO₂",
            description:
              "Le CO₂ s'accumule avec l'occupation humaine (respiration) et dégrade la qualité du sommeil et la concentration. Les PM2,5 proviennent de la cuisson, des bougies, des appareils à combustion. Sans VMC, les niveaux montent rapidement.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signaux d'un air intérieur dégradé."
        subtitle="La pollution intérieure est souvent invisible. Certains symptômes physiques révèlent une exposition chronique."
        signs={[
          {
            label: "Maux de tête fréquents à la maison",
            description:
              "Des céphalées qui apparaissent ou s'aggravent à l'intérieur et disparaissent après une sortie prolongée peuvent signaler une accumulation de CO₂ ou de COV dans les pièces.",
            severity: "modéré",
          },
          {
            label: "Irritation des yeux, du nez ou de la gorge",
            description:
              "Picotements, gorge sèche, nez qui coule sans infection : ces symptômes sont classiques d'une exposition aux COV ou aux particules fines. Ils s'intensifient dans les pièces mal ventilées.",
            severity: "modéré",
          },
          {
            label: "Fatigue ou somnolence inhabituelle",
            description:
              "Un taux de CO₂ supérieur à 1000 ppm (fréquent dans une chambre fermée la nuit) dégrade la qualité du sommeil et provoque une fatigue persistante. Souvent interprété à tort comme de la fatigue générale.",
            severity: "modéré",
          },
          {
            label: "Symptômes qui s'améliorent en dehors du logement",
            description:
              "Si vos symptômes respiratoires, vos maux de tête ou votre fatigue diminuent notablement après plusieurs heures à l'extérieur ou lors de vacances, votre air intérieur est probablement en cause.",
            severity: "critique",
          },
          {
            label: "Odeur chimique persistante",
            description:
              "Une odeur de peinture fraîche, de plastique neuf ou de solvant qui persiste plusieurs semaines après l'installation d'un meuble ou des travaux indique un dégazage actif de COV.",
            severity: "modéré",
          },
          {
            label: "Accumulation de poussière inhabituelle",
            description:
              "Un dépôt rapide de poussière sur les surfaces, surtout si elle est grise ou noire, peut indiquer des particules fines en suspension associées à la cuisson, aux bougies ou à un dépôt de spores.",
            severity: "léger",
          },
        ]}
        footerNote="Ces symptômes ne sont pas spécifiques à la pollution intérieure et peuvent avoir d'autres causes. Un médecin peut évaluer si votre logement justifie une mesure de la qualité de l'air."
      />

      <IssueCauses
        id="causes"
        title="D'où vient la pollution dans votre logement."
        subtitle="Les sources sont souvent dans le logement lui-même, pas à l'extérieur."
        causes={[
          {
            number: "01",
            cause: "Meubles et matériaux récents",
            explanation:
              "Les panneaux de bois aggloméré (MDF, aggloméré) émettent du formaldéhyde, classé cancérigène avéré (groupe 1, CIRC 2004). Un meuble neuf peut émettre pendant plusieurs mois. Les parquets stratifiés et les colles de pose contribuent également.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Produits ménagers et parfums d'ambiance",
            explanation:
              "Sprays désodorisants, nettoyants multi-usages, bougies parfumées : ces produits émettent des COV et, pour les sprays, des particules fines. Selon les études ADEME (programme PRESSENS), les sprays d'ambiance figurent parmi les sources les plus émissives.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Cuisson, notamment au gaz",
            explanation:
              "La cuisson au gaz émet du dioxyde d'azote (NO₂), du monoxyde de carbone (CO), du benzène et des PM2,5. Sans hotte à extraction extérieure efficace, ces polluants se diffusent dans tout le logement en quelques minutes.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Ventilation insuffisante",
            explanation:
              "Sans renouvellement d'air régulier, tous les polluants émis en intérieur s'accumulent. La dilution est le premier mécanisme naturel de contrôle de la concentration. Une VMC mal entretenue ou absente aggrave significativement toutes les autres sources.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Peintures, vernis et travaux de rénovation",
            explanation:
              "Une rénovation complète d'une pièce peut tripler les concentrations de COV pendant plusieurs semaines. Les produits sans étiquetage A+ sont les plus émissifs. Les émissions sont maximales dans les premières semaines post-application.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Améliorer l'air intérieur, concrètement."
        immediate={[
          {
            label: "Aérer deux fois par jour, 10 minutes",
            description:
              "La dilution par l'aération est le levier le plus immédiat et le plus puissant. Fenêtres en opposition matin et soir. Même en hiver : l'air froid extérieur dilue les polluants sans les supprimer à la source, mais réduit drastiquement les concentrations.",
            effort: "Gratuit, 20 min/jour",
          },
          {
            label: "Supprimer les sprays et parfums d'ambiance",
            description:
              "Désodorisants en spray, diffuseurs chimiques, bougies paraffine : ces produits ajoutent des COV sans bénéfice réel. Remplacez par l'aération. L'odeur de renfermé se règle en 10 minutes de fenêtres ouvertes, pas avec un spray.",
            effort: "Gratuit",
          },
          {
            label: "Utiliser la hotte en cuisine",
            description:
              "Allumez la hotte avant la cuisson (pas seulement pendant) et laissez-la tourner 10 minutes après. Si votre hotte est à recyclage (sans conduit vers l'extérieur), elle filtre les graisses mais pas le NO₂ ni le CO.",
            effort: "Gratuit",
          },
          {
            label: "Laisser dégazer les meubles neufs",
            description:
              "Avant d'installer un meuble neuf en aggloméré dans une chambre : laissez-le dans un espace ventilé (garage, balcon, pièce aérée) pendant 2 à 4 semaines. Les émissions sont maximales les premiers jours.",
            effort: "Gratuit, organisation",
          },
        ]}
        structural={[
          {
            label: "Vérifier et entretenir la VMC",
            description:
              "Nettoyez les bouches tous les 6 mois, vérifiez le débit (main devant la bouche). Faites réviser la centrale tous les 3 à 5 ans. Une VMC mal entretenue ne filtre rien et peut devenir une source de particules.",
            effort: "Entretien : 100–200 €",
          },
          {
            label: "Choisir des matériaux A+ lors des prochains achats",
            description:
              "L'étiquetage A+ (émissions COV, décret 2011-321) est obligatoire en France sur les produits de construction et décoration. C'est le minimum pour les pièces de vie et les chambres. Vérifiez l'étiquette avant d'acheter.",
            effort: "À chaque achat",
          },
          {
            label: "Mesurer la qualité de l'air si les symptômes persistent",
            description:
              "Des capteurs de CO₂ (50–150 €) permettent de mesurer en continu la qualité de l'air dans les pièces de vie. Des kits de mesure du formaldéhyde et des COV existent également pour une analyse ponctuelle.",
            effort: "50–200 €",
          },
          {
            label: "Remplacer une cuisinière au gaz par une induction",
            description:
              "La cuisson à l'induction n'émet pas de NO₂ ni de CO. Elle reste la solution la plus efficace pour supprimer la principale source de pollution chimique liée à la cuisson. L'impact est immédiat sur la qualité de l'air de toute la maison.",
            effort: "400–1200 €",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qui ne fonctionne pas comme vous le croyez."
        errors={[
          {
            label: "Les plantes dépolluent l'air",
            explanation:
              "Des études en laboratoire ont montré un effet des plantes sur certains COV, mais en conditions réelles, l'effet est négligeable à l'échelle d'un logement. Il faudrait plusieurs centaines de plantes pour obtenir un effet mesurable. L'aération est incomparablement plus efficace.",
          },
          {
            label: "Fermer les fenêtres protège de la pollution",
            explanation:
              "En l'absence de ventilation, les polluants intérieurs s'accumulent rapidement et dépassent souvent les niveaux extérieurs, même dans des zones urbaines. L'air extérieur est généralement moins chargé en COV que l'air d'un logement peu aéré.",
          },
          {
            label: "Un purificateur d'air suffit à tout régler",
            explanation:
              "Un purificateur HEPA traite efficacement les particules et certains allergènes. Il ne traite pas les COV gazeux (formaldéhyde, benzène) ni le CO₂. Il ne supprime pas les sources. C'est un complément, pas une solution principale.",
          },
          {
            label: "Les produits 'naturels' ne polluent pas",
            explanation:
              "Les huiles essentielles sont des COV naturels. Diffusées dans une pièce fermée, elles ajoutent des composés volatils à l'air. 'Naturel' ne signifie pas inoffensif pour les voies respiratoires, notamment chez les enfants et les asthmatiques.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'air intérieur pollué"
        items={[
          {
            question: "Comment savoir si l'air de mon logement est pollué ?",
            answer:
              "En l'absence de mesure, certains signaux sont indicatifs : symptômes (maux de tête, irritations) qui s'améliorent hors du logement, odeur chimique persistante, condensation récurrente, moisissures visibles. Des capteurs de CO₂ (50–150 €) et des kits de mesure de formaldéhyde permettent une évaluation objective.",
          },
          {
            question: "Quel est le polluant le plus dangereux dans l'air intérieur ?",
            answer:
              "Le formaldéhyde est classé cancérigène avéré (groupe 1, CIRC 2004) et est présent dans la majorité des logements, principalement émis par les panneaux de bois aggloméré. Le radon (gaz radioactif naturel) est également préoccupant dans certaines zones géographiques. La valeur guide ANSES pour le formaldéhyde est de 10 µg/m³ en exposition chronique.",
          },
          {
            question: "Faut-il garder ses fenêtres fermées en ville à cause de la pollution ?",
            answer:
              "Dans la grande majorité des cas, non. L'air extérieur en milieu urbain, même dans les zones à trafic dense, est généralement moins chargé en COV que l'air d'un logement peu ventilé. Si vous habitez à proximité immédiate d'une source de pollution (autoroute, usine), aérez aux heures de faible trafic.",
          },
          {
            question: "Les bébés et enfants sont-ils plus exposés ?",
            answer:
              "Oui. Les enfants respirent environ deux fois plus d'air proportionnellement à leur masse corporelle. Ils passent aussi plus de temps à l'intérieur. La chambre d'enfant est la première pièce à optimiser, avec une ventilation fonctionnelle, des matériaux A+ et l'absence de produits parfumés.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Polluants intérieurs les plus fréquents",
            description:
              "COV, formaldéhyde, particules fines : identifier chaque source et comprendre les niveaux d'exposition dans un logement ordinaire.",
            href: "/air-interieur/",
          },
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions",
            description:
              "Les matériaux sont la source principale de COV. Comprendre l'étiquetage A+ et faire de meilleurs choix à chaque achat ou rénovation.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers irritants",
            description:
              "Les produits du quotidien sont une source majeure de COV souvent sous-estimée. Identifier et remplacer les plus émissifs.",
            href: "/produits-et-habitudes/produits-menagers-irritants/",
          },
        ]}
      />
    </>
  );
}
