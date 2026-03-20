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
  title: "Aération ou ventilation : quelle différence et comment bien combiner les deux",
  description:
    "Aération manuelle et VMC ne font pas le même travail. Comprendre les deux approches, leurs limites et comment les combiner pour un air intérieur vraiment sain.",
  alternates: { canonical: "https://www.maisonbionat.fr/air-interieur/aeration-ou-ventilation/" },
  openGraph: {
    title: "Aération ou ventilation : quelle différence et comment bien combiner les deux",
    description:
      "Aération manuelle et VMC ne font pas le même travail. Comprendre les deux approches, leurs limites et comment les combiner pour un air intérieur vraiment sain.",
    url: "https://www.maisonbionat.fr/air-interieur/aeration-ou-ventilation/",
  },
};

export default function AerationOuVentilationPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Aération ou ventilation : quelle différence et comment bien combiner les deux", href: "https://www.maisonbionat.fr/air-interieur/aeration-ou-ventilation/" },
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
        tag="Comprendre"
        title="Aération ou ventilation : deux approches complémentaires, pas interchangeables."
        quickAnswer="L'aération est une action humaine volontaire : ouvrir les fenêtres dilue rapidement les polluants accumulés, mais elle est ponctuelle et dépend de vous. La VMC est un système permanent qui assure un débit d'air minimal réglementaire en continu. Les deux sont nécessaires : l'une ne remplace pas l'autre."
        stats={[
          { value: "10 min", label: "durée minimale d'aération recommandée, deux fois par jour" },
          { value: "24h/24", label: "fonctionnement continu d'une VMC correctement réglée" },
          { value: "80–90 %", label: "du temps passé en intérieur (OMS) : la ventilation permanente est décisive" },
          { value: "6 mois", label: "fréquence de nettoyage des bouches VMC recommandée" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Deux approches complémentaires" },
          { id: "signes", label: "Quand chaque approche suffit ou ne suffit pas" },
          { id: "causes", label: "Pourquoi les confondre pose problème" },
          { id: "actions", label: "Comment bien combiner les deux" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Deux approches complémentaires"
        title="Aération et ventilation : deux mécanismes distincts"
        description="Confondre aération et ventilation conduit à croire que l'une dispense de l'autre. En réalité, elles agissent sur des temporalités différentes et répondent à des besoins distincts. Les comprendre permet d'agir efficacement sur les deux fronts."
        variants={[
          {
            indicator: "Action humaine, ponctuelle",
            name: "L'aération : dilution rapide et efficace, mais intermittente",
            description:
              "Ouvrir une ou plusieurs fenêtres renouvelle l'air en quelques minutes et fait chuter les concentrations de CO2, de vapeur et de polluants récemment émis. C'est immédiatement efficace pour les pics de vapeur (après une douche, pendant la cuisson) ou pour purger l'air après un nettoyage. Mais cela s'arrête dès que vous fermez les fenêtres.",
          },
          {
            indicator: "Système mécanique, permanent",
            name: "La VMC : débit continu et maîtrisé, mais limité aux pics",
            description:
              "Une ventilation mécanique contrôlée assure un renouvellement d'air permanent, défini par les débits réglementaires (décret du 22 décembre 1969 pour les bâtiments existants). Elle maintient une qualité d'air de base acceptable en continu, mais son débit est calculé pour un usage courant : il est insuffisant pour évacuer un pic de vapeur en cuisine ou en salle de bain en temps réel.",
          },
          {
            indicator: "Complémentarité obligatoire",
            name: "Ensemble, elles couvrent tous les besoins",
            description:
              "La VMC gère le fond permanent : CO2 expiré, odeurs diffuses, humidité résiduelle. L'aération gère les pics : cuisson, douche, produits ménagers, meubles neufs. Supprimer l'une ou l'autre crée un déséquilibre. Un logement bien ventilé mais jamais aéré accumule les pics. Un logement aéré mais sans VMC voit sa qualité d'air se dégrader dès que les fenêtres sont fermées.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Reconnaître les limites"
        title="Les signaux qui montrent que l'une ou l'autre approche ne suffit pas"
        subtitle="Ces signes indiquent souvent un déséquilibre entre aération et ventilation, pas toujours un problème de matériaux ou de produits."
        signs={[
          {
            label: "Condensation régulière sur les vitres le matin",
            description:
              "La vapeur produite pendant la nuit (respiration, transpiration) s'est accumulée faute de ventilation suffisante. La VMC seule ne compense pas si elle est mal réglée ou obstruée.",
            severity: "modéré",
          },
          {
            label: "Odeurs persistantes même après aération",
            description:
              "Si l'odeur revient rapidement après fermeture des fenêtres, la source est active (meuble émettant des COV, humidité derrière une paroi) et l'aération seule ne suffit pas à la maîtriser.",
            severity: "modéré",
          },
          {
            label: "Sensation de fatigue ou de maux de tête en intérieur",
            description:
              "Un CO2 supérieur à 1 000 ppm dégrade la qualité du sommeil et la vigilance. Cela arrive dans les pièces fermées mal ventilées, notamment les chambres. Une VMC correctement dimensionnée maintient ce seuil, mais une aération le matin aide à purger l'air de la nuit.",
            severity: "modéré",
          },
          {
            label: "Apparition de moisissures dans les angles ou derrière les meubles",
            description:
              "Un taux d'humidité durablement supérieur à 65 % favorise le développement des moisissures. C'est le signe d'une ventilation insuffisante pour le débit de vapeur produit dans le logement.",
            severity: "critique",
          },
          {
            label: "Logement aéré quotidiennement mais air qui semble toujours lourd",
            description:
              "Si l'aération est régulière mais que l'air reste pesant, la VMC fonctionne probablement mal ou les bouches sont obstruées. L'aération ne peut pas compenser une ventilation mécanique défaillante.",
            severity: "modéré",
          },
          {
            label: "VMC en fonctionnement mais humidité élevée en permanence",
            description:
              "Une VMC hygrorégulable ajuste son débit à l'humidité ambiante. Si l'humidité reste haute, les capteurs sont peut-être encrassés ou le débit est sous-dimensionné pour le logement. Une aération complémentaire après la douche ou en cuisine reste nécessaire.",
            severity: "léger",
          },
        ]}
        footerNote="Ces signaux n'indiquent pas forcément un problème grave, mais ils méritent d'être vérifiés. Commencez par contrôler l'état des bouches VMC et la régularité de l'aération avant d'envisager des travaux."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi la confusion pose problème"
        title="Ce qui arrive quand on confond aération et ventilation"
        subtitle="Croire qu'une seule approche suffit crée des angles morts dans la qualité de l'air."
        causes={[
          {
            number: "01",
            cause: "Se reposer uniquement sur l'aération, sans VMC fonctionnelle",
            explanation:
              "L'aération est efficace pendant les 10 à 15 minutes d'ouverture. Dès la fermeture des fenêtres, les polluants et la vapeur se reconstituent. Sans VMC, les concentrations remontent rapidement, surtout dans les pièces humides. La réglementation impose une ventilation mécanique dans les logements construits après 1982.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Croire que la VMC dispense d'aérer",
            explanation:
              "Une VMC bien entretenue assure le débit de base, mais ne peut pas évacuer un pic de vapeur en cuisine ou en salle de bain aussi vite qu'une fenêtre ouverte. Elle est conçue pour un usage courant, pas pour les moments de forte émission. L'aération reste indispensable dans ces contextes.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Obstruer les entrées d'air pour limiter les courants",
            explanation:
              "Les entrées d'air en haut des fenêtres ou dans les murs permettent à la VMC de fonctionner correctement. Les boucher pour éviter les courants d'air ou le bruit coupe le circuit de ventilation et rend la VMC inefficace, même si elle tourne.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Ne pas entretenir la VMC et compenser par l'aération",
            explanation:
              "Des bouches VMC encrassées réduisent le débit réel de façon significative. Certains logements aèrent davantage pour compenser, sans réaliser que le problème est la VMC. La solution est d'entretenir le système, pas de multiplier les ouvertures de fenêtres.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Aérer dans de mauvaises conditions sans VMC de secours",
            explanation:
              "Par grand froid, pic de pollution extérieure ou saison des pollens, aérer est contre-indiqué ou limité. Sans VMC fonctionnelle, le logement est alors en sous-ventilation complète. C'est pour ces situations que la VMC est indispensable : elle maintient le renouvellement d'air même quand l'aération est impossible.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Comment bien combiner aération et ventilation au quotidien"
        immediateLabel="Aération"
        structuralLabel="Ventilation"
        immediate={[
          {
            label: "Aérer 10 minutes le matin, fenêtres en opposition",
            description:
              "Ouvrir deux fenêtres face à face crée un courant d'air traversant qui renouvelle l'air de toute la pièce, pas seulement près des ouvertures. C'est la méthode la plus efficace pour purger rapidement l'air de la nuit.",
            effort: "Gratuit, 10 min par jour",
          },
          {
            label: "Aérer pendant et après la cuisine",
            description:
              "La cuisson au gaz émet du NO2 et des particules fines. Ouvrir la fenêtre de cuisine pendant la cuisson réduit les concentrations. La hotte aspirante (si elle évacue vers l'extérieur) complète l'aération, mais ne la remplace pas.",
            effort: "Réflexe à adopter",
          },
          {
            label: "Ouvrir la fenêtre de salle de bain après la douche",
            description:
              "Une douche produit plusieurs litres de vapeur en quelques minutes. L'aération post-douche, même 5 à 10 minutes, évite d'engorger la VMC et réduit le risque de condensation et de moisissures.",
            effort: "5 à 10 min après la douche",
          },
          {
            label: "Adapter la durée à la saison",
            description:
              "En hiver, 5 à 10 minutes suffisent : l'air froid entrant se réchauffe vite et dilue les polluants efficacement. En été, on peut prolonger selon la température extérieure. L'important est la régularité, pas la durée.",
            effort: "Ajustement saisonnier",
          },
        ]}
        structural={[
          {
            label: "Vérifier que les bouches VMC sont dégagées et propres",
            description:
              "Des bouches obstruées par de la poussière ou du gras réduisent le débit. Nettoyez-les tous les 6 mois avec un chiffon humide. C'est la première vérification à faire si l'air vous semble lourd malgré l'aération.",
            effort: "15 min tous les 6 mois",
          },
          {
            label: "Ne jamais obstruer les entrées d'air",
            description:
              "Les entrées d'air (en haut des fenêtres ou dans les murs) alimentent la VMC en air frais. Si elles sont bouchées, la VMC ne peut pas créer de flux. Vérifiez qu'elles sont ouvertes et propres.",
            effort: "Vérification ponctuelle",
          },
          {
            label: "Faire contrôler la VMC tous les 3 à 5 ans",
            description:
              "Un technicien peut mesurer les débits réels et vérifier que le système est correctement équilibré. Un diagnostic professionnel coûte entre 100 et 300 euros selon le type d'installation.",
            effort: "100 à 300 euros, tous les 3 à 5 ans",
          },
          {
            label: "Envisager une VMC double flux si vous rénovez",
            description:
              "La VMC double flux récupère la chaleur de l'air extrait pour préchauffer l'air entrant. Elle offre un meilleur confort thermique et une qualité d'air supérieure, mais demande une installation complète et un entretien plus rigoureux des filtres.",
            effort: "3 000 à 8 000 euros selon le logement",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut pas faire"
        errors={[
          {
            label: "Croire qu'une seule approche suffit",
            explanation:
              "Aération seule ou VMC seule : les deux créent des angles morts. L'une gère les pics, l'autre gère le fond permanent. Elles sont complémentaires par conception.",
          },
          {
            label: "Boucher les entrées d'air pour éviter les courants",
            explanation:
              "Sans entrée d'air, la VMC ne peut pas créer de flux traversant. Le système tourne à vide et le logement est sous-ventilé en permanence, même si la VMC fonctionne électriquement.",
          },
          {
            label: "Compenser une VMC défaillante par l'aération",
            explanation:
              "Aérer davantage quand la VMC est encrassée ou en panne ne résout pas le problème de fond. C'est le système qui doit être entretenu, pas le comportement qui doit être amplifié.",
          },
          {
            label: "Ne pas aérer en hiver pour économiser la chaleur",
            explanation:
              "En 10 minutes d'aération, la perte thermique est limitée si les radiateurs sont coupés pendant ce temps. En revanche, un air vicié en continu a un impact réel sur le confort et la santé.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur aération et ventilation"
        items={[
          {
            question: "La VMC peut-elle remplacer complètement l'aération ?",
            answer:
              "Non. Une VMC assure un débit d'air minimal continu, mais son débit est calibré pour un usage courant. Elle ne peut pas évacuer aussi rapidement qu'une fenêtre ouverte les pics de vapeur produits lors d'une douche, d'une cuisson ou d'un nettoyage. L'aération reste nécessaire pour ces moments.",
          },
          {
            question: "Si j'aère régulièrement, ai-je encore besoin d'une VMC ?",
            answer:
              "Oui, la VMC est indispensable. L'aération s'arrête dès que vous fermez les fenêtres. La VMC maintient un renouvellement d'air en continu, y compris la nuit, pendant les périodes de grand froid, ou lors des pics de pollution extérieure. La réglementation impose une ventilation mécanique dans les logements construits après 1982.",
          },
          {
            question: "Combien de temps faut-il aérer pour renouveler l'air d'une pièce ?",
            answer:
              "10 minutes suffisent si vous créez un courant d'air traversant (deux fenêtres en opposition). Ouvrir une seule fenêtre est bien moins efficace : l'air s'échange surtout près de l'ouverture et les concentrations de polluants au centre de la pièce baissent peu.",
          },
          {
            question: "Quelle est la différence entre VMC simple flux et double flux ?",
            answer:
              "Une VMC simple flux extrait l'air vicié des pièces humides (cuisine, salle de bain, WC) et laisse entrer l'air frais par des entrées d'air passives. Une VMC double flux extrait l'air vicié et insuffle simultanément de l'air frais filtré, en récupérant la chaleur de l'air extrait. Le double flux est plus performant mais plus coûteux à installer et à entretenir.",
          },
          {
            question: "Peut-on aérer quand il fait très froid dehors ?",
            answer:
              "Oui, mais en limitant la durée à 5 à 10 minutes. L'air froid entre et se réchauffe rapidement. La perte thermique est réelle mais limitée si vous coupez le chauffage pendant le temps d'aération. En revanche, par grand gel ou fort vent froid, réduire la durée est raisonnable.",
          },
          {
            question: "La VMC est-elle obligatoire dans un logement ?",
            answer:
              "Dans les logements construits après 1982, une ventilation mécanique est obligatoire selon la réglementation française. Pour les bâtiments plus anciens, une ventilation naturelle ou des dispositifs alternatifs sont acceptables, mais une VMC reste fortement recommandée pour maintenir une qualité d'air suffisante.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Bien aérer sa maison au quotidien",
            description:
              "La technique d'aération efficace selon les pièces, les saisons et les moments de la journée.",
            href: "/air-interieur/bien-aerer-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Entretenir sa VMC",
            description:
              "Protocole d'entretien selon le type de VMC : simple flux, double flux, hygro. Quand intervenir soi-même et quand appeler un professionnel.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            tag: "Air intérieur",
            title: "Améliorer l'air dans sa maison",
            description:
              "Stratégie complète pour réduire les polluants : aération, ventilation, choix de matériaux et gestes du quotidien.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
        ]}
      />
    </>
  );
}
