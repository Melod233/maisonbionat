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
  title: "Matériaux sains : peintures, revêtements et finitions",
  description:
    "Peintures, sols, meubles, colles : choisir des matériaux à faibles émissions pour un logement plus sain. Comprendre l'étiquetage A+, les COV et les alternatives naturelles.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/",
  },
  openGraph: {
    title: "Matériaux sains : peintures, revêtements et finitions",
    description:
      "Peintures, sols, meubles, colles : choisir des matériaux à faibles émissions pour un logement plus sain. Comprendre l'étiquetage A+, les COV et les alternatives naturelles.",
    url: "https://www.maisonbionat.fr/materiaux-sains/",
  },
};

export default function MateriauxSainsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
  ]);
  const faqItems = [
    {
      question: "Qu'est-ce que le label A+ sur les matériaux de construction ?",
      answer:
        "Le label A+ est la meilleure classe de l'étiquetage obligatoire sur les émissions de COV (composés organiques volatils), en vigueur en France depuis 2012. Il indique que le produit émet très peu de polluants dans l'air, selon des mesures réalisées en chambre d'essai normalisée. C'est le minimum recommandé pour les pièces de vie et les chambres.",
    },
    {
      question: "Quels sont les matériaux les plus émissifs à éviter ?",
      answer:
        "Les panneaux de bois à base de formaldéhyde (MDF, aggloméré, contreplaqué bas de gamme), les peintures sans étiquetage, les colles de pose de sols, les revêtements vinyliques bas de gamme et certains vernis à base de solvants. Dans tous les cas, vérifiez l'étiquetage A+ et aérez après pose.",
    },
    {
      question: "Un matériau naturel est-il forcément sain ?",
      answer:
        "Pas nécessairement. Des matériaux naturels comme l'huile de lin ou certaines résines naturelles peuvent émettre des composés volatils. Le critère fiable est le niveau d'émission mesuré (label A+), pas l'origine biologique du matériau. Cela dit, les matériaux naturels sont souvent meilleurs sur d'autres critères environnementaux.",
    },
    {
      question: "Faut-il remplacer tous ses meubles pour avoir un logement sain ?",
      answer:
        "Non. Les meubles anciens ont déjà dégazé leur essentiel. C'est surtout au moment d'un achat ou d'une rénovation qu'il faut être vigilant. Priorité : les pièces de sommeil (chambre, chambre d'enfant) et les espaces peu ventilés.",
    },
    {
      question: "Combien de temps faut-il ventiler après une peinture ?",
      answer:
        "Même avec une peinture A+, il est recommandé d'aérer intensément pendant 4 à 6 semaines après application. Les émissions décroissent rapidement mais ne s'arrêtent pas à la fin du séchage visible. Dans une chambre d'enfant, doublez la précaution.",
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
        tag="Matériaux sains"
        title="Ce que contiennent vos murs, vos sols et vos meubles compte."
        description="Peintures, parquets, panneaux de bois, colles : les matériaux d'un logement émettent des composés chimiques volatils pendant des mois, parfois des années. Comprendre l'étiquetage et faire de meilleurs choix, progressivement."
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
        title="Ce que les matériaux font à votre air intérieur"
        insights={[
          {
            number: "01",
            label: "Étiquetage obligatoire",
            text: "Obligatoire pour les nouveaux produits depuis janvier 2012, l'étiquetage s'applique à tous les produits vendus en France depuis le 1er septembre 2013 (décret n° 2011-321). Il classe les émissions de A+ (très faibles) à C (élevées).",
          },
          {
            number: "02",
            label: "Durée d'émission",
            text: "Un meuble en aggloméré ou un parquet stratifié peut émettre du formaldéhyde pendant plusieurs années après fabrication. Les émissions sont maximales les premières semaines (300 à 400 µg/m³/heure en espace fermé) et décroissent progressivement.",
          },
          {
            number: "03",
            label: "A+ ne veut pas dire zéro",
            text: "Le label A+ atteste de faibles émissions mesurées en laboratoire. Il ne garantit pas l'absence totale de COV. La ventilation reste indispensable, même avec des matériaux classés A+.",
          },
          {
            number: "04",
            label: "Cumul des sources",
            text: "Dans un logement rénové, la superposition de plusieurs matériaux (sol, peinture, colle, mobilier) peut créer un niveau d'exposition cumulé significatif, même si chaque produit est classé A+ individuellement.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Choisir ses matériaux dans le bon ordre"
        subtitle="Les décisions les plus impactantes lors d'un achat ou d'une rénovation."
        priorities={[
          {
            number: "01",
            action: "Exiger le A+ sur les peintures et revêtements",
            description:
              "Lors de l'achat d'une peinture, d'un vernis ou d'un enduit, le label A+ est le minimum. Évitez les produits sans étiquetage visible : la loi l'exige, son absence est un signal d'alerte.",
            href: "/materiaux-sains/peintures-revetements-faibles-emissions/",
          },
          {
            number: "02",
            action: "Ventiler pendant et après les travaux",
            description:
              "Les émissions de COV sont maximales juste après pose. Aérez intensément pendant 4 à 6 semaines après une peinture ou une installation de sol. Si possible, laissez la pièce sans occupant les premiers jours.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
          {
            number: "03",
            action: "Laisser dégazer les meubles neufs",
            description:
              "Un meuble en aggloméré ou un canapé neuf doit dégazer dans un espace ventilé avant d'être installé dans une chambre. Idéalement : garage, balcon ou pièce à forte aération pendant 2 à 4 semaines.",
            href: "/materiaux-sains/degazage-meubles-neufs/",
          },
          {
            number: "04",
            action: "Préférer les matériaux naturels pour les sols",
            description:
              "Parquet massif, carrelage, linoléum naturel (à base d'huile de lin) ou béton ciré sont des alternatives aux sols stratifiés ou vinyliques avec moins d'émissions sur le long terme.",
            href: "/materiaux-sains/revetements-sol-faibles-emissions/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Les idées reçues sur les matériaux sains"
        errors={[
          {
            label: "\"Naturel\" veut dire sain",
            explanation:
              "Un produit naturel peut émettre des COV naturels (terpènes dans les huiles de lin, par exemple). Le critère pertinent est le niveau d'émission mesuré, pas l'origine du matériau.",
          },
          {
            label: "La peinture sèche = plus d'émission",
            explanation:
              "Une peinture sèche visuellement continue d'émettre des COV pendant des semaines. Le temps de séchage affiché concerne la surface, pas la fin du dégazage chimique.",
          },
          {
            label: "Les sols en bois ne polluent pas",
            explanation:
              "Le parquet massif huilé est une bonne option. Mais les parquets stratifiés, les laminés et les sols vinyliques contiennent souvent des colles, plastifiants ou résines qui émettent des COV.",
          },
          {
            label: "Rénover avec du A+ suffit sans ventiler",
            explanation:
              "Même avec des matériaux A+, une rénovation complète d'une pièce génère un cumul d'émissions. La ventilation intensive post-travaux n'est pas optionnelle.",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer les matériaux en détail"
        subtitle="Guides pratiques pour chaque type de matériau ou de situation."
        pages={[
          {
            number: "01",
            title: "Peintures et revêtements muraux à faibles émissions",
            description: "Comprendre l'étiquetage A+, comparer les options et choisir sans se tromper pour une chambre, un salon ou une cuisine.",
            href: "/materiaux-sains/peintures-revetements-faibles-emissions/",
          },
          {
            number: "02",
            title: "Revêtements de sol à faibles émissions",
            description: "Parquet massif, carrelage, linoléum naturel : avantages, limites et questions pratiques pour chaque type de sol.",
            href: "/materiaux-sains/revetements-sol-faibles-emissions/",
          },
          {
            number: "03",
            title: "Meubles à faibles émissions",
            description: "Comprendre les étiquettes, identifier les matériaux à risque et choisir un mobilier moins émissif pour une chambre ou un salon.",
            href: "/materiaux-sains/meubles-faibles-emissions/",
          },
          {
            number: "04",
            title: "Isolants biosourcés",
            description: "Laine de chanvre, liège, ouate de cellulose : performances thermiques, hygroscopicité et impact sur la qualité de l'air intérieur.",
            href: "/materiaux-sains/isolants-biosources/",
          },
          {
            number: "05",
            title: "Le dégazage des matériaux",
            description: "Comprendre le phénomène d'émission des matériaux neufs, sa durée et comment l'accélérer pour retrouver un air sain plus vite.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
          {
            number: "06",
            title: "Faire dégazer les meubles neufs",
            description: "Protocole pratique pour gérer les meubles neufs avant de les installer dans une chambre ou un espace peu ventilé.",
            href: "/materiaux-sains/degazage-meubles-neufs/",
          },
          {
            number: "07",
            title: "Matériaux à faibles émissions : label A+, COV et guide d'achat",
            description: "Sols, meubles, peintures, colles : comprendre l'étiquetage A+ des émissions, identifier les matériaux à surveiller et faire de meilleurs choix à chaque achat ou rénovation.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            number: "08",
            title: "Choisir des matériaux plus naturels : ce que ça veut dire et par où commencer",
            description: "Naturel ne veut pas forcément dire sans émissions. Comprendre les labels A+, OEKO-TEX et les vrais critères pour choisir des matériaux qui améliorent la qualité de l'air intérieur.",
            href: "/materiaux-sains/materiaux-plus-naturels/",
          },
          {
            number: "09",
            title: "Choisir une peinture plus saine : label A+, COV et alternatives",
            description: "Comment lire l'étiquette d'une peinture, comprendre le label A+, identifier les alternatives naturelles et éviter les erreurs fréquentes lors de l'achat.",
            href: "/materiaux-sains/peinture-plus-saine/",
          },
          {
            number: "10",
            title: "Panneaux bois agglomérés, MDF et OSB : émissions et choix",
            description: "Classes E1, E0, ENF, CARB Phase 2 et future E05 : comprendre les émissions de formaldéhyde des panneaux et choisir un mobilier moins émissif.",
            href: "/materiaux-sains/panneaux-bois-formaldehyde/",
          },
          {
            number: "11",
            title: "Étiquetage A+ : comprendre les classes COV",
            description: "Décret 2011-321, classes A+ à C, 10 substances mesurées : ce que dit vraiment l'étiquette obligatoire des produits de construction et ses limites.",
            href: "/materiaux-sains/etiquetage-cov-comprendre/",
          },
          {
            number: "12",
            title: "Colles à faibles émissions : choisir et poser sans dégrader l'air",
            description: "Colles à bois, à parquet, à carrelage : repérer A+ et EC1, comprendre les alternatives sans formaldéhyde et éviter de gâcher un revêtement A+ par une mauvaise colle.",
            href: "/materiaux-sains/colles-faibles-emissions/",
          },
          {
            number: "13",
            title: "Parquet massif sain : émissions, finitions et arbitrage matériau",
            description: "Massif vs contrecollé vs stratifié, choix de la finition (huile, vernis aqueux, cire) et mode de pose : les critères qui pèsent vraiment sur l'air intérieur.",
            href: "/materiaux-sains/parquet-massif-sain/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur les matériaux sains"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "COV et qualité de l'air",
            description: "Les matériaux sont l'une des sources principales de polluants intérieurs. Comprendre les deux sujets ensemble permet d'agir plus efficacement.",
            href: "/air-interieur/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover sans dégrader l'air",
            description: "Le choix des matériaux s'intègre dans une stratégie de rénovation globale. Priorités, erreurs et approche méthodique.",
            href: "/renovation-saine/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers et pollution chimique",
            description: "Au-delà des matériaux fixes, les produits du quotidien contribuent aussi significativement à la qualité de l'air intérieur.",
            href: "/produits-et-habitudes/",
          },
        ]}
      />
    </>
  );
}
