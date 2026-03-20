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
  title: "Matériaux à faibles émissions : label A+, COV et guide d'achat",
  description:
    "Sols, meubles, peintures, colles : comprendre l'étiquetage A+ des émissions, identifier les matériaux à surveiller et faire de meilleurs choix à chaque achat ou rénovation.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/materiaux-faibles-emissions/",
  },
  openGraph: {
    title: "Matériaux à faibles émissions : label A+, COV et guide d'achat",
    description:
      "Sols, meubles, peintures, colles : comprendre l'étiquetage A+ des émissions, identifier les matériaux à surveiller et faire de meilleurs choix à chaque achat ou rénovation.",
    url: "https://www.maisonbionat.fr/materiaux-sains/materiaux-faibles-emissions/",
  },
};

export default function MateriauxFaiblesEmissionsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Matériaux à faibles émissions : label A+, COV et guide d'achat", href: "https://www.maisonbionat.fr/materiaux-sains/materiaux-faibles-emissions/" },
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
        title="Choisir des matériaux à faibles émissions. Le guide complet."
        quickAnswer="L'étiquetage des émissions de COV est obligatoire en France depuis 2013 sur les produits de construction et décoration. Le label A+ est la meilleure classe. Un matériau A+ émet très peu de polluants dans l'air, mais la ventilation reste nécessaire : les matériaux A+ cumulés dans une pièce rénovée génèrent malgré tout des émissions."
        stats={[
          { value: "2013", label: "date d'application obligatoire en France (décret 2011-321)" },
          { value: "A+", label: "meilleure classe d'émissions (4 classes : A+, A, B, C)" },
          { value: "28 j", label: "délai de mesure des émissions en chambre normalisée" },
          { value: "Cumul", label: "plusieurs matériaux A+ dans une pièce = émissions à gérer" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le système" },
          { id: "signes", label: "Ce qu'il faut vérifier" },
          { id: "causes", label: "Matériaux les plus émissifs" },
          { id: "actions", label: "Comment choisir" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Comprendre le système"
        title="L'étiquetage A+ : ce qu'il mesure vraiment."
        description="Le système d'étiquetage français mesure les émissions dans l'air, pas la composition du produit. C'est une distinction fondamentale pour interpréter correctement les étiquettes et éviter les faux amis marketing."
        variants={[
          {
            indicator: "Ce que mesure le A+",
            name: "Émissions dans l'air après 28 jours",
            description:
              "Des échantillons du matériau sont placés dans une chambre d'essai normalisée pendant 28 jours. On mesure les concentrations de formaldéhyde, d'acétaldéhyde et de COV totaux. Le A+ correspond aux seuils les plus bas. C'est une mesure réelle des émissions dans l'air intérieur.",
          },
          {
            indicator: "Ce que ne mesure pas le A+",
            name: "La composition chimique totale du produit",
            description:
              "Le label A+ ne garantit pas l'absence de substances potentiellement problématiques dans le produit lui-même, ni les émissions à court terme (très élevées les premiers jours). Pour une information complète, demandez la fiche de données de sécurité (FDS) du fabricant.",
          },
          {
            indicator: "Autres labels complémentaires",
            name: "Ecolabel, OEKO-TEX, NF Environnement",
            description:
              "L'Ecolabel européen (fleur) prend en compte des critères plus larges : composition, fin de vie, absence de certains composés. OEKO-TEX Standard 100 concerne les textiles. NF Environnement est un label français multifacettes. Ils complètent le A+ sans le remplacer.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Ce qu'il faut vérifier"
        title="Par catégorie de matériau : les points de contrôle."
        subtitle="Chaque type de matériau a ses propres sources d'émission et ses propres critères de choix."
        signs={[
          {
            label: "Peintures et revêtements muraux : label A+ obligatoire",
            description:
              "La peinture est le matériau le plus souvent vérifié. Cherchez le label A+/A/B/C directement sur l'emballage. Un produit sans ce label n'est pas conforme ou est antérieur à 2013.",
            severity: "critique",
          },
          {
            label: "Sols : type de liant et colle de pose",
            description:
              "Le parquet massif huilé émet peu. Les stratifiés et vinyliques contiennent souvent des plastifiants et des colles émissifs. La colle de pose est une source souvent négligée. Vérifiez le A+ du revêtement ET de la colle de pose.",
            severity: "critique",
          },
          {
            label: "Panneaux de bois : indice E1 ou E0",
            description:
              "MDF, contreplaqué, aggloméré : ces matériaux émettent du formaldéhyde issu des résines urée-formol. L'indice E1 est le standard européen. L'indice E0 ou F★★★★ (norme japonaise) correspond à des émissions encore plus faibles.",
            severity: "modéré",
          },
          {
            label: "Isolants : conductivité et perméabilité à la vapeur",
            description:
              "Les isolants biosourcés (chanvre, liège, ouate) sont généralement moins émissifs que les isolants synthétiques (polystyrène, polyuréthane). Vérifiez l'absence de formaldéhyde dans les liants pour la laine de verre et la laine de roche.",
            severity: "léger",
          },
          {
            label: "Meubles et mobilier : émissions de formaldéhyde",
            description:
              "Les meubles en MDF ou en aggloméré peuvent émettre du formaldéhyde pendant plusieurs mois. Cherchez la mention CARB Phase 2 (norme californienne) ou E1 sur les panneaux. Les meubles massifs non traités émettent très peu.",
            severity: "modéré",
          },
          {
            label: "Textiles et revêtements : certification OEKO-TEX",
            description:
              "Les moquettes, rideaux et textiles peuvent émettre des fibres et des substances de traitement (ignifugeants, antimoisissures). OEKO-TEX Standard 100 garantit l'absence des substances nocives les plus connues.",
            severity: "léger",
          },
        ]}
        footerNote="En cas de doute sur un produit, demandez au vendeur la fiche de données de sécurité (FDS) ou cherchez la fiche technique sur le site du fabricant. Ces documents listent la composition complète et les précautions d'usage."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Matériaux émissifs"
        title="Les matériaux qui émettent le plus, et pourquoi."
        subtitle="Savoir d'où viennent les émissions permet de prioriser ses choix."
        causes={[
          {
            number: "01",
            cause: "Panneaux de bois aggloméré (MDF, contreplaqué bas de gamme)",
            explanation:
              "Ces matériaux sont fabriqués avec des résines urée-formol qui libèrent du formaldéhyde sur la durée. C'est la source principale de formaldéhyde dans les logements français. Les émissions sont maximales dans les premières semaines et décroissent progressivement, mais peuvent durer des années.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Colles et produits de pose",
            explanation:
              "Les colles de pose pour parquets, carrelages et revêtements muraux sont une source émissive souvent négligée. Les colles à solvants (pose de moquette, anciens parquets) sont particulièrement problématiques. Les colles acryliques en dispersion sont moins émissives.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Peintures et vernis sans étiquetage ou anciens",
            explanation:
              "Les peintures glycérophtaliques à solvants organiques sont les plus émissives. Les vernis pour parquet et les lazures pour boiseries peuvent aussi libérer des COV en quantités significatives pendant les premières semaines.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Revêtements de sol synthétiques",
            explanation:
              "Certains sols vinyliques et PVC peuvent émettre des plastifiants (phtalates) et d'autres composés. Le label A+ s'applique aussi aux revêtements de sol : vérifiez-le à l'achat. Les alternatives : parquet massif, carrelage, linoléum naturel (à l'huile de lin).",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Isolation synthétique traitée avec des biocides",
            explanation:
              "Certains isolants en laine de verre ou laine de roche contiennent des liants phénoliques émissifs. Les biocides ajoutés pour prévenir les moisissures peuvent aussi contribuer aux émissions. Vérifiez la composition avant achat.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Faire de meilleurs choix à chaque étape."
        immediateLabel="À l'achat"
        structuralLabel="Lors de la rénovation"
        immediate={[
          {
            label: "Vérifiez le label A+ avant tout achat de matériau intérieur",
            description:
              "Pour toute peinture, revêtement de sol, colle ou matériau de décoration destiné à l'intérieur : cherchez le label d'émissions A+/A/B/C sur l'emballage. A+ est le minimum recommandé pour les pièces de vie et les chambres.",
            effort: "Gratuit, attention",
          },
          {
            label: "Préférez les meubles en bois massif aux panneaux",
            description:
              "Le bois massif non traité est l'une des options les moins émissives. Si vous achetez des meubles en aggloméré ou MDF, cherchez les labels E1 ou CARB Phase 2, ou les laissez dégazer avant installation.",
            effort: "Souvent similaire sur le long terme",
          },
          {
            label: "Demandez les fiches techniques des produits de pose",
            description:
              "Avant de valider des travaux avec un artisan, demandez les fiches techniques des colles, primaires et produits de finition. Exigez des produits A+ dans le devis. Un artisan sérieux accepte sans difficultés.",
            effort: "Gratuit, demande à faire",
          },
          {
            label: "Laissez dégazer les meubles neufs avant installation",
            description:
              "Un meuble en aggloméré neuf installé directement dans une chambre émet ses polluants dans l'espace de sommeil. Laissez-le dans un espace ventilé (garage, pièce avec fenêtre ouverte) pendant 2 à 4 semaines avant installation.",
            effort: "Organisation",
          },
        ]}
        structural={[
          {
            label: "Ventiler intensément après les travaux pendant 4 à 6 semaines",
            description:
              "Même avec des matériaux A+, une rénovation complète d'une pièce génère un cumul d'émissions significatif. Aérez fenêtres grandes ouvertes pendant les travaux et 30 minutes matin et soir pendant les semaines suivantes.",
            effort: "Gratuit, discipline",
          },
          {
            label: "Choisir des isolants biosourcés pour les rénovations",
            description:
              "La laine de chanvre, le liège expansé et la ouate de cellulose ont des performances thermiques comparables aux isolants synthétiques avec une meilleure hygroscopicité et des émissions plus faibles. À intégrer dans tout projet d'isolation.",
            effort: "Prix similaire ou légèrement supérieur",
          },
          {
            label: "Opter pour des sols durs et naturels dans les chambres",
            description:
              "Parquet massif huilé (A+), carrelage ou linoléum naturel (à base d'huile de lin) : ces matériaux émettent peu, sont faciles à entretenir et ne retiennent pas les allergènes comme les moquettes.",
            effort: "Lors d'une rénovation",
          },
          {
            label: "Éviter les travaux dans les pièces occupées",
            description:
              "Pendant une rénovation, les émissions sont au maximum. Évitez d'occuper la pièce pendant les travaux et les premières semaines post-travaux, surtout pour les enfants et les femmes enceintes.",
            effort: "Organisation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui augmentent inutilement l'exposition."
        errors={[
          {
            label: "Croire que A+ signifie zéro émission",
            explanation:
              "Le label A+ atteste de faibles émissions mesurées à 28 jours dans des conditions normalisées. Les émissions dans les premiers jours après application sont toujours plus élevées, et le cumul de plusieurs matériaux A+ dans une pièce rénovée génère malgré tout des émissions à gérer.",
          },
          {
            label: "Négliger la colle de pose lors du choix d'un sol",
            explanation:
              "Un parquet certifié A+ posé avec une colle à solvants non classifiée génère des émissions importantes par la colle. Le sol et son système de pose forment un ensemble : les deux doivent être A+.",
          },
          {
            label: "Confondre 'naturel' et 'non émissif'",
            explanation:
              "Les matériaux naturels ne sont pas automatiquement à faibles émissions. L'huile de lin, les terpènes du bois, certaines résines naturelles sont des composés volatils. Le critère fiable reste le niveau d'émission mesuré (label A+), pas l'origine du matériau.",
          },
          {
            label: "Emménager immédiatement après une rénovation",
            explanation:
              "Les émissions de COV sont maximales les premières semaines post-travaux. Une chambre rénovée devrait rester vide et ventilée pendant 4 à 6 semaines avant d'être réoccupée. Pour une chambre de bébé : 6 à 8 semaines minimum.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les matériaux à faibles émissions"
        items={[
          {
            question: "Comment vérifier le label A+ d'un produit en ligne ?",
            answer:
              "Sur les fiches produit des sites e-commerce sérieux, le label A+/A/B/C est généralement mentionné dans les caractéristiques techniques. Si l'information est absente, cherchez le nom du produit + 'fiche technique' ou 'fiche de données de sécurité' pour accéder au document du fabricant. En magasin, le label est obligatoirement présent sur l'emballage.",
          },
          {
            question: "Le bois massif est-il vraiment sans émissions ?",
            answer:
              "Le bois massif non traité émet des terpènes naturels en quantités généralement faibles. Les finitions (huiles, vernis, cires) peuvent augmenter les émissions temporairement. Parmi les bois, certains essences (pin, sapin) émettent plus de terpènes naturels que d'autres (chêne, hêtre). Globalement, le bois massif huilé A+ reste une des options les moins émissives pour les sols.",
          },
          {
            question: "Faut-il retirer tous les meubles en aggloméré de son logement ?",
            answer:
              "Non. Les meubles anciens ont déjà dégazé l'essentiel de leurs émissions. C'est surtout au moment d'un achat ou d'une rénovation qu'il faut être vigilant. Si vos meubles ont plus de 5 à 10 ans et ne dégagent pas d'odeur particulière, l'émission résiduelle est généralement faible.",
          },
          {
            question: "Quand le système d'étiquetage A+ a-t-il été mis en place en France ?",
            answer:
              "Le décret 2011-321 a rendu obligatoire l'étiquetage des émissions de COV sur les produits de construction et décoration en France. Il est entré en vigueur pour les fabricants en janvier 2012 et pour tous les produits vendus en France en septembre 2013. Les produits importés doivent également se conformer à cette réglementation pour être vendus sur le marché français.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Choisir une peinture plus saine",
            description:
              "La peinture est le matériau à faibles émissions le plus souvent acheté. Guide pratique pour lire l'étiquette et éviter les pièges.",
            href: "/materiaux-sains/peinture-plus-saine/",
          },
          {
            tag: "Air intérieur",
            title: "Polluants intérieurs et formaldéhyde",
            description:
              "Les matériaux sont la première source de formaldéhyde dans les logements. Comprendre les niveaux d'exposition et les valeurs de référence.",
            href: "/air-interieur/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover avec de bons matériaux",
            description:
              "Le choix des matériaux s'inscrit dans une stratégie globale de rénovation. Priorités, ventilation et délais de dégazage.",
            href: "/renovation-saine/",
          },
        ]}
      />
    </>
  );
}
