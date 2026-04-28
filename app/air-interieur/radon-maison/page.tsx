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
  title: "Radon dans la maison : risques, zonage et solutions",
  description:
    "Gaz radioactif naturel, deuxième cause de cancer du poumon en France. Comprendre le zonage IRSN, mesurer le radon chez soi et réduire la concentration durablement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/radon-maison/",
  },
  openGraph: {
    title: "Radon dans la maison : risques, zonage et solutions",
    description:
      "Gaz radioactif naturel, deuxième cause de cancer du poumon en France. Comprendre le zonage IRSN, mesurer le radon chez soi et réduire la concentration durablement.",
    url: "https://www.maisonbionat.fr/air-interieur/radon-maison/",
  },
};

const faqItems = [
  {
    question: "Comment savoir si ma commune est concernée par le radon ?",
    answer:
      "Le potentiel radon de chaque commune française est cartographié par l'IRSN selon trois catégories. La zone 1 a un potentiel faible, la zone 2 faible mais avec des facteurs géologiques particuliers, la zone 3 un potentiel significatif. Vous pouvez vérifier votre commune sur le portail Géorisques (georisques.gouv.fr) ou sur le site de l'ASNR (ex-IRSN). Habiter en zone 3 ne signifie pas que votre logement est exposé, mais qu'une mesure est recommandée.",
  },
  {
    question: "Comment mesurer le radon chez soi ?",
    answer:
      "On utilise un dosimètre passif, petit boîtier à poser dans une pièce de vie (séjour ou chambre) pendant au minimum deux mois, idéalement en période de chauffe entre septembre et avril, fenêtres en usage normal. Le kit coûte généralement entre 25 et 50 € analyse comprise. Les capteurs électroniques grand public donnent une tendance mais ne remplacent pas un dosimètre passif analysé en laboratoire pour une décision réglementaire ou de travaux.",
  },
  {
    question: "Que faire en cas de dépassement de 300 Bq/m³ ?",
    answer:
      "Entre 300 et 1000 Bq/m³, on agit d'abord sur la ventilation (vérification VMC, aération renforcée) et sur l'étanchéité des points de pénétration au sol (canalisations, fissures de dalle, accès cave). Au-dessus de 1000 Bq/m³, des travaux plus structurels deviennent nécessaires, en général une mise en dépression du soubassement par extraction mécanique. Une mesure de contrôle après travaux est indispensable pour vérifier l'efficacité.",
  },
  {
    question: "Le radon est-il un risque réel pour ma famille ?",
    answer:
      "Le radon est classé cancérogène avéré (groupe 1 du CIRC depuis 1988). Il est responsable d'environ 3 000 décès par cancer du poumon par an en France selon l'IRSN, soit 10 % des cancers du poumon, et constitue la deuxième cause après le tabac. Le risque se cumule sur des décennies d'exposition et augmente d'environ 16 % par tranche de 100 Bq/m³. Le danger est nettement plus élevé chez les fumeurs, l'effet combiné radon-tabac multipliant fortement le risque.",
  },
];

export default function RadonMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "Radon dans la maison : risques, zonage et solutions",
      href: "https://www.maisonbionat.fr/air-interieur/radon-maison/",
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
        tag="Polluant intérieur"
        title="Radon dans la maison : comprendre le risque, vérifier sa zone et réduire la concentration"
        quickAnswer="Le radon est un gaz radioactif naturel issu de la désintégration de l'uranium présent dans certaines roches du sous-sol, notamment granitiques et volcaniques. Inodore, incolore et sans saveur, il s'infiltre dans les bâtiments par les fissures du sol, les passages de canalisation et les vides sanitaires, puis s'accumule dans les pièces mal ventilées. C'est aujourd'hui la deuxième cause de cancer du poumon en France après le tabac, et la première chez les non-fumeurs. La réglementation française fixe un niveau de référence de 300 Bq/m³ depuis l'arrêté du 27 juin 2018. Les leviers efficaces sont la mesure par dosimètre passif, la vérification de la ventilation, l'étanchéité des points de pénétration au sol, et dans les cas marqués la mise en dépression du soubassement."
        stats={[
          {
            value: "300 Bq/m³",
            label: "niveau de référence réglementaire en France (arrêté du 27 juin 2018)",
          },
          {
            value: "Groupe 1",
            label: "cancérogène avéré pour l'homme depuis 1988 (classification CIRC)",
          },
          {
            value: "~3 000 décès",
            label: "par cancer du poumon attribuables au radon chaque année en France (IRSN)",
          },
          {
            value: "+16 %",
            label: "de risque de cancer du poumon par tranche de 100 Bq/m³ sur 30 ans",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le radon" },
          { id: "signes", label: "Situations à risque" },
          { id: "causes", label: "Sources et entrées dans la maison" },
          { id: "actions", label: "Mesurer et réduire" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'est le radon, pourquoi il est inégalement réparti et comment il est encadré en France."
        description="Le radon (Rn-222) est un gaz noble radioactif produit par la désintégration de l'uranium et du radium contenus naturellement dans les roches du sous-sol. Il se forme en continu, migre vers la surface et s'échappe dans l'atmosphère, où il se dilue. Mais lorsqu'il entre dans un bâtiment par le sol et que le bâtiment est mal ventilé, il s'y accumule. C'est la concentration intérieure qui crée le risque sanitaire, pas la présence du gaz à l'extérieur. La France a transposé la directive européenne 2013/59/Euratom dans l'arrêté du 27 juin 2018, qui fixe un niveau de référence de 300 Bq/m³ d'activité volumique moyenne annuelle dans les bâtiments."
        variants={[
          {
            indicator: "300 Bq/m³",
            name: "Niveau de référence réglementaire (France)",
            description:
              "Au-dessus de cette valeur en moyenne annuelle, des actions correctrices sont attendues. Le seuil s'applique en obligation aux établissements recevant du public situés en zone 3 (mesure tous les 10 ans). Pour un logement privé, ce niveau est une référence sanitaire à viser : il n'y a pas d'obligation de mesure, mais le franchir justifie d'agir.",
          },
          {
            indicator: "100 Bq/m³",
            name: "Recommandation OMS",
            description:
              "L'Organisation mondiale de la santé recommande aux pays qui le peuvent d'établir un niveau de référence de 100 Bq/m³ pour mieux protéger la population. La France conserve 300 Bq/m³ compte tenu de sa géologie. Au-dessous de 100 Bq/m³, le risque résiduel existe mais reste faible à l'échelle d'une vie d'occupation.",
          },
          {
            indicator: "Zones 1 / 2 / 3",
            name: "Zonage IRSN du potentiel radon",
            description:
              "L'IRSN (intégré à l'ASNR depuis 2025) classe les communes françaises en trois catégories. Zone 1 : potentiel faible. Zone 2 : potentiel faible mais avec des facteurs géologiques particuliers (failles, anciennes mines) qui peuvent faciliter le transfert. Zone 3 : potentiel significatif. Bretagne, Massif central, Vosges, Corse, Jura et certaines parties de Normandie comptent une part importante de communes en zone 3.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les situations qui exposent davantage au radon."
        subtitle="Le radon est inodore et imperceptible. On ne se fie ni à l'odeur ni au ressenti, mais à la zone géographique, au type de logement et à la qualité de la ventilation."
        signs={[
          {
            label: "Logement situé en zone 3 du zonage IRSN",
            description:
              "Les communes classées en zone 3 ont une probabilité significative de logements dépassant 300 Bq/m³. Plus de 40 % des bâtiments situés sur certains terrains dépassent 100 Bq/m³ et plus de 10 % dépassent 300 Bq/m³. Vérifier sa commune sur Géorisques est la première étape.",
            severity: "critique",
          },
          {
            label: "Maison de plain-pied avec sous-sol, cave ou vide sanitaire",
            description:
              "Le radon entre par le sol. Une maison sur dalle de plain-pied avec un soubassement non ventilé concentre l'accumulation. Les caves ouvertes vers les pièces de vie (escalier non fermé, gaine non étanche) servent de couloir d'entrée direct vers le rez-de-chaussée.",
            severity: "modéré",
          },
          {
            label: "Logement étanchéifié sans ventilation mécanique adaptée",
            description:
              "Une rénovation thermique qui rend le bâti très étanche, sans installer ou redimensionner la VMC, piège le radon à l'intérieur. C'est l'une des configurations les plus problématiques car elle apparaît dans des logements modernisés présumés sains.",
            severity: "critique",
          },
          {
            label: "VMC absente, à l'arrêt ou bouches obstruées",
            description:
              "Sans renouvellement d'air, le radon s'accumule en quelques heures à des niveaux plusieurs fois supérieurs à la moyenne extérieure. Une VMC en panne ou jamais entretenue est l'une des causes les plus fréquentes de dépassement chez les particuliers en zone à potentiel.",
            severity: "modéré",
          },
          {
            label: "Sol en terre battue, dalle fissurée ou anciens remblais",
            description:
              "Un sol non couvert ou des fissures importantes dans la dalle béton offrent une voie d'entrée majeure. Les passages de canalisation non scellés (eau, électricité, télécom) jouent souvent le même rôle, surtout dans les pavillons construits avant 2000.",
            severity: "modéré",
          },
          {
            label: "Période hivernale et logement maintenu en surpression chaude",
            description:
              "Le chauffage crée un tirage thermique qui aspire l'air du sous-sol vers les pièces habitées. C'est en hiver que les concentrations mesurées sont les plus hautes. Une mesure faite uniquement en été sous-estime l'exposition réelle.",
            severity: "léger",
          },
        ]}
        footerNote="Aucune de ces situations n'est en soi un diagnostic. La seule façon de savoir est une mesure par dosimètre passif sur au moins deux mois en période de chauffe."
      />

      <IssueCauses
        id="causes"
        title="D'où vient le radon et comment il entre dans un logement."
        subtitle="Le radon est presque toujours d'origine géologique. Sa concentration intérieure dépend de la nature du sous-sol et de la perméabilité du bâtiment."
        causes={[
          {
            number: "01",
            cause: "La désintégration naturelle de l'uranium dans le sous-sol",
            explanation:
              "L'uranium est présent en quantité variable dans toutes les roches. Les granits, certains schistes et les terrains volcaniques en contiennent davantage. Sa désintégration produit du radium, qui produit à son tour du radon. C'est cette chaîne radioactive qui alimente en permanence le gaz, dans tous les sols, partout en France, à des niveaux très inégaux.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les fissures de dalle et les passages non scellés",
            explanation:
              "Le radon migre vers la maison par les microfissures du béton, les joints sol-mur, les passages de canalisation d'eau, d'évacuation et d'électricité, les trappes de vide sanitaire et les sols en terre battue. Ces points singuliers représentent l'essentiel de l'entrée dans un pavillon classique.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le sous-sol, la cave et le vide sanitaire mal isolés",
            explanation:
              "Un sous-sol dont l'air communique librement avec les pièces de vie (escalier non fermé, gaines d'aération non étanches) sert de réservoir intermédiaire qui se charge en radon, puis le redistribue dans le logement par effet de tirage thermique en hiver.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les matériaux de construction d'origine granitique",
            explanation:
              "Certains granits, pierres ponces et bétons fabriqués avec des granulats riches en uranium émettent du radon, mais cette contribution reste mineure devant l'apport du sol pour une maison classique. Elle peut devenir significative dans des bâtiments très étanches construits avec des roches localement très uranifères.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "L'eau de puits ou de forage privé",
            explanation:
              "Une eau profonde issue d'un sol granitique peut contenir du radon dissous, libéré ensuite à la douche ou au robinet. La contribution à l'exposition par inhalation reste faible dans la majorité des cas, mais doit être considérée pour les habitations alimentées exclusivement par forage privé en zone 3.",
            frequency: "rare",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Mesurer le radon, puis réduire la concentration de manière durable."
        immediate={[
          {
            label: "Vérifier le potentiel radon de sa commune",
            description:
              "Avant tout investissement, identifiez la zone de votre commune sur le portail Géorisques (rubrique radon) ou sur l'ASNR. En zone 1 sans facteur particulier, l'inquiétude est rarement justifiée. En zone 2 ou 3, la mesure devient utile, surtout en maison individuelle avec sous-sol.",
            effort: "Gratuit, 5 minutes",
          },
          {
            label: "Faire poser un dosimètre passif pendant deux mois",
            description:
              "Un kit dosimètre passif (25 à 50 € analyse comprise) se pose dans une pièce de vie occupée, idéalement entre septembre et avril, pendant au moins deux mois. Le résultat donne une concentration moyenne sur la période, suffisamment fiable pour décider d'agir ou non.",
            effort: "Coût ponctuel modéré",
          },
          {
            label: "Aérer 10 à 15 minutes matin et soir",
            description:
              "Un courant d'air bref dilue le radon accumulé dans les pièces. C'est l'action la plus immédiate, sans coût, qui ne corrige pas la cause mais ramène temporairement la concentration vers la valeur extérieure. À combiner avec un travail sur la ventilation et l'étanchéité.",
            effort: "Gratuit, 20 minutes par jour",
          },
          {
            label: "Vérifier la VMC et dégager les bouches",
            description:
              "Une VMC fonctionnelle, avec bouches d'extraction propres et entrées d'air dégagées, est l'un des leviers les plus efficaces. Un nettoyage tous les 6 mois, un contrôle du moteur tous les 5 à 10 ans et le maintien d'un débit suffisant suffisent dans une majorité de cas peu concentrés.",
            effort: "30 minutes par semestre",
          },
        ]}
        structural={[
          {
            label: "Étanchéifier les points de pénétration au sol",
            description:
              "Sceller les passages de canalisations, traiter les fissures de dalle au mortier ou résine, couvrir un sol en terre battue, fermer hermétiquement la trappe d'accès au vide sanitaire. C'est la première étape technique avant d'envisager une extraction mécanique.",
            effort: "Travaux ciblés, intervention artisan",
          },
          {
            label: "Mettre en dépression le soubassement (système SSD)",
            description:
              "Pour les concentrations élevées, le système le plus efficace est l'extraction mécanique de l'air du soubassement (vide sanitaire, cave, dallage sur terre-plein) vers l'extérieur, qui maintient une pression inférieure à celle du logement et empêche la migration du gaz vers les pièces de vie.",
            effort: "Investissement, intervention spécialisée",
          },
          {
            label: "Ventiler correctement le vide sanitaire ou la cave",
            description:
              "Si le soubassement est ventilable naturellement, la création ou le dégagement d'ouvertures suffisantes peut suffire à évacuer le radon avant qu'il n'atteigne le logement. Cette solution simple n'est pertinente qu'en complément d'une bonne étanchéité avec les pièces habitées.",
            effort: "Travaux modérés",
          },
          {
            label: "Mesurer à nouveau après tout travaux",
            description:
              "Toute action sur la ventilation, l'étanchéité ou le soubassement doit être validée par une nouvelle mesure de deux mois en période de chauffe. C'est la seule façon de vérifier qu'on est passé sous 300 Bq/m³ (ou idéalement sous 100 Bq/m³).",
            effort: "Coût ponctuel",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le radon."
        errors={[
          {
            label: "\"Mon logement est neuf, le radon ne me concerne pas\"",
            explanation:
              "Au contraire, un logement neuf très étanche dans le cadre d'une rénovation thermique ou d'une construction RT 2012 / RE 2020 piège plus facilement le radon si la VMC est sous-dimensionnée ou mal réglée. La date de construction n'est pas un critère pertinent : la zone géologique et la ventilation le sont.",
          },
          {
            label: "\"Si je ne sens rien, c'est qu'il n'y en a pas\"",
            explanation:
              "Le radon est totalement inodore, incolore et sans saveur. Les sens humains ne le détectent pas. La seule manière fiable de connaître sa concentration est une mesure par dosimètre passif analysé en laboratoire.",
          },
          {
            label: "\"Seules les vieilles maisons en granit sont concernées\"",
            explanation:
              "L'âge et l'apparence de la maison ne sont pas déterminants. Toute maison construite sur un sol à potentiel radon (zone 2 ou 3) est concernée, qu'il s'agisse d'un pavillon des années 1980, d'une maison récente ou d'une rénovation. Ce qui change, c'est le rôle joué par la ventilation et le sous-sol.",
          },
          {
            label: "\"Aérer une fois par jour suffit\"",
            explanation:
              "Aérer ponctuellement réduit la concentration sur le moment, mais elle remonte dès que les fenêtres sont fermées si la cause n'est pas corrigée. Pour une réduction durable, il faut agir sur la ventilation permanente, l'étanchéité du sol et, dans les cas marqués, sur la mise en dépression du soubassement.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le radon dans la maison"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Les polluants intérieurs les plus fréquents",
            description:
              "Situer le radon parmi les polluants typiques d'un logement : COV, particules fines, CO2, allergènes, polluants biologiques.",
            href: "/air-interieur/polluants-interieurs-frequents/",
          },
          {
            tag: "Air intérieur",
            title: "Entretien VMC : ce qui compte vraiment",
            description:
              "Une VMC fonctionnelle est l'un des leviers majeurs contre l'accumulation de radon dans les pièces de vie.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            tag: "Air intérieur",
            title: "Bien aérer sa maison au quotidien",
            description:
              "Routine d'aération efficace pour diluer le radon et l'ensemble des polluants intérieurs au fil de la journée.",
            href: "/air-interieur/bien-aerer-maison/",
          },
        ]}
      />
    </>
  );
}
