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
  title: "Condensation sur les fenêtres : causes et solutions durables",
  description:
    "Buée et eau sur les vitres au réveil : comprendre le point de rosée, identifier la vraie cause et agir sur la ventilation, l'humidité et la chaleur des fenêtres.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/condensation-fenetre/",
  },
  openGraph: {
    title: "Condensation sur les fenêtres : causes et solutions durables",
    description:
      "Buée et eau sur les vitres au réveil : comprendre le point de rosée, identifier la vraie cause et agir sur la ventilation, l'humidité et la chaleur des fenêtres.",
    url: "https://www.maisonbionat.fr/humidite-maison/condensation-fenetre/",
  },
};

const faqItems = [
  {
    question: "Pourquoi de la buée apparaît sur les vitres au réveil ?",
    answer:
      "C'est le scénario typique. Pendant la nuit, la respiration et la transpiration des occupants libèrent plusieurs litres de vapeur d'eau dans la chambre fermée. La température baisse, l'humidité relative monte, et la surface du vitrage (la zone la plus froide de la pièce) atteint le point de rosée : la vapeur se condense en eau liquide sur la vitre. Ce n'est généralement pas un défaut de la fenêtre, c'est un signe que la chambre manque de ventilation et que l'humidité produite ne s'évacue pas. La solution est rarement la fenêtre elle-même, plus souvent l'aération matin/soir et le bon fonctionnement de la VMC.",
  },
  {
    question: "Le double vitrage évite-t-il la condensation ?",
    answer:
      "Pas toujours. Un double vitrage récent à isolation renforcée (Ug ≤ 1,1 W/m²K) reste plus chaud côté intérieur qu'un simple vitrage et limite la condensation côté pièce, mais ne la supprime pas si l'humidité reste élevée. Un double vitrage ancien (Ug autour de 2,8 W/m²K) condense facilement. Sur le bord du vitrage et le cadre, la zone reste souvent plus froide même en double vitrage récent, ce qui explique la condensation périphérique persistante. Important : la condensation entre les deux vitres (à l'intérieur du double vitrage) signe une perte d'étanchéité du joint et impose le remplacement du verre.",
  },
  {
    question: "À partir de quel taux d'humidité la condensation apparaît ?",
    answer:
      "Tout dépend de la température ambiante et de la température du vitrage. Exemples concrets : à 19 °C dans la pièce et 60 % d'humidité relative, le point de rosée est à 11 °C : tout vitrage en dessous de 11 °C condense. À 20 °C et 50 %, le point de rosée tombe à 9,3 °C. À 20 °C et 40 %, à 6 °C. La cible pratique : maintenir l'humidité intérieure entre 40 et 55 %, comme recommandé par l'ADEME. Au-delà de 60 %, la condensation devient inévitable sur les surfaces froides (vitrages, murs nord, ponts thermiques) et les moisissures s'installent. Un hygromètre à 20 € suffit à mesurer.",
  },
  {
    question: "Faut-il essuyer la condensation ou la laisser sécher ?",
    answer:
      "Toujours essuyer rapidement, idéalement dès le matin avec une raclette ou un chiffon microfibres. L'eau qui stagne sur le vitrage migre vers les joints, le cadre, l'appui de fenêtre, l'enduit et le mur en contrebas. À répétition, elle dégrade les joints en silicone, fait gonfler les bois, déplace les peintures et favorise des moisissures noires sur les rebords et les angles. Essuyer empêche cette migration et donne en plus une indication immédiate de la quantité d'eau produite par nuit (utile pour identifier les pièces les plus humides). Mais essuyer ne traite pas la cause : combiner avec aération et VMC.",
  },
];

export default function CondensationFenetrePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    {
      name: "Condensation sur les fenêtres",
      href: "https://www.maisonbionat.fr/humidite-maison/condensation-fenetre/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Humidité maison"
        parentHref="/humidite-maison/"
        tag="Humidité quotidienne"
        title="Condensation sur les fenêtres : comprendre la cause et agir sur le bon levier"
        quickAnswer="La condensation sur les vitres apparaît quand la vapeur d'eau de l'air ambiant rencontre une surface dont la température est inférieure au point de rosée. Le vitrage, plus froid que les murs et les meubles, en est la première victime. Le phénomène est presque toujours le signe d'une combinaison entre humidité intérieure trop élevée et ventilation insuffisante, et plus rarement d'une fenêtre défaillante. À 20 °C, l'humidité relative doit rester entre 40 et 55 % (recommandation ADEME) pour éviter la condensation sur la majorité des vitrages. Au-delà de 60 %, la condensation devient inévitable sur les surfaces froides et les moisissures s'installent rapidement sur les joints et les angles. Les leviers efficaces sont hiérarchisés : aération matin/soir, VMC fonctionnelle, gestion des sources d'humidité (séchage du linge, douche, cuisson), et seulement en dernier ressort, intervention sur la fenêtre elle-même."
        stats={[
          {
            value: "40-55 %",
            label: "plage d'humidité relative recommandée par l'ADEME pour éviter la condensation",
          },
          {
            value: "11 °C",
            label: "température du point de rosée à 19 °C / 60 % d'humidité (vitrage en dessous = condensation)",
          },
          {
            value: "Ug ≤ 1,1",
            label: "performance d'un double vitrage récent qui limite (sans supprimer) la condensation",
          },
          {
            value: "1,5 à 4 L",
            label: "quantité d'eau libérée par nuit par 2 adultes dans une chambre fermée",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le phénomène" },
          { id: "signes", label: "Reconnaître les configurations" },
          { id: "causes", label: "Sources d'humidité" },
          { id: "actions", label: "Solutions efficaces" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi la condensation se forme sur les vitres et pas sur les murs."
        description="L'air contient toujours une certaine quantité de vapeur d'eau, exprimée en humidité relative (HR). À 20 °C et 50 % d'HR, l'air contient environ 8,7 g d'eau par mètre cube. Si cet air refroidit, sa capacité à contenir de la vapeur diminue ; à un certain seuil (le point de rosée), il devient saturé et l'excédent se condense en eau liquide sur la première surface froide rencontrée. Dans un logement, le vitrage est presque toujours la surface la plus froide en hiver : il atteint le point de rosée bien avant les murs intérieurs. C'est pour cela que la condensation se voit d'abord sur les fenêtres, alors qu'elle est souvent symptomatique d'une humidité ambiante qui finira aussi par poser problème ailleurs."
        variants={[
          {
            indicator: "Condensation côté intérieur",
            name: "Sur la face intérieure du vitrage",
            description:
              "Le cas le plus fréquent. Apparaît au matin dans les chambres, dans la cuisine après cuisson, dans la salle de bain après douche. Témoigne presque toujours d'une humidité intérieure trop élevée et d'un défaut de ventilation, plus rarement d'une fenêtre défaillante. La fenêtre est ici la victime, pas la cause.",
          },
          {
            indicator: "Condensation entre les vitres",
            name: "À l'intérieur du double vitrage",
            description:
              "Cas particulier qui signe une perte d'étanchéité du joint périphérique du double vitrage. L'air pénètre entre les deux vitres, sa vapeur d'eau se condense au refroidissement, et l'unité vitrée perd son pouvoir isolant. Solution : remplacer l'unité vitrée (le verre seul, pas la fenêtre entière). Coût 100 à 300 € par vitrage selon dimension.",
          },
          {
            indicator: "Condensation côté extérieur",
            name: "Sur la face extérieure du vitrage",
            description:
              "Phénomène de plus en plus observé sur les double vitrages très performants : la face extérieure peut être plus froide que l'air ambiant après une nuit claire et froide, et se couvre de buée au lever du jour. C'est paradoxalement le signe d'un excellent isolant (le froid intérieur ne traverse pas), pas d'un défaut. Disparaît dans les heures qui suivent.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les configurations de condensation."
        subtitle="Toutes les condensations ne se traitent pas de la même façon. Identifier la configuration précise oriente vers le bon levier d'action."
        signs={[
          {
            label: "Buée matinale dans les chambres, surtout en saison de chauffe",
            description:
              "La cause classique : respiration et transpiration nocturne dans une chambre fermée et insuffisamment ventilée, fenêtres aux Ug élevés (> 1,4 W/m²K) ou ponts thermiques au cadre. Solution : aération franche au lever (5-10 minutes), vérification de la VMC, hygrométrie cible entre 40 et 55 %.",
            severity: "modéré",
          },
          {
            label: "Condensation et écoulement persistants en cuisine ou salle de bain",
            description:
              "Lors de la cuisson ou après une douche, l'humidité produite localement (5 à 15 g/min pour une douche chaude, 200 à 500 g pour une cuisson) sature l'air en quelques minutes. Si la VMC n'extrait pas suffisamment ou si la hotte de cuisine n'est pas raccordée à l'extérieur, la vapeur condense partout. Solution : vérifier débits VMC, ouvrir une fenêtre pendant la cuisson/douche.",
            severity: "modéré",
          },
          {
            label: "Eau qui s'écoule sur le rebord de fenêtre et dégrade le bois ou l'enduit",
            description:
              "Au-delà de la buée, présence d'eau libre sur l'appui, de joints qui noircissent, de bois qui gonfle, d'enduit qui s'écaille en partie basse, de papier peint qui se décolle. Symptôme d'une condensation chronique non traitée depuis plusieurs hivers. Risque structurel sur les fenêtres bois et l'enduit en pied de mur.",
            severity: "critique",
          },
          {
            label: "Moisissures noires aux angles, sur les joints, derrière les meubles",
            description:
              "Apparition de taches noires (Cladosporium, Aspergillus) aux angles de pièces, sur les silicones de fenêtre, derrière les meubles posés contre un mur extérieur. Indique que l'humidité dépasse régulièrement 70 % en surface, condition de prolifération des moisissures. Risque sanitaire respiratoire confirmé pour les enfants asthmatiques et allergiques.",
            severity: "critique",
          },
          {
            label: "Condensation dans une seule pièce, généralement la plus froide",
            description:
              "La pièce non chauffée (chambre d'amis, buanderie, dressing) accumule l'humidité diffuse du logement à une température plus basse, ce qui fait monter l'humidité relative locale et déclenche la condensation. Solution : ne pas couper totalement le chauffage de cette pièce (maintien à 16-17 °C minimum), aérer plus souvent.",
            severity: "modéré",
          },
          {
            label: "Buée entre les vitres d'un double vitrage récent",
            description:
              "Aspect laiteux, gouttelettes piégées entre les deux verres, qui ne disparaissent pas en aérant. Joint d'étanchéité défaillant, l'unité vitrée a perdu son gaz inerte et son intégrité. Solution exclusive : remplacer le double vitrage (le verre, pas le châssis). Garantie souvent applicable pour les fenêtres récentes.",
            severity: "modéré",
          },
        ]}
        footerNote="Une condensation occasionnelle après une douche, une cuisson ou un froid intense est normale. Une condensation quotidienne, persistante ou accompagnée de moisissures justifie un traitement de la cause d'humidité, pas seulement un essuyage."
      />

      <IssueCauses
        id="causes"
        title="D'où vient l'eau qui se condense sur les vitres."
        subtitle="Un logement de 4 personnes produit en moyenne 8 à 15 litres de vapeur d'eau par jour selon ses activités. Cette eau ne disparaît pas : elle s'accumule dans l'air, condense sur les vitres et les surfaces froides, ou s'évacue par la ventilation. Voici les sources hiérarchisées."
        causes={[
          {
            number: "01",
            cause: "Respiration et transpiration des occupants",
            explanation:
              "Un adulte au repos libère environ 40 à 50 g d'eau par heure par la respiration et la transpiration. Sur une nuit de 8 heures dans une chambre de 12 m² fermée pour deux personnes, cela représente 0,7 à 0,8 kg d'eau introduite dans l'air. Suffit largement à saturer l'air ambiant si la pièce n'est pas ventilée.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Cuisson et utilisation d'eau chaude",
            explanation:
              "Une douche chaude produit 200 à 1 000 g de vapeur, une cuisson à l'eau 500 à 1 500 g par heure, une cocotte ouverte plusieurs litres. Sans hotte raccordée à l'extérieur ni VMC dimensionnée, cette vapeur diffuse dans tout le logement et condense sur la première surface froide.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Séchage du linge à l'intérieur",
            explanation:
              "Un linge de lessive contient en moyenne 1,5 à 3 litres d'eau, libérés progressivement dans l'air pendant le séchage. Sécher en intérieur sans ventilation dédiée fait monter l'humidité de la pièce à 70-80 % en quelques heures, source classique de condensation et de moisissures. Voir notre page séchage du linge.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "VMC absente, à l'arrêt ou bouches obstruées",
            explanation:
              "Une VMC simple flux ou double flux fonctionnelle évacue 30 à 100 m³/h selon le logement, ce qui suffit à compenser l'humidité produite par les activités normales. Une VMC en panne, dont les bouches sont colmatées ou recouvertes (rénovation où les bouches ont été oubliées sous un placo), fait s'effondrer le bilan hydrique et déclenche la condensation chronique.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Ponts thermiques sur fenêtre ou cadre",
            explanation:
              "Cadre métallique sans rupteur, châssis bois fatigué, raccord mur/fenêtre mal isolé : le froid traverse, la surface intérieure du cadre passe sous le point de rosée et condense même quand le vitrage central reste à température. Symptôme : condensation surtout au pourtour du vitrage. Solution : reprendre l'isolation du raccord ou changer la menuiserie.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les bons leviers, dans le bon ordre."
        immediate={[
          {
            label: "Aérer 10 à 15 minutes matin et soir, fenêtre grande ouverte",
            description:
              "Le levier le plus rentable. Fenêtre grande ouverte 10-15 minutes par jour évacue plus d'humidité qu'une fenêtre entrouverte toute la journée, sans déperdition thermique excessive. Faire suivre par les chambres, la cuisine après la cuisson, la salle de bain après la douche. Geste gratuit et immédiatement efficace.",
            effort: "Gratuit, 20 minutes par jour",
          },
          {
            label: "Vérifier la VMC et dégager les bouches d'extraction",
            description:
              "Confirmer que la VMC tourne (un papier-test à la bouche d'extraction doit être aspiré). Nettoyer les bouches encrassées, vérifier qu'aucune n'est obstruée par de la peinture ou un meuble. Une VMC fonctionnelle évacue en continu l'humidité produite par le quotidien.",
            effort: "30 minutes, gratuit",
          },
          {
            label: "Mesurer l'humidité avec un hygromètre",
            description:
              "Un hygromètre à 15-25 € donne la mesure objective. Cible : 40-55 % en pièces de vie, 45-60 % en chambre, jamais au-dessus de 60 % en saison de chauffe. La mesure remplace le ressenti et permet de voir si une action a un effet réel.",
            effort: "Achat ponctuel 15-25 €",
          },
          {
            label: "Essuyer la condensation chaque matin avec une raclette",
            description:
              "Geste rapide qui évite la migration de l'eau vers les joints, le cadre et l'appui de fenêtre. Empêche la dégradation des bois et la prolifération des moisissures sur les silicones. Donne une mesure indirecte de la quantité d'eau produite par nuit (utile pour identifier les chambres les plus humides).",
            effort: "1 minute par fenêtre",
          },
        ]}
        structural={[
          {
            label: "Traiter les sources d'humidité importantes",
            description:
              "Sécher le linge dehors ou dans une pièce ventilée dédiée (jamais dans une chambre). Couvrir les casseroles pendant la cuisson. Utiliser systématiquement la hotte (raccordée extérieur) en cuisine et la VMC en salle de bain. Maintenir les pièces non utilisées à 16-17 °C minimum, jamais éteintes.",
            effort: "Routine quotidienne",
          },
          {
            label: "Ajouter une VMC hygroréglable ou double flux si besoin",
            description:
              "Si la condensation persiste malgré l'aération et qu'aucun défaut de VMC simple n'est trouvé, passer à une VMC hygroréglable (350-1500 € posée) qui module les débits selon l'humidité, ou à une double flux (7 000-10 000 € posée) qui filtre l'air et récupère la chaleur. Voir notre page VMC double flux.",
            effort: "Investissement variable",
          },
          {
            label: "Reprendre les ponts thermiques au pourtour de la fenêtre",
            description:
              "Si la condensation est concentrée au bord du vitrage et au cadre, vérifier le raccord menuiserie/maçonnerie. Reprendre le calfeutrement, refaire les joints d'étanchéité, isoler par l'intérieur ou l'extérieur le tableau de fenêtre. Travaux ciblés pour 100-500 € par fenêtre, ou intégrer dans une rénovation thermique plus large.",
            effort: "Travaux ciblés",
          },
          {
            label: "Remplacer un vitrage défaillant si condensation entre les vitres",
            description:
              "La condensation à l'intérieur du double vitrage signe la perte d'étanchéité du joint et impose le remplacement de l'unité vitrée. Pas besoin de remplacer le châssis dans la majorité des cas. Compter 100 à 300 € par vitrage selon dimension. Garantie fabricant souvent applicable sur les fenêtres récentes.",
            effort: "Remplacement vitrage",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur la condensation."
        errors={[
          {
            label: "\"Mes fenêtres sont défectueuses, il faut les changer\"",
            explanation:
              "Sauf cas spécifique (condensation entre les vitres, ponts thermiques de cadre, fenêtres très anciennes), la fenêtre n'est pas la cause. Changer toutes les menuiseries pour résoudre une condensation due à une humidité intérieure mal gérée et à une ventilation déficiente coûte cher pour un résultat décevant : la condensation se déplace alors sur les murs nord et les ponts thermiques restants. Traiter la cause d'humidité d'abord, la fenêtre ensuite si nécessaire.",
          },
          {
            label: "\"J'augmente le chauffage pour assécher\"",
            explanation:
              "Chauffer fait baisser l'humidité relative (l'air chaud peut contenir plus de vapeur), mais la quantité d'eau dans l'air ne change pas. Sans ventilation, la vapeur reste dans le logement et condensera ailleurs (mur froid, vitrage non chauffé, point thermique). Le chauffage seul ne résout rien et augmente la facture.",
          },
          {
            label: "\"Je ferme les bouches de VMC pour éviter le froid\"",
            explanation:
              "Geste à proscrire. La VMC évacue précisément la vapeur d'eau qui condense ensuite. Fermer les bouches enferme l'humidité dans le logement et garantit la condensation et les moisissures. La sensation de froid près d'une bouche se traite par un déflecteur ou un repositionnement, pas par l'obstruction. C'est l'une des erreurs les plus fréquentes en hiver.",
          },
          {
            label: "\"Une plante dépolluante absorbera l'humidité\"",
            explanation:
              "Mythe persistant. Les plantes en intérieur transpirent et libèrent de la vapeur, elles ne l'absorbent pas durablement. Une plante en pot émet 30 à 100 g d'eau par jour selon sa taille. Mettre des plantes pour 'lutter contre l'humidité' aggrave le problème. Pour des informations détaillées sur les capacités réelles des plantes, voir notre page plantes dépolluantes.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la condensation aux fenêtres"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Taux d'humidité idéal : valeurs cibles et hygromètre",
            description:
              "Plage 40-60 % recommandée par l'ADEME, repères pièce par pièce et corrections concrètes en cas de taux trop élevé.",
            href: "/humidite-maison/taux-humidite-ideal/",
          },
          {
            tag: "Humidité maison",
            title: "Sources d'humidité dans la maison",
            description:
              "Quantification des sources quotidiennes (cuisson, douche, séchage, respiration) et hiérarchisation des leviers d'action.",
            href: "/humidite-maison/sources-humidite-interieure/",
          },
          {
            tag: "Humidité maison",
            title: "Ventilation et maîtrise de l'humidité",
            description:
              "Le rôle de la VMC dans le contrôle de l'humidité intérieure et comment l'optimiser sans gros travaux.",
            href: "/humidite-maison/ventilation-humidite/",
          },
        ]}
      />
    </>
  );
}
