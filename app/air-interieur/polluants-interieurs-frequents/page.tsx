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
  title: "Polluants intérieurs les plus fréquents : COV, formaldéhyde, particules",
  description:
    "COV, formaldéhyde, particules fines, allergènes : identifier les polluants présents dans votre logement, comprendre leurs sources et réduire votre exposition concrètement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/polluants-interieurs-frequents/",
  },
  openGraph: {
    title: "Polluants intérieurs les plus fréquents : COV, formaldéhyde, particules",
    description:
      "COV, formaldéhyde, particules fines, allergènes : identifier les polluants présents dans votre logement, comprendre leurs sources et réduire votre exposition concrètement.",
    url: "https://www.maisonbionat.fr/air-interieur/polluants-interieurs-frequents/",
  },
};

export default function PolluantsInterieursPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Polluants intérieurs les plus fréquents : COV, formaldéhyde, particules", href: "https://www.maisonbionat.fr/air-interieur/polluants-interieurs-frequents/" },
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
        tag="Connaître les sources"
        title="Les polluants les plus fréquents dans un logement ordinaire."
        quickAnswer="L'air intérieur contient plusieurs familles de polluants : chimiques (COV, formaldéhyde), biologiques (spores, acariens) et particulaires (poussières fines). Chaque famille a des sources distinctes et des solutions différentes. Identifier ce qui est présent chez vous est la première étape pour agir efficacement."
        stats={[
          { value: "5 à 10×", label: "plus pollué que l'air extérieur en moyenne (ANSES)" },
          { value: "10 µg/m³", label: "valeur guide ANSES pour le formaldéhyde (exposition chronique, 2023)" },
          { value: "300+", label: "composés organiques volatils détectables dans un logement ordinaire" },
          { value: "80–90%", label: "du temps passé en espaces clos (adultes comme enfants)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Familles de polluants" },
          { id: "signes", label: "Signaux d'alerte" },
          { id: "causes", label: "Sources principales" },
          { id: "actions", label: "Que faire" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Trois grandes familles de polluants intérieurs."
        description="Les polluants présents dans un logement ne forment pas une masse uniforme. Ils se répartissent en trois familles distinctes, avec des sources, des effets et des solutions différents. Les comprendre permet d'agir là où c'est utile."
        variants={[
          {
            indicator: "Polluants chimiques",
            name: "COV et formaldéhyde",
            description:
              "Les composés organiques volatils (COV) proviennent des peintures, sols, meubles, colles et produits ménagers. Le formaldéhyde, classé cancérigène avéré par le CIRC (groupe 1, 2004), est présent dans les panneaux de bois aggloméré, certaines peintures et textiles traités. Ce sont les polluants les plus documentés dans les logements français.",
          },
          {
            indicator: "Polluants biologiques",
            name: "Spores, acariens et allergènes",
            description:
              "Les moisissures libèrent des spores et des mycotoxines dans l'air. Les acariens vivent dans la literie, les tapis et les textiles. Les poils d'animaux et les pollens constituent d'autres sources d'allergènes. L'humidité excessive et la poussière favorisent leur développement.",
          },
          {
            indicator: "Polluants particulaires",
            name: "Particules fines et ultrafines",
            description:
              "Les PM2,5 (particules de moins de 2,5 micromètres) proviennent de la combustion : bougies, encens, feux de cheminée, cuisine, tabac. Elles pénètrent profondément dans les voies respiratoires. La cuisine est souvent la première source dans un logement non-fumeur.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signes qui indiquent un air intérieur dégradé."
        subtitle="Certains symptômes ou situations suggèrent une exposition plus importante que la normale."
        signs={[
          {
            label: "Symptômes qui disparaissent en dehors du logement",
            description:
              "Maux de tête, irritations des yeux ou de la gorge, fatigue anormale qui s'améliorent en dehors du domicile sont des signaux classiques d'une exposition aux polluants intérieurs. Ils ne permettent pas d'identifier la source seuls, mais invitent à investiguer.",
            severity: "critique",
          },
          {
            label: "Logement récemment rénové ou meublé",
            description:
              "Les 6 à 12 premiers mois suivant une rénovation ou l'installation de nouveaux meubles correspondent aux pics d'émission des matériaux. La ventilation intensive est particulièrement importante pendant cette période.",
            severity: "modéré",
          },
          {
            label: "Odeur persistante malgré l'aération",
            description:
              "Une odeur chimique, musquée ou âcre qui revient après aération indique une source active de polluants ou de moisissures dans le logement. Elle ne doit pas être masquée mais identifiée.",
            severity: "modéré",
          },
          {
            label: "Moisissures visibles, même ponctuelles",
            description:
              "Des taches de moisissures, même petites, indiquent des conditions d'humidité favorables au développement de spores dans l'air. C'est un signal que la qualité de l'air biologique est dégradée.",
            severity: "critique",
          },
          {
            label: "VMC absente ou jamais entretenue",
            description:
              "Un logement sans renouvellement d'air mécanique, ou avec une VMC non entretenue depuis plusieurs années, concentre progressivement tous les polluants émis par les occupants et les matériaux.",
            severity: "léger",
          },
          {
            label: "Utilisation fréquente de produits parfumés ou en spray",
            description:
              "Bougies, diffuseurs, sprays désodorisants, produits ménagers fortement parfumés : chaque utilisation ajoute des COV à l'air ambiant. L'accumulation quotidienne peut être significative.",
            severity: "léger",
          },
        ]}
        footerNote="Les polluants intérieurs ne provoquent pas systématiquement des symptômes. Une exposition chronique à des niveaux modérés peut s'installer sans signe immédiat. La prévention par une bonne ventilation et le choix de matériaux à faibles émissions reste la stratégie la plus efficace."
      />

      <IssueCauses
        id="causes"
        title="Les sources de polluants dans un logement ordinaire."
        subtitle="Chaque source contribue différemment selon les matériaux, les habitudes et la ventilation."
        causes={[
          {
            number: "01",
            cause: "Matériaux de construction et finitions",
            explanation:
              "Panneaux de bois aggloméré (MDF, contreplaqué), peintures, vernis, colles de pose : ils émettent du formaldéhyde et des COV, avec un pic dans les premières semaines et une décroissance progressive sur plusieurs années. Les matériaux sans étiquetage A+ sont les plus problématiques.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Mobilier et produits de décoration",
            explanation:
              "Un canapé ou une bibliothèque en panneaux de particules peut émettre davantage de formaldéhyde qu'une peinture récente. Les meubles neufs installés dans des espaces peu ventilés (chambres, dressings) sont des sources majeures en période de dégazage.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Produits d'entretien, parfums et bougies",
            explanation:
              "Sprays multi-usages, désodorisants, bougies à la paraffine, diffuseurs d'huiles essentielles : chaque utilisation libère des COV. Certains produits d'entretien contiennent des composés classés irritants ou sensibilisants par le CIRC ou l'ANSES.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Combustion en intérieur",
            explanation:
              "Cuisson (gaz ou induction), bougies, encens, cheminée, tabac : la combustion produit des particules fines (PM2,5), du monoxyde de carbone, de l'acroléine et d'autres composés irritants. La hotte extractrice et la ventilation de la cuisine sont indispensables.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Humidité, moisissures et acariens",
            explanation:
              "Un taux d'humidité durablement supérieur à 60 % favorise les moisissures et les acariens, deux sources de polluants biologiques (spores, mycotoxines, déjections). La literie, les tapis et les espaces mal ventilés sont les zones à surveiller.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire l'exposition aux polluants intérieurs."
        immediateLabel="Actions immédiates"
        structuralLabel="Actions durables"
        immediate={[
          {
            label: "Aérer deux fois par jour, fenêtres en opposition",
            description:
              "10 minutes matin et soir avec des fenêtres opposées pour créer un courant d'air. Simple, gratuit et immédiatement efficace pour diluer les polluants accumulés depuis la veille. Aération plus longue après travaux, achat de meubles ou utilisation de produits.",
            effort: "Gratuit",
          },
          {
            label: "Supprimer les sources les plus émissives",
            description:
              "Bougies à la paraffine, sprays désodorisants, diffuseurs d'huiles essentielles, produits d'entretien en spray : leur élimination réduit immédiatement la charge chimique de l'air. Remplacez par des alternatives moins émissives ou par rien.",
            effort: "Gratuit",
          },
          {
            label: "Faire dégazer les meubles neufs avant installation",
            description:
              "Installez les meubles neufs dans un espace ventilé (garage, pièce ouverte) pendant 2 à 4 semaines avant de les placer dans une chambre ou un espace peu ventilé. La concentration d'émissions diminue fortement après cette période.",
            effort: "Organisation",
          },
          {
            label: "Vérifier et nettoyer les bouches de VMC",
            description:
              "Des bouches VMC encrassées ou obstruées réduisent le débit de renouvellement d'air. Nettoyez-les à l'aspirateur ou avec un chiffon humide tous les 6 mois. Vérifiez que les grilles d'entrée d'air ne sont pas obturées.",
            effort: "Gratuit, 15 min",
          },
        ]}
        structural={[
          {
            label: "Choisir des matériaux A+ pour tout achat ou rénovation",
            description:
              "Lors de l'achat d'une peinture, d'un sol ou d'un meuble, l'étiquetage A+ est le minimum légal et le critère pertinent. Il ne garantit pas zéro émission mais atteste d'un niveau faible mesuré en laboratoire. Évitez les produits sans étiquetage visible.",
            effort: "Pas de surcoût systématique",
          },
          {
            label: "Faire entretenir ou remplacer la VMC",
            description:
              "Une VMC efficace est le moyen structurel le plus fiable pour maintenir une bonne qualité de l'air. Faites vérifier son débit par un professionnel si vous n'avez pas de données récentes. Un entretien complet est recommandé tous les 5 à 10 ans.",
            effort: "100–500 € selon installation",
          },
          {
            label: "Traiter l'humidité pour limiter les polluants biologiques",
            description:
              "Maintenir l'hygrométrie entre 40 et 60 % réduit significativement les moisissures et les acariens. Cela passe par une ventilation fonctionnelle, une aération régulière et le contrôle des activités productrices de vapeur (cuisine, linge, douche).",
            effort: "Organisationnel principalement",
          },
          {
            label: "Installer une hotte extractrice dans la cuisine",
            description:
              "La hotte avec extraction extérieure est la solution la plus efficace contre les polluants de cuisson (particules fines, vapeurs grasses, acroléine). Une hotte à recyclage filtre partiellement mais ne supprime pas les polluants gazeux ni les PM.",
            effort: "300–800 €",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les idées reçues sur les polluants intérieurs."
        errors={[
          {
            label: "Les plantes dépolluentl'air",
            explanation:
              "Les études en conditions réelles, dont celles coordonnées par l'ANSES, concluent que les plantes d'intérieur ont un effet négligeable sur la concentration de polluants dans un logement ordinaire. La quantité nécessaire pour un impact mesurable serait impraticable. L'aération reste incomparablement plus efficace.",
          },
          {
            label: "Un logement neuf est plus sain qu'un ancien",
            explanation:
              "Un logement neuf contient des matériaux récents qui n'ont pas encore dégazé. Les concentrations en formaldéhyde et COV sont souvent plus élevées dans le neuf que dans l'ancien. La ventilation intensive les premières années est particulièrement critique dans ce contexte.",
          },
          {
            label: "Les produits naturels ne polluent pas",
            explanation:
              "Les huiles essentielles, les bougies à la cire d'abeille, les encens naturels : tous émettent des COV et des particules fines lors de la combustion ou de la diffusion. L'origine naturelle d'un composé ne détermine pas son innocuité pour les voies respiratoires.",
          },
          {
            label: "Un purificateur d'air suffit à traiter le problème",
            explanation:
              "Un purificateur HEPA traite les particules. Il n'élimine pas les COV gazeux ni le formaldéhyde, qui nécessitent d'autres filtres (charbon actif), eux-mêmes limités en efficacité. Le purificateur est un complément, jamais un substitut à la ventilation.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les polluants intérieurs"
        items={[
          {
            question: "Qu'est-ce que le formaldéhyde et est-il dangereux ?",
            answer:
              "Le formaldéhyde est un gaz incolore et irritant, classé cancérigène avéré pour l'humain par le CIRC (groupe 1, 2004). On le trouve dans les panneaux de bois aggloméré, certaines peintures, colles et textiles traités. L'ANSES a fixé une valeur guide de 10 µg/m³ pour une exposition chronique (en vigueur depuis janvier 2023). Une bonne ventilation et des matériaux A+ permettent de rester bien en dessous de ce seuil.",
          },
          {
            question: "Les COV sont-ils tous dangereux ?",
            answer:
              "Non, les COV forment une famille très hétérogène de composés. Certains sont inoffensifs à faible dose, d'autres sont irritants ou cancérigènes. La dangerosité dépend du composé, de sa concentration et de la durée d'exposition. Le principe général : réduire les sources d'émission et maintenir une bonne ventilation permet de rester dans des niveaux acceptables pour la grande majorité des logements.",
          },
          {
            question: "Comment savoir si l'air de mon logement est pollué ?",
            answer:
              "Sans mesure, il est difficile de l'évaluer précisément. Des signaux indirects existent : symptômes qui s'améliorent à l'extérieur, odeurs persistantes, présence de moisissures, rénovation récente, mobilier neuf en grande quantité. Pour une évaluation objective, des kits de mesure du formaldéhyde existent en grande surface (fiabilité variable) et des professionnels certifiés peuvent réaliser des analyses complètes.",
          },
          {
            question: "Les acariens sont-ils vraiment problématiques pour tout le monde ?",
            answer:
              "Les acariens de la literie sont une source majeure d'allergènes, mais ils n'affectent que les personnes sensibilisées (allergiques aux acariens). Environ 10 à 15 % de la population est concernée. Si vous avez des symptômes de rhinite ou d'asthme à prédominance nocturne ou matinale, une allergie aux acariens est à envisager et à confirmer par un test allergologique.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Améliorer l'air dans sa maison",
            description:
              "Connaître les polluants est la première étape. Voici la stratégie complète pour réduire concrètement la pollution de votre air intérieur.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
          {
            tag: "Matériaux sains",
            title: "Choisir des matériaux à faibles émissions",
            description:
              "Les matériaux sont l'une des sources principales de COV et de formaldéhyde. Comprendre l'étiquetage A+ et faire de meilleurs choix.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers et air intérieur",
            description:
              "Les produits du quotidien contribuent significativement à la charge chimique de l'air. Substitutions et habitudes pour réduire l'exposition.",
            href: "/produits-et-habitudes/",
          },
        ]}
      />
    </>
  );
}
