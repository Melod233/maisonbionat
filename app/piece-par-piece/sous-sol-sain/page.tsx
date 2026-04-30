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
  title: "Sous-sol sain : humidité, radon, ventilation et qualité de l'air",
  description:
    "Cave, sous-sol enterré, vide sanitaire : maîtriser l'humidité, le radon et la pollution remontant vers les pièces de vie au-dessus. Diagnostic et solutions concrètes.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/sous-sol-sain/",
  },
  openGraph: {
    title: "Sous-sol sain : humidité, radon, ventilation et qualité de l'air",
    description:
      "Cave, sous-sol enterré, vide sanitaire : maîtriser l'humidité, le radon et la pollution remontant vers les pièces de vie au-dessus. Diagnostic et solutions concrètes.",
    url: "https://www.maisonbionat.fr/piece-par-piece/sous-sol-sain/",
  },
};

const faqItems = [
  {
    question: "Pourquoi le sous-sol joue un rôle pour la qualité de l'air des pièces de vie ?",
    answer:
      "Le sous-sol est en contact direct avec le sol et concentre par défaut l'humidité, le radon (gaz radioactif naturel issu du sous-sol), parfois des moisissures et des polluants stockés (peintures, solvants, carburants). Or l'air d'un logement n'est jamais hermétique : par tirage thermique, par les escaliers non fermés, par les passages de canalisations et les gaines techniques, l'air du sous-sol remonte vers le rez-de-chaussée, surtout en hiver quand le chauffage crée une dépression dans les pièces de vie. Un sous-sol mal géré contamine donc tout le logement, même si on n'y descend jamais.",
  },
  {
    question: "Faut-il mesurer le radon dans son sous-sol ?",
    answer:
      "Oui dès lors que la commune est en zone 2 ou 3 du zonage IRSN/ASNR (à vérifier sur Géorisques) et qu'on a une cave, un sous-sol semi-enterré ou un vide sanitaire en contact direct avec le sol. La mesure se fait avec un dosimètre passif (25 à 50 €), posé pendant au moins deux mois en période de chauffe (septembre-avril), idéalement dans la pièce du logement la plus proche du sous-sol (rez-de-chaussée). Au-dessus de 300 Bq/m³ (référence française), des actions correctives s'imposent : ventilation du soubassement, étanchéité des points de pénétration, voire mise en dépression du sous-sol.",
  },
  {
    question: "Comment ventiler un sous-sol qui n'a pas de fenêtre ?",
    answer:
      "Trois options, à hiérarchiser selon la configuration. 1) Ventilation naturelle par ouverture (soupiraux, grilles d'aération haute et basse pour créer un tirage), à privilégier si le sous-sol n'est pas chauffé. 2) Ventilation mécanique dédiée (extracteur en gaine vers l'extérieur, 80 à 200 €, fonctionnement permanent ou temporisé) qui maintient un renouvellement d'air minimal. 3) Mise en dépression du soubassement (système SSD), traitement spécifique pour les cas de radon élevé, qui aspire l'air du sous-sol vers l'extérieur en permanence. La ventilation du sous-sol doit toujours s'accompagner d'un soin sur l'étanchéité entre sous-sol et logement (porte d'accès jointive, gaines colmatées).",
  },
  {
    question: "Peut-on aménager un sous-sol en pièce de vie ?",
    answer:
      "C'est possible mais demande des précautions importantes. Mesurer le radon avant et après aménagement. Étancher les murs et le sol (cuvelage si nécessaire pour les sous-sols en contact direct avec un terrain humide). Installer une ventilation mécanique dédiée (idéalement double flux pour gérer humidité et apport d'air). Maintenir une température stable (16-18 °C minimum) pour éviter la condensation. Aménager des accès lumineux (puits de lumière, soupiraux agrandis). Le poste le plus souvent oublié reste l'isolation thermique des murs enterrés, qui conditionne le confort hygrométrique. Faire valider la conformité par un professionnel avant de transformer le sous-sol en chambre, bureau ou salle de jeux.",
  },
];

export default function SousSolSainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    {
      name: "Sous-sol sain",
      href: "https://www.maisonbionat.fr/piece-par-piece/sous-sol-sain/",
    },
  ]);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroIssue
        parentLabel="Pièce par pièce"
        parentHref="/piece-par-piece/"
        tag="Sous-sol et soubassement"
        title="Sous-sol sain : humidité, radon et impact sur l'air des pièces du dessus"
        quickAnswer="Le sous-sol (cave, sous-sol enterré, vide sanitaire) est l'interface directe entre le logement et le sol naturel. C'est par lui que migrent l'humidité du terrain, le radon (deuxième cause de cancer du poumon en France après le tabac selon l'IRSN), parfois des polluants stockés (peintures, carburants, produits ménagers) et des moisissures qui prolifèrent dans les ambiances froides et humides. Par tirage thermique en hiver, l'air du sous-sol remonte vers les pièces de vie : un sous-sol mal géré contamine tout le logement, même quand il n'est jamais utilisé. Trois leviers sont prioritaires : étanchéité du sous-sol vis-à-vis du sol, ventilation mécanique ou naturelle adaptée, et étanchéité entre sous-sol et logement (porte, gaines, escalier). En zone 2 ou 3 du zonage radon, la mesure par dosimètre est fortement recommandée."
        stats={[
          {
            value: "300 Bq/m³",
            label: "niveau de référence radon en France (arrêté 27 juin 2018)",
          },
          {
            value: "Zone 1/2/3",
            label: "zonage du potentiel radon par commune (IRSN/ASNR, consultable sur Géorisques)",
          },
          {
            value: "60-65 %",
            label: "humidité relative moyenne typique d'une cave non traitée en saison froide",
          },
          {
            value: "16-18 °C",
            label: "température minimale recommandée pour éviter la condensation chronique",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le rôle du sous-sol" },
          { id: "signes", label: "Reconnaître les problèmes" },
          { id: "causes", label: "Sources de pollution" },
          { id: "actions", label: "Diagnostic et travaux" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi un sous-sol pèse sur la qualité de l'air de toute la maison."
        description="Le sous-sol cumule plusieurs caractéristiques qui en font un point sensible : contact direct avec le sol naturel, température basse et stable (10-15 °C en moyenne), faible ventilation par défaut, stockage de produits divers, et liaison aérée avec le rez-de-chaussée par les escaliers, gaines et trappes. L'air d'une maison ne reste pas confiné à chaque étage : par effet de tirage thermique, l'air chaud monte dans les pièces de vie en hiver, ce qui crée une dépression qui aspire l'air du sous-sol vers le haut. Un sous-sol contaminé alimente donc en continu les pièces du dessus, que ses occupants y descendent ou non."
        variants={[
          {
            indicator: "Cave non aménagée",
            name: "Volume de stockage froid et humide",
            description:
              "Configuration la plus fréquente : cave enterrée, sol béton ou terre battue, murs en pierre ou parpaing, peu ou pas de ventilation. Sert au stockage du vin, des outils, des produits ménagers, parfois de la chaudière. Humidité 60-80 % en saison froide, température 10-12 °C. Risque dominant : moisissures et radon en zone à potentiel.",
          },
          {
            indicator: "Sous-sol semi-enterré",
            name: "Espace utilitaire ou aménagé",
            description:
              "Sous-sol partiellement hors sol avec soupiraux, garage intégré, atelier, buanderie. Ventilation parfois meilleure (par les soupiraux), mais aussi plus de sources internes (véhicule, produits chimiques, bricolage). En zone radon, le confort thermique encourage à fermer les soupiraux en hiver, ce qui pénalise la ventilation au pire moment.",
          },
          {
            indicator: "Vide sanitaire",
            name: "Espace technique sous dalle",
            description:
              "Hauteur 30 à 80 cm, sol naturel en général, accessible par une trappe. Sert à isoler la dalle du sol et à passer les réseaux. Pas occupé, mais en contact direct avec le sol. Premier point d'entrée potentiel du radon dans la maison. Sa ventilation (par grilles d'aération en façade) doit être maintenue active toute l'année.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître un sous-sol qui contamine le reste du logement."
        subtitle="Des signaux discrets mais lisibles indiquent que le sous-sol pèse sur la qualité de l'air des pièces de vie. À surveiller même si le sous-sol n'est jamais utilisé activement."
        signs={[
          {
            label: "Odeur de cave persistante au rez-de-chaussée, surtout en hiver",
            description:
              "L'odeur typique de cave (notes terreuses, moisi léger, parfois métallique) qui se sent dans le séjour ou le couloir signe une remontée d'air du sous-sol par effet de tirage thermique. Plus marquée le matin et en saison de chauffe. Indique un défaut d'étanchéité entre sous-sol et logement, et souvent un problème de ventilation du sous-sol.",
            severity: "modéré",
          },
          {
            label: "Humidité plus élevée dans les pièces du rez-de-chaussée que dans celles de l'étage",
            description:
              "Si l'hygromètre indique systématiquement 5 à 10 % de plus au rez-de-chaussée qu'à l'étage, l'humidité du sous-sol diffuse vers le haut. Particulièrement net en hiver. Cause probable : remontées d'air ou de vapeur depuis un sous-sol non isolé du logement, ou remontées capillaires dans les murs périphériques.",
            severity: "modéré",
          },
          {
            label: "Salpêtre, efflorescences blanches sur les murs du sous-sol",
            description:
              "Dépôts blanchâtres ou jaunâtres sur les pierres, briques, joints du sous-sol. Sels minéraux laissés par l'eau qui s'évapore. Signe d'humidité chronique des murs, souvent due aux remontées capillaires depuis le sol. Ne disparaît pas par simple ventilation : exige un traitement de la cause (drainage, injection de résine).",
            severity: "modéré",
          },
          {
            label: "Moisissures noires sur cartons, livres, vêtements stockés",
            description:
              "Cartons gondolés, livres aux pages tachées, vêtements ou bois moisis : signe d'une humidité supérieure à 70 % en surface sur de longues durées. Risque sanitaire respiratoire si on remonte ces objets dans le logement (allergènes fongiques, spores). À traiter par ventilation et déshumidification, et nettoyage à fond.",
            severity: "critique",
          },
          {
            label: "Sous-sol en zone 2 ou 3 radon, jamais mesuré",
            description:
              "Sur Géorisques, votre commune est classée zone 2 (potentiel faible avec facteurs particuliers) ou zone 3 (potentiel significatif), et vous n'avez jamais fait de mesure. Risque non quantifié à un niveau qui peut être significatif. Investissement à faire en priorité : un dosimètre passif (25-50 €), 2 mois de pose en pièce de vie au-dessus du sous-sol.",
            severity: "critique",
          },
          {
            label: "Stockage massif de produits ménagers, peintures ou carburants",
            description:
              "Étagères pleines de bidons, boîtes de peinture, solvants, essence pour tondeuse, gaz pour soudure : sources continues de COV qui diffusent depuis la cave et remontent vers le logement. Vérifier les bouchons, limiter les quantités stockées, sortir les produits dont on n'a plus besoin.",
            severity: "modéré",
          },
        ]}
        footerNote="Un sous-sol propre, ventilé, sec, où la mesure radon est sous le niveau de référence et où aucune odeur ne remonte, ne pose aucun problème. Inversement, négliger un seul de ces points peut suffire à dégrader la qualité de l'air du logement entier."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent les contaminations du sous-sol."
        subtitle="Les sources sont essentiellement liées au contact avec le sol naturel et aux usages spécifiques du sous-sol. Identifier la principale guide les travaux à engager."
        causes={[
          {
            number: "01",
            cause: "Humidité du sol par capillarité et infiltration",
            explanation:
              "Le sol contient en permanence de l'eau, qui migre par capillarité dans les murs en pierre, brique ou parpaing du sous-sol, et par infiltration latérale en cas de pression hydrostatique (terrain en pente, nappe haute). Dans les caves anciennes sans cuvelage, l'humidité plafonne à 70-90 % en saison de pluie et descend rarement sous 60 % en été.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Radon issu du sous-sol géologique",
            explanation:
              "Gaz radioactif naturel produit par la désintégration de l'uranium dans certaines roches (granits, schistes, terrains volcaniques). Il migre vers le bâtiment par les fissures de dalle, les joints sol-mur, les passages de canalisations, les sols en terre battue. Premier point d'entrée d'un logement : presque toujours le sous-sol ou le vide sanitaire. Voir notre page radon pour le détail.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Stockage de produits émissifs",
            explanation:
              "Bidons de peinture, solvants, white spirit, produits ménagers concentrés, carburants pour outillage, gaz de soudure, vieux meubles vernis : autant de sources continues de COV qui s'accumulent en sous-sol mal ventilé et remontent par tirage thermique. Souvent oubliées car invisibles, ces sources peuvent être très significatives.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Moisissures sur matériaux organiques humides",
            explanation:
              "Cartons, papiers, bois non traités, textiles, denrées alimentaires stockées en cave deviennent rapidement le support de moisissures dès que l'humidité dépasse 70 % en surface. Les spores libérées dans l'air du sous-sol remontent dans le logement et peuvent déclencher allergies et exacerbations d'asthme.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Combustion d'appareils en sous-sol mal ventilés",
            explanation:
              "Chaudière, chauffe-eau gaz, brasero d'appoint, groupe électrogène en cas de coupure : tout appareil de combustion en sous-sol exige un apport d'air dimensionné et une évacuation conforme. Une chaudière au sous-sol qui mal entretenue peut produire du monoxyde de carbone qui remonte ensuite dans le logement. Voir notre page CO pour le détail des risques.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Diagnostic, ventilation et étanchéité : les leviers prioritaires."
        immediate={[
          {
            label: "Mesurer le radon en zone 2 ou 3",
            description:
              "Vérifier la zone de votre commune sur Géorisques. En zone 2 ou 3, commander un kit dosimètre passif (25-50 €) et le poser pendant 2 mois minimum en période de chauffe (septembre-avril) dans une pièce de vie au rez-de-chaussée, au-dessus du sous-sol. Au-dessus de 300 Bq/m³ : agir sur ventilation et étanchéité. Au-dessus de 1000 Bq/m³ : envisager un système SSD (mise en dépression du soubassement).",
            effort: "25-50 €, 2 mois",
          },
          {
            label: "Sortir les produits émissifs et limiter le stockage",
            description:
              "Inventaire des bidons et boîtes stockés en sous-sol. Sortir tout ce qui est inutilisé, fermer hermétiquement le reste, ranger dans une armoire métallique fermée si possible. Ne jamais stocker de carburant ou gaz en sous-sol habité. Un sous-sol qui sert d'atelier ponctuel doit être ventilé pendant et après l'utilisation.",
            effort: "Quelques heures",
          },
          {
            label: "Étanchéifier les passages entre sous-sol et logement",
            description:
              "Trappe d'accès au vide sanitaire jointive (joint silicone), porte d'accès à la cave bien ajustée et étanche, gaines techniques colmatées au mortier ou mousse expansive. Cette étanchéité limite la migration d'air contaminé vers les pièces de vie, sans empêcher la ventilation propre du sous-sol.",
            effort: "1 journée, matériel 30-100 €",
          },
          {
            label: "Mettre un hygromètre dans le sous-sol",
            description:
              "Un hygromètre à 15-25 € donne la mesure objective. Cible : ne pas dépasser 65-70 % en saison de chauffe. Au-delà, agir : ventilation forcée, déshumidificateur d'appoint, voire travaux d'étanchéité. Les variations saisonnières sont normales, mais une humidité qui plafonne à 80 % toute l'année exige un traitement de fond.",
            effort: "15-25 €",
          },
        ]}
        structural={[
          {
            label: "Ventiler le sous-sol mécaniquement ou naturellement",
            description:
              "Extracteur en gaine vers l'extérieur (80 à 200 €), avec hygrostat pour fonctionnement asservi à l'humidité, ou tirage naturel par ouvertures haute et basse en façade. Le vide sanitaire doit conserver ses grilles d'aération en façade ouvertes toute l'année (ne jamais les boucher pour 'protéger du froid').",
            effort: "Variable selon configuration",
          },
          {
            label: "Traiter les remontées capillaires si humidité chronique",
            description:
              "Si humidité > 70 % toute l'année et signes visibles (salpêtre, moisissures), envisager une injection de résine hydrophobe à la base des murs (150-300 €/ml par un professionnel), ou un cuvelage intérieur en cas de pression hydrostatique forte. Voir notre page remontées capillaires pour le détail.",
            effort: "Travaux ciblés, 1 à plusieurs jours",
          },
          {
            label: "Mettre en dépression le soubassement (SSD) si radon élevé",
            description:
              "Pour les concentrations radon > 1000 Bq/m³ ou > 600 Bq/m³ persistantes après ventilation : système d'extraction mécanique de l'air du soubassement vers l'extérieur, qui maintient une pression inférieure à celle du logement et empêche la migration du gaz vers les pièces de vie. Intervention spécialisée, 3 000 à 6 000 € selon configuration. Mesure de contrôle obligatoire après travaux.",
            effort: "Investissement spécialisé",
          },
          {
            label: "Aménager le sous-sol en pièce de vie : valider la conformité",
            description:
              "Avant de transformer la cave en chambre, bureau ou salle de jeux : mesurer le radon, vérifier l'isolation thermique des murs enterrés, installer une ventilation mécanique dédiée (idéalement double flux), assurer l'étanchéité périphérique, prévoir un éclairage naturel ou de qualité. Ne pas aménager une chambre d'enfant en sous-sol sans ces validations.",
            effort: "Projet de rénovation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire avec son sous-sol."
        errors={[
          {
            label: "\"Je bouche les soupiraux pour avoir moins froid au rez-de-chaussée\"",
            explanation:
              "Geste fréquent et contre-productif. Boucher les soupiraux ou les grilles d'aération du vide sanitaire supprime la seule ventilation du sous-sol et concentre humidité, radon, moisissures et COV juste sous le logement. Le gain thermique est marginal (la déperdition se fait surtout par les murs et la dalle), le coût sanitaire est massif. Garder les ouvertures dégagées en permanence.",
          },
          {
            label: "\"Une cave humide, c'est normal et sans danger\"",
            explanation:
              "Une cave naturellement plus humide qu'une pièce de vie est normale (60-65 % en moyenne). Une cave qui plafonne à 80 % avec moisissures, salpêtre et odeur persistante n'est pas normale et alimente le logement en spores et en humidité diffuse. La banalisation freine l'action. Mesurer, observer, traiter.",
          },
          {
            label: "\"Le radon n'existe que dans certaines régions exotiques\"",
            explanation:
              "Le radon est présent partout en France à des niveaux très variables. Près de 30 % des communes sont classées en zone 2 ou 3 du zonage IRSN. La seule façon de savoir est de mesurer. Habiter en Île-de-France n'exclut pas le radon (certaines communes du sud Yvelines sont en zone 2). Vérifier sur Géorisques.",
          },
          {
            label: "\"J'aménage une chambre dans la cave, ça gagnera de la place\"",
            explanation:
              "Aménager une chambre en sous-sol sans validation préalable (radon, humidité, ventilation, isolation) expose les occupants à des conditions dégradées sur le long terme. Une chambre d'enfant en sous-sol non traité est l'une des configurations les plus à risque pour le développement d'asthme et d'allergies. Ne jamais le faire sans mesure et sans travaux préalables validés par un professionnel.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le sous-sol sain"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Radon : zonage, mesure et solutions",
            description:
              "Le sous-sol est la première porte d'entrée du radon dans le logement. Méthode de mesure et leviers structurels.",
            href: "/air-interieur/radon-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Remontées capillaires : reconnaître et traiter",
            description:
              "Les murs enterrés du sous-sol sont les plus exposés aux remontées capillaires : diagnostic et solutions hiérarchisées.",
            href: "/humidite-maison/remontees-capillaires/",
          },
          {
            tag: "Air intérieur",
            title: "Monoxyde de carbone : reconnaître le risque",
            description:
              "Si la chaudière ou le chauffe-eau gaz est en sous-sol, vigilance accrue sur l'entretien et le détecteur CO.",
            href: "/air-interieur/monoxyde-carbone-maison/",
          },
        ]}
      />
    </>
  );
}
