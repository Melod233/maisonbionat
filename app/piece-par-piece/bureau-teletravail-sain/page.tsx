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
  title: "Bureau télétravail sain : air, lumière et leviers concrets",
  description:
    "Plusieurs heures par jour dans une petite pièce fermée : la qualité de l'air et la lumière y conditionnent la concentration. Priorités et corrections simples pour un bureau télétravail vraiment sain.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/bureau-teletravail-sain/",
  },
  openGraph: {
    title: "Bureau télétravail sain : air, lumière et leviers concrets",
    description:
      "Plusieurs heures par jour dans une petite pièce fermée : la qualité de l'air et la lumière y conditionnent la concentration. Priorités et corrections simples pour un bureau télétravail vraiment sain.",
    url: "https://www.maisonbionat.fr/piece-par-piece/bureau-teletravail-sain/",
  },
};

export default function BureauTeletravailSainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    {
      name: "Bureau télétravail sain : air, lumière et leviers concrets",
      href: "https://www.maisonbionat.fr/piece-par-piece/bureau-teletravail-sain/",
    },
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
        tag="Bureau home-office"
        title="Plusieurs heures par jour dans une petite pièce fermée. C'est l'enjeu du bureau télétravail."
        quickAnswer="Le bureau de télétravail cumule des contraintes spécifiques. Pièce souvent petite, occupée plusieurs heures d'affilée par une seule personne, parfois équipée de meubles récents en panneaux, d'une imprimante, d'électronique chaude. La concentration en CO2 monte vite (souvent 1500-2000 ppm en quelques heures sans aération), avec un effet documenté sur la concentration et la prise de décision dès 1000 ppm. La lumière naturelle, quand elle existe, fait une différence majeure sur la fatigue visuelle. Les bons leviers sont peu coûteux : aération régulière, capteur CO2 pour piloter, lumière naturelle privilégiée, choix de mobilier A+ ou bois massif, distance avec l'imprimante."
        stats={[
          { value: "1000 ppm", label: "seuil CO2 au-delà duquel la concentration au travail commence à se dégrader" },
          { value: "500 lux", label: "éclairement minimum recommandé pour le travail sur écran" },
          { value: "50-70 cm", label: "distance idéale entre les yeux et l'écran" },
          { value: "8 h", label: "exposition quotidienne typique en télétravail à plein temps" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités du bureau télétravail"
        priorities={[
          {
            number: "01",
            action: "Aérer toutes les 2 heures pendant 5 à 10 minutes",
            description:
              "Une personne seule en pièce fermée fait monter le CO2 à 1500-2000 ppm en 2 à 3 heures. Une aération courte mais répétée toutes les 2 heures ramène l'air sous 1000 ppm et restaure les conditions de concentration. Plus efficace que d'aérer une fois longuement.",
            impact: "critique",
          },
          {
            number: "02",
            action: "Privilégier la lumière naturelle, écran perpendiculaire à la fenêtre",
            description:
              "La lumière naturelle latérale, sans reflet sur l'écran, est de loin le meilleur éclairage pour limiter la fatigue visuelle. Idéal : bureau placé perpendiculairement à la fenêtre, avec un complément LED neutre (4000-5000 K, 500 lux min) pour les jours sombres et le soir.",
            impact: "fort",
          },
          {
            number: "03",
            action: "Mettre l'imprimante hors de la pièce ou la confiner",
            description:
              "Les imprimantes laser émettent des particules ultrafines et de l'ozone à chaque impression. À ne pas placer à proximité immédiate du poste de travail. Idéalement dans une autre pièce ventilée, ou sur une étagère éloignée avec aération brève après usage.",
            impact: "fort",
          },
          {
            number: "04",
            action: "Choisir un mobilier A+ ou en bois massif",
            description:
              "Bureau, étagères, caissons : si récents, viser l'étiquetage A+ et idéalement une certification environnementale. Pour les meubles non couverts par l'étiquetage, le bois massif reste l'option la moins émissive. Faire dégazer un meuble neuf 2 à 4 semaines dans une autre pièce avant installation.",
            impact: "moyen",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier dans un bureau télétravail"
        subtitle="Quelques contrôles réguliers évitent l'accumulation silencieuse de polluants et de fatigue."
        items={[
          {
            label: "Ouvrir la fenêtre 5-10 minutes toutes les 2 heures",
            detail: "Plus efficace qu'une aération unique en milieu de journée. Crée une routine alignée sur les pauses naturelles.",
            frequency: "quotidien",
          },
          {
            label: "Vérifier que la VMC dessert bien la pièce",
            detail: "Si le bureau est dans une chambre transformée ou une pièce annexe, la bouche d'extraction peut être absente ou bouchée.",
            frequency: "mensuel",
          },
          {
            label: "Mesurer le CO2 ponctuellement avec un capteur NDIR",
            detail: "Un appareil mobile à 80-200 € permet de calibrer la fréquence d'aération nécessaire pour rester sous 1000 ppm.",
            frequency: "ponctuel",
          },
          {
            label: "Nettoyer l'écran, le clavier et le bureau",
            detail: "Surfaces qui concentrent poussières et bactéries. Nettoyage hebdomadaire avec chiffon micro-fibre légèrement humide.",
            frequency: "hebdo",
          },
          {
            label: "Aérer après chaque session d'impression laser intensive",
            detail: "Particules ultrafines et ozone émis par les imprimantes laser, à diluer rapidement.",
            frequency: "ponctuel",
          },
          {
            label: "Régler l'éclairage selon l'heure et la météo",
            detail: "Cible : 500 lux minimum sur le plan de travail, sans reflet sur l'écran. Lampe de bureau avec gradateur recommandée.",
            frequency: "quotidien",
          },
          {
            label: "Vérifier l'humidité (40-60 %) en hiver",
            detail: "Le chauffage assèche l'air. Sous 35 % HR : irritation oculaire, fatigue accrue. Hygromètre à 10-25 €.",
            frequency: "mensuel",
          },
          {
            label: "Faire une pause active toutes les heures",
            detail: "Lever, marche, regard vers la fenêtre 20 secondes : limite fatigue visuelle et statique. Pas de coût.",
            frequency: "quotidien",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce qui pèse le plus dans un bureau télétravail"
        factors={[
          {
            rank: "01",
            factor: "Confinement et CO2",
            statement: "La pièce fermée occupée plusieurs heures concentre le CO2 et tous les polluants associés.",
            detail:
              "Une personne seule dans un bureau de 8-12 m² fermé atteint 1500-2000 ppm de CO2 en 2 à 3 heures sans aération. À ces niveaux, des effets sur la concentration et la prise de décision sont documentés. C'est le levier le plus impactant et le moins coûteux à corriger.",
            weight: "élevé",
          },
          {
            rank: "02",
            factor: "Lumière insuffisante ou mal orientée",
            statement: "Un éclairage mal pensé fatigue durablement, sans qu'on perçoive la cause au quotidien.",
            detail:
              "Sous 500 lux ou avec des reflets sur l'écran, la fatigue visuelle s'installe et impacte la qualité du sommeil le soir. La lumière naturelle latérale, sans contre-jour, est l'optimum. Un complément LED neutre est utile pour les jours gris ou les fins de journée d'hiver.",
            weight: "élevé",
          },
          {
            rank: "03",
            factor: "Imprimante laser et électronique chaude",
            statement: "Sources locales de particules ultrafines et d'ozone, souvent à proximité immédiate.",
            detail:
              "Une imprimante laser émet des particules ultrafines et de l'ozone à chaque impression. À 30 cm du nez, l'exposition cumulée n'est pas négligeable pour un usage quotidien. Solution : éloigner ou confiner.",
            weight: "modéré",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Programmer une aération toutes les 2 heures",
            description: "Alarme téléphone si nécessaire. 5 à 10 minutes fenêtre ouverte en grand. Plus efficace qu'une seule longue ouverture.",
            effort: "Gratuit, réflexe à installer",
          },
          {
            label: "Repositionner l'écran perpendiculaire à la fenêtre",
            description: "Évite les reflets et le contre-jour. La lumière latérale est la plus confortable pour le travail sur écran.",
            effort: "Gratuit, 5 minutes",
          },
          {
            label: "Déplacer l'imprimante hors de la pièce ou loin du poste",
            description: "Dans un couloir, un placard ventilé, ou au minimum à plus de 2 mètres du nez avec aération après usage.",
            effort: "Gratuit, déplacement",
          },
          {
            label: "Vérifier la bouche VMC et la dégager si besoin",
            description: "Si le bureau est dans une pièce sans extraction directe, garder la porte entrebâillée pour permettre la circulation d'air vers la VMC du logement.",
            effort: "Gratuit, 10 minutes",
          },
        ]}
        deep={[
          {
            label: "Capteur CO2 NDIR fixe sur le bureau",
            description: "Affichage en temps réel et alarme à 1000 ppm. Crée un réflexe d'aération difficilement remplaçable. Privilégier la technologie NDIR (les capteurs MOS bas de gamme sont peu fiables sur le CO2).",
            effort: "80-200 €",
          },
          {
            label: "Lampe LED neutre 4000-5000 K avec gradateur",
            description: "Complète la lumière naturelle quand elle est insuffisante. 500 lux minimum sur le plan de travail. Éviter les LED très chaudes (3000 K) qui fatiguent davantage en travail prolongé.",
            effort: "50-150 €",
          },
          {
            label: "Mobilier A+ ou bois massif au prochain renouvellement",
            description: "Bureau et caissons en panneaux non certifiés sont une source courante de formaldéhyde. Bois massif ou mobilier certifié Écolabel européen / NF Environnement Ameublement comme cible.",
            effort: "Surcoût modéré, durabilité supérieure",
          },
          {
            label: "Hygromètre numérique à proximité",
            description: "Vérifier que l'humidité reste dans la plage 40-60 % HR, surtout en hiver où le chauffage peut faire descendre sous 30 %, source de fatigue oculaire.",
            effort: "10-25 €",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs fréquentes en bureau télétravail"
        errors={[
          {
            label: "Travailler la porte fermée pour ne pas être dérangé",
            explanation:
              "C'est précisément la situation qui fait monter le CO2 le plus vite. Si l'isolement sonore est nécessaire, prévoir une fenêtre entrebâillée ou une aération forte toutes les 2 heures. La concentration ne se gagne pas en dégradant la qualité de l'air.",
          },
          {
            label: "Imprimante laser à 30 cm de l'écran",
            explanation:
              "Configuration courante par contrainte d'espace. Les particules ultrafines et l'ozone émis à chaque impression sont alors inhalés directement. À reporter dans une autre pièce ou à au moins 2 mètres avec aération immédiate après usage.",
          },
          {
            label: "Travailler face à la fenêtre",
            explanation:
              "Le contre-jour fatigue les yeux et oblige à monter la luminosité de l'écran. La position perpendiculaire à la fenêtre, lumière naturelle de côté, est nettement plus confortable pour des sessions de plusieurs heures.",
          },
          {
            label: "Compter sur les plantes pour purifier l'air",
            explanation:
              "Comme dans toutes les pièces, l'effet est négligeable à l'échelle du bureau. Une plante peut être agréable pour le bien-être visuel, mais l'aération reste le seul levier réellement efficace sur la qualité de l'air.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le bureau de télétravail"
        items={[
          {
            question: "Faut-il un purificateur d'air dans un bureau télétravail ?",
            answer:
              "Pas en première intention. Le levier le plus efficace reste l'aération régulière, qui dilue à la fois le CO2 (qu'un purificateur ne traite pas) et les polluants. Un purificateur HEPA peut compléter dans une zone urbaine très exposée aux particules extérieures, mais il ne remplace pas l'aération. Pour le bureau standard, capteur CO2 et fenêtre ouverte suffisent.",
          },
          {
            question: "Quelle température viser dans un bureau de télétravail ?",
            answer:
              "Entre 19 et 21 °C selon le ressenti personnel et l'activité. Plus chaud fatigue rapidement et assèche davantage l'air. Plus froid concentre mais peut générer de l'inconfort pendant les visioconférences statiques. La régulation pièce par pièce permet d'adapter sans surchauffer le reste du logement.",
          },
          {
            question: "Comment savoir si mon bureau est suffisamment éclairé ?",
            answer:
              "Une application luxmètre sur smartphone donne une indication suffisante (à étalonner d'abord avec une référence connue). Cible : 500 lux minimum sur le plan de travail, sans reflet sur l'écran. Si vous ressentez de la fatigue oculaire en fin de journée alors que la luminosité de l'écran est correcte, l'éclairage ambiant est probablement insuffisant.",
          },
          {
            question: "Est-ce un problème de transformer une chambre en bureau ?",
            answer:
              "Pas nécessairement. La chambre transformée en bureau partagé hérite des mêmes priorités (aération, CO2, lumière) avec une attention supplémentaire à la coupure entre travail et sommeil : éteindre l'écran et fermer le poste en fin de journée, idéalement dissimuler le matériel. Si la pièce sert aussi de chambre, la qualité de l'air doit être prioritaire dans les arbitrages mobilier.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "CO2 dans la maison : indicateur de confinement",
            description: "Le CO2 est l'indicateur le plus pertinent en bureau télétravail. Comprendre les seuils, choisir un capteur, lire la mesure.",
            href: "/air-interieur/co2-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Bien aérer sa maison au quotidien",
            description: "La routine d'aération qui maintient le CO2 bas et limite l'accumulation de polluants tout au long de la journée.",
            href: "/air-interieur/bien-aerer-maison/",
          },
          {
            tag: "Matériaux sains",
            title: "Mobilier et faibles émissions",
            description: "Bureau, étagères, caissons : choisir un mobilier qui n'ajoute pas de COV à une pièce occupée plusieurs heures par jour.",
            href: "/materiaux-sains/meubles-faibles-emissions/",
          },
        ]}
      />
    </>
  );
}
