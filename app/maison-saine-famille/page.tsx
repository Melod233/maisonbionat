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
  title: "Maison saine en famille : bébé, enfants et priorités concrètes",
  description:
    "Les enfants et les bébés sont plus exposés aux polluants intérieurs. Comprendre les priorités réelles, agir sur les espaces qui comptent le plus, sans panique ni dépenses inutiles.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/",
  },
  openGraph: {
    title: "Maison saine en famille : bébé, enfants et priorités concrètes",
    description:
      "Les enfants et les bébés sont plus exposés aux polluants intérieurs. Comprendre les priorités réelles, agir sur les espaces qui comptent le plus, sans panique ni dépenses inutiles.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/",
  },
};

export default function MaisonSaineFamillePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison saine famille", href: "/maison-saine-famille/" },
  ]);
  const faqItems = [
    {
      question: "À partir de quel âge un enfant est-il moins vulnérable aux polluants intérieurs ?",
      answer:
        "La vulnérabilité est plus grande pendant les 3 premières années de vie, en raison du développement pulmonaire et immunitaire en cours. Mais les enfants restent plus exposés que les adultes jusqu'à la fin de la croissance, car ils respirent proportionnellement plus d'air et passent davantage de temps à l'intérieur.",
    },
    {
      question: "Les huiles essentielles sont-elles sûres pour les enfants ?",
      answer:
        "L'ANSES déconseille l'utilisation d'huiles essentielles par diffusion en présence d'enfants de moins de 3 ans. Pour les enfants plus âgés, certaines huiles peuvent être irritantes, notamment chez les asthmatiques. La diffusion dans une pièce fermée est à éviter dans tous les cas.",
    },
    {
      question: "Quand faut-il rénover la chambre bébé avant la naissance ?",
      answer:
        "Idéalement, terminez tous les travaux (peinture, sol, mobilier) au moins 6 à 8 semaines avant la date prévue. Cette période permet un dégazage suffisant avec ventilation intensive quotidienne. Si ce n'est pas possible, optez impérativement pour des produits A+ et aérez intensément.",
    },
    {
      question: "Un purificateur d'air est-il utile dans une chambre d'enfant ?",
      answer:
        "Un purificateur HEPA peut réduire les particules fines et les allergènes dans une chambre d'enfant allergique ou asthmatique. Il ne remplace pas une bonne ventilation et ne traite pas les COV gazeux. C'est un complément, pas une solution principale. Priorité : VMC fonctionnelle + aération régulière.",
    },
    {
      question: "L'humidité dans la chambre est-elle vraiment dangereuse pour un bébé ?",
      answer:
        "Oui. Un taux d'humidité supérieur à 60 % favorise le développement des moisissures et la prolifération des acariens, deux facteurs de risque documentés pour les pathologies respiratoires chez l'enfant. Visez 40 à 55 % dans la chambre bébé, avec un thermomètre-hygromètre pour vérifier.",
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
        tag="Maison saine famille"
        title="Les enfants respirent plus d'air, et leur corps est moins armé pour le filtrer."
        description="À volume corporel égal, un enfant respire deux à trois fois plus d'air qu'un adulte. Ce que vous acceptez dans votre logement, eux l'absorbent davantage. Quelques priorités claires pour agir là où ça compte vraiment."
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
        title="Ce que la science dit sur les enfants et l'air intérieur"
        insights={[
          {
            number: "01",
            label: "Exposition proportionnelle",
            text: "Selon l'ANSES, les enfants ont un volume respiratoire environ deux fois supérieur à celui des adultes, proportionnellement à leur masse corporelle. Ils passent en moyenne 80 à 90 % de leur temps en espace clos, ce qui amplifie structurellement leur exposition aux polluants intérieurs.",
          },
          {
            number: "02",
            label: "Les 1000 premiers jours",
            text: "La période allant de la conception aux 2 ans de l'enfant est considérée comme critique pour le développement pulmonaire et immunitaire. Une exposition précoce aux polluants intérieurs peut avoir des effets durables.",
          },
          {
            number: "03",
            label: "La chambre en priorité",
            text: "Un enfant passe en moyenne 10 à 12 heures par jour dans sa chambre (sommeil + jeu). C'est l'espace à traiter en premier : ventilation, matériaux, produits utilisés, taux d'humidité.",
          },
          {
            number: "04",
            label: "Moisissures et asthme",
            text: "L'ANSES et l'OMS confirment que vivre dans un logement humide ou avec des moisissures visibles est associé au développement de l'asthme chez l'enfant. Ce lien est documenté, avec des arguments causaux solides issus de plusieurs études épidémiologiques.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Par où commencer pour une famille"
        subtitle="Les actions les plus impactantes, dans l'ordre logique."
        priorities={[
          {
            number: "01",
            action: "Traiter la chambre de l'enfant en premier",
            description:
              "C'est l'espace le plus occupé, avec les nuits les plus longues. Priorités : ventilation fonctionnelle, taux d'humidité entre 40 et 60 %, absence de moisissures, matériaux A+ pour les finitions récentes.",
            href: "/piece-par-piece/chambre-enfant-saine/",
          },
          {
            number: "02",
            action: "Préparer la chambre bébé bien avant la naissance",
            description:
              "Les travaux de peinture, la pose de sols ou l'installation de meubles neufs doivent être réalisés au moins 6 à 8 semaines avant l'arrivée du bébé. Le dégazage des matériaux doit être terminé avant toute occupation.",
            href: "/maison-saine-famille/chambre-bebe-saine/",
          },
          {
            number: "03",
            action: "Supprimer les produits les plus émissifs de l'espace enfant",
            description:
              "Parfums d'ambiance, sprays, bougies paraffine : ces produits n'ont pas leur place dans les pièces fréquentées par les enfants. Remplacez-les par une aération efficace. Les huiles essentielles sont également déconseillées pour les moins de 3 ans.",
            href: "/maison-saine-famille/produits-menagers-enfants/",
          },
          {
            number: "04",
            action: "Vérifier la VMC et aérer les chambres matin et soir",
            description:
              "Même en hiver : 5 à 10 minutes d'aération matin et soir dans les chambres d'enfants. Vérifiez que la bouche VMC de leur chambre n'est pas obstruée. C'est simple, gratuit et directement efficace.",
            href: "/air-interieur/entretien-vmc/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Les erreurs les plus fréquentes avec les enfants"
        errors={[
          {
            label: "Rénover la chambre bébé trop tard",
            explanation:
              "Peindre ou meubler une chambre de bébé quelques jours avant la naissance expose l'enfant à des concentrations élevées de COV. Le dégazage d'une chambre rénovée nécessite au minimum 6 semaines de ventilation intensive.",
          },
          {
            label: "Diffuser des huiles essentielles dans la chambre",
            explanation:
              "Les huiles essentielles sont des COV naturels. Elles sont déconseillées par l'ANSES pour les enfants de moins de 3 ans et potentiellement irritantes pour les enfants asthmatiques à tout âge. La diffusion dans une chambre fermée est à éviter.",
          },
          {
            label: "Croire que le logement neuf est plus sain",
            explanation:
              "Un logement neuf contient davantage de matériaux récents qui n'ont pas encore dégazé. Les concentrations en formaldéhyde et COV sont souvent plus élevées dans le neuf que dans l'ancien. La ventilation intensive les premières années est indispensable.",
          },
          {
            label: "Tout traiter en même temps sans prioriser",
            explanation:
              "Face aux risques, certains parents cherchent à tout résoudre d'un coup. L'efficacité vient de la priorisation : chambre d'abord, ventilation en premier, matériaux au moment des achats ou travaux. Le reste suit progressivement.",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer la maison saine en famille"
        subtitle="Guides spécifiques pour chaque situation familiale."
        pages={[
          {
            number: "01",
            title: "Préparer une chambre bébé plus saine",
            description: "Peintures, meubles, literie, ventilation : les priorités concrètes pour préparer l'espace de votre enfant avant son arrivée.",
            href: "/maison-saine-famille/chambre-bebe-saine/",
          },
          {
            number: "02",
            title: "Produits ménagers avec des enfants",
            description: "Quels produits éviter, lesquels adopter, et comment organiser le ménage pour limiter l'exposition des enfants aux substances irritantes.",
            href: "/maison-saine-famille/produits-menagers-enfants/",
          },
          {
            number: "03",
            title: "Logement et grossesse",
            description: "Travaux, produits, ventilation : les précautions à prendre pendant la grossesse pour protéger le développement du bébé.",
            href: "/maison-saine-famille/maison-grossesse/",
          },
          {
            number: "04",
            title: "Allergies respiratoires de l'enfant : agir sur l'environnement domestique",
            description: "Acariens, animaux, moisissures : ce que les parents peuvent faire dans le logement pour limiter l'exposition aux allergènes, en complément du suivi médical.",
            href: "/maison-saine-famille/allergies-respiratoires-enfant/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur la maison saine en famille"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "Qualité de l'air et ventilation",
            description: "La qualité de l'air est le premier enjeu sanitaire pour les enfants à l'intérieur. Comprendre les sources et les solutions.",
            href: "/air-interieur/",
          },
          {
            tag: "Matériaux sains",
            title: "Matériaux pour la chambre d'enfant",
            description: "Choisir peintures, sols et meubles à faibles émissions pour les espaces occupés par les enfants.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits adaptés aux enfants",
            description: "Lessives, nettoyants, parfums : quels produits éviter et quelles alternatives adopter quand on vit avec des enfants.",
            href: "/produits-et-habitudes/",
          },
        ]}
      />
    </>
  );
}
