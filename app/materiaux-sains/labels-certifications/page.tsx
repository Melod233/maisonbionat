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
  title: "Labels et certifications du logement : lesquels sont fiables, lesquels sont du greenwashing",
  description:
    "Écolabel européen, NF Environnement, A+, Greenguard, FSC, Ange Bleu, Oeko-Tex, Bâtiment biosourcé : guide critique des labels qui méritent confiance pour les matériaux, peintures, produits ménagers et bâtiment.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/labels-certifications/",
  },
  openGraph: {
    title: "Labels et certifications du logement : lesquels sont fiables",
    description:
      "Guide critique des labels environnementaux du logement : périmètre, fiabilité, organisme certificateur. Pour distinguer ce qui mérite confiance du greenwashing.",
    url: "https://www.maisonbionat.fr/materiaux-sains/labels-certifications/",
  },
};

export default function LabelsCertificationsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    {
      name: "Labels et certifications du logement : lesquels sont fiables",
      href: "https://www.maisonbionat.fr/materiaux-sains/labels-certifications/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Matériaux sains"
        parentHref="/materiaux-sains/"
        tag="Hub transversal"
        title="Labels et certifications du logement : lesquels méritent confiance"
        quickAnswer="Tous les labels ne se valent pas. Certains sont réglementaires et obligatoires (étiquetage A+ français), d'autres sont des écolabels officiels reconnus internationalement (Écolabel européen, NF Environnement, Nordic Swan, FSC), d'autres encore sont des mentions auto-décernées sans valeur. Cette page est le hub de référence du site : pour chaque catégorie de produit (peintures, matériaux, produits ménagers, textiles, bâtiment), elle indique les labels fiables, leur périmètre et leur organisme certificateur. Le cadre juridique évolue : la directive UE 2024/825 « Empowering Consumers », applicable au 27 septembre 2026, interdit les allégations environnementales génériques sans preuve."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "ISO 14024", label: "norme des écolabels officiels (Écolabel UE, NF Environnement, Nordic Swan)" },
          { value: "15 %", label: "manquements graves constatés par la DGCCRF sur 3 000 contrôles 2023-2024" },
          { value: "27 sept. 2026", label: "entrée en vigueur de la directive UE 2024/825 contre l'écoblanchiment" },
          { value: "32", label: "catégories de produits couvertes par l'Écolabel européen" },
        ]}
        anchors={[
          { id: "categories", label: "Trois catégories de labels" },
          { id: "criteres", label: "Reconnaître un label fiable" },
          { id: "greenwashing", label: "Mentions trompeuses" },
          { id: "labels", label: "Les labels par domaine" },
          { id: "demarche", label: "Démarche concrète" },
          { id: "eviter", label: "Erreurs courantes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="categories"
        sectionLabel="Les trois catégories"
        title="Trois grandes familles de labels, qui ne se valent pas."
        description="Avant de comparer les labels eux-mêmes, il aide de comprendre à quelle catégorie chacun appartient. La fiabilité dépend autant du type de label que de son contenu."
        variants={[
          {
            indicator: "Catégorie 1",
            name: "Labels réglementaires obligatoires",
            description:
              "Imposés par la loi française ou européenne, ils sont contrôlés par la DGCCRF et leur absence est une infraction. Exemple : l'étiquetage A+/A/B/C des émissions de COV (décret 2011-321) est obligatoire depuis septembre 2013 sur tous les produits de construction et décoration vendus en France. Fiabilité maximale, périmètre limité au domaine réglementé.",
          },
          {
            indicator: "Catégorie 2",
            name: "Écolabels officiels (norme ISO 14024)",
            description:
              "Délivrés par un organisme tiers indépendant, sur la base d'un référentiel public couvrant le cycle de vie complet du produit. Trois écolabels respectent ISO 14024 en Europe : l'Écolabel européen (la « fleur »), NF Environnement (équivalent français AFNOR) et le Nordic Swan (référence scandinave). Fiabilité haute, périmètre large.",
          },
          {
            indicator: "Catégorie 3",
            name: "Labels privés tiers et mentions marketing",
            description:
              "Tout le reste : labels privés sérieux délivrés par un organisme indépendant (FSC, Greenguard, Oeko-Tex, Ecocert, Ange Bleu allemand…) et mentions auto-décernées par les marques sans valeur opposable. La frontière entre les deux est cruciale : un label privé sérieux a un référentiel public et des audits, une mention marketing repose sur la communication de la marque.",
          },
        ]}
      />

      <IssueSigns
        id="criteres"
        sectionLabel="Les bons critères"
        title="Comment reconnaître un label fiable, en trois questions."
        subtitle="Si les trois réponses sont positives, le label mérite confiance. Si l'une manque, prudence."
        signs={[
          {
            label: "L'organisme certificateur est-il un tiers indépendant ?",
            description:
              "Le label doit être délivré par une entité distincte du fabricant et du distributeur. AFNOR Certification, Ecocert, Certivéa, UL Solutions sont des certificateurs reconnus. À l'inverse, un logo créé par la marque elle-même n'a aucune valeur de garantie.",
            severity: "critique",
          },
          {
            label: "Le référentiel est-il public et auditable ?",
            description:
              "Un label sérieux publie ses critères en libre accès, généralement sur le site officiel du label. Vous devez pouvoir lire ce qui est exigé pour obtenir le label. Un référentiel non publié ou flou est un signal d'alerte.",
            severity: "critique",
          },
          {
            label: "Les contrôles sont-ils périodiques et documentés ?",
            description:
              "Les écolabels ISO 14024 imposent des audits réguliers. Un label délivré « à vie » sur un seul dossier sans contrôle de suivi offre une garantie limitée dans le temps. Vérifiez la périodicité des audits dans le règlement du label.",
            severity: "modéré",
          },
          {
            label: "Le label est-il reconnu par une autorité publique ou une norme ISO ?",
            description:
              "L'Écolabel européen, NF Environnement et le Nordic Swan respectent ISO 14024 (écolabels Type I). Le label « Bâtiment biosourcé » a un cadre réglementaire (arrêté du 2 juillet 2024). Cette reconnaissance institutionnelle est un gage supplémentaire.",
            severity: "léger",
          },
          {
            label: "Le périmètre du label est-il clairement délimité ?",
            description:
              "Un label sérieux indique précisément ce qu'il couvre (composition, émissions, cycle de vie, conditions sociales…) et ce qu'il ne couvre pas. Un label qui prétend couvrir « tout » est généralement un label faible ou marketing.",
            severity: "léger",
          },
        ]}
        footerNote="Les écolabels ISO 14024 (Écolabel UE, NF Environnement, Nordic Swan) sont les seuls qui peuvent juridiquement être qualifiés d'« écolabels » officiels en Europe. Toute autre mention « écolabel » utilisée dans la communication d'une marque est trompeuse."
      />

      <IssueCauses
        id="greenwashing"
        sectionLabel="Greenwashing"
        title="Cinq mentions trompeuses fréquentes à signaler."
        subtitle="La DGCCRF a relevé 15 % de manquements graves sur 3 000 établissements contrôlés en 2023-2024. Voici les pièges les plus courants."
        causes={[
          {
            number: "01",
            cause: "« Naturel », « écologique », « vert » sans label tiers",
            explanation:
              "Aucune valeur juridique. Ces mentions globalisantes sont expressément visées par la directive UE 2024/825 et déjà sanctionnées par la DGCCRF (cas du « parpaing vert », de la « livraison éco-responsable »). À partir du 27 septembre 2026, leur usage sans preuve sera interdit.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Logos « maison » auto-décernés par la marque",
            explanation:
              "Une feuille verte stylisée, une planète Terre dessinée, un signe « bio inspired » créé par le fabricant : aucun tiers certificateur n'intervient. Ces logos n'engagent que la communication de la marque. À ignorer dans toute évaluation sérieuse.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "« Sans COV » sans étiquette A+ sur l'emballage",
            explanation:
              "Le « zéro COV » n'est pas une mention réglementée. Une peinture peut afficher cette allégation et tout de même émettre lors de la prise. Seul le label A+ (mesure normalisée à 28 jours en chambre d'essai) atteste réellement de très faibles émissions dans l'air.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "« Recyclable » sans précision de filière",
            explanation:
              "La recyclabilité théorique d'un matériau ne signifie pas qu'il sera effectivement recyclé. Beaucoup de plastiques marqués « recyclables » finissent en incinération faute de filière de traitement réelle. La directive UE 2024/825 encadrera cette mention dès mars 2026.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "« Biosourcé » sur un matériau seul, hors certification",
            explanation:
              "Le label « Bâtiment biosourcé » (arrêté du 2 juillet 2024) s'applique au bâtiment dans son ensemble, pas à un matériau isolé. Sur un matériau seul, la garantie pertinente est la FDES (Fiche de Déclaration Environnementale et Sanitaire) déposée sur la base INIES.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueDiagnosis
        id="labels"
        sectionLabel="Les labels par domaine"
        title="Les labels fiables, par catégorie d'usage."
        description="Pour chaque grand domaine du logement (air intérieur, écolabels généralistes, bois, textile et ménagers, performance bâtiment), voici les labels qui méritent attention."
        variants={[
          {
            indicator: "Air intérieur et émissions de COV",
            name: "A+ français, Greenguard, Ange Bleu",
            description:
              "Le label A+ (étiquetage français obligatoire depuis 2013) reste la référence accessible sur les peintures, sols, colles et matériaux de construction. Greenguard et Greenguard Gold (UL Solutions, États-Unis) sont des certifications privées tierces particulièrement strictes, utilisées dans les écoles et les hôpitaux. L'Ange Bleu (Blauer Engel, ministère fédéral allemand de l'Environnement) est la plus large des certifications européennes : peintures, mobilier, jouets, équipements.",
          },
          {
            indicator: "Écolabels généralistes",
            name: "Écolabel européen, NF Environnement, Nordic Swan",
            description:
              "L'Écolabel européen (la « fleur ») couvre 32 catégories de produits dont les peintures, lessives, papiers, ameublements. NF Environnement (AFNOR, créé en 1991) couvre 63 catégories avec des révisions souvent plus fréquentes. Le Nordic Swan (Conseil nordique des ministres) est généralement plus exigeant. Ces trois labels respectent la norme ISO 14024 et constituent les seuls « écolabels officiels » au sens juridique européen.",
          },
          {
            indicator: "Bois et matériaux biosourcés",
            name: "FSC, PEFC, label Bâtiment biosourcé",
            description:
              "FSC (Forest Stewardship Council, soutenu par WWF) est le plus strict pour le bois, particulièrement important pour les essences tropicales. PEFC est plus large géographiquement (5 millions d'hectares en France, 100 % des forêts domaniales ONF) avec des critères jugés moins exigeants que FSC. Le label « Bâtiment biosourcé » (arrêté du 2 juillet 2024, Certivéa) s'applique au bâtiment entier avec trois niveaux selon le carbone biogénique stocké.",
          },
          {
            indicator: "Textile et produits ménagers",
            name: "Oeko-Tex, Ecocert, Écolabel UE produits ménagers",
            description:
              "Oeko-Tex Standard 100 teste plus de 300 substances sur les textiles, avec des classes plus strictes pour les vêtements bébé et les couches. Ecocert certifie un cahier des charges public sur les détergents (Ecodetergent) et la cosmétique (Cosmos). L'Écolabel européen produits ménagers couvre lessives, nettoyants et vaisselle avec un cycle de vie complet.",
          },
          {
            indicator: "Performance énergétique du bâtiment",
            name: "BBC / Effinergie, Passivhaus, HQE",
            description:
              "Pour la rénovation et le neuf : le label BBC / Effinergie cible une consommation d'énergie primaire réduite (50 % de la RT 2005). Passivhaus impose moins de 15 kWh/m²/an de chauffage avec une étanchéité à l'air très stricte. HQE (Cerqual / Certivéa) couvre 14 cibles environnementales sur 5 niveaux. BREEAM et LEED sont surtout utilisés en tertiaire et peu pertinents pour la maison individuelle.",
          },
        ]}
      />

      <IssueActions
        id="demarche"
        title="Démarche concrète pour évaluer un produit avant l'achat."
        immediateLabel="En magasin ou en ligne"
        structuralLabel="Pour les achats engageants"
        immediate={[
          {
            label: "Repérer le ou les logos sur l'emballage",
            description:
              "Avant de lire l'argumentaire marketing, regardez quels logos figurent sur l'emballage. Photographiez-les si vous hésitez : la vérification se fera plus facilement à tête reposée.",
            effort: "Gratuit, 30 secondes",
          },
          {
            label: "Vérifier l'organisme certificateur",
            description:
              "Pour chaque logo, identifiez l'organisme qui le délivre. AFNOR, Ecocert, Certivéa, UL Solutions, FSC, PEFC sont des tiers reconnus. Un logo sans nom d'organisme certificateur visible est un signal d'alerte.",
            effort: "Gratuit, recherche en ligne",
          },
          {
            label: "Distinguer label réglementaire et label privé",
            description:
              "Le label A+ d'émissions COV est obligatoire en France : il doit figurer sur tout produit de construction et décoration. Son absence sur une peinture ou un revêtement est anormale. Les autres labels sont volontaires : leur présence est un plus, leur absence n'est pas en soi rédhibitoire pour un petit fabricant.",
            effort: "Connaissance",
          },
          {
            label: "Lire le référentiel en cas de doute",
            description:
              "Les écolabels officiels publient leurs critères en accès libre sur leurs sites (ecolabels.fr pour l'Écolabel UE et NF Environnement, fsc-france.fr, etc.). En cas de doute, consultez ce que le label exige réellement.",
            effort: "10-15 minutes pour un achat important",
          },
        ]}
        structural={[
          {
            label: "Croiser plusieurs labels pour les achats long terme",
            description:
              "Pour un meuble, un revêtement de sol ou une peinture qui restera des années dans une chambre d'enfant, croiser un label d'émissions (A+ ou Greenguard) et un label environnemental (Écolabel UE, NF Environnement) renforce la garantie. Aucun label ne couvre seul tous les enjeux.",
            effort: "Choix d'achat ciblé",
          },
          {
            label: "Privilégier les labels à audits réguliers",
            description:
              "Les écolabels ISO 14024 imposent des audits périodiques. C'est une différence majeure avec les labels délivrés une seule fois sans suivi. Pour les produits achetés en quantité (peinture, sol, mobilier), ce critère pèse.",
            effort: "Vérification ponctuelle",
          },
          {
            label: "Conserver les preuves d'achat et les certificats",
            description:
              "En cas de revente du logement, ou de problème sanitaire ultérieur, disposer des fiches techniques et des certifications des matériaux posés est utile. Certains acquéreurs commencent à demander des garanties sur les produits utilisés en rénovation récente.",
            effort: "Organisation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs les plus courantes face aux labels."
        errors={[
          {
            label: "Croire qu'un label « écologique » garantit l'absence de COV",
            explanation:
              "Un produit peut être éco-conçu (matières recyclées, filière courte, biodégradable) tout en émettant des COV à l'application. L'éco-conception et les émissions dans l'air intérieur sont deux dimensions distinctes : exigez les deux types de garantie pour une chambre.",
          },
          {
            label: "Multiplier les labels sans vérifier leur sens",
            explanation:
              "Plusieurs logos sur un emballage ne sont pas automatiquement un signe de qualité. Certains se recouvrent (un même produit peut avoir Écolabel UE et NF Environnement), d'autres juxtaposent un vrai label et un logo marketing pour brouiller. Vérifier chaque logo individuellement.",
          },
          {
            label: "Confondre PEFC et FSC sur le bois tropical",
            explanation:
              "Les deux labels couvrent le bois géré durablement, mais le FSC est plus strict (audit initial obligatoire, soutien WWF). Pour les essences tropicales (teck, ipé, bangkirai), exigez FSC. PEFC reste acceptable pour les résineux européens et français.",
          },
          {
            label: "Ignorer le label A+ parce qu'il « ne signifie pas zéro COV »",
            explanation:
              "Le A+ ne signifie effectivement pas zéro COV — il atteste de très faibles émissions mesurées à 28 jours. Mais c'est le seul critère obligatoire et fiable disponible en France. Le négliger sous prétexte qu'il est imparfait revient à se priver de la meilleure information accessible.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les labels et certifications"
        items={[
          {
            question: "Comment savoir si un label est fiable ?",
            answer:
              "Trois critères essentiels : 1) un organisme tiers indépendant délivre la certification, 2) le référentiel est public et auditable, 3) des audits réguliers sont prévus. Les labels respectant la norme ISO 14024 (Écolabel européen, NF Environnement, Nordic Swan) cochent les trois cases. Les labels privés sérieux (FSC, Greenguard, Oeko-Tex, Ange Bleu, Ecocert) répondent généralement aux deux premiers critères.",
          },
          {
            question: "A+ veut-il dire zéro émission ?",
            answer:
              "Non. Le label A+ atteste de très faibles émissions mesurées en chambre d'essai à 28 jours après application. Une peinture A+ peut contenir jusqu'à 5 g/L de COV. La ventilation post-application reste indispensable, même avec les meilleurs produits du marché. Le détail de l'étiquetage est traité sur la page dédiée à l'étiquetage COV.",
          },
          {
            question: "FSC ou PEFC, lequel choisir pour le bois ?",
            answer:
              "FSC (soutenu par WWF) est plus strict : audit initial obligatoire, plan de gestion vérifié dès la première année. PEFC est plus large géographiquement et plus accessible aux exploitants français, mais avec des critères jugés moins exigeants. Pour un meuble en bois tropical, exigez FSC. Pour du résineux français ou européen, PEFC est une garantie acceptable.",
          },
          {
            question: "Greenguard est-il reconnu en France ?",
            answer:
              "Oui. C'est une certification américaine (UL Solutions) reconnue internationalement. Greenguard Gold utilise des seuils proches de l'Ange Bleu allemand, plus stricts que le A+ français. Particulièrement pertinent pour les chambres d'enfants, les écoles et les hôpitaux. Vous le trouverez sur du mobilier scolaire, des sols et certaines peintures importées.",
          },
          {
            question: "Un produit sans label est-il forcément à éviter ?",
            answer:
              "Pas forcément. Un petit fabricant peut produire des matériaux de qualité sans pouvoir financer une certification, qui coûte plusieurs milliers d'euros par an et par catégorie. Mais l'absence de label retire la garantie tierce : le doute reste à la charge du consommateur. Pour les produits de grande série, l'absence de label sur un emballage qui rivalise avec des concurrents labellisés est en revanche un signal négatif.",
          },
          {
            question: "Que change la directive européenne 2024/825 en septembre 2026 ?",
            answer:
              "Elle interdit les allégations environnementales génériques (« écologique », « vert », « respectueux de l'environnement », « climatiquement neutre ») sans preuve, encadre les labels privés et renforce l'information sur la durabilité des produits. Les marques devront justifier toute mention « écologique » par une certification reconnue ou des données vérifiables. La DGCCRF aura des outils renforcés pour sanctionner.",
          },
          {
            question: "Plusieurs labels sur un même produit, est-ce un signe de qualité ?",
            answer:
              "Pas automatiquement. Certains labels se recouvrent (un même nettoyant peut avoir Écolabel UE et NF Environnement, deux écolabels Type I), d'autres se renforcent réellement (FSC + Greenguard sur un meuble bois). D'autres encore juxtaposent un vrai label et un logo marketing pour donner une impression de garantie. Vérifier chaque logo individuellement, en s'assurant de l'organisme certificateur.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Comprendre l'étiquetage A+ des COV",
            description:
              "Le détail technique du label A+ : décret 2011-321, classes A+/A/B/C, mesures à 28 jours. Le complément réglementaire de cette page hub.",
            href: "/materiaux-sains/etiquetage-cov-comprendre/",
          },
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions : le hub transversal",
            description:
              "Le label A+ appliqué aux sols, peintures, meubles et colles : l'angle « tous matériaux » de la maison.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Produits et habitudes",
            title: "Choisir des produits ménagers sains",
            description:
              "L'application des labels Écolabel européen, NF Environnement et Ecodetergent aux produits du quotidien.",
            href: "/produits-et-habitudes/produits-menagers-sains/",
          },
          {
            tag: "Rénovation saine",
            title: "Le label A+ lors des travaux",
            description:
              "Comment exiger l'A+ dans un chantier de rénovation : fiches techniques, devis et points de contrôle.",
            href: "/renovation-saine/label-a-plus-travaux/",
          },
        ]}
      />
    </>
  );
}
