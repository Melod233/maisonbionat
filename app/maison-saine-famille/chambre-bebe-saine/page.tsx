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
  title: "Préparer une chambre bébé plus saine : matériaux, literie, air intérieur",
  description:
    "Peintures, meubles, literie, aération : préparer la chambre de bébé demande des décisions qui se prennent semaines avant la naissance. Un guide complet pour agir dans le bon ordre.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/chambre-bebe-saine/",
  },
  openGraph: {
    title: "Préparer une chambre bébé plus saine : matériaux, literie, air intérieur",
    description:
      "Peintures, meubles, literie, aération : préparer la chambre de bébé demande des décisions qui se prennent semaines avant la naissance. Un guide complet pour agir dans le bon ordre.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/chambre-bebe-saine/",
  },
};

export default function PreparerChambreBebePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison saine famille", href: "/maison-saine-famille/" },
    { name: "Préparer une chambre bébé plus saine : matériaux, literie, air intérieur", href: "https://www.maisonbionat.fr/maison-saine-famille/chambre-bebe-saine/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Maison saine famille"
        parentHref="/maison-saine-famille/"
        tag="Chambre bébé"
        title="Préparer une chambre bébé plus saine. Par où commencer et dans quel ordre."
        quickAnswer="La qualité de l'air d'une chambre bébé dépend de décisions prises plusieurs semaines avant la naissance. Peintures, meubles, literie : chaque choix a une fenêtre d'action optimale. Ce guide vous aide à les identifier, dans l'ordre qui compte."
        quickAnswerLabel="Dans votre situation"
        stats={[
          { value: "8–12h", label: "d'exposition quotidienne dans la chambre" },
          { value: "×2", label: "volume respiratoire bébé vs adulte" },
          { value: "A+", label: "label minimum pour toute finition intérieure" },
          { value: "6–8 sem.", label: "délai de dégazage avant occupation" },
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
        sectionLabel="Ce qui change pour une chambre bébé"
        title="Trois raisons pour lesquelles cette pièce demande plus d'attention."
        cards={[
          {
            number: "01",
            badge: "Physiologie",
            title: "Un bébé respire deux fois plus qu'un adulte proportionnellement.",
            description:
              "Un nourrisson respire 30 à 60 fois par minute, contre 15 chez l'adulte. Ses poumons en développement filtrent moins efficacement les polluants. Ce que la chambre contient dans l'air sera absorbé à une dose bien supérieure à celle d'un adulte dans la même pièce.",
          },
          {
            number: "02",
            badge: "Durée d'exposition",
            title: "10 à 12 heures par jour dans cette seule pièce.",
            description:
              "Les nourrissons dorment 10 à 12 heures, les jeunes enfants entre 8 et 10 heures. L'exposition cumulée sur l'année est sans commune mesure avec n'importe quelle autre pièce du logement. Ce qui est tolérable dans un salon l'est moins dans un espace de sommeil d'un enfant.",
          },
          {
            number: "03",
            badge: "Temporalité",
            title: "Les décisions clés se prennent avant la naissance.",
            description:
              "Les matériaux neufs (peintures, meubles en panneaux) dégazent le plus dans les premières semaines. Si la chambre est préparée juste avant l'arrivée du bébé, les pics d'émission de COV coïncident exactement avec son occupation. La fenêtre d'action optimale est le début du 3e trimestre.",
          },
        ]}
      />

      <SituationPriorities
        id="priorites"
        sectionLabel="Dans quel ordre agir"
        title="Ce qu'il faut faire, quand il faut le faire."
        subtitle="Les six étapes classées par impact et par moment d'action."
        priorities={[
          {
            number: "01",
            title: "Peindre et installer les meubles le plus tôt possible",
            description:
              "Les pics d'émission de COV sont dans les 48 à 72 premières heures après application d'une peinture, et dans les premières semaines pour les meubles en panneaux. Préparer la chambre au début du 3e trimestre permet un délai de dégazage de 6 à 8 semaines avant l'arrivée du bébé.",
            timing: "en-premier",
          },
          {
            number: "02",
            title: "Choisir des finitions labellisées A+ pour peintures, sol et colles",
            description:
              "L'étiquetage COV (A+/A/B/C) est obligatoire depuis 2013 sur tous les produits de revêtement. Le label A+ correspond à des émissions très faibles mesurées à 28 jours. C'est le minimum non négociable pour une chambre d'enfant. Pour les colles de sol, chercher le label EC1 (sans solvant).",
            timing: "en-premier",
          },
          {
            number: "03",
            title: "Aérer intensivement entre la pose et l'occupation",
            description:
              "Fenêtres ouvertes plusieurs heures par jour pendant 6 à 8 semaines. Le dégazage ne s'arrête pas après le séchage : il se poursuit plusieurs semaines selon les matériaux. Une peinture A+ bien aérée émet peu ; la même peinture dans une pièce fermée émet davantage.",
            timing: "en-premier",
          },
          {
            number: "04",
            title: "Choisir la literie avec la certification OEKO-TEX Standard 100",
            description:
              "Le matelas est le point de contact principal pendant 10 heures par nuit. Chercher le label OEKO-TEX Standard 100 : chaque composant (tissu, mousse, colle, fermeture) est testé pour l'absence de substances nocives. Matelas semi-ferme obligatoire pour les nourrissons. Protège-matelas respirant, sans PVC.",
            timing: "ensuite",
          },
          {
            number: "05",
            title: "Contrôler l'hygrométrie entre 40 et 55 %",
            description:
              "En dessous de 40 % : muqueuses irritées, eczéma aggravé. Au-dessus de 60 % : développement des acariens et risque de moisissures. Un hygromètre simple (10 à 20 €) suffit à surveiller. Corriger avec un humidificateur ou en aérant plus selon le sens de la dérive.",
            timing: "ensuite",
          },
          {
            number: "06",
            title: "Mettre en place les gestes d'entretien réguliers",
            description:
              "Linge à 60°C minimum chaque semaine (draps, taies, housse de couette). Aspiration avec filtre HEPA chaque semaine. Aération matin et soir 10 minutes. Ces gestes limitent les acariens sur la durée et compensent l'inévitable accumulation de poussières.",
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
            label: "Commencer les travaux au début du 7e ou 8e mois de grossesse",
            detail:
              "Si vous prévoyez une rénovation ou la pose de sol, chaque semaine gagnée en amont est une semaine de dégazage supplémentaire. Attendre le dernier mois est la première erreur.",
          },
          {
            label: "La future maman ne réalise pas les travaux elle-même",
            detail:
              "Les COV traversent la barrière placentaire. Peindre, poser un sol ou assembler des meubles en aggloméré expose directement le foetus. Confier ces tâches à quelqu'un d'autre.",
          },
          {
            label: "Peintures et sol : à choisir et poser avant tout autre aménagement",
            detail:
              "Pour maximiser le délai de dégazage, ces interventions doivent précéder l'installation des meubles et accessoires. Pas l'inverse.",
          },
          {
            label: "Literie certifiée : à sélectionner avant la naissance",
            detail:
              "Le matelas, le protège-matelas et les draps doivent être choisis en amont, pas dans la précipitation de la première semaine. La certification OEKO-TEX Standard 100 est le critère à vérifier.",
          },
        ]}
        defer={[
          {
            label: "La décoration",
            detail:
              "Stickers, cadres, petits objets décoratifs : leur impact sur la qualité de l'air est marginal. Ils peuvent être installés à tout moment, sans urgence.",
          },
          {
            label: "Les rideaux occultants",
            detail:
              "Utiles pour le sommeil diurne, mais leur impact sur l'air est faible s'ils sont certifiés OEKO-TEX. Peuvent être ajoutés après l'installation.",
          },
          {
            label: "Un purificateur d'air",
            detail:
              "Utile pour les familles avec allergies ou enfants asthmatiques, mais non indispensable si la VMC fonctionne et que l'aération est régulière. Ce n'est pas une priorité de départ.",
          },
          {
            label: "Les peluches et jouets en excès",
            detail:
              "Pas d'urgence à décider du nombre de peluches avant l'arrivée. En revanche, une fois installé, ne pas encombrer le lit : risque de suffocation et réservoir d'acariens.",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs les plus fréquentes avant l'arrivée de bébé."
        errors={[
          {
            label: "Préparer la chambre dans les dernières semaines de grossesse",
            explanation:
              "Peindre ou installer des meubles neufs 10 jours avant la naissance revient à placer bébé dans la chambre pendant les pics d'émission. Le dégazage nécessite 6 à 8 semaines d'aération intensive. Planifier au début du 3e trimestre.",
          },
          {
            label: "Choisir des meubles en aggloméré sans vérifier la norme",
            explanation:
              "Les panneaux de particules et MDF utilisent des colles à base d'urée-formaldéhyde. Le seuil E1 (minimum légal) autorise des émissions bien au-dessus des recommandations ANSES (10 µg/m³). Préférer le bois massif, la seconde main ou les panneaux E0/CARB Phase 2.",
          },
          {
            label: "Diffuser des huiles essentielles pour 'purifier' l'air de la chambre",
            explanation:
              "L'ANSES déconseille les huiles essentielles par diffusion en présence d'enfants de moins de 3 ans. Elles contiennent des COV naturels qui irritent les voies respiratoires des nourrissons. Aucun effet de dépollution documenté.",
          },
          {
            label: "Fermer hermétiquement la chambre pour protéger du froid",
            explanation:
              "Une chambre fermée accumule CO₂, vapeur d'eau et polluants. Une aération de 10 minutes matin et soir reste indispensable même en hiver. La température recommandée pour une chambre de nourrisson est 18 à 20°C, pas une pièce étouffante.",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="S'organiser dans le temps."
        immediateLabel="Avant la naissance"
        structuralLabel="Après l'installation"
        immediate={[
          {
            label: "Poser les peintures A+ au moins 6 semaines avant la naissance",
            description:
              "Aérer plusieurs heures par jour pendant toute la durée. L'odeur perceptible disparaît en 1 à 3 jours, mais les émissions se poursuivent 4 à 6 semaines.",
            effort: "À anticiper dès le 7e mois",
          },
          {
            label: "Assembler les meubles neufs dans une autre pièce d'abord",
            description:
              "Garage, pièce libre : 2 à 4 semaines de dégazage dans un espace ventilé avant installation dans la chambre. Surtout pour les panneaux agglomérés et MDF.",
            effort: "Organisation",
          },
          {
            label: "Acheter la literie certifiée OEKO-TEX Standard 100",
            description:
              "Matelas semi-ferme, protège-matelas respirant sans PVC, draps en coton certifié. Le label est vérifiable sur l'étiquette ou en ligne avec le numéro de certification.",
            effort: "Choix à faire en amont",
          },
          {
            label: "Vérifier et nettoyer la bouche VMC de la chambre",
            description:
              "La ventilation doit être propre et débiter normalement avant l'arrivée du bébé. Un encrassement peut faire de la VMC une source d'odeurs ou d'allergènes.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Aérer 10 minutes matin et soir, tous les jours",
            description:
              "Geste quotidien. En hiver, 5 minutes fenêtre en grand vaut mieux que 30 minutes fenêtre entrouverte. La chambre ne doit jamais rester confinée plus de 24 heures.",
            effort: "Gratuit",
          },
          {
            label: "Laver le linge à 60°C chaque semaine",
            description:
              "Draps, taies, housse de couette. C'est la seule température efficace contre les acariens. En dessous de 60°C, les acariens survivent.",
            effort: "Hebdomadaire",
          },
          {
            label: "Aspirer avec un aspirateur à filtre HEPA",
            description:
              "Sol, tapis, zones sous les meubles. Les enfants respirent plus près du sol que les adultes : ils sont au plus près des allergènes accumulés.",
            effort: "Hebdomadaire",
          },
          {
            label: "Surveiller l'hygrométrie avec un hygromètre placé dans la chambre",
            description:
              "Cible : 40 à 55 %. Si dépassement régulier de 60 %, investiguer la source d'humidité. Si inférieur à 40 % en hiver, humidificateur simple.",
            effort: "10–20 €",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions",
            description:
              "Comprendre l'étiquetage A+/A/B/C et faire les bons choix pour chaque type de matériau, de la peinture aux meubles.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Air intérieur",
            title: "Air intérieur pollué",
            description:
              "Comprendre les familles de polluants présents dans l'air intérieur et les sources les plus importantes à traiter.",
            href: "/air-interieur/air-interieur-pollue/",
          },
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "Humidité et moisissures dans la chambre d'enfant : identifier les signaux et agir avant que le problème s'installe.",
            href: "/humidite-maison/moisissures-maison/",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la chambre bébé"
        items={[
          {
            question: "La future maman peut-elle être présente pendant les travaux de peinture ?",
            answer:
              "Non. Les COV émis lors de la peinture et de la pose de revêtements traversent la barrière placentaire et peuvent atteindre le foetus. La femme enceinte ne doit pas être présente pendant les travaux ni dans les heures qui suivent l'application. Confier les travaux à une autre personne, et ne réintégrer la pièce qu'après une aération de plusieurs heures.",
          },
          {
            question: "Combien de temps laisser dégazer une peinture A+ avant de mettre bébé dans la chambre ?",
            answer:
              "Une peinture A+ émet peu, mais pas zéro. L'odeur perceptible disparaît en 1 à 3 jours avec une bonne aération, mais les émissions de COV se poursuivent pendant 4 à 6 semaines. Pour une chambre de bébé, appliquer la peinture au moins 6 semaines avant l'arrivée, avec une aération intensive (plusieurs heures par jour) pendant toute cette période.",
          },
          {
            question: "Vaut-il mieux un purificateur d'air ou une bonne VMC dans la chambre ?",
            answer:
              "La VMC est prioritaire : elle assure un renouvellement continu de l'air, 24h/24, et évacue les polluants. Un purificateur HEPA est un complément utile pour les familles avec enfants allergiques aux acariens ou aux pollens, mais il ne remplace pas la ventilation. Si la VMC fonctionne correctement et que vous aérez régulièrement, un purificateur n'est pas indispensable.",
          },
          {
            question: "Peut-on utiliser des meubles de seconde main pour la chambre de bébé ?",
            answer:
              "Oui, c'est souvent la meilleure option. Les émissions de formaldéhyde des meubles en aggloméré ou MDF chutent drastiquement après 2 à 3 ans : un meuble d'occasion de 5 ans n'émet quasiment plus rien. Vérifiez qu'il ne présente pas de moisissures ou de dommages structurels, nettoyez-le soigneusement, et il est plus sain qu'un meuble neuf bon marché.",
          },
        ]}
      />
    </>
  );
}
