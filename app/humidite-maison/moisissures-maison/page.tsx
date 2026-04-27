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
  title: "Moisissures dans la maison : identifier, traiter, éviter la récidive",
  description:
    "Taches noires ou vertes, odeur de moisi, spores dans l'air : comprendre les moisissures chez soi, évaluer le risque sanitaire et agir avec la bonne méthode.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/moisissures-maison/",
  },
  openGraph: {
    title: "Moisissures dans la maison : identifier, traiter, éviter la récidive",
    description:
      "Taches noires ou vertes, odeur de moisi, spores dans l'air : comprendre les moisissures chez soi, évaluer le risque sanitaire et agir avec la bonne méthode.",
    url: "https://www.maisonbionat.fr/humidite-maison/moisissures-maison/",
  },
};

export default function MoisissuresDansLaMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Moisissures dans la maison : identifier, traiter, éviter la récidive", href: "https://www.maisonbionat.fr/humidite-maison/moisissures-maison/" },
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
        title="Des moisissures dans la maison. Que faire vraiment."
        quickAnswer="Les moisissures ne sont pas un problème esthétique : elles libèrent des spores et des mycotoxines qui dégradent l'air intérieur. La priorité absolue est de traiter la source d'humidité, pas de masquer les taches."
        stats={[
          { value: "10–50%", label: "des logements européens ont des moisissures (OMS)" },
          { value: ">60%", label: "d'humidité + 18 °C : conditions de développement" },
          { value: "24–48h", label: "suffisent pour coloniser une surface humide" },
          { value: ">0,5 m²", label: "seuil au-delà duquel un professionnel est recommandé" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de moisissures" },
          { id: "signes", label: "Signes et risques" },
          { id: "causes", label: "Causes" },
          { id: "actions", label: "Que faire" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Toutes les moisissures ne se traitent pas de la même façon."
        description="Les moisissures se présentent sous différentes formes selon leur type et leur degré d'installation. Identifier à quel stade vous vous trouvez conditionne la méthode de traitement et l'urgence à agir."
        variants={[
          {
            indicator: "Cas le plus courant",
            name: "Moisissures de surface en zone humide",
            description:
              "Points noirs ou verts sur les joints de salle de bain, les angles de pièces humides ou les fenêtres. Souvent Cladosporium ou Penicillium. Traitables en surface si la cause d'humidité est réglée simultanément.",
          },
          {
            indicator: "Cas plus sérieux",
            name: "Moisissures récurrentes sur les murs",
            description:
              "Des moisissures qui reviennent régulièrement après nettoyage indiquent une humidité structurelle non traitée (pont thermique, infiltration, VMC défaillante). Le traitement superficiel seul ne suffit pas.",
          },
          {
            indicator: "Cas urgent",
            name: "Moisissures noires étendues (Stachybotrys)",
            description:
              "La moisissure noire très pigmentée qui se développe sur des surfaces gorgées d'eau en permanence. Libère des mycotoxines particulièrement irritantes pour les voies respiratoires. Nécessite une intervention professionnelle.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Comment reconnaître et évaluer les moisissures."
        subtitle="Certains signes sont évidents, d'autres moins. Évaluez l'étendue avant d'agir."
        signs={[
          {
            label: "Taches noires, vertes ou blanches sur les surfaces",
            description:
              "Présence visible sur les joints, les angles de pièces, derrière les meubles en contact avec les murs extérieurs. Toujours associées à une zone d'humidité récurrente.",
            severity: "critique",
          },
          {
            label: "Odeur persistante de moisi",
            description:
              "Une odeur musquée ou terreuse persistante même après aération indique la présence de moisissures, parfois cachées derrière un revêtement ou sous un meuble.",
            severity: "modéré",
          },
          {
            label: "Symptômes respiratoires qui s'améliorent en dehors du logement",
            description:
              "Toux, rhinite, irritations de la gorge ou des yeux qui disparaissent en dehors du logement sont un signal d'alerte d'une exposition aux spores. Les asthmatiques et les enfants sont les plus sensibles.",
            severity: "critique",
          },
          {
            label: "Peinture qui cloque ou tapisserie qui se décolle",
            description:
              "Ces signes indiquent une humidité derrière le revêtement, souvent accompagnée de moisissures invisibles en surface mais actives dans la cloison.",
            severity: "modéré",
          },
          {
            label: "Condensation récurrente aux mêmes endroits",
            description:
              "Les zones de condensation chronique (angles froids, fenêtres, ponts thermiques) sont des foyers de développement potentiel. Sans intervention, les moisissures s'y installent en quelques semaines.",
            severity: "léger",
          },
          {
            label: "Poussière grise sur les rebords et plinthes",
            description:
              "Une accumulation inhabituelle de poussière grise ou noire sur certaines surfaces peut indiquer la présence de spores de moisissures, transportées par les courants d'air.",
            severity: "léger",
          },
        ]}
        footerNote="Si vous avez des symptômes respiratoires persistants que vous associez à votre logement, consultez un médecin. Une expertise de l'air intérieur peut être réalisée par des professionnels certifiés."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi les moisissures se développent."
        subtitle="La moisissure est un symptôme. L'humidité est le problème."
        causes={[
          {
            number: "01",
            cause: "Hygrométrie durablement supérieure à 60 %",
            explanation:
              "Les moisissures ont besoin d'humidité pour germer et se développer. Au-delà de 60 % d'humidité relative, combinée à une température de 18 °C ou plus, les conditions sont réunies. La ventilation est presque toujours en cause.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Ventilation défaillante ou absente",
            explanation:
              "Sans renouvellement d'air suffisant, la vapeur d'eau produite par les occupants s'accumule. Les zones froides (angles, ponts thermiques, derrière les meubles) atteignent rapidement les conditions de condensation.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Ponts thermiques et surfaces froides",
            explanation:
              "Les zones mal isolées (tableaux de fenêtres, angles extérieurs, jonctions plancher-mur) ont une température de surface inférieure au reste de la pièce. La vapeur d'eau se condense et crée les conditions idéales.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Infiltration d'eau par l'enveloppe du bâtiment",
            explanation:
              "Une infiltration de toiture, un joint de fenêtre défectueux ou une fissure de façade introduit de l'eau liquide dans la structure. Les moisissures se développent rapidement sur ces surfaces humides en permanence.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Matériaux organiques humidifiés",
            explanation:
              "Papier peint, bois, carton, plâtre : les moisissures ont besoin d'une source de nourriture organique. Ces matériaux, une fois humidifiés, constituent un substrat idéal. Les matériaux synthétiques ou minéraux sont moins propices.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Traiter les moisissures dans le bon ordre."
        immediateLabel="Cette semaine"
        structuralLabel="Pour éviter la récidive"
        immediate={[
          {
            label: "Protégez-vous avant de traiter",
            description:
              "Portez des gants, un masque FFP2 et des lunettes avant de nettoyer. Les spores libérées pendant le nettoyage sont respirables et peuvent provoquer une irritation aiguë, surtout chez les personnes sensibles.",
            effort: "Masque FFP2 : 2–5 €",
          },
          {
            label: "Nettoyez avec du vinaigre blanc ou du bicarbonate",
            description:
              "Pour les surfaces non poreuses (carrelage, verre, plastique) : vinaigre blanc non dilué ou solution bicarbonate à 3 cuillères à soupe par litre d'eau. Laissez agir 10 minutes, brossez, rincez. Séchez immédiatement.",
            effort: "Gratuit ou quasi",
          },
          {
            label: "Ventilez intensément après traitement",
            description:
              "Ouvrez toutes les fenêtres pendant au moins 2 heures après le nettoyage pour évacuer les spores libérées. Répétez l'aération quotidiennement pendant une semaine.",
            effort: "Gratuit",
          },
          {
            label: "Retirez les matériaux contaminés si nécessaire",
            description:
              "Joint de silicone noir : remplacez-le, ne le nettoyez pas. Papier peint très touché : retirez-le entièrement. Les matériaux poreux (plâtre, bois fortement contaminé) doivent être remplacés, pas nettoyés.",
            effort: "Variable",
          },
        ]}
        structural={[
          {
            label: "Traiter la source d'humidité en priorité",
            description:
              "Sans traitement de la cause (VMC, pont thermique, infiltration), les moisissures reviennent systématiquement. Identifiez et résolvez le problème d'humidité avant de rénover la surface.",
            effort: "Voir page humidité",
          },
          {
            label: "Faire appel à un professionnel au-delà de 0,5 m²",
            description:
              "Au-delà d'une surface de 0,5 m² ou en cas de moisissures noires étendues, un professionnel certifié dispose des équipements de protection et des techniques adaptées pour une décontamination sécurisée.",
            effort: "Devis professionnel",
          },
          {
            label: "Améliorer la ventilation pour prévenir la récidive",
            description:
              "La VMC est la solution structurelle la plus efficace. Faites vérifier son débit par un professionnel. Une VMC double flux offre un renouvellement optimal tout en limitant les pertes de chaleur.",
            effort: "Entretien : 100–200 €",
          },
          {
            label: "Traiter les ponts thermiques lors d'une rénovation",
            description:
              "L'isolation des angles froids, tableaux de fenêtres et zones de jonction supprime les surfaces où la condensation se dépose préférentiellement, éliminant ainsi les foyers de développement.",
            effort: "Lors d'une rénovation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui font revenir les moisissures."
        errors={[
          {
            label: "Utiliser de l'eau de javel sur les surfaces poreuses",
            explanation:
              "L'eau de javel désinfecte les surfaces lisses mais ne pénètre pas dans les matériaux poreux. Elle tue la moisissure en surface mais laisse le mycélium intact dans le matériau, qui recolonise rapidement.",
          },
          {
            label: "Repeindre par-dessus sans traiter",
            explanation:
              "Une couche de peinture masque les taches mais emprisonne l'humidité. Les moisissures se développent sous la peinture et la traversent en quelques semaines, souvent de façon plus étendue qu'avant.",
          },
          {
            label: "Nettoyer sans se protéger",
            explanation:
              "Le nettoyage libère des milliers de spores dans l'air. Sans masque FFP2, vous les inhalez directement. Les personnes asthmatiques ou allergiques doivent faire traiter la zone par un tiers.",
          },
          {
            label: "Ignorer une odeur de moisi sans tache visible",
            explanation:
              "L'odeur peut provenir de moisissures cachées derrière un meuble, sous un revêtement de sol ou dans une cloison. Ignorer cette odeur revient à laisser le problème s'aggraver dans des zones inaccessibles.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les moisissures"
        items={[
          {
            question: "Les moisissures sont-elles dangereuses pour la santé ?",
            answer:
              "Oui, notamment pour les personnes asthmatiques, allergiques ou immunodéprimées. Les moisissures libèrent des spores et, pour certaines espèces, des mycotoxines qui irritent les voies respiratoires. Une exposition prolongée peut aggraver des pathologies existantes et favoriser le développement d'allergies chez les enfants.",
          },
          {
            question: "La moisissure noire est-elle plus dangereuse que les autres ?",
            answer:
              "La moisissure noire Stachybotrys chartarum, qui se développe sur des surfaces chroniquement humides, libère des mycotoxines particulièrement irritantes. Elle est associée à des symptômes respiratoires plus sévères. Si vous identifiez des moisissures noires très pigmentées et étendues, faites appel à un professionnel.",
          },
          {
            question: "Peut-on rester dans un logement avec des moisissures ?",
            answer:
              "Pour une petite surface traitée rapidement (quelques points sur les joints), oui. Pour une contamination étendue ou en présence de symptômes respiratoires, il est préférable de limiter l'exposition surtout pour les enfants et les personnes sensibles, et d'agir rapidement. Un médecin peut évaluer les risques selon la situation.",
          },
          {
            question: "Comment savoir si les moisissures sont revenues après traitement ?",
            answer:
              "Si des taches réapparaissent dans les 2 à 4 semaines suivant un nettoyage, la source d'humidité n'a pas été traitée. Les moisissures ne disparaissent durablement que quand les conditions qui les ont permises sont corrigées : hygrométrie réduite, ventilation améliorée, pont thermique traité ou infiltration réparée.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Humidité dans la maison",
            description:
              "Les moisissures sont toujours la conséquence d'un excès d'humidité. Identifier la cause exacte pour agir à la bonne échelle.",
            href: "/humidite-maison/problemes-humidite/",
          },
          {
            tag: "Humidité maison",
            title: "Salpêtre sur les murs : reconnaître, traiter et prévenir",
            description:
              "Souvent confondu avec une moisissure : reconnaître le salpêtre, identifier la cause d'humidité structurelle et choisir un traitement durable.",
            href: "/humidite-maison/salpetre-murs/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover sans emprisonner l'humidité",
            description:
              "Isolation, finitions, choix de matériaux : comment éviter de créer les conditions d'une moisissure future lors de travaux.",
            href: "/renovation-saine/renover-plus-sainement/",
          },
        ]}
      />
    </>
  );
}
