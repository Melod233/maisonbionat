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
  title: "Chambre humide : pourquoi et que faire concrètement",
  description:
    "Votre chambre est humide, les vitres condensent la nuit, des moisissures apparaissent dans les angles : comprendre les causes spécifiques à la chambre et les solutions adaptées.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/chambre-humide/",
  },
  openGraph: {
    title: "Chambre humide : pourquoi et que faire concrètement",
    description:
      "Votre chambre est humide, les vitres condensent la nuit, des moisissures apparaissent dans les angles : comprendre les causes spécifiques à la chambre et les solutions adaptées.",
    url: "https://www.maisonbionat.fr/humidite-maison/chambre-humide/",
  },
};

export default function ChambreHumidePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Chambre humide : pourquoi et que faire concrètement", href: "https://www.maisonbionat.fr/humidite-maison/chambre-humide/" },
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
        tag="Problème fréquent"
        title="Chambre humide : comprendre pourquoi et agir efficacement."
        quickAnswer="La chambre est l'une des pièces les plus exposées à l'humidité, pour une raison simple : on y passe 7 à 8 heures par nuit, souvent fenêtres fermées, à respirer et transpirer. Un adulte produit environ 40 grammes de vapeur d'eau par heure en dormant, soit 1 à 2 litres par nuit et par personne. Sans ventilation suffisante, cette vapeur se condense sur les surfaces froides, favorisant à terme l'apparition de moisissures."
        stats={[
          { value: "1–2 L", label: "de vapeur d'eau produits par nuit et par personne (respiration et transpiration)" },
          { value: "40 g/h", label: "de vapeur d'eau exhalée par un adulte au repos selon les données bâtiment" },
          { value: "40–60 %", label: "taux d'humidité recommandé dans une chambre (ADEME)" },
          { value: "15 °C", label: "température minimale recommandée pour limiter la condensation nocturne" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types d'humidité en chambre" },
          { id: "signes", label: "Signes à surveiller" },
          { id: "causes", label: "Causes spécifiques" },
          { id: "actions", label: "Solutions" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Trois situations très différentes sous le même symptôme."
        description="Une chambre humide peut avoir plusieurs origines. Identifier laquelle est en cause permet d'agir avec la bonne solution plutôt que de traiter les symptômes en surface."
        variants={[
          {
            indicator: "Cas le plus courant",
            name: "Condensation nocturne par manque d'aération",
            description:
              "Buée sur les fenêtres le matin, angles légèrement humides, odeur confinée au réveil. La vapeur produite par les occupants pendant la nuit n'est pas évacuée. La chambre est une pièce sèche dans la journée mais très humide la nuit. Solution : aérer matin et soir, vérifier la VMC.",
          },
          {
            indicator: "Cas fréquent",
            name: "Mur extérieur froid ou pont thermique",
            description:
              "Humidité concentrée sur un ou deux murs donnant sur l'extérieur, souvent dans les angles ou derrière des meubles. La surface du mur est plus froide que la rosée, ce qui provoque une condensation chronique. Nécessite souvent un traitement thermique en plus de la ventilation.",
          },
          {
            indicator: "Cas à ne pas confondre",
            name: "Infiltration ou remontée capillaire",
            description:
              "Taches humides localisées, stables, parfois avec une auréole brune ou du salpêtre. Ne fluctuent pas selon les activités des occupants mais selon la pluie ou les saisons. Nécessitent un diagnostic spécifique et des travaux d'étanchéité ou de drainage.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signes d'une chambre trop humide."
        subtitle="Certains sont visibles immédiatement, d'autres s'installent progressivement. Plus tôt vous les identifiez, plus la correction est simple."
        signs={[
          {
            label: "Buée sur les vitres chaque matin",
            description:
              "Condensation sur la face intérieure des fenêtres au réveil, parfois accompagnée de gouttelettes qui coulent. Signe que l'air de la chambre a saturé en vapeur pendant la nuit. Aérer dès le réveil et systématiquement le soir avant de fermer la chambre.",
            severity: "léger",
          },
          {
            label: "Odeur de renfermé persistante",
            description:
              "Un air confiné et chargé en humidité a une odeur caractéristique, légèrement musquée. Elle indique un renouvellement d'air insuffisant. Si elle persiste après aération, des moisissures cachées peuvent en être la source.",
            severity: "léger",
          },
          {
            label: "Humidité au toucher sur les murs froids",
            description:
              "Murs extérieurs froids et légèrement humides au toucher, surtout le matin. Condensation de surface sur les parois les moins bien isolées. Sans action, des moisissures apparaissent en quelques semaines en hiver.",
            severity: "modéré",
          },
          {
            label: "Taches sombres dans les angles",
            description:
              "Points noirs ou gris dans les angles haut ou bas des murs extérieurs, souvent derrière les meubles ou les rideaux. Premières moisissures liées à une condensation chronique. Nettoyer la surface ne suffit pas sans traiter la cause.",
            severity: "modéré",
          },
          {
            label: "Peinture qui se décolle ou cloque",
            description:
              "La vapeur d'eau qui pénètre derrière les revêtements les dégrade. Cloques ou décollements de peinture sur les murs extérieurs signalent une humidité de paroi répétée depuis plusieurs mois.",
            severity: "critique",
          },
          {
            label: "Symptômes respiratoires au réveil",
            description:
              "Nez bouché, gorge irritée, toux matinale qui s'améliore dans la journée ou en dehors du logement. Peut indiquer une exposition nocturne aux spores de moisissures. Si ces symptômes sont fréquents, faites inspecter la chambre de façon approfondie.",
            severity: "critique",
          },
        ]}
        footerNote="Si vous suspectez des moisissures cachées derrière les meubles ou sous les revêtements, déplacez les meubles et inspectez visuellement. En cas de symptômes respiratoires persistants, consultez un médecin."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi la chambre est particulièrement exposée."
        subtitle="La chambre cumule plusieurs facteurs défavorables que les autres pièces n'ont pas."
        causes={[
          {
            number: "01",
            cause: "Respiration et transpiration nocturnes",
            explanation:
              "Un adulte exhale environ 40 grammes de vapeur d'eau par heure au repos. Pour deux personnes sur une nuit de 8 heures, c'est 640 grammes de vapeur libérés dans une pièce fermée. Sans renouvellement d'air, ce volume sature rapidement l'atmosphère de la chambre.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Fenêtres fermées la nuit sans ventilation mécanique",
            explanation:
              "La chambre est souvent la pièce la moins bien ventilée : on ferme les fenêtres la nuit pour le calme ou la chaleur, et la VMC de la chambre est rarement aussi puissante que celle de la salle de bain. La vapeur s'accumule sans pouvoir s'échapper.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Mur(s) donnant directement sur l'extérieur",
            explanation:
              "Les chambres se trouvent fréquemment en angle, avec deux murs extérieurs. Ces parois sont plus froides, surtout la nuit. Elles atteignent leur point de rosée avant le reste de la pièce, accumulant la condensation dans les angles et derrière les meubles.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Linge ou plantes dans la chambre",
            explanation:
              "Faire sécher du linge dans la chambre ajoute plusieurs litres de vapeur d'eau en quelques heures. Les grandes plantes d'intérieur contribuent également à l'hygrométrie par leur transpiration. Ces apports supplémentaires aggravent la situation dans une pièce déjà fermée la nuit.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Chauffage insuffisant ou coupé la nuit",
            explanation:
              "Couper le chauffage la nuit fait descendre la température des surfaces. Des murs à 12–14 °C dans une chambre à 17 °C avec un taux d'humidité de 60 % peuvent atteindre leur point de rosée. Un chauffage modéré continu est préférable à un chauffage fort le soir suivi d'une nuit froide.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Assainir sa chambre de façon durable."
        immediateLabel="Cette semaine"
        structuralLabel="Pour durer"
        immediate={[
          {
            label: "Aérez systématiquement matin et soir",
            description:
              "Ouvrez les fenêtres 10 minutes au réveil pour évacuer la vapeur accumulée la nuit, et 10 minutes avant de vous coucher pour renouveler l'air. En hiver, l'air froid est moins chargé en vapeur que l'air chaud intérieur : aérer même quelques minutes est efficace.",
            effort: "Gratuit",
          },
          {
            label: "Sortez le linge de la chambre",
            description:
              "Ne faites jamais sécher de linge dans la chambre. Séchage d'un chargement de linge : 2 à 5 litres de vapeur libérés dans la pièce. Utilisez un séchoir en dehors des pièces à coucher, dans une pièce ventilée ou en extérieur.",
            effort: "Gratuit",
          },
          {
            label: "Éloignez les meubles des murs extérieurs",
            description:
              "Laissez 5 à 10 cm entre l'armoire, la commode ou la tête de lit et les murs extérieurs. L'air peut ainsi circuler et éviter la stagnation froide et humide derrière les meubles, zone préférée des moisissures.",
            effort: "Gratuit",
          },
          {
            label: "Placez un hygromètre dans la chambre",
            description:
              "Un hygromètre simple permet de mesurer le taux d'humidité réel et de savoir si les actions entreprises fonctionnent. Cible : rester entre 40 et 60 %. Au-dessus de 65 %, les conditions de développement des moisissures sont réunies.",
            effort: "10–20 €",
          },
        ]}
        structural={[
          {
            label: "Vérifier le fonctionnement de la VMC",
            description:
              "Même si la chambre n'est pas directement raccordée à une bouche d'extraction, le balayage de l'air du logement doit atteindre la chambre. Vérifiez que les entrées d'air (grilles en haut des fenêtres ou détalonnage des portes) permettent la circulation. Faites réviser la VMC tous les 2 ans.",
            effort: "Entretien : 80–150 €",
          },
          {
            label: "Isoler les murs froids ou les ponts thermiques",
            description:
              "Si un mur extérieur est chroniquement froid et humide, une isolation intérieure ciblée (panneau en fibre de bois, laine de chanvre) peut relever sa température de surface et supprimer les conditions de condensation. Attention à la gestion de la vapeur dans le complexe isolant.",
            effort: "Lors d'une rénovation",
          },
          {
            label: "Remplacer les fenêtres en simple vitrage",
            description:
              "Les vitres en simple vitrage sont le point de condensation le plus froid de la chambre. Le passage au double vitrage augmente de plusieurs degrés la température de la face intérieure et réduit considérablement la buée nocturne.",
            effort: "200–600 € par fenêtre",
          },
          {
            label: "Revoir l'emplacement des plantes d'intérieur",
            description:
              "Les grandes plantes en pot transpirent régulièrement et augmentent le taux d'humidité d'une pièce fermée. Déplacez-les dans des pièces de jour mieux ventilées, surtout en hiver.",
            effort: "Gratuit",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes avec une chambre humide."
        errors={[
          {
            label: "Fermer complètement la chambre la nuit sans ventilation",
            explanation:
              "Une chambre hermétiquement fermée toute la nuit avec deux occupants accumule une quantité importante de vapeur. Si la VMC ne compense pas, l'hygrométrie peut dépasser 80 % en quelques heures. Un léger détalonnage de la porte ou une entrée d'air sur la fenêtre suffit à maintenir un flux minimal.",
          },
          {
            label: "Nettoyer les moisissures sans traiter la cause",
            explanation:
              "Frotter les taches dans les angles avec de l'eau de javel ou du vinaigre sans améliorer la ventilation est inutile : les moisissures reviennent en quelques semaines. Le traitement de surface doit toujours accompagner une action sur l'hygrométrie.",
          },
          {
            label: "Augmenter le chauffage seul pour assécher la chambre",
            explanation:
              "Chauffer fort réduit temporairement l'humidité relative mais ne fait pas disparaître la vapeur. Dès que le chauffage baisse (nuit, départ au travail), la vapeur cherche les surfaces froides. L'association chaleur et aération est indispensable.",
          },
          {
            label: "Mettre un déshumidificateur sans comprendre la cause",
            explanation:
              "Un déshumidificateur peut aider en dépannage mais ne résout pas le problème structurel. Il consomme de l'énergie, produit de la chaleur et doit être vidé régulièrement. Si l'humidité revient dès qu'il est éteint, le problème est ventilation ou isolation, pas équipement.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la chambre humide"
        items={[
          {
            question: "Quel taux d'humidité est acceptable dans une chambre ?",
            answer:
              "Entre 40 et 60 % selon les recommandations de l'ADEME. En dessous de 40 %, l'air dessèche les muqueuses et peut gêner le sommeil. Au-dessus de 65 %, les conditions sont favorables aux acariens et aux moisissures. Un hygromètre de 10 à 20 € permet de mesurer et de suivre ce taux facilement.",
          },
          {
            question: "Peut-on dormir dans une chambre humide ?",
            answer:
              "Si le taux d'humidité est légèrement élevé et qu'il n'y a pas de moisissures visibles, le risque à court terme est limité. En revanche, une exposition prolongée à un air trop humide ou chargé en spores de moisissures peut aggraver des allergies ou de l'asthme, surtout chez les enfants. Si vous observez des taches sombres dans la chambre, agissez avant de laisser des enfants y dormir régulièrement.",
          },
          {
            question: "Faut-il laisser la fenêtre entrouverte la nuit en hiver ?",
            answer:
              "Pas nécessairement, surtout si le logement est bien isolé et équipé d'une VMC fonctionnelle. Une aération de 10 minutes avant de se coucher et au réveil suffit dans la plupart des cas. Si l'humidité reste élevée malgré ces aérations, une légère ouverture en position oscillo-battant ou un aérateur de fenêtre peut aider sans créer de courant d'air froid.",
          },
          {
            question: "Les plantes dans la chambre aggravent-elles l'humidité ?",
            answer:
              "Oui, dans une mesure variable selon leur taille et leur espèce. Une grande plante peut transpirer plusieurs centilitres de vapeur d'eau par jour. Dans une chambre avec une hygrométrie déjà élevée, mieux vaut les déplacer dans des pièces de jour plus ventilées. Quelques petits cactus ou succulentes ont un impact négligeable.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Condensation dans le logement",
            description:
              "Comprendre le phénomène physique de la condensation et les solutions pour le réduire durablement.",
            href: "/humidite-maison/condensation-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "La chambre humide est un terrain fertile pour les moisissures. Identifier, traiter et éviter la récidive.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            tag: "Pièce par pièce",
            title: "La chambre saine",
            description:
              "Au-delà de l'humidité, tous les paramètres d'une chambre favorable au sommeil et à la santé.",
            href: "/piece-par-piece/chambre-saine/",
          },
        ]}
      />
    </>
  );
}
