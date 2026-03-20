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
  title: "Comment bien aérer sa maison au quotidien : technique, fréquence et pièces",
  description:
    "Aérer correctement sa maison, c'est 10 minutes matin et soir, fenêtres en opposition. Découvrez la technique efficace selon les pièces, les saisons et les moments clés.",
  alternates: { canonical: "https://www.maisonbionat.fr/air-interieur/bien-aerer-maison/" },
  openGraph: {
    title: "Comment bien aérer sa maison au quotidien : technique, fréquence et pièces",
    description:
      "Aérer correctement sa maison, c'est 10 minutes matin et soir, fenêtres en opposition. Découvrez la technique efficace selon les pièces, les saisons et les moments clés.",
    url: "https://www.maisonbionat.fr/air-interieur/bien-aerer-maison/",
  },
};

export default function BienAererMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Comment bien aérer sa maison au quotidien : technique, fréquence et pièces", href: "https://www.maisonbionat.fr/air-interieur/bien-aerer-maison/" },
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
        tag="Guide pratique"
        title="Bien aérer sa maison : la méthode efficace, pas juste entrouvrir une fenêtre."
        quickAnswer="Aérer correctement, c'est créer un courant d'air traversant pendant 10 minutes, deux fois par jour. Ouvrir une seule fenêtre renouvelle peu l'air du logement. La technique, le moment et la durée varient selon les pièces et les saisons, mais le principe reste simple et accessible à tous."
        stats={[
          { value: "10 min", label: "durée minimale recommandée, matin et soir, fenêtres en opposition" },
          { value: "2×/jour", label: "fréquence minimale d'aération pour maintenir une qualité d'air correcte" },
          { value: "5–10×", label: "plus pollué : l'air intérieur par rapport à l'extérieur selon l'ANSES" },
          { value: "12 L", label: "de vapeur d'eau produite par jour par une famille de 4 personnes" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Ce que l'aération fait réellement" },
          { id: "signes", label: "Les moments où aérer est indispensable" },
          { id: "causes", label: "Pourquoi la plupart des gens n'aèrent pas assez bien" },
          { id: "actions", label: "La technique d'aération efficace" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Ce que l'aération fait réellement"
        title="Aérer, c'est diluer : comprendre ce qui se passe réellement"
        description="Aérer n'élimine pas les sources de pollution, mais dilue les concentrations en polluants dans l'air ambiant. En 10 minutes de courant d'air traversant, on peut renouveler une grande partie de l'air d'une pièce et faire chuter significativement les concentrations de CO2, de vapeur et de composés organiques volatils."
        variants={[
          {
            indicator: "Dilution des polluants",
            name: "L'aération réduit les concentrations, pas les sources",
            description:
              "Un meuble neuf en MDF continue d'émettre du formaldéhyde après l'aération. Les produits ménagers continuent d'être présents sur les surfaces. Ce que l'aération fait, c'est diluer les concentrations dans le volume d'air de la pièce en introduisant de l'air extérieur plus propre. L'effet est immédiat et mesurable, mais temporaire si la source reste active.",
          },
          {
            indicator: "Renouvellement de l'air",
            name: "Un courant traversant est cinq fois plus efficace qu'une fenêtre seule",
            description:
              "Ouvrir une seule fenêtre crée peu de mouvement d'air au centre de la pièce. Le renouvellement se fait essentiellement près de l'ouverture. En ouvrant deux fenêtres situées sur des murs opposés (ou une fenêtre et une porte intérieure), on crée un flux traversant qui balaie toute la pièce en quelques minutes.",
          },
          {
            indicator: "Contrôle de l'humidité",
            name: "L'aération est le premier outil contre l'humidité excessive",
            description:
              "Une famille de 4 personnes produit environ 12 litres de vapeur d'eau par jour (respiration, douche, cuisine, linge). La VMC évacue le fond, mais l'aération est indispensable pour gérer les pics. Sans aération, l'humidité s'accumule, condense sur les surfaces froides et favorise les moisissures.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Quand aérer est le plus important"
        title="Les moments où l'aération est indispensable dans le logement"
        subtitle="Ces situations produisent des pics de polluants ou de vapeur que la VMC seule ne peut pas gérer assez rapidement."
        signs={[
          {
            label: "Le matin, dans la chambre",
            description:
              "Pendant le sommeil, le CO2 et la vapeur s'accumulent dans une pièce fermée. Ouvrir la fenêtre de chambre dès le matin, même 5 à 10 minutes, renouvelle l'air et réduit les concentrations nocturnes. C'est le geste le plus systématique à adopter.",
            severity: "modéré",
          },
          {
            label: "Pendant et après la cuisson",
            description:
              "La cuisson au gaz produit du dioxyde d'azote (NO2) et des particules fines. Les cuissons à haute température (friture, grillade) émettent également des composés organiques. Ouvrir la fenêtre de cuisine pendant la cuisson, même en hiver, réduit significativement ces concentrations.",
            severity: "critique",
          },
          {
            label: "Après la douche ou le bain",
            description:
              "Une douche de 5 à 10 minutes produit plusieurs litres de vapeur. Aérer 5 à 10 minutes après réduire l'humidité ambiante et prévient la condensation sur les parois. Si la salle de bain n'a pas de fenêtre, s'assurer que la bouche VMC fonctionne correctement.",
            severity: "modéré",
          },
          {
            label: "Après un nettoyage avec des produits",
            description:
              "Les produits ménagers, même les formulations dites naturelles, émettent des composés organiques volatils lors de leur application. Aérer après le nettoyage, et si possible pendant, dilue ces émissions avant qu'elles ne s'accumulent.",
            severity: "modéré",
          },
          {
            label: "Lors de l'installation d'un meuble neuf ou de travaux de peinture",
            description:
              "Les meubles en panneaux de bois aggloméré et les peintures fraîches émettent davantage de formaldéhyde et de COV dans les premiers jours et semaines. Une aération renforcée pendant cette période est particulièrement utile.",
            severity: "modéré",
          },
          {
            label: "Quand l'air semble lourd ou que des odeurs persistent",
            description:
              "Une sensation d'air vicié, des odeurs diffuses ou des maux de tête en intérieur sont des signaux que le CO2 ou les polluants ont dépassé un seuil de confort. Ce n'est pas toujours mesurable sans capteur, mais ces signaux subjectifs sont fiables.",
            severity: "léger",
          },
        ]}
        footerNote="En cas d'allergie aux pollens, limiter l'aération aux heures où les concentrations extérieures sont faibles (tôt le matin ou après la pluie). Consulter les relevés locaux pendant la saison pollinique."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi ça ne fonctionne pas"
        title="Pourquoi la plupart des gens n'aèrent pas assez bien"
        subtitle="Ce n'est pas une question de mauvaise volonté : les obstacles sont concrets et souvent mal identifiés."
        causes={[
          {
            number: "01",
            cause: "Ouvrir une seule fenêtre en croyant que ça suffit",
            explanation:
              "Une fenêtre entrouverte crée peu de mouvement d'air. L'air se renouvelle essentiellement dans la zone proche de l'ouverture. Le reste de la pièce reste presque statique. La technique du courant d'air traversant (deux ouvertures en opposition) est bien plus efficace pour le même temps d'aération.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Ne pas aérer en hiver pour préserver la chaleur",
            explanation:
              "La perte thermique d'une aération de 10 minutes est réelle mais limitée si le chauffage est coupé pendant ce temps. En revanche, un air vicié et chargé en humidité toute la journée a un impact sur le confort, la santé et même la dégradation du bâti. L'aération hivernale doit être courte mais régulière.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Confondre VMC fonctionnelle et absence de besoin d'aérer",
            explanation:
              "Une VMC bien entretenue ne dispense pas d'aérer. Elle gère le débit de base, pas les pics. Après une douche ou pendant la cuisson, l'aération reste nécessaire même avec une VMC qui fonctionne parfaitement.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Aérer aux mauvaises heures en ville",
            explanation:
              "Ouvrir les fenêtres côté rue aux heures de pointe (7h-9h, 17h-19h) expose à des pics de NO2 et de particules fines liés au trafic. Aérer côté cour ou jardin, ou choisir des heures creuses, améliore le bilan.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Oublier les pièces sans usage quotidien",
            explanation:
              "Les chambres d'amis, débarras ou pièces peu fréquentées accumulent des polluants sans être aérées. Les meubles, revêtements et matériaux y émettent autant que dans les pièces habitées. Une aération régulière, même hebdomadaire, est utile.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="La technique d'aération efficace au quotidien"
        immediateLabel="Technique de base"
        structuralLabel="Adapter à chaque pièce"
        immediate={[
          {
            label: "Ouvrir deux fenêtres en opposition pendant 10 minutes",
            description:
              "Le principe du courant d'air traversant : ouvrir une fenêtre et une autre ouverture face à elle (autre fenêtre, porte intérieure vers une autre pièce ventilée). L'air balaie toute la pièce en quelques minutes.",
            effort: "Gratuit, 10 min matin et soir",
          },
          {
            label: "Couper le chauffage pendant l'aération en hiver",
            description:
              "Fermer les radiateurs ou baisser le thermostat avant d'ouvrir les fenêtres limite la perte thermique. Les murs conservent la chaleur accumulée et la pièce se réchauffe rapidement après fermeture.",
            effort: "Réflexe à adopter en hiver",
          },
          {
            label: "Adapter la durée à la saison",
            description:
              "En hiver : 5 à 10 minutes suffisent, l'air froid entre et dilue rapidement les polluants. En été : 15 à 20 minutes si la température extérieure le permet, de préférence le matin ou le soir pour éviter la chaleur. L'essentiel est la régularité quotidienne.",
            effort: "5 à 20 min selon la saison",
          },
          {
            label: "Aérer les chambres dès le réveil",
            description:
              "C'est le geste le plus simple et le plus systématique. Ouvrir la fenêtre de chambre en se levant, même 5 minutes, chasse le CO2 et la vapeur accumulés pendant la nuit.",
            effort: "5 min chaque matin",
          },
        ]}
        structural={[
          {
            label: "Salle de bain : aérer après chaque douche",
            description:
              "5 à 10 minutes d'aération après la douche réduisent l'humidité avant qu'elle ne condense. Si la salle de bain n'a pas de fenêtre, vérifier que la bouche VMC est dégagée et fonctionnelle.",
            effort: "5 à 10 min après la douche",
          },
          {
            label: "Cuisine : aérer pendant la cuisson",
            description:
              "Ouvrir la fenêtre de cuisine pendant la cuisson, surtout au gaz ou à haute température. La hotte aspirante complète mais ne remplace pas l'aération. Si la hotte recircule l'air (sans évacuation extérieure), l'aération par la fenêtre est d'autant plus utile.",
            effort: "Pendant la cuisson",
          },
          {
            label: "Éviter l'aération par temps de fort pollen si vous êtes allergique",
            description:
              "Pendant les pics polliniques (relevés disponibles sur le réseau national de surveillance aerobiologique), limiter l'aération aux périodes de faibles concentrations : tôt le matin après la pluie, ou par vent faible côté opposé aux espaces verts.",
            effort: "Adaptation saisonnière",
          },
          {
            label: "Meubles neufs : renforcer l'aération les premières semaines",
            description:
              "Meubles en MDF, moquettes, peintures fraîches : les émissions de formaldéhyde et de COV sont les plus élevées dans les premières semaines. Aérer plus fréquemment pendant cette période et, si possible, laisser dégazer les meubles dans une pièce ventilée avant installation dans une chambre.",
            effort: "2 à 4 semaines après installation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qui ne fonctionne pas comme vous le croyez"
        errors={[
          {
            label: "Entrouvrir une seule fenêtre suffit",
            explanation:
              "Une fenêtre entrouverte renouvelle peu l'air de la pièce. Seule la zone proche de l'ouverture est réellement ventilée. Le courant d'air traversant est indispensable pour un renouvellement efficace.",
          },
          {
            label: "Aérer plus longtemps compense l'absence de VMC",
            explanation:
              "L'aération est efficace le temps où les fenêtres sont ouvertes. Dès la fermeture, les polluants et la vapeur se reconstituent. La VMC assure le renouvellement en continu : elle joue un rôle que l'aération seule ne peut pas remplir.",
          },
          {
            label: "Les plantes d'intérieur améliorent l'air autant qu'une aération",
            explanation:
              "Les études en conditions réelles montrent que les plantes ont un effet négligeable sur la qualité de l'air d'un logement ordinaire. Une aération de 10 minutes est incomparablement plus efficace.",
          },
          {
            label: "Ne pas aérer en hiver protège de la pollution extérieure",
            explanation:
              "L'air intérieur non renouvelé accumule les polluants domestiques plus vite que la pollution extérieure n'entre. Fermer les fenêtres en continu aggrave la situation. Une aération courte mais régulière reste préférable.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'aération de la maison"
        items={[
          {
            question: "Combien de fois par jour faut-il aérer sa maison ?",
            answer:
              "Deux fois par jour minimum : le matin au réveil et le soir avant de dormir. 10 minutes chaque fois, avec un courant d'air traversant. Des aérations courtes supplémentaires après la douche, pendant la cuisson ou après un nettoyage sont utiles sans être obligatoires si la VMC fonctionne bien.",
          },
          {
            question: "Faut-il aérer même en hiver ?",
            answer:
              "Oui, l'aération est nécessaire toute l'année. En hiver, 5 à 10 minutes suffisent si vous coupez le chauffage pendant ce temps. L'air froid entre rapidement et la perte thermique est limitée. Ne pas aérer en hiver aggrave l'accumulation de polluants et d'humidité.",
          },
          {
            question: "Quelle est la différence entre entrouvrir et ouvrir en grand ?",
            answer:
              "Peu de différence si vous n'avez qu'une seule fenêtre ouverte. Ce qui compte, c'est le courant d'air traversant, pas la taille de l'ouverture. Deux fenêtres en opposition légèrement ouvertes sont plus efficaces qu'une seule fenêtre ouverte en grand.",
          },
          {
            question: "Peut-on aérer quand il y a des pics de pollution extérieure ?",
            answer:
              "En cas d'épisode de pollution extérieure (particules fines, ozone), limiter l'aération aux moments où les concentrations extérieures sont plus faibles, généralement la nuit ou tôt le matin. Les épisodes de pollution intense et durables sont relativement rares. En dehors de ces épisodes, l'air extérieur est généralement moins pollué que l'air intérieur.",
          },
          {
            question: "Est-ce que j'ai besoin d'aérer si j'ai une VMC double flux ?",
            answer:
              "Oui, même avec une VMC double flux. Celle-ci assure un renouvellement d'air de très bonne qualité en continu, mais son débit reste calibré pour un usage courant. L'aération reste utile après une douche, pendant la cuisson ou lors de pics d'émission ponctuels.",
          },
          {
            question: "Comment aérer un appartement sans fenêtres en opposition ?",
            answer:
              "Si toutes les fenêtres donnent du même côté, ouvrez également les portes intérieures entre les pièces. L'air peut circuler via le couloir et les pièces adjacentes. Si cela reste insuffisant, assurez-vous que la VMC fonctionne correctement et compensez par une aération plus fréquente, même courte.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Aération ou ventilation : quelle différence ?",
            description:
              "Comprendre les rôles respectifs de l'aération manuelle et de la VMC, et pourquoi les deux sont nécessaires.",
            href: "/air-interieur/aeration-ou-ventilation/",
          },
          {
            tag: "Air intérieur",
            title: "Améliorer l'air dans sa maison",
            description:
              "Stratégie complète pour réduire les polluants : aération, ventilation, choix de matériaux et gestes du quotidien.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Réduire l'humidité dans sa maison",
            description:
              "L'aération est le premier geste contre l'humidité excessive. Ce guide détaille les autres leviers pour maintenir un taux d'hygrométrie entre 40 et 60 %.",
            href: "/humidite-maison/reduire-humidite-maison/",
          },
        ]}
      />
    </>
  );
}
