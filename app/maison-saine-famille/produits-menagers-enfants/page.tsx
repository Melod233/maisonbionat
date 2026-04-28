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
  title: "Produits ménagers et enfants : quoi éviter, quoi adopter",
  description:
    "Les enfants sont plus sensibles aux substances chimiques des produits ménagers que les adultes. Lessive, nettoyants, parfums : les produits à éviter et les alternatives adaptées quand on vit avec des enfants.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/produits-menagers-enfants/",
  },
  openGraph: {
    title: "Produits ménagers et enfants : quoi éviter, quoi adopter",
    description:
      "Les enfants sont plus sensibles aux substances chimiques des produits ménagers que les adultes. Lessive, nettoyants, parfums : les produits à éviter et les alternatives adaptées quand on vit avec des enfants.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/produits-menagers-enfants/",
  },
};

export default function ProduitsMenuagersEnfantsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison saine famille", href: "/maison-saine-famille/" },
    { name: "Produits ménagers et enfants : quoi éviter, quoi adopter", href: "https://www.maisonbionat.fr/maison-saine-famille/produits-menagers-enfants/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Maison saine famille"
        parentHref="/maison-saine-famille/"
        tag="Familles"
        title="Produits ménagers avec des enfants : ce qu'il vaut mieux éviter et pourquoi."
        quickAnswer="Les enfants ne sont pas de petits adultes face aux produits chimiques : leur système de détoxification est encore immature, leur peau plus perméable, et ils respirent proportionnellement plus d'air que les adultes. Quelques ajustements ciblés sur les produits les plus utilisés suffisent à réduire significativement leur exposition quotidienne."
        stats={[
          { value: "×6", label: "temps d'élimination d'un pesticide chez un nourrisson vs adulte (exemple chlorpyrifos)" },
          { value: "26", label: "parfums classés allergènes prioritaires par la réglementation européenne" },
          { value: "80-90 %", label: "du temps passé en espace clos pour les enfants (ANSES)" },
          { value: "A+", label: "label minimum pour les produits de revêtement en contact fréquent" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Évaluer vos produits" },
          { id: "signes", label: "Signaux d'alerte" },
          { id: "causes", label: "Substances problématiques" },
          { id: "actions", label: "Plan d'action" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Identifier les produits à revoir en priorité"
        description="Tous les produits ménagers ne posent pas le même niveau de risque avec des enfants. Trois facteurs permettent d'évaluer le degré de priorité d'un produit."
        variants={[
          {
            indicator: "Usage dans les espaces occupés par les enfants",
            name: "Exposition directe par inhalation",
            description:
              "Les sprays, aérosols et produits pulvérisés libèrent des particules et des COV dans l'air ambiant. Un spray nettoyant utilisé dans la chambre d'un enfant ou dans le salon expose directement l'enfant présent. La règle la plus simple : ne pas utiliser de spray en présence d'enfants et aérer après application.",
          },
          {
            indicator: "Contact prolongé avec la peau",
            name: "Absorption cutanée",
            description:
              "La peau des enfants est plus fine et plus perméable que celle des adultes. Les résidus de lessive sur les vêtements ou la literie restent en contact avec la peau pendant plusieurs heures. Les produits pour les surfaces que les enfants touchent (sols, mobilier bas) méritent aussi une attention particulière.",
          },
          {
            indicator: "Produits parfumés utilisés en grande quantité",
            name: "Irritation des voies respiratoires",
            description:
              "Assouplissants, produits nettoyants parfumés, bougies, désodorisants : les parfums de synthèse sont parmi les 26 allergènes répertoriés par la réglementation européenne. Chez les enfants, ils peuvent provoquer irritations, rhumes chroniques ou aggraver un asthme existant.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Signaux qui invitent à revoir les produits utilisés"
        subtitle="Ces signes ne permettent pas d'établir un lien de cause à effet direct, mais ils méritent d'être mis en regard des produits utilisés dans le foyer."
        signs={[
          {
            label: "Rhume chronique ou nez bouché sans infection",
            description:
              "Une congestion nasale persistante, sans fièvre ni contexte viral, peut indiquer une irritation chronique des muqueuses par des substances parfumées ou des COV présents dans l'air intérieur.",
            severity: "léger",
          },
          {
            label: "Toux sèche fréquente, surtout à l'intérieur",
            description:
              "Une toux qui survient principalement à la maison, qui diminue en vacances ou en plein air, peut être liée à une irritation par des produits ménagers ou des parfums d'ambiance.",
            severity: "modéré",
          },
          {
            label: "Rougeurs ou eczéma sur les zones en contact avec le linge",
            description:
              "Des rougeurs dans les plis, sur le tronc ou dans le cou, apparaissant ou s'aggravant après un changement de lessive, orientent vers une sensibilisation aux parfums ou aux conservateurs contenus dans le produit.",
            severity: "modéré",
          },
          {
            label: "Yeux rouges ou qui piquent sans cause identifiée",
            description:
              "Les irritations oculaires répétées, sans allergie pollinique connue, peuvent résulter d'une exposition à des produits volatils dans l'air intérieur, notamment les sprays et les parfums d'ambiance.",
            severity: "léger",
          },
          {
            label: "Éruption cutanée après le bain ou le change",
            description:
              "Une peau qui réagit après le bain peut indiquer une sensibilité aux agents lavants ou aux parfums contenus dans le gel douche ou le shampoing. Un produit sans parfum, sans colorant et à pH neutre est souvent suffisant pour éliminer le problème.",
            severity: "modéré",
          },
          {
            label: "Aggravation des symptômes après le ménage",
            description:
              "Si l'enfant tousse ou a les yeux qui piquent dans les heures suivant le nettoyage de la maison, les produits utilisés méritent d'être examinés, notamment leur format (spray) et leur composition (parfums, chlore, alcool).",
            severity: "critique",
          },
        ]}
        footerNote="Ces signaux ne remplacent pas un avis médical. En cas de symptômes persistants, consulter un pédiatre ou un allergologue pour un bilan adapté."
      />

      <IssueCauses
        id="causes"
        title="Les substances les plus préoccupantes dans les produits courants"
        subtitle="Ce n'est pas tant le produit que sa formulation qui compte. Les mêmes fonctions peuvent être assurées par des formules bien plus compatibles avec la présence d'enfants."
        causes={[
          {
            number: "01",
            cause: "Parfums de synthèse dans les produits d'entretien et de lessive",
            explanation:
              "26 substances parfumantes sont classées allergènes prioritaires par la réglementation européenne et doivent être signalées en étiquetage dès qu'elles dépassent un seuil défini. Ces substances peuvent provoquer des sensibilisations cutanées, des irritations respiratoires et aggraver l'asthme. Les assouplissants et les lessives parfumées sont les sources les plus fréquentes dans les foyers avec enfants.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Isothiazolinones (conservateurs) dans les produits ménagers et cosmétiques",
            explanation:
              "La MIT (méthylisothiazolinone) et la CMIT sont des conservateurs très répandus dans les produits ménagers et de soin, reconnus pour leur fort pouvoir sensibilisant. La réglementation européenne a progressivement restreint leur usage en cosmétiques, mais ils restent présents dans de nombreux produits d'entretien. Les pédiatres et allergologues recommandent de les éviter pour les enfants.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Sprays et aérosols en présence d'enfants",
            explanation:
              "Les sprays génèrent des gouttelettes fines qui restent en suspension dans l'air et sont inhalées directement. Ils multiplient l'exposition aux substances actives et aux parfums par rapport à un produit appliqué sur tissu. Utiliser des flacons verseurs ou des éponges plutôt que des sprays dans les pièces où vivent les enfants.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Désinfectants et produits chlorés utilisés en excès",
            explanation:
              "Le chlore et les désinfectants puissants irritent les muqueuses respiratoires et peuvent aggraver l'asthme. Dans un contexte domestique normal, un nettoyage avec un détergent simple suivi d'un rinçage est suffisant pour les surfaces courantes. La désinfection intensive est justifiée dans des contextes sanitaires spécifiques, pas au quotidien.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Produits de soin parfumés pour les bains",
            explanation:
              "Les gels douche, shampooings et savons liquides parfumés pour enfants contiennent souvent plusieurs allergènes potentiels. La peau des jeunes enfants étant plus perméable, les substances peuvent pénétrer plus facilement. Un pain de savon de Marseille non parfumé ou un gel douche sans parfum est suffisant pour la majorité des enfants.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Ajuster les produits progressivement, dans l'ordre utile."
        immediateLabel="Les changements prioritaires"
        structuralLabel="Pour aller plus loin"
        immediate={[
          {
            label: "Passer à une lessive sans parfum et sans isothiazolinones",
            description:
              "C'est le changement le plus impactant, car le linge est en contact direct et prolongé avec la peau des enfants. Choisir une lessive hypoallergénique sans parfum, sans azurant optique et sans conservateurs de type MIT/CMIT. Le rinçage supplémentaire réduit les résidus.",
            effort: "Changement d'achat",
          },
          {
            label: "Remplacer les sprays par des formats sans aérosol",
            description:
              "Passer aux flacons verseurs, aux goupillons, aux éponges ou aux lingettes pour les surfaces touchées par les enfants. Conserver les sprays uniquement pour les pièces que les enfants n'utilisent pas (toilettes, garage) et aérer après usage.",
            effort: "Changement d'habitude",
          },
          {
            label: "Ne pas utiliser de produits parfumés dans les chambres d'enfants",
            description:
              "Désodorisants, sprays textiles, bougies, encens : ces produits n'ont pas de place dans une chambre d'enfant. L'aération régulière est la seule méthode saine pour renouveler l'air d'une pièce.",
            effort: "Gratuit",
          },
          {
            label: "Choisir un produit de soin sans parfum pour le bain",
            description:
              "Un gel douche ou un savon sans parfum, sans colorant et adapté aux peaux sensibles suffit pour la toilette des enfants. Éviter les produits contenant des huiles essentielles pour les moins de 3 ans.",
            effort: "Changement d'achat",
          },
        ]}
        structural={[
          {
            label: "Simplifier la gamme de produits d'entretien",
            description:
              "Un nettoyant multi-surfaces sans parfum, du bicarbonate, du savon noir et du vinaigre blanc couvrent la majorité des besoins d'entretien courant. Réduire le nombre de produits réduit aussi la diversité des expositions.",
            effort: "Progressif",
          },
          {
            label: "Lire les étiquettes et identifier les allergènes déclarés",
            description:
              "Depuis 2021, les produits ménagers doivent déclarer sur leur étiquette les parfums allergènes dès un certain seuil. Vérifier la présence des 26 parfums classés allergènes prioritaires et des conservateurs MIT/CMIT dans les formulations.",
            effort: "Vigilance à l'achat",
          },
          {
            label: "Aérer systématiquement après tout nettoyage",
            description:
              "Même avec des produits de bonne formulation, aérer les pièces après le ménage permet d'évacuer les résidus volatils. Attendre que la pièce soit aérée avant d'y laisser revenir les enfants après un nettoyage intensif.",
            effort: "Bonne pratique",
          },
          {
            label: "Ranger les produits hors de portée et dans une pièce ventilée",
            description:
              "Les produits de nettoyage stockés sous l'évier ou dans un placard fermé peuvent émettre des COV dans l'air ambiant même sans être utilisés. Les stocker dans une pièce ventilée (garage, débarras) ou dans un meuble aéré réduit l'exposition de fond.",
            effort: "Organisation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs les plus fréquentes avec les produits ménagers et les enfants."
        errors={[
          {
            label: "Utiliser des produits 'naturels' sans vérifier leur composition",
            explanation:
              "Un produit étiqueté 'naturel' ou 'écologique' peut contenir des huiles essentielles, des parfums naturels ou des conservateurs issus du végétal qui sont eux aussi allergènes. Les huiles essentielles sont déconseillées pour les moins de 3 ans. Vérifier la composition reste indispensable, quelle que soit la promesse commerciale.",
          },
          {
            label: "Penser qu'un rinçage suffit pour éliminer les résidus de lessive",
            explanation:
              "Les résidus de lessive restent présents dans les fibres du linge, surtout avec les cycles courts ou les dosages excessifs. Un cycle de rinçage supplémentaire réduit significativement les résidus. Respecter les dosages recommandés et éviter de surdoser.",
          },
          {
            label: "Mélanger des produits ménagers pour renforcer leur efficacité",
            explanation:
              "Mélanger de l'eau de Javel avec du vinaigre produit du chlore gazeux, un irritant puissant. Mélanger de l'eau de Javel avec de l'ammoniaque produit des chloramines toxiques. Ces mélanges sont dangereux en présence d'enfants. Ne jamais mélanger des produits d'entretien.",
          },
          {
            label: "Utiliser le même produit pour toutes les surfaces dans les pièces d'enfants",
            explanation:
              "Les surfaces que les enfants touchent et portent à la bouche (jouets, sols, mobilier bas) méritent un nettoyage à l'eau avec un savon doux suivi d'un rinçage, plutôt qu'un nettoyant multi-surfaces. La désinfection intensive n'est pas justifiée pour l'entretien courant.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les produits ménagers avec des enfants"
        items={[
          {
            question: "Quelle lessive choisir pour le linge des enfants ?",
            answer:
              "Privilégier une lessive certifiée hypoallergénique, sans parfum, sans azurant optique, sans isothiazolinones (MIT/CMIT) et sans phosphonates. Les lessives certifiées Ecocert ou NF Environnement offrent une garantie supplémentaire. Pour les nourrissons et les peaux très sensibles, un cycle de rinçage supplémentaire réduit les résidus dans les fibres.",
          },
          {
            question: "Le vinaigre blanc est-il sans risque pour nettoyer en présence d'enfants ?",
            answer:
              "Le vinaigre blanc (acide acétique dilué à 8-14 %) est un bon détartrant naturel, sans risque particulier pour les enfants en usage domestique normal. Son odeur se dissipe rapidement. Il ne désinfecte pas à cette concentration, mais c'est rarement nécessaire pour l'entretien courant. En revanche, ne jamais le mélanger avec de l'eau de Javel.",
          },
          {
            question: "Les lingettes nettoyantes sont-elles adaptées avec des enfants ?",
            answer:
              "Les lingettes contiennent souvent des conservateurs (isothiazolinones) et des parfums. Elles ne sont pas recommandées pour le nettoyage des surfaces que les enfants touchent régulièrement. Pour un nettoyage pratique, une éponge humide avec un peu de savon de Marseille ou de savon noir est une alternative simple et sans résidus préoccupants.",
          },
          {
            question: "Peut-on utiliser de l'eau de Javel dans une maison avec des enfants ?",
            answer:
              "L'eau de Javel est un désinfectant puissant qui dégage du chlore gazeux irritant pour les voies respiratoires. Son usage dans un contexte domestique courant n'est pas nécessaire : un nettoyant standard suivi d'un rinçage suffit pour les surfaces courantes. Si son usage est indispensable (gastro-entérite, contamination biologique), l'utiliser en solution diluée, bien ventiler et faire sortir les enfants de la pièce pendant et après l'application.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Pièce par pièce",
            title: "Chambre d'enfant saine",
            description:
              "Ventilation, matériaux et entretien : les priorités pour améliorer la qualité de l'air dans la chambre de votre enfant.",
            href: "/piece-par-piece/chambre-enfant-saine/",
          },
          {
            tag: "Produits et habitudes",
            title: "Alternatives aux produits ménagers classiques",
            description:
              "Bicarbonate, savon noir, vinaigre blanc : quelles alternatives pour quels usages, et leurs limites réelles.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
          {
            tag: "Produits et habitudes",
            title: "Choisir une lessive saine",
            description:
              "Les critères à vérifier pour choisir une lessive adaptée aux peaux sensibles et aux enfants.",
            href: "/produits-et-habitudes/lessive-saine/",
          },
        ]}
      />
    </>
  );
}
