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
  title: "Monoxyde de carbone dans la maison : risques, signes et prévention",
  description:
    "Première cause de mortalité par toxique en France. Comprendre d'où vient le CO, reconnaître les signes d'intoxication et prévenir les risques par l'entretien des appareils et le détecteur.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/monoxyde-carbone-maison/",
  },
  openGraph: {
    title: "Monoxyde de carbone dans la maison : risques, signes et prévention",
    description:
      "Première cause de mortalité par toxique en France. Comprendre d'où vient le CO, reconnaître les signes d'intoxication et prévenir les risques par l'entretien des appareils et le détecteur.",
    url: "https://www.maisonbionat.fr/air-interieur/monoxyde-carbone-maison/",
  },
};

const faqItems = [
  {
    question: "Comment savoir si j'ai été exposé au monoxyde de carbone ?",
    answer:
      "Les signes les plus fréquents sont des maux de tête, des nausées, des vertiges, une grande fatigue, parfois des troubles de la vision ou une confusion. Caractéristique très importante : les symptômes touchent en général plusieurs personnes du logement en même temps et s'améliorent quand on sort à l'air libre, puis reviennent en rentrant. En cas de doute, ouvrir les fenêtres, sortir tout le monde et appeler le 15, le 18 ou le 112. Une intoxication chronique à bas bruit (CO en faible concentration sur la durée) se manifeste plutôt par fatigue, céphalées et troubles cognitifs persistants.",
  },
  {
    question: "Faut-il un détecteur de monoxyde de carbone ?",
    answer:
      "Oui, dès qu'un appareil de combustion (chaudière, poêle à bois, à granulés, cheminée, chauffe-eau gaz, cuisinière à gaz, brasero) est utilisé dans le logement. Le détecteur de CO n'est pas obligatoire en France pour les particuliers à ce jour, contrairement au détecteur de fumée, mais il est très fortement recommandé par Santé publique France. Choisir un modèle conforme à la norme EN 50291, à installer dans la pièce qui contient l'appareil ou à proximité directe, à environ 1,50 m du sol et à distance des courants d'air. Vérifier régulièrement la pile et la date de péremption (5 à 10 ans selon le modèle).",
  },
  {
    question: "Quelles sont les causes les plus fréquentes d'intoxication au CO ?",
    answer:
      "Selon Santé publique France, les principales causes sont une chaudière mal entretenue ou défaillante, un conduit de cheminée encrassé ou obstrué, un appareil de chauffage d'appoint inadapté (brasero, chauffage pétrole) utilisé en intérieur sans ventilation, un groupe électrogène ou un barbecue utilisé dans un garage ou sous un auvent fermé. Les pics d'intoxication ont lieu en hiver (octobre à mars), souvent lors d'épisodes de froid intense ou de coupure de courant qui poussent à utiliser des moyens de chauffage de secours. Près de 4 000 personnes sont prises en charge chaque année en France pour intoxication au CO.",
  },
  {
    question: "Le CO est-il vraiment indétectable sans appareil ?",
    answer:
      "Oui. Le monoxyde de carbone est totalement inodore, incolore et sans saveur. Aucune odeur de gaz, de fumée ou d'échappement ne signale sa présence. Lorsqu'on perçoit une odeur dans une pièce où fonctionne un appareil de combustion, ce sont d'autres composés (gaz naturel non brûlé, fumées) qui sont détectés, pas le CO. C'est précisément cette absence de signal sensoriel qui rend le CO dangereux : seul un détecteur permet d'alerter avant l'apparition des premiers symptômes.",
  },
];

export default function MonoxydeCarbonePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "Monoxyde de carbone dans la maison",
      href: "https://www.maisonbionat.fr/air-interieur/monoxyde-carbone-maison/",
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
        parentLabel="Air intérieur"
        parentHref="/air-interieur/"
        tag="Polluant intérieur"
        title="Monoxyde de carbone dans la maison : reconnaître le risque et le prévenir"
        quickAnswer="Le monoxyde de carbone (CO) est un gaz issu de la combustion incomplète de toute source carbonée : gaz, bois, granulés, fioul, charbon, essence. Inodore, incolore et sans saveur, il se fixe sur l'hémoglobine du sang à la place de l'oxygène et provoque des intoxications dès quelques heures d'exposition à des concentrations modérées, ou en quelques minutes à concentration élevée. C'est la première cause de mortalité par toxique en France selon Santé publique France, avec environ 4 000 prises en charge et 100 décès par an, principalement en hiver. La prévention repose sur trois leviers simples : entretien annuel obligatoire des chaudières (arrêté du 15 septembre 2009), bon fonctionnement de la ventilation, installation d'un détecteur de CO conforme EN 50291 dans toute pièce contenant un appareil de combustion."
        stats={[
          {
            value: "~4 000",
            label: "personnes prises en charge chaque année en France pour intoxication au CO (Santé publique France)",
          },
          {
            value: "~100 décès/an",
            label: "imputables au monoxyde de carbone, première cause de mortalité par toxique",
          },
          {
            value: "Octobre-mars",
            label: "période où surviennent l'écrasante majorité des intoxications domestiques",
          },
          {
            value: "EN 50291",
            label: "norme européenne de référence pour les détecteurs de CO domestiques",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le CO" },
          { id: "signes", label: "Signes d'intoxication" },
          { id: "causes", label: "Sources fréquentes" },
          { id: "actions", label: "Prévenir et réagir" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'est le monoxyde de carbone, comment il agit et pourquoi il tue chaque hiver."
        description="Le monoxyde de carbone (CO) se forme dès qu'une combustion est incomplète, c'est-à-dire que l'oxygène disponible est insuffisant pour brûler complètement le carbone du combustible. Il se fixe ensuite sur l'hémoglobine du sang à la place de l'oxygène, formant de la carboxyhémoglobine, et prive progressivement l'organisme d'oxygène. Le cerveau et le cœur sont les premiers atteints. Contrairement à beaucoup de polluants intérieurs qui agissent à long terme, le CO peut tuer en quelques heures à des concentrations modérées et en quelques minutes à concentration élevée."
        variants={[
          {
            indicator: "10 ppm",
            name: "Valeur guide OMS exposition longue",
            description:
              "L'Organisation mondiale de la santé recommande de ne pas dépasser 10 mg/m³ (≈ 9 ppm) en moyenne sur 8 heures dans l'air intérieur. Au-dessous de ce niveau, l'exposition reste compatible avec une absence d'effet notable chez les sujets sains, y compris les femmes enceintes et les personnes cardiaques.",
          },
          {
            indicator: "50-200 ppm",
            name: "Plage des intoxications subaiguës",
            description:
              "Une exposition de quelques heures à ces concentrations provoque maux de tête, nausées, vertiges, fatigue, parfois confusion. Les symptômes s'améliorent quand la victime quitte la pièce. C'est la situation typique d'une chaudière mal entretenue ou d'un poêle à tirage défectueux.",
          },
          {
            indicator: "> 800 ppm",
            name: "Risque vital rapide",
            description:
              "Au-dessus de 800 ppm, perte de connaissance possible en moins d'une heure et décès en moins de trois heures. Au-dessus de 1 600 ppm (groupe électrogène en intérieur, brasero dans une pièce fermée), perte de conscience en quelques minutes. Plus la concentration est haute, plus l'intoxication est foudroyante.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les signes d'une intoxication, sur soi et sur les proches."
        subtitle="Le CO ne se sent pas. Les symptômes sont les seuls signaux disponibles avant l'alerte d'un détecteur. Ils sont peu spécifiques mais ont une caractéristique forte : ils touchent souvent plusieurs personnes en même temps et s'améliorent à l'air libre."
        signs={[
          {
            label: "Maux de tête, nausées et vertiges qui apparaissent dans la même pièce",
            description:
              "Le signe le plus fréquent. Céphalées diffuses, nausées, parfois vomissements, sensation de tête lourde, vertiges. Quand les symptômes apparaissent en même temps chez plusieurs occupants d'une même pièce, surtout si un appareil de combustion fonctionne, le CO doit être suspecté en priorité.",
            severity: "critique",
          },
          {
            label: "Symptômes qui disparaissent en sortant et reviennent en rentrant",
            description:
              "Critère majeur d'orientation. Si vos symptômes s'améliorent franchement dès que vous sortez du logement et reviennent quelques minutes après être rentré, on est très probablement face à une intoxication subaiguë. Cette caractéristique distingue le CO d'une grippe, d'une migraine ou d'un virus saisonnier.",
            severity: "critique",
          },
          {
            label: "Animaux et bébés affectés en premier",
            description:
              "Animaux domestiques apathiques, somnolents, qui refusent de manger ou cherchent à sortir. Bébés inhabituellement endormis, irritables, qui régurgitent. Les organismes plus petits et les sujets fragiles montrent les signes plus tôt et plus fortement que les adultes.",
            severity: "critique",
          },
          {
            label: "Confusion, troubles de la vision, perte de coordination",
            description:
              "Étape suivante quand l'exposition se prolonge ou que la concentration augmente. Difficulté à se concentrer, vue floue, démarche incertaine, paroles désorganisées. À ce stade, l'évacuation immédiate et l'appel des secours ne se discutent plus.",
            severity: "critique",
          },
          {
            label: "Flamme de la chaudière ou de la cuisinière à gaz qui devient jaune ou orange",
            description:
              "Une combustion correcte donne une flamme bleue, claire et stable. Une flamme jaune, orangée, fumeuse ou qui se décroche est le signe direct d'une combustion incomplète et donc de production de CO. Couper l'appareil et faire intervenir un professionnel.",
            severity: "modéré",
          },
          {
            label: "Suies noirâtres autour d'un appareil ou d'un conduit",
            description:
              "Traces de suie sur la chaudière, le mur derrière un poêle, l'embouchure du conduit, les bouches d'aération. Indice d'une mauvaise évacuation des produits de combustion ou d'un encrassement, à prendre au sérieux même sans symptôme.",
            severity: "modéré",
          },
        ]}
        footerNote="En cas de suspicion : ouvrir immédiatement les fenêtres, couper l'appareil suspect, faire sortir tout le monde du logement, appeler le 15, le 18 ou le 112. Ne jamais retourner à l'intérieur tant qu'un professionnel n'a pas validé que la situation est sûre."
      />

      <IssueCauses
        id="causes"
        title="D'où vient le monoxyde de carbone dans une habitation."
        subtitle="Le CO provient toujours d'une combustion. Tout appareil qui brûle quelque chose dans un logement est une source potentielle, surtout s'il est mal entretenu, mal raccordé ou utilisé dans une pièce mal ventilée."
        causes={[
          {
            number: "01",
            cause: "Chaudière mal entretenue ou défaillante",
            explanation:
              "Première cause d'intoxication domestique. Une chaudière gaz, fioul ou bois mal réglée brûle de façon incomplète, surtout quand le brûleur est encrassé ou que l'apport d'air est insuffisant. L'arrêté du 15 septembre 2009 rend l'entretien annuel par un professionnel obligatoire pour toute chaudière de 4 à 400 kW. Cet entretien comprend la mesure du CO dans les fumées et le contrôle du tirage.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Conduit d'évacuation encrassé, obstrué ou inadapté",
            explanation:
              "Un conduit de cheminée bouché par des suies, un nid d'oiseau, des feuilles, ou un conduit dimensionné pour un autre type d'appareil refoule les fumées dans le logement. Le ramonage annuel (deux fois par an pour le bois) est obligatoire et reste l'un des leviers les plus efficaces pour éviter les intoxications hivernales.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Appareil de chauffage d'appoint à combustion utilisé en intérieur",
            explanation:
              "Brasero, barbecue, chauffage pétrole, chauffage à gaz d'appoint, plancha utilisés dans un garage, une véranda fermée ou une pièce non ventilée. Cause classique des intoxications collectives lors d'épisodes de froid intense ou de coupure de courant. Aucun de ces appareils ne doit fonctionner en espace clos sans évacuation dédiée.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Groupe électrogène mal placé",
            explanation:
              "Lors d'une coupure ou d'un chantier, un groupe électrogène fait fonctionner un moteur thermique qui produit beaucoup de CO. Placé dans un garage, un sous-sol, une cave, un atelier ou même sous un auvent abrité, il sature l'air en CO en quelques minutes. À utiliser exclusivement à l'extérieur, à plusieurs mètres de toute ouverture.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "VMC à l'arrêt ou bouches obstruées en présence d'appareils gaz",
            explanation:
              "Un logement avec chaudière gaz murale ou chauffe-eau à gaz qui voit sa VMC arrêtée, débranchée ou ses bouches d'extraction recouvertes (placard refait, papier collé) crée un déséquilibre d'air qui peut faire refouler les produits de combustion. Le risque augmente nettement quand la cuisine est fermée et qu'une hotte aspirante puissante fonctionne.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Prévenir le risque CO, et savoir quoi faire en cas de suspicion."
        immediate={[
          {
            label: "Faire l'entretien annuel de la chaudière par un professionnel",
            description:
              "Obligatoire pour toute chaudière de 4 à 400 kW (arrêté du 15 septembre 2009). Compter 80 à 200 € selon le type. Le professionnel mesure le taux de CO dans les fumées, contrôle le brûleur, l'évacuation et le tirage. C'est l'action la plus importante pour la sécurité du logement.",
            effort: "1 fois par an, intervention d'un professionnel",
          },
          {
            label: "Installer un détecteur de CO conforme EN 50291",
            description:
              "Coût 25 à 60 €. Placer le détecteur dans la pièce qui contient l'appareil de combustion ou à proximité directe, à environ 1,50 m du sol, à distance des courants d'air et des fenêtres. Vérifier la pile une fois par an et la date de péremption (5 à 10 ans selon le modèle). En cas d'alarme, sortir et appeler les secours, ne jamais ignorer.",
            effort: "Achat ponctuel, 25-60 €",
          },
          {
            label: "Faire ramoner les conduits aux dates obligatoires",
            description:
              "Une fois par an pour le gaz et le fioul, deux fois par an pour le bois et le charbon (dont une en période de chauffe). Le ramonage est obligatoire dans la plupart des règlements sanitaires départementaux. Conserver le certificat délivré par le ramoneur, exigé par les assurances en cas de sinistre.",
            effort: "1 à 2 fois par an, 60-100 € par passage",
          },
          {
            label: "Aérer même par grand froid 10 à 15 minutes par jour",
            description:
              "L'aération renouvelle l'oxygène nécessaire à une combustion complète et évacue le CO résiduel. Ne jamais boucher les grilles d'aération, les bouches de VMC ou les entrées d'air en façade, même pour économiser du chauffage : c'est l'une des erreurs les plus dangereuses.",
            effort: "Gratuit, 15 minutes par jour",
          },
        ]}
        structural={[
          {
            label: "Ne jamais utiliser en intérieur un appareil non conçu pour cela",
            description:
              "Brasero, barbecue, plancha, chauffage pétrole, chauffage gaz d'appoint, groupe électrogène : aucun de ces appareils ne doit fonctionner dans un logement, un garage attenant, un sous-sol ou une véranda fermée. Cette règle absolue évite la majorité des intoxications collectives recensées chaque hiver.",
            effort: "Règle d'usage, coût nul",
          },
          {
            label: "Vérifier la conformité de l'installation avec un professionnel certifié",
            description:
              "Pour une chaudière neuve ou un poêle à bois récemment installé, faire valider la conformité de l'évacuation et le dimensionnement par un installateur qualifié RGE ou Qualigaz. Une installation mal conçue (conduit trop court, sortie en zone de turbulence) expose à un refoulement des fumées vers l'intérieur.",
            effort: "Vérification ponctuelle",
          },
          {
            label: "Maintenir la VMC en état de fonctionnement permanent",
            description:
              "La VMC ne doit jamais être arrêtée, débranchée ou ses bouches obstruées dans un logement équipé d'un appareil à gaz. Un nettoyage tous les 6 mois et un contrôle du moteur tous les 5 à 10 ans suffisent dans la majorité des cas. Voir notre page entretien VMC pour le protocole détaillé.",
            effort: "30 minutes par semestre",
          },
          {
            label: "Réagir immédiatement en cas de suspicion",
            description:
              "Maux de tête simultanés chez plusieurs personnes, alarme du détecteur, suies, flamme jaune : ouvrir grand toutes les fenêtres, couper l'appareil, faire sortir tous les occupants et animaux, ne pas retourner à l'intérieur, appeler le 15, le 18 ou le 112. Préciser aux secours qu'on suspecte une intoxication au CO : ils interviennent avec un mesureur portatif.",
            effort: "Réflexe à connaître",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le monoxyde de carbone."
        errors={[
          {
            label: "\"Si ça sentait, je le saurais\"",
            explanation:
              "Le CO est totalement inodore, incolore et sans saveur. Aucune sensibilité humaine ne le détecte. L'odeur que l'on perçoit parfois près d'une chaudière ou d'un poêle correspond à d'autres produits de combustion (gaz non brûlé, fumées), pas au CO lui-même. C'est exactement cette absence de signal sensoriel qui rend ce gaz si dangereux.",
          },
          {
            label: "\"Mon installation est récente, je ne risque rien\"",
            explanation:
              "Une installation neuve mal réglée, mal raccordée ou dont le conduit est mal dimensionné peut produire et concentrer du CO dès la première utilisation. L'âge de la chaudière n'est pas un critère pertinent. Ce qui compte, c'est l'entretien annuel, la qualité de l'installation et le bon fonctionnement de la ventilation.",
          },
          {
            label: "\"Boucher les grilles d'aération l'hiver fait économiser du chauffage\"",
            explanation:
              "Geste à proscrire absolument dans un logement avec appareil à combustion. L'apport d'air est nécessaire à une combustion complète. Boucher les entrées d'air ou les bouches de VMC fait basculer l'appareil en combustion incomplète et concentre le CO dans les pièces de vie. La perte de chaleur par les grilles d'aération est de toute façon marginale comparée aux ponts thermiques et aux fenêtres.",
          },
          {
            label: "\"Le détecteur de fumée protège aussi du CO\"",
            explanation:
              "Faux. Un détecteur de fumée ordinaire (DAAF) détecte les particules issues d'un incendie, pas le CO, qui est un gaz invisible et sans particule. Pour détecter le monoxyde de carbone, il faut un détecteur spécifique conforme à la norme EN 50291. Certains modèles combinent les deux fonctions : vérifier que les deux normes sont mentionnées.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le monoxyde de carbone"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Entretien VMC : ce qui compte vraiment",
            description:
              "Une VMC fonctionnelle est indispensable pour assurer l'apport d'air des appareils de combustion et éviter les refoulements.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            tag: "Air intérieur",
            title: "Les polluants intérieurs les plus fréquents",
            description:
              "Situer le CO parmi les polluants typiques d'un logement : COV, particules fines, CO2, allergènes.",
            href: "/air-interieur/polluants-interieurs-frequents/",
          },
          {
            tag: "Rénovation saine",
            title: "Aérer après les travaux",
            description:
              "Un chantier qui modifie chauffage ou ventilation peut perturber les évacuations existantes : protocole pour limiter les risques.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
        ]}
      />
    </>
  );
}
