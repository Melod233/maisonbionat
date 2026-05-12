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
  title: "Climatisation et qualité de l'air intérieur : entretien, filtres, précautions",
  description:
    "Climatisation split, multisplit ou réversible et qualité de l'air intérieur : entretien des filtres, prévention du biofilm, écart thermique, allergènes. Repères pratiques pour utiliser sans dégrader l'air du logement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/chauffage-sain/climatisation-qualite-air/",
  },
  openGraph: {
    title: "Climatisation et qualité de l'air intérieur : entretien, filtres, précautions",
    description:
      "Entretien, biofilm, écart thermique : utiliser la climatisation sans dégrader la qualité de l'air intérieur.",
    url: "https://www.maisonbionat.fr/chauffage-sain/climatisation-qualite-air/",
  },
};

export default function ClimQualiteAirPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Chauffage sain", href: "/chauffage-sain/" },
    {
      name: "Climatisation et qualité de l'air intérieur",
      href: "https://www.maisonbionat.fr/chauffage-sain/climatisation-qualite-air/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Chauffage sain"
        parentHref="/chauffage-sain/"
        tag="Confort et air intérieur"
        title="Climatisation et qualité de l'air intérieur : utiliser sans dégrader."
        quickAnswer="Une climatisation bien dimensionnée et bien entretenue peut améliorer le confort thermique sans pénaliser la qualité de l'air. Mal entretenue, elle devient source d'allergènes, de bactéries (biofilm sur l'évaporateur, condensats stagnants), de poussières recirculées et parfois d'odeurs. Trois bonnes pratiques structurent un usage sain : entretien régulier des filtres (nettoyage ou remplacement tous les 1 à 3 mois en utilisation intensive), maintenance annuelle par un professionnel (nettoyage de l'évaporateur, contrôle des condensats, vérification de l'étanchéité du circuit frigorigène), écart raisonnable avec l'extérieur (5 à 7 °C maximum). Conformément à la réglementation française, tout équipement contenant plus de 2 kg de fluide frigorigène doit faire l'objet d'un contrôle d'étanchéité annuel par un opérateur attesté (catégorie I). Pour les personnes asthmatiques ou allergiques, l'entretien des filtres est une mesure de précaution sanitaire utile, à intégrer aux routines du logement."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "5–7 °C", label: "écart maximum recommandé entre extérieur et intérieur (ADEME)" },
          { value: "1–3 mois", label: "fréquence de nettoyage des filtres en usage estival intensif" },
          { value: "Annuel", label: "rythme d'entretien professionnel recommandé d'une climatisation" },
          { value: "Cat. I", label: "certification obligatoire pour intervention sur fluide frigorigène (au-delà de 2 kg)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de climatisation" },
          { id: "signes", label: "Signes d'une climatisation mal entretenue" },
          { id: "causes", label: "Pourquoi l'entretien compte" },
          { id: "actions", label: "Routine d'entretien et bon usage" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Équipements"
        title="Types de climatisation domestique et incidence sur l'air intérieur"
        description="Les climatisations domestiques se déclinent en plusieurs configurations. Leur impact sur la qualité de l'air dépend de l'équipement, de la pose, et surtout de l'entretien."
        variants={[
          {
            indicator: "Le plus courant",
            name: "Split-system réversible (un intérieur + un extérieur)",
            description:
              "Une unité intérieure murale ou consolée par pièce, une unité extérieure. Le split est aussi le mode chauffage par pompe à chaleur air-air. Filtres facilement accessibles dans l'unité intérieure (clipsage, nettoyage à l'eau tiède). Risque biofilm modéré si bien entretenue. Configuration la plus courante et la plus simple à entretenir soi-même partiellement.",
          },
          {
            indicator: "Plusieurs pièces",
            name: "Multisplit (plusieurs intérieures, une extérieure)",
            description:
              "Plusieurs unités intérieures (3 à 5 typiquement) raccordées à une seule unité extérieure. Idéal pour un logement entier. Entretien identique mais multiplié : chaque unité intérieure a ses filtres, son évaporateur, ses condensats. Voir si toutes les pièces nécessitent vraiment la climatisation avant d'investir, le multisplit étant plus complexe à entretenir.",
          },
          {
            indicator: "Encombrant",
            name: "Climatisation mobile (monobloc avec gaine)",
            description:
              "Unité unique sur roulettes avec une gaine d'évacuation par fenêtre entrouverte. Moins efficace énergétiquement, plus bruyante, mais sans pose. La fenêtre entrouverte fait entrer chaleur et pollens ; un usage prolongé dégrade la qualité de l'air ambiant. Acceptable en dépannage ponctuel, pas comme solution principale.",
          },
          {
            indicator: "Avec gaines",
            name: "Climatisation gainable (gaines dans les combles)",
            description:
              "Réseau de gaines dans les combles ou faux plafond, bouches de soufflage discrètes au plafond. Esthétique soignée mais entretien plus exigeant : les gaines accumulent poussière, leur nettoyage intérieur est complexe et souvent négligé. À privilégier pour les constructions neuves où l'entretien peut être prévu dès la conception.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Symptômes"
        title="Signes qu'une climatisation dégrade votre air intérieur."
        subtitle="Une climatisation bien entretenue est silencieuse et inodore. Certains symptômes pointent vers un défaut d'entretien ou une dégradation interne."
        signs={[
          {
            label: "Odeur d'humidité ou de moisi au démarrage",
            description:
              "Une odeur de cave ou de chaussette humide qui sort de l'unité intérieure au démarrage signale typiquement un biofilm sur l'évaporateur ou un bac de condensats stagnant. Nettoyage des filtres en première intention, puis nettoyage de l'évaporateur (intervention pro) si persistant.",
            severity: "modéré",
          },
          {
            label: "Symptômes d'allergie aggravés en période d'usage",
            description:
              "Éternuements, écoulement nasal, irritation oculaire ou cutanée qui apparaissent ou s'aggravent quand la climatisation fonctionne : les filtres encrassés recirculent acariens, pollens et poussières concentrés. Nettoyage immédiat des filtres, et si symptômes persistants chez personne allergique connue, consulter un médecin (allergologue ou généraliste).",
            severity: "modéré",
          },
          {
            label: "Bruit anormal d'écoulement ou goutte-à-goutte",
            description:
              "Un bruit de gargouillis ou un goutte-à-goutte qui n'était pas présent au début indique un problème d'évacuation des condensats. À terme, débordement et dégât des eaux possible. Intervention pro pour nettoyer la conduite de condensats.",
            severity: "léger",
          },
          {
            label: "Air soufflé moins froid qu'avant",
            description:
              "Plusieurs causes possibles : filtres très encrassés (test immédiat), évaporateur entartré ou colmaté, fuite de fluide frigorigène. Les deux premières causes sont résolubles par entretien ; la fuite exige une intervention pro avec contrôle d'étanchéité réglementaire (cat. I).",
            severity: "léger",
          },
          {
            label: "Humidité anormale dans la pièce",
            description:
              "Une climatisation correctement dimensionnée déshumidifie l'air ambiant. Si l'humidité augmente quand elle fonctionne : surdimensionnement (court-cycle qui ne déshumidifie pas), évaporateur en mauvais état, ou ventilation insuffisante. À diagnostiquer professionnellement.",
            severity: "modéré",
          },
          {
            label: "Pannes répétées ou consommation en hausse soudaine",
            description:
              "Une climatisation qui consomme plus à confort égal ou qui tombe en panne souvent indique un problème mécanique (compresseur fatigué, fluide manquant) ou un encrassement majeur. Maintenance professionnelle de diagnostic. Reporter ou renoncer à l'usage tant que la cause n'est pas identifiée évite d'amplifier le problème.",
            severity: "modéré",
          },
        ]}
        footerNote="L'apparition de symptômes respiratoires ou cutanés à chaque mise en route récurrente, surtout chez un enfant ou une personne âgée, justifie un avis médical en plus de la maintenance technique. Sans diagnostic, ne pas attribuer trop vite à un seul facteur."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi entretenir"
        title="Pourquoi l'entretien de la climatisation est un sujet de qualité de l'air."
        subtitle="Les mécanismes d'altération de la qualité de l'air par une climatisation mal entretenue sont documentés. Voici ceux qui structurent la maintenance recommandée."
        causes={[
          {
            number: "01",
            cause: "L'évaporateur condense l'humidité de l'air",
            explanation:
              "Pour refroidir l'air, l'évaporateur le fait passer sous son point de rosée : l'humidité se condense en eau sur les ailettes froides et tombe dans un bac. Ce point humide et tiède (autour de 5 à 10 °C en surface) est un site classique de développement de biofilm bactérien et de moisissures, qui peuvent ensuite être pulvérisés dans l'air par le ventilateur. L'entretien régulier coupe ce mécanisme.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les filtres concentrent ce qu'ils retiennent",
            explanation:
              "Les filtres de climatisation capturent poussières, pollens, fibres, acariens. Sans nettoyage régulier, le filtre saturé devient lui-même une source secondaire : les particules se détachent partiellement au passage de l'air et sont repulvérisées en aval. Le nettoyage est plus que cosmétique : c'est une opération de qualité de l'air à part entière.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les écarts thermiques excessifs sollicitent l'organisme",
            explanation:
              "Un écart de plus de 7 à 8 °C entre extérieur et intérieur, surtout répété, peut provoquer un stress thermique : fatigue, maux de tête, gêne respiratoire chez certaines personnes sensibles. La recommandation de l'ADEME et de plusieurs travaux d'ergonomie thermique est de ne pas dépasser 5 à 7 °C d'écart. Un confort thermique modéré est meilleur pour la santé qu'un froid intense.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "L'air recirculé peut concentrer les polluants intérieurs",
            explanation:
              "La plupart des climatisations résidentielles font recirculer l'air de la pièce, sans apport d'air neuf. Si une source de pollution intérieure existe (COV de produits ménagers, formaldéhyde de meubles neufs, fumée), le système la fait circuler de manière homogène mais ne l'élimine pas. Maintenir une ventilation (VMC, ouverture périodique) reste indispensable même avec climatisation active.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Les fluides frigorigènes ont un impact environnemental",
            explanation:
              "Les fluides utilisés (R410A historiquement, R32 plus récemment) sont des gaz à effet de serre puissants. Une fuite non détectée a un impact climatique et un coût économique élevé. Le contrôle d'étanchéité annuel par opérateur certifié (catégorie I) est obligatoire pour les équipements contenant plus de 2 kg de fluide. Cette obligation protège l'environnement et préserve les performances.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Routine d'entretien et bon usage au quotidien."
        immediateLabel="Entretien régulier réalisable soi-même"
        structuralLabel="Maintenance professionnelle et choix d'équipement"
        immediate={[
          {
            label: "Nettoyer les filtres tous les 1 à 3 mois en saison",
            description:
              "Filtres clipsés ou coulissants dans l'unité intérieure : retirer (un clic), nettoyer à l'eau tiède savonneuse (savon doux, pas de produit agressif), rincer abondamment, laisser sécher complètement avant remise en place. Opération de 10 minutes. À faire tous les mois en usage intensif (été), tous les 2 à 3 mois en usage modéré.",
            effort: "10 minutes mensuelles",
          },
          {
            label: "Vérifier visuellement l'unité extérieure",
            description:
              "Une fois par saison, vérifier que l'unité extérieure n'est pas obstruée (feuilles, branches, débris). Nettoyer doucement les ailettes externes au pinceau ou à l'eau basse pression. Vérifier l'absence d'oiseaux ou de nids dans les recoins. Vérifier l'écoulement du condensat (tuyau visible non obstrué).",
            effort: "15 minutes par saison",
          },
          {
            label: "Limiter l'écart à 5–7 °C maximum",
            description:
              "Plutôt que de viser 22 °C par 38 °C extérieurs, viser 26 à 28 °C en pièce de vie : plus confortable pour l'organisme, beaucoup moins énergivore (chaque degré supplémentaire représente 7 à 10 % de consommation), moins de stress thermique. La climatisation a vocation à rendre l'intérieur supportable, pas à le rendre froid.",
            effort: "Réglage thermostat",
          },
          {
            label: "Maintenir une ventilation indépendante",
            description:
              "La climatisation n'est pas une ventilation : elle ne renouvelle pas l'air. La VMC continue de fonctionner, ou en l'absence de VMC, ouvrir les fenêtres 5 à 10 minutes matin et soir aux heures fraîches. Sans renouvellement d'air, les polluants intérieurs s'accumulent même si la pièce est fraîche.",
            effort: "Habitude quotidienne",
          },
        ]}
        structural={[
          {
            label: "Maintenance professionnelle annuelle",
            description:
              "Un entretien professionnel annuel inclut typiquement : nettoyage en profondeur de l'évaporateur (parfois avec produit antibactérien adapté), vérification du bac de condensats et de l'évacuation, contrôle de la pression du fluide frigorigène, vérification des connexions électriques, contrôle d'étanchéité réglementaire pour les équipements >2 kg de fluide (cat. I). Coût indicatif : 80 à 200 € par unité.",
            effort: "150 à 300 € par an typique",
          },
          {
            label: "Bien dimensionner à l'achat",
            description:
              "Une climatisation surdimensionnée court-cycle : elle atteint la température de consigne trop vite, s'arrête, redémarre, sans avoir le temps de déshumidifier correctement. Résultat : pièce froide mais humide, biofilm favorisé, consommation excessive. Faire dimensionner par un professionnel avec étude thermique (longueur, hauteur, isolation, orientation, ensoleillement, occupation).",
            effort: "Étude pro à l'achat",
          },
          {
            label: "Privilégier les filtres de qualité",
            description:
              "À l'achat, vérifier la qualité du filtre. Filtres antibactériens, filtres à charbon actif intégrés, filtres lavables haute densité : meilleur compromis qualité de l'air. Sur les modèles anciens, filtres souvent rudimentaires que l'on peut remplacer par des modèles compatibles plus efficaces (existent en pièces détachées).",
            effort: "Filtres premium 20 à 80 € à l'achat",
          },
          {
            label: "Penser aux solutions passives en complément",
            description:
              "Avant tout, réduire la chaleur entrante : volets ou persiennes fermés sur les façades ensoleillées, stores extérieurs, brise-soleil, ventilation nocturne. Un logement bien protégé du soleil peut perdre 50 à 70 % de ses apports thermiques d'été et nécessiter beaucoup moins de climatisation, voire pas du tout. La meilleure climatisation est celle qu'on n'a pas besoin de mettre.",
            effort: "Variable selon mesures",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs et idées reçues sur la climatisation."
        errors={[
          {
            label: "Régler la climatisation très froid pour rafraîchir vite",
            explanation:
              "Régler à 18 °C par 38 °C extérieurs ne refroidit pas plus vite : la puissance disponible de l'appareil est la même, seul change le temps de fonctionnement avant atteinte de la consigne. Effet réel : écart thermique brutal mauvais pour l'organisme, surconsommation, parfois surchauffe du système. Régler dès le départ à 26–28 °C, l'appareil maintient la consigne sans excès.",
          },
          {
            label: "Ne nettoyer les filtres qu'une fois par an",
            explanation:
              "En usage estival intensif, un filtre peut être saturé en 4 à 6 semaines. Un filtre saturé concentre acariens, pollens et poussières, et perd son efficacité. Nettoyage mensuel en saison, c'est l'opération la plus utile sur la qualité de l'air rendue par la climatisation. Procédure simple à intégrer aux routines mensuelles.",
          },
          {
            label: "Ignorer le contrôle réglementaire d'étanchéité",
            explanation:
              "Pour les équipements contenant plus de 2 kg de fluide frigorigène (catégorie supérieure à un simple split résidentiel), un contrôle d'étanchéité annuel par opérateur attesté (catégorie I) est obligatoire. Au-delà du cadre réglementaire, une fuite non détectée détruit les performances et coûte cher à recharger. Pour les petites unités domestiques (<2 kg), l'obligation n'existe pas, mais une vérification dans la maintenance annuelle reste utile.",
          },
          {
            label: "Croire que la climatisation purifie l'air",
            explanation:
              "Une climatisation classique filtre les grosses particules (poussières) mais ne supprime ni les COV, ni les odeurs, ni les virus. Certains modèles haut de gamme intègrent une filtration à charbon actif ou HEPA partielle. Pour une vraie purification, un purificateur d'air dédié est plus adapté. Confondre climatisation et purification conduit à une fausse sécurité.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur climatisation et qualité de l'air"
        items={[
          {
            question: "La climatisation peut-elle rendre malade ?",
            answer:
              "Une climatisation bien entretenue n'a pas démontré d'effet sanitaire négatif chez les personnes en bonne santé. Mal entretenue, elle peut être source d'allergènes (acariens, pollens recirculés), d'irritations respiratoires (poussières, biofilm) et plus rarement de contamination microbienne. Pour les personnes asthmatiques, allergiques, immunodéprimées ou âgées, l'entretien strict des filtres est une mesure de précaution sanitaire utile. En cas de symptômes persistants liés à l'usage de la climatisation, consultez un médecin.",
          },
          {
            question: "Faut-il un entretien obligatoire annuel pour une climatisation domestique ?",
            answer:
              "Obligation réglementaire stricte : oui pour les équipements de plus de 2 kg de fluide frigorigène (contrôle d'étanchéité annuel par opérateur catégorie I) et oui pour les climatisations de plus de 4 kW de puissance frigorifique au sens du décret du 31 mars 2020 (entretien périodique tous les 2 ans). Recommandation pratique : entretien annuel professionnel pour toute installation, même de plus petite puissance, pour maintenir performance et qualité de l'air.",
          },
          {
            question: "Le R32 est-il moins polluant que le R410A ?",
            answer:
              "Le R32, fluide aujourd'hui dominant dans les nouveaux équipements résidentiels, a un PRG (Potentiel de Réchauffement Global) d'environ 675 contre 2 088 pour le R410A : impact climatique réduit d'environ 70 % en cas de fuite. Le R32 reste néanmoins un gaz à effet de serre puissant : le contrôle d'étanchéité conserve sa pertinence. Pour les remplacements et installations neuves, privilégier les équipements R32 (ou fluides ultérieurs encore moins impactants).",
          },
          {
            question: "Faut-il un purificateur d'air en complément ?",
            answer:
              "Pas systématiquement. Pour la majorité des logements bien ventilés (VMC, aération régulière), l'entretien de la climatisation suffit. Un purificateur d'air à filtration HEPA peut compléter en cas de besoin spécifique : personne fortement allergique, zone à pollution extérieure marquée, fumeur dans le foyer, pollens problématiques. Sujet à approfondir dans la page dédiée aux purificateurs d'air du silo air intérieur.",
          },
          {
            question: "La climatisation est-elle compatible avec une démarche de logement sain ?",
            answer:
              "Oui si elle est utilisée comme complément ponctuel, pas comme solution unique de gestion de la chaleur. Démarche cohérente : protection solaire passive en priorité (volets, stores extérieurs, isolation), ventilation nocturne, climatisation en appoint pour les pics. Bien entretenue, bien réglée (5–7 °C d'écart), bien dimensionnée, la climatisation s'intègre à un logement sain. Mal réglée et systématique, elle s'inscrit dans une logique opposée.",
          },
          {
            question: "Mes enfants peuvent-ils dormir avec la climatisation ?",
            answer:
              "Oui avec quelques précautions. Régler à 24 à 26 °C la nuit (pas plus froid), éviter le jet d'air direct sur l'enfant (orienter les volets), maintenir les filtres propres, garder la ventilation de la pièce indépendante. Pour les nourrissons de moins de 1 an, plusieurs pédiatres recommandent de ne pas exposer directement au flux et de ne pas dépasser 3 à 4 °C sous la température extérieure. Avis du pédiatre traitant utile pour les situations particulières.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Chauffage sain",
            title: "Le silo chauffage sain",
            description:
              "Vue d'ensemble : choisir son chauffage, pompe à chaleur, poêle à bois, chauffage électrique, climatisation.",
            href: "/chauffage-sain/",
          },
          {
            tag: "Air intérieur",
            title: "Acariens à la maison",
            description:
              "Allergie principale liée à la climatisation mal entretenue : ce qu'apporte la maîtrise des acariens.",
            href: "/air-interieur/acariens-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Purificateur d'air à la maison",
            description:
              "Quand un purificateur est utile, quel filtre choisir, quels usages : le complément éventuel d'une climatisation entretenue.",
            href: "/air-interieur/purificateur-air-maison/",
          },
        ]}
      />
    </>
  );
}
