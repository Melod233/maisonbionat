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
  title: "Recettes de produits ménagers maison : formules testées et expliquées",
  description:
    "Nettoyant multi-surfaces, nettoyant WC, vitres, dégraissant, assouplissant : les recettes de produits ménagers maison au bicarbonate, vinaigre blanc et savon de Marseille. Formules précises.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/recettes-produits-menagers/",
  },
  openGraph: {
    title: "Recettes de produits ménagers maison : formules testées et expliquées",
    description:
      "Nettoyant multi-surfaces, nettoyant WC, vitres, dégraissant, assouplissant : les recettes de produits ménagers maison au bicarbonate, vinaigre blanc et savon de Marseille. Formules précises.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/recettes-produits-menagers/",
  },
};

export default function RecettesProduitsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Recettes de produits ménagers maison : formules testées et expliquées", href: "https://www.maisonbionat.fr/produits-et-habitudes/recettes-produits-menagers/" },
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
        title="Recettes de produits ménagers maison : formules précises pour chaque usage"
        quickAnswer="Bicarbonate de soude, vinaigre blanc, savon de Marseille et cristaux de soude permettent de fabriquer des nettoyants efficaces pour presque tous les usages du quotidien. Les recettes maison réduisent les émissions de composés organiques volatils (COV) dans le logement et coûtent nettement moins cher que les produits du commerce. Ce guide donne les formules exactes, les proportions et les précautions à connaître."
        stats={[
          { value: "4", label: "ingrédients de base couvrent la quasi-totalité des usages ménagers" },
          { value: "-80 %", label: "d'émissions de COV estimées par rapport aux nettoyants parfumés en spray (ADEME/PRESSENS)" },
          { value: "< 5 €", label: "pour constituer un kit complet pour plusieurs mois d'entretien" },
          { value: "100 %", label: "biodégradables : savon de Marseille, savon noir, bicarbonate, vinaigre" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les ingrédients de base" },
          { id: "signes", label: "Quel produit pour quelle situation" },
          { id: "causes", label: "Pourquoi ça fonctionne" },
          { id: "actions", label: "Les recettes" },
          { id: "eviter", label: "Erreurs et mélanges à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Ingrédients de base"
        title="Les quatre ingrédients à connaître et leur rôle."
        description="Chacun a un mécanisme d'action distinct. Les comprendre permet d'utiliser le bon produit dans la bonne situation, sans gaspillage ni résultat décevant."
        variants={[
          {
            indicator: "Abrasif doux, neutralisateur d'odeurs",
            name: "Bicarbonate de soude (NaHCO3)",
            description:
              "Le bicarbonate est une base douce (pH 8,3). Il neutralise les molécules odorantes acides, agit comme abrasif léger sur les dépôts et traces, et a un pouvoir déodorisant. Il s'utilise sec (en poudre) ou en pâte (mélangé à un peu d'eau ou de savon liquide). Acheter le bicarbonate alimentaire ou technique : ils sont identiques chimiquement.",
          },
          {
            indicator: "Anticalcaire, désinfectant léger, dégraissant léger",
            name: "Vinaigre blanc à 8 % (acide acétique)",
            description:
              "Le vinaigre blanc pur du commerce est à 8 % d'acide acétique. C'est un acide faible qui dissout le calcaire, a un effet bactériostatique modéré et décolle les résidus de savon. Son odeur se dissipe en quelques minutes une fois sec. À ne pas confondre avec le vinaigre d'alcool à 14 % (vinaigre ménager concentré) qui doit être dilué.",
          },
          {
            indicator: "Dégraissant, nettoyant de surface, nettoyant sol",
            name: "Savon noir liquide (potassium olivate)",
            description:
              "Le savon noir traditionnel est un savon liquide à base d'huile d'olive saponifiée à la potasse. Il dégraisse efficacement les surfaces, les sols carrelés et les équipements de cuisine. 2 cuillères à soupe dans un seau d'eau chaude suffisent pour un sol. Il ne laisse pas de résidu savonneux s'il est bien rincé.",
          },
          {
            indicator: "Dégraissant puissant, détartrant, nettoyant pour fours et hottes",
            name: "Cristaux de soude (carbonate de sodium Na2CO3)",
            description:
              "Les cristaux de soude sont une base forte (pH 11-12). Ils dissolvent les graisses alimentaires tenaces, les résidus de four et les dépôts anciens. À utiliser avec des gants de protection. Ne pas confondre avec le bicarbonate : les cristaux de soude sont nettement plus alcalins et peuvent endommager l'aluminium. Utiliser en solution à 5-10 % dans l'eau chaude.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Quel produit pour quelle situation"
        title="Choisir la bonne recette selon l'usage."
        subtitle="Une recette inadaptée à la surface ou à la saleté ne donnera pas de résultat satisfaisant. Voici les situations les plus courantes."
        signs={[
          {
            label: "Dépôts calcaires sur robinets, pomme de douche, paroi de baignoire",
            description:
              "Vinaigre blanc pur ou dilué à 50 %, appliqué avec un chiffon ou un flacon spray. Laisser agir 15 à 30 minutes. Rincer. Pour les robinets, enrouler un chiffon imbibé de vinaigre autour du col.",
            severity: "léger",
          },
          {
            label: "Cuvette WC avec dépôt jaunâtre",
            description:
              "Verser 250 ml de vinaigre blanc dans la cuvette, saupoudrer de bicarbonate de soude, laisser agir 30 minutes. Brosser. Pour les dépôts anciens, répéter deux fois.",
            severity: "modéré",
          },
          {
            label: "Vitres et miroirs avec traces",
            description:
              "Spray maison : 70 cl d'eau + 30 cl de vinaigre blanc, éventuellement 1 cuillère à café d'alcool à 70°. Vaporiser et essuyer avec un chiffon microfibre ou du papier journal. Le papier journal ne laisse pas de peluches.",
            severity: "léger",
          },
          {
            label: "Four ou hotte encrassés par les graisses cuites",
            description:
              "Pâte de cristaux de soude : 100 g de cristaux dans 500 ml d'eau chaude (porter des gants). Appliquer sur les parois du four froid, laisser agir 2 heures, rincer soigneusement. Ne pas utiliser sur les résistances ni les éléments électriques.",
            severity: "modéré",
          },
          {
            label: "Surfaces de cuisine grasses (plan de travail, carrelage)",
            description:
              "Nettoyant dégraissant : 2 cuillères à soupe de savon noir dans 1 litre d'eau chaude. Appliquer, laisser agir 5 minutes, essuyer. Pour les graisses légères, le vinaigre blanc dilué suffit.",
            severity: "léger",
          },
          {
            label: "Sol carrelé avec odeurs ou saletés courantes",
            description:
              "Seau d'eau chaude + 2 cuillères à soupe de savon noir. Passer la serpillière. Pas de rinçage nécessaire si la quantité de savon est respectée. Pour une légère désinfection, ajouter 100 ml de vinaigre blanc.",
            severity: "léger",
          },
        ]}
        footerNote="Ces recettes conviennent aux usages courants dans un logement. Elles ne remplacent pas des produits désinfectants certifiés pour des situations à risque sanitaire (contamination alimentaire, moisissures étendues)."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi ça fonctionne"
        title="Les mécanismes chimiques derrière les recettes."
        subtitle="Comprendre les principes actifs permet d'adapter les recettes, de les doser correctement et d'éviter les mélanges inutiles ou contre-productifs."
        causes={[
          {
            number: "01",
            cause: "L'action acide du vinaigre sur le calcaire",
            explanation:
              "Le calcaire (carbonate de calcium) se dissout au contact des acides. L'acide acétique du vinaigre réagit avec le calcaire pour former de l'acétate de calcium, soluble dans l'eau et facilement essuyé. C'est pourquoi le vinaigre est efficace sur les dépôts calcaires, et inefficace sur les graisses (qui nécessitent un alcalin ou un tensioactif).",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "L'action alcaline du bicarbonate et des cristaux de soude",
            explanation:
              "Les graisses et les huiles sont saponifiées (dissoutes) par les substances alcalines. Le bicarbonate (pH 8,3) est doux et adapté aux tâches légères. Les cristaux de soude (pH 11-12) sont nettement plus puissants et réservés aux graisses cuites ou aux résidus tenaces. Ne jamais mélanger avec le vinaigre : ils se neutralisent mutuellement.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "L'action tensioactive du savon",
            explanation:
              "Le savon de Marseille et le savon noir sont des tensioactifs naturels. Leur molécule a une extrémité hydrophile (attirée par l'eau) et une extrémité hydrophobe (attirée par les graisses). Elle entoure les particules grasses et les entraîne dans l'eau de rinçage. C'est le principe actif de tout savon, naturel ou industriel.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Le pouvoir déodorisant du bicarbonate",
            explanation:
              "Les mauvaises odeurs sont souvent causées par des molécules acides (acide butyrique dans la transpiration, acide sulfhydrique dans les odeurs de poubelle). Le bicarbonate, base faible, neutralise ces acides par réaction chimique et supprime l'odeur à la source, sans la masquer. Il ne perfume pas : il neutralise.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "L'alcool comme auxiliaire de séchage et désinfection légère",
            explanation:
              "L'alcool à 70° (ou alcool isopropylique) est parfois ajouté aux recettes de nettoyants vitres. Il accélère le séchage (moins de traces), a un effet désinfectant léger et dissout les traces de gras. Il est beaucoup moins émissif que les solvants aromatiques utilisés dans les produits du commerce.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les recettes par usage, avec les proportions exactes."
        immediateLabel="Recettes rapides"
        structuralLabel="Recettes à préparer à l'avance"
        immediate={[
          {
            label: "Nettoyant multi-surfaces spray",
            description:
              "Dans un flacon spray de 500 ml : 400 ml d'eau, 50 ml de vinaigre blanc à 8 %, 1 cuillère à soupe de savon noir liquide. Agiter doucement. Utiliser sur carrelage, plans de travail, évier, portes et surfaces plastiques. Ne pas utiliser sur le marbre ni la pierre calcaire.",
            effort: "2 minutes",
          },
          {
            label: "Nettoyant vitres et miroirs",
            description:
              "Dans un flacon spray : 700 ml d'eau, 200 ml de vinaigre blanc, 1 cuillère à café d'alcool à 70° (facultatif). Vaporiser, essuyer immédiatement avec un chiffon microfibre ou du papier journal. Pour des vitres très sales, passer d'abord avec un chiffon humide avant le spray.",
            effort: "2 minutes",
          },
          {
            label: "Dégraissant cuisine puissant",
            description:
              "Pâte express : 3 cuillères à soupe de bicarbonate de soude + quelques gouttes de savon noir liquide + eau en quantité suffisante pour obtenir une consistance pâteuse. Appliquer sur la surface grasse, laisser agir 10 minutes, frotter avec une éponge douce, rincer. Adapté aux résidus de cuisson légers à modérés.",
            effort: "15 minutes",
          },
          {
            label: "Nettoyant WC",
            description:
              "Verser 150 ml de vinaigre blanc dans la cuvette. Saupoudrer 2 cuillères à soupe de bicarbonate (la réaction est normale : mousse puis calme). Laisser agir 20 à 30 minutes. Brosser puis tirer la chasse. Pour les bords sous la lunette : appliquer avec du papier absorbant imbibé de vinaigre.",
            effort: "5 minutes + attente",
          },
        ]}
        structural={[
          {
            label: "Nettoyant salle de bain multi-usage",
            description:
              "Dans un flacon spray de 500 ml : 300 ml d'eau, 150 ml de vinaigre blanc, 2 cuillères à soupe de savon noir, 1 cuillère à soupe de bicarbonate (ajouter en dernier, doucement, car il mousse au contact du vinaigre). Ce mélange est moins puissant que ses composants séparés mais pratique pour l'entretien régulier. Rincer après usage sur carrelage.",
            effort: "5 minutes",
          },
          {
            label: "Assouplissant tissu de remplacement",
            description:
              "200 ml de vinaigre blanc dans le compartiment assouplissant du lave-linge. Il neutralise les résidus de lessive qui rigidifient les fibres, réduit l'électricité statique et n'altère pas les couleurs. L'odeur de vinaigre disparaît au séchage. Ne pas utiliser avec les lessives aux enzymes en contact direct (verser dans le compartiment séparé).",
            effort: "Moins cher que les assouplissants du commerce",
          },
          {
            label: "Nettoyant four et hotte",
            description:
              "Solution de cristaux de soude : 80 g de cristaux de soude dans 750 ml d'eau chaude. Attention : porter des gants. Appliquer sur les parois froides du four, les grilles et les filtres de hotte avec une éponge. Laisser agir 1 à 2 heures. Rincer abondamment. Ne pas utiliser sur l'aluminium anodisé.",
            effort: "10 minutes + attente de 2 h",
          },
          {
            label: "Nettoyant sol universel",
            description:
              "Dans un seau de 5 litres d'eau chaude : 2 cuillères à soupe de savon noir liquide, éventuellement 100 ml de vinaigre blanc pour les carrelages calcaires. Ce mélange convient au carrelage, lino et stratifié. Sur parquet huilé ou ciré, utiliser uniquement le savon noir dilué, sans vinaigre.",
            effort: "2 minutes de préparation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les mélanges et erreurs à éviter absolument."
        errors={[
          {
            label: "Mélanger vinaigre et bicarbonate dans un flacon fermé",
            explanation:
              "La réaction entre l'acide acétique (vinaigre) et le bicarbonate produit du CO2. Dans un flacon fermé, la pression monte et peut provoquer une projection ou une ouverture brutale du flacon. Ces deux produits peuvent être utilisés l'un après l'autre sur une surface, mais jamais mélangés dans un contenant fermé.",
          },
          {
            label: "Utiliser le vinaigre sur le marbre, la pierre calcaire ou le ciment",
            explanation:
              "Le vinaigre attaque et ternit irréversiblement le marbre, la pierre calcaire, certains joints et les plans de travail en béton ciré. Pour ces surfaces, utiliser uniquement de l'eau et du savon noir dilué, ou un nettoyant au pH neutre.",
          },
          {
            label: "Appliquer des cristaux de soude sans gants ni protection",
            explanation:
              "Les cristaux de soude sont fortement alcalins (pH 11-12). Un contact prolongé avec la peau provoque des irritations et des brûlures alcalines. Porter des gants imperméables lors de la préparation et de l'utilisation. Ne pas inhaler la poudre lors du dosage.",
          },
          {
            label: "Préparer de grandes quantités de recettes liquides à l'avance",
            explanation:
              "Sans conservateur, les préparations maison liquides se dégradent en 2 à 4 semaines. Des moisissures peuvent se développer si le flacon n'est pas propre ou si de l'eau du robinet non traitée est utilisée. Préparer de petites quantités ou nettoyer le flacon entre chaque préparation.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les recettes ménagères maison"
        items={[
          {
            question: "Le vinaigre blanc abîme-t-il les joints de salle de bain ?",
            answer:
              "Oui, à long terme. Une utilisation occasionnelle et bien rincée est sans conséquence, mais l'application régulière de vinaigre pur ou concentré sur les joints en silicone peut les fragiliser et les faire noircir plus vite. Pour les joints, préférer le bicarbonate en pâte avec du savon liquide, ou un nettoyant pH neutre.",
          },
          {
            question: "Ces recettes conviennent-elles au lave-vaisselle ?",
            answer:
              "Le vinaigre blanc (150 à 200 ml dans le compartiment de rinçage) peut remplacer le liquide de rinçage industriel et réduit les dépôts calcaires sur les verres. Le bicarbonate peut être utilisé en entretien mensuel du lave-vaisselle vide (100 g au fond, programme court à 60°). Ces produits ne remplacent pas la lessive lave-vaisselle pour le nettoyage des ustensiles.",
          },
          {
            question: "Peut-on utiliser du savon de Marseille râpé à la place du savon noir ?",
            answer:
              "Oui, pour de nombreux usages. Le savon de Marseille (sodium olivate ou cocoate) est solide et doit être râpé ou dissous à chaud. Il est légèrement moins dégraissant que le savon noir mais convient pour les surfaces, les sols et comme base de lessive. Les deux savons sont biodégradables et peu émissifs.",
          },
          {
            question: "Quelle différence entre le bicarbonate alimentaire et le bicarbonate technique ?",
            answer:
              "Chimiquement, ils sont identiques (bicarbonate de sodium NaHCO3). Le bicarbonate alimentaire est garanti sans contaminants et peut être ingéré. Le bicarbonate technique peut contenir des impuretés et ne convient pas à un usage alimentaire. Pour le ménage, les deux fonctionnent de la même façon. Le bicarbonate technique est souvent moins cher.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Alternatives aux produits ménagers conventionnels",
            description:
              "Le guide complet par usage : quel produit (maison ou commercial) remplace quoi, selon la surface et le type de saleté.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
          {
            tag: "Produits et habitudes",
            title: "Lessive saine : choisir ou fabriquer",
            description:
              "Recettes de lessive maison, labels à connaître et ingrédients à éviter dans les lessives du commerce.",
            href: "/produits-et-habitudes/lessive-saine/",
          },
          {
            tag: "Produits et habitudes",
            title: "Gestes du quotidien pour une maison plus saine",
            description:
              "Les habitudes simples qui améliorent l'air intérieur, sans achat ni produit particulier.",
            href: "/produits-et-habitudes/gestes-maison-saine/",
          },
        ]}
      />
    </>
  );
}
