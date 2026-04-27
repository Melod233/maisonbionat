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
  title: "Plantes dépolluantes : ce que la science dit vraiment",
  description:
    "L'étude NASA de 1989 et l'avis de l'ADEME en 2011 : pourquoi les plantes ne dépolluent pas un logement, et le rôle utile qu'elles jouent vraiment.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/air-interieur/plantes-depolluantes-maison/",
  },
  openGraph: {
    title: "Plantes dépolluantes : ce que la science dit vraiment",
    description:
      "L'étude NASA de 1989 et l'avis de l'ADEME en 2011 : pourquoi les plantes ne dépolluent pas un logement, et le rôle utile qu'elles jouent vraiment.",
    url: "https://www.maisonbionat.fr/air-interieur/plantes-depolluantes-maison/",
  },
};

const faqItems = [
  {
    question: "Faut-il enlever les plantes de la chambre ?",
    answer:
      "Non, sauf en cas de chambre très petite, mal ventilée et chargée de plusieurs dizaines de plantes. Quelques plantes en chambre n'ont pas d'effet négatif mesurable sur la qualité de l'air. L'idée qu'elles « volent l'oxygène » la nuit est largement exagérée : un occupant adulte respire bien plus qu'un pot de pothos.",
  },
  {
    question: "Existe-t-il des plantes vraiment plus efficaces que d'autres ?",
    answer:
      "Dans le cadre de l'étude NASA, certaines espèces (chlorophytum, dracaena, sansevieria, philodendron, ficus) ont montré des absorptions un peu meilleures pour certains COV. Mais l'écart entre une « bonne » et une « mauvaise » plante reste minime à l'échelle d'un logement réel. Le choix d'une plante doit se faire selon la luminosité, l'arrosage et les goûts, pas selon une efficacité dépolluante théorique.",
  },
  {
    question: "Est-ce que multiplier les plantes augmente l'humidité de manière utile ?",
    answer:
      "Oui, modérément. En période de chauffage, un groupe de plantes peut faire remonter l'hygrométrie locale de 5 à 10 points dans une pièce sèche. C'est utile si l'air est très sec (sous 30 %), à éviter dans une pièce déjà humide où cela favoriserait les moisissures. C'est un effet réel, à ne pas confondre avec un effet dépolluant.",
  },
  {
    question: "Que faire si je veux vraiment améliorer l'air de ma chambre ?",
    answer:
      "Aérer 10 minutes matin et soir, vérifier la VMC, limiter les bougies et désodorisants, faire dégazer les meubles neufs avant installation, choisir des peintures A+. Ces actions ont un effet mesurable, immédiat et gratuit. Les plantes peuvent rester pour le plaisir et le bien-être, sans en attendre un assainissement chimique.",
  },
];

export default function PlantesDepolluantesMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "Plantes dépolluantes : ce que la science dit vraiment",
      href: "https://www.maisonbionat.fr/air-interieur/plantes-depolluantes-maison/",
    },
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
        tag="Mythe et réalité"
        title="Plantes dépolluantes : entre étude NASA, marketing et ce qu'il en reste vraiment"
        quickAnswer="L'idée que les plantes d'intérieur « dépolluent » l'air d'un logement repose sur une étude NASA de 1989 menée dans des chambres hermétiques de quelques mètres cubes, à des concentrations de polluants très supérieures à celles d'un logement réel. En 2011, après plusieurs années de recherches indépendantes, l'ADEME a tranché : dans les conditions réelles d'occupation d'un habitat, l'effet des plantes sur la qualité de l'air est négligeable. Les chercheurs estiment qu'il faudrait des dizaines de plantes par mètre carré pour observer une réduction significative des COV. Cela ne signifie pas qu'il faut bannir les plantes : elles ont des bénéfices documentés sur le bien-être, l'humidité ambiante et la qualité perçue d'un intérieur, simplement pas comme purificateurs."
        stats={[
          {
            value: "1989",
            label: "publication de l'étude NASA citée encore aujourd'hui dans les arguments commerciaux",
          },
          {
            value: "2011",
            label: "avis ADEME : l'effet dépolluant des plantes n'est pas validé en conditions réelles",
          },
          {
            value: "10 à 1 000",
            label: "plantes par mètre carré nécessaires selon les estimations pour un effet mesurable",
          },
          {
            value: "0,2 à 0,4 m²",
            label: "surface foliaire d'une plante d'intérieur courante, à comparer aux dizaines de m² d'une pièce",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "L'étude NASA en contexte" },
          { id: "signes", label: "Pourquoi ça marche en labo" },
          { id: "causes", label: "Pourquoi ça ne marche pas chez vous" },
          { id: "actions", label: "Le rôle utile des plantes" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce que disait vraiment l'étude NASA de 1989."
        description="L'étude originale de B.C. Wolverton, publiée en 1989 par la NASA, visait à concevoir des systèmes de support de vie pour des stations spatiales fermées. Les chercheurs ont placé des plantes dans des chambres d'expérimentation hermétiques de quelques mètres cubes, injecté des COV à concentrations élevées (formaldéhyde, benzène, trichloréthylène), puis mesuré la baisse des concentrations sur 24 heures. Certaines plantes (sansevieria, dracaena, chlorophytum, philodendron) ont effectivement réduit les concentrations de 10 à 70 %. Ces résultats sont restés valides dans leur cadre expérimental, mais ils ne sont pas transposables tels quels à un logement réel, ce que l'étude indiquait elle-même dès l'origine."
        variants={[
          {
            indicator: "Conditions de l'étude",
            name: "Chambre fermée de quelques m³",
            description:
              "Les plantes étaient enfermées avec leur substrat dans une enceinte étanche, sans renouvellement d'air. Tous les COV émis ou absorbés restaient dans le volume mesuré. Un logement, par définition, n'est jamais étanche : il échange en permanence avec l'extérieur via la VMC, les défauts d'étanchéité et les ouvertures.",
          },
          {
            indicator: "Concentrations de polluants",
            name: "10 à 100 fois supérieures à un logement réel",
            description:
              "L'étude utilisait des concentrations de COV adaptées aux conditions extrêmes des stations spatiales, très supérieures à celles d'un logement courant. À ces niveaux, les mécanismes biologiques d'absorption sont saturés et les baisses mesurables. À 20 µg/m³ de formaldéhyde dans une chambre, ces mécanismes deviennent négligeables.",
          },
          {
            indicator: "Rôle du substrat",
            name: "L'effet venait beaucoup du sol et des micro-organismes",
            description:
              "Une part importante de l'absorption observée provenait des micro-organismes du substrat, pas du feuillage. Dans un logement, ces micro-organismes existent à la surface du pot, mais leur volume reste insignifiant à l'échelle de la pièce.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Pourquoi des chiffres impressionnants en laboratoire deviennent invisibles dans un logement."
        subtitle="Le passage du laboratoire à un appartement réel divise les performances par plusieurs ordres de grandeur."
        signs={[
          {
            label: "Le volume d'air à traiter est sans commune mesure",
            description:
              "Une pièce de 25 m² avec 2,50 m de hauteur représente 62 m³ d'air. Une chambre d'essai NASA faisait quelques m³. Le ratio plante/volume d'air est divisé par dix ou vingt dans un cas réel, et l'efficacité chute proportionnellement.",
            severity: "critique",
          },
          {
            label: "L'air d'un logement se renouvelle plusieurs fois par heure",
            description:
              "Une VMC, des défauts d'étanchéité et l'aération quotidienne renouvellent l'air d'un logement environ 0,5 à 1 fois par heure. L'absorption par les plantes, déjà marginale, est dépassée d'un facteur 100 par ce simple renouvellement naturel.",
            severity: "critique",
          },
          {
            label: "Les COV se déposent et se redéposent en permanence",
            description:
              "Les COV gazeux n'attendent pas d'être absorbés par une feuille. Ils s'adsorbent sur les murs, les textiles, le mobilier, puis se relarguent. La cinétique d'échange avec une plante reste lente et non préférentielle, sans direction privilégiée vers le feuillage.",
            severity: "modéré",
          },
          {
            label: "La surface foliaire reste minuscule",
            description:
              "Une grande plante d'intérieur (ficus, monstera, dracaena) offre 0,2 à 0,4 m² de surface foliaire active. Pour absorber significativement les COV d'une pièce, il en faudrait plusieurs centaines, ce qui sort du cadre d'usage d'un logement.",
            severity: "modéré",
          },
          {
            label: "L'humidité du substrat peut au contraire favoriser des moisissures",
            description:
              "Un excès d'arrosage, des soucoupes stagnantes ou un substrat constamment humide peuvent émettre eux-mêmes des spores ou des COV microbiens. Multiplier les pots dans une chambre mal ventilée pour assainir l'air peut, à dose, dégrader la situation.",
            severity: "léger",
          },
        ]}
        footerNote="Aucune publication scientifique récente n'a démontré un effet dépolluant significatif des plantes en conditions réelles d'habitat. Les méta-analyses convergent : pour traiter les COV intérieurs, l'aération et la suppression des sources sont plusieurs ordres de grandeur plus efficaces."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi le mythe persiste malgré l'avis ADEME de 2011."
        subtitle="L'argument commercial est puissant et difficile à déloger : il rassemble écologie, esthétique et solution simple."
        causes={[
          {
            number: "01",
            cause: "Une étude scientifique réelle, mal résumée",
            explanation:
              "L'étude NASA existe, elle a été publiée, elle utilise des méthodes valides. Le glissement vient ensuite : les chiffres de laboratoire sont reproduits dans la presse et le marketing comme s'ils s'appliquaient à un salon. Le mythe est crédibilisé par le sceau « NASA », rarement remis en cause.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Un argument de vente très efficace",
            explanation:
              "Les jardineries, les magazines déco et les sites grand public ont un intérêt économique à entretenir le récit. Les listes « 5 plantes pour purifier votre chambre » génèrent du trafic et des ventes. La mise au point scientifique, plus nuancée, circule moins.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Un effet placebo mesurable",
            explanation:
              "Les études en psychologie environnementale montrent que la présence de plantes améliore la qualité perçue de l'air, le bien-être et la concentration. Cet effet réel sur le ressenti est ensuite attribué à tort à un effet sur la composition chimique de l'air.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Un appui institutionnel partiel et ancien",
            explanation:
              "Avant l'avis ADEME de 2011, plusieurs publications grand public, certaines portées par des organismes sérieux, avaient repris l'idée sans réserve. Ces contenus restent en ligne et continuent de circuler comme références, indépendamment des mises au point ultérieures.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Une volonté légitime de solutions douces",
            explanation:
              "Beaucoup de personnes cherchent des alternatives naturelles aux purificateurs et aux produits chimiques. L'idée d'un logement assaini par quelques plantes est séduisante, simple, peu coûteuse. Le mythe répond à un besoin réel, ce qui le rend plus difficile à abandonner.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les bénéfices réels des plantes d'intérieur, sans confusion sur leur rôle."
        immediate={[
          {
            label: "Garder les plantes pour le bien-être visuel et psychologique",
            description:
              "Les plantes améliorent la qualité perçue d'un intérieur, réduisent le stress mesuré et favorisent la concentration. Ces bénéfices sont documentés et ne dépendent pas d'un effet dépolluant. C'est une bonne raison d'en avoir, sans en attendre une assainissement de l'air.",
            effort: "Aucun changement",
          },
          {
            label: "Profiter de l'humidité d'évapotranspiration en hiver",
            description:
              "Un groupe de plantes vertes émet de la vapeur d'eau et peut localement remonter l'hygrométrie d'une pièce trop sèche en période de chauffage. C'est un effet limité mais réel, utile dans les logements à hygrométrie inférieure à 30 %.",
            effort: "Aucun coût",
          },
          {
            label: "Aérer 10 minutes matin et soir, indépendamment des plantes",
            description:
              "Aucune quantité de plantes ne remplace l'aération. Pour traiter réellement les COV, le formaldéhyde et le CO2, ouvrir les fenêtres reste l'action la plus efficace, gratuite et immédiate. Les plantes complètent le décor, pas la ventilation.",
            effort: "Habitude quotidienne",
          },
          {
            label: "Éviter le sur-arrosage en chambre",
            description:
              "Un substrat constamment humide peut émettre des spores et favoriser des moisissures dans un coin de pièce. Préférez des plantes à arrosage espacé en chambre (cactacées, sansevieria, zamioculcas) plutôt que des plantes très consommatrices d'eau.",
            effort: "Choix d'espèce",
          },
        ]}
        structural={[
          {
            label: "Investir dans une bonne ventilation plutôt que dans des plantes pour assainir",
            description:
              "Si l'objectif est réellement la qualité de l'air, l'argent investi dans des plantes pour leur effet dépolluant supposé est mieux placé dans l'entretien de la VMC, l'achat de matériaux A+ ou un audit qualité de l'air. Les ordres de grandeur d'efficacité ne sont pas comparables.",
            effort: "Réorientation budgétaire",
          },
          {
            label: "Supprimer les sources émettrices à l'intérieur",
            description:
              "Bougies parfumées, encens, désodorisants, produits ménagers irritants, tabac : ces sources émettent dans le logement bien plus que n'importe quelle plante n'absorbera. Les retirer ou les limiter a un effet immédiat et mesurable, là où les plantes en ont un négligeable.",
            effort: "Choix d'usage",
          },
          {
            label: "Choisir des matériaux à faibles émissions à l'achat",
            description:
              "Plutôt que de chercher à compenser des émissions par les plantes, agissez à la source : peintures et meubles classés A+, panneaux à liants alternatifs, textiles non traités. C'est la même logique de prévention que pour les autres polluants.",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Limiter les plantes dans les chambres mal ventilées",
            description:
              "La nuit, les plantes consomment de l'oxygène et émettent du CO2. Dans une chambre fermée déjà occupée, l'effet est marginal mais cumulatif si elles sont nombreuses. Préférez quelques plantes plutôt qu'une jungle, surtout en chambre d'enfant ou de bébé.",
            effort: "Choix d'aménagement",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on entend souvent sur les plantes dépolluantes."
        errors={[
          {
            label: "\"La NASA l'a prouvé, donc c'est validé\"",
            explanation:
              "L'étude NASA est valide dans son cadre expérimental, mais ce cadre n'est pas celui d'un logement. Citer la NASA pour défendre l'effet dépolluant dans un salon revient à confondre une expérience confinée avec un usage domestique. L'étude originale ne prétendait pas le contraire.",
          },
          {
            label: "\"Quelques plantes suffisent à purifier ma chambre\"",
            explanation:
              "Les estimations sérieuses convergent vers plusieurs dizaines à plusieurs centaines de plantes par pièce pour un effet mesurable. Aucune chambre standard ne peut accueillir ce volume de végétation sans devenir dysfonctionnelle.",
          },
          {
            label: "\"La sansevieria produit de l'oxygène la nuit, donc elle dépollue\"",
            explanation:
              "La sansevieria et quelques autres plantes pratiquent le métabolisme CAM, qui leur permet de fixer du CO2 la nuit. L'effet sur la concentration en CO2 d'une chambre reste anecdotique : un occupant émet plusieurs ordres de grandeur de plus en respirant.",
          },
          {
            label: "\"Le pothos absorbe le formaldéhyde, c'est mieux qu'un purificateur\"",
            explanation:
              "Le pothos absorbe effectivement du formaldéhyde, comme la plupart des plantes vertes, mais à des niveaux insignifiants à l'échelle d'un logement. Un filtre à charbon actif, pourtant lui-même limité, traite plusieurs ordres de grandeur de plus en quelques heures.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les plantes et la qualité de l'air"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Améliorer l'air dans sa maison",
            description:
              "Les actions qui ont un effet réel et mesurable sur la qualité de l'air d'un logement, classées par impact.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Bien aérer sa maison",
            description:
              "La méthode d'aération efficace : fréquence, technique, pièces, saisons. L'action la plus efficace, et la plus sous-estimée.",
            href: "/air-interieur/bien-aerer-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Les sources de pollution de l'air intérieur",
            description:
              "Plutôt que de compenser, supprimer les sources : matériaux, mobilier, produits, activités. Les vrais leviers de qualité d'air.",
            href: "/air-interieur/sources-pollution-air/",
          },
        ]}
      />
    </>
  );
}
