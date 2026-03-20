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
  title: "Maison et grossesse : adapter son logement en toute sérénité",
  description:
    "Pendant la grossesse, quelques précautions simples permettent de limiter l'exposition aux substances préoccupantes. Produits à éviter, travaux à gérer, ventilation : un guide pratique et sans alarmisme.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/maison-grossesse/",
  },
  openGraph: {
    title: "Maison et grossesse : adapter son logement en toute sérénité",
    description:
      "Pendant la grossesse, quelques précautions simples permettent de limiter l'exposition aux substances préoccupantes. Produits à éviter, travaux à gérer, ventilation : un guide pratique et sans alarmisme.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/maison-grossesse/",
  },
};

export default function MaisonGrossessePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison saine famille", href: "/maison-saine-famille/" },
    { name: "Maison et grossesse : adapter son logement en toute sérénité", href: "https://www.maisonbionat.fr/maison-saine-famille/maison-grossesse/" },
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
        title="Maison et grossesse : les précautions utiles, sans alarmisme."
        quickAnswer="La grossesse est une période où certaines expositions méritent plus d'attention, notamment aux solvants et aux COV présents dans les peintures, colles et produits d'entretien. Les risques sont réels mais largement gérables avec des ajustements simples. L'objectif n'est pas de transformer votre logement, mais de faire les bons choix au bon moment."
        stats={[
          { value: "×2,5", label: "risque de malformations en cas d'exposition professionnelle aux solvants (étude INSERM, 3 000 femmes enceintes)" },
          { value: "1er trim.", label: "période la plus sensible pour l'organogénèse fœtale (INRS)" },
          { value: "6–8 sem.", label: "délai recommandé pour aérer une pièce rénovée avant occupation" },
          { value: "A+", label: "label minimum pour toute peinture ou revêtement pendant la grossesse" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Évaluer votre logement" },
          { id: "signes", label: "Situations à surveiller" },
          { id: "causes", label: "Expositions prioritaires" },
          { id: "actions", label: "Plan d'action" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Évaluer les points d'attention dans votre logement"
        description="Trois situations méritent une attention particulière pendant la grossesse. Elles n'exigent pas de travaux systématiques, mais quelques ajustements ciblés."
        variants={[
          {
            indicator: "Travaux ou rénovation en cours ou prévus",
            name: "Exposition directe aux COV et solvants",
            description:
              "Les peintures avec solvants, les colles, les vernis et les enduits contiennent des COV qui traversent la barrière placentaire. L'INRS classe plusieurs solvants courants (toluène, éthers de glycol) comme reprotoxiques de catégorie 1 ou 2. La règle est simple : la future mère ne réalise pas ces travaux elle-même et évite les pièces fraîchement peintes ou rénovées.",
          },
          {
            indicator: "Usage régulier de produits d'entretien puissants",
            name: "Exposition par inhalation et contact cutané",
            description:
              "Désinfectants, produits chlorés, déboucheurs et décapants concentrés sont les produits les plus préoccupants. Leur usage régulier et prolongé expose par inhalation et contact cutané. Les substituer par des alternatives moins concentrées, et systématiquement aérer pendant et après le ménage.",
          },
          {
            indicator: "Chambre du futur bébé non encore préparée",
            name: "Fenêtre d'action à ne pas manquer",
            description:
              "Les travaux de peinture, pose de sol ou installation de meubles dans la chambre du bébé doivent être réalisés et aérés au moins 6 à 8 semaines avant la naissance. Attendre le dernier mois de grossesse est la première erreur à éviter. La fenêtre optimale est le début du 3e trimestre.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Situations qui invitent à la vigilance"
        subtitle="Ces situations ne sont pas systématiquement problématiques, mais elles méritent d'adapter les habitudes le temps de la grossesse."
        signs={[
          {
            label: "Présence dans une pièce fraîchement peinte",
            description:
              "Une pièce peinte depuis moins de 6 semaines émet encore des COV, même si l'odeur a disparu. Pendant la grossesse, éviter de séjourner dans ces pièces ou d'y dormir, surtout au 1er trimestre.",
            severity: "critique",
          },
          {
            label: "Utilisation de colles, vernis ou décapants en intérieur",
            description:
              "Ces produits contiennent souvent des solvants organiques reprotoxiques. En dehors des usages professionnels encadrés, l'usage domestique doit être confié à une autre personne ou réalisé dans une pièce isolée, fenêtres ouvertes, sans présence de la future mère.",
            severity: "critique",
          },
          {
            label: "Logement mal ventilé avec des matériaux récents",
            description:
              "Un logement neuf ou récemment rénové, peu ventilé, peut concentrer les émissions de formaldéhyde et de COV. L'aération quotidienne (10 minutes matin et soir minimum) est d'autant plus importante pendant la grossesse.",
            severity: "modéré",
          },
          {
            label: "Usage quotidien de produits d'entretien parfumés ou désinfectants",
            description:
              "Les produits chlorés, les désinfectants puissants et les sprays parfumés utilisés en grande quantité dans un espace confiné méritent d'être remplacés par des alternatives moins agressives ou utilisés avec des fenêtres ouvertes.",
            severity: "modéré",
          },
          {
            label: "Présence de moisissures visibles dans le logement",
            description:
              "Les moisissures émettent des spores et des composés organiques volatils microbiens (COVB). Pendant la grossesse, leur traitement doit être confié à une autre personne. La future mère ne doit pas nettoyer les zones moisies sans protection.",
            severity: "modéré",
          },
          {
            label: "Utilisation d'huiles essentielles par diffusion",
            description:
              "Plusieurs huiles essentielles sont déconseillées pendant la grossesse en raison de leur activité hormonale ou abortive potentielle. L'ANSES déconseille la diffusion d'huiles essentielles pour les femmes enceintes et les jeunes enfants. Consulter un médecin ou une sage-femme avant tout usage.",
            severity: "modéré",
          },
        ]}
        footerNote="Ces informations ont un caractère informatif et ne remplacent pas un suivi médical. Pour toute question spécifique à votre grossesse, consultez votre médecin ou votre sage-femme."
      />

      <IssueCauses
        id="causes"
        title="Les expositions les plus préoccupantes pendant la grossesse"
        subtitle="Toutes les substances ne présentent pas le même niveau de risque. Voici celles qui méritent une attention particulière dans un contexte domestique."
        causes={[
          {
            number: "01",
            cause: "Solvants organiques dans les peintures, colles et vernis",
            explanation:
              "Le toluène, le xylène, les éthers de glycol et le benzène sont classés par l'INRS et l'ANSES comme substances reprotoxiques ou suspectées d'effets sur le développement fœtal. Une étude de l'INSERM portant sur 3 000 femmes enceintes a documenté un risque multiplié par 2,5 de malformations en cas d'exposition professionnelle aux solvants. Dans un contexte domestique, les expositions sont généralement plus courtes, mais la prudence reste de mise, surtout au 1er trimestre.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Formaldéhyde issu des matériaux récents",
            explanation:
              "Le formaldéhyde est classé cancérogène de catégorie 1B. Il est émis par les panneaux de particules, MDF, certaines peintures et revêtements de sol. Pendant la grossesse, les recommandations de l'ANSES pour l'air intérieur prennent une importance particulière : choisir des matériaux A+ et aérer intensément est une précaution simple et efficace.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Produits d'entretien concentrés et désinfectants puissants",
            explanation:
              "L'eau de Javel, les décapants, les déboucheurs et les désinfectants à base de chlore ou d'ammoniaque irritent fortement les voies respiratoires et peuvent traverser la peau. Leur substitution par des produits moins concentrés est simple et ne compromet pas l'efficacité du nettoyage courant.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Pesticides ménagers et insecticides",
            explanation:
              "Les insecticides en bombe aérosol, les anti-mites, les produits anti-punaises de lit et les traitements de bois contiennent des substances actives dont certaines sont suspectées de perturber le développement embryonnaire. L'ANSES recommande d'éviter leur usage pendant la grossesse et de faire appel à des professionnels si un traitement est indispensable.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Perturbateurs endocriniens dans les produits de soin",
            explanation:
              "Certains conservateurs (parabènes), filtres UV et parfums de synthèse présents dans les cosmétiques sont suspectés d'agir comme perturbateurs endocriniens. Pendant la grossesse, simplifier sa gamme de soin (moins de produits, formules courtes) est une précaution raisonnable, même si l'exposition domestique reste difficile à quantifier précisément.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les précautions à prendre, dans l'ordre pratique."
        immediateLabel="Pendant la grossesse"
        structuralLabel="Avant l'arrivée du bébé"
        immediate={[
          {
            label: "Ne pas réaliser les travaux de peinture, collage ou vernissage soi-même",
            description:
              "Confier ces tâches à quelqu'un d'autre est la règle la plus simple et la plus efficace. Si des travaux sont en cours dans le logement, ne pas rester dans les pièces concernées pendant les travaux ni dans les heures qui suivent. Réintégrer seulement après plusieurs heures d'aération.",
            effort: "Organisation familiale",
          },
          {
            label: "Aérer le logement 10 minutes minimum matin et soir",
            description:
              "L'aération quotidienne est la mesure la plus simple pour réduire la concentration en COV, formaldéhyde et autres polluants intérieurs. Cela vaut même en hiver : une courte aération intense est plus efficace qu'une fenêtre entrouverte toute la journée.",
            effort: "Gratuit, quotidien",
          },
          {
            label: "Remplacer les produits d'entretien puissants par des alternatives douces",
            description:
              "Savon noir, bicarbonate, vinaigre blanc dilué et un nettoyant multi-surfaces sans parfum couvrent la majorité des besoins courants. En cas d'usage d'un produit plus puissant (eau de Javel pour une désinfection ponctuelle), fenêtres ouvertes et gants obligatoires.",
            effort: "Changement d'achat",
          },
          {
            label: "Éviter les sprays parfumés et les bougies dans les pièces de vie",
            description:
              "Désodorisants, bougies paraffine, diffuseurs de parfum et encens : ces produits émettent des COV et des particules fines dans l'air. Pendant la grossesse, les supprimer des pièces de vie et les remplacer par l'aération.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Préparer la chambre du bébé dès le début du 3e trimestre",
            description:
              "Peinture, sol, meubles : ces travaux doivent être réalisés au moins 6 à 8 semaines avant la naissance, avec une aération intensive quotidienne pendant toute cette période. La future mère n'est pas présente pendant les travaux. La chambre doit être occupée uniquement une fois le dégazage terminé.",
            effort: "À planifier dès le 7e mois",
          },
          {
            label: "Choisir des finitions labellisées A+ pour la chambre du bébé",
            description:
              "Peintures, colles et vernis labellisés A+ émettent moins de COV. Ce n'est pas une garantie zéro émission, mais c'est le standard recommandé pour toute chambre d'enfant. Privilégier les peintures à base d'eau et éviter les formules avec solvants.",
            effort: "Au moment des achats",
          },
          {
            label: "Vérifier la ventilation de l'ensemble du logement",
            description:
              "Une VMC fonctionnelle est le meilleur garant d'une qualité d'air satisfaisante en continu. Nettoyer les bouches VMC, vérifier qu'elles ne sont pas obstruées, et s'assurer que le débit est suffisant. En cas de doute, une vérification par un professionnel reste accessible.",
            effort: "Vérification ponctuelle",
          },
          {
            label: "Opter pour des meubles en bois massif ou d'occasion pour la chambre du bébé",
            description:
              "Les meubles en panneaux de particules neufs émettent du formaldéhyde pendant plusieurs mois. Un meuble en bois massif ou un meuble d'occasion de plus de 3 ans est une option plus saine et souvent moins coûteuse. Si vous achetez du neuf, laisser les meubles dégazer plusieurs semaines dans une pièce ventilée avant installation dans la chambre.",
            effort: "Au moment de l'achat",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs les plus fréquentes pendant la grossesse."
        errors={[
          {
            label: "Peindre ou rénover la chambre du bébé dans les dernières semaines",
            explanation:
              "C'est la première erreur à éviter. Réaliser des travaux à quelques semaines de la naissance expose le bébé aux pics d'émission dès les premiers jours de vie. Planifier les travaux au début du 3e trimestre est la règle d'or, pour disposer de 6 à 8 semaines de dégazage avant l'arrivée.",
          },
          {
            label: "Utiliser des huiles essentielles pendant la grossesse sans avis médical",
            explanation:
              "Certaines huiles essentielles (thym à thymol, sauge officinale, cannelle, romarin entre autres) sont formellement contre-indiquées pendant la grossesse en raison d'effets utérotoniques ou sur le développement fœtal. Ne jamais utiliser d'huiles essentielles par diffusion ou sur la peau pendant la grossesse sans validation par un médecin ou une sage-femme.",
          },
          {
            label: "Croire que les produits 'naturels' ou 'verts' sont toujours sans risque",
            explanation:
              "Un produit naturel n'est pas automatiquement sans risque pendant la grossesse. Certains composés naturels (huiles essentielles, certains extraits végétaux) peuvent avoir des effets indésirables. Vérifier la composition et, en cas de doute, consulter un professionnel de santé avant d'utiliser un nouveau produit.",
          },
          {
            label: "Nettoyer seule les zones de moisissures",
            explanation:
              "Le nettoyage des moisissures dégage des spores et des composés volatils microbiens dans l'air. Pendant la grossesse, cette tâche doit être confiée à quelqu'un d'autre. Si c'est inévitable, utiliser un masque de protection FFP2, des gants et aérer abondamment.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la grossesse et le logement"
        items={[
          {
            question: "Peut-on peindre sa maison pendant la grossesse ?",
            answer:
              "La future mère ne doit pas réaliser elle-même des travaux de peinture pendant la grossesse, surtout au 1er trimestre. Les COV et solvants contenus dans certaines peintures traversent la barrière placentaire. Si des travaux sont nécessaires, les faire réaliser par quelqu'un d'autre, avec des peintures labellisées A+, fenêtres ouvertes, et ne réintégrer les pièces qu'après plusieurs heures d'aération. Les peintures à base d'eau labellisées A+ sont nettement moins risquées que les peintures glycérophtaliques.",
          },
          {
            question: "Quand faut-il préparer la chambre du bébé pendant la grossesse ?",
            answer:
              "Idéalement, au début du 7e ou 8e mois. L'objectif est de terminer tous les travaux (peinture, sol, meubles) au moins 6 à 8 semaines avant la date prévue, afin de permettre un dégazage suffisant avec aération intensive quotidienne. Attendre le dernier mois est la principale erreur à éviter.",
          },
          {
            question: "Les produits ménagers courants sont-ils dangereux pendant la grossesse ?",
            answer:
              "Les produits ménagers courants utilisés en usage normal représentent un risque limité. La prudence s'applique surtout aux produits concentrés (eau de Javel, décapants, déboucheurs), aux sprays en grande quantité dans des espaces confinés, et aux pesticides ménagers. Pour le nettoyage courant, des alternatives simples (savon noir, bicarbonate, vinaigre dilué) sont suffisamment efficaces et sans préoccupation particulière.",
          },
          {
            question: "Un logement neuf est-il plus sain pendant la grossesse ?",
            answer:
              "Pas nécessairement. Un logement neuf contient de nombreux matériaux récents qui n'ont pas encore terminé de dégazer. Les concentrations en formaldéhyde et COV peuvent y être plus élevées que dans l'ancien. Si vous emménagez dans un logement neuf pendant la grossesse, l'aération intensive quotidienne est particulièrement importante les premières semaines.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Maison saine famille",
            title: "Préparer une chambre bébé plus saine",
            description:
              "Les priorités concrètes pour aménager la chambre du bébé : peintures, literie, ventilation et ordre des actions.",
            href: "/maison-saine-famille/chambre-bebe-saine/",
          },
          {
            tag: "Air intérieur",
            title: "Améliorer l'air de sa maison",
            description:
              "Les leviers concrets pour améliorer la qualité de l'air intérieur, de la ventilation aux choix de matériaux.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
          {
            tag: "Produits et habitudes",
            title: "Alternatives aux produits ménagers classiques",
            description:
              "Bicarbonate, savon noir, vinaigre blanc : quelles alternatives pour quels usages, et leurs vraies limites.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
        ]}
      />
    </>
  );
}
