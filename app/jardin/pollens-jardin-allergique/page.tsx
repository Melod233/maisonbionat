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
  title: "Pollens et jardin allergique : espèces à éviter, aménagement, calendrier",
  description:
    "Aménager un jardin avec des allergies respiratoires : espèces fortement allergisantes à éviter (bouleau, cyprès, ambroisie), espèces compatibles, calendrier RNSA, mesures de protection. Source RNSA, ANSES.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/pollens-jardin-allergique/",
  },
  openGraph: {
    title: "Pollens et jardin allergique : espèces à éviter, aménagement, calendrier",
    description:
      "Bouleau, cyprès, graminées, ambroisie : choisir ses plantations en présence d'allergies respiratoires.",
    url: "https://www.maisonbionat.fr/jardin/pollens-jardin-allergique/",
  },
};

export default function PollensJardinPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Pollens et jardin allergique",
      href: "https://www.maisonbionat.fr/jardin/pollens-jardin-allergique/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Jardin"
        parentHref="/jardin/"
        tag="Allergies respiratoires et aménagement"
        title="Pollens et jardin : choisir ses plantations en présence d'allergies."
        quickAnswer="Environ 30 % de la population adulte française est sensibilisée aux pollens, selon le Réseau national de surveillance aérobiologique (RNSA). Toutes les plantes ne se valent pas : les espèces anémophiles (pollinisation par le vent) émettent des nuages de pollens très allergènes (bouleau, cyprès, frêne, graminées, ambroisie), tandis que les espèces entomophiles (pollinisation par les insectes) ont des pollens lourds et collants, peu allergisants (la majorité des plantes ornementales à fleurs colorées). Pour un jardin compatible avec des allergies, privilégier les espèces entomophiles, éviter les espèces fortement allergisantes en plantation ou les éloigner des pièces de vie, suivre le calendrier polinique RNSA pour adapter ses sorties. Présence d'ambroisie : signalement obligatoire et arrachage requis par arrêté préfectoral dans plusieurs départements. Cette page donne des repères pour aménager sans renoncer au plaisir du jardin."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "30 %", label: "des adultes sensibilisés aux pollens en France (Santé publique France)" },
          { value: "RNSA", label: "réseau qui publie le calendrier polinique hebdomadaire (pollens.fr)" },
          { value: "5/5", label: "score d'allergénicité maximal (bouleau, cyprès, ambroisie selon RNSA)" },
          { value: "Obligation", label: "de lutte contre l'ambroisie dans plusieurs départements" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Pollens et allergénicité" },
          { id: "signes", label: "Reconnaître les espèces" },
          { id: "causes", label: "Pourquoi certaines plantes posent problème" },
          { id: "actions", label: "Aménagement et protections" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Allergénicité"
        title="Tous les pollens ne sont pas équivalents"
        description="Le RNSA classe les principales espèces selon leur potentiel allergisant, sur une échelle de 1 (faible) à 5 (très élevé). Voici les grandes catégories à connaître pour aménager son jardin."
        variants={[
          {
            indicator: "Allergénicité forte (5/5)",
            name: "Bouleau, cyprès, ambroisie",
            description:
              "Bouleau (Betula) : pic de pollinisation mars-avril, allergie croisée fréquente avec pommes/noisettes (syndrome bouleau-pomme). Cyprès (Cupressus) : pic janvier-mars dans le pourtour méditerranéen. Ambroisie (Ambrosia artemisiifolia) : pic août-septembre, espèce envahissante, présence en forte progression dans la vallée du Rhône, Auvergne-Rhône-Alpes notamment. Arrachage obligatoire dans plusieurs départements par arrêté préfectoral. À ne pas planter, à signaler si découvert.",
          },
          {
            indicator: "Allergénicité élevée (4/5)",
            name: "Frêne, charme, aulne, graminées, plantain",
            description:
              "Frêne (Fraxinus) : pic mars-avril, allergie croisée avec olivier. Aulne (Alnus) : pic janvier-mars. Charme (Carpinus) : pic avril. Graminées (Poaceae, dont fléole, dactyle, ray-grass) : pic mai-juillet, l'une des allergies les plus répandues. Plantain (Plantago) : pic mai-août, parfois sous-estimé. Ces espèces sont à éviter en plantation directe en jardin avec personne allergique.",
          },
          {
            indicator: "Allergénicité modérée (3/5)",
            name: "Chêne, platane, olivier, armoise",
            description:
              "Chêne (Quercus) : pic avril-mai. Platane (Platanus) : pic mars-avril, fréquent en milieu urbain. Olivier (Olea europaea) : pic mai-juin, méditerranéen, allergie croisée avec frêne. Armoise (Artemisia vulgaris) : pic août-septembre, parfois confondue avec ambroisie. À considérer selon la sensibilité individuelle.",
          },
          {
            indicator: "Faible (1-2/5)",
            name: "Plantes entomophiles à pollinisation par insectes",
            description:
              "La majorité des plantes ornementales à fleurs colorées et parfumées : rosiers, lavandes, géraniums, vivaces de massifs, plantes méditerranéennes (sauge, thym, romarin), arbres à fleurs (lilas, magnolia, cerisier ornemental, pommier d'ornement, érable du Japon, ginkgo femelle). Pollinisation par insectes, pollens lourds et collants, très peu d'émission aérienne. Compatible avec une démarche de jardin allergique.",
          },
          {
            indicator: "Variable",
            name: "Conifères : éviter cyprès et thuyas, accepter pin et sapin",
            description:
              "Conifères très allergisants : cyprès (Cupressus), thuya (Thuja), genévrier (Juniperus). Conifères modérément ou peu allergisants : pin (Pinus) — sa pollinisation produit beaucoup de pollen visible mais peu allergisant, sapin (Abies), épicéa (Picea). En haie de cloisonnement, préférer du laurier-tin, du laurier-cerise ou des essences caduques.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Reconnaître"
        title="Identifier les espèces problématiques dans un jardin existant."
        subtitle="Avant d'agir, repérer ce qui pose réellement problème : tous les pollens ne sont pas en cause, et toutes les espèces présentes ne sont pas équivalentes."
        signs={[
          {
            label: "Symptômes saisonniers cycliques",
            description:
              "Une rhinite allergique se déclenche typiquement à dates fixes (avril pour le bouleau, mai-juin pour les graminées, août-septembre pour l'ambroisie). Le calendrier polinique du RNSA (pollens.fr) permet de croiser la période des symptômes avec les espèces pollinisant à ce moment dans votre région. Un journal de quelques semaines aide à identifier les pics.",
            severity: "léger",
          },
          {
            label: "Haies de cyprès, thuyas ou cyprès de Leyland",
            description:
              "Très répandues dans les jardins pavillonnaires français pour leur croissance rapide et leur opacité, ces haies de conifères figurent parmi les plus allergisantes en pourtour méditerranéen et zones de plantation. Si vous avez ces haies et que des allergies cycliques au printemps, leur remplacement peut être envisagé.",
            severity: "modéré",
          },
          {
            label: "Bouleau, frêne, charme en grand arbre proche de la maison",
            description:
              "Un bouleau adulte (10-20 m) émet plusieurs kilos de pollen par saison, qui retombe sur des dizaines de mètres autour. Présence en limite de jardin ou contre la façade : effet maximal sur les habitants. Réflexion sur l'élagage drastique, le remplacement à terme, ou l'éloignement.",
            severity: "modéré",
          },
          {
            label: "Pelouse semée à dominance ray-grass non tondue",
            description:
              "Une pelouse en ray-grass laissée monter en graine émet du pollen de graminées en mai-juillet. Pour personne allergique aux graminées (cas le plus fréquent), tonte fréquente avant l'épiaison limite l'émission. Voir aussi la page pelouse saine du silo jardin.",
            severity: "modéré",
          },
          {
            label: "Plantes en plein vent par rapport aux pièces de vie",
            description:
              "Une espèce allergisante située dans l'axe des vents dominants vers les fenêtres principales aggrave l'exposition. Repérer l'orientation des vents dominants locaux (souvent ouest en France) et la position des plantes problématiques aide à arbitrer.",
            severity: "léger",
          },
          {
            label: "Ambroisie présente sur le terrain",
            description:
              "Plante annuelle, 50 à 150 cm de hauteur, feuilles très découpées comme une fougère, tige rougeâtre, fleurs en grappes verdâtres août-septembre. Très envahissante. Présence à signaler à la plateforme officielle de signalement (signalement-ambroisie.fr) et à arracher avant floraison. Plusieurs préfectures ont rendu la lutte obligatoire.",
            severity: "critique",
          },
        ]}
        footerNote="Le diagnostic médical (consultation chez un allergologue) reste indispensable pour identifier précisément les allergènes. Les tests cutanés et sanguins permettent d'orienter l'aménagement du jardin sur les bonnes espèces. L'aménagement complète le traitement médical, il ne le remplace pas."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi certaines plantes posent problème en jardin."
        subtitle="Le mécanisme allergique pollinique est bien documenté. Comprendre ce qui rend une plante allergisante permet de faire les bons choix d'aménagement."
        causes={[
          {
            number: "01",
            cause: "Pollens anémophiles vs entomophiles",
            explanation:
              "Anémophiles : transportés par le vent, légers, en très grand nombre, émis sur de longues distances. Concernent surtout les arbres à fleurs discrètes (bouleau, chêne, frêne, conifères allergisants) et les graminées. Entomophiles : transportés par insectes, lourds, collants, peu nombreux, peu d'émission aérienne. Concernent les plantes à fleurs voyantes et parfumées. La différence est mécanique : le vent oblige à produire massivement, l'insecte fait l'économie quantitative.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Quelques protéines de pollen sont fortement allergisantes",
            explanation:
              "Le pollen contient des protéines reconnues comme allergènes par certaines personnes. Les protéines Bet v 1 (bouleau), Cup s 1 (cyprès), Amb a 1 (ambroisie), Phl p 5 (fléole) figurent parmi les plus fortement allergisantes au niveau européen. La sensibilisation à l'une peut entraîner des allergies croisées avec d'autres protéines apparentées (notamment pommes/noisettes avec bouleau).",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Le réchauffement climatique allonge la saison polinique",
            explanation:
              "Le RNSA documente depuis plusieurs décennies un allongement de la saison polinique (départ plus précoce, fin plus tardive) et un déplacement géographique d'espèces (montée de l'ambroisie vers le nord). Les jardins doivent désormais composer avec une exposition allergique plus longue et plus intense qu'auparavant. Aménager devient un sujet plus stratégique.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "La pollution urbaine aggrave l'allergénicité",
            explanation:
              "Des études récentes (ANSES, INSERM) montrent que la pollution atmosphérique (particules diesel notamment) augmente l'allergénicité des pollens en altérant leur surface et en facilitant la libération des protéines allergisantes. Un même pollen est plus problématique en ville qu'en zone rurale. Pour un jardin urbain, l'éloignement des sources de pollens problématiques compte d'autant plus.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "L'effet cumulatif sur la saison",
            explanation:
              "Plusieurs espèces peuvent se succéder dans le calendrier (bouleau en avril, graminées en mai-juin, ambroisie en septembre). Une personne sensibilisée à plusieurs peut connaître des symptômes 5 à 7 mois par an. L'aménagement vise à réduire la présence des espèces les plus en cause selon le profil individuel, plutôt qu'à viser le jardin sans pollen, illusoire.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Aménager et entretenir un jardin compatible avec les allergies."
        immediateLabel="Choix de plantation et entretien"
        structuralLabel="Aménagement de fond et gestes saisonniers"
        immediate={[
          {
            label: "Privilégier les plantes entomophiles à fleurs voyantes",
            description:
              "Plantes à fleurs colorées et parfumées : rosiers, lavandes, géraniums, vivaces de massif (sauges, achillées, géraniums vivaces, échinacées), arbres à floraison voyante (cerisier ornemental, magnolia, arbre de Judée, érable du Japon, ginkgo femelle). Pollinisation par insectes, sans émission aérienne significative. Compatibles avec la majorité des allergies aux pollens.",
            effort: "Choix de plantation",
          },
          {
            label: "Remplacer les haies de cyprès et thuyas",
            description:
              "Alternatives à haie persistante peu allergisante : laurier-tin (Viburnum tinus), laurier-cerise (Prunus laurocerasus), photinia, eleagnus, charmille (caduque mais haute densité). Pour zones méditerranéennes : caroubier, pittosporum. Le remplacement progressif d'une haie de 10 m peut s'étaler sur 2 à 3 ans (suppression par tronçons).",
            effort: "Investissement plantation",
          },
          {
            label: "Tondre la pelouse avant épiaison",
            description:
              "Pour les personnes allergiques aux graminées : tonte régulière (1 fois par semaine en avril-juin) pour empêcher la montée en graine et l'épiaison. Pelouse tondue à 6-8 cm avant montée en floraison reste compatible. Possible aussi : remplacer le ray-grass par espèces non graminées (mousse, trèfle, sedum) dans les zones non passantes.",
            effort: "Routine de tonte",
          },
          {
            label: "Arracher l'ambroisie si présente",
            description:
              "Identification : plante annuelle 50-150 cm, feuilles très découpées, tige souvent rougeâtre. Arrachage manuel avec gants avant floraison (avant fin juillet idéalement) : la racine est superficielle, l'arrachage est efficace. Signalement à la plateforme officielle signalement-ambroisie.fr. Plusieurs préfectures ont rendu l'élimination obligatoire.",
            effort: "Quelques heures par saison",
          },
        ]}
        structural={[
          {
            label: "Consulter le calendrier polinique RNSA",
            description:
              "Le RNSA (pollens.fr) publie hebdomadairement les niveaux de pollens par espèce et par région. Application mobile disponible. Outil de référence pour anticiper les pics et adapter les activités de jardinage (tonte, taille, arrachage à éviter pendant les pics). Service gratuit et fiable.",
            effort: "Consultation hebdomadaire",
          },
          {
            label: "Implanter les pollens à distance des fenêtres principales",
            description:
              "Si vous gardez une espèce modérément allergisante par choix esthétique, l'éloigner des fenêtres chambre et pièces de vie, et la placer plutôt en fond de jardin, sous le vent dominant. L'effet sur l'exposition est réel : la concentration en pollens diminue rapidement avec la distance.",
            effort: "Planification jardin",
          },
          {
            label: "Aérer aux bonnes heures et pollen-friendly",
            description:
              "Pendant les pics polliniques, aérer le logement plutôt aux heures fraîches (tôt le matin, tard le soir), quand la concentration est plus faible. Fenêtres fermées en pleine journée, surtout par temps sec et venteux. Filtres pollen sur ventilation mécanique (VMC double flux F7 minimum) si présent.",
            effort: "Habitude saisonnière",
          },
          {
            label: "Suivre un avis allergologique pour le diagnostic",
            description:
              "Les tests d'allergologie (cutanés, sanguins IgE spécifiques) identifient précisément les allergènes en cause. Sans ce diagnostic, l'aménagement reste approximatif. Un allergologue oriente aussi sur les traitements (antihistaminiques, désensibilisation) qui complètent l'aménagement du jardin. Bilan utile à actualiser tous les 5 à 10 ans car la sensibilisation évolue.",
            effort: "Consultation médicale",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes en jardin allergique."
        errors={[
          {
            label: "Planter un bouleau ou un cyprès pour faire vite",
            explanation:
              "Le bouleau (croissance rapide, esthétique appréciée) et le cyprès de Leyland (haie qui pousse vite) sont des choix très allergisants installés pour des décennies. Avant plantation en présence d'allergies dans le foyer, croiser le projet avec le calendrier RNSA et les profils allergiques connus. Le regret coûte cher.",
          },
          {
            label: "Confondre ambroisie et armoise",
            explanation:
              "Les deux sont allergisantes mais l'ambroisie est plus problématique et fait l'objet d'obligations légales dans plusieurs départements. L'armoise (Artemisia vulgaris) est une plante indigène européenne ancienne, l'ambroisie (Ambrosia artemisiifolia) est une plante invasive nord-américaine. Différenciation : feuille d'armoise gris-vert dessous, feuille d'ambroisie verte des deux côtés et plus découpée. Photo de comparaison disponible sur signalement-ambroisie.fr.",
          },
          {
            label: "Croire qu'un jardin sans fleurs est moins allergisant",
            explanation:
              "C'est l'inverse : les fleurs voyantes (rosiers, lavandes, géraniums) sont entomophiles et peu allergisantes, alors que les arbres à fleurs discrètes (bouleau, chêne, frêne) émettent les pollens les plus problématiques. Un jardin fleuri méditerranéen ou de plantes ornementales modernes est globalement plus compatible avec les allergies qu'un jardin paysager classique européen.",
          },
          {
            label: "Tondre la pelouse en pic pollinique",
            explanation:
              "Tondre une pelouse en pic d'émission de pollens de graminées (mai-juin) projette dans l'air une quantité importante de pollens, aggravant immédiatement les symptômes. Si tonte nécessaire : la faire à un moment où la personne allergique est absente, par temps frais et humide, et porter masque FFP2 pendant l'opération. Idéalement déléguer pendant les pics les plus intenses.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur jardin et pollens"
        items={[
          {
            question: "Faut-il abattre les arbres allergisants déjà présents ?",
            answer:
              "Pas systématiquement. Un arbre ancien (chêne, bouleau, frêne en pleine maturité) représente un patrimoine paysager et écologique réel. Avant abattage : envisager l'élagage drastique (réduit la masse polinique), l'éloignement des pièces de vie par l'aménagement, le filtrage à l'intérieur (VMC double flux F7), les traitements médicaux. L'abattage reste une option de dernier recours, à mettre en regard du bénéfice attendu.",
          },
          {
            question: "Les jardins urbains sont-ils particulièrement à risque ?",
            answer:
              "Plus à risque sur deux plans : la concentration des espèces allergisantes plantées massivement (platanes, bouleaux, cyprès en alignement urbain) et la pollution atmosphérique qui aggrave l'allergénicité. Un jardin urbain individuel peut néanmoins être très bien aménagé : les choix individuels comptent et l'effet est mesurable sur le périmètre proche. Le contexte municipal (alignements de rue) compte aussi.",
          },
          {
            question: "Un détecteur ou capteur de pollen à la maison, est-ce utile ?",
            answer:
              "Pour l'instant, les capteurs de pollen domestiques fiables restent rares et chers. Le service public RNSA (pollens.fr) avec ses bulletins hebdomadaires régionaux reste la source de référence pour anticiper. Un suivi médical individuel avec journal des symptômes est complémentaire et plus actionnable. Les purificateurs d'air à filtration HEPA H13 réduisent les pollens intérieurs sans détecter.",
          },
          {
            question: "Mes enfants peuvent-ils jouer dans le jardin en saison polinique ?",
            answer:
              "Oui, en adaptant selon la sensibilité. Pour enfant allergique connu, suivre les recommandations de l'allergologue : antihistaminique préventif si prescrit, éviter les pics horaires (10h-14h et 17h-22h les jours secs et venteux), douche et changement de vêtements après jeu prolongé dehors pour éviter de ramener pollens dans la maison. Le jardin reste bénéfique pour les enfants, l'enjeu est l'organisation.",
          },
          {
            question: "L'ambroisie chez le voisin, que faire ?",
            answer:
              "Dans les départements où la lutte est obligatoire (arrêté préfectoral), le voisin a obligation de l'éliminer. En cas de refus : signalement à la mairie ou à l'ARS via la plateforme signalement-ambroisie.fr. Dans les autres départements, démarche amiable d'information du voisin, avec photos et documentation officielle. La proximité d'un foyer d'ambroisie chez un voisin a un impact direct sur l'exposition.",
          },
          {
            question: "Les chiens et chats ramènent-ils du pollen dans la maison ?",
            answer:
              "Oui, le pelage des animaux qui sortent capte des pollens et les rapporte à l'intérieur. En période de pic, brossage régulier à l'extérieur avant rentrée, lavage périodique du pelage. Les animaux eux-mêmes peuvent être allergiques aux pollens (chien notamment) ; consulter un vétérinaire en cas de symptômes saisonniers chez l'animal.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Jardin",
            title: "Le silo jardin sain",
            description:
              "Sol vivant, eau de pluie, biodéchets, équipements durables : la vue d'ensemble du jardin sain.",
            href: "/jardin/",
          },
          {
            tag: "Jardin",
            title: "Pelouse saine et tonte raisonnée",
            description:
              "Hauteur de coupe, fréquence, pelouse fleurie : la gestion de la pelouse en lien avec pollens de graminées.",
            href: "/jardin/pelouse-saine-tonte-raisonnee/",
          },
          {
            tag: "Maison & famille",
            title: "Asthme de l'enfant à la maison",
            description:
              "Acariens, moisissures, pollens : les sujets qui se croisent pour les enfants asthmatiques ou allergiques.",
            href: "/maison-saine-famille/asthme-enfant-maison/",
          },
        ]}
      />
    </>
  );
}
