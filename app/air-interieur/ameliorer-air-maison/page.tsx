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
  title: "Améliorer l'air de sa maison : méthode concrète et priorités",
  description:
    "Comment améliorer l'air intérieur de son logement concrètement : ventilation, réduction des sources, choix de matériaux. Sans alarmisme, avec des priorités claires.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/ameliorer-air-maison/",
  },
  openGraph: {
    title: "Améliorer l'air de sa maison : méthode concrète et priorités",
    description:
      "Comment améliorer l'air intérieur de son logement concrètement : ventilation, réduction des sources, choix de matériaux. Sans alarmisme, avec des priorités claires.",
    url: "https://www.maisonbionat.fr/air-interieur/ameliorer-air-maison/",
  },
};

export default function AmeliorerAirMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Améliorer l'air de sa maison : méthode concrète et priorités", href: "https://www.maisonbionat.fr/air-interieur/ameliorer-air-maison/" },
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
        tag="Agir concrètement"
        title="Améliorer l'air de sa maison. Par où commencer vraiment."
        quickAnswer="Améliorer la qualité de l'air intérieur ne nécessite pas de travaux lourds dans la majorité des cas. Trois axes suffisent pour la plupart des logements : ventiler correctement, réduire les sources d'émission, et choisir de meilleurs matériaux lors des achats ou travaux. L'ordre et la régularité comptent plus que les équipements coûteux."
        stats={[
          { value: "10 min", label: "d'aération matin et soir suffisent à diviser par 2 la concentration de COV" },
          { value: "6 mois", label: "délai recommandé entre deux nettoyages des bouches VMC" },
          { value: "A+", label: "étiquetage minimum pour peintures, sols et meubles neufs" },
          { value: "40–60%", label: "taux d'humidité idéal pour limiter moisissures et acariens" },
        ]}
        anchors={[
          { id: "diagnostic", label: "État des lieux" },
          { id: "signes", label: "Signaux d'un air dégradé" },
          { id: "causes", label: "Ce qui dégrade l'air" },
          { id: "actions", label: "Que faire" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="État des lieux"
        title="Trois niveaux d'action selon la situation de votre logement."
        description="Améliorer l'air intérieur ne suit pas un chemin unique. La stratégie dépend du logement, de son âge, de son état de ventilation et des activités qui s'y déroulent. Identifier votre situation permet de cibler les actions les plus pertinentes."
        variants={[
          {
            indicator: "Logement bien ventilé, sans problème apparent",
            name: "Consolidation et prévention",
            description:
              "Aération régulière, VMC fonctionnelle, pas de moisissures. Priorité : maintenir les habitudes d'aération, vérifier les bouches VMC deux fois par an, choisir des matériaux A+ lors des prochains achats. Pas de travaux urgents nécessaires.",
          },
          {
            indicator: "Logement avec condensation ou odeurs récurrentes",
            name: "Ventilation à corriger",
            description:
              "Buée persistante, odeurs qui ne disparaissent pas avec l'aération, moisissures ponctuelles. Priorité : diagnostic de la VMC, amélioration des habitudes d'aération, réduction des sources de vapeur. Ces problèmes se résolvent souvent sans travaux lourds.",
          },
          {
            indicator: "Logement rénové récemment ou avec mobilier neuf",
            name: "Dégazage et dilution",
            description:
              "Pendant les 6 à 12 mois suivant une rénovation ou l'installation de nouveaux meubles, les émissions de COV sont à leur niveau maximal. Ventilation intensive quotidienne obligatoire. Pas de peinture ni de pose de sol sans période de dégazage planifiée.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Signaux d'alerte"
        title="Comment reconnaître un air intérieur dégradé."
        subtitle="Ces signaux ne sont pas tous évidents. Certains s'installent progressivement."
        signs={[
          {
            label: "Maux de tête fréquents à domicile, absents à l'extérieur",
            description:
              "Un mal de tête récurrent en intérieur qui disparaît à l'air libre ou après une aération prolongée est un signal classique d'exposition aux polluants intérieurs : COV, CO₂ accumulé, ou monoxyde de carbone dans les cas les plus graves.",
            severity: "critique",
          },
          {
            label: "Irritations des yeux, de la gorge ou des voies respiratoires",
            description:
              "Les COV et les particules fines irritent les muqueuses. Si ces symptômes apparaissent régulièrement chez vous et s'améliorent en dehors du logement, ils méritent investigation.",
            severity: "modéré",
          },
          {
            label: "Condensation sur les vitres en hiver",
            description:
              "De la buée qui se forme régulièrement sur les fenêtres intérieures indique un taux d'humidité trop élevé dans le logement. Ce n'est pas dangereux en soi, mais c'est le signe que l'air n'est pas suffisamment renouvelé.",
            severity: "léger",
          },
          {
            label: "Odeur persistante malgré une aération",
            description:
              "Si l'odeur revient rapidement après une aération, il y a une source active : moisissures, matériaux émissifs, produits de combustion. L'odeur est un signal de mesure : elle indique une concentration élevée de composés volatils.",
            severity: "modéré",
          },
          {
            label: "Fatigue inhabituelle ou sommeil peu récupérateur",
            description:
              "Une chambre mal ventilée voit son taux de CO₂ augmenter pendant la nuit. Un air chargé en CO₂ réduit la qualité du sommeil et génère une fatigue matinale. L'aération avant de dormir et après le réveil améliore mesurable la situation.",
            severity: "léger",
          },
          {
            label: "Présence visible de poussière grise sur les surfaces",
            description:
              "Une accumulation rapide de poussière, notamment sur les prises électriques, les plinthes ou autour des bouches VMC, peut indiquer des charges de particules fines élevées dans l'air.",
            severity: "léger",
          },
        ]}
        footerNote="Ces signaux sont indicatifs, pas diagnostiques. La plupart des problèmes de qualité d'air intérieur se règlent par la ventilation et la réduction des sources, sans recours à des mesures instrumentales coûteuses."
      />

      <IssueCauses
        id="causes"
        title="Ce qui dégrade la qualité de l'air dans un logement."
        causes={[
          {
            number: "01",
            cause: "Renouvellement d'air insuffisant",
            explanation:
              "C'est la première cause dans la quasi-totalité des logements : la vapeur d'eau, le CO₂, les COV et les particules s'accumulent faute d'évacuation. Une VMC sous-débitante ou absente, des grilles obturées ou une absence d'aération manuelle créent ce problème.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Sources d'émission non maîtrisées",
            explanation:
              "Produits ménagers en spray, bougies, parfums d'ambiance, matériaux récents non dégazés : chaque source ajoute des polluants chimiques à l'air. Dans un logement peu ventilé, leur effet cumulatif peut être significatif.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Humidité excessive et moisissures",
            explanation:
              "Un taux d'humidité supérieur à 60 % favorise les moisissures et les acariens. Les spores de moisissures sont des polluants biologiques qui irritent les voies respiratoires. L'humidité provient des activités quotidiennes (douches, cuisine, linge) si la ventilation est insuffisante.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Combustion en intérieur sans extraction",
            explanation:
              "Cuisiner sans hotte extractrice, allumer des bougies ou un feu de cheminée dans un espace mal ventilé génère des particules fines et des gaz de combustion. Ces polluants se diluent lentement sans extraction active.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Matériaux émissifs dans les pièces de vie",
            explanation:
              "Un mobilier récent, des peintures récentes ou un revêtement de sol neuf dans une pièce peu ventilée concentrent les COV et le formaldéhyde. Les chambres, naturellement moins ventilées la nuit, sont les zones les plus exposées.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Améliorer l'air intérieur dans le bon ordre."
        immediateLabel="Cette semaine"
        structuralLabel="Progressivement"
        immediate={[
          {
            label: "Aérer 10 minutes matin et soir en courant d'air",
            description:
              "Ouvrez des fenêtres en opposition pour créer un courant d'air traversant. Cette technique dilue et évacue les polluants accumulés depuis la veille ou la nuit. En hiver, 10 minutes suffisent : les pertes de chaleur sont limitées, le bénéfice pour l'air est immédiat.",
            effort: "Gratuit",
          },
          {
            label: "Vérifier et nettoyer les bouches VMC",
            description:
              "Regardez les bouches d'extraction (généralement en cuisine et salle de bain) et les grilles d'entrée d'air (chambres, salon). Si elles sont encrassées, nettoyez-les à l'aspirateur ou à l'eau chaude. Un débit VMC correct réduit l'humidité et dilue les polluants en continu.",
            effort: "Gratuit, 15–30 min",
          },
          {
            label: "Supprimer les sources les plus émissives",
            description:
              "Bougies à la paraffine, sprays parfumés, produits d'entretien fortement odorants : leur retrait réduit immédiatement la charge chimique de l'air. Pas besoin de tout remplacer : commencez par ne plus utiliser ce qui n'est pas nécessaire.",
            effort: "Gratuit",
          },
          {
            label: "Mesurer l'humidité avec un hygromètre",
            description:
              "Un thermomètre-hygromètre à moins de 30 € vous donne une lecture fiable de l'humidité relative. Si elle dépasse régulièrement 60 %, votre ventilation est insuffisante. Si elle est inférieure à 40 %, l'air est trop sec. Cet outil oriente les actions prioritaires.",
            effort: "15–30 €",
          },
        ]}
        structural={[
          {
            label: "Faire vérifier le débit de la VMC par un professionnel",
            description:
              "Un technicien peut mesurer le débit réel de votre VMC et identifier si les gaines, les moteurs ou les bouches doivent être nettoyés ou remplacés. Un entretien complet est recommandé tous les 5 à 10 ans selon l'installation.",
            effort: "100–500 € selon installation",
          },
          {
            label: "Choisir des matériaux A+ pour tout achat ou rénovation",
            description:
              "Lors de l'achat d'une peinture, d'un sol ou d'un meuble, l'étiquetage A+ est le critère principal pour limiter les émissions de COV et de formaldéhyde. Ce n'est pas systématiquement plus cher : la gamme A+ est aujourd'hui la norme dans la plupart des enseignes.",
            effort: "Pas de surcoût systématique",
          },
          {
            label: "Installer une hotte extractrice avec conduit extérieur",
            description:
              "La cuisine est la première source de particules fines et de vapeurs grasses dans un logement. Une hotte avec extraction extérieure (et non à recyclage) est la seule solution efficace pour ces polluants.",
            effort: "300–800 €",
          },
          {
            label: "Traiter les problèmes d'humidité structurels",
            description:
              "Si l'humidité vient d'une infiltration, d'un pont thermique ou d'une VMC défaillante, les gestes d'aération ne suffisent pas. Un professionnel peut évaluer la source et proposer une solution adaptée (isolation, étanchéité, remplacement de VMC).",
            effort: "Variable selon cause",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes pour améliorer l'air intérieur."
        errors={[
          {
            label: "Acheter un purificateur avant de ventiler correctement",
            explanation:
              "Un purificateur d'air traite l'air circulant dans la pièce mais ne remplace pas le renouvellement d'air. Sans ventilation, le CO₂, la vapeur d'eau et les nouveaux polluants s'accumulent quand même. Le purificateur est un complément utile dans certains cas (allergies), jamais une solution principale.",
          },
          {
            label: "Fermer les fenêtres pour éviter la pollution extérieure",
            explanation:
              "Sauf en cas de pic de pollution reconnu (épisode de pollution signalé par les autorités), l'air extérieur est généralement moins chargé en polluants que l'air intérieur d'un logement fermé. Garder les fenêtres fermées aggrave la situation dans la plupart des cas.",
          },
          {
            label: "Penser que les plantes suffisent à purifier l'air",
            explanation:
              "Les études en conditions réelles concluent que les plantes d'intérieur n'ont pas d'effet mesurable sur la concentration de polluants dans un logement. Il faudrait une densité de plantes impraticable pour observer un effet. L'aération est incomparablement plus efficace.",
          },
          {
            label: "Remplacer des produits par des alternatives parfumées naturelles",
            explanation:
              "Passer des sprays synthétiques aux diffuseurs d'huiles essentielles ne résout pas le problème : les huiles essentielles sont des COV naturels. Elles peuvent être irritantes pour les voies respiratoires, surtout pour les enfants et les personnes asthmatiques.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'amélioration de l'air intérieur"
        items={[
          {
            question: "Par quoi commencer si on ne sait pas d'où vient le problème ?",
            answer:
              "Commencez par les deux actions les plus efficaces et les moins coûteuses : aérer correctement deux fois par jour (fenêtres en opposition, 10 minutes) et nettoyer les bouches VMC. Ces deux gestes résolvent la majorité des problèmes de qualité d'air dans les logements ordinaires. Si les symptômes persistent après 4 à 6 semaines, cherchez une source spécifique.",
          },
          {
            question: "Un purificateur d'air est-il utile dans une chambre d'enfant ?",
            answer:
              "Pour un enfant allergique aux acariens ou aux pollens, un purificateur HEPA peut réduire les allergènes dans l'air de la chambre. Pour améliorer la qualité générale de l'air, la priorité reste la VMC fonctionnelle et l'aération régulière. Un purificateur ne remplace pas ces actions structurelles.",
          },
          {
            question: "Combien de temps faut-il aérer en hiver pour que ce soit utile ?",
            answer:
              "10 minutes suffisent, même en hiver, si vous ouvrez des fenêtres en opposition pour créer un courant d'air. Cette durée permet de renouveler l'air d'une pièce sans perte de chaleur excessive. L'impact sur la facture énergétique est limité par rapport au bénéfice pour la qualité de l'air.",
          },
          {
            question: "La qualité de l'air s'améliore-t-elle rapidement après les travaux ?",
            answer:
              "Les COV se diluent progressivement avec la ventilation. L'odeur perceptible disparaît en quelques jours avec une bonne aération, mais les émissions chimiques persistent sans odeur pendant 4 à 8 semaines. Pour une chambre d'enfant ou de bébé, maintenez une ventilation intensive pendant 6 à 8 semaines après tout travaux.",
          },
          {
            question: "Est-il utile d'avoir un hygromètre chez soi ?",
            answer:
              "Oui, c'est le premier instrument utile. Un thermomètre-hygromètre entre 15 et 30 € vous indique en temps réel le taux d'humidité. S'il dépasse régulièrement 60 %, votre ventilation est insuffisante. Ce seul indicateur permet d'objectiver la situation et d'évaluer l'effet des actions entreprises.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Les polluants les plus fréquents",
            description:
              "Comprendre quels polluants sont présents chez vous et d'où ils proviennent pour agir sur les bonnes sources.",
            href: "/air-interieur/polluants-interieurs-les-plus-frequents/",
          },
          {
            tag: "Air intérieur",
            title: "Aération ou ventilation : quelle différence ?",
            description:
              "Deux mécanismes complémentaires que l'on confond souvent. Comprendre leurs rôles respectifs pour combiner les deux efficacement.",
            href: "/air-interieur/aeration-ou-ventilation-differences/",
          },
          {
            tag: "Humidité maison",
            title: "Humidité et moisissures",
            description:
              "L'humidité excessive est l'une des premières causes de dégradation de la qualité de l'air. Identifier et traiter les sources.",
            href: "/humidite-maison/",
          },
        ]}
      />
    </>
  );
}
