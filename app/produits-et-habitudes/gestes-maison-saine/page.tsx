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
  title: "Gestes du quotidien pour une maison plus saine : les essentiels",
  description:
    "Sans achat ni changement radical, des gestes simples améliorent vraiment la qualité de l'air et de l'environnement intérieur. Les habitudes les plus efficaces pour une maison plus saine.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/gestes-maison-saine/",
  },
  openGraph: {
    title: "Gestes du quotidien pour une maison plus saine : les essentiels",
    description:
      "Sans achat ni changement radical, des gestes simples améliorent vraiment la qualité de l'air et de l'environnement intérieur. Les habitudes les plus efficaces pour une maison plus saine.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/gestes-maison-saine/",
  },
};

export default function GestesMaisonSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Gestes du quotidien pour une maison plus saine : les essentiels", href: "https://www.maisonbionat.fr/produits-et-habitudes/gestes-maison-saine/" },
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
        title="Les gestes du quotidien pour une maison plus saine, sans achat ni changement radical."
        quickAnswer="Améliorer la qualité de son habitat ne passe pas nécessairement par des produits, des équipements ou des travaux. Une grande partie des polluants et de l'humidité intérieure peut être réduite par des gestes simples : enlever ses chaussures à l'entrée, aérer chaque jour, utiliser la hotte pendant la cuisson, éviter les sprays près des enfants. Ces habitudes, appliquées régulièrement, ont un impact réel sur la qualité de l'air que vous respirez."
        stats={[
          { value: "80–90 %", label: "du temps passé en intérieur (ANSES)" },
          { value: "5–10x", label: "l'air intérieur peut être plus pollué que l'air extérieur (ANSES)" },
          { value: "12 L", label: "de vapeur d'eau produits par jour dans un foyer de 4 personnes" },
          { value: "40–60 %", label: "taux d'hygrométrie recommandé dans un logement (ADEME)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les domaines concernés" },
          { id: "signes", label: "Situations qui appellent un geste simple" },
          { id: "causes", label: "Pourquoi ces gestes ont un impact" },
          { id: "actions", label: "Les gestes essentiels" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les domaines du quotidien où de simples gestes font la différence."
        description="L'environnement intérieur est influencé par des habitudes réparties dans toutes les pièces et activités de la maison. Identifier les domaines les plus impactants permet de prioriser sans se disperser."
        variants={[
          {
            indicator: "Impact fort, effort faible",
            name: "Aération et ventilation",
            description:
              "Aérer chaque matin et chaque soir pendant 10 minutes suffit à renouveler l'air et à évacuer vapeur d'eau, CO2 et polluants accumulés. C'est le geste avec le meilleur rapport impact sur qualité de l'air pour effort fourni. Utiliser la hotte pendant la cuisson et laisser la salle de bain ventilée après la douche complètent ce domaine.",
          },
          {
            indicator: "Impact fort, effort faible",
            name: "Chaussures et poussières",
            description:
              "Les chaussures transportent jusqu'à 400 000 bactéries et une grande partie des polluants chimiques du sol extérieur (pesticides, hydrocarbures, métaux lourds). Enlever les chaussures à l'entrée réduit de façon très significative les apports de polluants dans les pièces de vie, surtout là où les enfants jouent au sol.",
          },
          {
            indicator: "Impact modéré, effort très faible",
            name: "Produits ménagers et sprays",
            description:
              "Les aérosols (désodorisants, sprays nettoyants, laques) sont parmi les sources de COV les plus émissives dans les logements. Préférer les formats liquides ou solides, ne pas utiliser de sprays en présence d'enfants ou dans des pièces non ventilées : ces gestes réduisent l'exposition sans changer de produit.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les situations qui montrent qu'un geste simple serait utile."
        subtitle="Certains signes révèlent que des habitudes courantes dégradent la qualité de l'environnement intérieur, souvent sans qu'on y prête attention."
        signs={[
          {
            label: "Odeur de renfermé au retour dans le logement",
            description:
              "Une odeur persistante après quelques heures d'absence est le signe d'un renouvellement d'air insuffisant. L'air chargé en CO2, humidité et polluants stagne. Aérer deux fois par jour, même 10 minutes, résout ce problème dans la majorité des cas.",
            severity: "léger",
          },
          {
            label: "Yeux irrités ou gorge sèche après utilisation d'un spray",
            description:
              "Les aérosols dispersent de fines particules et des composés organiques volatils qui irritent les muqueuses. Si ce phénomène survient régulièrement, remplacer les sprays par des formats non aérosols ou aérer immédiatement est une mesure simple.",
            severity: "modéré",
          },
          {
            label: "Tapis et sols visiblement sales malgré le nettoyage",
            description:
              "Les chaussures portées à l'intérieur déposent en continu des particules du sol extérieur. Même propres en apparence, elles transportent des polluants invisibles. Un tapis-brosse à l'entrée associé à l'habitude de se déchausser limite considérablement ces apports.",
            severity: "léger",
          },
          {
            label: "Poussières qui s'accumulent rapidement",
            description:
              "Une accumulation rapide de poussières peut indiquer une ventilation insuffisante ou trop de textiles qui la piègent et la relâchent. Passer un chiffon humide plutôt que sec évite de remettre les particules en suspension dans l'air.",
            severity: "léger",
          },
          {
            label: "Condensation sur les vitres chaque matin",
            description:
              "La buée matinale régulière sur les fenêtres signale que l'air intérieur est trop chargé en vapeur. Aérer 10 minutes au réveil et réduire les sources de vapeur (linge, cuisson) suffit dans la plupart des cas pour atténuer ce phénomène.",
            severity: "modéré",
          },
          {
            label: "Moisissures qui réapparaissent après nettoyage",
            description:
              "Si des moisissures reviennent régulièrement au même endroit, des gestes seuls ne suffiront pas à les éliminer. En revanche, réduire les apports de vapeur (séchage du linge, douches, cuisson) et améliorer la ventilation peut stopper leur développement après un traitement de surface.",
            severity: "critique",
          },
        ]}
        footerNote="Aucun geste isolé ne transforme un logement. C'est la régularité et la combinaison de plusieurs habitudes simples qui produisent un résultat durable sur la qualité de l'air intérieur."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi de petits gestes ont un impact significatif."
        subtitle="L'environnement intérieur est influencé en permanence par les activités des occupants. Les polluants et l'humidité s'accumulent progressivement, et les gestes réguliers fonctionnent précisément parce qu'ils agissent sur cette accumulation continue."
        causes={[
          {
            number: "01",
            cause: "On passe 80 à 90 % de son temps en intérieur",
            explanation:
              "L'exposition aux polluants intérieurs est bien supérieure à l'exposition extérieure, simplement parce que le temps passé en intérieur est dominant. Une légère réduction des polluants dans l'air intérieur se traduit donc par une réduction significative de l'exposition totale.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les polluants intérieurs se renouvellent en permanence",
            explanation:
              "Les sources de polluants (produits ménagers, matériaux, activités) émettent en continu. Sans geste régulier pour les réduire ou les évacuer, leur concentration dans l'air monte progressivement. L'aération quotidienne est l'action la plus efficace pour interrompre cette accumulation.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les chaussures sont un vecteur de polluants souvent sous-estimé",
            explanation:
              "Les semelles de chaussures transportent des polluants du sol extérieur (pesticides, métaux lourds, hydrocarbures) directement dans le logement. La concentration de ces polluants est particulièrement élevée sur les moquettes et les sols bas, là où les enfants jouent.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les sprays sont les sources de COV les plus concentrées",
            explanation:
              "Les aérosols projettent des particules fines et des composés organiques volatils directement dans l'air respiré. Selon l'étude ADEME PRESSENS, les sprays de type désodorisants ou sprays ménagers figurent parmi les sources d'émission de COV les plus élevées dans les logements. Réduire leur usage ou les remplacer par des formats non aérosols a un effet mesurable.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "La poussière remet en suspension des polluants accumulés",
            explanation:
              "La poussière domestique est un réservoir de polluants : acariens, spores de moisissures, particules fines, résidus chimiques. Un nettoyage au chiffon sec les remet en suspension dans l'air pendant plusieurs heures. Un chiffon humide ou un aspirateur avec filtre HEPA les capte et les élimine réellement.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les gestes essentiels par domaine."
        immediate={[
          {
            label: "Enlever les chaussures à l'entrée",
            description:
              "Installez un espace de rangement ou un tapis-brosse à l'entrée et adoptez l'habitude de vous déchausser systématiquement. C'est le geste le plus simple pour réduire les apports de polluants du sol extérieur dans les pièces de vie.",
            effort: "Gratuit",
          },
          {
            label: "Aérer deux fois par jour, 10 minutes",
            description:
              "Ouvrez les fenêtres le matin au réveil et le soir avant de dormir, même en hiver. L'air froid extérieur contient moins de vapeur d'eau en valeur absolue que l'air intérieur chaud et chargé. 10 minutes suffisent à renouveler l'air d'une pièce.",
            effort: "Gratuit",
          },
          {
            label: "Activer la hotte pendant toute la cuisson",
            description:
              "La hotte doit fonctionner dès le début de la cuisson, pas seulement quand la vapeur est visible. Laissez-la 10 minutes après la fin pour évacuer les derniers COV et particules produites par la combustion et la surchauffe des graisses.",
            effort: "Gratuit",
          },
          {
            label: "Éviter les sprays en présence d'enfants",
            description:
              "Ne pas utiliser d'aérosols (désodorisants, sprays nettoyants, laques) dans les pièces où des enfants sont présents ou vont l'être dans l'heure. Préférez les formats en crème, gel ou liquide, beaucoup moins émissifs.",
            effort: "Gratuit",
          },
          {
            label: "Ne pas fumer à l'intérieur",
            description:
              "La fumée de tabac est l'une des sources les plus importantes de polluants dans l'air intérieur : particules fines, CO, benzène, formaldéhyde. Même avec une fenêtre ouverte, les polluants se déposent sur les surfaces et restent longtemps dans le logement.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Passer à l'aspirateur avec filtre HEPA",
            description:
              "Un aspirateur classique peut remettre en suspension les particules fines et les allergènes. Un modèle équipé d'un filtre HEPA les capte efficacement. Passer l'aspirateur deux fois par semaine dans les zones à risque (tapis, chambres) réduit significativement la charge en acariens et particules.",
            effort: "100–300 € (investissement ponctuel)",
          },
          {
            label: "Sécher le linge à l'extérieur ou avec évacuation externe",
            description:
              "Le séchage intérieur libère 1 à 2 litres de vapeur par lessive. Sécher à l'extérieur ou utiliser un sèche-linge avec évacuation vers l'extérieur est la solution la plus efficace pour supprimer cette source d'humidité.",
            effort: "Gratuit (extérieur) ou 300–700 € (sèche-linge)",
          },
          {
            label: "Dépoussiérer avec un chiffon humide plutôt que sec",
            description:
              "Un chiffon légèrement humide capture les poussières et les allergènes au lieu de les remettre en suspension dans l'air. Habitude simple à adopter pour les surfaces horizontales (étagères, dessus de meubles, rebords de fenêtres).",
            effort: "Gratuit",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui réduisent l'efficacité des gestes."
        errors={[
          {
            label: "Aérer seulement en été",
            explanation:
              "En hiver, la tentation d'éviter le froid fait oublier l'aération. Pourtant, l'air froid extérieur contient moins de vapeur d'eau et de polluants en valeur absolue que l'air intérieur surchargé. 10 minutes d'aération en hiver sont plus utiles que 30 minutes en été quand les fenêtres restent entrouvertes en permanence.",
          },
          {
            label: "Utiliser un spray désodorisant pour masquer une odeur",
            explanation:
              "Un désodorisant en spray ajoute des composés organiques volatils dans l'air tout en ne traitant pas la source de l'odeur. L'odeur revient, on re-spraye, et la concentration de polluants monte. La bonne réponse à une odeur persistante est d'en identifier la cause et de ventiler.",
          },
          {
            label: "Passer l'aspirateur sans filtre HEPA sur un tapis",
            explanation:
              "Un aspirateur sans filtre adapté peut remettre en suspension les acariens, spores et particules fines que le tapis avait accumulés. Le résultat est paradoxalement une augmentation temporaire des polluants dans l'air. Un filtre HEPA retient ces particules dans l'appareil.",
          },
          {
            label: "Surcharger les pièces de meubles et textiles",
            explanation:
              "Les textiles (rideaux lourds, tapis épais, canapés rembourrés) accumulent poussières, acariens et polluants. Un logement peu encombré est plus facile à nettoyer et accumule moins de particules. Limiter les textiles non lavables dans les chambres est particulièrement recommandé pour les personnes allergiques.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les gestes pour une maison saine"
        items={[
          {
            question: "Par quel geste commencer si on veut améliorer la qualité de l'air chez soi ?",
            answer:
              "Aérer deux fois par jour, 10 minutes matin et soir, est le geste avec le meilleur rapport impact et facilité. Il renouvelle l'air, évacue la vapeur d'eau, le CO2 et les polluants accumulés. Si vous ne pouvez en retenir qu'un, c'est celui-là.",
          },
          {
            question: "Enlever les chaussures est-il vraiment utile dans un appartement en ville ?",
            answer:
              "Oui, particulièrement en ville où les trottoirs concentrent davantage de polluants (hydrocarbures, métaux lourds, pesticides). Les semelles transportent ces substances directement sur vos sols intérieurs, où elles se redistribuent par contact et via la poussière. C'est surtout problématique pour les enfants qui jouent au sol.",
          },
          {
            question: "Peut-on aérer même quand l'air extérieur est pollué ?",
            answer:
              "Dans la grande majorité des situations, oui. Même lors de pics de pollution, l'air intérieur est généralement plus chargé en polluants que l'air extérieur, car les sources intérieures (meubles, produits, occupants) s'accumulent en continu dans un espace clos. Lors de pics d'ozone ou de particules fins signalés, limitez l'aération aux heures matinales et évitez les périodes de fort trafic.",
          },
          {
            question: "Ces gestes sont-ils suffisants ou faut-il aussi changer de produits ?",
            answer:
              "Les gestes et les produits sont complémentaires. Certains gestes (aération, chaussures, hotte) ont un impact important sans changer aucun produit. Mais si vous utilisez des produits très émissifs (sprays parfumés, nettoyants à fort solvant), les remplacer amplifie l'effet des gestes. L'idéal est de commencer par les gestes, puis d'évoluer progressivement vers des produits moins émissifs.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Bien aérer son logement",
            description:
              "Les bonnes pratiques d'aération selon la saison, le type de logement et les activités : quand, comment et combien de temps.",
            href: "/air-interieur/bien-aerer-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Réduire l'humidité au quotidien",
            description:
              "Les gestes spécifiques pour maintenir un taux d'hygrométrie sain sans équipements coûteux.",
            href: "/humidite-maison/reduire-humidite-maison/",
          },
          {
            tag: "Produits et habitudes",
            title: "Alternatives aux produits ménagers chimiques",
            description:
              "Les substituts naturels et moins émissifs pour remplacer les produits ménagers les plus problématiques.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
        ]}
      />
    </>
  );
}
