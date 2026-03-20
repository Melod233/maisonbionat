import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import RoomPriorities from "@/components/room/RoomPriorities";
import RoomChecklist from "@/components/room/RoomChecklist";
import RoomImpact from "@/components/room/RoomImpact";
import RoomActionsGrid from "@/components/room/RoomActionsGrid";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Garage plus sain : monoxyde de carbone, solvants et étanchéité",
  description:
    "Un garage attenant au logement peut laisser passer des polluants dangereux. Monoxyde de carbone, solvants, pesticides : comprendre les risques et les solutions.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/garage-sain/",
  },
  openGraph: {
    title: "Garage plus sain : monoxyde de carbone, solvants et étanchéité",
    description:
      "Un garage attenant au logement peut laisser passer des polluants dangereux. Monoxyde de carbone, solvants, pesticides : comprendre les risques et les solutions.",
    url: "https://www.maisonbionat.fr/piece-par-piece/garage-sain/",
  },
};

export default function GaragePlusSainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    { name: "Garage plus sain : monoxyde de carbone, solvants et étanchéité", href: "https://www.maisonbionat.fr/piece-par-piece/garage-sain/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Pièce par pièce"
        parentHref="/piece-par-piece/"
        tag="Garage"
        title="La source de pollution que personne ne surveille."
        quickAnswer="Un garage attenant peut laisser passer monoxyde de carbone, vapeurs de solvants et résidus de pesticides vers le logement, via des passages d'air invisibles. Incolore, inodore, silencieux."
        stats={[
          { value: "CO", label: "incolore, inodore, potentiellement mortel" },
          { value: "50 ppm", label: "seuil d'alerte CO (exposition 8h)" },
          { value: "1 min", label: "démarrage moteur suffit à créer un pic" },
          { value: "0", label: "jamais de moteur allumé dans un garage fermé" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités du garage attenant"
        priorities={[
          {
            number: "01",
            action: "Ne jamais démarrer le moteur portes fermées",
            description:
              "Une minute de moteur tournant dans un garage fermé produit des concentrations de CO potentiellement létales. Ouvrez toujours la porte du garage avant de démarrer. Ne laissez jamais tourner le moteur pour 'chauffer' la voiture à l'intérieur.",
            impact: "critique",
          },
          {
            number: "02",
            action: "Assurer l'étanchéité de la porte de communication",
            description:
              "La porte entre le garage et le logement est le premier vecteur de transfert de polluants. Elle doit être coupe-feu et étanche : joint de bas de porte, joints de périmètre, pas de passage d'air visible. C'est aussi une obligation réglementaire dans de nombreux cas.",
            impact: "critique",
          },
          {
            number: "03",
            action: "Stocker solvants et produits chimiques dans des contenants fermés",
            description:
              "Peintures, white-spirit, solvants, pesticides, herbicides : même fermés, leurs vapeurs peuvent s'accumuler dans un espace peu ventilé. Rangez-les dans une boîte hermétique ou une armoire fermée, à l'écart de toute source de chaleur.",
            impact: "fort",
          },
          {
            number: "04",
            action: "Ventiler le garage indépendamment du logement",
            description:
              "La ventilation du garage ne doit jamais être raccordée au circuit VMC du logement. Un extracteur mural indépendant ou une simple ouverture permanente protégée sur mur extérieur suffit pour maintenir un renouvellement d'air minimal.",
            impact: "fort",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier dans le garage"
        subtitle="Le garage se vérifie moins souvent mais les enjeux sont plus graves."
        items={[
          {
            label: "Ouvrir la porte du garage avant tout démarrage",
            detail: "Sans exception. Même pour une manœuvre de quelques secondes.",
            frequency: "quotidien",
          },
          {
            label: "Vérifier que les contenants de solvants sont bien fermés",
            detail: "Un bouchon mal revissé suffit à créer une émission permanente de vapeurs dans le garage.",
            frequency: "hebdo",
          },
          {
            label: "Vérifier l'intégrité du joint de bas de porte de communication",
            detail: "Passez la main en bas de la porte : aucun passage d'air ne doit être perceptible.",
            frequency: "mensuel",
          },
          {
            label: "Contrôler les joints de périmètre de la porte de communication",
            detail: "Joints compressibles sur les 4 côtés. À remplacer si durs, fissurés ou décollés.",
            frequency: "mensuel",
          },
          {
            label: "Vérifier le détecteur CO s'il est installé",
            detail: "Testez le bouton de test. Pile à changer annuellement. Périmé après 5 à 7 ans.",
            frequency: "mensuel",
          },
          {
            label: "Inventorier et évacuer les produits chimiques inutilisés",
            detail: "Peintures durcies, solvants anciens, pesticides périmés : déposez-les en déchetterie.",
            frequency: "ponctuel",
          },
          {
            label: "Vérifier l'absence de fuites sur le véhicule (huile, carburant)",
            detail: "Une fuite de carburant dans un garage crée une émission de benzène permanente.",
            frequency: "ponctuel",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce qui pèse le plus dans un garage attenant"
        factors={[
          {
            rank: "01",
            factor: "Monoxyde de carbone",
            statement: "Incolore, inodore, potentiellement mortel.",
            detail:
              "Le CO issu des gaz d'échappement est le risque le plus grave d'un garage attenant. À 50 ppm (seuil d'alerte pour 8h d'exposition), les symptômes apparaissent progressivement sans être identifiables. À 400 ppm, l'exposition de 3h peut être mortelle. Un détecteur CO est indispensable.",
            weight: "élevé",
          },
          {
            rank: "02",
            factor: "Vapeurs de solvants et peintures",
            statement: "COV qui migrent vers le logement via les interstices.",
            detail:
              "Les solvants (white-spirit, acétone, essence de térébenthine), peintures en cours de séchage et produits chimiques stockés émettent des COV qui s'accumulent dans un espace peu ventilé. Via les passages d'air de la porte de communication, ils atteignent le logement.",
            weight: "élevé",
          },
          {
            rank: "03",
            factor: "Pesticides et herbicides",
            statement: "Résidus sur surfaces et polluants volatils.",
            detail:
              "Les produits phytosanitaires stockés dans le garage (désherbants, insecticides, fongicides) émettent des vapeurs et se déposent sur les surfaces. Chaussures et outils contaminent ensuite les sols du logement.",
            weight: "modéré",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Ouvrir la porte du garage avant chaque démarrage",
            description: "La règle absolue et non négociable. Même pour 30 secondes. Le CO s'accumule plus vite qu'on ne le pense.",
            effort: "Gratuit, habitude",
          },
          {
            label: "Ranger les solvants dans une boîte hermétique",
            description: "Une caisse en plastique avec couvercle suffis à réduire drastiquement les émissions de solvants dans l'air du garage.",
            effort: "Boîte de rangement : 10–20€",
          },
          {
            label: "Éliminer les produits chimiques périmés ou inutilisés",
            description: "Déchetterie, collecte spéciale déchets dangereux. Réduire le stock réduit directement les sources de vapeurs.",
            effort: "Gratuit (déchetterie)",
          },
          {
            label: "Vérifier le joint de bas de porte de communication",
            description: "Un joint de porte coûte moins de 20€. L'installer prend 20 minutes et réduit significativement le transfert d'air du garage vers le logement.",
            effort: "Joint : 5–20€",
          },
        ]}
        deep={[
          {
            label: "Installer un détecteur de monoxyde de carbone",
            description: "Le détecteur CO est l'équipement de sécurité indispensable pour tout garage attenant. Installez-le en hauteur, proche du passage vers le logement. À renouveler tous les 5 à 7 ans.",
            effort: "30–80€",
          },
          {
            label: "Remplacer la porte de communication par une porte coupe-feu étanche",
            description: "Si la porte entre le garage et le logement est standard (bois creux, sans joints), elle ne protège ni du CO ni des fumées en cas d'incendie. Une porte coupe-feu EI30 avec joints est la solution réglementaire et sanitaire.",
            effort: "300–800€ + pose",
          },
          {
            label: "Installer un extracteur d'air mural indépendant",
            description: "Un extracteur mural commandé manuellement ou par minuterie permet de ventiler le garage après utilisation du véhicule, sans raccordement au circuit VMC du logement.",
            effort: "50–200€ + pose",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs graves dans le garage"
        errors={[
          {
            label: "Laisser chauffer la voiture au ralenti dans le garage",
            explanation:
              "Même avec la porte du garage ouverte, laisser tourner le moteur sans surveillance accumule du CO. Certaines personnes laissent tourner le moteur pour dégivrer ou chauffer l'habitacle : c'est l'une des causes les plus fréquentes d'intoxication au CO à domicile.",
          },
          {
            label: "Raccorder la ventilation du garage à la VMC du logement",
            explanation:
              "Si la VMC du garage est raccordée au même circuit que le logement, les polluants du garage (CO, solvants) peuvent être directement redistribués dans les pièces. La ventilation du garage doit toujours être indépendante et évaquer vers l'extérieur.",
          },
          {
            label: "Stocker les bidons de solvants et peintures ouverts",
            explanation:
              "Un bidon de white-spirit ou une boîte de peinture mal refermée émet en continu des COV dans l'air du garage. Sur une semaine, ces vapeurs s'accumulent et migrent vers le logement. Toujours refermer hermétiquement après utilisation.",
          },
          {
            label: "Croire que l'odeur de gaz d'échappement disparaît vite",
            explanation:
              "Le monoxyde de carbone est inodore : vous ne le sentez pas. L'odeur que vous percevez après démarrage est d'autres composés (hydrocarbures). Leur disparition rapide ne signifie pas que le CO a disparu.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le garage"
        items={[
          {
            question: "Un détecteur de CO est-il vraiment nécessaire dans un garage attenant ?",
            answer:
              "Oui. Le monoxyde de carbone est incolore et inodore : vous ne pouvez pas le détecter sans équipement. Un détecteur CO placé dans le garage ou à l'entrée du logement est l'investissement de sécurité le plus important pour un garage attenant. Des modèles efficaces existent à partir de 30€.",
          },
          {
            question: "Ma porte de garage est en bois : est-ce suffisant ?",
            answer:
              "Une porte de communication en bois standard n'est généralement pas étanche aux gaz ni certifiée coupe-feu. Pour protéger efficacement le logement, la porte doit être coupe-feu (EI30 minimum), équipée de joints compressibles sur tout son périmètre et d'un joint de bas de porte. Vérifiez votre règlement de copropriété ou PLU local.",
          },
          {
            question: "Peut-on stocker de l'essence ou du fioul dans le garage ?",
            answer:
              "La réglementation française limite les quantités stockables à domicile (max 60L pour les carburants non stockés en réservoir fixe). Indépendamment de la légalité, l'essence stockée dans un bidon émet continuellement des vapeurs de benzène dans l'air du garage. Minimisez les quantités et stockez dans des contenants agréés hermétiques.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "Polluants intérieurs et sources",
            description: "Le garage est une source de polluants qui peut affecter tout le logement. Comprendre la circulation des polluants.",
            href: "/air-interieur/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits chimiques et solvants",
            description: "Les mêmes règles de stockage et d'utilisation s'appliquent aux produits du ménage et aux produits de bricolage.",
            href: "/produits-et-habitudes/",
          },
          {
            tag: "Rénovation saine",
            title: "Étanchéité et ventilation",
            description: "L'étanchéité du garage est aussi un enjeu de rénovation. Les matériaux et techniques pour isoler efficacement.",
            href: "/renovation-saine/",
          },
        ]}
      />
    </>
  );
}
