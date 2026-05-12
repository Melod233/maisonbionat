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
  title: "Analyse de sol pour potager : plomb, métaux lourds et risque urbain",
  description:
    "Pourquoi et comment faire analyser sa terre avant un potager : plomb, cadmium, arsenic, contexte urbain et périurbain. Démarche, coût (50 à 150 €), seuils réglementaires, alternatives (bac surélevé, terre rapportée).",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/analyse-sol-potager-metaux-lourds/",
  },
  openGraph: {
    title: "Analyse de sol pour potager : plomb, métaux lourds et risque urbain",
    description:
      "Faut-il analyser sa terre avant de planter un potager ? Cas concrets, démarche, seuils, alternatives en bac surélevé.",
    url: "https://www.maisonbionat.fr/jardin/analyse-sol-potager-metaux-lourds/",
  },
};

export default function AnalyseSolPotagerPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Analyse de sol pour potager : plomb, métaux lourds et risque urbain",
      href: "https://www.maisonbionat.fr/jardin/analyse-sol-potager-metaux-lourds/",
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
        tag="Sol urbain et sécurité alimentaire"
        title="Analyser sa terre avant un potager : quand c'est utile, comment faire."
        quickAnswer="Une analyse de sol pour potager est pertinente dans deux cas : si vous habitez en zone urbaine ou périurbaine sur un site qui a pu connaître un usage industriel, automobile ou artisanal ancien, et si votre maison est ancienne avec des peintures au plomb dégradées ou un ancien usage de pesticides interdits. L'analyse coûte 50 à 150 € en laboratoire spécialisé et recherche les principaux contaminants (plomb, cadmium, arsenic, parfois zinc, cuivre, chrome). La limite réglementaire pour le plomb dans les sols agricoles est de 100 mg/kg de matière sèche (épandage de boues). Au-dessus des seuils sanitaires, deux options : potager en bacs surélevés avec terre rapportée certifiée, ou plantes d'ornement uniquement. Le risque concerne en priorité les légumes-racines et feuilles consommés crus."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "100 mg/kg", label: "limite réglementaire pour le plomb dans les sols agricoles (épandage)" },
          { value: "50–150 €", label: "coût d'une analyse en laboratoire spécialisé" },
          { value: "30 cm", label: "profondeur de prélèvement recommandée pour le potager" },
          { value: "5 à 10 ans", label: "persistance du plomb dans les sols (faible mobilité)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Quand analyser" },
          { id: "signes", label: "Indices de risque" },
          { id: "causes", label: "Pourquoi c'est important" },
          { id: "actions", label: "Démarche et alternatives" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Quand analyser"
        title="Dans quels cas une analyse de sol est-elle pertinente"
        description="L'analyse n'est pas systématique : la majorité des jardins ruraux sans antécédent industriel ne présente pas de risque significatif. Voici les cas où elle se justifie."
        variants={[
          {
            indicator: "Justifiée",
            name: "Zone urbaine ou périurbaine ancienne",
            description:
              "Centres-villes anciens, anciens faubourgs industriels, terrains en bord de voie à fort trafic d'avant 2000 (plomb des essences, retombées atmosphériques). Une analyse de sol avant un potager familial est un investissement raisonnable (50 à 150 €) pour ces situations.",
          },
          {
            indicator: "Justifiée",
            name: "Site avec antécédents documentés",
            description:
              "Ancienne usine, garage, station-service, atelier de peinture, jardin sous une haie de bordure ancienne (peintures de portail), terrain situé sur un ancien crassier ou remblai. Consulter la base GEORISQUES.gouv.fr et la base BASOL pour les sites pollués identifiés. Si site identifié à proximité : analyse recommandée.",
          },
          {
            indicator: "Optionnelle",
            name: "Maison ancienne (avant 1949) en milieu rural",
            description:
              "Pratiques anciennes parfois préoccupantes (pesticides chlorés interdits depuis longtemps, plomb des peintures de menuiseries, anciens cendriers de bois en jardin). Le risque est moindre qu'en milieu urbain mais une analyse reste utile si vous projetez un gros potager familial productif.",
          },
          {
            indicator: "Peu utile",
            name: "Terrain rural avec antécédent agricole non industriel",
            description:
              "Anciens prés, jardins existants depuis plusieurs générations, terrain sans antécédent industriel ou polluant connu : analyse non prioritaire pour les métaux lourds. Privilégier alors une analyse agronomique classique (pH, matière organique, NPK) si vous voulez optimiser le potager.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Évaluer"
        title="Les indices de risque à observer avant de décider."
        subtitle="Quelques observations simples avant de commander une analyse : si plusieurs indices se cumulent, l'analyse devient clairement utile."
        signs={[
          {
            label: "Présence d'une route à fort trafic à proximité avant 2000",
            description:
              "Les retombées de plomb des carburants automobiles (interdiction du plomb dans l'essence en 2000) se sont accumulées dans les sols à moins de 50 m des grandes voies. Dans un jardin urbain bordant une avenue, le sol superficiel peut dépasser largement 100 mg/kg de plomb.",
            severity: "critique",
          },
          {
            label: "Maison construite avant 1949 avec peintures dégradées",
            description:
              "Les peintures à la céruse (plomb) ont été massivement utilisées avant 1949 pour les boiseries extérieures. Les écailles tombées au pied des façades ont enrichi le sol en plomb sur 50 cm autour de la maison. À proscrire pour potager direct.",
            severity: "critique",
          },
          {
            label: "Bordure de jardin avec ancienne haie ou portail métallique peint",
            description:
              "Les vieilles peintures de ferronnerie et de portail contiennent souvent du plomb ou des chromates. Le sol immédiatement sous une vieille clôture peinte en mauvais état peut être contaminé sur 1 mètre de large.",
            severity: "modéré",
          },
          {
            label: "Terrain rapporté ou remblayé d'origine inconnue",
            description:
              "Un terrain dont la terre a été remblayée à une date connue avec une terre d'origine non documentée : risque variable, analyse fortement recommandée. Les remblais des années 1950 à 1980 ont parfois utilisé des matériaux de démolition contenant peintures et résidus.",
            severity: "modéré",
          },
          {
            label: "Présence de végétation indicatrice anormale",
            description:
              "Mousses noircies, plantes naturellement présentes qui jaunissent sans raison apparente, zones où rien ne pousse à proximité de murs anciens : indices indirects, à confirmer par analyse. À l'inverse, un terrain où poussent spontanément ronces, orties, sureau a un sol vivant peu suspect.",
            severity: "léger",
          },
          {
            label: "Antécédent agricole intensif avec produits chlorés",
            description:
              "Anciens vergers traités au DDT ou aux organochlorés (interdits depuis les années 1970), anciens champs traités avec des pesticides à l'arsenic (très anciens, rares mais possibles). Le DDT et ses dérivés persistent dans les sols 20 à 50 ans.",
            severity: "modéré",
          },
        ]}
        footerNote="Si aucun de ces indices ne s'applique à votre situation et que votre jardin est rural sans antécédent industriel, le risque de contamination significative est faible. L'analyse n'est pas systématique mais reste un choix prudent pour un gros potager familial."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi les métaux lourds dans un potager posent problème."
        subtitle="Le risque sanitaire des métaux lourds dans les légumes est bien documenté et pris au sérieux par les autorités sanitaires (ANSES, Santé publique France). Voici les mécanismes."
        causes={[
          {
            number: "01",
            cause: "Le plomb se fixe dans les racines et certains organes",
            explanation:
              "Le plomb absorbé par les racines se concentre dans les feuilles, les racines elles-mêmes et les tubercules, à des concentrations variables selon les espèces. Carotte, radis, betterave, salades, épinards : forte accumulation. Tomate, courgette, haricot : faible transfert vers les fruits. Le plomb ingéré régulièrement s'accumule dans l'organisme (os, dents), avec effets neurotoxiques chez l'enfant à doses très faibles.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les enfants sont 5 à 10 fois plus sensibles",
            explanation:
              "À dose équivalente ingérée par kg de poids corporel, le système nerveux en développement des enfants est beaucoup plus sensible au plomb que celui des adultes : effets sur le QI, l'attention, le comportement, démontrés dès des taux sanguins très bas. La protection des enfants est l'argument principal qui justifie la précaution sur les potagers urbains familiaux.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les métaux lourds sont peu mobiles dans le sol",
            explanation:
              "Plomb, cadmium et arsenic restent fixés dans les premiers centimètres du sol où ils ont été déposés, parfois pendant des décennies. Un sol contaminé en 1970 par retombées de plomb automobile reste contaminé en 2026 si rien n'a été fait. À l'inverse, cela signifie qu'un retrait de la couche superficielle ou un apport de terre rapportée règle durablement le problème.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Le pH du sol modifie la disponibilité",
            explanation:
              "Un sol acide (pH inférieur à 6) mobilise davantage les métaux lourds, qui deviennent plus assimilables par les plantes. Un sol calcaire (pH supérieur à 7) immobilise une partie des contaminants. Apporter du calcaire (chaux, dolomie) ne supprime pas la contamination mais peut réduire le transfert vers les plantes. Mesure utile dans certains cas mais qui n'efface pas le risque.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Le lavage et l'épluchage réduisent le risque cosmétique mais pas le risque chimique",
            explanation:
              "Laver soigneusement et peler ses légumes diminue la contamination en surface (poussière, particules accrochées) mais ne supprime pas le plomb absorbé par la plante elle-même. Un lavage abondant à grande eau est utile pour les feuilles, mais ne dispense pas d'une analyse de sol si le contexte est à risque.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Faire analyser et adapter sa stratégie potagère."
        immediateLabel="Démarche d'analyse"
        structuralLabel="Solutions en cas de contamination"
        immediate={[
          {
            label: "Prélever correctement un échantillon",
            description:
              "Prélever 8 à 10 sous-échantillons répartis sur la zone du futur potager, à 0–30 cm de profondeur, en évitant les bords proches des murs ou clôtures. Mélanger l'ensemble dans un seau propre, prélever 500 g pour le laboratoire. Identifier la zone précise (croquis), noter usage projeté. Si la zone est grande ou hétérogène : plusieurs analyses séparées par sous-zone.",
            effort: "30 minutes de prélèvement",
          },
          {
            label: "Choisir un laboratoire spécialisé",
            description:
              "Laboratoires agréés COFRAC pour les analyses de sol environnementales : SADEF, LDAR, Inovalys, et plusieurs autres en région. Demander une analyse « métaux lourds » incluant plomb, cadmium, arsenic au minimum (idéalement aussi zinc, cuivre, chrome, nickel). Coût 50 à 150 € selon le nombre de paramètres. Résultats sous 10 à 20 jours.",
            effort: "Choisir le labo et envoyer",
          },
          {
            label: "Lire et interpréter le rapport",
            description:
              "Le rapport indique les concentrations en mg/kg de matière sèche. Comparer aux seuils : plomb 100 mg/kg pour épandage agricole (référence usuelle), cadmium 2 mg/kg, arsenic 25 mg/kg. Au-dessus : contamination significative. Sous le seuil, mais en zone à risque : précaution sur légumes-racines et feuilles consommés crus.",
            effort: "15 minutes de lecture",
          },
          {
            label: "Demander un conseil agronomique si nécessaire",
            description:
              "Les chambres d'agriculture, les associations de jardinage écologique (Jardiniers de France, Terre Vivante), certains paysagistes spécialisés proposent un conseil d'interprétation et d'adaptation. Utile en cas de résultats limites ou pour structurer une démarche de remédiation (apports calcaires, choix de cultures).",
            effort: "Variable",
          },
        ]}
        structural={[
          {
            label: "Bac surélevé avec terre rapportée certifiée",
            description:
              "Solution la plus sûre en cas de contamination : bac de 40 à 60 cm de hauteur (parois bois robinier ou mélèze brut, ou pierre), géotextile au fond, terre rapportée certifiée NF U 44-551 (terre végétale) ou compost ADIVET. Volume de terre : 0,5 à 0,7 m³ par m² de potager. Surcoût initial mais sécurité totale pour les légumes consommés.",
            effort: "Construction 1 à 2 journées, 50 à 150 €/m²",
          },
          {
            label: "Adapter le choix des cultures",
            description:
              "Si contamination modérée (1 à 3 fois le seuil), privilégier les espèces qui transfèrent peu vers la partie consommée : tomate, courgette, courge, aubergine, haricot, pois, maïs, petits fruits sur arbustes. Éviter strictement : carotte, radis, betterave, salades, épinards, blettes, fines herbes en quantité (basilic, persil). Cette adaptation reste un compromis, pas une solution idéale.",
            effort: "Planification potager",
          },
          {
            label: "Calcaire pour réduire la disponibilité",
            description:
              "Sur sol acide contaminé, un apport modéré de calcaire (dolomie 100 à 200 g/m² selon analyse) peut remonter le pH vers 7 et réduire la mobilité du plomb et du cadmium. Mesure de réduction du risque, jamais d'élimination. À combiner avec choix de cultures peu transférantes. Effet sur 2 à 3 ans.",
            effort: "Apport ponctuel 20 à 50 €",
          },
          {
            label: "Renoncer au potager direct, garder un jardin d'ornement",
            description:
              "En cas de contamination forte (plus de 3 à 5 fois le seuil), le potager en pleine terre n'est pas raisonnable, même avec adaptations. Le jardin d'ornement reste possible et utile : arbustes, vivaces, mellifères, et bacs surélevés strictement isolés du sol pour quelques légumes. Reconnaître les limites est aussi une décision saine.",
            effort: "Décision long terme",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes face à un potager urbain."
        errors={[
          {
            label: "Faire un potager urbain sans aucun diagnostic",
            explanation:
              "En zone urbaine ancienne ou bordant une voie à fort trafic d'avant 2000, partir d'emblée sur un potager familial productif sans analyse est imprudent, surtout si des enfants consomment les légumes. 50 à 150 € pour une analyse représentent une fraction du coût et du temps investis dans un potager. Le diagnostic vaut systématiquement la peine dans ces situations.",
          },
          {
            label: "Se rassurer avec un seul lavage abondant des légumes",
            explanation:
              "Le lavage et l'épluchage réduisent les contaminants en surface mais ne suppriment pas les métaux absorbés par la plante elle-même. Une carotte poussée sur sol contaminé reste contaminée à l'intérieur, même bien lavée. Le lavage est utile en complément d'un sol sain, pas en substitut.",
          },
          {
            label: "Confondre analyse agronomique et analyse environnementale",
            explanation:
              "Une analyse agronomique classique (40 à 80 €) mesure pH, matière organique, NPK, oligo-éléments : très utile pour optimiser la fertilité, inutile pour détecter une contamination en métaux lourds. Pour un diagnostic de pollution, demander explicitement une analyse environnementale incluant plomb, cadmium, arsenic.",
          },
          {
            label: "Croire qu'un compost domestique va décontaminer",
            explanation:
              "Les apports de compost et de matière organique améliorent la structure du sol et peuvent légèrement réduire la disponibilité des métaux lourds (complexation organique). Mais ils n'éliminent pas la contamination : les métaux restent présents et continueront d'être absorbés par les plantes. Pour décontaminer réellement, seul le retrait de la couche superficielle ou le bac surélevé fonctionne.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'analyse de sol pour potager"
        items={[
          {
            question: "Combien coûte une analyse de sol pour métaux lourds ?",
            answer:
              "Entre 50 € (analyse de base : plomb, cadmium, arsenic) et 150 € (analyse étendue incluant zinc, cuivre, chrome, nickel, mercure). Certaines collectivités (Île-de-France notamment) ont mis en place des programmes d'analyses subventionnées pour les jardins partagés et certains jardins familiaux : se renseigner auprès de la mairie ou de l'ARS régionale.",
          },
          {
            question: "Mon terrain est en pleine campagne, faut-il faire analyser ?",
            answer:
              "Pas en priorité si le terrain n'a aucun antécédent industriel, artisanal ou de proximité à une voie à fort trafic. Une analyse agronomique classique (pH, matière organique, NPK, 40 à 80 €) reste utile pour optimiser le potager. L'analyse environnementale devient pertinente s'il y a un antécédent documenté (ancienne ferme avec stockage de produits, ancienne décharge sauvage, station-service abandonnée).",
          },
          {
            question: "Les légumes-fruits sont-ils vraiment moins risqués que les racines ?",
            answer:
              "Oui, c'est documenté. Le transfert du plomb et du cadmium du sol vers la partie consommée varie fortement selon les organes : élevé dans les feuilles et les racines, faible dans les fruits charnus (tomate, courgette, aubergine, courge, poivron) et les graines (haricot, pois). En cas de contamination modérée et après analyse, privilégier ces espèces est un compromis acceptable.",
          },
          {
            question: "Que faire si l'analyse révèle une contamination élevée ?",
            answer:
              "Trois options selon le niveau : contamination modérée (1 à 3 fois le seuil), bac surélevé avec terre rapportée pour les légumes sensibles + choix de cultures peu transférantes pour le reste. Contamination forte (3 à 10 fois le seuil), bac surélevé uniquement pour toute culture alimentaire. Contamination très forte (plus de 10 fois le seuil), renoncer au potager, signaler éventuellement à l'ARS pour avis sanitaire si la contamination dépasse largement les références.",
          },
          {
            question: "Une terre rapportée certifiée garantit-elle l'absence de contamination ?",
            answer:
              "La norme NF U 44-551 (terre végétale, supports de culture) impose des limites en métaux lourds, conformes aux usages de jardinage. Demander à votre fournisseur la conformité à cette norme et, en cas de gros volume, une analyse récente du lot. Les terres « tout-venant » de chantier sans certification ne donnent aucune garantie : à éviter pour potager.",
          },
          {
            question: "L'arsenic dans le sol, ça vient d'où ?",
            answer:
              "Plusieurs sources possibles : géologie naturelle (certaines régions ont un fond géochimique élevé, notamment Massif central, Bretagne), anciens traitements agricoles à l'arséniate de plomb (vignes, vergers avant 1970), anciennes activités minières ou industrielles. La carte d'analyse géochimique du BRGM permet de connaître le fond naturel de votre zone. Au-delà du fond géochimique, présomption d'apport anthropique.",
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
            title: "Sol vivant et paillage",
            description:
              "Une fois la sécurité sanitaire vérifiée, construire un sol vivant améliore qualité du potager et résilience.",
            href: "/jardin/sol-vivant-paillage-matiere-organique/",
          },
          {
            tag: "Eau maison",
            title: "L'eau du robinet et la maison",
            description:
              "Plomb des canalisations : un sujet voisin où l'analyse fait également la différence.",
            href: "/eau-maison/",
          },
        ]}
      />
    </>
  );
}
