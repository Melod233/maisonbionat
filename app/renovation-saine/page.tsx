import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroPillar from "@/components/pillar/HeroPillar";
import InsightGrid from "@/components/pillar/InsightGrid";
import PriorityBlock from "@/components/pillar/PriorityBlock";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import ChildPageIndex from "@/components/pillar/ChildPageIndex";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Rénovation saine : matériaux, ventilation et priorités",
  description:
    "Rénover sans dégrader la qualité de l'air : choisir des matériaux à faibles émissions, ne pas oublier la ventilation, éviter les erreurs classiques. Guide pratique pour une rénovation plus saine.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/",
  },
  openGraph: {
    title: "Rénovation saine : matériaux, ventilation et priorités",
    description:
      "Rénover sans dégrader la qualité de l'air : choisir des matériaux à faibles émissions, ne pas oublier la ventilation, éviter les erreurs classiques. Guide pratique pour une rénovation plus saine.",
    url: "https://www.maisonbionat.fr/renovation-saine/",
  },
};

export default function RenovationSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
  ]);
  const faqItems = [
    {
      question: "Qu'est-ce qu'un isolant biosourcé ?",
      answer:
        "Un isolant biosourcé est fabriqué à partir de matières végétales ou animales : chanvre, lin, liège, ouate de cellulose (papier recyclé), laine de mouton, paille. Ces matériaux ont souvent une bonne capacité hygroscopique (ils absorbent et restituent la vapeur d'eau) et de faibles émissions de COV, contrairement aux isolants synthétiques comme le polystyrène.",
    },
    {
      question: "Pourquoi l'isolation sans VMC est-elle dangereuse ?",
      answer:
        "Un logement bien isolé est plus étanche. L'air se renouvelle moins naturellement. Sans ventilation mécanique, la vapeur d'eau produite par les occupants (respiration, cuisine, douches) s'accumule et condense sur les surfaces froides, créant des moisissures. La règle : tout projet d'isolation doit s'accompagner d'un bilan de ventilation.",
    },
    {
      question: "Comment savoir si mon logement contient de l'amiante ?",
      answer:
        "Pour les logements construits avant juillet 1997, un diagnostic amiante est obligatoire avant tous travaux. Ce diagnostic doit être réalisé par un professionnel certifié. Il porte sur les matériaux susceptibles de contenir de l'amiante : plaques ondulées, colles de carrelage, flocages, enduits, faux plafonds.",
    },
    {
      question: "Doit-on ventiler même avec des matériaux A+ ?",
      answer:
        "Oui. Le label A+ atteste de faibles émissions mesurées en conditions standardisées. Dans un logement réel, la superposition de plusieurs matériaux A+ génère un cumul d'émissions qui justifie une ventilation intensive pendant les premières semaines post-travaux.",
    },
    {
      question: "Quand peut-on réintégrer une pièce après rénovation ?",
      answer:
        "Pour une pièce de vie : idéalement après 4 à 6 semaines de ventilation intensive. Pour une chambre d'enfant ou de bébé : 6 à 8 semaines minimum. Si ce n'est pas possible, aérez au maximum et utilisez des produits A+ pour réduire les pics d'émissions initiaux.",
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ① Hero */}
      <HeroPillar
        tag="Rénovation saine"
        title="Rénover, c'est aussi choisir ce qu'on respire ensuite."
        description="Une rénovation mal pensée peut dégrader durablement la qualité de l'air d'un logement : émissions de COV, humidité piégée, ventilation insuffisante. Quelques priorités à poser avant de commencer pour éviter les erreurs les plus courantes."
        anchors={[
          { id: "comprendre", label: "Ce qu'il faut savoir" },
          { id: "priorites", label: "Les priorités concrètes" },
          { id: "erreurs", label: "Erreurs fréquentes" },
          { id: "explorer", label: "Explorer ce thème" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      {/* ② Insights */}
      <InsightGrid
        id="comprendre"
        title="Ce que la rénovation change pour l'air intérieur"
        insights={[
          {
            number: "01",
            label: "Isolants biosourcés",
            text: "La laine de chanvre, le liège expansé et la ouate de cellulose affichent une conductivité thermique de l'ordre de 0,038 à 0,042 W/m·K, comparable aux isolants synthétiques, avec en plus une forte perméabilité à la vapeur d'eau qui régule naturellement l'hygrométrie.",
          },
          {
            number: "02",
            label: "Étanchéité et ventilation",
            text: "Améliorer l'étanchéité d'un logement sans renforcer la ventilation est une erreur fréquente. Un logement mieux isolé renouvelle moins naturellement son air : la VMC devient indispensable, pas optionnelle.",
          },
          {
            number: "03",
            label: "COV post-travaux",
            text: "Une rénovation complète d'une pièce (sol, peinture, cloisons) peut tripler les concentrations de COV pendant plusieurs semaines. C'est la période la plus critique pour la qualité de l'air.",
          },
          {
            number: "04",
            label: "Diagnostic préalable",
            text: "Avant de rénover, identifier les sources d'humidité existantes (remontées capillaires, infiltrations, condensation) est essentiel. Rénover par-dessus un problème d'humidité non traité aggrave systématiquement la situation.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Rénovation saine : par où commencer"
        subtitle="Les décisions structurantes à prendre avant et pendant les travaux."
        priorities={[
          {
            number: "01",
            action: "Diagnostiquer avant de rénover",
            description:
              "Avant tout projet : identifier les problèmes d'humidité existants, l'état de la ventilation et les sources de pollution éventuelles (amiante dans les logements avant 1997, plomb avant 1949). Rénover sans diagnostic préalable peut aggraver des problèmes invisibles.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
          {
            number: "02",
            action: "Planifier la ventilation en même temps que l'isolation",
            description:
              "Tout gain d'étanchéité doit s'accompagner d'une ventilation adaptée. Si vous isolez sans installer ou vérifier la VMC, vous créez un logement plus étanche mais moins aéré, ce qui favorise condensation, moisissures et accumulation de polluants.",
            href: "/renovation-saine/isolation-ventilation/",
          },
          {
            number: "03",
            action: "Exiger le A+ sur tous les produits de finition",
            description:
              "Peintures, colles de pose, primaires, enduits : exigez systématiquement l'étiquetage A+ sur les émissions de COV. Dans les pièces de vie et les chambres, c'est le standard minimum. Demandez les fiches techniques avant de valider.",
            href: "/renovation-saine/label-a-plus-travaux/",
          },
          {
            number: "04",
            action: "Aérer intensément pendant et après les travaux",
            description:
              "Pendant les travaux : fenêtres ouvertes en permanence. Après : ventilation intensive pendant 4 à 6 semaines minimum. Évitez de faire dormir des enfants dans une pièce fraîchement rénovée sans cette période de dégazage.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Les erreurs classiques de la rénovation"
        errors={[
          {
            label: "Isoler sans ventiler",
            explanation:
              "C'est l'erreur la plus fréquente. Un logement rendu plus étanche doit renouveler son air mécaniquement. Sans VMC adaptée, l'isolation crée des conditions favorables aux moisissures et à l'accumulation de polluants.",
          },
          {
            label: "Rénover par-dessus de l'humidité",
            explanation:
              "Poser un nouveau sol ou repeindre des murs humides sans traiter la source emprisonne l'humidité. Elle ressort quelques mois plus tard, souvent avec des moisissures. Le diagnostic humidité doit précéder toute finition.",
          },
          {
            label: "Choisir les matériaux uniquement au prix",
            explanation:
              "Les produits les moins chers sont souvent les plus émissifs (parquet stratifié bas de gamme, peinture sans étiquetage, colle universelle). La différence de coût avec un produit A+ est souvent marginale sur le coût total des travaux.",
          },
          {
            label: "Sous-estimer la durée de dégazage",
            explanation:
              "Un chantier terminé visuellement ne l'est pas chimiquement. Les émissions de COV sont maximales les premières semaines. Emménager ou réutiliser une pièce immédiatement après des travaux expose à des concentrations élevées.",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer la rénovation saine en détail"
        subtitle="Guides pratiques pour chaque étape d'un projet de rénovation."
        pages={[
          {
            number: "01",
            title: "Diagnostic avant rénovation",
            description: "Ce qu'il faut vérifier avant de commencer : humidité, ventilation, matériaux dangereux. Les questions à poser à l'artisan.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
          {
            number: "02",
            title: "Isolation et ventilation",
            description: "Pourquoi l'isolation et la ventilation doivent toujours être planifiées ensemble, et comment choisir la bonne solution selon le bâti.",
            href: "/renovation-saine/isolation-ventilation/",
          },
          {
            number: "03",
            title: "Isolants biosourcés en rénovation",
            description: "Chanvre, liège, ouate de cellulose, laine de mouton : performances, cas d'usage par poste de travaux et points d'attention pour choisir et faire poser.",
            href: "/renovation-saine/isolants-biosources/",
          },
          {
            number: "04",
            title: "Trouver un artisan pour une rénovation saine",
            description: "Labels RGE et Qualibat, questions à poser sur les produits utilisés, signaux d'alerte et contractualisation pour un chantier orienté qualité de l'air.",
            href: "/renovation-saine/artisan-renovation-saine/",
          },
          {
            number: "05",
            title: "Le label A+ lors des travaux",
            description: "Ce que mesure l'étiquetage COV des matériaux, les quatre classes, et comment appliquer concrètement l'exigence A+ dans un chantier de rénovation.",
            href: "/renovation-saine/label-a-plus-travaux/",
          },
          {
            number: "06",
            title: "Aérer après des travaux",
            description: "Durées recommandées selon le type d'intervention, protocoles d'aération efficaces et critères pour savoir quand réintégrer une pièce en sécurité.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
          {
            number: "07",
            title: "Rénover une maison plus sainement : matériaux, ordre des travaux, dégazage",
            description: "Rénovation saine : choisir les matériaux A+, planifier l'ordre des travaux, gérer l'amiante et le plomb, prévoir le délai de dégazage. Un guide structuré pour agir dans les bonnes conditions.",
            href: "/renovation-saine/renover-plus-sainement/",
          },
          {
            number: "08",
            title: "Ventilation pendant les travaux : protéger l'air en chantier",
            description: "Pendant et juste après la rénovation, les concentrations en COV atteignent leur pic. Préparer la VMC, isoler la zone, coordonner les phases pour limiter l'exposition.",
            href: "/renovation-saine/ventilation-pendant-travaux/",
          },
          {
            number: "09",
            title: "VMC double flux : qualité d'air, performances et coûts",
            description: "Récupération 60-90 % de chaleur, filtration F7/ePM1 contre PM2,5 et pollens, 7 000-10 000 € posé en 2026. Pour quels logements et avec quelles aides MaPrimeRénov'.",
            href: "/renovation-saine/vmc-double-flux/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur la rénovation saine"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Matériaux sains",
            title: "Choisir des matériaux à faibles émissions",
            description: "Le choix des matériaux est au cœur d'une rénovation saine. Étiquetage, alternatives naturelles et pièges à éviter.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Air intérieur",
            title: "Ventilation et qualité de l'air",
            description: "La ventilation est la clé de voûte d'un logement sain après rénovation. Comprendre les systèmes et les priorités.",
            href: "/air-interieur/",
          },
          {
            tag: "Humidité maison",
            title: "Humidité et travaux",
            description: "L'humidité mal traitée lors d'une rénovation devient un problème structurel. Diagnostiquer avant d'agir.",
            href: "/humidite-maison/",
          },
        ]}
      />
    </>
  );
}
