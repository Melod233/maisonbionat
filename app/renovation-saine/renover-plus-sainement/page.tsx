import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import SituationContext from "@/components/situation/SituationContext";
import SituationPriorities from "@/components/situation/SituationPriorities";
import SituationDefer from "@/components/situation/SituationDefer";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import IssueActions from "@/components/issue/IssueActions";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Rénover une maison plus sainement : matériaux, ordre des travaux, dégazage",
  description:
    "Rénovation saine : choisir les matériaux A+, planifier l'ordre des travaux, gérer l'amiante et le plomb, prévoir le délai de dégazage. Un guide structuré pour agir dans les bonnes conditions.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/renover-plus-sainement/",
  },
  openGraph: {
    title: "Rénover une maison plus sainement : matériaux, ordre des travaux, dégazage",
    description:
      "Rénovation saine : choisir les matériaux A+, planifier l'ordre des travaux, gérer l'amiante et le plomb, prévoir le délai de dégazage. Un guide structuré pour agir dans les bonnes conditions.",
    url: "https://www.maisonbionat.fr/renovation-saine/renover-plus-sainement/",
  },
};

export default function RenoverMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    { name: "Rénover une maison plus sainement : matériaux, ordre des travaux, dégazage", href: "https://www.maisonbionat.fr/renovation-saine/renover-plus-sainement/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Rénovation saine"
        parentHref="/renovation-saine/"
        tag="Votre chantier"
        title="Rénover sans dégrader la qualité de l'air. Ce qui change dans vos choix."
        quickAnswer="Les travaux sont la principale source de polluants intérieurs à court terme. L'ordre des interventions, les matériaux choisis et les délais d'aération déterminent à quel point la maison sera plus saine après la rénovation, ou pas."
        quickAnswerLabel="Dans votre situation"
        stats={[
          { value: "28 j.", label: "délai de mesure des émissions pour le label A+" },
          { value: "6 sem.", label: "délai minimum avant réoccupation après travaux complets" },
          { value: "10 µg/m³", label: "valeur guide ANSES formaldéhyde (long terme, 2023)" },
          { value: "1997", label: "permis avant cette date : diagnostic amiante obligatoire" },
        ]}
        anchors={[
          { id: "contexte", label: "L'enjeu" },
          { id: "priorites", label: "Priorités" },
          { id: "arbitrage", label: "Arbitrage" },
          { id: "erreurs", label: "Erreurs" },
          { id: "actions", label: "Plan d'action" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <SituationContext
        id="contexte"
        sectionLabel="Ce qui rend une rénovation différente"
        title="Trois facteurs qui changent tout pendant et après les travaux."
        cards={[
          {
            number: "01",
            badge: "Exposition temporaire mais intense",
            title: "Les travaux concentrent plusieurs sources de polluants en même temps.",
            description:
              "Peintures, colles, revêtements, poussières : chaque matériau neuf libère des polluants simultanément. Pendant les travaux, les concentrations de COV et de particules peuvent dépasser de 5 à 10 fois les niveaux normaux. C'est transitoire, mais l'exposition cumulée peut être significative.",
          },
          {
            number: "02",
            badge: "Organisation",
            title: "L'ordre des travaux détermine ce qu'on respire après.",
            description:
              "Les finitions (peintures, colles, revêtements de sol) sont les matériaux les plus émissifs. Les réaliser en dernier, dans une pièce non occupée avec aération maximale, réduit l'exposition globale et raccourcit le délai nécessaire avant de réintégrer.",
          },
          {
            number: "03",
            badge: "Maison ancienne",
            title: "Amiante avant 1997, plomb avant 1949 : deux réglementations différentes.",
            description:
              "Tout bâtiment construit avant le 1er juillet 1997 peut contenir de l'amiante dans des dizaines de matériaux différents. Avant 1949, le risque plomb s'ajoute. Ces diagnostics sont obligatoires avant tout chantier et conditionnent la sécurité des intervenants et des occupants.",
          },
        ]}
      />

      <SituationPriorities
        id="priorites"
        sectionLabel="Dans quel ordre agir"
        title="Ce qu'il faut prévoir, dans quel ordre."
        subtitle="Six décisions classées par impact sur la qualité de l'air finale."
        priorities={[
          {
            number: "01",
            title: "Faire les diagnostics avant de toucher quoi que ce soit",
            description:
              "Amiante (bâtiments dont le permis est antérieur au 1er juillet 1997) et plomb (logements construits avant 1949) : les diagnostics sont légalement obligatoires avant tout chantier. Découvrir ces matériaux en cours de travaux expose les occupants, les artisans, et peut bloquer le chantier.",
            timing: "en-premier",
          },
          {
            number: "02",
            title: "Choisir les matériaux de finition en priorité A+ et EC1",
            description:
              "Peintures, colles de parquet et de carrelage, enduits : l'étiquetage A+/A/B/C est obligatoire depuis 2013. Le label A+ garantit des émissions très faibles à 28 jours. Pour les colles, le label EC1 signifie sans solvant, sans amine, sans isocyanate. C'est le choix qui a le plus d'impact sur l'air après travaux.",
            timing: "en-premier",
          },
          {
            number: "03",
            title: "Planifier la VMC avant les finitions, pas après",
            description:
              "La ventilation mécanique contrôlée doit être opérationnelle avant d'emménager, pas installée en dernier. Une maison bien isolée sans VMC fonctionnelle accumule les polluants des matériaux neufs. Si pas de VMC, prévoir une aération intensive chaque jour pendant les semaines qui suivent les travaux.",
            timing: "en-premier",
          },
          {
            number: "04",
            title: "Prévoir un délai de dégazage de 4 à 6 semaines après travaux complets",
            description:
              "Pour une peinture glycérophtalique (classe C) : 26 à 28 jours minimum. Pour une colle de parquet solvantée : un mois minimum. Avec des produits A+ et une aération intensive, le délai peut être ramené à 3 à 4 semaines. Si une odeur persiste après 2 mois, les émissions se poursuivent.",
            timing: "ensuite",
          },
          {
            number: "05",
            title: "Éloigner les occupants vulnérables pendant les travaux et le dégazage",
            description:
              "Enfants, femmes enceintes, personnes asthmatiques : les COV traversent la barrière placentaire et aggravent l'asthme. Ces personnes doivent être éloignées de la zone de travaux pendant toute la durée, et pendant la phase de dégazage intense (2 à 4 premières semaines).",
            timing: "ensuite",
          },
          {
            number: "06",
            title: "Choisir des isolants biosourcés à l'occasion des travaux",
            description:
              "Ouate de cellulose, laine de chanvre, fibre de bois : performances thermiques comparables à la laine de verre, avec une meilleure régulation de l'humidité ambiante. Éligibles aux aides MaPrimeRénov' et éco-PTZ. L'isolation, une fois posée et protégée, ne pollue pas l'air intérieur.",
            timing: "quand-possible",
          },
        ]}
      />

      <SituationDefer
        id="arbitrage"
        sectionLabel="Arbitrage"
        title="Ce qui ne peut pas attendre, et ce qui peut."
        urgentLabel="Ne pas remettre"
        deferLabel="Peut attendre"
        urgent={[
          {
            label: "Les diagnostics dans une maison ancienne",
            detail:
              "Amiante (avant 1997), plomb (avant 1949) : à faire avant de toucher quoi que ce soit. Pas pendant le chantier. Le repérage amiante avant travaux (RAT) est légalement obligatoire.",
          },
          {
            label: "Le choix des peintures et colles A+",
            detail:
              "Ces produits ne sont pas toujours disponibles en grande surface. Identifier et commander les références avant le début du chantier, pas le jour J.",
          },
          {
            label: "La VMC : à planifier en phase de conception",
            detail:
              "La ventilation s'installe avant les finitions. La repenser en cours de chantier coûte plus cher et donne un résultat moins efficace.",
          },
          {
            label: "L'hébergement des occupants vulnérables",
            detail:
              "Enfants, femme enceinte : budgéter un hébergement temporaire pendant les travaux et les 2 premières semaines de dégazage.",
          },
        ]}
        defer={[
          {
            label: "La décoration et les accessoires",
            detail:
              "Rideaux, luminaires, objets décoratifs : leur impact sur la qualité de l'air est marginal par rapport aux finitions. À installer après le dégazage.",
          },
          {
            label: "Le sol de l'entrée et des couloirs",
            detail:
              "Si vous devez prioriser, commencez par les chambres et les pièces à vie. L'entrée peut attendre.",
          },
          {
            label: "Le remplacement du mobilier existant",
            detail:
              "Les meubles anciens n'émettent plus rien. Sauf moisissures ou dommages, remplacer le mobilier n'est pas prioritaire pendant une rénovation.",
          },
          {
            label: "Le calfeutrage des fenêtres",
            detail:
              "Important pour l'efficacité énergétique, mais pas urgent vis-à-vis de la qualité de l'air. À faire dans un second temps si budget limité.",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs les plus fréquentes en rénovation."
        errors={[
          {
            label: "Choisir les matériaux sans regarder l'étiquetage",
            explanation:
              "Depuis 2013, l'étiquetage A+/A/B/C est obligatoire et lisible sur les emballages. Un produit A+ n'est pas nécessairement plus cher. C'est la décision qui a le plus d'impact sur la qualité de l'air des années suivantes.",
          },
          {
            label: "Réoccuper trop tôt après une peinture glycéro ou une colle de parquet",
            explanation:
              "Les 48 à 72 premières heures sont les plus émissives. Une peinture glycérophtalique nécessite 26 à 28 jours d'aération correcte. Une colle de parquet solvantée, un mois minimum. Une odeur persistante après 2 mois signale des émissions continues.",
          },
          {
            label: "Oublier les diagnostics dans une maison construite avant 1997",
            explanation:
              "Découvrir de l'amiante en cours de travaux expose les occupants et les artisans, et peut stopper le chantier. Le repérage amiante avant travaux est légalement obligatoire depuis le décret 2017-899.",
          },
          {
            label: "Isoler sans rénover la ventilation",
            explanation:
              "Une maison bien isolée retient aussi les polluants intérieurs. Sans VMC adaptée, l'air se charge de COV issus des matériaux neufs sans pouvoir s'évacuer. Isolation et ventilation vont impérativement ensemble.",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="S'organiser avant, pendant et après."
        immediateLabel="À anticiper"
        structuralLabel="Pendant et après"
        immediate={[
          {
            label: "Commander les peintures et colles A+ en amont",
            description:
              "Ces produits sont moins disponibles en grande surface. Identifier les références (peintures A+ acryliques, colles label EC1), les commander avant le début du chantier.",
            effort: "Anticipation",
          },
          {
            label: "Programmer les diagnostics si maison ancienne",
            description:
              "Amiante (avant 1997), plomb (avant 1949) : compter 2 à 3 semaines pour obtenir les résultats d'un diagnostiqueur certifié. À faire en amont de tout planning de chantier.",
            effort: "150–400 € selon surface",
          },
          {
            label: "Planifier la VMC en phase de conception",
            description:
              "La ventilation s'installe avant les finitions. Si rénovation globale, intégrer le type de VMC (simple flux, double flux) au budget initial.",
            effort: "800–3 000 € selon système",
          },
          {
            label: "Prévoir la protection des occupants vulnérables",
            description:
              "Enfants, femme enceinte : identifier l'hébergement alternatif pendant les travaux et les 2 premières semaines de dégazage.",
            effort: "Organisation",
          },
        ]}
        structural={[
          {
            label: "Aérer plusieurs heures par jour pendant 6 à 8 semaines après les finitions",
            description:
              "Fenêtres en grand, courant d'air traversant. Même en hiver : 30 minutes en grand vaut une journée fenêtre entrouverte. La dilution par l'air est la première mesure de réduction de l'exposition.",
            effort: "Gratuit",
          },
          {
            label: "Vérifier le débit de la VMC après les travaux",
            description:
              "Un chantier peut obstruer des bouches ou endommager des gaines. Vérifier que le débit est correct (perceptible à la main sur chaque bouche) avant de considérer la maison habitée.",
            effort: "Gratuit",
          },
          {
            label: "Ne pas stocker les produits chimiques dans le logement",
            description:
              "Diluants, vernis, résines : même fermés, ils émettent des polluants par perméation. Les stocker dans un garage ou un local extérieur.",
            effort: "Organisation",
          },
          {
            label: "Surveiller l'hygrométrie les premiers mois",
            description:
              "Les matériaux de construction (plâtre, béton) libèrent de l'humidité pendant la phase de séchage. Une hygrométrie élevée les premières semaines est normale, mais peut favoriser les moisissures si la ventilation est insuffisante.",
            effort: "Hygromètre : 10–20 €",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Choisir des matériaux plus naturels",
            description:
              "Les alternatives au PVC, à l'aggloméré et aux peintures solvantées : ce qui existe, ce que ça coûte, et par quoi commencer.",
            href: "/materiaux-sains/materiaux-plus-naturels/",
          },
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions",
            description:
              "Comprendre l'étiquetage A+/A/B/C et les labels complémentaires pour chaque catégorie de matériau.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Air intérieur",
            title: "Air intérieur pollué",
            description:
              "Les familles de polluants présents dans l'air intérieur, leurs sources et leur impact sur la santé.",
            href: "/air-interieur/air-interieur-pollue/",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la rénovation saine"
        items={[
          {
            question: "Est-il obligatoire de faire un diagnostic amiante avant des travaux dans une maison ancienne ?",
            answer:
              "Oui. Depuis le décret 2017-899, un repérage amiante avant travaux (RAT) est obligatoire avant tout chantier dans un bâtiment dont le permis de construire est antérieur au 1er juillet 1997. Ce repérage doit être réalisé par un diagnostiqueur certifié. Les entreprises ont également l'obligation légale de disposer de ce document avant d'intervenir.",
          },
          {
            question: "Peut-on habiter dans la maison pendant les travaux ?",
            answer:
              "Pour les travaux courants (peinture, pose de sol) : possible si la zone est isolée et bien aérée, et si les occupants évitent la zone. Pour les travaux générant des poussières importantes (ponçage, démolition) ou impliquant des matériaux amiantés ou plombés : il faut quitter les lieux. Les enfants et les femmes enceintes doivent être éloignés dans tous les cas.",
          },
          {
            question: "La peinture A+ garantit-elle une chambre sans polluants après travaux ?",
            answer:
              "Non, elle réduit significativement les émissions mais pas à zéro. Le A+ mesure les émissions à 28 jours après application : les pics sont dans les premiers jours. Avec une aération intensive les 6 premières semaines, une peinture A+ est la solution accessible la plus saine. Ce n'est pas parfait mais c'est nettement mieux qu'une peinture glycéro.",
          },
          {
            question: "Quelle est la différence entre laine de chanvre et laine de verre pour l'isolation ?",
            answer:
              "En termes de performance thermique, ils sont comparables (lambda entre 0,035 et 0,042 W/m.K). La laine de chanvre régule mieux l'humidité (hygroscopique), ce qui réduit le risque de moisissures dans les parois. Elle ne nécessite pas d'équipements de protection particuliers à la pose. Elle coûte 20 à 30 % plus cher mais est éligible aux mêmes aides (MaPrimeRénov').",
          },
        ]}
      />
    </>
  );
}
