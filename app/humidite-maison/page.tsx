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
  title: "Humidité dans la maison : causes, moisissures et solutions",
  description:
    "Condensation, moisissures, murs humides : identifier les causes d'humidité dans votre logement et agir avec les bonnes solutions, sans dépenses inutiles.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/",
  },
  openGraph: {
    title: "Humidité dans la maison : causes, moisissures et solutions",
    description:
      "Condensation, moisissures, murs humides : identifier les causes d'humidité dans votre logement et agir avec les bonnes solutions, sans dépenses inutiles.",
    url: "https://www.maisonbionat.fr/humidite-maison/",
  },
};

export default function HumiditeMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
  ]);
  const faqItems = [
    {
      question: "Quel est le taux d'humidité idéal dans une maison ?",
      answer:
        "Entre 40 % et 60 % d'hygrométrie. En dessous de 40 %, l'air est trop sec et irrite les voies respiratoires. Au-dessus de 60 %, les conditions deviennent favorables au développement des moisissures et des acariens.",
    },
    {
      question: "Comment savoir si mon problème vient d'une infiltration ou de la condensation ?",
      answer:
        "La condensation apparaît sur les surfaces froides (vitres, angles de murs) et survient surtout en hiver après des activités productrices de vapeur. Une infiltration crée des taches humides stables, souvent après la pluie, localisées en haut des murs ou au plafond.",
    },
    {
      question: "Les moisissures sont-elles dangereuses pour la santé ?",
      answer:
        "Oui, surtout pour les personnes asthmatiques, allergiques ou immunodéprimées. Les moisissures libèrent des spores et des mycotoxines qui irritent les voies respiratoires. Une exposition prolongée peut aggraver des pathologies existantes.",
    },
    {
      question: "Le chauffage seul suffit-il à éliminer l'humidité ?",
      answer:
        "Non. Chauffer sans ventiler réduit temporairement l'humidité relative mais ne l'élimine pas. La vapeur d'eau reste dans le logement et se redépose sur les surfaces froides dès que la température baisse. Il faut combiner chaleur et aération.",
    },
    {
      question: "Faut-il traiter les remontées capillaires soi-même ?",
      answer:
        "Les remontées capillaires (humidité montant par les murs depuis les fondations) nécessitent un diagnostic professionnel. Les traitements superficiels sont insuffisants. Une injection de résine ou un drain en pied de mur peut être nécessaire selon le bâti.",
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
        tag="Humidité maison"
        title="L'humidité ne se voit pas toujours, mais elle agit en permanence."
        description="Condensation, infiltrations, moisissures : comprendre d'où vient l'humidité est la première étape pour agir efficacement. Chaque cause appelle une solution différente."
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
        title="Ce que l'humidité fait à votre logement"
        insights={[
          {
            number: "01",
            label: "Taux idéal",
            text: "L'hygrométrie idéale d'un logement se situe entre 40 % et 60 %. En dessous, l'air dessèche les muqueuses. Au-dessus, les moisissures peuvent s'installer.",
          },
          {
            number: "02",
            label: "Ventilation en cause",
            text: "Dans la majorité des cas, l'excès d'humidité est directement lié à une ventilation insuffisante, pas à une infiltration ou un problème structurel.",
          },
          {
            number: "03",
            label: "Activités quotidiennes",
            text: "Douche, cuisine, linge qui sèche à l'intérieur : une famille de quatre personnes produit plus de 12 litres de vapeur d'eau par jour. L'essentiel provient des activités domestiques : cuisson, séchage, douches.",
          },
          {
            number: "04",
            label: "Impact sur la santé",
            text: "Les moisissures libèrent des spores et des mycotoxines. Exposition prolongée : troubles respiratoires, allergies, irritations, aggravation de l'asthme.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Agir sur l'humidité dans le bon ordre"
        subtitle="Commencer par le plus impactant avant d'engager des travaux."
        priorities={[
          {
            number: "01",
            action: "Identifier le type d'humidité",
            description:
              "Condensation en surface, remontées capillaires, infiltration par la toiture ou les murs : chaque cause a une solution différente. Agir sans diagnostic revient souvent à traiter les symptômes.",
            href: "/humidite-maison/diagnostic-humidite/",
          },
          {
            number: "02",
            action: "Améliorer la ventilation en premier",
            description:
              "Vérifiez les bouches VMC, aérez matin et soir, utilisez la hotte en cuisine et l'extraction en salle de bain. C'est gratuit et résout la majorité des problèmes de condensation.",
            href: "/humidite-maison/condensation-maison/",
          },
          {
            number: "03",
            action: "Traiter les moisissures existantes",
            description:
              "Nettoyage au bicarbonate ou vinaigre blanc sur les surfaces. Si les moisissures reviennent régulièrement, c'est le signe d'un problème structurel à traiter à la source.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            number: "04",
            action: "Limiter les apports de vapeur",
            description:
              "Faites sécher le linge à l'extérieur ou dans une pièce ventilée. Couvrez les casseroles. Évitez les bacs d'eau stagnante. Ces gestes simples réduisent significativement l'hygrométrie.",
            href: "/humidite-maison/sources-humidite-interieure/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Les erreurs qui aggravent le problème"
        errors={[
          {
            label: "Masquer les moisissures sans traiter la cause",
            explanation:
              "Repeindre par-dessus des moisissures sans traiter la source d'humidité ne fait que retarder le problème. Elles reviennent en quelques semaines, souvent plus importantes.",
          },
          {
            label: "Déshumidificateur sans ventilation",
            explanation:
              "Un déshumidificateur électrique consomme de l'énergie et traite l'air, mais il ne résout pas une ventilation insuffisante. Il peut masquer un problème plus profond.",
          },
          {
            label: "Boucher les grilles de ventilation",
            explanation:
              "Certains résidents obstruent les grilles d'aération pour éviter les courants d'air ou le froid. C'est l'une des principales causes d'accumulation d'humidité et de moisissures.",
          },
          {
            label: "Chauffer fort pour assécher",
            explanation:
              "Monter le chauffage sans ventiler ne fait qu'augmenter la capacité de l'air à contenir de la vapeur. L'humidité relative baisse temporairement mais les polluants restent.",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer l'humidité en détail"
        subtitle="Guides spécifiques selon le problème rencontré."
        pages={[
          {
            number: "01",
            title: "Condensation dans la maison",
            description: "Comprendre pourquoi la condensation se forme sur les vitres et les murs, et comment y remédier sans travaux lourds.",
            href: "/humidite-maison/condensation-maison/",
          },
          {
            number: "02",
            title: "Moisissures dans la maison",
            description: "Identifier les types de moisissures, évaluer le risque sanitaire et choisir la bonne méthode de traitement.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            number: "03",
            title: "Chambre humide : causes et solutions",
            description: "Les causes spécifiques à la chambre et les solutions adaptées pour un espace de sommeil plus sain.",
            href: "/humidite-maison/chambre-humide/",
          },
          {
            number: "04",
            title: "Réduire l'humidité au quotidien",
            description: "Les gestes simples et efficaces pour maintenir un taux d'hygrométrie sain sans équipements coûteux.",
            href: "/humidite-maison/reduire-humidite-maison/",
          },
          {
            number: "05",
            title: "Sources d'humidité dans la maison",
            description: "Les activités qui produisent de la vapeur d'eau et comment quantifier chaque source.",
            href: "/humidite-maison/sources-humidite-interieure/",
          },
          {
            number: "06",
            title: "Ventilation et maîtrise de l'humidité",
            description: "Le rôle de la VMC dans le contrôle de l'humidité intérieure et comment l'optimiser.",
            href: "/humidite-maison/ventilation-humidite/",
          },
          {
            number: "07",
            title: "Diagnostic : identifier le type d'humidité",
            description: "Comment distinguer condensation, infiltration et remontées capillaires pour agir efficacement.",
            href: "/humidite-maison/diagnostic-humidite/",
          },
          {
            number: "08",
            title: "Humidité dans la maison : causes, diagnostic et solutions",
            description: "Condensation sur les vitres, murs humides, air lourd : identifier la cause exacte de l'humidité dans votre logement et agir avec la bonne solution.",
            href: "/humidite-maison/problemes-humidite/",
          },
          {
            number: "09",
            title: "Salpêtre sur les murs : reconnaître, traiter et prévenir",
            description: "Reconnaître le salpêtre, le distinguer de la moisissure et de l'efflorescence cimentaire, identifier les remontées capillaires et choisir un traitement durable.",
            href: "/humidite-maison/salpetre-murs/",
          },
          {
            number: "10",
            title: "Taux d'humidité idéal : valeurs cibles et hygromètre",
            description: "Plage 40-60 % recommandée par l'ADEME, repères pièce par pièce, saisonnalité et corrections concrètes en cas de taux trop bas ou trop élevé.",
            href: "/humidite-maison/taux-humidite-ideal/",
          },
          {
            number: "11",
            title: "Déshumidificateur : quand il sert, quand il ne sert à rien",
            description: "Avant d'acheter, savoir si un déshumidificateur résout vraiment le problème : compresseur ou absorption, dimensionnement, et limites face à l'humidité structurelle.",
            href: "/humidite-maison/deshumidificateur-maison/",
          },
          {
            number: "12",
            title: "Remontées capillaires : reconnaître et traiter durablement",
            description: "Humidité ascensionnelle dans les murs anciens, signes caractéristiques (auréole 0,80-1,50 m, salpêtre), solutions hiérarchisées : injection de résine, drainage, électro-osmose.",
            href: "/humidite-maison/remontees-capillaires/",
          },
          {
            number: "13",
            title: "Condensation sur les fenêtres : causes et solutions durables",
            description: "Buée matinale, point de rosée, ventilation : pourquoi la fenêtre n'est presque jamais la cause et comment agir efficacement sur l'humidité produite.",
            href: "/humidite-maison/condensation-fenetre/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'humidité"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "Qualité de l'air et ventilation",
            description: "L'humidité et la qualité de l'air sont étroitement liées. Une bonne ventilation règle souvent les deux problèmes à la fois.",
            href: "/air-interieur/",
          },
          {
            tag: "Rénovation saine",
            title: "Travaux et traitement de l'humidité",
            description: "Quand l'humidité vient de l'enveloppe du bâtiment, il faut réfléchir rénovation. Priorités et matériaux adaptés.",
            href: "/renovation-saine/",
          },
          {
            tag: "Pièce par pièce",
            title: "Salle de bain et cuisine",
            description: "Les deux pièces les plus productrices de vapeur. Équipements, habitudes et ventilation spécifiques à chaque espace.",
            href: "/piece-par-piece/",
          },
        ]}
      />
    </>
  );
}
