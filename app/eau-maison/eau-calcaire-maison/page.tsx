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
  title: "Eau calcaire à la maison : santé, peau, électroménager et adoucisseur",
  description:
    "Dureté de l'eau (TH), effets réels sur la santé, la peau et les appareils, recommandations ANSES sur l'eau adoucie : comprendre l'eau calcaire avant d'investir dans un adoucisseur.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/eau-calcaire-maison/",
  },
  openGraph: {
    title: "Eau calcaire à la maison : santé, peau, électroménager et adoucisseur",
    description:
      "Dureté de l'eau (TH), effets réels sur la santé, la peau et les appareils, recommandations ANSES sur l'eau adoucie : comprendre l'eau calcaire avant d'investir dans un adoucisseur.",
    url: "https://www.maisonbionat.fr/eau-maison/eau-calcaire-maison/",
  },
};

const faqItems = [
  {
    question: "Le calcaire dans l'eau est-il mauvais pour la santé ?",
    answer:
      "Non. Le calcaire est constitué de carbonate de calcium et de magnésium dissous, deux minéraux essentiels que l'organisme assimile. La dureté de l'eau (TH) est sans conséquence sanitaire pour la consommation humaine, position constante des autorités françaises (ARS, Centre d'information sur l'eau) et de l'OMS. La réglementation française n'a d'ailleurs fixé ni limite ni référence de qualité pour la dureté de l'eau, contrairement aux paramètres réellement préoccupants (nitrates, pesticides, plomb, PFAS). Une eau dure peut contribuer jusqu'à environ 10 % des apports quotidiens recommandés en calcium et en magnésium pour un adulte (références ANSES : 950 mg/jour de calcium, 375 mg/jour de magnésium).",
  },
  {
    question: "Comment se mesure la dureté de l'eau ?",
    answer:
      "La dureté s'exprime en degrés français (°f), aussi notés °fH ou °TH (titre hydrotimétrique). 1 °f correspond à 4 mg de calcium par litre ou 2,4 mg de magnésium par litre. L'échelle usuelle : eau très douce sous 7 °f, eau douce entre 7 et 15 °f, eau moyennement dure entre 15 et 25 °f, eau dure entre 25 et 35 °f, eau très dure au-delà de 35 °f. La dureté de votre commune est indiquée sur la facture d'eau ou consultable sur le site de l'ARS de votre région. À titre d'exemple : Paris affiche un TH d'environ 25 °f, le Nord et l'Est de la France atteignent souvent 35-50 °f, alors que le Massif central et la Bretagne descendent souvent sous 10 °f.",
  },
  {
    question: "Faut-il installer un adoucisseur pour ma santé ?",
    answer:
      "Non, et l'argument santé est même contre-productif. Un adoucisseur classique remplace les ions calcium et magnésium par du sodium via une résine échangeuse d'ions. L'eau adoucie est donc plus chargée en sodium, à éviter pour la consommation directe et la cuisson, en particulier pour les nourrissons, les personnes hypertendues ou sous régime hyposodé. Recommandation pratique constante (ARS, Centre d'information sur l'eau) : conserver un robinet d'eau froide non adoucie pour la boisson et la cuisine (le plus souvent celui de la cuisine), et n'adoucir que l'eau qui alimente la chaudière, les sanitaires et l'électroménager. Sans cette précaution, l'investissement adoucisseur dégrade la qualité de votre eau de boisson.",
  },
  {
    question: "Quels sont les vrais inconvénients d'une eau dure ?",
    answer:
      "Les inconvénients sont domestiques et énergétiques, pas sanitaires. Le tartre se dépose sur les résistances de chauffe-eau et de chaudière (perte de rendement de 10 à 30 % selon l'épaisseur du tartre, ADEME), entartre les robinetteries et pommeaux de douche, encrasse lave-linge et lave-vaisselle (durée de vie réduite), laisse des traces sur la robinetterie et la verrerie. Sur la peau, une eau très dure peut accentuer la sécheresse cutanée et les démangeaisons, particulièrement chez les personnes à peau atopique ou sensible (eczéma de l'enfant), bien que les preuves épidémiologiques restent débattues. Côté budget : un chauffe-eau entartré consomme 10 à 20 % d'énergie en plus pour la même production d'eau chaude.",
  },
];

export default function EauCalcaireMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Eau calcaire à la maison",
      href: "https://www.maisonbionat.fr/eau-maison/eau-calcaire-maison/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Eau maison"
        parentHref="/eau-maison/"
        tag="Dureté de l'eau"
        title="Eau calcaire à la maison : ce que dit vraiment la science avant d'acheter un adoucisseur"
        quickAnswer="Le calcaire dans l'eau du robinet désigne la présence de carbonate de calcium et de magnésium dissous. Sa concentration s'exprime par le titre hydrotimétrique (TH) en degrés français (°f). Une eau est considérée comme dure au-dessus de 15 °f, très dure au-dessus de 35 °f. La dureté est sans effet sanitaire négatif documenté : la réglementation française ne fixe ni limite ni référence de qualité pour ce paramètre, contrairement aux nitrates, pesticides ou plomb. L'eau dure contribue même jusqu'à 10 % des apports quotidiens recommandés en calcium et magnésium (références ANSES). Les nuisances réelles sont domestiques (entartrage, surconsommation énergétique de 10 à 30 % sur les chauffe-eau, traces sur robinetterie) et parfois cutanées chez les peaux sensibles. L'adoucisseur classique se justifie pour l'électroménager et l'énergie, jamais pour la santé : il remplace le calcium et le magnésium par du sodium, ce qui dégrade la qualité de l'eau de boisson si l'on ne conserve pas un robinet non adouci."
        stats={[
          {
            value: "15 °f",
            label: "seuil au-dessus duquel une eau est considérée comme dure",
          },
          {
            value: "0",
            label: "limite réglementaire pour la dureté de l'eau en France",
          },
          {
            value: "~10 %",
            label: "des apports quotidiens en calcium pouvant venir d'une eau dure",
          },
          {
            value: "10-30 %",
            label: "perte de rendement d'un chauffe-eau fortement entartré (ADEME)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre la dureté" },
          { id: "signes", label: "Signes d'eau calcaire" },
          { id: "causes", label: "Origine du calcaire" },
          { id: "actions", label: "Agir intelligemment" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'est l'eau calcaire et comment se mesure sa dureté."
        description="Le « calcaire » dans l'eau du robinet n'est pas un polluant. C'est la présence dissoute d'ions calcium (Ca²⁺) et magnésium (Mg²⁺) que l'eau a captés en traversant des roches sédimentaires (calcaires, dolomies, craies) ou en circulant dans des nappes karstiques. Cette concentration s'exprime par le titre hydrotimétrique, ou TH, exprimé en degrés français : 1 °f équivaut à 4 mg/L de calcium ou 2,4 mg/L de magnésium. Plus le sous-sol est calcaire, plus le TH est élevé. La géographie française est très contrastée : on trouve des eaux très douces (< 7 °f) sur les massifs granitiques (Bretagne, Massif central, Vosges), des eaux moyennement dures (15-25 °f) en région parisienne, et des eaux dures à très dures (35-50 °f) dans les bassins sédimentaires du Nord et de l'Est."
        variants={[
          {
            indicator: "< 15 °f",
            name: "Eau douce à moyennement douce",
            description:
              "Eau peu chargée en calcium et magnésium. Pas d'entartrage significatif des appareils, peau confortable, savon mousse facilement. Inconvénient mineur : eau parfois agressive pour les canalisations métalliques anciennes (cuivre, plomb), avec un risque accru de relargage. Régions concernées : Bretagne, Massif central, Vosges, parties des Alpes et des Pyrénées.",
          },
          {
            indicator: "15-25 °f",
            name: "Eau moyennement dure",
            description:
              "Cas le plus courant en France. Léger entartrage à long terme sur les résistances chauffantes, traces visibles mais discrètes sur la robinetterie. Pas d'inconfort cutané significatif sauf peau atopique. Adoucisseur rarement justifié, détartrage périodique des appareils suffisant. Région parisienne, vallées du Rhône et de la Garonne.",
          },
          {
            indicator: "25-35 °f",
            name: "Eau dure",
            description:
              "Entartrage notable à moyen terme : résistances de chauffe-eau, robinetterie, verrerie marquée par des traces blanches. Surconsommation énergétique de 10 à 20 % possible sur la production d'eau chaude. Une partie des peaux sensibles ressent une sécheresse accentuée. L'adoucisseur peut se justifier sur l'arbitrage électroménager + énergie.",
          },
          {
            indicator: "> 35 °f",
            name: "Eau très dure",
            description:
              "Entartrage rapide et systématique de tous les équipements thermiques. Surconsommation énergétique pouvant dépasser 25 %. Inconfort cutané plus fréquent chez les peaux atopiques. L'adoucisseur ou un dispositif anti-tartre devient un vrai investissement utile, à condition de réserver un robinet non adouci pour la boisson. Nord, Champagne, Lorraine, certains secteurs d'Île-de-France.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître une eau calcaire à la maison."
        subtitle="Les signes d'une eau dure sont concrets et faciles à observer dans la vie quotidienne. Ils n'ont rien à voir avec un risque sanitaire mais avec un confort domestique et une consommation énergétique."
        signs={[
          {
            label: "Traces blanches sur les robinets, douches et verrerie",
            description:
              "Le tartre laissé par l'évaporation est le signe le plus visible. Plus le TH est élevé, plus les traces réapparaissent vite après nettoyage. Inversement, une absence totale de traces blanches indique probablement une eau douce (TH < 10 °f).",
            severity: "léger",
          },
          {
            label: "Pommeau de douche bouché ou débit qui faiblit",
            description:
              "Le tartre obstrue progressivement les buses du pommeau et les filtres aérateurs des robinets. Au-delà de 25 °f, un détartrage tous les 3 à 6 mois devient nécessaire. Un détartrage au vinaigre blanc tiède (1 h de trempage) suffit dans la plupart des cas.",
            severity: "modéré",
          },
          {
            label: "Linge rêche, savon qui mousse mal, peau qui tiraille",
            description:
              "Les ions calcium et magnésium se combinent avec les acides gras du savon, formant des sels insolubles (l'« écume » de savon) qui réduisent le pouvoir lavant. Sur la peau, ces sels peuvent altérer le film hydrolipidique chez les personnes sensibles, accentuant sécheresse et démangeaisons. Effet documenté principalement chez les enfants atopiques.",
            severity: "modéré",
          },
          {
            label: "Chauffe-eau et résistances de bouilloire entartrées",
            description:
              "La chaleur précipite le carbonate de calcium en tartre solide qui se dépose sur les surfaces chauffantes. Une résistance entartrée chauffe moins efficacement et consomme plus d'énergie. L'ADEME estime la perte de rendement à 10-30 % selon l'épaisseur du tartre. Sur un chauffe-eau de 200 L utilisé dix ans, le surcoût est significatif.",
            severity: "critique",
          },
          {
            label: "Lave-linge et lave-vaisselle moins performants ou en panne",
            description:
              "Le tartre bouche les durites, encrasse les résistances et raccourcit la durée de vie des appareils. Un lave-vaisselle correctement détartré dure souvent 2 à 3 ans de plus en zone calcaire. L'usage régulier d'anti-calcaire en pastilles ou de cycles de détartrage est presque obligatoire au-delà de 25 °f.",
            severity: "modéré",
          },
          {
            label: "Augmentation de la consommation énergétique sans changement d'usage",
            description:
              "Si la facture d'eau chaude grimpe alors que vos habitudes n'ont pas changé, l'entartrage progressif du chauffe-eau est une cause fréquente. Détartrage de la cuve et de la résistance recommandé tous les 3 à 5 ans en zone calcaire, plus fréquemment en eau très dure (> 35 °f).",
            severity: "modéré",
          },
        ]}
        footerNote="Tous ces signes ne posent pas de risque sanitaire mais traduisent un problème d'efficacité et de confort. La décision d'investir dans un adoucisseur ou un système anti-tartre doit s'arbitrer sur ces critères concrets, pas sur un argument santé qui n'a pas de fondement scientifique."
      />

      <IssueCauses
        id="causes"
        title="D'où vient le calcaire de votre eau."
        subtitle="La dureté de l'eau dépend presque exclusivement de la nature géologique des terrains traversés. Comprendre cette origine évite les fausses pistes et les solutions inutiles."
        causes={[
          {
            number: "01",
            cause: "Sous-sol sédimentaire calcaire ou crayeux",
            explanation:
              "Cause géologique principale. Les nappes phréatiques traversant des roches sédimentaires (calcaires du Bassin parisien, craies de Champagne, dolomies des Causses) se chargent en ions calcium et magnésium par dissolution lente. Plus le contact eau-roche est long et la roche soluble, plus le TH grimpe. C'est pourquoi le Nord et l'Est de la France affichent des duretés élevées et constantes.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Eau de surface fortement minéralisée",
            explanation:
              "Certaines rivières draînent des bassins versants riches en calcaires actifs (Marne, Seine en partie, Moselle). Les stations de potabilisation traitent la microbiologie et certains polluants mais ne déminéralisent généralement pas l'eau, qui conserve donc sa dureté naturelle. La dureté n'est pas un paramètre traité par les distributeurs publics car elle n'est pas réglementée.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Variations saisonnières de la ressource",
            explanation:
              "Le TH peut fluctuer de 5 à 10 °f selon les saisons et les arbitrages de mélange opérés par le distributeur (eau de surface vs eau souterraine, parts variables selon la disponibilité). Cela explique des écarts d'apparence du tartre d'une saison à l'autre dans certaines communes. Vérifier les analyses ARS récentes pour la valeur la plus représentative.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Sous-sol granitique ou volcanique",
            explanation:
              "À l'inverse, les massifs anciens (Bretagne, Massif central, Vosges, Corse intérieure) délivrent des eaux peu minéralisées car les granites et basaltes libèrent peu de calcium et magnésium. Ces eaux peuvent en contrepartie être plus agressives pour les canalisations métalliques anciennes, avec un risque accru de corrosion et de relargage de cuivre ou de plomb.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Chauffage de l'eau et précipitation du tartre",
            explanation:
              "Le carbonate de calcium est plus soluble dans l'eau froide que dans l'eau chaude. Au-delà de 60 °C, le calcaire précipite massivement, ce qui explique pourquoi le tartre se forme principalement dans les chauffe-eau, bouilloires et résistances de lave-vaisselle. Réduire la température de consigne du ballon à 55-60 °C limite l'entartrage tout en garantissant la sécurité sanitaire (risque légionellose au-dessous de 50 °C).",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Que faire face à une eau calcaire selon votre situation."
        immediate={[
          {
            label: "Vérifier le TH précis de votre commune",
            description:
              "Sur la facture d'eau (ligne « dureté » ou « TH »), sur le site de l'ARS de votre région, ou sur la carte interactive UFC Que Choisir. Cinq minutes pour situer votre eau dans l'échelle (douce, moyenne, dure, très dure) et calibrer toutes les décisions suivantes. Inutile d'investir dans un test maison tant que la donnée publique est disponible et fiable.",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Détartrer régulièrement les appareils thermiques",
            description:
              "Bouilloire et résistances : trempage au vinaigre blanc tiède (50/50 vinaigre/eau, 30 minutes à 1 heure). Chauffe-eau électrique : faire vidanger et détartrer la cuve tous les 3 à 5 ans en eau dure, par un professionnel ou en autonomie selon le modèle. Lave-vaisselle et lave-linge : cycle de détartrage tous les 2 à 3 mois en zone à TH élevé. Coût annuel modeste, gain énergétique direct.",
            effort: "1-2 h tous les trimestres",
          },
          {
            label: "Réduire la température du chauffe-eau à 55-60 °C",
            description:
              "Plus la température est élevée, plus le calcaire précipite. Régler la consigne à 55-60 °C ralentit l'entartrage et économise de l'énergie. Ne pas descendre sous 50 °C en raison du risque de prolifération de la légionelle dans la cuve. Réglage simple sur la plupart des chauffe-eau récents (thermostat externe ou interne accessible).",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Adapter les soins de la peau si TH élevé et peau sensible",
            description:
              "Pour une peau atopique ou sèche en zone à TH > 25 °f : eau de douche tiède plutôt que chaude, savons surgras sans tensioactifs agressifs, hydratation systématique après douche. Ces gestes simples corrigent une grande partie de l'inconfort sans investissement matériel. À traiter en parallèle d'un avis dermatologique en cas d'eczéma persistant.",
            effort: "Habitudes quotidiennes",
          },
        ]}
        structural={[
          {
            label: "Installer un adoucisseur si TH > 25-30 °f et fort usage électroménager",
            description:
              "L'adoucisseur à résine échangeuse d'ions reste la solution la plus documentée et la plus efficace en eau dure à très dure. Compter 1500 à 3500 € posé, plus l'entretien (sel régénérant, contrôle annuel). Justifié si surcoûts énergétiques et de remplacement d'appareils dépassent l'investissement sur 8-10 ans. À installer après le compteur sauf pour le robinet de cuisine (à conserver non adouci).",
            effort: "Investissement 1500-3500 €",
          },
          {
            label: "Conserver impérativement un robinet d'eau non adoucie pour la boisson",
            description:
              "Étape la plus importante avec un adoucisseur classique. L'eau adoucie est enrichie en sodium (de 8 mg de sodium par degré français ôté), ce qui la rend impropre à la consommation régulière, surtout pour les nourrissons, hypertendus et personnes sous régime hyposodé. Recommandation constante des ARS et du Centre d'information sur l'eau : laisser le robinet de cuisine non adouci pour boire et cuisiner, ou installer un by-pass dédié.",
            effort: "Installation by-pass 50-100 €",
          },
          {
            label: "Considérer les alternatives à l'adoucisseur classique avec prudence",
            description:
              "Adoucisseurs au CO₂, dispositifs magnétiques ou électriques anti-tartre, polyphosphates : l'efficacité est très variable et souvent moins documentée. Le CO₂ a montré des résultats correctement étayés en habitat résidentiel mais coûte plus cher. Les dispositifs magnétiques/électriques ne sont pas tranchés scientifiquement, à considérer comme expérimentaux. Vérifier les certifications NF et exiger des données d'efficacité indépendantes.",
            effort: "Selon technologie 800-3000 €",
          },
          {
            label: "Filtrer pour le goût plutôt que pour le calcaire si santé seule motivation",
            description:
              "Si vous voulez juste « moins de tartre » dans votre verre d'eau, une carafe filtrante ou un filtre sur évier au charbon actif suffit largement et coûte 30 à 200 € (voir notre comparatif filtres). Investir dans un adoucisseur pour la boisson est techniquement contre-productif (sodium ajouté) et financièrement disproportionné par rapport à la fonction recherchée.",
            effort: "30-200 € selon dispositif",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur l'eau calcaire."
        errors={[
          {
            label: "\"Le calcaire est mauvais pour la santé\"",
            explanation:
              "Aucune autorité sanitaire ne classe la dureté de l'eau parmi les paramètres préoccupants. La réglementation française n'a même pas fixé de limite ni de référence de qualité pour le TH, ce qui n'arrive jamais sur un paramètre considéré comme un risque. Le calcium et le magnésium dissous dans l'eau dure contribuent positivement aux apports minéraux quotidiens. L'argument « santé » mis en avant par les vendeurs d'adoucisseurs n'a pas de fondement scientifique.",
          },
          {
            label: "\"Boire de l'eau adoucie est sans risque\"",
            explanation:
              "Faux pour la consommation régulière, surtout pour les populations sensibles. Un adoucisseur classique remplace les ions calcium et magnésium par du sodium (Na⁺). Concrètement, une eau dure à 35 °f totalement adoucie gagne environ 280 mg de sodium par litre, à comparer aux apports recommandés (< 2 g/jour de sodium pour un adulte selon l'OMS). À éviter pour nourrissons, femmes enceintes, hypertendus et personnes sous régime hyposodé. Toujours prévoir un robinet non adouci pour la boisson et la cuisine.",
          },
          {
            label: "\"Un dispositif magnétique anti-tartre dispense d'adoucisseur\"",
            explanation:
              "L'efficacité des dispositifs magnétiques ou électroniques anti-tartre n'est pas tranchée scientifiquement. Quelques études laboratoires montrent un effet temporaire sur la cristallisation, mais les retours utilisateurs en conditions réelles sont contradictoires et peu reproduits. Les autorités françaises et le Centre d'information sur l'eau ne valident pas ces dispositifs comme équivalents à un adoucisseur. À considérer comme une expérimentation à petit budget, pas comme une solution durable garantie.",
          },
          {
            label: "\"L'eau calcaire abîme forcément les cheveux et la peau\"",
            explanation:
              "L'effet sur les cheveux et la peau existe mais reste modéré et très inégal selon les personnes. Les peaux atopiques ou très sensibles ressentent davantage la sécheresse en zone à TH > 25-30 °f, ce qui est documenté chez l'enfant. À l'inverse, beaucoup de personnes ne perçoivent aucune gêne même en eau très dure. Avant d'investir dans un adoucisseur pour des raisons cutanées : tester d'abord savons surgras, douche tiède plus courte, hydratation systématique. Si symptômes persistants, consulter un dermatologue avant tout achat.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'eau calcaire"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Filtre à eau du robinet : carafe, charbon actif, osmoseur",
            description:
              "Si vous voulez seulement moins de calcaire dans votre verre d'eau, comparatif des solutions de filtration et de leurs coûts réels.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Qualité de l'eau du robinet en France",
            description:
              "Comprendre les paramètres réellement réglementés (nitrates, pesticides, plomb, PFAS) qui méritent l'attention, contrairement à la dureté.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Eau du robinet ou eau en bouteille ?",
            description:
              "Comparatif honnête santé, coût, environnement entre les deux solutions, sans le marketing des marques.",
            href: "/eau-maison/eau-bouteille-vs-robinet/",
          },
        ]}
      />
    </>
  );
}
