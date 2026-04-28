import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroPillar from "@/components/pillar/HeroPillar";
import InsightGrid from "@/components/pillar/InsightGrid";
import PriorityBlock from "@/components/pillar/PriorityBlock";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import ChildPageIndex from "@/components/pillar/ChildPageIndex";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Air intérieur : qualité, polluants et solutions",
  description:
    "L'air intérieur est souvent 5 à 10 fois plus pollué que l'air extérieur. Comprendre les sources, améliorer la ventilation et réduire les polluants concrètement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/",
  },
  openGraph: {
    title: "Air intérieur : qualité, polluants et solutions",
    description:
      "L'air intérieur est souvent 5 à 10 fois plus pollué que l'air extérieur. Comprendre les sources, améliorer la ventilation et réduire les polluants concrètement.",
    url: "https://www.maisonbionat.fr/air-interieur/",
  },
};

export default function AirInterieurPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
  ]);
  const faqItems = [
    {
      question: "L'air intérieur est-il vraiment plus pollué que l'air extérieur ?",
      answer:
        "Oui, dans la majorité des logements. L'ANSES estime que l'air intérieur peut contenir 5 à 10 fois plus de polluants que l'air extérieur, en raison des émissions cumulées des matériaux, produits ménagers, mobilier et activités domestiques dans un espace confiné.",
    },
    {
      question: "Combien de fois par jour faut-il aérer sa maison ?",
      answer:
        "Deux fois par jour, 10 minutes minimum, en créant un courant d'air (fenêtres en opposition). C'est le minimum recommandé. Après la douche, la cuisine ou un nettoyage, une aération courte supplémentaire est utile.",
    },
    {
      question: "Qu'est-ce que le formaldéhyde et où le trouve-t-on ?",
      answer:
        "Le formaldéhyde est un gaz incolore, classé cancérogène avéré pour l'homme par le CIRC depuis 2004 (groupe 1). On le trouve dans les panneaux de bois aggloméré, certaines peintures, colles, textiles traités et produits d'entretien. La valeur guide ANSES pour une exposition long terme dans l'air intérieur est de 100 µg/m³ ; le seuil réglementaire applicable aux établissements recevant du public a été abaissé à 10 µg/m³ au 1er janvier 2023.",
    },
    {
      question: "Un purificateur d'air vaut-il vraiment la peine ?",
      answer:
        "Cela dépend du problème. Pour les particules fines (allergènes, poussières), un purificateur HEPA peut aider. Pour les COV gazeux, il est moins efficace. Il ne remplace pas une bonne ventilation et ne supprime pas les sources de pollution.",
    },
    {
      question: "Les meubles neufs polluent-ils l'air ?",
      answer:
        "Oui, notamment les meubles en panneaux de bois aggloméré (MDF, aggloméré). Ils émettent du formaldéhyde et d'autres COV, surtout dans les premières semaines. Laissez-les dégazer dans une pièce ventilée avant de les installer dans une chambre.",
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ① Hero */}
      <HeroPillar
        tag="Air intérieur"
        title="L'air que vous respirez chez vous n'est pas neutre."
        description="Un logement mal ventilé concentre davantage de polluants que l'air extérieur. Comprendre les sources, améliorer la ventilation et agir progressivement, sans alarmisme."
        anchors={[
          { id: "comprendre", label: "Ce qu'il faut savoir" },
          { id: "priorites", label: "Les priorités concrètes" },
          { id: "erreurs", label: "Erreurs fréquentes" },
          { id: "explorer", label: "Explorer ce thème" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      {/* ② Insights */}
      <InsightGrid
        id="comprendre"
        title="Ce que la plupart des gens ignorent sur l'air intérieur"
        insights={[
          {
            number: "01",
            label: "Concentration réelle",
            text: "L'air intérieur peut contenir 5 à 10 fois plus de polluants que l'air extérieur, même dans une maison apparemment propre.",
          },
          {
            number: "02",
            label: "Sources invisibles",
            text: "Meubles neufs, peintures, produits ménagers, bougies : chaque élément peut émettre des composés volatils pendant des mois.",
          },
          {
            number: "03",
            label: "Ventilation sous-estimée",
            text: "Une VMC mal entretenue ou mal réglée peut être moins efficace qu'une simple aération quotidienne de 10 minutes.",
          },
          {
            number: "04",
            label: "Formaldéhyde omniprésent",
            text: "Le formaldéhyde, classé cancérogène avéré (groupe 1) par le CIRC depuis 2004, est présent dans la majorité des logements. Valeur guide ANSES long terme : 100 µg/m³ ; seuil ERP réglementaire abaissé à 10 µg/m³ depuis janvier 2023.",
          },
          {
            number: "05",
            label: "Radon trop peu connu",
            text: "Gaz radioactif naturel, deuxième cause de cancer du poumon en France après le tabac. L'IRSN estime à environ 3 000 le nombre de décès annuels attribuables au radon. Niveau de référence réglementaire : 300 Bq/m³.",
          },
          {
            number: "06",
            label: "CO2, indicateur de ventilation",
            text: "Le CO2 n'est pas toxique aux concentrations domestiques, mais c'est le meilleur thermomètre du confinement. Au-delà de 1000 ppm, l'air est confiné et les autres polluants intérieurs s'accumulent en parallèle.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Par où commencer pour améliorer l'air chez vous"
        subtitle="Trois actions à fort impact, accessibles sans travaux lourds."
        priorities={[
          {
            number: "01",
            action: "Aérer correctement, tous les jours",
            description:
              "10 minutes matin et soir, fenêtres en opposition pour créer un courant d'air. Simple, gratuit, et immédiatement efficace pour diluer les polluants accumulés.",
            href: "/air-interieur/bien-aerer-maison/",
          },
          {
            number: "02",
            action: "Vérifier et entretenir la ventilation",
            description:
              "Nettoyez les bouches VMC tous les 6 mois. Assurez-vous que les grilles d'entrée d'air ne sont pas obstruées. Une VMC qui fonctionne mal aggrave la situation.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            number: "03",
            action: "Réduire les sources à l'intérieur",
            description:
              "Choisissez des matériaux et produits à faibles émissions (label A+). Évitez les parfums d'ambiance et bougies dans les pièces fermées. Laissez dégazer les meubles neufs.",
            href: "/air-interieur/sources-pollution-air/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Ce qui ne fonctionne pas comme vous le croyez"
        errors={[
          {
            label: "Les plantes dépolluent l'air",
            explanation:
              "Les études en conditions réelles montrent que les plantes ont un effet négligeable sur la qualité de l'air d'un logement. L'aération reste incomparablement plus efficace.",
          },
          {
            label: "Fermer les fenêtres protège de la pollution",
            explanation:
              "En l'absence de ventilation, les polluants intérieurs s'accumulent rapidement et dépassent souvent les niveaux extérieurs. L'air extérieur est généralement moins nocif.",
          },
          {
            label: "Les purificateurs suffisent",
            explanation:
              "Un purificateur traite les particules, pas tous les COV gazeux. Il ne remplace pas une bonne ventilation et n'élimine pas les sources de pollution.",
          },
          {
            label: "Une maison neuve est saine",
            explanation:
              "Les matériaux et finitions neufs émettent davantage de COV dans les premiers mois. Les maisons neuves nécessitent une attention particulière à la ventilation.",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer l'air intérieur en détail"
        subtitle="Chaque sujet traité en profondeur, avec des conseils actionnables."
        pages={[
          {
            number: "01",
            title: "Les polluants intérieurs les plus fréquents",
            description: "COV, formaldéhyde, particules fines : identifier les sources et comprendre les niveaux d'exposition dans un logement ordinaire.",
            href: "/air-interieur/polluants-interieurs-frequents/",
          },
          {
            number: "02",
            title: "Améliorer l'air dans sa maison",
            description: "Stratégie complète pour réduire les polluants : aération, ventilation, choix de matériaux et gestes du quotidien.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
          {
            number: "03",
            title: "Aération ou ventilation : quelle différence ?",
            description: "Comprendre les deux systèmes, leurs rôles respectifs et pourquoi les combiner donne les meilleurs résultats.",
            href: "/air-interieur/aeration-ou-ventilation/",
          },
          {
            number: "04",
            title: "Odeurs persistantes dans la maison",
            description: "Causes réelles des mauvaises odeurs, solutions durables et ce qu'il ne faut surtout pas faire pour les masquer.",
            href: "/air-interieur/odeurs-persistantes-maison/",
          },
          {
            number: "05",
            title: "Bien aérer sa maison",
            description: "La technique d'aération efficace au quotidien : fréquence, méthode, pièces spécifiques et saisons.",
            href: "/air-interieur/bien-aerer-maison/",
          },
          {
            number: "06",
            title: "Entretenir sa VMC",
            description: "Protocole d'entretien selon le type de VMC : simple flux, double flux, hygro. Quand le faire soi-même, quand appeler un professionnel.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            number: "07",
            title: "Les sources de pollution de l'air intérieur",
            description: "D'où vient réellement la pollution chez vous : matériaux, mobilier, activités, produits. Les sources classées par catégorie et par impact.",
            href: "/air-interieur/sources-pollution-air/",
          },
          {
            number: "08",
            title: "Air intérieur pollué : sources, signes et solutions concrètes",
            description: "L'air de votre logement est souvent 5 à 10 fois plus pollué que l'air extérieur. Identifier les sources réelles, reconnaître les signes et agir dans le bon ordre.",
            href: "/air-interieur/air-interieur-pollue/",
          },
          {
            number: "09",
            title: "Trop de poussière dans la maison : causes et solutions durables",
            description: "La poussière revient trop vite ? Identifier pourquoi (acariens, VMC, textiles, extérieur) et agir sur les causes, pas seulement sur les surfaces.",
            href: "/air-interieur/poussiere-maison/",
          },
          {
            number: "10",
            title: "Le formaldéhyde dans la maison : sources, niveaux et solutions",
            description: "Cancérogène avéré, présent dans presque tous les logements : sources réelles, valeurs guides ANSES, niveaux mesurés et leviers pour réduire l'exposition.",
            href: "/air-interieur/formaldehyde-maison/",
          },
          {
            number: "11",
            title: "Purificateur d'air maison : utile, gadget ou complément ?",
            description: "Ce qu'un purificateur sait vraiment faire (HEPA, charbon actif), ses limites sur les COV gazeux, et les cas où il devient pertinent.",
            href: "/air-interieur/purificateur-air-maison/",
          },
          {
            number: "12",
            title: "Plantes dépolluantes : ce que la science dit vraiment",
            description: "L'étude NASA de 1989 et l'avis ADEME 2011 : pourquoi les plantes ne dépolluent pas un logement, et le rôle utile qu'elles jouent vraiment.",
            href: "/air-interieur/plantes-depolluantes-maison/",
          },
          {
            number: "13",
            title: "Radon : comprendre le risque, vérifier sa zone, réduire l'exposition",
            description: "Gaz radioactif naturel, deuxième cause de cancer du poumon en France. Zonage IRSN, mesure par dosimètre passif et leviers structurels selon les niveaux.",
            href: "/air-interieur/radon-maison/",
          },
          {
            number: "14",
            title: "CO2 dans la maison : indicateur de confinement et seuils utiles",
            description: "Ce que mesure réellement un capteur de CO2, pourquoi 1000 ppm reste un repère clé, et comment l'interpréter en chambre, séjour ou bureau.",
            href: "/air-interieur/co2-maison/",
          },
          {
            number: "15",
            title: "Acariens : allergènes, literie et leviers efficaces",
            description: "Première cause d'allergie respiratoire en logement. Conditions de prolifération (HR > 60 %), traitement de la literie et mesures à efficacité démontrée.",
            href: "/air-interieur/acariens-maison/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'air intérieur"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Humidité maison",
            title: "Humidité et moisissures",
            description: "L'humidité excessive favorise les moisissures, qui dégradent l'air intérieur. Les deux sujets sont directement liés.",
            href: "/humidite-maison/",
          },
          {
            tag: "Matériaux sains",
            title: "Choisir des matériaux à faibles émissions",
            description: "Peintures, revêtements, meubles : comprendre l'étiquetage et faire de meilleurs choix pour réduire les sources à la source.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers et air intérieur",
            description: "Sprays, bougies, nettoyants : les gestes et substitutions simples pour réduire la pollution chimique quotidienne.",
            href: "/produits-et-habitudes/",
          },
        ]}
      />
    </>
  );
}
