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
  title: "Chauffage sain : choix, performance et impact sur l'air intérieur",
  description:
    "Poêle à bois, pompe à chaleur, chauffage électrique : impact sur la qualité de l'air, performance, aides 2026. Choisir le mode de chauffage adapté à votre logement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/chauffage-sain/",
  },
  openGraph: {
    title: "Chauffage sain : choix, performance et impact sur l'air intérieur",
    description:
      "Poêle à bois, pompe à chaleur, chauffage électrique : impact sur la qualité de l'air, performance, aides 2026. Choisir le mode de chauffage adapté à votre logement.",
    url: "https://www.maisonbionat.fr/chauffage-sain/",
  },
};

export default function ChauffageSainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Chauffage sain", href: "/chauffage-sain/" },
  ]);
  const faqItems = [
    {
      question: "Quel est le mode de chauffage le plus sain pour l'air intérieur ?",
      answer:
        "Sur le strict critère de l'air intérieur, le chauffage électrique (radiateurs à inertie, plinthes chauffantes, plancher rayonnant) et la pompe à chaleur air-eau sont les modes les plus sains : aucune combustion, aucune émission de particules ou de monoxyde de carbone à l'intérieur du logement. Le chauffage gaz est sain s'il est correctement entretenu (entretien annuel obligatoire) avec une bonne ventilation. Le chauffage au bois est le plus problématique : un poêle ancien peut émettre 10 à 100 fois plus de particules fines qu'un appareil moderne Flamme Verte 7 étoiles, et la pollution s'infiltre aussi à l'intérieur du logement par les défauts d'étanchéité et l'air rejeté.",
    },
    {
      question: "Quelles aides MaPrimeRénov' en 2026 pour changer de chauffage ?",
      answer:
        "Les aides 2026 sont calibrées selon les revenus du foyer et le type d'équipement. Pour une pompe à chaleur air-eau : 5 000 € (très modestes), 4 000 € (modestes), 3 000 € (intermédiaires). Pour une PAC géothermique : jusqu'à 11 000 €. Pour un poêle à granulés : 2 500 € (très modestes), 2 000 € (modestes), 1 500 € (intermédiaires). Le cumul avec les CEE (Certificats d'économie d'énergie, 1 000 à 5 800 € selon installation) est possible. Les chaudières gaz neuves ne sont plus aidées depuis 2024. L'installateur doit être certifié RGE Qualibat ou équivalent.",
    },
    {
      question: "Le chauffage au bois sera-t-il interdit en 2026 ?",
      answer:
        "Non, pas d'interdiction généralisée en 2026. Mais des restrictions territoriales s'appliquent dans plusieurs zones soumises à des Plans de Protection de l'Atmosphère (PPA) : Vallée de l'Arve depuis 2019, métropole de Lyon, certaines vallées alpines. Dans ces zones, les appareils anciens (avant Flamme Verte 5*) sont progressivement interdits à l'usage. Le label Flamme Verte 7 étoiles est devenu le standard minimum pour les appareils neufs (40 mg/Nm³ de particules pour bûche, 30 mg/Nm³ pour granulé). Avant tout achat, vérifier la réglementation locale auprès de votre mairie ou de la DREAL.",
    },
    {
      question: "Une pompe à chaleur est-elle adaptée à un logement ancien ?",
      answer:
        "Pas systématiquement. La PAC air-eau fonctionne le mieux dans un logement bien isolé avec un système de chauffage basse température (plancher chauffant, radiateurs basse température). Sur un logement ancien mal isolé avec des radiateurs haute température, la PAC peut être contre-productive (consommation d'appoint électrique, COP réel faible, factures décevantes). Avant l'installation : faire un audit énergétique (250-700 € souvent partiellement remboursé), prioriser l'isolation, vérifier la dimensionnement par un thermicien. Une PAC mal posée sur un mauvais bâti coûte plus cher en exploitation qu'une chaudière gaz récente.",
    },
    {
      question: "Le chauffage électrique consomme-t-il vraiment plus que les autres modes ?",
      answer:
        "Cela dépend de l'isolation du logement et de la technologie du radiateur. Sur un logement performant (RT 2012, RE 2020, BBC) avec radiateurs à inertie ou plancher rayonnant, la consommation est compétitive avec une PAC sur le coût total (achat + installation + exploitation), avec un confort équivalent. Sur un logement mal isolé, le chauffage électrique direct (convecteurs anciens) est en effet le plus coûteux à l'usage. La technologie compte : un radiateur à inertie (fluide caloporteur ou pierre/céramique) consomme 20-30 % de moins qu'un convecteur. Le chauffage électrique reste le plus simple à installer (pas de chaudière, pas de réseau de tuyaux) et le plus sain pour l'air intérieur.",
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
        tag="Chauffage sain"
        title="Chauffer sans polluer l'air qu'on respire chez soi."
        description="Le mode de chauffage que vous choisissez a un impact direct sur la qualité de l'air intérieur, sur la facture, et sur le confort thermique. Comparer les options sur des critères factuels — émissions, performance, aides 2026 — pour choisir en connaissance de cause."
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
        title="Ce qu'il faut savoir sur le chauffage et l'air intérieur"
        insights={[
          {
            number: "01",
            label: "Première source nationale de PM2,5",
            text: "Le chauffage au bois résidentiel est la première source d'émission de particules fines en France selon le CITEPA. Un poêle ancien émet 10 à 100 fois plus qu'un appareil Flamme Verte 7 étoiles avec bois sec.",
          },
          {
            number: "02",
            label: "Combustion = risque CO",
            text: "Tout appareil à combustion (gaz, fioul, bois, granulés) peut produire du monoxyde de carbone en cas de défaut. L'entretien annuel est obligatoire pour les chaudières (arrêté 15/09/2009) et fortement recommandé pour les poêles. Détecteur EN 50291 indispensable.",
          },
          {
            number: "03",
            label: "PAC air-eau : 3 000 à 5 000 € d'aide",
            text: "MaPrimeRénov' 2026 : 5 000 € (très modestes), 4 000 € (modestes), 3 000 € (intermédiaires). Cumul CEE possible. Plafond de dépenses 12 000 €. Installateur RGE obligatoire pour bénéficier des aides.",
          },
          {
            number: "04",
            label: "Flamme Verte 7* depuis 2025",
            text: "Standard minimal pour les appareils bois neufs : 40 mg/Nm³ particules pour bûche, 30 mg/Nm³ pour granulé. Rendement minimum 75 % (bûche) ou 90 % (granulé). Mesure obligatoire en charge partielle depuis 2025 (où se concentrent les émissions réelles).",
          },
          {
            number: "05",
            label: "Chauffage électrique : zéro émission intérieure",
            text: "Pas de combustion, pas de particules, pas de CO. Sur un logement bien isolé avec radiateurs à inertie, la consommation est compétitive avec une PAC. Solution la plus simple à installer et la plus sûre sur le plan air intérieur.",
          },
          {
            number: "06",
            label: "Chaudière gaz : pas d'aide 2026",
            text: "Les chaudières gaz neuves (y compris à condensation) ne sont plus éligibles à MaPrimeRénov' depuis 2024. Le remplacement à l'identique reste libre, mais sans soutien public. La trajectoire politique pousse vers la PAC, le bois ou l'électrique selon les configurations.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Par où commencer pour choisir un chauffage sain"
        subtitle="Trois étapes ordonnées pour un choix qui tienne dans la durée."
        priorities={[
          {
            number: "01",
            action: "Faire un audit énergétique avant de choisir",
            description:
              "Avant tout achat de matériel : audit thermique du logement par un thermicien certifié (250-700 €, souvent éligible aux aides). Identifie l'état de l'isolation, les déperditions, le dimensionnement nécessaire. Une PAC mal dimensionnée sur un bâti mal isolé est une erreur durable et coûteuse.",
            href: "/chauffage-sain/choisir-chauffage-renovation/",
          },
          {
            number: "02",
            action: "Vérifier la sécurité de l'installation existante",
            description:
              "Tout appareil à combustion (chaudière gaz, poêle bois, granulés) doit faire l'objet d'un entretien annuel par un professionnel. Détecteur de monoxyde de carbone EN 50291 dans la pièce de l'appareil. Ramonage 1 à 2 fois par an pour le bois.",
            href: "/air-interieur/monoxyde-carbone-maison/",
          },
          {
            number: "03",
            action: "Privilégier les modes sans combustion intérieure si possible",
            description:
              "PAC air-eau ou chauffage électrique à inertie pour les logements bien isolés ou en rénovation. Ces solutions n'émettent rien à l'intérieur du logement. Le bois reste pertinent en zone rurale avec ressource locale, à condition d'un appareil Flamme Verte 7* et d'un bois sec.",
            href: "/chauffage-sain/pompe-a-chaleur-air-eau/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Les erreurs fréquentes dans le choix d'un chauffage"
        errors={[
          {
            label: "Choisir l'équipement avant de vérifier l'isolation",
            explanation:
              "Erreur la plus coûteuse. Un chauffage performant sur un logement passoire ne fait pas mieux qu'un chauffage médiocre sur un logement isolé. Toujours commencer par l'isolation (toiture, murs, fenêtres) avant de remplacer le générateur. La PAC n'est rentable qu'après une isolation correcte.",
          },
          {
            label: "Garder un vieux poêle « parce qu'il chauffe bien »",
            explanation:
              "Un poêle ancien (avant Flamme Verte 5*) émet 10 à 100 fois plus de particules fines qu'un modèle récent et a un rendement souvent inférieur à 50 %. Plus de bois pour la même chaleur, et beaucoup plus de pollution intérieure et extérieure. Le remplacer permet 50 à 70 % d'économies de bois et une réduction massive des émissions.",
          },
          {
            label: "Brûler du bois humide ou des résineux dans un poêle",
            explanation:
              "Le bois doit être sec (humidité < 20 %, soit 18-24 mois de séchage) pour brûler proprement. Un bois humide divise le rendement par 2 et multiplie les particules par 5 à 10. Les résineux (pin, sapin) donnent une combustion rapide et encrassante : à réserver à l'allumage. Privilégier feuillus durs (chêne, hêtre, charme).",
          },
          {
            label: "Sous-dimensionner ou sur-dimensionner sa pompe à chaleur",
            explanation:
              "Une PAC sous-dimensionnée fonctionne en permanence avec appoint électrique (consommation décevante, factures élevées). Sur-dimensionnée, elle effectue trop de courts cycles, s'use prématurément et produit moins de chaleur que prévu. Le dimensionnement est l'étape critique : exiger une note de calcul de l'installateur RGE.",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer le chauffage en détail"
        subtitle="Quatre angles concrets pour choisir et exploiter son chauffage."
        pages={[
          {
            number: "01",
            title: "Poêle à bois et air intérieur : Flamme Verte, particules, ramonage",
            description: "Émissions PM2,5 selon l'âge de l'appareil, exigences Flamme Verte 7*, qualité du bois et bonnes pratiques d'usage pour limiter la pollution intérieure et extérieure.",
            href: "/chauffage-sain/poele-bois-air-interieur/",
          },
          {
            number: "02",
            title: "Pompe à chaleur air-eau : performance, aides et contraintes",
            description: "MaPrimeRénov' 2026 (3 000-5 000 €), COP réel, dimensionnement, compatibilité avec radiateurs existants. Quand la PAC est rentable et quand elle déçoit.",
            href: "/chauffage-sain/pompe-a-chaleur-air-eau/",
          },
          {
            number: "03",
            title: "Chauffage électrique sain : inertie, infrarouge, plancher rayonnant",
            description: "Zéro émission intérieure, technologies disponibles, consommation réelle selon l'isolation, comparaison avec PAC en logement performant.",
            href: "/chauffage-sain/chauffage-electrique-sain/",
          },
          {
            number: "04",
            title: "Choisir son chauffage en rénovation : méthode et arbitrages",
            description: "Audit énergétique, ordre des travaux (isolation d'abord), comparaison des modes selon climat et bâti, simulation des aides cumulées, retour sur investissement.",
            href: "/chauffage-sain/choisir-chauffage-renovation/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur le chauffage sain"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "Monoxyde de carbone : reconnaître le risque",
            description:
              "Tout appareil à combustion mal entretenu peut produire du CO. Sources, signes d'intoxication, détecteur EN 50291.",
            href: "/air-interieur/monoxyde-carbone-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Particules fines (PM2,5) : sources et leviers",
            description:
              "Le chauffage au bois est la première source nationale de PM2,5. Comprendre l'enjeu et les leviers de réduction à la maison.",
            href: "/air-interieur/particules-fines-maison/",
          },
          {
            tag: "Rénovation saine",
            title: "VMC double flux : qualité d'air, performances et coûts",
            description:
              "Une bonne ventilation est complémentaire d'un chauffage performant : récupération de chaleur, filtration des particules entrantes.",
            href: "/renovation-saine/vmc-double-flux/",
          },
        ]}
      />
    </>
  );
}
