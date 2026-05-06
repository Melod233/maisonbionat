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
  title: "Jardin sain : sol vivant, eau, pesticides et équipements durables",
  description:
    "Comment rendre son jardin plus sain et plus autonome : sol vivant, récupération d'eau de pluie, alternatives aux pesticides depuis la loi Labbé, équipements durables. Guide pratique pour propriétaires de maison.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/",
  },
  openGraph: {
    title: "Jardin sain : sol vivant, eau, pesticides et équipements durables",
    description:
      "Comment rendre son jardin plus sain et plus autonome : sol vivant, récupération d'eau de pluie, alternatives aux pesticides, équipements durables.",
    url: "https://www.maisonbionat.fr/jardin/",
  },
};

export default function JardinPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
  ]);

  const faqItems = [
    {
      question: "Les pesticides sont-ils encore autorisés au jardin pour les particuliers ?",
      answer:
        "Non, depuis le 1er juillet 2022, la loi Labbé interdit aux particuliers la détention et l'usage des produits phytopharmaceutiques chimiques de synthèse pour l'entretien des jardins, espaces de loisirs, terrains de sport et terrasses. Restent autorisés : les produits de biocontrôle, les substances de base, les produits à faibles risques et les produits utilisables en agriculture biologique. Une proposition de loi en cours de discussion en 2026 envisage d'étendre l'interdiction à l'ensemble des pesticides, y compris ceux utilisables en bio.",
    },
    {
      question: "Faut-il une autorisation pour récupérer l'eau de pluie ?",
      answer:
        "Pas pour un usage extérieur (arrosage du jardin, lavage de véhicule, nettoyage des terrasses) : aucune démarche n'est requise. Pour un usage intérieur (alimentation des chasses de WC, lave-linge), une déclaration en mairie est obligatoire ainsi qu'un réseau de canalisation strictement séparé du réseau d'eau potable, signalé par un marquage adapté. La toiture ne doit pas contenir d'amiante ni de plomb. Cadre : arrêté du 12 juillet 2024 modifiant le code de la santé publique.",
    },
    {
      question: "Le compostage est-il obligatoire depuis 2024 ?",
      answer:
        "L'obligation introduite par la loi AGEC au 1er janvier 2024 est le tri des biodéchets, pas la possession d'un composteur individuel. Concrètement, chaque foyer doit avoir accès à une solution de tri (collecte séparée organisée par la collectivité, point d'apport volontaire ou compostage individuel/partagé). En juillet 2025, 51,6 % des Français étaient effectivement couverts par une solution. Le compostage au jardin reste l'option la plus directe pour les propriétaires d'un terrain.",
    },
    {
      question: "Faut-il faire analyser sa terre avant de planter un potager ?",
      answer:
        "Oui dans deux cas : si vous habitez en zone urbaine ou périurbaine sur un site qui a pu connaître un usage industriel, et si votre maison est ancienne avec des sols anciennement traités. Une analyse en laboratoire spécialisé (50 à 150 €) recherche les métaux lourds (plomb, cadmium, arsenic) et permet de savoir quels légumes peuvent être plantés en pleine terre, et lesquels nécessitent un bac surélevé avec terre rapportée. La limite réglementaire pour le plomb dans les sols agricoles est de 100 mg/kg de matière sèche.",
    },
    {
      question: "Quel bois choisir pour un mobilier de jardin durable et sain ?",
      answer:
        "Privilégiez les essences naturellement durables (mélèze, robinier, chêne, douglas pour les climats tempérés, cumaru ou ipé pour une exposition prolongée) sans traitement chimique, ou un bois thermo-traité (modification de la structure du bois par chauffage, sans biocides). Le bois autoclave classe 4, traité aux sels de cuivre, d'acide borique et d'ammonium quaternaire, reste autorisé mais contient des substances potentiellement préoccupantes (l'acide borique est classé reprotoxique catégorie 2). Pour un usage en contact direct (banc, table de pique-nique), préférez les options non traitées chimiquement.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroPillar
        tag="Jardin"
        title="Un jardin plus sain, plus vivant, plus autonome."
        description="Quatre leviers structurent les choix utiles pour rendre son jardin plus sain : agir sur le sol (matière vivante, paillage, pas de bêchage systématique), gérer l'eau (récupération de pluie, arrosage raisonné), abandonner les pesticides chimiques (interdits aux particuliers depuis 2022), choisir des équipements durables (mobilier, traitement de l'eau d'une piscine, matériaux extérieurs). Cette page est le hub : chaque levier renvoie vers une page de détail."
        anchors={[
          { id: "comprendre", label: "Ce qu'il faut savoir" },
          { id: "priorites", label: "Les priorités concrètes" },
          { id: "erreurs", label: "Erreurs fréquentes" },
          { id: "explorer", label: "Explorer ce thème" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <InsightGrid
        id="comprendre"
        title="Ce qu'il faut savoir sur le jardin sain"
        insights={[
          {
            number: "01",
            label: "Loi Labbé : pesticides interdits depuis 2022",
            text: "Depuis le 1er juillet 2022, les particuliers ne peuvent plus détenir ni utiliser de produits phytopharmaceutiques chimiques de synthèse pour l'entretien de leurs jardins. Restent autorisés : biocontrôle, substances de base, produits à faibles risques, et produits utilisables en agriculture biologique.",
          },
          {
            number: "02",
            label: "Eau de pluie : usage extérieur libre",
            text: "Aucune démarche n'est nécessaire pour utiliser l'eau de pluie à l'arrosage, au lavage des véhicules ou au nettoyage des terrasses. Pour un usage intérieur (WC, lave-linge), une déclaration en mairie et un réseau séparé sont obligatoires (arrêté du 12 juillet 2024).",
          },
          {
            number: "03",
            label: "Biodéchets : tri obligatoire depuis 2024",
            text: "La loi AGEC impose depuis le 1er janvier 2024 que chaque foyer ait accès à une solution de tri des biodéchets. Le compostage individuel ou partagé reste la voie la plus directe pour un propriétaire avec terrain. Couverture nationale au 1er juillet 2025 : 51,6 % de la population.",
          },
          {
            number: "04",
            label: "Sol vivant : la base de tout",
            text: "Un sol biologiquement actif retient mieux l'eau, stocke du carbone et produit des plantes plus résistantes. Paillage, apports de matière organique, absence de bêchage systématique : les pratiques de sol vivant sont aussi celles qui réduisent la dépendance à l'arrosage et aux engrais.",
          },
        ]}
      />

      <PriorityBlock
        id="priorites"
        title="Quatre priorités pour un jardin plus sain"
        subtitle="L'ordre n'est pas figé : commencer par ce qui correspond à votre saison et à votre situation."
        priorities={[
          {
            number: "01",
            action: "Construire un sol vivant : paillage, matière organique, sol couvert",
            description:
              "Couvrir le sol nu avec un paillage organique (feuilles mortes, BRF, paille, tontes séchées) sur 5 à 10 cm. Apporter du compost mûr en surface plutôt que de bêcher. Limiter le travail du sol au strict nécessaire. Effets : moins d'arrosage, moins de désherbage, plus de biodiversité.",
          },
          {
            number: "02",
            action: "Récupérer l'eau de pluie pour l'arrosage",
            description:
              "Une cuve de récupération adaptée à la surface de toiture et aux besoins du jardin réduit fortement la consommation d'eau potable pour l'arrosage. Usage extérieur : aucune démarche. Toiture saine (pas d'amiante ni de plomb) obligatoire.",
          },
          {
            number: "03",
            action: "Abandonner les pesticides chimiques pour des alternatives qui marchent",
            description:
              "Désherbage manuel, désherbeur thermique, plantes couvrantes, paillage : les alternatives accessibles depuis l'interdiction de 2022 fonctionnent quand on les applique au bon moment. La gestion devient préventive plutôt que curative.",
            href: "/jardin/pesticides-jardin-alternatives/",
          },
          {
            number: "04",
            action: "Composter ses biodéchets de cuisine et de jardin",
            description:
              "Un composteur individuel adapté à la taille du foyer transforme épluchures, marc de café, tontes et feuilles en amendement gratuit pour le jardin. Méthode simple, gain immédiat sur les déchets et la fertilité.",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs courantes au jardin"
        errors={[
          {
            label: "Croire qu'il faut bêcher chaque année",
            explanation:
              "Le bêchage profond systématique perturbe la vie du sol (vers de terre, mycorhizes, micro-organismes) qui assurent fertilité et structure. Sur la majorité des sols, un travail superficiel ou une simple grelinette suffit. Sols compactés très lourds : exception possible, mais non systématique.",
          },
          {
            label: "Acheter des pesticides bio en pensant qu'ils sont sans risque",
            explanation:
              "Les produits utilisables en agriculture biologique ne sont pas neutres pour autant. Le sulfate de cuivre (bouillie bordelaise) s'accumule dans les sols et est toxique pour les vers de terre et la vie aquatique. Le pyrèthre naturel est non sélectif et tue insectes utiles comme nuisibles. À utiliser avec modération, pas en réflexe.",
          },
          {
            label: "Tondre la pelouse trop court et trop souvent",
            explanation:
              "Une pelouse coupée à 3 cm ou moins se dessèche vite, demande plus d'arrosage et favorise mousses et adventices. Une hauteur de 6 à 8 cm garde le sol frais, étouffe la concurrence et limite les arrosages estivaux. Une tonte par semaine au printemps suffit largement.",
          },
          {
            label: "Planter un potager en pleine terre sans analyse en zone urbaine",
            explanation:
              "Les sols urbains et périurbains anciens peuvent contenir des métaux lourds (plomb, cadmium, arsenic) issus du trafic, d'anciennes activités industrielles ou de peintures dégradées. Une analyse de sol (50 à 150 €) avant un potager familial est un investissement raisonnable. Si la teneur dépasse les seuils, planter en bacs surélevés avec terre rapportée.",
          },
        ]}
      />

      <ChildPageIndex
        id="explorer"
        title="Explorer le jardin sain en détail"
        subtitle="Les pages enfants de ce silo s'enrichissent progressivement. Voici les sujets déjà couverts."
        pages={[
          {
            number: "01",
            title: "Pesticides au jardin : alternatives concrètes depuis la loi Labbé",
            description:
              "Désherbage manuel, désherbeur thermique, paillage, plantes couvrantes : ce qui remplace réellement les produits chimiques interdits depuis 2022, et ce qui reste autorisé.",
            href: "/jardin/pesticides-jardin-alternatives/",
          },
        ]}
      />

      <PillarFaqSection id="faq" title="Vos questions sur le jardin sain" items={faqItems} />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Pièce par pièce",
            title: "L'extérieur immédiat de la maison",
            description:
              "Terrasse, balcon, abord direct de la façade : la perspective « pièce extérieure » à distinguer du jardin et de l'écosystème.",
            href: "/piece-par-piece/exterieur-sain/",
          },
          {
            tag: "Eau maison",
            title: "L'eau du robinet et la maison",
            description:
              "Qualité de l'eau potable, plomb des canalisations, filtres : le complément du sujet eau de pluie au jardin.",
            href: "/eau-maison/",
          },
          {
            tag: "Produits et habitudes",
            title: "Réduire les produits chimiques à la maison",
            description:
              "La même logique de substitution s'applique au ménage intérieur : alternatives concrètes aux produits du quotidien.",
            href: "/produits-et-habitudes/reduire-produits-chimiques-maison/",
          },
        ]}
      />
    </>
  );
}
