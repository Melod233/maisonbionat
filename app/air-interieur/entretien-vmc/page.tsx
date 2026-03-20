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
  title: "Entretenir sa VMC : protocole selon le type, fréquence et coûts",
  description:
    "Comment entretenir une VMC simple flux, double flux ou hygro : fréquence, gestes à faire soi-même et quand appeler un professionnel. Avec les coûts indicatifs.",
  alternates: { canonical: "https://www.maisonbionat.fr/air-interieur/entretien-vmc/" },
  openGraph: {
    title: "Entretenir sa VMC : protocole selon le type, fréquence et coûts",
    description:
      "Comment entretenir une VMC simple flux, double flux ou hygro : fréquence, gestes à faire soi-même et quand appeler un professionnel. Avec les coûts indicatifs.",
    url: "https://www.maisonbionat.fr/air-interieur/entretien-vmc/",
  },
};

export default function EntretienVmcPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Entretenir sa VMC : protocole selon le type, fréquence et coûts", href: "https://www.maisonbionat.fr/air-interieur/entretien-vmc/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Air intérieur"
        parentHref="/air-interieur/"
        tag="Guide pratique"
        title="Entretenir sa VMC : le protocole selon le type d'installation."
        quickAnswer="Une VMC mal entretenue peut perdre jusqu'à 50 % de son efficacité sans que vous le remarquiez. Les gestes à faire soi-même sont simples : nettoyer les bouches tous les 6 mois, vérifier les entrées d'air. Pour le reste, une vérification professionnelle tous les 3 à 5 ans suffit pour une VMC simple flux."
        stats={[
          { value: "6 mois", label: "fréquence recommandée pour nettoyer les bouches VMC soi-même" },
          { value: "3–6 mois", label: "intervalle de remplacement des filtres pour une VMC double flux" },
          { value: "5–10 ans", label: "fréquence d'une révision complète pour une VMC simple flux" },
          { value: "100–300 €", label: "coût indicatif d'un entretien professionnel pour VMC simple flux" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les types de VMC et leurs contraintes" },
          { id: "signes", label: "Signaux d'une VMC défaillante" },
          { id: "causes", label: "Pourquoi la VMC se dégrade" },
          { id: "actions", label: "Protocole d'entretien par type" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Types de VMC"
        title="Les trois types de VMC et ce que chacun demande en entretien"
        description="Les exigences d'entretien varient selon le type de VMC installée dans votre logement. Identifier le type est la première étape : regardez les bouches d'extraction (cuisine, salle de bain, WC) et, si vous avez accès à la machinerie, notez si un échangeur de chaleur et des filtres sont présents."
        variants={[
          {
            indicator: "Le plus répandu en France",
            name: "VMC simple flux : entretien minimal mais régulier",
            description:
              "La VMC simple flux extrait l'air des pièces humides et laisse entrer l'air frais par des entrées d'air passives (en haut des fenêtres ou dans les murs). Elle est la plus répandue dans les logements français. Son entretien est simple : nettoyer les bouches d'extraction tous les 6 mois, vérifier les entrées d'air, faire réviser le moteur tous les 5 à 10 ans. La version hygrorégulable (hygro A et B) ajuste le débit selon l'humidité et demande en plus le contrôle des capteurs hygrométriques.",
          },
          {
            indicator: "Plus performant, plus exigeant",
            name: "VMC double flux : entretien des filtres fréquent et obligatoire",
            description:
              "La VMC double flux extrait l'air vicié et insuffle de l'air frais filtré, en récupérant la chaleur via un échangeur. C'est le système le plus performant en termes de qualité d'air et d'économies d'énergie. Mais il demande un entretien plus rigoureux : les filtres (côté insufflation et côté extraction) se colmatent et doivent être remplacés tous les 3 à 6 mois selon l'environnement. L'échangeur doit être inspecté annuellement.",
          },
          {
            indicator: "Cas particulier",
            name: "VMC hygrorégulable : entretien des capteurs à ne pas négliger",
            description:
              "Les VMC de type hygro A et hygro B sont des VMC simple flux dont les bouches d'extraction ajustent leur débit en fonction de l'humidité locale. Si les capteurs sont encrassés, ils ne détectent plus les variations d'humidité et le débit reste constant, ce qui peut sous-ventiler certaines pièces. Le nettoyage des capteurs doit être effectué avec soin, sans liquide ni solvant, selon les instructions du fabricant.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Reconnaître le problème"
        title="Les signaux qui indiquent que la VMC ne fonctionne plus correctement"
        subtitle="Ces signes n'indiquent pas toujours une panne grave : souvent, un nettoyage des bouches ou des filtres suffit à restaurer le fonctionnement normal."
        signs={[
          {
            label: "Aucun flux d'air perceptible au niveau des bouches",
            description:
              "Tenez un morceau de papier ou votre main devant la bouche d'extraction : vous devriez sentir une légère aspiration. Aucune aspiration visible indique soit une obstruction, soit un moteur défaillant.",
            severity: "critique",
          },
          {
            label: "Bruit anormal : vibrations, sifflements ou ronronnements inhabituels",
            description:
              "Un bourdonnement plus fort qu'habituellement ou des vibrations peuvent signaler un filtre colmaté qui force le moteur, un corps étranger dans le conduit ou une défaillance du moteur. Un sifflement peut indiquer une entrée d'air trop obstruée.",
            severity: "modéré",
          },
          {
            label: "Odeurs de renfermé ou de moisissures dans les conduits",
            description:
              "Des odeurs provenant des bouches VMC signalent souvent un conduit colmaté, de la moisissure dans le réseau ou un problème d'humidité non évacuée. Nettoyer les bouches est la première étape ; si les odeurs persistent, un nettoyage professionnel des conduits peut être nécessaire.",
            severity: "modéré",
          },
          {
            label: "Condensation persistante sur les vitres malgré une aération régulière",
            description:
              "Si la condensation matinale sur les fenêtres persiste alors que vous aérez régulièrement, la VMC ne compense pas suffisamment l'humidité produite dans le logement. Vérifiez les débits et l'état des filtres ou bouches.",
            severity: "modéré",
          },
          {
            label: "Moisissures récurrentes dans les pièces humides",
            description:
              "Des moisissures qui reviennent dans les coins de salle de bain, derrière les meubles de cuisine ou aux angles des plafonds, malgré l'aération, indiquent souvent une extraction insuffisante. La VMC ne tire plus assez d'air humide.",
            severity: "critique",
          },
          {
            label: "Augmentation de la facture électrique sans explication",
            description:
              "Un moteur VMC qui force à cause de filtres colmatés consomme davantage d'électricité. Si votre consommation a augmenté sans autre explication, l'état des filtres ou du moteur mérite d'être vérifié.",
            severity: "léger",
          },
        ]}
        footerNote="Le premier réflexe face à ces signaux est de vérifier et nettoyer les bouches d'extraction et les entrées d'air. Dans la majorité des cas, cela restaure le fonctionnement normal. Si les problèmes persistent après ce nettoyage, un diagnostic professionnel est conseillé."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Causes de dégradation"
        title="Pourquoi la VMC se dégrade progressivement"
        subtitle="La dégradation d'une VMC est souvent progressive et invisible jusqu'à ce qu'un signe révélateur apparaisse."
        causes={[
          {
            number: "01",
            cause: "Accumulation de poussières sur les bouches d'extraction",
            explanation:
              "Les bouches VMC attirent l'air chargé de poussières, de graisses de cuisine et de particules diverses. En quelques mois, un dépôt se forme sur les grilles qui réduit le débit d'extraction. C'est la cause la plus fréquente de sous-performance, et la plus simple à corriger.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Filtres colmatés sur VMC double flux",
            explanation:
              "Les filtres d'une VMC double flux se saturent de particules et perdent leur perméabilité. Au-delà d'un certain colmatage, ils créent une résistance qui force le moteur, réduit le débit d'air frais insufflé et dégrade la récupération de chaleur. Le remplacement tous les 3 à 6 mois est nécessaire.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Entrées d'air obstruées",
            explanation:
              "Les entrées d'air passives (en haut des fenêtres ou dans les parois) doivent rester dégagées pour que la VMC puisse créer un flux traversant. Les obstruer (volontairement pour éviter les courants d'air, ou involontairement lors de travaux) casse le circuit de ventilation.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Condensation et humidité dans les conduits",
            explanation:
              "Dans les conduits traversant des zones non chauffées (combles, vide sanitaire), l'air chaud et humide peut condenser sur les parois froides. Cette humidité favorise le développement de moisissures dans le réseau. Un calorifugeage des conduits dans ces zones limite ce phénomène.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Vieillissement du moteur",
            explanation:
              "Le moteur d'une VMC a une durée de vie de 10 à 20 ans selon la qualité du matériel et la régularité de l'entretien. Un moteur vieillissant consomme davantage d'énergie et produit moins de débit. Une révision ou un remplacement peut s'imposer après 10 à 15 ans.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Protocole d'entretien : ce que vous pouvez faire vous-même"
        immediateLabel="À faire soi-même"
        structuralLabel="Faire appel à un professionnel"
        immediate={[
          {
            label: "Nettoyer les bouches d'extraction tous les 6 mois",
            description:
              "Dépoussiérez les grilles avec un chiffon humide ou un aspirateur à faible puissance. Pour les bouches en salle de bain, nettoyez également l'intérieur visible de la grille pour retirer le dépôt de calcaire et de graisse. Pour les bouches de cuisine, un dégraissant doux peut être utile.",
            effort: "15 à 30 min, tous les 6 mois",
          },
          {
            label: "Vérifier et dégager les entrées d'air",
            description:
              "Inspectez les entrées d'air passives (en haut des fenêtres ou dans les parois). Retirez la poussière accumulée avec un pinceau doux. Assurez-vous qu'elles ne sont pas bouchées par des rideaux, des meubles ou des bandes d'étanchéité ajoutées lors de travaux.",
            effort: "10 min, une fois par an",
          },
          {
            label: "Remplacer les filtres d'une VMC double flux tous les 3 à 6 mois",
            description:
              "Référez-vous à la documentation de votre appareil pour identifier la référence des filtres. La plupart des VMC double flux sont équipées de filtres F7 ou G4 facilement accessibles. Commandez les filtres auprès du fabricant ou d'un distributeur spécialisé. L'opération prend 15 à 30 minutes.",
            effort: "20 à 60 euros par remplacement, tous les 3 à 6 mois",
          },
          {
            label: "Nettoyer les capteurs hygrométriques (VMC hygro)",
            description:
              "Sur les VMC hygrorégulables, les capteurs des bouches peuvent s'encrasser et fausser la régulation. Retirez délicatement la bouche et nettoyez le capteur avec un pinceau sec, sans liquide ni solvant. Consultez la notice du fabricant pour les précautions spécifiques à votre modèle.",
            effort: "30 min, une fois par an",
          },
        ]}
        structural={[
          {
            label: "Faire mesurer les débits par un professionnel",
            description:
              "Un technicien en ventilation peut mesurer les débits réels aux bouches avec un anémomètre et les comparer aux valeurs réglementaires. C'est la seule façon de s'assurer que la VMC fonctionne correctement. Cette vérification est recommandée lors de l'installation et tous les 3 à 5 ans.",
            effort: "100 à 200 euros, tous les 3 à 5 ans (VMC simple flux)",
          },
          {
            label: "Faire nettoyer les conduits si des odeurs persistent",
            description:
              "Un nettoyage professionnel des gaines s'impose si des odeurs de moisissures persistent après le nettoyage des bouches, ou si un bouchon s'est formé dans le réseau. Ce type d'intervention est moins fréquent et coûte entre 200 et 500 euros selon la surface du logement.",
            effort: "200 à 500 euros, selon besoin",
          },
          {
            label: "Révision complète de la VMC simple flux (tous les 5 à 10 ans)",
            description:
              "Équilibrage des débits, vérification du moteur, contrôle du réseau de conduits et des raccords. Pour une VMC simple flux, cette révision est recommandée tous les 5 à 10 ans. Pour une VMC double flux, un contrôle annuel de l'échangeur de chaleur est conseillé.",
            effort: "150 à 300 euros, tous les 5 à 10 ans",
          },
          {
            label: "Remplacement du moteur ou de l'unité centrale en fin de vie",
            description:
              "Un moteur en fin de vie (plus de 15 à 20 ans) consomme davantage pour un débit réduit. Son remplacement améliore l'efficacité et réduit la consommation électrique. Le coût varie de 200 à 600 euros selon le type d'installation.",
            effort: "200 à 600 euros",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut pas faire lors de l'entretien"
        errors={[
          {
            label: "Peindre ou recouvrir les bouches VMC",
            explanation:
              "Peindre les grilles d'extraction lors d'une rénovation est une erreur courante qui obstrue les perforations et réduit significativement le débit. Si vous redécorez, retirez les bouches avant de peindre et remettez-les en place après séchage.",
          },
          {
            label: "Obstruer les entrées d'air pour éviter les courants",
            explanation:
              "Sans entrées d'air dégagées, la VMC ne peut pas créer de flux traversant et son débit effectif chute. La sensation de courant d'air s'atténue souvent en repositionnant le mobilier ou en ajoutant un déflecteur, sans boucher l'entrée.",
          },
          {
            label: "Utiliser des produits chimiques pour nettoyer les capteurs hygro",
            explanation:
              "Les capteurs hygrométriques sont sensibles aux solvants et aux liquides. Les nettoyer avec un spray nettoyant ou un produit ménager peut les endommager définitivement. Un pinceau sec suffit.",
          },
          {
            label: "Attendre la panne pour entretenir",
            explanation:
              "Une VMC se dégrade progressivement sans signe évident pendant des années. Attendre une panne franche pour intervenir, c'est accepter des années de sous-ventilation. Un entretien régulier et préventif est bien plus efficace.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'entretien de la VMC"
        items={[
          {
            question: "À quelle fréquence faut-il nettoyer les bouches VMC ?",
            answer:
              "Tous les 6 mois pour les bouches d'extraction, avec un chiffon humide ou un aspirateur. Les entrées d'air passives méritent une vérification annuelle. Pour une VMC double flux, les filtres doivent être remplacés tous les 3 à 6 mois selon l'environnement (plus souvent en zone urbaine ou si vous avez des animaux).",
          },
          {
            question: "Puis-je entretenir ma VMC moi-même ou faut-il un professionnel ?",
            answer:
              "Le nettoyage des bouches, la vérification des entrées d'air et le remplacement des filtres d'une VMC double flux sont des gestes accessibles sans compétences techniques particulières. Pour la mesure des débits, le nettoyage des conduits ou une révision complète du moteur, un professionnel en ventilation est nécessaire.",
          },
          {
            question: "Comment savoir si ma VMC fonctionne correctement ?",
            answer:
              "Le test le plus simple : approchez un morceau de papier fin ou votre main d'une bouche d'extraction. Vous devez sentir une légère aspiration. Si rien ne se passe, les bouches sont peut-être obstruées ou le moteur est défaillant. Pour une mesure précise, seul un professionnel avec un anémomètre peut confirmer que les débits respectent les valeurs réglementaires.",
          },
          {
            question: "Quelle est la différence d'entretien entre une VMC simple flux et double flux ?",
            answer:
              "La VMC simple flux demande peu d'entretien : nettoyage des bouches tous les 6 mois et révision professionnelle tous les 5 à 10 ans. La VMC double flux est plus exigeante : remplacement des filtres tous les 3 à 6 mois, inspection annuelle de l'échangeur de chaleur et nettoyage des conduits d'insufflation.",
          },
          {
            question: "Combien coûte un entretien professionnel de VMC ?",
            answer:
              "Pour une VMC simple flux, une vérification et un entretien professionnel coûtent entre 100 et 300 euros selon la région et le prestataire. Pour une VMC double flux, comptez entre 200 et 500 euros. Ces coûts n'incluent pas un remplacement de moteur ou un nettoyage complet des conduits, qui s'ajoute si nécessaire.",
          },
          {
            question: "Ma VMC fait du bruit : est-ce grave ?",
            answer:
              "Un léger ronronnement est normal. Un bruit qui a augmenté récemment, des vibrations ou des sifflements méritent d'être vérifiés. Commencez par nettoyer les bouches et vérifier les filtres : un filtre colmaté force le moteur et augmente le bruit. Si le bruit persiste après ces vérifications, un professionnel peut diagnostiquer une défaillance du moteur ou un problème de conduits.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Aération ou ventilation : quelle différence ?",
            description:
              "Comprendre les rôles respectifs de l'aération manuelle et de la VMC, et comment les combiner efficacement.",
            href: "/air-interieur/aeration-ou-ventilation/",
          },
          {
            tag: "Air intérieur",
            title: "Améliorer l'air dans sa maison",
            description:
              "Stratégie complète pour réduire les polluants : aération, ventilation, choix de matériaux et gestes du quotidien.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
          {
            tag: "Rénovation saine",
            title: "Isolation et ventilation",
            description:
              "Lors d'une rénovation, isolation et ventilation doivent être pensées ensemble. Une maison plus étanche nécessite une ventilation d'autant plus efficace.",
            href: "/renovation-saine/isolation-ventilation/",
          },
        ]}
      />
    </>
  );
}
