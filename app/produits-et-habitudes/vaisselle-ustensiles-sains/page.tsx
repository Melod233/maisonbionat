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
  title: "Vaisselle et ustensiles : téflon, inox, fonte, céramique, comparatif sain",
  description:
    "Choisir ses casseroles, poêles, plats : inox 18/10, fonte naturelle, céramique, fer, téflon (PTFE). Données ANSES, règlement Reach sur les PFAS, températures à respecter. Repères pour une cuisine saine et durable.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/vaisselle-ustensiles-sains/",
  },
  openGraph: {
    title: "Vaisselle et ustensiles : téflon, inox, fonte, céramique, comparatif sain",
    description:
      "Inox, fonte, céramique, téflon : ce que chaque matériau apporte, ses limites, et comment les utiliser sainement.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/vaisselle-ustensiles-sains/",
  },
};

export default function VaisselleUstensilesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits & habitudes", href: "/produits-et-habitudes/" },
    {
      name: "Vaisselle et ustensiles sains",
      href: "https://www.maisonbionat.fr/produits-et-habitudes/vaisselle-ustensiles-sains/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Produits & habitudes"
        parentHref="/produits-et-habitudes/"
        tag="Cuisine et contact alimentaire"
        title="Vaisselle et ustensiles : comparatif sain pour la cuisine quotidienne."
        quickAnswer="Le choix des ustensiles de cuisson influence ce qui migre dans les aliments. Quatre familles couvrent la majorité des besoins : l'inox 18/10 (acier chromé-nickelé) est stable, durable et neutre pour la plupart des cuissons. La fonte brute ou émaillée est très durable, transfert thermique excellent, sans revêtement de surface. La céramique récente sans nano-particules est une alternative honnête au téflon pour les cuissons douces, durée de vie limitée. Le téflon (PTFE) reste autorisé sous des conditions strictes : la fabrication ne doit plus utiliser de PFOA depuis 2020 (règlement Reach), mais le revêtement peut se dégrader si chauffé à vide au-dessus de 260 °C. Pour une cuisine quotidienne saine, le combo recommandé : inox pour la majorité des cuissons, fonte pour saisir et mijoter, céramique ou fer pour les œufs et crêpes, téflon limité aux cuissons douces à feu doux et remplacé dès rayures."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "260 °C", label: "température au-dessus de laquelle le PTFE commence à se dégrader (chauffé à vide)" },
          { value: "2020", label: "interdiction du PFOA dans la fabrication des revêtements antiadhésifs (Reach)" },
          { value: "0", label: "migration significative pour l'inox 18/10 dans des conditions normales d'usage" },
          { value: "30+ ans", label: "durée de vie d'une fonte brute correctement culottée" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les grands matériaux de cuisson" },
          { id: "signes", label: "Adapter à l'usage" },
          { id: "causes", label: "Pourquoi le matériau compte" },
          { id: "actions", label: "Constituer son équipement" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Matériaux"
        title="Inox, fonte, céramique, téflon, fer, cuivre : ce qui les distingue"
        description="Chaque matériau a ses propriétés thermiques et son comportement au contact alimentaire. Voici les repères factuels pour les principaux."
        variants={[
          {
            indicator: "Polyvalent",
            name: "Inox 18/10 (acier inoxydable chromé-nickelé)",
            description:
              "Stable chimiquement, neutre pour la majorité des cuissons, durabilité quasi illimitée. La référence pour les casseroles, faitouts, sauteuses, plats. Adapté à toutes les sources de chaleur (gaz, induction, électrique, four). Le triplay ou multiplay (couches d'aluminium ou cuivre prises en sandwich entre deux couches d'inox) améliore la conduction. Aucune migration significative en conditions normales. Le seul point de vigilance : les personnes allergiques au nickel peuvent préférer l'inox 18/0 (sans nickel) pour les contacts prolongés acides.",
          },
          {
            indicator: "Durable",
            name: "Fonte brute ou émaillée",
            description:
              "Fonte brute : naturellement antiadhésive une fois bien culottée (couche de graisse polymérisée), durable plusieurs générations. Apporte du fer assimilable dans les aliments (utile contre certaines anémies). Fonte émaillée (Le Creuset, Staub) : émail vitrifié neutre, plus facile d'entretien, légèrement moins durable mais plus pratique. Toutes deux compatibles induction (sauf finition particulière), excellentes pour saisir, mijoter, cuisson lente.",
          },
          {
            indicator: "Alternative",
            name: "Céramique sans nano-particules",
            description:
              "Revêtement minéral (silice, sol-gel) sans PTFE ni PFOA. Antiadhésif honnête pour cuissons douces (œufs, crêpes, légumes), facile à nettoyer. Durée de vie courte : 2 à 5 ans selon usage et soin. Sensible aux ustensiles métalliques. Les générations récentes excluent les nanoparticules, mais vérifier sur l'étiquette « sans nanoparticules » ou la certification adaptée. Alternative pertinente au téflon en cuissons douces.",
          },
          {
            indicator: "Antiadhésif courant",
            name: "Téflon (PTFE) avec ou sans PFOA",
            description:
              "Le PTFE (téflon) reste autorisé. Depuis 2020 (Reach annexe XVII), le PFOA utilisé historiquement comme auxiliaire de fabrication est interdit. Les revêtements actuels en sont donc exempts mais peuvent contenir d'autres composés PFAS pour la fabrication. Le revêtement reste stable jusqu'à 230 à 260 °C ; au-delà, dégagement de particules et de fumées irritantes (« syndrome des fumées de polymère »). Limites pratiques : usage feu doux à moyen, ustensiles non métalliques, remplacement dès rayures. Pratique pour les œufs et crêpes du quotidien.",
          },
          {
            indicator: "Crêpes et galettes",
            name: "Fer (poêle, crêpière, wok)",
            description:
              "Acier carbone brut, sans aucun revêtement. Comme la fonte brute, se culotte pour devenir naturellement antiadhésif. Plus léger que la fonte, monte vite en température. Idéal pour wok à très haute température, crêpière, omelette. Apport de fer assimilable. Entretien : ne pas laisser tremper, sécher immédiatement après lavage, regraisser périodiquement.",
          },
          {
            indicator: "Niche",
            name: "Cuivre étamé ou inox-cuivre",
            description:
              "Cuivre seul interdit au contact alimentaire direct (migration). Cuivre étamé (étain à l'intérieur) ou cuivre avec doublage inox : excellente conduction, utilisée en gastronomie. Cher (plusieurs centaines d'euros par pièce), entretien spécifique (étamage à refaire tous les 10 à 20 ans). Solution de niche pour passionnés, pas indispensable.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Usage"
        title="Quel matériau pour quel usage."
        subtitle="Pas de matériau universel : chaque cuisson a son matériau optimal. Voici les arbitrages les plus utiles au quotidien."
        signs={[
          {
            label: "Cuissons à très haute température (saisir steak, wok)",
            description:
              "Fonte brute, fer, ou inox épais. Le téflon et la céramique sont à éviter au-delà de 230 °C. Pour saisir une viande à 250-280 °C, la fonte ou le fer offrent le meilleur résultat et durent une vie entière.",
            severity: "léger",
          },
          {
            label: "Cuissons douces : œufs au plat, omelette, crêpes",
            description:
              "Antiadhésif utile pour éviter d'attacher. Trois options saines : fonte ou fer culottés (excellent une fois maîtrisé), céramique récente, téflon de qualité utilisé à feu doux. Pour œufs au plat et omelettes simples, le téflon reste très pratique si l'on respecte les bonnes pratiques (feu doux/moyen, pas de chauffe à vide, ustensiles bois ou silicone).",
            severity: "léger",
          },
          {
            label: "Mijotage longue durée (bœuf bourguignon, tajine)",
            description:
              "Fonte émaillée (cocotte type Le Creuset, Staub) : la référence. L'émail neutre supporte des heures de cuisson lente sans aucune migration. Couvercle lourd qui maintient l'humidité. Durée de vie de plusieurs décennies. Investissement initial (150 à 400 € pour une cocotte 24 cm) amorti sur la durée.",
            severity: "léger",
          },
          {
            label: "Cuisson à la vapeur, à l'eau, pâtes",
            description:
              "Inox 18/10 : neutre, durable, va au lave-vaisselle. Tous types de faitouts et marmites en inox conviennent. Préférer triplay ou multiplay pour répartition uniforme de la chaleur. Compatibilité induction à vérifier (la plupart des inox de qualité conviennent).",
            severity: "léger",
          },
          {
            label: "Cuisson au four (plats, lèchefrites, ramequins)",
            description:
              "Inox, fonte émaillée, terre cuite/grès non vitrifié alimentaire (Ø certifié contact alimentaire), pyrex. Éviter les plats antiadhésifs téflon au four au-delà de 230 °C. Pour pâtisseries fragiles : moules en silicone alimentaire certifié EN 14350 ou en métal nu graissé.",
            severity: "léger",
          },
          {
            label: "Cuisson induction",
            description:
              "Nécessite un fond ferromagnétique. Inox induction (marqué « induction »), fonte brute, fonte émaillée avec fond compatible, fer. Téflon : compatible si la poêle a un fond ferromagnétique. Pour vérifier : un aimant doit coller au fond de la casserole.",
            severity: "léger",
          },
        ]}
        footerNote="L'équipement idéal d'une cuisine n'a pas besoin d'être uniforme. Mixer 3 à 5 matériaux selon les usages couvre tous les besoins, dure des décennies et reste sain au quotidien."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi le choix de matériau compte vraiment."
        subtitle="Ce qui migre dans les aliments selon les matériaux et les températures est désormais bien documenté. Voici les mécanismes principaux à connaître."
        causes={[
          {
            number: "01",
            cause: "Le PTFE se dégrade au-dessus de 260 °C",
            explanation:
              "Le revêtement antiadhésif PTFE (téflon et équivalents) reste stable en cuisson normale (jusqu'à 230-260 °C). Au-dessus, dégagement de fumées contenant des particules et des composés irritants : c'est le « syndrome des fumées de polymère » (toxique notamment pour les oiseaux en cage). Une poêle chauffée à vide quelques minutes peut atteindre ces températures. Ne jamais préchauffer une poêle téflon à vide à feu vif.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Le PFOA est interdit depuis 2020, mais les PFAS de fabrication subsistent",
            explanation:
              "Le règlement européen Reach (annexe XVII) interdit le PFOA depuis le 4 juillet 2020 dans la fabrication des revêtements antiadhésifs. Les marques européennes ont donc adapté leurs procédés. D'autres composés PFAS peuvent toutefois être utilisés comme auxiliaires. La recherche scientifique poursuit l'évaluation de leurs alternatives. Le débat reste ouvert sur la totalité des PFAS dans les ustensiles.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "L'inox 18/10 est stable même en présence d'aliments acides",
            explanation:
              "L'inox 18/10 (18 % chrome, 10 % nickel) est passivé en surface par une couche d'oxyde de chrome très stable. La migration de chrome et nickel reste largement sous les limites réglementaires européennes même avec des aliments acides (tomate, vinaigre). La cuisson en inox est l'une des options les plus sûres au contact alimentaire selon l'ANSES.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "La fonte apporte du fer assimilable",
            explanation:
              "La cuisson en fonte brute peut transférer 1 à 3 mg de fer assimilable par portion, selon l'acidité de l'aliment et la durée de cuisson. Cet apport est utile pour les personnes carencées (femmes en âge de procréer, végétariens, enfants). À l'inverse, en cas d'hémochromatose (surcharge en fer), la fonte brute est à éviter au profit de fonte émaillée.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "La céramique sans nano-particules a évolué",
            explanation:
              "Les premières générations de poêles céramique (vers 2010) ont parfois contenu des nano-particules dont la migration en cuisson posait question. Les marques sérieuses ont depuis exclu les nanoparticules et proposent des certifications spécifiques. Sur les produits récents (post-2018), les céramiques d'origine européenne sont une alternative honnête au téflon pour les cuissons douces.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Constituer un équipement de cuisine sain et durable."
        immediateLabel="Équipement de base à privilégier"
        structuralLabel="Bons gestes et entretien"
        immediate={[
          {
            label: "3 casseroles inox 18/10 (petite, moyenne, grande)",
            description:
              "16, 20, 24 cm de diamètre par exemple. Inox triplay ou multiplay si budget. Compatibles toutes plaques. Couvercles inclus. Investissement initial 80 à 250 € pour un set, durabilité de plusieurs décennies. Cœur de l'équipement quotidien.",
            effort: "80 à 250 € pour set complet",
          },
          {
            label: "1 grande poêle inox + 1 poêle antiadhésive",
            description:
              "Poêle inox 24-28 cm pour saisir, faire revenir, dégraisser à l'eau pour déglacer. Poêle antiadhésive (téflon de qualité ou céramique sans nano) 24 cm pour œufs, crêpes, cuissons douces. Le binôme couvre la majorité des cuissons à la poêle. Surcoût acceptable pour la qualité.",
            effort: "60 à 200 € le binôme",
          },
          {
            label: "1 cocotte fonte émaillée 24 ou 26 cm",
            description:
              "Le Creuset, Staub, ou marques équivalentes. Cocotte ronde 24-26 cm en fonte émaillée : usage très polyvalent (mijoté, four, à la flamme). Durée de vie de plusieurs générations. Investissement plus important (150 à 400 €) mais largement amorti.",
            effort: "150 à 400 €",
          },
          {
            label: "Ustensiles bois ou silicone alimentaire",
            description:
              "Cuillères en bois (hêtre, olivier), spatules en bois ou en silicone alimentaire certifié EN 14350. À utiliser systématiquement avec les surfaces antiadhésives (téflon, céramique). Pas d'inox pointu sur les revêtements. Surface bois antibactérienne naturelle, à condition de bien sécher après lavage.",
            effort: "15 à 50 € l'ensemble",
          },
        ]}
        structural={[
          {
            label: "Ne jamais chauffer une poêle antiadhésive à vide à feu vif",
            description:
              "La poêle téflon ou céramique vide monte en température très vite (5 à 10 °C par seconde sur feu vif), atteignant les zones de dégradation des revêtements en moins de 2 minutes. Toujours mettre matière grasse ou aliment dès le début, feu moyen voire doux. Si préchauffage nécessaire, surveiller à la main 5 cm au-dessus : si on ne supporte pas, c'est trop chaud.",
            effort: "Habitude quotidienne",
          },
          {
            label: "Culotter et entretenir fonte et fer brut",
            description:
              "Culottage initial : huiler généreusement, chauffer au four 1 heure à 220 °C, laisser refroidir, répéter 2 à 3 fois. Au quotidien : ne pas mettre au lave-vaisselle, nettoyer à l'eau chaude sans détergent, sécher immédiatement, légère couche d'huile avant rangement. La fonte culottée devient naturellement antiadhésive et dure plusieurs générations.",
            effort: "Routines simples",
          },
          {
            label: "Remplacer les revêtements antiadhésifs dès rayures",
            description:
              "Une poêle téflon ou céramique rayée libère plus de particules de revêtement dans les aliments à la cuisson suivante. Remplacer dès apparition de rayures notables (longueur > 1 cm). Durée de vie pratique d'une bonne poêle téflon : 3 à 6 ans en usage modéré, moins en usage intensif. Céramique : 2 à 5 ans. Budget annuel à anticiper.",
            effort: "30 à 100 € périodique",
          },
          {
            label: "Vérifier la compatibilité contact alimentaire",
            description:
              "Tout ustensile destiné au contact alimentaire doit porter le pictogramme « verre + fourchette » selon règlement CE 1935/2004. Pour les achats hors UE (marketplace en ligne), vérifier explicitement cette mention et préférer les marques européennes ayant pignon sur rue. Les produits « décoratifs » non certifiés ne doivent pas servir au contact alimentaire.",
            effort: "Vigilance à l'achat",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes en cuisine."
        errors={[
          {
            label: "Préchauffer une poêle antiadhésive à vide à feu vif",
            explanation:
              "Erreur la plus fréquente avec le téflon. Une poêle vide monte très vite à plus de 260 °C, zone de dégradation du revêtement. Toujours ajouter matière grasse, eau ou aliment dès le début. Feu moyen suffit largement pour la cuisson dans une poêle antiadhésive.",
          },
          {
            label: "Utiliser des ustensiles métalliques sur antiadhésif",
            explanation:
              "Une cuillère ou spatule en inox raie le revêtement antiadhésif dès quelques mois d'usage. La poêle perd ses propriétés et libère plus de particules. Réflexe systématique : bois ou silicone alimentaire pour téflon et céramique. À l'inverse, inox sans souci sur fonte, fer, inox.",
          },
          {
            label: "Mettre fonte ou fer brut au lave-vaisselle",
            explanation:
              "Le lavage en lave-vaisselle (eau, détergent agressif, durée prolongée) détruit le culottage des fontes et fers bruts. Lavage manuel à l'eau chaude sans détergent, séchage immédiat. Si la fonte est passée par le lave-vaisselle : reculotter complètement avant réemploi.",
          },
          {
            label: "Choisir des poêles « no name » à très bas prix",
            explanation:
              "Une poêle antiadhésive à 5-10 € (marketplace, hard-discount) utilise généralement un revêtement de qualité médiocre, sans certification, parfois importé sans contrôle approfondi. Durée de vie de quelques mois, risque accru de migration. Préférer une poêle de marque connue à 30-60 € qui durera 3 à 6 ans. Le coût annuel est en réalité inférieur.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur vaisselle et ustensiles"
        items={[
          {
            question: "Le téflon est-il vraiment dangereux ?",
            answer:
              "En usage normal (feu doux à moyen, ustensiles non métalliques, pas de chauffe à vide), le téflon de qualité actuelle (sans PFOA depuis 2020) est considéré comme sûr par les autorités sanitaires européennes. Les risques apparaissent en mésusage : chauffe à vide à feu vif (dégradation du revêtement), poêle très rayée (migration de particules), produits non certifiés d'importations douteuses. Une poêle téflon récente, de marque européenne, bien utilisée et remplacée dès rayures, est acceptable pour les cuissons douces du quotidien.",
          },
          {
            question: "Quelles marques de cocottes fonte choisir ?",
            answer:
              "Le Creuset (France), Staub (France) : références historiques en fonte émaillée, durée de vie illimitée, garanties à vie. Invicta (France) : très bon rapport qualité-prix en fonte brute et émaillée. Lodge (États-Unis) : fonte brute pré-culottée, prix accessible. Pour les budgets serrés, les fontes émaillées de marques distributeur (Cuisinart, IKEA) sont souvent honorables si on accepte une finition moins haut de gamme.",
          },
          {
            question: "Faut-il jeter ses anciennes poêles téflon ?",
            answer:
              "Pas systématiquement. Si la poêle est intact (sans rayures ni cloques), si elle date d'après 2013 (pic de réduction du PFOA en Europe) et si vous l'utilisez correctement (feu doux/moyen, ustensiles bois), elle reste utilisable. À remplacer : poêles rayées, poêles dont le revêtement cloque ou s'écaille, poêles très anciennes (avant 2010, où le PFOA était courant). Filière de recyclage : déchèteries acceptent (séparation des métaux et revêtements).",
          },
          {
            question: "L'aluminium en cuisine, dangereux ou pas ?",
            answer:
              "Pour les casseroles en aluminium nu (rares au quotidien désormais), une migration accrue est observée en présence d'aliments acides ou salés. L'ANSES rappelle de ne pas laisser stagner d'aliments acides (tomate, vinaigre, jus de citron) dans des contenants en aluminium nu. L'aluminium anodisé ou recouvert d'un revêtement (cas le plus fréquent dans les ustensiles modernes) ne pose pas ce problème. Le papier aluminium ménager est à utiliser plutôt à froid ou pour des aliments non acides.",
          },
          {
            question: "Verre, céramique, grès : quelles précautions ?",
            answer:
              "Verre trempé (pyrex et équivalents) : neutre, sans migration, parfait pour stockage et four. Céramique vitrifiée (porcelaine, faïence émaillée) : vérifier la mention contact alimentaire. Grès et terre cuite vernissés alimentaires : conviennent au four et au stockage. À éviter : céramiques décoratives importées d'origine douteuse (risque de plomb dans certains émaux anciens), terre cuite non vernissée pour aliments acides.",
          },
          {
            question: "Comment choisir un wok sain ?",
            answer:
              "Wok traditionnel en acier carbone (fer) : la référence asiatique. Très haute température, parfait pour les sautés. À culotter et entretenir comme la fonte brute. Investissement 20 à 80 €. Alternative : wok en fonte émaillée pour ceux qui veulent éviter le culottage. À éviter pour le wok : revêtements antiadhésifs (le wok nécessite des températures hors zone de stabilité des téflons).",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits & habitudes",
            title: "Le silo produits & habitudes",
            description:
              "Vue d'ensemble : produits ménagers, lessive, gestes du quotidien, désodorisants.",
            href: "/produits-et-habitudes/",
          },
          {
            tag: "Produits & habitudes",
            title: "Plastiques alimentaires : bisphénols et phtalates",
            description:
              "Tupperware, films, bouteilles : ce qui migre, ce qui ne migre pas, les bons réflexes.",
            href: "/produits-et-habitudes/plastiques-alimentaires-sains/",
          },
          {
            tag: "Pièce par pièce",
            title: "Cuisine saine",
            description:
              "Aménagement, matériaux, ventilation, vaisselle : la vue d'ensemble pour une cuisine au quotidien.",
            href: "/piece-par-piece/cuisine-saine/",
          },
        ]}
      />
    </>
  );
}
