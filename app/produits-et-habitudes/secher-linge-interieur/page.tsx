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
  title: "Sécher le linge à l'intérieur : impact sur l'humidité et la qualité de l'air",
  description:
    "Une lessive séchée à l'intérieur libère 1 à 2 litres de vapeur d'eau. Dans une pièce peu ventilée, cela favorise condensation et moisissures. Solutions et alternatives.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/secher-linge-interieur/",
  },
  openGraph: {
    title: "Sécher le linge à l'intérieur : impact sur l'humidité et la qualité de l'air",
    description:
      "Une lessive séchée à l'intérieur libère 1 à 2 litres de vapeur d'eau. Dans une pièce peu ventilée, cela favorise condensation et moisissures. Solutions et alternatives.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/secher-linge-interieur/",
  },
};

export default function SecherLingeInterieurPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Sécher le linge à l'intérieur : impact sur l'humidité et la qualité de l'air", href: "https://www.maisonbionat.fr/produits-et-habitudes/secher-linge-interieur/" },
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
        tag="Comprendre"
        title="Sécher son linge à l'intérieur : quel impact réel sur l'humidité de votre logement ?"
        quickAnswer="Une charge de lessive standard libère entre 1 et 2 litres de vapeur d'eau en séchant. Dans une pièce de 20 m² sans ventilation efficace, cette vapeur peut faire monter l'hygrométrie au-dessus de 65 %, le seuil à partir duquel les moisissures peuvent se développer en 24 à 48 heures. Le séchage intérieur est souvent la source d'humidité la plus sous-estimée dans les logements, car son impact est invisible et progressif. Des alternatives simples existent selon les situations."
        stats={[
          { value: "1–2 L", label: "de vapeur d'eau libérés par une lessive séchée à l'intérieur" },
          { value: ">60 %", label: "d'humidité : conditions favorables au développement des moisissures" },
          { value: "24–48 h", label: "délai d'apparition de moisissures sur une surface humide à plus de 60 % et 18°C" },
          { value: "40–60 %", label: "taux d'hygrométrie recommandé dans un logement (ADEME)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Impact selon les conditions" },
          { id: "signes", label: "Signes que le séchage pose problème" },
          { id: "causes", label: "Pourquoi cette habitude aggrave l'humidité" },
          { id: "actions", label: "Alternatives et méthode moins problématique" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="L'impact du séchage intérieur selon les conditions."
        description="Le séchage du linge à l'intérieur n'a pas le même impact selon la pièce choisie, la quantité de linge et la qualité de la ventilation. Identifier votre situation permet de savoir si c'est un problème prioritaire chez vous."
        variants={[
          {
            indicator: "Situation la moins problématique",
            name: "Grande pièce ventilée avec VMC active",
            description:
              "Dans un séjour ou une buanderie de grande superficie, avec une VMC qui fonctionne bien et une fenêtre entreouverte, la vapeur libérée par le linge est diluée et partiellement évacuée. L'hygrométrie peut monter temporairement mais revient à la normale en quelques heures. Ce n'est pas idéal mais le risque de moisissures reste faible.",
          },
          {
            indicator: "Situation à surveiller",
            name: "Pièce de taille moyenne avec ventilation limitée",
            description:
              "Dans une chambre de 12 à 15 m² ou un couloir, la vapeur produite par une lessive entière peut maintenir l'hygrométrie au-dessus de 65 % pendant 4 à 8 heures. Si la pièce est peu ventilée, cette vapeur se condense sur les surfaces froides, surtout la nuit ou en hiver.",
          },
          {
            indicator: "Situation à risque",
            name: "Chambre fermée ou placard la nuit",
            description:
              "Sécher du linge dans une chambre occupée la nuit ou dans un réduit fermé est la situation la plus problématique. La vapeur s'accumule sans extraction, la respiration des occupants s'y ajoute, et la température baisse pendant la nuit. Ce sont exactement les conditions de condensation et de développement des moisissures.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signes que le séchage intérieur pose problème chez vous."
        subtitle="Certains indicateurs permettent de relier votre habitude de séchage aux problèmes d'humidité constatés dans le logement."
        signs={[
          {
            label: "Hygrométrie qui dépasse 65 % pendant le séchage",
            description:
              "Un hygromètre placé dans la pièce où sèche le linge affichant régulièrement plus de 65 % pendant le séchage est un signal direct. C'est le seuil au-dessus duquel les conditions deviennent favorables aux moisissures et aux acariens.",
            severity: "modéré",
          },
          {
            label: "Condensation sur les vitres de la pièce le lendemain matin",
            description:
              "Si la condensation matinale apparaît ou s'aggrave les jours suivant une lessive séchée dans la pièce, la corrélation est claire. La vapeur produite pendant la nuit s'est condensée sur les surfaces froides.",
            severity: "modéré",
          },
          {
            label: "Odeur de linge qui sèche lentement ou odeur rance",
            description:
              "Dans une pièce peu ventilée, le linge met plus de temps à sécher car l'air est déjà saturé en vapeur. Un linge qui sèche lentement peut développer une odeur désagréable due à la prolifération de micro-organismes sur les fibres humides.",
            severity: "léger",
          },
          {
            label: "Moisissures récurrentes dans la pièce de séchage",
            description:
              "Si des moisissures apparaissent régulièrement sur les murs, les joints ou les angles de la pièce où sèche habituellement le linge, le séchage intérieur est l'une des causes probables à traiter en priorité.",
            severity: "critique",
          },
          {
            label: "Taux d'humidité élevé de façon chronique dans tout le logement",
            description:
              "Si l'hygrométrie reste durablement élevée dans plusieurs pièces, pas seulement celle du séchage, le séchage intérieur régulier contribue probablement à l'équilibre global de vapeur dans le logement.",
            severity: "critique",
          },
        ]}
        footerNote="Un simple hygromètre (10 à 20 euros) posé dans la pièce de séchage permet de mesurer l'impact réel avant et pendant le séchage. C'est le moyen le plus fiable pour savoir si votre situation est problématique."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi le séchage intérieur aggrave l'humidité intérieure."
        subtitle="La quantité de vapeur libérée par le linge est considérable et souvent largement sous-estimée par rapport aux autres activités quotidiennes."
        causes={[
          {
            number: "01",
            cause: "Une lessive entière libère jusqu'à 2 litres de vapeur",
            explanation:
              "C'est une quantité concrète et significative : 2 litres d'eau qui passent à l'état de vapeur et se répartissent dans l'air de la pièce. Dans un appartement de 50 m², sécher régulièrement le linge à l'intérieur représente une des sources d'humidité les plus importantes, souvent supérieure aux douches ou à la cuisine.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "La vapeur se libère lentement sur plusieurs heures",
            explanation:
              "Contrairement à une douche dont l'impact est concentré sur 5 à 10 minutes, le séchage du linge libère de la vapeur de façon étalée sur 4 à 8 heures, parfois plus. La ventilation ne peut pas compenser si elle ne fonctionne pas en continu sur cette durée.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le séchage dans une chambre fermée la nuit est particulièrement problématique",
            explanation:
              "La nuit, la température baisse, les portes sont fermées et les fenêtres aussi. La vapeur du linge s'accumule avec celle produite par la respiration des occupants. L'hygrométrie peut atteindre des niveaux très élevés dans une chambre occupée où sèche du linge.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les plaques de séchage réduisent la circulation de l'air autour du linge",
            explanation:
              "Un étendage encombré où les vêtements se touchent ou se chevauchent sèche beaucoup plus lentement et moins efficacement. Le linge reste humide plus longtemps, libérant de la vapeur sur une période encore plus étendue.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "La répétition régulière maintient l'humidité en permanence",
            explanation:
              "Dans un foyer qui fait la lessive plusieurs fois par semaine, la vapeur libérée par le séchage s'ajoute en continu aux autres sources. Il n'y a jamais de période de récupération suffisante pour que l'hygrométrie se stabilise à un niveau sain.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les alternatives et la méthode la moins problématique."
        immediate={[
          {
            label: "Sécher le linge à l'extérieur dès que possible",
            description:
              "C'est la solution idéale : aucune vapeur dans le logement, séchage plus rapide par le vent, linge plus frais. Même en hiver, le vent extérieur fait sécher le linge plus efficacement qu'une pièce intérieure chauffée.",
            effort: "Gratuit",
          },
          {
            label: "Si séchage intérieur inévitable : choisir la bonne pièce",
            description:
              "Privilégiez une pièce avec une fenêtre que vous pouvez entrouvrir et une bouche VMC active. Évitez impérativement la chambre à coucher, les placards et les espaces confinés. Un couloir ou une salle de bain ventilée sont préférables à une chambre.",
            effort: "Gratuit",
          },
          {
            label: "Laisser la fenêtre entreouverte pendant le séchage",
            description:
              "Même une fenêtre légèrement ouverte crée un flux d'air qui dilue et évacue une partie de la vapeur libérée. Ce geste simple réduit significativement l'élévation d'hygrométrie pendant le séchage.",
            effort: "Gratuit",
          },
          {
            label: "Étendre le linge en espaçant bien les pièces",
            description:
              "Un linge bien étalé avec de l'air circulant entre chaque pièce sèche plus rapidement, libère sa vapeur sur une période plus courte et ne nécessite pas de maintenir une humidité élevée aussi longtemps.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Investir dans un sèche-linge avec évacuation externe",
            description:
              "Un sèche-linge à évacuation externe rejette l'air chaud et humide directement vers l'extérieur via un conduit. C'est la solution qui élimine complètement le problème d'humidité liée au séchage. Vérifiez qu'il ne s'agit pas d'un modèle à recirculation qui rejette la vapeur dans la pièce.",
            effort: "300–600 €",
          },
          {
            label: "Opter pour un sèche-linge à condensation",
            description:
              "Un sèche-linge à condensation récupère la vapeur dans un bac à vider, sans la rejeter dans la pièce. Il n'a pas besoin d'un conduit d'évacuation. Légèrement plus consommateur en énergie que le modèle à évacuation, mais il résout le problème d'humidité intérieure.",
            effort: "300–700 €",
          },
          {
            label: "Créer ou équiper une buanderie ventilée",
            description:
              "Dédier une pièce au séchage, équipée d'une ventilation spécifique ou d'une bouche VMC dimensionnée pour cet usage, permet de localiser et maîtriser les apports de vapeur sans affecter le reste du logement.",
            effort: "Variable selon le logement",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui aggravent l'impact du séchage intérieur."
        errors={[
          {
            label: "Sécher le linge dans la chambre à coucher",
            explanation:
              "La chambre est la pièce où l'on passe le plus de temps et où l'exposition est donc la plus longue. La nuit, avec les portes et fenêtres fermées, la vapeur du linge et celle de la respiration des occupants s'accumulent ensemble. C'est la situation à éviter en priorité.",
          },
          {
            label: "Fermer la porte de la pièce de séchage",
            explanation:
              "Fermer la porte d'une pièce où sèche le linge concentre la vapeur dans un espace confiné. L'hygrométrie monte plus vite et plus haut. Même si cela limite la diffusion dans le reste du logement, les risques pour la pièce elle-même augmentent fortement.",
          },
          {
            label: "Utiliser un radiateur électrique portable sans ventilation",
            explanation:
              "Chauffer avec un radiateur pour accélérer le séchage augmente la température et accélère l'évaporation, mais toute cette vapeur reste dans la pièce. Sans extraction simultanée, l'hygrométrie monte encore plus vite que lors d'un séchage à température ambiante.",
          },
          {
            label: "Négliger de vider le bac d'un sèche-linge à condensation",
            explanation:
              "Si le bac d'un sèche-linge à condensation déborde ou n'est pas vidé, l'eau collectée peut s'évaporer partiellement ou déborder dans la pièce, recréant le problème d'humidité que l'appareil était censé éviter.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le séchage du linge et l'humidité"
        items={[
          {
            question: "Combien de vapeur libère vraiment une lessive qui sèche à l'intérieur ?",
            answer:
              "Une charge standard libère entre 1 et 2 litres de vapeur d'eau lors du séchage. Pour vous donner un ordre de grandeur : cela représente entre 8 % et 16 % de la production quotidienne totale de vapeur d'un foyer de quatre personnes, concentrée en quelques heures dans une seule pièce. C'est une contribution significative, souvent la plus élevée par événement après les douches.",
          },
          {
            question: "Peut-on sécher le linge dans la salle de bain ?",
            answer:
              "Oui, à condition que la salle de bain soit équipée d'une ventilation efficace (VMC ou fenêtre). La salle de bain est l'une des meilleures options pour le séchage intérieur car elle dispose généralement d'une extraction et ses surfaces sont conçues pour résister à l'humidité. Vérifiez que la bouche VMC aspire bien avant d'en faire votre pièce de séchage habituelle.",
          },
          {
            question: "Un sèche-linge à condensation résout-il complètement le problème ?",
            answer:
              "Oui, si le bac est vidé régulièrement et que l'appareil fonctionne correctement. Le principe est de condenser la vapeur en eau liquide à l'intérieur de l'appareil, sans la rejeter dans la pièce. Le seul risque résiduel est un débordement ou une évaporation depuis le bac plein. Un modèle avec évacuation automatique de l'eau est plus pratique.",
          },
          {
            question: "Le linge mis à sécher en hiver aggrave-t-il la condensation sur les vitres ?",
            answer:
              "Oui, directement. En hiver, les fenêtres sont plus froides et le point de rosée est atteint plus facilement. La vapeur libérée par le linge se condense préférentiellement sur les vitres et les murs froids. Si vous constatez que la condensation matinale s'aggrave les jours de séchage, c'est la confirmation que le séchage intérieur contribue à votre problème de condensation.",
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
              "Le séchage du linge est l'une des principales sources de vapeur dans un logement. Vue d'ensemble de toutes les contributions quotidiennes.",
            href: "/humidite-maison/sources-humidite-interieure/",
          },
          {
            tag: "Humidité maison",
            title: "Taux d'humidité idéal : valeurs cibles et hygromètre",
            description:
              "Plage 40-60 % recommandée par l'ADEME : repères pour vérifier que votre logement reste dans la zone saine, surtout les jours de séchage de linge en intérieur.",
            href: "/humidite-maison/taux-humidite-ideal/",
          },
          {
            tag: "Produits et habitudes",
            title: "Gestes du quotidien pour une maison saine",
            description:
              "Les habitudes simples qui améliorent la qualité de l'environnement intérieur, dont la gestion du séchage du linge.",
            href: "/produits-et-habitudes/gestes-maison-saine/",
          },
        ]}
      />
    </>
  );
}
