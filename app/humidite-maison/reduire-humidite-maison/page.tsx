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
  title: "Réduire l'humidité dans sa maison : gestes, habitudes et équipements",
  description:
    "Guide pratique pour faire baisser le taux d'humidité dans son logement : habitudes quotidiennes, ventilation, équipements et solutions structurelles selon le niveau du problème.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/reduire-humidite-maison/",
  },
  openGraph: {
    title: "Réduire l'humidité dans sa maison : gestes, habitudes et équipements",
    description:
      "Guide pratique pour faire baisser le taux d'humidité dans son logement : habitudes quotidiennes, ventilation, équipements et solutions structurelles selon le niveau du problème.",
    url: "https://www.maisonbionat.fr/humidite-maison/reduire-humidite-maison/",
  },
};

export default function ReduireHumiditeMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Réduire l'humidité dans sa maison : gestes, habitudes et équipements", href: "https://www.maisonbionat.fr/humidite-maison/reduire-humidite-maison/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Humidité maison"
        parentHref="/humidite-maison/"
        tag="Guide pratique"
        title="Réduire l'humidité dans sa maison : les actions qui fonctionnent vraiment."
        quickAnswer="Pour réduire l'humidité intérieure, il faut agir sur deux leviers simultanément : limiter la production de vapeur d'eau et améliorer son évacuation. Les gestes du quotidien (couvrir les casseroles, sécher le linge dehors, aérer après la douche) ont un impact immédiat. Mais sans ventilation suffisante, ces efforts restent insuffisants. L'ordre logique : gestes en premier, ventilation en priorité, équipements complémentaires en dernier recours."
        stats={[
          { value: "12 L", label: "de vapeur d'eau produits par jour dans un foyer de 4 personnes" },
          { value: "5 L", label: "libérés par un seul chargement de linge séché en intérieur" },
          { value: "40–60 %", label: "taux d'humidité cible dans un logement sain (ADEME)" },
          { value: "2 fois/an", label: "fréquence minimale d'entretien recommandée pour une VMC" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Évaluer le niveau du problème" },
          { id: "signes", label: "Signaux d'alerte" },
          { id: "causes", label: "Principales sources" },
          { id: "actions", label: "Actions concrètes" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Quel est le niveau de votre problème d'humidité ?"
        description="La stratégie à adopter dépend directement de la gravité et de la nature du problème. Un logement légèrement trop humide ne se traite pas comme un logement avec des moisissures récurrentes ou des infiltrations."
        variants={[
          {
            indicator: "Situation courante",
            name: "Humidité modérée sans dégâts visibles",
            description:
              "Taux d'humidité entre 60 et 70 %, buée occasionnelle sur les fenêtres, légère odeur de renfermé. Les gestes quotidiens et une meilleure aération suffisent généralement à rétablir un taux sain en quelques semaines.",
          },
          {
            indicator: "Situation à traiter",
            name: "Humidité élevée avec condensation chronique",
            description:
              "Condensation quotidienne sur les vitrages, murs froids humides, premières taches dans les angles. En plus des gestes, une révision ou un remplacement de la VMC est souvent nécessaire pour traiter la cause structurelle.",
          },
          {
            indicator: "Situation urgente",
            name: "Moisissures visibles ou humidité persistante après travaux",
            description:
              "Présence de moisissures, taux d'humidité supérieur à 70 % malgré les gestes, problème qui revient chaque hiver. Un diagnostic complet s'impose pour distinguer condensation, infiltration et remontées capillaires avant tout traitement.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signaux que votre logement est trop humide."
        subtitle="Ces indicateurs permettent de mesurer l'efficacité des actions entreprises et d'ajuster la stratégie."
        signs={[
          {
            label: "Taux d'humidité supérieur à 65 % en permanence",
            description:
              "Mesurable avec un hygromètre (10 à 20 €). Au-delà de 65 %, les acariens prolifèrent plus facilement et les moisissures trouvent des conditions favorables. L'objectif est de maintenir entre 40 et 60 % en permanence.",
            severity: "modéré",
          },
          {
            label: "Buée matinale sur les fenêtres",
            description:
              "Condensation régulière sur les vitres au réveil, signe d'une humidité nocturne excessive. Si elle persiste après aération et que les actions de base sont déjà en place, la VMC doit être vérifiée.",
            severity: "léger",
          },
          {
            label: "Odeur de moisi ou de renfermé",
            description:
              "Une odeur persistante même après aération peut indiquer la présence de moisissures cachées (derrière les meubles, sous les revêtements). Elle ne disparaît pas avec les seuls gestes quotidiens si une source est active.",
            severity: "modéré",
          },
          {
            label: "Taches sombres dans les angles ou sur les joints",
            description:
              "Premiers signes de moisissures. Indiquent une humidité chronique qui dépasse ce que la ventilation actuelle peut évacuer. Traitement de surface à associer impérativement à une action sur la ventilation.",
            severity: "critique",
          },
          {
            label: "Surfaces qui se dégradent plus vite que prévu",
            description:
              "Peinture qui s'écaille, boiseries qui gonflent, joints qui noircissent rapidement : l'humidité excessive accélère le vieillissement des matériaux et génère des coûts d'entretien supplémentaires.",
            severity: "modéré",
          },
        ]}
        footerNote="Un hygromètre posé dans les pièces les plus humides vous donne une mesure objective de la situation et vous permet d'évaluer l'efficacité des actions mises en place."
      />

      <IssueCauses
        id="causes"
        title="Les principales sources d'humidité à réduire."
        subtitle="Agir sur les sources les plus importantes en priorité donne les meilleurs résultats avec le moins d'effort."
        causes={[
          {
            number: "01",
            cause: "Séchage du linge en intérieur",
            explanation:
              "C'est souvent la source la plus impactante et la plus facile à corriger. Un chargement de linge libère 2 à 5 litres de vapeur d'eau en séchant. Si le linge sèche dans une pièce mal ventilée, tout ce volume s'accumule dans le logement. Sécher dehors ou dans une pièce spécifique ventilée change tout.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Cuisine sans hotte ni couvercle",
            explanation:
              "La cuisson produit entre 1 et 2 litres de vapeur par repas selon le mode de cuisson. Couvrir les casseroles réduit l'évaporation de moitié. La hotte aspirante doit être utilisée systématiquement, même pour les cuissons courtes. Si la hotte est recirculante (sans évacuation), elle filtre les graisses mais pas la vapeur.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Douches longues et salle de bain mal ventilée",
            explanation:
              "Une douche chaude produit environ 200 grammes de vapeur par minute. Sans extraction active pendant et après la douche, cette vapeur se répand dans le logement. La bouche VMC de la salle de bain doit être fonctionnelle. La porte de la salle de bain doit rester fermée pendant la douche.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Respiration et transpiration des occupants",
            explanation:
              "Un adulte produit environ 40 grammes de vapeur par heure au repos, davantage à l'effort. Pour une famille de 4 personnes, c'est environ 4 litres de vapeur livrés quotidiennement par la seule respiration, auxquels s'ajoutent les activités domestiques. La ventilation est la seule solution pour évacuer cette vapeur incompressible.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Ventilation insuffisante ou défaillante",
            explanation:
              "Sans évacuation mécanique ou naturelle efficace, même des apports modestes de vapeur finissent par saturer l'air. Une VMC obstruée, mal réglée ou absente ne peut pas compenser les sources quotidiennes. C'est le facteur structurel qui transforme un problème gérable en problème chronique.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire l'humidité dans le bon ordre."
        immediateLabel="Cette semaine"
        structuralLabel="Pour durer"
        immediate={[
          {
            label: "Séchez le linge en dehors du logement",
            description:
              "Première action à mettre en place, car c'est souvent la source la plus importante. Si l'extérieur n'est pas possible, utilisez un séchoir dans une pièce avec fenêtre ouverte ou équipée d'une bouche VMC. Évitez la chambre et le salon.",
            effort: "Gratuit",
          },
          {
            label: "Cuisinez avec couvercles et hotte active",
            description:
              "Couvrez les casseroles dès qu'elles chauffent, activez la hotte avant de commencer la cuisson et laissez-la tourner 10 minutes après. Si votre hotte est recirculante, envisagez l'installation d'une version évacuante pour réellement éliminer la vapeur.",
            effort: "Gratuit",
          },
          {
            label: "Aérez 10 minutes matin et soir",
            description:
              "Ouvrez les fenêtres en grand dans plusieurs pièces simultanément pour créer une circulation d'air. L'air extérieur, même froid, contient moins de vapeur en valeur absolue que l'air intérieur chargé. 10 minutes suffisent à renouveler l'air d'une pièce.",
            effort: "Gratuit",
          },
          {
            label: "Vérifiez les bouches VMC et nettoyez-les",
            description:
              "Toutes les bouches d'extraction (salle de bain, WC, cuisine) doivent aspirer légèrement. Test simple : approchez un mouchoir en papier. S'il est attiré, la bouche fonctionne. Nettoyez-les avec un aspirateur et de l'eau savonneuse. Un réseau obstrué divise par deux l'efficacité de votre VMC.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Installer une VMC hygroréglable",
            description:
              "La VMC hygroréglable adapte son débit au taux d'humidité réel. Elle extrait davantage quand c'est nécessaire (après la douche, en cuisine) et ralentit quand l'air est sec, réduisant les pertes de chaleur. C'est l'investissement le plus efficace pour une maîtrise durable de l'humidité.",
            effort: "800–2 500 € pose comprise",
          },
          {
            label: "Équiper la cuisine d'une hotte évacuante",
            description:
              "Une hotte recirculante filtre les graisses et les odeurs mais renvoie la vapeur dans la pièce. Une hotte évacuante avec conduit extérieur est la seule solution réellement efficace pour la cuisine. Prévoir un conduit d'évacuation dédié si ce n'est pas encore en place.",
            effort: "200–600 € selon le modèle",
          },
          {
            label: "Utiliser un déshumidificateur en complément ciblé",
            description:
              "Dans une pièce spécifiquement problématique (cave, buanderie, chambre très froide), un déshumidificateur électrique peut aider en complément d'une ventilation correcte. Pour une cave de 20 m², un modèle de 10 litres par jour suffit. Ce n'est pas une solution principale mais un complément utile.",
            effort: "150–400 €",
          },
          {
            label: "Traiter les sources d'infiltration ou remontées capillaires",
            description:
              "Si l'humidité vient de l'extérieur (toiture, façade, fondations), aucun geste intérieur ne réglera le problème de fond. Un diagnostic professionnel permet d'identifier la source exacte avant d'engager les travaux adaptés.",
            effort: "Devis professionnel",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui entretiennent le problème."
        errors={[
          {
            label: "Multiplier les gestes sans améliorer la ventilation",
            explanation:
              "Couvrir les casseroles et aérer le matin sont utiles mais insuffisants si la VMC est défaillante ou absente. Ces gestes réduisent les apports de vapeur mais ne compensent pas un système d'évacuation qui ne fonctionne pas.",
          },
          {
            label: "Acheter un déshumidificateur comme première réponse",
            explanation:
              "Un déshumidificateur traite l'air mais ne résout pas la cause. Il consomme de l'énergie en continu, doit être vidé régulièrement et masque un problème plus profond. Si l'humidité revient dès qu'il est éteint, la ventilation est en cause.",
          },
          {
            label: "Boucher les entrées d'air pour éviter le froid",
            explanation:
              "Les grilles d'aération en haut des fenêtres ou les détalonnages des portes ne sont pas des défauts : ce sont des éléments du système de ventilation. Les obstruer coupe l'alimentation en air neuf de la VMC et supprime le renouvellement naturel d'air.",
          },
          {
            label: "Confondre taux d'humidité relative et quantité absolue de vapeur",
            explanation:
              "Chauffer fort réduit l'humidité relative (le chiffre que l'hygromètre affiche) mais ne fait pas disparaître la vapeur. Quand la température redescend, l'humidité relative remonte. Ce qui compte, c'est d'évacuer la vapeur, pas de la diluer en chauffant.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la réduction de l'humidité"
        items={[
          {
            question: "Combien de temps faut-il pour faire baisser l'humidité avec des gestes simples ?",
            answer:
              "Si la cause principale est comportementale (linge intérieur, cuisine sans hotte, aération insuffisante), les effets sont visibles en 1 à 2 semaines après mise en place des gestes. L'hygromètre vous permet de mesurer la progression. Si le taux ne baisse pas malgré les gestes, la ventilation mécanique est probablement en cause.",
          },
          {
            question: "Vaut-il mieux un déshumidificateur ou une VMC ?",
            answer:
              "La VMC est la solution de fond : elle évacue la vapeur vers l'extérieur en continu, sans consommation disproportionnée et sans entretien quotidien. Le déshumidificateur est un complément ponctuel pour une pièce spécifique ou une situation temporaire. Si vous deviez choisir un seul investissement, c'est la VMC hygroréglable.",
          },
          {
            question: "Quelle est la meilleure VMC pour contrôler l'humidité ?",
            answer:
              "La VMC hygroréglable de type B est la plus efficace pour la maîtrise de l'humidité. Elle ajuste son débit automatiquement selon le taux d'humidité de chaque pièce. La VMC double flux offre le meilleur confort thermique mais ne cible pas spécifiquement l'humidité. Pour un logement problématique, la VMC hygroréglable est souvent recommandée en priorité.",
          },
          {
            question: "L'aération extérieure en hiver aggrave-t-elle le problème d'humidité ?",
            answer:
              "Non, c'est l'inverse. L'air extérieur en hiver contient moins de vapeur d'eau en valeur absolue que l'air intérieur chauffé et occupé. Quand vous ouvrez une fenêtre 10 minutes, vous remplacez l'air humide intérieur par de l'air sec qui, une fois réchauffé, peut absorber davantage de vapeur. Aérer en hiver est une des actions les plus simples et les plus efficaces.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Sources d'humidité dans la maison",
            description:
              "Quantifier précisément chaque source de vapeur pour savoir sur laquelle agir en priorité.",
            href: "/humidite-maison/sources-humidite-interieure/",
          },
          {
            tag: "Humidité maison",
            title: "Ventilation et humidité",
            description:
              "Comprendre le rôle de la VMC et choisir le système adapté à votre logement et à votre situation.",
            href: "/humidite-maison/ventilation-humidite/",
          },
          {
            tag: "Air intérieur",
            title: "Entretien de la VMC",
            description:
              "Une VMC mal entretenue perd jusqu'à 50 % de son efficacité. Les gestes d'entretien à faire vous-même.",
            href: "/air-interieur/entretien-vmc/",
          },
        ]}
      />
    </>
  );
}
