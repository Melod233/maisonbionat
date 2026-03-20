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
  title: "Peintures et revêtements à faibles émissions : comprendre le A+",
  description:
    "Décret 2011-321, classes A+ à C, COV dans les peintures : comment choisir une peinture ou un revêtement mural qui n'altère pas la qualité de l'air de votre logement.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/materiaux-sains/peintures-revetements-faibles-emissions/",
  },
  openGraph: {
    title: "Peintures et revêtements à faibles émissions : comprendre le A+",
    description:
      "Décret 2011-321, classes A+ à C, COV dans les peintures : comment choisir une peinture ou un revêtement mural qui n'altère pas la qualité de l'air de votre logement.",
    url: "https://www.maisonbionat.fr/materiaux-sains/peintures-revetements-faibles-emissions/",
  },
};

export default function PeinturesRevetementsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Peintures et revêtements à faibles émissions : comprendre le A+", href: "https://www.maisonbionat.fr/materiaux-sains/peintures-revetements-faibles-emissions/" },
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
        title="Peintures et revêtements muraux : choisir des produits qui n'altèrent pas votre air intérieur"
        quickAnswer="Les peintures et revêtements muraux font partie des principales sources de composés organiques volatils (COV) dans un logement, surtout dans les semaines qui suivent leur application. En France, le décret 2011-321 impose un étiquetage obligatoire classant les produits de A+ (très faibles émissions) à C (émissions élevées). Choisir un produit classé A+ et aérer intensément pendant plusieurs semaines reste la démarche la plus efficace. Des alternatives naturelles (chaux, argile, silicate) offrent des teneurs en COV encore plus basses pour les pièces de vie."
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
        title="D'où viennent les COV dans les peintures et revêtements muraux."
        subtitle="Les émissions varient selon la technologie du produit, ses composants et ses conditions d'application."
        causes={[
          {
            number: "01",
            cause: "Les solvants dans les peintures alkyde et glycéro",
            explanation:
              "Les peintures à base de solvants pétroliers (glycéro, alkyde) contiennent du white-spirit, du toluène ou du xylène. Ces solvants s'évaporent lors du séchage et pendant les semaines qui suivent. Leur teneur en COV peut atteindre 300 à 400 g/litre, soit plusieurs dizaines de fois plus que les peintures à l'eau.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les biocides et agents de conservation",
            explanation:
              "Pour prévenir le développement de moisissures et prolonger la durée de vie en pot, les peintures conventionnelles contiennent des biocides (isothiazolinones, MIT, CMIT). Ces substances peuvent provoquer des réactions allergiques et sont également émises dans l'air après application.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les liants synthétiques dans les peintures acryliques",
            explanation:
              "Même les peintures acryliques à l'eau, qui ont une teneur en COV bien inférieure aux glycéros, contiennent des résines synthétiques et des solvants de coalescence qui s'évaporent lors du séchage. Un produit A+ contient jusqu'à 5 g/litre de COV, contre 30 g/litre pour une peinture acrylique standard.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Les apprêts, primers et sous-couches",
            explanation:
              "On oublie souvent que la préparation du support contribue également aux émissions. Certains apprêts anti-humidité ou adhérents contiennent des solvants puissants. Un revêtement de finition A+ posé sur un apprêt non étiqueté ne garantit pas un résultat global satisfaisant.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Les papiers peints et colles de pose",
            explanation:
              "Un papier peint intissé peut lui-même être source de COV, mais la colle de pose est souvent le vecteur principal. Les colles en poudre à diluer sont généralement moins émissives que les colles en pâte prêtes à l'emploi. Vérifiez l'étiquetage de la colle comme du revêtement.",
            frequency: "moins fréquent",
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
            label: "Choisir une peinture à l'eau plutôt qu'une peinture à solvant",
            description:
              "Les peintures acryliques à l'eau ont une teneur en COV incomparablement plus faible que les glycéros ou alkydes. Pour les boiseries et plinthes, des peintures acryliques satinées A+ existent et remplacent avantageusement les anciennes glycéros.",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Vérifier aussi l'étiquetage de l'apprêt et de la colle",
            description:
              "Un revêtement A+ posé avec une colle non étiquetée ou un apprêt à solvants ne garantit pas un résultat satisfaisant. L'ensemble des produits de pose doit être pris en compte dans l'évaluation.",
            effort: "Gratuit",
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
            question: "Comment lire l'étiquette d'une peinture pour évaluer ses émissions ?",
            answer:
              "L'étiquette obligatoire (décret 2011-321) affiche la classe d'émission de A+ à C sous forme de pictogramme ou de mention explicite. Vérifiez également la teneur en COV exprimée en g/litre, souvent indiquée dans la fiche technique ou sur l'emballage. Pour les peintures à l'eau, une teneur inférieure à 30 g/litre est la norme européenne pour la catégorie « faibles émissions ».",
          },
          {
            question: "Combien de temps faut-il aérer après une peinture A+ ?",
            answer:
              "Même avec une peinture classée A+, il est recommandé d'aérer intensément pendant au moins 4 à 6 semaines après l'application. Les émissions décroissent rapidement mais ne s'arrêtent pas à la fin du séchage visible. Dans une chambre d'enfant, prolongez la période d'aération et évitez de faire dormir l'enfant dans la pièce pendant au moins 2 semaines.",
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
            title: "Matériaux à faibles émissions : le guide général",
            description:
              "Comprendre l'étiquetage A+ et faire de meilleurs choix sur l'ensemble des matériaux d'un logement, au-delà des seules peintures.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux : comment ça fonctionne",
            description:
              "Comprendre le phénomène physique du dégazage, sa durée selon les matériaux et les moyens de l'accélérer après des travaux.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
          {
            tag: "Air intérieur",
            title: "Les sources de pollution de l'air intérieur",
            description:
              "Les peintures s'inscrivent dans un tableau plus large de sources de polluants intérieurs. Comprendre l'ensemble pour agir dans le bon ordre.",
            href: "/air-interieur/sources-pollution-air/",
          },
        ]}
      />
    </>
  );
}
