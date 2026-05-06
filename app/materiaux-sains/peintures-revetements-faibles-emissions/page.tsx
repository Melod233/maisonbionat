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
  title: "Peintures, papiers peints, colles et apprêts : étiquetage des finitions murales",
  description:
    "Au-delà de la peinture en pot : papiers peints, colles de pose, apprêts et enduits décoratifs participent aux émissions. Comment évaluer l'ensemble des produits d'une finition murale, label A+ et alternatives.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/materiaux-sains/peintures-revetements-faibles-emissions/",
  },
  openGraph: {
    title: "Peintures, papiers peints, colles et apprêts : étiquetage des finitions murales",
    description:
      "Au-delà de la peinture en pot : papiers peints, colles, apprêts et enduits décoratifs. Comment évaluer l'ensemble des produits d'une finition murale.",
    url: "https://www.maisonbionat.fr/materiaux-sains/peintures-revetements-faibles-emissions/",
  },
};

export default function PeinturesRevetementsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Peintures, papiers peints, colles et apprêts : étiquetage des finitions murales", href: "https://www.maisonbionat.fr/materiaux-sains/peintures-revetements-faibles-emissions/" },
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
        tag="Guide pratique"
        title="Finitions murales : peintures, papiers peints, colles et apprêts à faibles émissions"
        quickAnswer="Une finition murale ne se résume pas à la peinture finale. Les apprêts, colles de pose, papiers peints, toiles de verre et enduits décoratifs participent tous aux émissions de COV dans le logement, parfois davantage que la peinture elle-même. Le label A+ (décret 2011-321, obligatoire depuis 2013) s'applique à l'ensemble de ces produits. Cette page traite les finitions murales dans leur globalité : pour choisir une peinture en pot spécifiquement, voyez la page dédiée à la peinture saine."
        stats={[
          {
            value: "A+",
            label: "meilleure classe d'émission, obligatoire depuis 2013 (décret 2011-321)",
          },
          {
            value: "4 classes",
            label: "A+, A, B, C, mesurées 28 jours après application en chambre d'essai",
          },
          {
            value: "30 g/l",
            label: "teneur moyenne en COV des peintures conventionnelles contre 5 g/l pour les peintures écologiques",
          },
          {
            value: "4 à 6 sem.",
            label: "durée d'aération intensive recommandée après application, même avec un produit A+",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre l'étiquetage" },
          { id: "signes", label: "Signes d'un produit émissif" },
          { id: "causes", label: "Sources de COV dans les peintures" },
          { id: "actions", label: "Choisir et agir" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="L'étiquetage des émissions : ce que signifient les classes A+, A, B et C."
        description="Depuis le 1er septembre 2013, tous les produits de construction, revêtements de sol, peintures et vernis vendus en France doivent afficher leur classe d'émission de COV. Ce classement est défini par le décret 2011-321 et son arrêté d'application du 19 avril 2011. Les mesures portent sur 10 substances spécifiques (formaldéhyde, acétaldéhyde, toluène, xylène, etc.) ainsi que les COV totaux, évaluées 28 jours après application dans une chambre d'essai normalisée."
        variants={[
          {
            indicator: "Classe A+",
            name: "Très faibles émissions",
            description:
              "La classe A+ correspond aux produits dont les émissions mesurées sont les plus basses. C'est le minimum recommandé pour toutes les pièces de vie, les chambres et plus encore les chambres d'enfants. La grande majorité des peintures en grande surface affichent aujourd'hui ce classement.",
          },
          {
            indicator: "Classe A",
            name: "Faibles émissions",
            description:
              "La classe A indique des émissions faibles, mais supérieures aux seuils A+. Ces produits conviennent pour des pièces bien ventilées ou des usages moins sensibles (caves, garages, locaux techniques). Déconseillés pour les chambres, notamment celles des enfants.",
          },
          {
            indicator: "Classes B et C",
            name: "Émissions modérées à élevées",
            description:
              "Les classes B et C signalent des émissions significativement plus élevées. Ces produits ne devraient pas être utilisés dans des espaces de vie ou de sommeil. Leur présence dans le commerce est légale mais leur usage dans un logement occupé est fortement déconseillé.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître un revêtement ou une peinture fortement émissifs."
        subtitle="Certains indices permettent d'évaluer le niveau d'émission d'un produit avant, pendant et après son utilisation."
        signs={[
          {
            label: "Absence d'étiquette de classe d'émission sur l'emballage",
            description:
              "L'étiquetage est obligatoire depuis 2013. Un produit sans étiquette visible ou sans mention explicite de sa classe A+/A/B/C ne respecte pas la réglementation, ou est suffisamment ancien pour avoir été commercialisé avant l'obligation. Dans les deux cas, prudence.",
            severity: "critique",
          },
          {
            label: "Odeur forte et persistante après application",
            description:
              "Une peinture ou un vernis à forte teneur en solvants dégage une odeur prononcée pendant plusieurs jours. Les peintures à l'eau et les produits A+ ont une odeur nettement plus faible. Une odeur persistante au-delà de 48 heures signale des émissions actives.",
            severity: "modéré",
          },
          {
            label: "Irritation des yeux ou de la gorge pendant la pose",
            description:
              "Les peintures à forte teneur en COV irritent les muqueuses pendant l'application et dans les heures suivantes. Si vous ressentez des picotements ou une gorge sèche même avec les fenêtres ouvertes, le produit est probablement émissif.",
            severity: "modéré",
          },
          {
            label: "Odeur chimique qui revient à la chaleur",
            description:
              "Par temps chaud ou en été, certains revêtements continuent d'émettre des COV résiduels lorsque la température monte. Si une odeur de solvant réapparaît dans une pièce peinte depuis plusieurs mois, le dégazage est toujours actif.",
            severity: "léger",
          },
          {
            label: "Étiquette mentionnant des solvants ou hydrocarbures aromatiques",
            description:
              "Toluène, xylène, white-spirit : ces mentions dans la composition signalent une peinture à base de solvants pétroliers. Certains produits de préparation (apprêts, dégraissants) en contiennent encore, même si la peinture de finition est A+.",
            severity: "critique",
          },
          {
            label: "Symptômes qui diminuent en quittant la pièce fraîchement peinte",
            description:
              "Maux de tête, sensation de fatigue ou irritations qui s'améliorent dès que vous sortez de la pièce : c'est un indicateur fiable de concentrations élevées de COV dans l'air ambiant, surtout si la pièce est peu ventilée.",
            severity: "modéré",
          },
        ]}
        footerNote="L'absence de symptômes ne garantit pas des émissions faibles. Beaucoup de COV sont inodores à faibles concentrations. L'étiquetage reste le seul critère objectif facilement accessible."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent les COV dans une finition murale complète."
        subtitle="Les émissions ne viennent pas que de la peinture : chaque produit posé sur le mur contribue, parfois pour une part significative."
        causes={[
          {
            number: "01",
            cause: "Les apprêts, primers et sous-couches",
            explanation:
              "La préparation du support est souvent négligée dans l'évaluation des émissions. Certains apprêts anti-humidité ou bouche-pores contiennent des solvants puissants (white-spirit, glycols) avec des teneurs en COV bien supérieures à la peinture finale. Un revêtement A+ posé sur un apprêt non étiqueté ne garantit pas un résultat global satisfaisant. Exigez un étiquetage A+ aussi sur la sous-couche.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les colles de pose des papiers peints et toiles de verre",
            explanation:
              "La colle de pose est souvent le vecteur principal d'émissions d'un revêtement collé. Les colles en pâte prêtes à l'emploi (acryliques, polymères) émettent davantage que les colles en poudre à diluer (à base d'amidon ou de méthylcellulose). Vérifiez systématiquement l'étiquetage de la colle, pas seulement du papier peint lui-même.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les papiers peints et toiles de verre eux-mêmes",
            explanation:
              "Un papier peint intissé moderne émet généralement peu de COV après séchage de la colle. Les papiers peints en vinyle sur support papier (anciens ou bas de gamme) peuvent en revanche dégager des phtalates et des stabilisants. Les toiles de verre destinées à être peintes ne sont émissives que si elles sont enduites d'un primaire pré-imprégné ; vérifiez l'étiquetage produit.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les enduits décoratifs et bétons cirés",
            explanation:
              "Les enduits décoratifs synthétiques (effet béton, stuc, tadelakt synthétique) contiennent des liants acryliques émissifs. Les enduits minéraux à base de chaux, de plâtre ou d'argile naturelle sont quasiment sans COV. Les bétons cirés véritables (à base de ciment et de cire végétale) sont plus sains que leurs équivalents acryliques.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Les solvants et liants des peintures elles-mêmes",
            explanation:
              "Pour mémoire, les peintures glycéro et alkyde contiennent des solvants pétroliers (jusqu'à 300-400 g/L de COV). Les peintures acryliques à l'eau A+ restent sous 5 g/L. Le détail du choix de la peinture est traité sur la page dédiée — ici on retient simplement qu'elle reste un poste majeur dans le bilan global.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir et poser des peintures et revêtements muraux plus sains."
        immediate={[
          {
            label: "Vérifier le A+ avant d'acheter",
            description:
              "L'étiquette de classe d'émission doit être visible sur l'emballage. En cas de doute, demandez la fiche technique du produit. Pour les chambres, les pièces fermées et surtout les chambres d'enfants, exigez systématiquement le A+.",
            effort: "Gratuit, 2 minutes par produit",
          },
          {
            label: "Aérer pendant et après la pose",
            description:
              "Ouvrez les fenêtres pendant l'application et laissez-les ouvertes en continu les 48 premières heures. Maintenez une aération intensive (fenêtres entrouvertes ou VMC au maximum) pendant au moins 4 semaines. N'occupez pas la pièce peinte les premiers jours.",
            effort: "Gratuit",
          },
          {
            label: "Vérifier l'étiquetage de l'apprêt avant d'acheter la peinture",
            description:
              "L'apprêt est souvent acheté sans réflexion, en complément de la peinture. Pourtant il peut être plus émissif que la finition. Exigez le A+ sur l'apprêt comme sur la peinture, surtout pour les apprêts anti-humidité, bouche-pores et accroches difficiles.",
            effort: "Gratuit, vigilance à l'achat",
          },
          {
            label: "Privilégier les colles à papier peint en poudre à diluer",
            description:
              "Les colles à base de méthylcellulose ou d'amidon (en poudre, à diluer dans l'eau) émettent beaucoup moins que les colles en pâte prêtes à l'emploi. Pour les papiers peints intissés, ce type de colle convient parfaitement. Pour les vinyles, vérifiez la compatibilité technique.",
            effort: "Choix au moment de l'achat",
          },
        ]}
        structural={[
          {
            label: "Opter pour des alternatives naturelles dans les pièces de sommeil",
            description:
              "La peinture à la chaux, à l'argile ou au silicate de potassium contient entre 50 et 400 fois moins de COV que la norme A+, selon certaines formulations. La chaux a également une action naturelle contre les moisissures grâce à son pH élevé. Ces produits sont plus coûteux mais justifiés dans les chambres, notamment celles des enfants.",
            effort: "Surcoût de 20 à 50 % selon le produit",
          },
          {
            label: "Planifier les travaux hors présence des occupants vulnérables",
            description:
              "Si des enfants, des femmes enceintes ou des personnes asthmatiques vivent dans le logement, planifiez les travaux de peinture pendant une période d'absence (vacances). Laissez la pièce inoccupée pendant au moins deux semaines après la fin des travaux.",
            effort: "Organisation",
          },
          {
            label: "Préférer les enduits minéraux sur les murs à fort taux d'humidité",
            description:
              "Dans une salle de bain ou une cuisine, un enduit à la chaux ou un revêtement en carreaux de faïence est plus durable et moins émissif qu'une peinture filmogène. Il régule aussi naturellement l'humidité et prévient les moisissures.",
            effort: "Coût de pose plus élevé",
          },
          {
            label: "Conserver les fiches techniques et étiquettes des produits utilisés",
            description:
              "En cas de revente ou de travaux ultérieurs, disposer des références exactes des produits posés est utile. Certains acquéreurs de logements demandent aujourd'hui des garanties sur les matériaux utilisés.",
            effort: "Organisation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les peintures et revêtements muraux."
        errors={[
          {
            label: "\"A+ veut dire sans COV\"",
            explanation:
              "Le label A+ ne signifie pas l'absence de COV. Il garantit que les émissions mesurées restent sous des seuils jugés acceptables. Une peinture A+ peut contenir jusqu'à 5 g/litre de COV. L'aération reste indispensable, même avec les meilleurs produits du marché.",
          },
          {
            label: "\"Une peinture sèche ne dégage plus rien\"",
            explanation:
              "Le séchage visible (au toucher) intervient en quelques heures. Mais les émissions chimiques se poursuivent pendant plusieurs semaines, parfois plusieurs mois pour certains produits. Le dégazage suit une courbe décroissante, avec un pic dans les premiers jours et une queue longue.",
          },
          {
            label: "\"Les peintures naturelles sont toujours sans odeur\"",
            explanation:
              "Les peintures à l'huile de lin ou certaines peintures à base de résines naturelles (dammar, shellac) peuvent dégager des COV naturels (terpènes). Naturel ne signifie pas inodore ni sans émissions. Vérifiez la composition et, si possible, l'étiquetage ou une certification indépendante.",
          },
          {
            label: "\"La pièce sent bon, donc c'est sain\"",
            explanation:
              "Certains fabricants ajoutent des fragrances à leurs peintures pour masquer l'odeur de solvants. Une bonne odeur n'indique pas un faible niveau d'émissions. Seul l'étiquetage ou une analyse en chambre d'essai permet d'évaluer objectivement le niveau de COV.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les peintures et revêtements à faibles émissions"
        items={[
          {
            question: "Pourquoi vérifier l'étiquetage de la colle et de l'apprêt, pas seulement de la peinture ?",
            answer:
              "Parce qu'ils sont posés en couche significative et émettent autant voire davantage que la peinture finale. Une colle de papier peint en pâte ou un apprêt à solvants peut représenter la majeure partie des COV émis dans les semaines suivant un chantier. Le label A+ doit s'appliquer à l'ensemble des produits posés sur le mur, pas seulement à la finition visible.",
          },
          {
            question: "Les papiers peints intissés sont-ils plus sains que les papiers peints vinyle ?",
            answer:
              "Généralement oui. Les intissés modernes émettent peu de COV une fois la colle sèche. Les papiers peints vinyle sur support papier, surtout les anciens ou bas de gamme, peuvent contenir des phtalates et des stabilisants émissifs. Pour une chambre, privilégiez l'intissé avec une colle en poudre à base d'amidon ou de méthylcellulose.",
          },
          {
            question: "Quelles sont les meilleures alternatives naturelles aux peintures conventionnelles ?",
            answer:
              "La peinture à la chaux (bactéricide naturelle, zéro COV), la peinture à l'argile (régulation de l'humidité, textures naturelles) et la peinture au silicate de potassium (minéralisation du support, très longue durée de vie) sont les trois alternatives les plus fiables. Ces produits sont plus chers et nécessitent souvent un support adapté, mais leurs émissions sont très inférieures à n'importe quelle peinture conventionnelle.",
          },
          {
            question: "Peut-on réutiliser un reste de peinture stocké depuis plusieurs années ?",
            answer:
              "Une peinture stockée plusieurs années peut avoir perdu ses propriétés (démixtion, altération des liants) et émettre davantage de COV à l'application. Si le produit n'est plus homogène après brassage ou dégage une odeur plus forte qu'à l'achat, préférez un produit neuf. Les restes de peinture peuvent être déposés en déchetterie.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Choisir une peinture plus saine spécifiquement",
            description:
              "Pour le choix d'une peinture en pot : lecture étiquette, peintures à l'eau vs glycéro, alternatives naturelles (chaux, argile, silicate).",
            href: "/materiaux-sains/peinture-plus-saine/",
          },
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions : le hub transversal",
            description:
              "Le label A+ s'applique aussi aux sols, meubles et colles non murales. Comprendre l'étiquetage sur l'ensemble des matériaux d'un logement.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux : comment ça fonctionne",
            description:
              "Le phénomène physique du dégazage, sa durée selon les matériaux et les moyens de l'accélérer après travaux.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
        ]}
      />
    </>
  );
}
