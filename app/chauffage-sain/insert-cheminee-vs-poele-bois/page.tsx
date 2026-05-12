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
  title: "Insert, cheminée ouverte ou poêle à bois : rendement, émissions, comparatif",
  description:
    "Cheminée ouverte (rendement 10-15 %), insert (50-75 %), poêle à bois récent labellisé Flamme Verte 7 étoiles (75-85 %) : comparatif des solutions bois domestique, émissions de particules, cadre des aides 2026.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/chauffage-sain/insert-cheminee-vs-poele-bois/",
  },
  openGraph: {
    title: "Insert, cheminée ouverte ou poêle à bois : rendement, émissions, comparatif",
    description:
      "Cheminée 10-15 %, insert 50-75 %, poêle labellisé 75-85 % : choix rendement, émissions et aides 2026.",
    url: "https://www.maisonbionat.fr/chauffage-sain/insert-cheminee-vs-poele-bois/",
  },
};

export default function InsertCheminePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Chauffage sain", href: "/chauffage-sain/" },
    {
      name: "Insert, cheminée ou poêle à bois",
      href: "https://www.maisonbionat.fr/chauffage-sain/insert-cheminee-vs-poele-bois/",
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
        tag="Comparatif technique et qualité de l'air"
        title="Insert, cheminée ouverte, poêle à bois : choisir selon rendement et émissions."
        quickAnswer="Une cheminée à foyer ouvert offre un rendement de seulement 10 à 15 % : la majeure partie de la chaleur s'échappe par le conduit. Elle émet aussi beaucoup de particules fines dans l'habitat et à l'extérieur. Un insert (foyer fermé installé dans une cheminée existante) atteint 50 à 75 % de rendement et limite fortement les émissions, à condition d'être labellisé Flamme Verte 7 étoiles ou équivalent (norme EN 13229). Un poêle à bois récent labellisé Flamme Verte 7 étoiles atteint 75 à 85 % de rendement avec des émissions de particules très inférieures aux modèles anciens. Pour la qualité de l'air intérieur comme extérieur, ainsi que pour les aides 2026 (MaPrimeRénov', CEE), le choix raisonnable est un appareil labellisé récent, en remplacement d'une cheminée ouverte ou d'un appareil ancien. Cette page compare les trois options et précise les critères d'arbitrage."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "10–15 %", label: "rendement d'une cheminée à foyer ouvert" },
          { value: "50–75 %", label: "rendement d'un insert moderne fermé" },
          { value: "75–85 %", label: "rendement d'un poêle Flamme Verte 7 étoiles" },
          { value: "÷ 10", label: "réduction des émissions de particules entre cheminée ouverte et poêle récent labellisé (ADEME)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comparatif des trois options" },
          { id: "signes", label: "Quand remplacer son équipement" },
          { id: "causes", label: "Pourquoi le label compte" },
          { id: "actions", label: "Choisir et installer" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Comparatif"
        title="Cheminée ouverte, insert et poêle à bois : ce qui les distingue vraiment"
        description="Les trois équipements partagent le combustible bois mais leurs performances thermiques et environnementales sont très différentes. Les chiffres ci-dessous reposent sur les données ADEME et les normes EN 13229 et EN 13240."
        variants={[
          {
            indicator: "À éviter neuf",
            name: "Cheminée à foyer ouvert (en place dans le bâti ancien)",
            description:
              "Rendement de 10 à 15 % : 85 à 90 % de l'énergie part par le conduit. Émissions élevées de particules fines (PM10, PM2,5) à l'intérieur comme à l'extérieur. Risque de refoulement de fumée. Confort thermique limité au rayonnement immédiat. Aucune aide financière disponible pour une installation neuve. Acceptable en usage d'agrément très ponctuel dans une maison déjà équipée d'un autre chauffage performant.",
          },
          {
            indicator: "Bon compromis",
            name: "Insert (foyer fermé installé dans cheminée existante)",
            description:
              "Rendement 50 à 75 % selon modèle et qualité d'installation. Particules fines réduites de 70 à 90 % par rapport au foyer ouvert. Conserve l'esthétique d'une cheminée existante. Convient pour les maisons disposant d'un foyer ancien à transformer. Éligible aux aides si labellisé Flamme Verte 7 étoiles ou équivalent et installé par un artisan RGE Qualibois.",
          },
          {
            indicator: "Plus performant",
            name: "Poêle à bois récent labellisé",
            description:
              "Rendement 75 à 85 % pour les modèles Flamme Verte 7 étoiles, parfois 90 % pour les modèles double combustion ou à granulés haut de gamme. Émissions de particules les plus faibles parmi les appareils domestiques au bois. Installation en pose libre (pas besoin de conduit maçonné existant). Solution recommandée pour les constructions neuves et les rénovations sans contrainte de cheminée existante.",
          },
          {
            indicator: "Variante",
            name: "Poêle à granulés (pellets)",
            description:
              "Combustible standardisé (granulés certifiés EN 14961-2 A1 ou DINplus), alimentation automatique, programmation possible. Rendement très élevé (85 à 95 %), émissions encore plus faibles que les poêles à bûches. Pilotage à distance, autonomie de plusieurs jours selon réservoir. Inconvénients : nécessite une alimentation électrique, dépendant du marché des granulés (prix variables), maintenance plus technique.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Quand remplacer"
        title="Indicateurs d'un appareil obsolète à remplacer."
        subtitle="Un appareil au bois ancien (avant 2010 typiquement) ou en mauvais état consomme plus, chauffe moins, émet plus de particules. Voici les signaux qui justifient un remplacement."
        signs={[
          {
            label: "Vitre noircie en permanence après quelques heures",
            description:
              "Une vitre qui se noircit rapidement et reste sale signale une combustion incomplète : entrée d'air insuffisante, bois trop humide, ou appareil ancien sans double combustion. Sur un poêle moderne avec balayage d'air sur la vitre, une vitre propre est la norme. La situation inverse mérite réglages ou remplacement.",
            severity: "modéré",
          },
          {
            label: "Conduit qui refoule de la fumée à l'allumage ou en cours de fonctionnement",
            description:
              "Refoulement répété indique un défaut de tirage : conduit obstrué, défaut d'arrivée d'air, dimensionnement inadapté, dépression dans le logement (VMC qui contre le tirage). Refoulement = monoxyde de carbone dans le logement. À diagnostiquer en urgence par un chauffagiste qualifié. Voir aussi la page monoxyde de carbone.",
            severity: "critique",
          },
          {
            label: "Bois consommé en grande quantité pour peu de chaleur",
            description:
              "Une cheminée ouverte ou un appareil ancien peut consommer 2 à 3 fois plus de bois qu'un poêle récent à confort équivalent. Si votre consommation annuelle paraît élevée comparée à des voisins équipés en moderne, le remplacement amorti en 3 à 7 ans selon prix du bois.",
            severity: "léger",
          },
          {
            label: "Odeur de fumée persistante dans le logement",
            description:
              "L'odeur de fumée en dehors des moments d'allumage signale des fuites du foyer (joints, vitre, porte) ou un mauvais tirage. Outre l'inconfort olfactif, l'exposition prolongée aux fumées de bois est documentée comme néfaste pour les voies respiratoires (Santé publique France, ADEME).",
            severity: "modéré",
          },
          {
            label: "Appareil installé avant 2010",
            description:
              "Les poêles et inserts d'avant 2010 ont des rendements typiques de 50 à 65 % et des émissions de particules nettement plus élevées que les modèles récents labellisés. Sans urgence immédiate, le remplacement à la prochaine défaillance ou opportunité (aides) est rentable.",
            severity: "léger",
          },
          {
            label: "Zones réglementées (PPA, vallées alpines)",
            description:
              "Plusieurs régions disposent de Plans de Protection de l'Atmosphère (PPA) qui interdisent ou restreignent les foyers ouverts et les appareils anciens : Vallée de l'Arve (Haute-Savoie), zones autour de Grenoble, Lyon, certaines communes franciliennes. Vérifier la réglementation locale auprès de la mairie ou de la DREAL avant remplacement ou installation neuve.",
            severity: "critique",
          },
        ]}
        footerNote="En cas de symptômes inhabituels en présence du chauffage (maux de tête, vertiges, nausées), consulter un médecin et faire vérifier l'installation par un chauffagiste qualifié. Le risque de monoxyde de carbone est silencieux et grave."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi le label"
        title="Pourquoi le label Flamme Verte et la norme comptent."
        subtitle="Le bois est un combustible renouvelable mais ses émissions de particules sont importantes. La différence entre un appareil ancien et un appareil récent labellisé peut atteindre un facteur 10 à 20 pour les particules fines."
        causes={[
          {
            number: "01",
            cause: "La combustion incomplète émet des particules fines",
            explanation:
              "Quand la combustion est incomplète (trop peu d'air, bois humide, foyer froid), une partie du carbone du bois part en fumée sous forme de particules fines (PM2,5) et de gaz imbrûlés (CO, COV, HAP). Les appareils modernes maintiennent une combustion plus complète et plus chaude, ce qui réduit drastiquement ces émissions.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Le chauffage au bois domestique pèse sur la qualité de l'air extérieur",
            explanation:
              "Selon l'inventaire CITEPA pour la France, le chauffage au bois domestique représente environ 50 % des émissions nationales de PM2,5, dominé par les anciens appareils et les cheminées ouvertes. Le remplacement progressif par des appareils labellisés est un levier majeur de la politique de qualité de l'air.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le label Flamme Verte standardise rendement et émissions",
            explanation:
              "Le label Flamme Verte, géré par le Syndicat des énergies renouvelables avec l'ADEME, certifie le rendement (≥75 %) et les émissions maximales de polluants (CO, COG, particules) selon une grille étoilée. Depuis 2020, seuls les appareils 7 étoiles sont certifiés Flamme Verte, garantissant les performances les plus élevées. Aides MaPrimeRénov' et CEE conditionnées au label ou équivalent.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Le bois utilisé influence aussi les émissions",
            explanation:
              "Bois sec (taux d'humidité ≤ 20 %) : combustion propre, peu de particules. Bois humide : combustion lente, fumée, suie, particules multipliées par 5 à 10. Stockage à l'abri couvert et ventilé, 1 à 2 ans de séchage minimum. Achat de bois certifié NF Bois de chauffage ou France Bois Bûche : garantie d'humidité contrôlée. Cet aspect compte autant que le choix de l'appareil.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "L'installation par un professionnel RGE est décisive",
            explanation:
              "Le dimensionnement de l'appareil (puissance adaptée à la pièce et au logement, surpuissant = mauvaise combustion en allure réduite), la qualité du conduit (tirage, isolation, ramonage), l'arrivée d'air dédiée : tous ces points conditionnent les performances réelles. Un appareil très performant mal posé fonctionnera mal. Le label RGE Qualibois de l'installateur conditionne aussi les aides 2026.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Comment choisir et installer dans les règles."
        immediateLabel="Préparer son projet et son budget"
        structuralLabel="Installation, mise en service, exploitation"
        immediate={[
          {
            label: "Dimensionner la puissance selon le logement",
            description:
              "Surdimensionner conduit à fonctionner en allure réduite (combustion incomplète, encrassement, surconsommation). Sous-dimensionner ne couvre pas le besoin. Règle indicative : 0,06 à 0,1 kW par m² selon isolation et zone climatique. Pour un salon de 30 m² bien isolé : 4 à 8 kW. Étude personnalisée par installateur RGE recommandée. Refuser les surpuissances vendues comme « marge de sécurité ».",
            effort: "Étude par pro",
          },
          {
            label: "Vérifier l'éligibilité aux aides 2026",
            description:
              "MaPrimeRénov' : aide variable selon revenus, conditionnée à un appareil Flamme Verte 7 étoiles minimum et installation par artisan RGE Qualibois. Certificats d'économies d'énergie (CEE) cumulables. TVA réduite à 5,5 % pour l'installation. Simulation possible sur maprimerenov.gouv.fr. Anticiper la dépose de l'ancien appareil dans le projet pour bénéficier de la prime « remplacement ».",
            effort: "Simulation en ligne",
          },
          {
            label: "Comparer plusieurs devis d'artisans RGE Qualibois",
            description:
              "Demander 3 devis détaillés : modèle proposé, puissance, rendement, classe d'émissions, conduit (existant ou neuf), arrivée d'air, dépose ancien appareil, mise en service, garanties, contrats d'entretien. Refuser les devis approximatifs. Vérifier la qualification RGE sur l'annuaire France Rénov'.",
            effort: "3 à 4 semaines de comparaison",
          },
          {
            label: "Vérifier la conformité du conduit",
            description:
              "Un conduit existant doit être tubé en inox si non conforme au DTU 24.1 (la majorité des conduits anciens). Diamètre adapté à l'appareil. Hauteur suffisante (typiquement 4 m minimum). Souche en bon état au-dessus du toit. Diagnostic conduit (50 à 200 €) ou intégré au devis de l'installateur RGE. Sans conduit conforme, pas de mise en service possible.",
            effort: "Diagnostic préalable",
          },
        ]}
        structural={[
          {
            label: "Brûler du bois sec certifié",
            description:
              "Bois sec : taux d'humidité ≤ 20 %, brille au son sec quand on choque deux bûches. Certifications recommandées : NF Bois de chauffage, France Bois Bûche, ONF Énergie Bois. Stockage personnel : 1 à 2 ans à l'abri couvert et ventilé (pas en cave humide), bûches surélevées du sol. Acheter en mai-juin pour la saison de chauffe suivante.",
            effort: "60 à 100 € par stère bois sec certifié",
          },
          {
            label: "Allumer par le haut (méthode top-down)",
            description:
              "Plutôt que d'allumer le petit bois sous les grosses bûches, disposer 2 à 3 bûches au fond, du petit bois et de l'allume-feu au-dessus, allumer le tout par le haut. Combustion propre dès le démarrage, moins de fumée, moins d'imbrûlés. Méthode promue par l'ADEME et la plupart des fabricants de poêles modernes.",
            effort: "Habitude à adopter",
          },
          {
            label: "Ramonage 1 à 2 fois par an",
            description:
              "Obligation légale : 2 ramonages par an dont 1 en période de chauffe pour les conduits utilisés pour le bois (règlement sanitaire départemental). Réalisé par professionnel qualifié, certificat à conserver pour assurance. Prévention du feu de cheminée et maintien des performances. Coût indicatif : 70 à 150 € par ramonage.",
            effort: "140 à 300 € par an",
          },
          {
            label: "Entretien annuel professionnel de l'appareil",
            description:
              "Visite annuelle par un chauffagiste : vérification des joints, nettoyage des conduits internes, contrôle du tirage, vérification de l'arrivée d'air. Souvent inclus dans un contrat avec le ramonage. Maintenance qui prolonge la durée de vie (typiquement 15 à 25 ans) et préserve les performances.",
            effort: "Contrat entretien 100 à 250 €/an",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs à éviter avec un appareil au bois."
        errors={[
          {
            label: "Installer un poêle dans une pièce sans arrivée d'air dédiée",
            explanation:
              "Un appareil étanche moderne exige une arrivée d'air comburant directe depuis l'extérieur, surtout en logement BBC/RT2012 ou avec VMC. Sans arrivée d'air, le poêle puise dans l'air ambiant, met le logement en dépression, et peut entrer en concurrence avec la VMC : refoulement, monoxyde de carbone. À vérifier impérativement à l'installation.",
          },
          {
            label: "Conserver une cheminée ouverte en usage principal",
            explanation:
              "Au-delà du rendement médiocre, la cheminée ouverte émet beaucoup de particules dans l'habitat et l'extérieur. Plusieurs PPA et arrêtés municipaux restreignent désormais son usage en agglomération. La transformation en insert ou le remplacement par un poêle moderne est une amélioration nette, sanitairement et économiquement.",
          },
          {
            label: "Brûler du bois humide ou récupéré non identifié",
            explanation:
              "Bois encore vert ou humide : combustion incomplète, fumée, particules, encrassement rapide, perte de rendement. Bois récupéré peint, traité, verni : libération de substances toxiques dangereuses (formaldéhyde, métaux lourds, dioxines selon traitement). Brûler uniquement du bois sec et non traité.",
          },
          {
            label: "Faire fonctionner en allure très réduite (« nuit »)",
            explanation:
              "Une combustion en allure très réduite (fermeture de l'arrivée d'air pour ralentir) émet beaucoup de particules et encrasse rapidement le conduit. Préférer une combustion vive et intermittente plutôt qu'un feu lent toute la nuit. Les poêles à inertie (stockage de chaleur dans la masse) ou les poêles à granulés gèrent mieux la longue durée que les bûches en allure réduite.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur insert et poêle à bois"
        items={[
          {
            question: "Quel budget total prévoir ?",
            answer:
              "Insert dans cheminée existante (tubage compris) : 3 000 à 7 000 € posé. Poêle à bois bûches Flamme Verte 7 étoiles avec conduit neuf : 4 000 à 9 000 € posé. Poêle à granulés équivalent : 5 000 à 12 000 € posé. Aides MaPrimeRénov' + CEE : 1 000 à 4 500 € selon revenus et performance. Reste à charge typique : 2 000 à 7 000 € selon configuration.",
          },
          {
            question: "Un poêle à bois pollue-t-il vraiment plus qu'une chaudière gaz ?",
            answer:
              "Pour les particules fines (PM2,5) : oui, même les meilleurs poêles à bois émettent plus de particules qu'une chaudière gaz à condensation. Pour le CO₂ : la combustion du bois est neutre sur le cycle court si la ressource est gérée durablement (le bois est renouvelable, le gaz est fossile). Le bois reste une bonne option dans les zones rurales bien ventilées avec appareils labellisés et bois sec ; il est plus problématique en zone urbaine dense à pollution atmosphérique préoccupante.",
          },
          {
            question: "Insert ou poêle pour une rénovation de maison ancienne ?",
            answer:
              "Si la cheminée existante est en bon état (conduit, souche, foyer maçonné), l'insert préserve l'esthétique et optimise un équipement existant : choix souvent pertinent. Si pas de cheminée existante ou conduit en mauvais état, un poêle avec nouveau conduit est plus simple et performant. Le choix dépend autant du bâti que des préférences esthétiques. Devis comparatifs utiles pour trancher.",
          },
          {
            question: "Quel rythme d'utilisation justifie l'investissement ?",
            answer:
              "Un poêle ou insert installé pour usage occasionnel d'agrément (week-ends, soirée) : investissement difficile à amortir économiquement, choix de confort surtout. Pour un usage principal (chauffage régulier d'une pièce de vie ou d'un logement entier 4 à 6 mois par an) : amortissement en 5 à 15 ans selon prix de l'énergie alternative. À mettre en perspective avec l'effort logistique du bois (achat, stockage, alimentation).",
          },
          {
            question: "Le poêle peut-il chauffer toute la maison ?",
            answer:
              "Un poêle puissant central peut chauffer un logement compact bien isolé (typiquement <100 m² en plan ouvert). Pour des surfaces plus grandes ou cloisonnées, ajout de gaines de redistribution d'air chaud vers d'autres pièces (poêle canalisable), ou complément par un autre mode de chauffage (radiateurs électriques pilotés en appoint). Le poêle hydraulique (raccordé au circuit de chauffage central) existe mais est lourd à mettre en œuvre, à réserver aux gros projets.",
          },
          {
            question: "Faut-il un détecteur de monoxyde de carbone ?",
            answer:
              "Oui, fortement recommandé pour tout logement équipé d'un appareil de combustion (bois, gaz, fioul). Un détecteur CO conforme à la norme EN 50291 (15 à 40 €) installé près de l'appareil et dans la chambre la plus proche. Test mensuel des piles. Le monoxyde de carbone est inodore et incolore : aucun signe préalable à l'intoxication. Voir aussi la page dédiée au monoxyde de carbone.",
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
              "Vue d'ensemble : choisir son chauffage, pompe à chaleur, poêle à bois, chauffage électrique.",
            href: "/chauffage-sain/",
          },
          {
            tag: "Chauffage sain",
            title: "Poêle à bois et air intérieur",
            description:
              "Approfondissement de la dimension qualité de l'air d'un poêle à bois bien utilisé.",
            href: "/chauffage-sain/poele-bois-air-interieur/",
          },
          {
            tag: "Air intérieur",
            title: "Monoxyde de carbone à la maison",
            description:
              "Risque silencieux des appareils de combustion : détecteur, signes, conduite à tenir.",
            href: "/air-interieur/monoxyde-carbone-maison/",
          },
        ]}
      />
    </>
  );
}
