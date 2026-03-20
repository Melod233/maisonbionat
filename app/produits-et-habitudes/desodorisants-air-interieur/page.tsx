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
  title: "Désodorisants d'intérieur : impact sur l'air, alternatives saines",
  description:
    "Les désodorisants masquent les odeurs sans les éliminer et ajoutent des COV dans l'air intérieur. Comprendre leur impact et les alternatives efficaces pour traiter les odeurs.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/desodorisants-air-interieur/",
  },
  openGraph: {
    title: "Désodorisants d'intérieur : impact sur l'air, alternatives saines",
    description:
      "Les désodorisants masquent les odeurs sans les éliminer et ajoutent des COV dans l'air intérieur. Comprendre leur impact et les alternatives efficaces pour traiter les odeurs.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/desodorisants-air-interieur/",
  },
};

export default function DesodorisantsAirInterieurPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Désodorisants d'intérieur : impact sur l'air, alternatives saines", href: "https://www.maisonbionat.fr/produits-et-habitudes/desodorisants-air-interieur/" },
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
        tag="Comprendre"
        title="Désodorisants d'intérieur : masquer les odeurs aggrave-t-il la qualité de l'air ?"
        quickAnswer="Les désodorisants en spray, les diffuseurs à bâtonnets et les bougies parfumées ne suppriment pas les odeurs : ils les recouvrent en ajoutant d'autres substances dans l'air. Ces substances, principalement des composés organiques volatils issus des parfums synthétiques, contribuent à la pollution de l'air intérieur. La seule vraie solution contre une mauvaise odeur est d'en éliminer la source et de ventiler. Les alternatives naturelles comme le charbon actif ou le bicarbonate peuvent absorber certaines odeurs sans polluer."
        stats={[
          { value: "5–10x", label: "l'air intérieur peut être plus pollué que l'air extérieur (ANSES)" },
          { value: "80–90 %", label: "du temps passé en intérieur (ANSES)" },
          { value: "COV", label: "les sprays désodorisants figurent parmi les sources d'émission les plus élevées dans les logements (ADEME PRESSENS)" },
          { value: "40–60 %", label: "taux d'hygrométrie recommandé : une bonne ventilation régule aussi les odeurs" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de désodorisants" },
          { id: "signes", label: "Quand devient-il problématique" },
          { id: "causes", label: "Pourquoi masquer crée d'autres problèmes" },
          { id: "actions", label: "Traiter les odeurs sans chimie" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Types de désodorisants et leurs mécanismes réels."
        description="Les désodorisants se présentent sous de nombreuses formes, mais leur mécanisme est souvent le même : ajouter une odeur perçue comme agréable pour atténuer la perception d'une odeur indésirable. Les mécanismes réellement absorbants sont rares."
        variants={[
          {
            indicator: "Forme la plus émissive",
            name: "Sprays aérosols désodorisants et parfums d'ambiance",
            description:
              "Dispersent directement dans l'air des particules fines et des composés organiques volatils issus des fragrances synthétiques. Les aérosols sont parmi les sources de COV les plus émissives dans les logements selon l'étude ADEME PRESSENS. Leur usage fréquent dans des pièces peu ventilées contribue significativement à la pollution de l'air intérieur.",
          },
          {
            indicator: "Émission continue",
            name: "Diffuseurs à bâtonnets (reed diffusers)",
            description:
              "Émettent en continu des composés volatils issus du liquide parfumé et des huiles essentielles ou synthétiques qu'il contient. La diffusion est moins concentrée qu'un spray mais permanente. Dans une petite pièce mal ventilée, la concentration peut s'accumuler sur la durée.",
          },
          {
            indicator: "Alternatives absorbantes",
            name: "Charbon actif, zéolithe, bicarbonate de soude",
            description:
              "Ces matières absorbent physiquement certaines molécules odorantes sans en émettre d'autres. Le charbon actif est particulièrement efficace sur les odeurs de cuisine et d'humidité. Ces solutions ne masquent pas : elles capturent une partie des molécules responsables des odeurs. Leur action est limitée aux odeurs légères et récurrentes, pas aux sources actives.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quand un désodorisant devient problématique pour l'air intérieur."
        subtitle="L'usage occasionnel d'un désodorisant dans un logement bien aéré présente peu de risques. En revanche, certaines situations peuvent amplifier leur impact sur la qualité de l'air."
        signs={[
          {
            label: "Utilisation quotidienne dans une pièce peu ventilée",
            description:
              "Un spray désodorisant utilisé chaque jour dans des toilettes, un couloir ou une chambre sans ventilation efficace entraîne une accumulation progressive de COV dans l'air. L'odeur du produit lui-même peut devenir une source de pollution persistante.",
            severity: "modéré",
          },
          {
            label: "Irritations des yeux ou de la gorge après utilisation",
            description:
              "Des irritations immédiates après avoir utilisé un spray parfumé indiquent une réaction aux composés volatils présents. Certaines fragrances synthétiques contiennent des substances reconnues comme irritantes ou allergisantes.",
            severity: "modéré",
          },
          {
            label: "Présence d'enfants, femmes enceintes ou personnes asthmatiques",
            description:
              "Ces populations sont plus sensibles aux composés chimiques présents dans les parfums d'ambiance. L'usage de désodorisants parfumés dans leur environnement quotidien est à limiter, voire à supprimer.",
            severity: "critique",
          },
          {
            label: "Plusieurs sources de parfum simultanées",
            description:
              "Un diffuseur à bâtonnets, une bougie parfumée et un spray désodorisant dans le même espace créent une combinaison de composés volatils dont les interactions ne sont pas toujours prévisibles. La concentration totale peut dépasser les seuils d'irritation.",
            severity: "critique",
          },
          {
            label: "Odeur persistante malgré l'usage régulier",
            description:
              "Si une odeur persiste malgré l'utilisation fréquente d'un désodorisant, c'est le signe que la source n'a pas été traitée. Le produit ne fait que la masquer temporairement. L'odeur reviendra tant que la cause (humidité, source organique, dépôt) n'est pas éliminée.",
            severity: "léger",
          },
        ]}
        footerNote="Un désodorisant ne règle jamais une odeur à la source. Son usage devient un symptôme du problème non résolu : la source d'odeur est toujours présente, et s'y ajoute désormais la pollution du produit lui-même."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi masquer une odeur crée d'autres problèmes."
        subtitle="Les désodorisants ne neutralisent pas les molécules odorantes : ils les recouvrent en saturant l'air d'autres substances. Ce mécanisme a des conséquences sur la qualité de l'air intérieur."
        causes={[
          {
            number: "01",
            cause: "Les fragrances synthétiques contiennent des COV",
            explanation:
              "Les parfums synthétiques utilisés dans la plupart des désodorisants commerciaux contiennent des composés organiques volatils : dérivés benzéniques, esters, terpènes de synthèse. Ces molécules se retrouvent dans l'air respiré et contribuent à la charge totale en COV du logement.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Certains parfums contiennent des phtalates ou des muscs synthétiques",
            explanation:
              "Les phtalates sont des plastifiants utilisés pour fixer les parfums et prolonger leur diffusion. Les muscs synthétiques sont des molécules odorantes persistantes. Ces substances sont présentes dans de nombreuses formulations commerciales et sont suspectées d'être des perturbateurs endocriniens pour certaines d'entre elles.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "La source de l'odeur reste active",
            explanation:
              "Une odeur persistante signale toujours quelque chose : une source d'humidité, des matières organiques en décomposition, un problème de ventilation. Masquer l'odeur retarde l'identification et le traitement de la cause, qui continue à agir pendant ce temps.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Les aérosols dispersent des particules fines",
            explanation:
              "En plus des composés gazeux, les sprays désodorisants projettent des particules en suspension dans l'air, qui peuvent rester plusieurs heures avant de se déposer. Ces particules peuvent atteindre les voies respiratoires profondes, surtout chez les enfants.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Traiter les odeurs sans désodorisants chimiques."
        immediate={[
          {
            label: "Ventiler : la seule vraie solution",
            description:
              "Ouvrir les fenêtres et activer la ventilation est le seul moyen d'évacuer les molécules odorantes de l'air. Un désodorisant dans une pièce non ventilée ne fait qu'ajouter d'autres substances à un air qui n'est pas renouvelé.",
            effort: "Gratuit",
          },
          {
            label: "Identifier et supprimer la source de l'odeur",
            description:
              "Odeur de renfermé : souvent humidité ou manque de ventilation. Odeur de cuisine persistante : graisses sur les surfaces ou filtres de hotte encrassés. Odeur de moisi : moisissures à traiter. Chaque odeur chronique a une cause qu'il faut traiter.",
            effort: "Gratuit",
          },
          {
            label: "Poser du charbon actif ou du bicarbonate de soude",
            description:
              "Un bol de bicarbonate de soude ou un sachet de charbon actif dans une pièce absorbe passivement certaines molécules odorantes. Efficace pour les odeurs légères et récurrentes (toilettes, réfrigérateur, espaces confinés). À renouveler régulièrement.",
            effort: "Quelques euros",
          },
        ]}
        structural={[
          {
            label: "Remplacer les désodorisants par des solutions naturelles absorbantes",
            description:
              "La zéolithe (argile minérale), le charbon actif de bambou ou simplement le bicarbonate de soude peuvent absorber des odeurs sans émettre de composés supplémentaires. Ces solutions sont durables, peu coûteuses et sans risque pour la qualité de l'air.",
            effort: "5–20 € pour plusieurs mois",
          },
          {
            label: "Améliorer la ventilation des pièces sensibles",
            description:
              "Les odeurs persistantes dans les toilettes, la cuisine ou la salle de bain indiquent souvent une ventilation insuffisante. Vérifier et entretenir la VMC dans ces pièces résout durablement le problème d'odeur sans aucun produit.",
            effort: "Entretien VMC ou remplacement selon l'état",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui aggravent le problème d'odeur et de qualité de l'air."
        errors={[
          {
            label: "Utiliser un spray aérosol comme solution principale",
            explanation:
              "Les sprays aérosols sont les désodorisants les plus émissifs en COV. Les utiliser fréquemment dans des pièces peu ventilées revient à ajouter de la pollution pour en masquer une autre. C'est la solution qui cumule le plus d'inconvénients.",
          },
          {
            label: "Multiplier les sources de parfum simultanément",
            explanation:
              "Diffuseur à bâtonnets, bougie parfumée et spray dans la même pièce créent une concentration élevée de composés volatils dont les effets cumulés sur les voies respiratoires ne sont pas anodins, surtout dans une pièce peu aérée.",
          },
          {
            label: "Croire que 'naturel' ou 'aux huiles essentielles' signifie sans risque",
            explanation:
              "Les huiles essentielles contiennent des terpènes qui sont eux-mêmes des COV. Certains, comme le limonène, peuvent réagir avec l'ozone présent dans l'air pour former des composés irritants. Un produit naturel peut être émissif sans pour autant être dangereux, mais l'argument 'naturel' ne garantit pas l'innocuité.",
          },
          {
            label: "Ignorer l'odeur d'humidité ou de moisi",
            explanation:
              "Une odeur de moisi persistante indique la présence de moisissures actives. Masquer cette odeur avec un désodorisant retarde le traitement d'un problème qui continue à se développer et peut avoir des conséquences sur la santé des occupants.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les désodorisants et la qualité de l'air"
        items={[
          {
            question: "Les désodorisants naturels aux huiles essentielles sont-ils sans danger ?",
            answer:
              "Pas complètement. Les huiles essentielles contiennent des terpènes, qui sont des composés organiques volatils d'origine naturelle. Certains, comme le limonène ou le linalol, peuvent réagir avec l'ozone de l'air pour former des composés irritants. Un usage modéré dans un logement bien ventilé ne présente pas de risque majeur, mais l'argument 'naturel' ne signifie pas 'sans effet sur l'air intérieur'.",
          },
          {
            question: "Le charbon actif fonctionne-t-il vraiment contre les odeurs ?",
            answer:
              "Oui, pour les odeurs légères et récurrentes. Le charbon actif adsorbe physiquement certaines molécules odorantes sur sa surface poreuse. Il est efficace contre les odeurs d'humidité, de cuisine et de tabac persistant. En revanche, il ne traite pas une source d'odeur active (moisissure, humidité en cours) et doit être renouvelé ou régénéré (séchage au soleil) régulièrement.",
          },
          {
            question: "Peut-on utiliser des bougies parfumées à la place des désodorisants ?",
            answer:
              "Non, cela ne résout pas le problème et en ajoute d'autres. Les bougies parfumées émettent elles aussi des COV issus des fragrances, en plus des particules fines et des produits de combustion. Elles masquent les odeurs sans les éliminer, comme les désodorisants. Dans une pièce peu ventilée, l'usage régulier de bougies parfumées dégrade la qualité de l'air.",
          },
          {
            question: "Comment éliminer l'odeur de moisi sans produit ?",
            answer:
              "La seule façon durable est d'éliminer les moisissures à la source et d'améliorer la ventilation pour éviter qu'elles ne se reforment. Pour une odeur résiduelle après traitement, une aération intensive (fenêtres ouvertes plusieurs heures), un bol de bicarbonate de soude ou du charbon actif peuvent aider à absorber les molécules restantes. Mais si l'odeur revient, les moisissures sont toujours présentes.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Bougies à la paraffine et qualité de l'air",
            description:
              "Les bougies parfumées émettent aussi des COV et des particules. Ce qu'elles libèrent exactement et comment minimiser leur impact.",
            href: "/produits-et-habitudes/bougies-paraffine/",
          },
          {
            tag: "Air intérieur",
            title: "Odeurs persistantes dans la maison",
            description:
              "Identifier la cause des odeurs chroniques dans le logement et les solutions adaptées à chaque type.",
            href: "/air-interieur/odeurs-persistantes-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Bien aérer son logement",
            description:
              "L'aération est la réponse principale aux odeurs et aux polluants intérieurs. Les bonnes pratiques selon la saison et le type de logement.",
            href: "/air-interieur/bien-aerer-maison/",
          },
        ]}
      />
    </>
  );
}
