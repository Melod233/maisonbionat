import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import RoomPriorities from "@/components/room/RoomPriorities";
import RoomChecklist from "@/components/room/RoomChecklist";
import RoomImpact from "@/components/room/RoomImpact";
import RoomActionsGrid from "@/components/room/RoomActionsGrid";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Chambre d'enfant plus saine : priorités, matériaux et erreurs à éviter",
  description:
    "Les enfants ont un volume respiratoire deux fois supérieur aux adultes et dorment plus longtemps. La chambre d'enfant est la première pièce à traiter : voici comment.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/chambre-enfant-saine/",
  },
  openGraph: {
    title: "Chambre d'enfant plus saine : priorités, matériaux et erreurs à éviter",
    description:
      "Les enfants ont un volume respiratoire deux fois supérieur aux adultes et dorment plus longtemps. La chambre d'enfant est la première pièce à traiter : voici comment.",
    url: "https://www.maisonbionat.fr/piece-par-piece/chambre-enfant-saine/",
  },
};

export default function ChambreEnfantPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    { name: "Chambre d'enfant plus saine : priorités, matériaux et erreurs à éviter", href: "https://www.maisonbionat.fr/piece-par-piece/chambre-enfant-saine/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Pièce par pièce"
        parentHref="/piece-par-piece/"
        tag="Chambre d'enfant"
        title="L'espace où vos enfants respirent le plus. À traiter en premier."
        quickAnswer="Les enfants ont un volume respiratoire environ deux fois supérieur aux adultes proportionnellement à leur masse. Ils dorment 10 à 12 heures. Ce qu'on tolère dans un couloir est inacceptable dans leur chambre."
        stats={[
          { value: "×2", label: "volume respiratoire vs adulte" },
          { value: "10–12h", label: "de sommeil par nuit" },
          { value: "6–8 sem.", label: "délai de dégazage après travaux" },
          { value: "A+", label: "label minimum pour toute finition" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités de la chambre d'enfant"
        priorities={[
          {
            number: "01",
            action: "Préparer la chambre bien avant l'arrivée de l'enfant",
            description:
              "Peintures, sols, meubles neufs : toute installation doit précéder d'au moins 6 à 8 semaines l'occupation de la pièce. Les émissions de COV sont maximales les premières semaines ; le dégazage doit être terminé avant que l'enfant n'y dorme.",
            impact: "critique",
          },
          {
            number: "02",
            action: "Maintenir une ventilation efficace en permanence",
            description:
              "Vérifiez que la bouche VMC de la chambre n'est pas obstruée. Aérez matin et soir 10 minutes minimum, y compris en hiver. La chambre d'enfant ne doit jamais rester confinée : les polluants s'y accumulent plus vite qu'ailleurs.",
            impact: "critique",
          },
          {
            number: "03",
            action: "Contrôler l'hygrométrie entre 40 et 55 %",
            description:
              "Les moisissures et acariens favorisés par un taux > 60 % représentent un risque accru de pathologies respiratoires chez l'enfant. Un hygromètre dans la chambre permet de surveiller sans approximation.",
            impact: "fort",
          },
          {
            number: "04",
            action: "Supprimer tous les produits parfumés de la chambre",
            description:
              "Huiles essentielles, bougies, diffuseurs parfumés : déconseillés en présence d'enfants de moins de 3 ans (ANSES) et potentiellement irritants à tout âge pour les asthmatiques. La chambre d'enfant n'a pas besoin de parfum.",
            impact: "fort",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier dans la chambre d'enfant"
        subtitle="Contrôle plus rigoureux qu'en chambre adulte : la vulnérabilité est plus élevée."
        items={[
          {
            label: "Aérer matin et soir",
            detail: "10 min minimum. En hiver, fenêtre en grand 5 min vaut mieux que fenêtre entrouverte 30 min.",
            frequency: "quotidien",
          },
          {
            label: "Ne pas diffuser de produits parfumés",
            detail: "Bougies, huiles essentielles, sprays : à bannir de la chambre d'enfant.",
            frequency: "quotidien",
          },
          {
            label: "Laver la literie à 60°C",
            detail: "Draps, taies, housse de couette. Unique température efficace contre les acariens.",
            frequency: "hebdo",
          },
          {
            label: "Vérifier l'absence de moisissures dans les angles et derrière les meubles",
            detail: "Angles bas, coin fenêtre, derrière les meubles proches des murs extérieurs.",
            frequency: "mensuel",
          },
          {
            label: "Mesurer le taux d'humidité",
            detail: "Cible : 40–55 %. Au-dessus de 60 %, agissez sur la ventilation.",
            frequency: "mensuel",
          },
          {
            label: "Contrôler la bouche VMC",
            detail: "Propre, non obstruée, débit perceptible à la main.",
            frequency: "mensuel",
          },
          {
            label: "Aspirer moquettes, tapis et zones sous les meubles",
            detail: "Filtre HEPA recommandé. Les enfants jouent au sol : ils sont au plus près des allergènes.",
            frequency: "hebdo",
          },
          {
            label: "Laisser dégazer les meubles neufs avant installation",
            detail: "6 à 8 semaines dans un espace ventilé pour les panneaux agglomérés ou MDF.",
            frequency: "ponctuel",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce qui pèse le plus dans la chambre d'enfant"
        factors={[
          {
            rank: "01",
            factor: "Vulnérabilité physiologique",
            statement: "Deux fois plus d'air respiré, deux fois plus d'exposition.",
            detail:
              "Le volume respiratoire d'un enfant est environ deux fois supérieur à celui d'un adulte proportionnellement à sa masse (source : ANSES). Un nourrisson respire 30 à 60 fois par minute. Ce qui est tolérable pour un adulte ne l'est pas nécessairement pour un enfant.",
            weight: "élevé",
          },
          {
            rank: "02",
            factor: "Durée de présence",
            statement: "10 à 12 heures par jour, dont le sommeil.",
            detail:
              "Les enfants passent une part bien plus importante de leur vie dans leur chambre que les adultes. L'exposition aux polluants y est donc structurellement plus longue. C'est la première pièce à optimiser avant toute autre.",
            weight: "élevé",
          },
          {
            rank: "03",
            factor: "COV post-rénovation",
            statement: "Les émissions sont maximales les premières semaines.",
            detail:
              "Une peinture appliquée récemment, un meuble neuf en aggloméré, un sol vinylique posé il y a moins de 6 mois : dans une chambre fermée pendant 10 heures, les concentrations en COV peuvent dépasser significativement les recommandations.",
            weight: "modéré",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Aérer systématiquement matin et soir",
            description: "10 minutes en créant un courant d'air. Le geste le plus simple et le plus efficace pour la chambre d'enfant.",
            effort: "Gratuit",
          },
          {
            label: "Retirer les peluches en excès",
            description: "Les peluches sont des réservoirs d'acariens. Conservez-en 2 à 3 et lavez-les à 60°C régulièrement. Les autres dans un coffre fermé.",
            effort: "Gratuit",
          },
          {
            label: "Supprimer parfums d'ambiance et bougies de la chambre",
            description: "Même les produits 'naturels' peuvent être irritants. La chambre d'enfant n'a pas besoin de parfum.",
            effort: "Gratuit",
          },
          {
            label: "Surveiller hygrométrie avec un hygromètre",
            description: "Placez un hygromètre visible dans la chambre. Viser 40–55 %. C'est votre indicateur de base.",
            effort: "10–20€",
          },
        ]}
        deep={[
          {
            label: "Housses anti-acariens certifiées",
            description: "Matelas, oreillers, couette : les trois zones prioritaires. Cherchez des housses certifiées anti-acariens (maille < 10 microns), sans PVC ni traitements chimiques.",
            effort: "40–100€",
          },
          {
            label: "Sol dur à la place de la moquette",
            description: "La moquette retient 10 fois plus d'allergènes qu'un sol dur et est difficile à décontaminer des acariens. Si rénovation, préférez parquet huilé (A+) ou carrelage.",
            effort: "Lors d'une rénovation",
          },
          {
            label: "Planifier travaux et dégazage avant occupation",
            description: "Toute peinture, pose de sol ou installation de meubles doit précéder d'au moins 6 à 8 semaines l'utilisation de la chambre par l'enfant, avec aération intensive chaque jour.",
            effort: "Organisation",
          },
          {
            label: "Thermomètre-hygromètre avec alarme",
            description: "Certains modèles alertent si l'humidité dépasse 60 %. Pratique pour surveiller la nuit sans y penser.",
            effort: "20–40€",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs les plus fréquentes"
        errors={[
          {
            label: "Rénover la chambre juste avant la naissance",
            explanation:
              "Peindre ou installer des meubles neufs quelques jours avant l'arrivée d'un bébé est l'erreur la plus fréquente. Le dégazage nécessite 6 à 8 semaines d'aération intensive. Planifiez les travaux au début de la grossesse, pas à la fin.",
          },
          {
            label: "Diffuser des huiles essentielles pour 'purifier' l'air",
            explanation:
              "Les huiles essentielles sont des COV naturels. L'ANSES déconseille leur utilisation par diffusion en présence d'enfants de moins de 3 ans. Pour les enfants plus âgés, certaines variétés sont irritantes chez les asthmatiques. Elles n'ont aucun effet de dépollution documenté.",
          },
          {
            label: "Croire qu'un logement neuf est plus sain",
            explanation:
              "Un logement neuf contient davantage de matériaux récents qui n'ont pas encore dégazé. Les concentrations en formaldéhyde et COV sont souvent plus élevées dans les premières années. La ventilation intensive est encore plus importante dans un logement neuf.",
          },
          {
            label: "Fermer la chambre hermétiquement pour que l'enfant n'ait pas froid",
            explanation:
              "Une chambre fermée accumule CO₂, humidité et polluants. Laisser la porte entrouverte (si le logement est ventilé) ou aérer même brièvement reste indispensable, même en hiver.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la chambre d'enfant"
        items={[
          {
            question: "À quel âge un enfant est-il moins vulnérable aux polluants intérieurs ?",
            answer:
              "La vulnérabilité est maximale pendant les 3 premières années de vie. Elle reste supérieure à celle des adultes jusqu'à la fin de la croissance pulmonaire (vers 20 ans). Plus un enfant est jeune, plus les précautions sur l'air intérieur de sa chambre sont importantes.",
          },
          {
            question: "Peut-on mettre des plantes dans la chambre d'un enfant ?",
            answer:
              "Les plantes n'ont pas d'effet de dépollution mesurable à l'échelle d'une chambre. En revanche, elles peuvent ajouter de l'humidité (si arrosées excessivement), attirer des insectes ou libérer des pollens. Les plantes sont neutres à faiblement bénéfiques ; elles ne remplacent pas la ventilation.",
          },
          {
            question: "Quelle hygrométrie viser dans la chambre de bébé ?",
            answer:
              "Entre 40 et 55 %. Une hygrométrie trop haute (> 60 %) favorise les moisissures et les acariens, dont les allergènes sont associés au développement de l'asthme chez l'enfant. Trop sèche (< 40 %), l'air irrite les voies respiratoires, ce qui est problématique chez un nourrisson.",
          },
          {
            question: "Un purificateur d'air vaut-il vraiment dans une chambre d'enfant ?",
            answer:
              "Un purificateur HEPA peut réduire les allergènes en suspension (acariens, pollens) dans la chambre, ce qui peut aider les enfants allergiques. Il ne remplace pas la ventilation ni ne traite les COV gazeux. C'est un complément utile si l'enfant souffre d'allergies, pas une solution de base.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Maison saine famille",
            title: "Préparer la chambre bébé",
            description: "Travaux, matériaux, literie, dégazage : le guide complet pour préparer l'espace d'un nourrisson.",
            href: "/maison-saine-famille/",
          },
          {
            tag: "Matériaux sains",
            title: "Matériaux A+ pour la chambre d'enfant",
            description: "Peintures, sols, meubles : comprendre l'étiquetage et faire les bons choix pour l'espace de sommeil.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Humidité maison",
            title: "Humidité et moisissures dans la chambre",
            description: "L'hygrométrie de la chambre d'enfant est un indicateur de santé. Comprendre, mesurer et agir.",
            href: "/humidite-maison/",
          },
        ]}
      />
    </>
  );
}
