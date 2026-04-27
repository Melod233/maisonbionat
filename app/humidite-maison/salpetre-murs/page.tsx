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
  title: "Salpêtre sur les murs : reconnaître, traiter et prévenir",
  description:
    "Dépôts blanchâtres en bas des murs : reconnaître le salpêtre, le distinguer des moisissures et identifier la cause d'humidité avant tout traitement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/salpetre-murs/",
  },
  openGraph: {
    title: "Salpêtre sur les murs : reconnaître, traiter et prévenir",
    description:
      "Dépôts blanchâtres en bas des murs : reconnaître le salpêtre, le distinguer des moisissures et identifier la cause d'humidité avant tout traitement.",
    url: "https://www.maisonbionat.fr/humidite-maison/salpetre-murs/",
  },
};

const faqItems = [
  {
    question: "Le salpêtre est-il dangereux pour la santé ?",
    answer:
      "Le salpêtre lui-même n'est pas toxique : c'est un dépôt minéral inerte. Le risque sanitaire vient de ce qu'il signale : un mur durablement humide qui favorise les moisissures et les acariens, dont les spores et allergènes dégradent l'air intérieur. C'est cette humidité chronique qu'il faut traiter, pas le dépôt seul.",
  },
  {
    question: "Combien coûte un traitement de salpêtre par injection de résine ?",
    answer:
      "Pour une coupure de capillarité par injection, comptez en moyenne 100 à 250 € le mètre linéaire de mur traité, selon l'épaisseur, le matériau (pierre, brique, parpaing) et l'accessibilité. À cela s'ajoutent les frais de remise en état des finitions intérieures et extérieures. Demandez deux ou trois devis pour comparer méthodes et garanties.",
  },
  {
    question: "Faut-il refaire le mur entier ou juste la zone touchée ?",
    answer:
      "Cela dépend du diagnostic. Une remontée capillaire concerne tout un linéaire de mur, pas seulement la zone visible : le traitement doit suivre la longueur affectée. Une infiltration ponctuelle peut être traitée localement. La zone visible n'est pas toujours représentative de la zone humide réelle, qu'un humidimètre permet de cartographier.",
  },
  {
    question: "Peut-on poser une cloison de doublage pour cacher un mur salpêtré ?",
    answer:
      "Tant que le mur est humide, ce n'est pas une bonne idée : l'humidité piégée derrière la cloison favorisera moisissures et acariens, et le doublage lui-même se dégradera. Si vous décidez de doubler, le mur doit être préalablement asséché, traité, et le doublage doit ménager une lame d'air ventilée et utiliser des matériaux compatibles (laine minérale puis plaque, jamais de polystyrène collé).",
  },
];

export default function SalpetreMursPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    {
      name: "Salpêtre sur les murs : reconnaître, traiter et prévenir",
      href: "https://www.maisonbionat.fr/humidite-maison/salpetre-murs/",
    },
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
        tag="Diagnostic et traitement"
        title="Salpêtre sur les murs : un signal d'humidité structurelle qu'il ne faut pas masquer"
        quickAnswer="Le salpêtre se présente sous forme d'un voile blanchâtre, poudreux ou cristallisé, qui apparaît au bas des murs intérieurs ou extérieurs. Ce n'est pas un champignon mais un dépôt de sels minéraux (nitrates, sulfates, chlorures) laissés par l'eau qui remonte du sol par capillarité, puis qui s'évapore en surface. Il signale presque toujours un problème d'humidité structurelle : remontées capillaires, infiltrations latérales ou condensation sur paroi froide. Le traitement durable passe par l'identification de la source d'eau et son arrêt (drainage, barrière étanche, injection de résine, cuvelage) avant tout traitement de surface. Recouvrir un salpêtre sans traiter la cause garantit son retour, parfois aggravé."
        stats={[
          {
            value: "1,5 m",
            label: "hauteur typique des remontées capillaires sur un mur ancien sans coupure de capillarité",
          },
          {
            value: "Blanc poudreux",
            label: "aspect caractéristique : se désagrège entre les doigts (à différencier des moisissures noires ou vertes)",
          },
          {
            value: "Sels minéraux",
            label: "nitrates, sulfates et chlorures issus du sol, déposés par l'évaporation de l'eau",
          },
          {
            value: "Mur sec",
            label: "préalable indispensable à toute rénovation de finition : peinture, enduit, tapisserie",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Reconnaître le salpêtre" },
          { id: "signes", label: "Distinguer des autres dépôts" },
          { id: "causes", label: "Origines de l'humidité" },
          { id: "actions", label: "Traiter durablement" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'est le salpêtre, et ce qu'il révèle de l'état du mur."
        description="Le terme « salpêtre » désigne familièrement les efflorescences salines qui apparaissent sur les maçonneries humides. Au sens strict, le salpêtre est le nitrate de potassium, mais dans la plupart des cas observés en habitat, le dépôt blanchâtre rassemble en réalité plusieurs sels (sulfates de sodium ou de magnésium, chlorures, nitrates). Ces sels proviennent du sol, sont véhiculés par l'eau qui remonte dans le mur par capillarité, puis se cristallisent à la surface au moment où l'eau s'évapore. Le dépôt en lui-même n'est pas dangereux, mais il signale qu'un mur est en permanence humide à cœur, ce qui dégrade les matériaux, fragilise les enduits et favorise les développements fongiques voisins."
        variants={[
          {
            indicator: "Forme poudreuse",
            name: "Salpêtre récent en cours de cristallisation",
            description:
              "Voile blanc finement poudreux qui se désagrège au toucher. Il peut se former en quelques semaines après une période humide. À ce stade, le mur est très chargé en eau et l'évaporation active. Le dépôt revient rapidement après nettoyage tant que la source d'humidité n'est pas traitée.",
          },
          {
            indicator: "Forme cristallisée",
            name: "Salpêtre ancien, plus dur",
            description:
              "Cristaux compacts, parfois en forme d'aiguilles ou de croûtes, sur des murs anciennement humides. Indique des cycles d'humidification et de séchage répétés, souvent sur plusieurs années. Le mur est durablement altéré, les enduits derrière sont souvent décollés ou pulvérulents.",
          },
          {
            indicator: "Forme noircie ou tachée",
            name: "Salpêtre associé à des moisissures",
            description:
              "Dépôt initialement blanc qui se charge progressivement de moisissures noires ou vertes, signe d'une humidité élevée et constante. Cette association cumule deux problèmes : sels qui dégradent le matériau et spores qui dégradent l'air intérieur. Le traitement doit cibler les deux.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Distinguer le salpêtre d'autres dépôts qui lui ressemblent."
        subtitle="Bien identifier ce qu'on a sur le mur conditionne le traitement. Plusieurs phénomènes donnent des dépôts blanchâtres pour des causes différentes."
        signs={[
          {
            label: "Salpêtre proprement dit (efflorescence saline)",
            description:
              "Voile blanc à blanc-gris, poudreux ou cristallisé, situé typiquement entre 0 et 1,5 m de hauteur. Se désagrège facilement entre les doigts. Apparaît côté intérieur ou extérieur des murs, principalement en partie basse ou autour d'une zone humide ponctuelle.",
            severity: "modéré",
          },
          {
            label: "Moisissures",
            description:
              "Taches colorées (noir, vert, brun, parfois rosé), texture veloutée ou duveteuse. Surviennent en haut des murs, dans les angles, derrière les meubles, près des ponts thermiques. Liées à la condensation, pas aux remontées capillaires. À ne pas traiter comme du salpêtre.",
            severity: "critique",
          },
          {
            label: "Efflorescence cimentaire",
            description:
              "Dépôts blancs sur des murs récemment maçonnés ou enduits au ciment. Issus du carbonate de calcium contenu dans le mortier qui migre en surface lors du séchage initial. Disparaît généralement après quelques mois et n'est pas le signe d'un problème structurel.",
            severity: "léger",
          },
          {
            label: "Dépôts blancs sur revêtement carrelé",
            description:
              "Dans une salle de bain ou cuisine, traces blanches sur les joints ou autour de la robinetterie. Il s'agit de calcaire (carbonate de calcium) déposé par l'eau du robinet, pas de salpêtre. Le traitement est strictement de surface.",
            severity: "léger",
          },
          {
            label: "Pulvérulence d'enduit",
            description:
              "Enduit qui s'effrite au toucher en laissant tomber une poudre blanche, sans dépôt en surface. Signe que le sel a déjà pénétré la masse de l'enduit et le dégrade. Souvent associé à un salpêtre ancien : la finition doit être déposée avant traitement de fond.",
            severity: "modéré",
          },
        ]}
        footerNote="En cas de doute, prélever un peu du dépôt et le rincer à l'eau : le salpêtre se dissout entièrement et reforme un voile blanc en séchant. Une moisissure laisse une tache organique persistante. Cette manipulation suffit souvent à éviter une erreur de diagnostic."
      />

      <IssueCauses
        id="causes"
        title="D'où vient l'humidité qui produit du salpêtre."
        subtitle="Identifier la voie d'eau réelle est plus important que le traitement de surface : sans correction de la cause, le dépôt revient."
        causes={[
          {
            number: "01",
            cause: "Remontées capillaires depuis le sol",
            explanation:
              "Cause la plus fréquente en bâti ancien. L'eau du sol remonte dans les murs par capillarité, à travers les microfissures des matériaux poreux (pierre, brique, terre crue, mortier de chaux). Sans coupure de capillarité (membrane étanche en pied de mur), l'humidité monte typiquement jusqu'à 1 à 1,5 m, parfois plus en pierre.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Infiltrations latérales contre un mur enterré",
            explanation:
              "Pour les murs en contact avec la terre (sous-sols, vides sanitaires, demi-niveaux), la pression hydrostatique pousse l'eau du sol à travers les défauts d'étanchéité. Les sels du sol sont véhiculés et déposés en surface intérieure. Le diagnostic exige souvent une inspection extérieure.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Défauts d'étanchéité en pied de façade",
            explanation:
              "Trottoir, terrasse ou jardinet collés à la façade, gouttières défaillantes, pente inversée vers le mur : ces défauts créent des zones où l'eau de pluie stagne au pied du bâti et s'infiltre. Le résultat est identique à des remontées capillaires, mais la cause est superficielle.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Condensation prolongée sur paroi froide",
            explanation:
              "Sur un mur exposé au nord et faiblement isolé, la condensation chronique d'air chaud humide intérieur peut suffire à dissoudre les sels présents dans le mur et les remonter en surface. Ce salpêtre s'observe souvent en partie haute, contrairement aux remontées capillaires.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Fuite ponctuelle (canalisation, gouttière, toiture)",
            explanation:
              "Une fuite cachée derrière un mur ou dans une dalle peut alimenter le mur en eau pendant des années avant d'être identifiée. Le salpêtre se concentre alors autour d'une zone précise, sans la distribution typique d'une remontée capillaire. Une caméra thermique ou un humidimètre aide au diagnostic.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Traiter durablement le salpêtre, dans le bon ordre."
        immediate={[
          {
            label: "Identifier la cause avant tout traitement",
            description:
              "Faites établir un diagnostic d'humidité par un professionnel indépendant (idéalement non vendeur de traitement) ou un artisan expérimenté. Hauteur du salpêtre, mesure de l'humidité du mur, inspection extérieure : ces données conditionnent le bon traitement. Sans diagnostic, vous risquez un traitement inadapté.",
            effort: "200 à 600 € pour un diagnostic",
          },
          {
            label: "Brosser et neutraliser la surface",
            description:
              "Une fois la source d'eau traitée, brossez à sec le dépôt avec une brosse métallique, dépoussiérez, puis appliquez un neutralisant de sels disponible en magasin de bricolage. C'est une étape de préparation, pas un traitement de fond. Sans assèchement préalable, le sel revient.",
            effort: "Quelques heures, 20 à 50 €",
          },
          {
            label: "Aérer et chauffer pour faire sécher le mur",
            description:
              "Une fois la source d'eau coupée, le mur a besoin de mois pour évacuer l'eau accumulée. Aérez quotidiennement, maintenez un chauffage régulier, retirez tout ce qui plaque le mur (papier peint, doublage). La cinétique de séchage dépend de l'épaisseur et du matériau.",
            effort: "Plusieurs mois",
          },
          {
            label: "Ne pas reposer une finition étanche tant que le mur est humide",
            description:
              "Reposer un enduit ciment, un papier peint vinyle ou une peinture filmogène sur un mur encore chargé d'eau emprisonne l'humidité et accélère la dégradation. Attendez la stabilisation du taux d'humidité du mur avant toute finition, ou utilisez un enduit perspirant à la chaux dans l'intervalle.",
            effort: "Patience",
          },
        ]}
        structural={[
          {
            label: "Coupure de capillarité par injection de résine",
            description:
              "Pour traiter des remontées capillaires, l'injection d'une résine hydrophobe en pied de mur crée une barrière étanche qui stoppe la migration d'eau. C'est aujourd'hui la solution de référence en bâti ancien. Comptez 100 à 250 € le mètre linéaire selon l'épaisseur et le matériau.",
            effort: "Travaux ciblés, 1 à 3 jours",
          },
          {
            label: "Drainage périphérique en façade enterrée",
            description:
              "Pour des murs en contact avec la terre, un drainage périphérique avec membrane d'étanchéité, drain et remblai filtrant règle la cause à la source. C'est l'intervention la plus lourde mais aussi la plus durable, recommandée pour les sous-sols et demi-niveaux humides.",
            effort: "Chantier extérieur",
          },
          {
            label: "Reprise de l'étanchéité périphérique",
            description:
              "Si la cause est superficielle (terrasse collée à la façade, gouttière défectueuse, infiltration en pied), la solution consiste à rétablir une pente correcte, à assurer un éloignement de l'eau du mur et à reprendre les défauts d'étanchéité. Souvent moins coûteux qu'une injection.",
            effort: "Variable selon le défaut",
          },
          {
            label: "Reposer un enduit perspirant après séchage",
            description:
              "Une fois le mur sec et stabilisé, privilégiez des finitions ouvertes à la vapeur d'eau : enduit à la chaux, peinture minérale, plâtre traditionnel. Ces matériaux laissent le mur respirer et limitent le risque de récidive. Évitez les enduits ciment et peintures plastifiantes en bâti ancien.",
            effort: "Travaux de finition",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire avec un mur salpêtré."
        errors={[
          {
            label: "\"Je vais peindre par-dessus pour cacher\"",
            explanation:
              "Recouvrir un salpêtre par une peinture ou un papier peint sans traiter la cause emprisonne l'humidité dans le mur. Les sels continuent à cristalliser sous la finition et finissent par la décoller, parfois en quelques mois. Le mur ressort dans un état dégradé.",
          },
          {
            label: "\"Un enduit ciment va régler le problème\"",
            explanation:
              "Le ciment est étanche à la vapeur d'eau et amplifie le problème en bâti ancien : l'humidité ne pouvant plus s'évaporer en surface, elle remonte plus haut dans le mur. C'est l'une des erreurs les plus fréquentes en rénovation de maisons anciennes en pierre.",
          },
          {
            label: "\"Un produit hydrofuge appliqué sur le mur va suffire\"",
            explanation:
              "Un hydrofuge de surface peut empêcher l'eau de pluie d'entrer, mais il ne traite pas une remontée capillaire qui vient par l'intérieur du mur. Pire, il peut bloquer l'évaporation et aggraver l'humidité résiduelle. À utiliser uniquement après diagnostic, pas en réflexe.",
          },
          {
            label: "\"Je traite avec de l'eau de Javel comme une moisissure\"",
            explanation:
              "Le salpêtre n'est pas un organisme vivant, l'eau de Javel n'a aucun effet sur les sels minéraux. Elle peut au contraire ajouter des chlorures qui aggraveront la cristallisation ultérieure. Utilisez un neutralisant de sels adapté, pas un biocide.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le salpêtre"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Sources d'humidité intérieure",
            description:
              "Cartographier les voies d'entrée d'eau dans un logement avant de choisir un traitement adapté à chaque cas.",
            href: "/humidite-maison/sources-humidite-interieure/",
          },
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "Diagnostic et traitement des moisissures, à distinguer du salpêtre mais souvent associées à un même excès d'humidité.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Diagnostic d'humidité",
            description:
              "Avant tout traitement, comprendre la méthode et les outils pour identifier la cause réelle de l'humidité dans un mur.",
            href: "/humidite-maison/diagnostic-humidite/",
          },
        ]}
      />
    </>
  );
}
