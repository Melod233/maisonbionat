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
  title: "Lessive saine : choisir ou fabriquer une lessive sans allergènes",
  description:
    "Parfums synthétiques, conservateurs allergisants, azurants optiques : comprendre la composition des lessives et choisir ou fabriquer une lessive plus saine pour toute la famille.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/lessive-saine/",
  },
  openGraph: {
    title: "Lessive saine : choisir ou fabriquer une lessive sans allergènes",
    description:
      "Parfums synthétiques, conservateurs allergisants, azurants optiques : comprendre la composition des lessives et choisir ou fabriquer une lessive plus saine pour toute la famille.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/lessive-saine/",
  },
};

export default function LessiveSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Lessive saine : choisir ou fabriquer une lessive sans allergènes", href: "https://www.maisonbionat.fr/produits-et-habitudes/lessive-saine/" },
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
        title="Lessive saine : ce qu'il faut éviter et comment choisir (ou fabriquer) une lessive adaptée"
        quickAnswer="Les lessives conventionnelles contiennent des parfums synthétiques, des agents conservateurs (isothiazolinones) et des azurants optiques qui peuvent provoquer des réactions cutanées et allergiques. Choisir une lessive sans parfum ou avec l'Écolabel européen réduit significativement l'exposition. Il est aussi possible de fabriquer une lessive simple à base de savon de Marseille et de cristaux de soude pour moins de 1 € par lessive."
        stats={[
          { value: "26", label: "allergènes parfumants réglementés doivent être déclarés sur les étiquettes (règlement CE 648/2004)" },
          { value: "1re", label: "cause de dermite de contact professionnelle : les parfums (INRS)" },
          { value: "Écolabel", label: "européen : critère de référence, interdit plus de 1 000 substances problématiques" },
          { value: "< 1 €", label: "par lavage avec une lessive maison au savon de Marseille" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de lessives" },
          { id: "signes", label: "Signes d'une lessive inadaptée" },
          { id: "causes", label: "Ingrédients problématiques" },
          { id: "actions", label: "Choisir ou fabriquer" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Types de lessives"
        title="Lessives du commerce, lessives labellisées, lessives maison : les différences concrètes."
        description="Il n'existe pas de lessive parfaite universelle. La meilleure option dépend du type de linge, des personnes du foyer (enfants, peaux sensibles, asthmatiques) et des contraintes pratiques."
        variants={[
          {
            indicator: "Pour peaux sensibles et allergie aux parfums",
            name: "Lessive sans parfum avec Écolabel européen",
            description:
              "L'Écolabel européen interdit plus de 1 000 substances préoccupantes et exige une biodégradabilité totale des tensioactifs. Les lessives labellisées sans parfum conviennent aux personnes allergiques. Chercher la mention 'sans parfum' et non 'sans parfum ajouté' (qui peut masquer des parfums masquants).",
          },
          {
            indicator: "Pour linge courant, budget maîtrisé",
            name: "Lessive maison savon de Marseille + cristaux de soude",
            description:
              "Un mélange de savon de Marseille râpé (ou en paillettes) et de cristaux de soude constitue une lessive efficace pour les 40-60°C. Elle ne contient aucun additif chimique, est entièrement biodégradable et coûte environ 0,50 à 1 € par lavage selon les doses. Non adaptée aux eaux très dures sans ajout d'adoucissant.",
          },
          {
            indicator: "Pour linge blanc ou sportswear technique",
            name: "Lessive spéciale ou lessive enzymatique",
            description:
              "Les lessives enzymatiques (protéases, lipases, amylases) sont très efficaces sur les taches de protéines (sang, herbe, alimentaire) à basse température. Elles sont moins bien tolérées par les peaux très sensibles. Pour le linge blanc sans souhait de blanchiment chimique, une lessive à l'oxygène actif (percarbonate de sodium) est une alternative aux azurants optiques.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Signes d'une lessive inadaptée"
        title="Comment identifier qu'une lessive pose problème."
        subtitle="Les réactions à la lessive peuvent être confondues avec d'autres allergies ou irritations cutanées. Quelques signaux orientent vers la lessive comme cause."
        signs={[
          {
            label: "Démangeaisons ou rougeurs aux zones de contact avec le linge (dos, aisselles, poignets)",
            description:
              "Les résidus de lessive dans les fibres irritent les zones de contact prolongé avec le tissu. Les parfums et conservateurs sont les premières causes identifiées de dermite de contact au linge.",
            severity: "modéré",
          },
          {
            label: "Eczéma qui s'améliore pendant les vacances ou après un changement de lessive",
            description:
              "Si les symptômes cutanés diminuent lors de séjours hors du domicile ou après avoir changé de marque de lessive, la lessive peut en être la cause. Un test d'éviction (arrêt de la lessive habituelle) permet de confirmer.",
            severity: "modéré",
          },
          {
            label: "Irritation de la gorge ou gêne respiratoire en pliant le linge",
            description:
              "Les parfums synthétiques résiduels dans le linge peuvent provoquer des irritations respiratoires, surtout chez les personnes asthmatiques ou hypersensibles chimiques. Une odeur forte de 'propre' sur le linge séché est souvent le signe d'une forte charge en parfums synthétiques.",
            severity: "critique",
          },
          {
            label: "Linge qui semble raide ou dont les couleurs ternissent rapidement",
            description:
              "Un excès de lessive, une eau trop dure ou des agents alcalins trop forts peuvent rigidifier les fibres et altérer les couleurs. La dose de lessive est souvent supérieure aux besoins réels.",
            severity: "léger",
          },
          {
            label: "Odeur de renfermé sur le linge lavé",
            description:
              "Une odeur de moisi après lavage peut indiquer une dose de lessive insuffisante, une température trop basse pour le linge très souillé, ou un tambour de machine à laver encrassé. Ce n'est pas un problème de lessive, mais de dosage ou d'entretien de la machine.",
            severity: "léger",
          },
          {
            label: "Réactions cutanées chez un nourrisson ou un jeune enfant",
            description:
              "La peau des nourrissons est plus perméable aux substances chimiques que celle des adultes. Les conservateurs et parfums des lessives pénètrent plus facilement. Une lessive sans parfum et sans isothiazolinones est recommandée pour le linge des bébés.",
            severity: "critique",
          },
        ]}
        footerNote="En cas de réaction allergique avérée à la lessive, un bilan allergologique peut identifier les substances responsables. Les tests épicutanés (patch tests) sont les plus adaptés pour les allergies de contact."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Ingrédients problématiques"
        title="Les composants des lessives qui posent le plus de questions."
        subtitle="Lire une étiquette de lessive nécessite de connaître les ingrédients réellement préoccupants, distincts de ceux qui ne sont que de nature à inquiéter sans raison fondée."
        causes={[
          {
            number: "01",
            cause: "Parfums synthétiques et allergènes parfumants",
            explanation:
              "Le règlement européen CE 648/2004 impose la déclaration de 26 allergènes parfumants s'ils dépassent 0,01 % dans les produits rincés. Ces molécules (linalool, limonène, citronellol, etc.) restent dans les fibres après lavage et peuvent provoquer des dermites allergiques de contact. La mention 'parfum' ou 'fragrance' dans la liste INCI recouvre souvent des dizaines de composés non détaillés.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Isothiazolinones (conservateurs)",
            explanation:
              "La méthylisothiazolinone (MI) et la chlorométhylisothiazolinone (CMI) sont des conservateurs utilisés dans les lessives liquides. Identifiés par l'ANSES comme allergisants cutanés et respiratoires, ils ont été classés sensibilisants par l'Agence européenne des produits chimiques (ECHA). Certaines marques les ont retirés depuis 2017, mais ils restent présents dans des formulations moins chères.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Azurants optiques (stilbènes)",
            explanation:
              "Les azurants optiques (ou agents de blanchiment fluorescents) convertissent les UV en lumière bleue visible, ce qui donne une impression de blanc lumineux. Ils ne nettoient pas mais restent dans les fibres. Ils peuvent provoquer des réactions de photosensibilisation (irritation cutanée au soleil) chez certaines personnes sensibles.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Phosphates et zéolithes",
            explanation:
              "Les phosphates (interdits dans les lessives ménagères en Europe depuis 2013) ont été largement remplacés par des zéolithes et des polycarboxylates. Ces adoucissants d'eau permettent aux tensioactifs d'agir malgré le calcaire. Les zéolithes sont peu problématiques pour la santé mais mal biodégradables. Les formules modernes utilisent des agents chélatants organiques (citrate, gluconate) plus biodégradables.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Muscs synthétiques (nitromuscs et polycycliques)",
            explanation:
              "Certains muscs synthétiques (galaxolide, tonalide) sont utilisés pour donner une odeur persistante au linge. Ils sont persistants dans l'environnement et dans les tissus adipeux humains. Les muscs nitro (ambrette, tibétène) sont interdits en Europe depuis 2004. Les polycycliques sont encore utilisés mais surveillés.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir une lessive du commerce ou la fabriquer soi-même."
        immediateLabel="Choisir dans le commerce"
        structuralLabel="Fabriquer sa lessive"
        immediate={[
          {
            label: "Chercher l'Écolabel européen ou NF Environnement",
            description:
              "L'Écolabel européen (fleur verte) interdit plus de 1 000 substances préoccupantes, exige une biodégradabilité totale des tensioactifs et limite les parfums allergisants. NF Environnement est l'équivalent français avec des critères proches. Ces labels sont vérifiés par des organismes tiers.",
            effort: "À chaque achat",
          },
          {
            label: "Choisir la version 'sans parfum' et non 'sans parfum ajouté'",
            description:
              "La mention 'sans parfum ajouté' peut masquer la présence de parfums masquants (utilisés pour cacher l'odeur des matières premières). Seule la mention 'sans parfum' ou 'non parfumé' garantit l'absence de composés parfumants.",
            effort: "Lecture d'étiquette",
          },
          {
            label: "Vérifier l'absence d'isothiazolinones en liste INCI",
            description:
              "Chercher dans la liste INCI : 'methylisothiazolinone', 'methylchloroisothiazolinone', 'benzisothiazolinone'. Leur présence dans une lessive liquide est un signal d'alerte, surtout pour les peaux sensibles ou les produits destinés aux enfants.",
            effort: "Lecture d'étiquette",
          },
          {
            label: "Réduire la dose utilisée",
            description:
              "La dose recommandée sur les emballages est souvent surestimée. Pour une eau moyennement calcaire et un linge peu souillé, la moitié de la dose indiquée est généralement suffisante. Un rinçage insuffisant des résidus de lessive est une cause fréquente d'irritations cutanées.",
            effort: "Habitude",
          },
        ]}
        structural={[
          {
            label: "Recette lessive maison : savon de Marseille + cristaux de soude",
            description:
              "Pour 10 lavages : râper 100 g de savon de Marseille à 72 % d'huile (vrai savon de Marseille, sans parfum synthétique), dissoudre dans 1 litre d'eau bouillante, ajouter 200 g de cristaux de soude, mélanger. Laisser refroidir. Verser 100 ml par lavage dans le tambour. Efficace entre 40° et 60°. Ajouter 150 ml de vinaigre blanc dans le compartiment assouplissant.",
            effort: "20 minutes, moins d'1 € par lavage",
          },
          {
            label: "Alternative : lessive en poudre au percarbonate de sodium",
            description:
              "Pour le linge blanc sans azurants optiques : 50 g de cristaux de soude + 50 g de percarbonate de sodium par lavage à 40-60°C. Le percarbonate libère de l'oxygène actif qui blanchit et désodorise. Efficace sur les taches de thé, café et herbe. Ne convient pas aux fibres délicates ni à la laine.",
            effort: "Moins de 2 minutes de préparation",
          },
          {
            label: "Remplacer l'assouplissant par du vinaigre blanc",
            description:
              "200 ml de vinaigre blanc dans le compartiment assouplissant du lave-linge. Il neutralise les résidus alcalins de la lessive qui rigidifient les fibres, réduit l'électricité statique et n'altère pas les couleurs. L'odeur de vinaigre disparaît entièrement au séchage.",
            effort: "Moins cher que les assouplissants du commerce",
          },
          {
            label: "Entretenir le tambour de la machine régulièrement",
            description:
              "Un tambour encrassé par les résidus de lessive et les dépôts calcaires favorise les odeurs et la prolifération bactérienne. Un programme à vide à 90°C avec 200 g de percarbonate de sodium une fois par mois suffit. Laisser le hublot ouvert entre les lavages pour permettre le séchage de la cuve.",
            effort: "Mensuel, automatique",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes avec la lessive."
        errors={[
          {
            label: "Confondre 'écologique' et 'hypoallergénique'",
            explanation:
              "Un produit peut être biodégradable et labellisé Écolabel tout en contenant des parfums allergisants naturels (huiles essentielles de lavande, citrus). 'Écologique' désigne l'impact environnemental, 'hypoallergénique' concerne la tolérance cutanée. Ce sont deux critères distincts qui peuvent être combinés ou non selon les formules.",
          },
          {
            label: "Surdoser la lessive pour un linge 'plus propre'",
            explanation:
              "Un excès de lessive ne lave pas mieux. Les tensioactifs en excès ne sont pas entièrement rincés et restent dans les fibres. Ils concentrent les parfums et conservateurs contre la peau. La dose efficace est souvent la moitié de ce qui est recommandé sur l'emballage pour une eau moyennement calcaire.",
          },
          {
            label: "Utiliser une lessive enzymatique à haute température",
            explanation:
              "Les enzymes des lessives enzymatiques (protéases, lipases) sont dénaturées au-dessus de 60°C. Laver à 90°C avec une lessive enzymatique détruit ses actifs principaux et ne nettoie pas mieux qu'une lessive standard à cette température.",
          },
          {
            label: "Supposer que la lessive maison convient à tous les textiles",
            explanation:
              "La lessive au savon de Marseille et aux cristaux de soude est trop alcaline pour la laine, la soie et certains textiles techniques. Ces fibres nécessitent un produit à pH neutre (pH 7) ou un shampooing pour laine. Une lessive trop alcaline feutre la laine et attaque les protéines de la soie.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la lessive saine"
        items={[
          {
            question: "La lessive maison lave-t-elle aussi bien que les lessives du commerce ?",
            answer:
              "Pour les lessives courantes (coton, synthétiques, linge peu souillé), oui. Pour les taches tenaces de protéines (sang, herbe) ou les textiles très sombres, les lessives enzymatiques du commerce donnent de meilleurs résultats grâce à leurs enzymes spécifiques. La lessive maison est un bon compromis au quotidien, complétée si besoin par un pré-traitement des taches.",
          },
          {
            question: "Peut-on utiliser la lessive maison en machine à laver ?",
            answer:
              "Oui, mais il faut s'assurer que le savon de Marseille est bien dissous avant utilisation. Une préparation liquide (savon fondu dans de l'eau chaude + cristaux de soude dissous) est plus adaptée qu'une poudre qui risque de se dissoudre mal en eau froide. Utiliser dans le compartiment lessive de la machine, pas directement sur le linge.",
          },
          {
            question: "Les lessives 'bébé' du commerce sont-elles vraiment plus sûres ?",
            answer:
              "Pas nécessairement. La mention 'bébé' ou 'doux pour les peaux sensibles' n'est pas réglementée et relève du marketing. Vérifier la liste INCI : absence de parfums, absence d'isothiazolinones, présence de l'Écolabel. Une lessive sans parfum avec Écolabel européen est une base plus fiable qu'un produit 'bébé' sans label.",
          },
          {
            question: "Faut-il changer de lessive si on n'a pas de symptômes ?",
            answer:
              "Ce n'est pas une obligation. Si vous n'observez pas de réaction cutanée ou respiratoire et que vous utilisez un produit sans parfum ou labellisé, le changement ne présente pas de bénéfice santé immédiat. Le principal intérêt des lessives plus saines est préventif : réduction de l'exposition aux conservateurs allergisants et aux parfums synthétiques sur le long terme.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Alternatives aux produits ménagers conventionnels",
            description:
              "Le guide complet des substitutions par usage : surface, sanitaires, vitres, dégraissage.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
          {
            tag: "Produits et habitudes",
            title: "Choisir des produits ménagers du commerce plus sains",
            description:
              "Labels, ingrédients à éviter et lecture d'étiquette pour naviguer dans l'offre commerciale.",
            href: "/produits-et-habitudes/produits-menagers-sains/",
          },
          {
            tag: "Maison saine famille",
            title: "Produits ménagers et enfants",
            description:
              "Les enfants sont plus vulnérables aux résidus de produits ménagers. Quels produits éviter et quels critères retenir.",
            href: "/maison-saine-famille/produits-menagers-enfants/",
          },
        ]}
      />
    </>
  );
}
