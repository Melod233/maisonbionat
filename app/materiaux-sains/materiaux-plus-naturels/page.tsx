import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import SituationContext from "@/components/situation/SituationContext";
import SituationPriorities from "@/components/situation/SituationPriorities";
import SituationDefer from "@/components/situation/SituationDefer";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import IssueActions from "@/components/issue/IssueActions";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Choisir des matériaux plus naturels : ce que ça veut dire et par où commencer",
  description:
    "Naturel ne veut pas forcément dire sans émissions. Comprendre les labels A+, OEKO-TEX et les vrais critères pour choisir des matériaux qui améliorent la qualité de l'air intérieur.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/materiaux-plus-naturels/",
  },
  openGraph: {
    title: "Choisir des matériaux plus naturels : ce que ça veut dire et par où commencer",
    description:
      "Naturel ne veut pas forcément dire sans émissions. Comprendre les labels A+, OEKO-TEX et les vrais critères pour choisir des matériaux qui améliorent la qualité de l'air intérieur.",
    url: "https://www.maisonbionat.fr/materiaux-sains/materiaux-plus-naturels/",
  },
};

export default function ChoisirMateriauxNaturelsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Choisir des matériaux plus naturels : ce que ça veut dire et par où commencer", href: "https://www.maisonbionat.fr/materiaux-sains/materiaux-plus-naturels/" },
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
        tag="Votre démarche"
        title="Choisir des matériaux plus naturels. Ce que ça veut dire et par quoi commencer."
        quickAnswer="Un matériau 'naturel' et un matériau 'à faibles émissions' ne sont pas la même chose. Le vrai critère pour l'air intérieur, c'est ce que le matériau émet dans l'air, pas son origine. Ce guide aide à naviguer entre labels, allégations et choix qui ont un impact réel."
        quickAnswerLabel="Dans votre situation"
        stats={[
          { value: "A+", label: "label obligatoire : émissions très faibles à 28 jours" },
          { value: "10 µg/m³", label: "valeur guide ANSES formaldéhyde : le seuil E1 n'y répond pas" },
          { value: "CMR 1B", label: "classification ANSES des phtalates du PVC" },
          { value: "2012", label: "étiquetage COV obligatoire en France depuis cette date" },
        ]}
        anchors={[
          { id: "contexte", label: "Ce que naturel veut dire" },
          { id: "priorites", label: "Où agir en premier" },
          { id: "arbitrage", label: "Arbitrage" },
          { id: "erreurs", label: "Erreurs" },
          { id: "actions", label: "Plan d'action" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <SituationContext
        id="contexte"
        sectionLabel="Ce que 'naturel' veut vraiment dire"
        title="Trois points qui clarifient un sujet souvent brouillé."
        cards={[
          {
            number: "01",
            badge: "Point critique",
            title: "Un matériau naturel peut émettre des COV.",
            description:
              "Un vernis à l'huile de lin naturelle produit des aldéhydes en séchant. Un revêtement en caoutchouc naturel émet des composés terpéniques. L'origine végétale ou minérale ne garantit pas des émissions nulles. Ce qui compte pour la qualité de l'air intérieur, c'est la mesure des émissions, pas l'origine du matériau.",
          },
          {
            number: "02",
            badge: "Le vrai critère",
            title: "A+ est le seul repère réglementaire objectif pour l'air intérieur.",
            description:
              "L'étiquetage A+/A/B/C est obligatoire depuis 2012 (décret 2011-321) sur tous les produits de revêtement vendus en France. Il mesure les émissions de 10 substances dans l'air à 28 jours après application. Une peinture minérale naturelle obtient généralement A+ ; une peinture glycéro obtient souvent C. Ce critère est vérifiable sur l'emballage.",
          },
          {
            number: "03",
            badge: "Priorité",
            title: "PVC, MDF, aggloméré : les matériaux les plus courants sont souvent les plus problématiques.",
            description:
              "Le PVC contient des phtalates classés CMR 1B par l'ANSES (cancérogènes, mutagènes, reprotoxiques) qui migrent dans la poussière. Le MDF et l'aggloméré émettent du formaldéhyde (cancérogène groupe 1, CIRC). Leurs alternatives ne sont pas toujours plus chères, mais elles demandent de savoir les identifier.",
          },
        ]}
      />

      <SituationPriorities
        id="priorites"
        sectionLabel="Où agir en premier"
        title="Les matériaux à changer, par ordre de priorité."
        subtitle="Classés selon la surface exposée et le temps passé dans la pièce."
        priorities={[
          {
            number: "01",
            title: "Sol en PVC (vinyle) : à remplacer en priorité, surtout en présence d'enfants",
            description:
              "Les phtalates du PVC migrent dans la poussière domestique et s'accumulent dans l'organisme. Les enfants qui rampent ou jouent au sol sont particulièrement exposés. Alternative accessible : linoléum naturel (huile de lin + jute, sans phtalates), parquet massif huilé, carrelage.",
            timing: "en-premier",
          },
          {
            number: "02",
            title: "Peintures lors d'une rénovation : choisir A+ sans exception",
            description:
              "Les peintures conventionnelles solvantées sont en classe C. Choisir A+ (acrylique à l'eau) est accessible et souvent au même prix. Pour les pièces sensibles (chambre, chambre d'enfant), la peinture à la chaux ou à l'argile émet moins de 1 g/L de COV et régule naturellement l'humidité.",
            timing: "en-premier",
          },
          {
            number: "03",
            title: "Mobilier neuf en chambre : préférer bois massif ou norme E0",
            description:
              "Le MDF et l'aggloméré standard (norme E1) émettent du formaldéhyde bien au-dessus des recommandations ANSES (10 µg/m³). Pour une chambre où l'on dort 8 heures, le bois massif ou la seconde main (émissions quasi nulles après 3 ans) sont les meilleures options. En neuf : chercher E0 ou CARB Phase 2.",
            timing: "ensuite",
          },
          {
            number: "04",
            title: "Colles et enduits : vérifier le label EC1 ou A+",
            description:
              "Les colles de parquet et les enduits de finition sont des sources importantes de COV souvent oubliées. Le label EC1 garantit une colle sans solvant, sans amine, sans isocyanate. Le label A+ s'applique aux enduits et sous-couches.",
            timing: "ensuite",
          },
          {
            number: "05",
            title: "Isolation : préférer biosourcé à l'occasion des travaux",
            description:
              "Ouate de cellulose, laine de chanvre, fibre de bois : performances thermiques comparables à la laine de verre, avec une meilleure régulation de l'humidité ambiante. Éligibles MaPrimeRénov'. Une fois posée et protégée, l'isolation n'est généralement pas en contact direct avec l'air intérieur.",
            timing: "quand-possible",
          },
          {
            number: "06",
            title: "Papier peint et textiles : vérifier OEKO-TEX Standard 100",
            description:
              "Pour les papiers peints : préférer l'intissé cellulose avec colle d'amidon végétal. Pour les textiles (rideaux, tapis, literie) : la certification OEKO-TEX Standard 100 garantit l'absence de substances nocives sur chaque composant. Éviter le papier peint vinylique.",
            timing: "quand-possible",
          },
        ]}
      />

      <SituationDefer
        id="arbitrage"
        sectionLabel="Arbitrage"
        title="Ce qui ne peut pas attendre, et ce qui peut."
        urgentLabel="Ne pas remettre"
        deferLabel="Peut attendre"
        urgent={[
          {
            label: "Sol vinyle PVC en chambre d'enfant",
            detail:
              "Priorité absolue si des enfants rampent ou jouent au sol. Phtalates CMR au contact direct. Alternative : linoléum naturel, parquet, carrelage.",
          },
          {
            label: "Choix des peintures avant une rénovation",
            detail:
              "Ne pas choisir la peinture après le démarrage des travaux. Les produits A+ doivent être commandés en amont : ils ne sont pas toujours disponibles en grande surface.",
          },
          {
            label: "Mobilier neuf en MDF dans une chambre",
            detail:
              "Si vous achetez de nouveaux meubles de chambre, éviter le MDF/aggloméré ou chercher E0. Sinon, la seconde main est la meilleure option.",
          },
        ]}
        defer={[
          {
            label: "Les peintures existantes",
            detail:
              "Si les murs ont été peints il y a plus de 3 ans, les émissions sont quasi nulles. Inutile de repeindre uniquement pour ça.",
          },
          {
            label: "L'isolation",
            detail:
              "Sauf rénovation en cours, l'isolation n'est pas à changer en urgence. Une fois posée et protégée, elle ne pollue pas l'air intérieur.",
          },
          {
            label: "Les meubles du salon existants",
            detail:
              "Sauf émission continue détectable, les meubles anciens n'émettent quasiment plus rien. Prioriser le mobilier de chambre neuf.",
          },
          {
            label: "Textiles et décoration",
            detail:
              "OEKO-TEX est un bon critère à l'achat, mais l'impact sur l'air est faible comparé aux sols et aux meubles. À prendre en compte à chaque renouvellement.",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les confusions et erreurs fréquentes sur les matériaux naturels."
        errors={[
          {
            label: "Confondre 'naturel' et 'sans émissions'",
            explanation:
              "Un vernis à l'huile de lin, un enduit à la cire naturelle : ce sont des matériaux naturels qui émettent des COV lors du séchage. Le label A+ reste le critère de référence pour la qualité de l'air, indépendamment de l'origine du matériau.",
          },
          {
            label: "Se fier uniquement au label E1 pour les meubles",
            explanation:
              "Le seuil E1 (formaldéhyde < 124 µg/m³) est bien au-dessus des 10 µg/m³ recommandés par l'ANSES. Un meuble 'conforme E1' peut émettre jusqu'à 12 fois la valeur guide sanitaire. Chercher E0 ou CARB Phase 2 pour les espaces de sommeil.",
          },
          {
            label: "Croire que le linoléum et le sol vinyle sont la même chose",
            explanation:
              "Le linoléum naturel est composé d'huile de lin, farine de bois et jute : biodégradable, sans phtalates. Le sol vinyle (PVC) contient des plastifiants phtalates CMR. Même aspect visuel possible, composition radicalement différente. Vérifier la fiche technique, pas le visuel.",
          },
          {
            label: "Acheter des meubles neufs en bois massif alors que la seconde main fait mieux",
            explanation:
              "Les meubles d'occasion de plus de 5 ans n'émettent plus de formaldéhyde, même s'ils sont en aggloméré. La seconde main est souvent la meilleure solution : pas de dégazage, coût réduit, qualité souvent supérieure au neuf entrée de gamme.",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Passer à l'action : à l'achat et lors d'une rénovation."
        immediateLabel="Lors de l'achat"
        structuralLabel="Lors d'une rénovation"
        immediate={[
          {
            label: "Vérifier le label A+ sur l'emballage de tout produit de revêtement",
            description:
              "Obligatoire depuis 2012. Si l'emballage ne l'indique pas ou indique B ou C, ne pas acheter pour une pièce à vie ou une chambre.",
            effort: "Gratuit",
          },
          {
            label: "Choisir linoléum naturel plutôt que sol vinyle",
            description:
              "Prix comparable (15 à 35 €/m² posé), zéro phtalate, biodégradable. Vérifier la mention 'linoléum' dans la fiche technique : même aspect que le vinyle, composition radicalement différente.",
            effort: "15–35 €/m² posé",
          },
          {
            label: "Éviter le MDF/aggloméré pour les meubles de chambre",
            description:
              "En neuf : chercher bois massif, panneaux E0 ou CARB Phase 2. En seconde main : tout meuble de plus de 5 ans convient, quelle que soit la composition.",
            effort: "Choix à l'achat",
          },
          {
            label: "Chercher OEKO-TEX sur les textiles de chambre",
            description:
              "Pour rideaux, tapis, literie : le label OEKO-TEX Standard 100 figure sur l'étiquette avec un numéro de certification vérifiable en ligne.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Commander les peintures A+ et colles EC1 avant le chantier",
            description:
              "Ces produits sont moins disponibles en grande surface. Identifier les références et les commander en amont pour ne pas faire de compromis le jour J.",
            effort: "Anticipation",
          },
          {
            label: "Tester une peinture à la chaux ou à l'argile dans une pièce sensible",
            description:
              "Avant toute application générale, tester dans une chambre ou une pièce à vie. Ces peintures émettent moins de 1 g/L de COV, régulent l'humidité et sont naturellement antifongiques.",
            effort: "20–50 €/L",
          },
          {
            label: "Favoriser les isolants biosourcés à l'occasion des travaux",
            description:
              "Ouate de cellulose (combles, coût comparable à laine de verre avec aides), laine de chanvre (murs), fibre de bois (toiture). Éligibles MaPrimeRénov' et éco-PTZ.",
            effort: "Variable, aides disponibles",
          },
          {
            label: "Privilégier la seconde main pour le mobilier de chambre",
            description:
              "3 à 5 fois moins cher, émissions nulles, souvent meilleure qualité de construction. Une commode des années 80 en bois massif est plus saine qu'un meuble neuf en aggloméré E1.",
            effort: "Moins cher que le neuf",
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
              "Le système d'étiquetage A+/A/B/C en détail : ce qu'il mesure, ce qu'il ne mesure pas, et les labels complémentaires.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Choisir une peinture plus saine",
            description:
              "Peintures A+, peintures naturelles, alternatives minérales : comprendre les différences et faire les bons choix selon la pièce.",
            href: "/materiaux-sains/peinture-plus-saine/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover une maison plus sainement",
            description:
              "Ordre des travaux, délais de dégazage, diagnostics obligatoires : les décisions qui changent le résultat final.",
            href: "/renovation-saine/renover-plus-sainement/",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les matériaux naturels"
        items={[
          {
            question: "Une peinture à la chaux est-elle nécessairement meilleure qu'une peinture acrylique A+ ?",
            answer:
              "Pas forcément en termes d'émissions : une peinture acrylique A+ de qualité émet aussi très peu. La peinture à la chaux va plus loin : meilleure régulation de l'humidité (respirance), pH naturellement antifongique, durabilité accrue. Elle est recommandée pour les maisons anciennes, les murs humides et les pièces sensibles. Pour le reste, un A+ acrylique est un bon choix accessible.",
          },
          {
            question: "Comment reconnaître un vrai linoléum d'un sol vinyle ?",
            answer:
              "La fiche technique est la référence. Le linoléum naturel (marques comme Marmoleum/Forbo) indique sa composition : huile de lin, farine de bois, résine, jute, pigments naturels. Un sol vinyle indique 'PVC' ou 'vinyle'. Visuellement, ils peuvent être identiques. Si le vendeur ne peut pas fournir la fiche technique, demandez-la au fabricant.",
          },
          {
            question: "Peut-on peindre directement sur un mur déjà peint à la peinture glycéro ?",
            answer:
              "Oui, si le mur est bien préparé : ponçage léger pour créer une accroche, dégraissage, puis couche primaire d'accrochage adaptée. Il n'est pas nécessaire d'enlever toute l'ancienne peinture. Une peinture A+ à l'eau peut s'appliquer par-dessus avec le bon primaire.",
          },
          {
            question: "Qu'est-ce que l'Écolabel européen apporte de plus que le label A+ ?",
            answer:
              "Le A+ mesure uniquement les émissions de COV. L'Écolabel européen (fleur bleue) va plus loin : il contrôle le cycle de vie complet du produit, exclut certaines substances dangereuses, et fixe des critères sur les teneurs en formaldéhyde (moins de 10 mg/kg de produit) et les COV totaux. C'est un label plus exigeant, mais les deux ne s'excluent pas.",
          },
        ]}
      />
    </>
  );
}
