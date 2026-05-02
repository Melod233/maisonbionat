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
  title: "Poêle à bois et air intérieur : Flamme Verte 7*, particules, bonnes pratiques",
  description:
    "Première source nationale de PM2,5. Émissions selon l'âge de l'appareil, exigences Flamme Verte 7 étoiles, qualité du bois et bonnes pratiques pour limiter la pollution.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/chauffage-sain/poele-bois-air-interieur/",
  },
  openGraph: {
    title: "Poêle à bois et air intérieur : Flamme Verte 7*, particules, bonnes pratiques",
    description:
      "Première source nationale de PM2,5. Émissions selon l'âge de l'appareil, exigences Flamme Verte 7 étoiles, qualité du bois et bonnes pratiques pour limiter la pollution.",
    url: "https://www.maisonbionat.fr/chauffage-sain/poele-bois-air-interieur/",
  },
};

const faqItems = [
  {
    question: "Mon ancien poêle pollue-t-il vraiment plus qu'on dit ?",
    answer:
      "Probablement oui. Un poêle d'avant 2002 (sans label Flamme Verte) émet en moyenne 10 à 100 fois plus de particules fines qu'un poêle Flamme Verte 7 étoiles récent. Sur une saison de chauffe (4 à 6 mois), un appareil ancien peut rejeter 100 à 200 kg de particules dans l'atmosphère, contre 12 à 15 kg pour un appareil moderne avec bois sec. Une partie de ces particules retombe dans la zone d'habitation et s'infiltre à l'intérieur du logement par les défauts d'étanchéité, l'air de combustion repris en pièce, l'ouverture de la porte. Le remplacement par un appareil récent reste l'investissement le plus efficace pour la qualité de l'air local et intérieur.",
  },
  {
    question: "Que mesure exactement le label Flamme Verte 7 étoiles ?",
    answer:
      "Le label Flamme Verte, créé par l'ADEME et les professionnels du chauffage bois en 2000, certifie quatre critères : 1) émissions de particules fines (PM2,5) : ≤ 40 mg/Nm³ pour les poêles à bûches, ≤ 30 mg/Nm³ pour les poêles à granulés au niveau 7 étoiles. 2) émissions de monoxyde de carbone (CO) : ≤ 1 500 mg/Nm³ pour bûches, ≤ 300 mg/Nm³ pour granulés. 3) émissions de COV organiques : limites strictes. 4) rendement énergétique : ≥ 75 % pour bûches, ≥ 90 % pour granulés. Depuis janvier 2025, la mesure en charge partielle est exigée, ce qui correspond mieux à l'usage réel (la majorité des émissions se font en charge partielle, quand le ménage régule la chauffe).",
  },
  {
    question: "Quel bois choisir pour limiter la pollution ?",
    answer:
      "Trois critères convergents. 1) Essence : feuillus durs (chêne, hêtre, charme, frêne) qui brûlent lentement et longtemps. Les résineux (pin, sapin, épicéa) brûlent rapidement, encrassent les conduits et émettent davantage. À réserver à l'allumage. 2) Humidité : ≤ 20 %, mesurée avec un humidimètre à 15-30 €. Un bois sec brûle 2 fois mieux et émet 5 à 10 fois moins de particules qu'un bois humide. Compter 18 à 24 mois de séchage à l'abri pour atteindre cette valeur. 3) Origine : bois certifié PEFC ou ONF, label NF Bois de chauffage ou France Bois Bûche, qui garantit l'humidité et l'essence. Éviter les bois traités, peints, vernis (toxiques en combustion).",
  },
  {
    question: "Faut-il un détecteur de CO avec un poêle à bois ?",
    answer:
      "Oui, fortement recommandé. Tout appareil à combustion peut produire du monoxyde de carbone en cas de défaut : conduit obstrué, tirage défaillant, refoulement, mauvais entretien. Le poêle à bois cumule ces risques en cas d'utilisation incorrecte (porte ouverte, allumage refoulant, conduit non ramoné). Un détecteur de CO certifié EN 50291, posé dans la pièce du poêle à environ 1,50 m du sol, coûte 25 à 60 € et alerte en cas de concentration anormale. Compléter par un ramonage 2 fois par an (dont 1 en saison de chauffe) et un entretien annuel de l'appareil.",
  },
];

export default function PoeleBoisPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Chauffage sain", href: "/chauffage-sain/" },
    {
      name: "Poêle à bois et air intérieur",
      href: "https://www.maisonbionat.fr/chauffage-sain/poele-bois-air-interieur/",
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
        tag="Combustion bois"
        title="Poêle à bois et air intérieur : ce qui change vraiment selon l'appareil et l'usage"
        quickAnswer="Le chauffage au bois résidentiel est la première source nationale de particules fines (PM2,5) en France selon le CITEPA. Mais l'écart entre un poêle ancien et un poêle Flamme Verte 7 étoiles avec bois sec est massif : facteur 10 à 100 sur les émissions, soit 100-200 kg de particules par saison contre 12-15 kg. Le label Flamme Verte 7 étoiles, devenu standard de fait depuis 2025, exige ≤ 40 mg/Nm³ de particules pour les bûches, ≤ 30 mg/Nm³ pour les granulés, un rendement minimal de 75 % (bûche) ou 90 % (granulé), et désormais une mesure en charge partielle (où se concentrent les émissions réelles). Un poêle bois performant, alimenté en bois sec (humidité < 20 %), bien posé, ramoné régulièrement et conduit en combustion vive, reste un mode de chauffage acceptable. Mais l'ancienneté de l'appareil, le bois humide ou les pratiques dégradées (combustion ralentie, porte ouverte, résineux non séchés) en font la source la plus polluante du logement."
        stats={[
          {
            value: "≤ 40 mg/Nm³",
            label: "particules pour un poêle bûches Flamme Verte 7 étoiles (≤ 30 mg/Nm³ pour granulés)",
          },
          {
            value: "× 10 à 100",
            label: "facteur d'écart d'émissions entre poêle ancien et Flamme Verte 7*",
          },
          {
            value: "75-90 %",
            label: "rendement minimal exigé Flamme Verte 7* (75 % bûche, 90 % granulé)",
          },
          {
            value: "< 20 %",
            label: "humidité maximale du bois pour une combustion propre (humidimètre obligatoire)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les enjeux" },
          { id: "signes", label: "Évaluer son installation" },
          { id: "causes", label: "Sources d'émissions" },
          { id: "actions", label: "Bonnes pratiques" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi le chauffage au bois est à la fois utile et polluant."
        description="Le bois énergie est l'une des principales sources d'énergie renouvelable en France et permet de chauffer environ 7 millions de foyers. Mais sa combustion, surtout en appareil ancien ou mal piloté, produit des particules fines, des oxydes d'azote, des HAP (hydrocarbures aromatiques polycycliques) et du monoxyde de carbone. Selon le CITEPA, le secteur résidentiel-tertiaire émet à lui seul environ 50 % des PM2,5 nationales, dont l'essentiel est attribué au chauffage au bois. La pollution se diffuse dans l'environnement local (qualité de l'air extérieur en hiver) mais aussi à l'intérieur du logement par les défauts d'étanchéité, l'air repris en pièce, l'ouverture de la porte. Le label Flamme Verte (créé par l'ADEME en 2000) hiérarchise les performances des appareils, le niveau 7 étoiles devenant le standard de fait depuis janvier 2025."
        variants={[
          {
            indicator: "Flamme Verte 7*",
            name: "Standard 2025 pour les appareils neufs",
            description:
              "Niveau le plus exigeant du label : ≤ 40 mg/Nm³ de particules pour les poêles à bûches, ≤ 30 mg/Nm³ pour les poêles à granulés. Rendement ≥ 75 % (bûches) ou ≥ 90 % (granulés). Émissions de CO et COV également limitées. Depuis 2025, la mesure en charge partielle est obligatoire, ce qui rapproche le label du fonctionnement réel d'un ménage. Plus de 6 700 modèles labellisés, 131 marques.",
          },
          {
            indicator: "Pré-2002",
            name: "Appareils non labellisés (à remplacer)",
            description:
              "Avant la création du label Flamme Verte, les poêles avaient des rendements typiques de 30-50 % et des émissions de particules 10 à 100 fois supérieures aux modèles actuels. Sur une saison de chauffe, un tel appareil peut émettre 100-200 kg de particules contre 12-15 kg pour un Flamme Verte 7*. Dans les zones soumises à un PPA (Plan de Protection de l'Atmosphère), leur usage devient progressivement interdit.",
          },
          {
            indicator: "Granulé vs bûche",
            name: "Profil sanitaire et pratique",
            description:
              "Le poêle à granulés (pellets) offre des émissions plus basses (30 mg/Nm³ vs 40 mg/Nm³), un rendement plus élevé (90 % vs 75 %), un fonctionnement automatisé. Mais il dépend d'une alimentation électrique pour l'allumage et l'auger, et d'un combustible standardisé (granulés DINplus ou ENplus A1). Le poêle à bûches est plus simple en autonomie énergétique mais demande plus d'attention dans le pilotage et la qualité du bois.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Évaluer son installation actuelle ou son projet."
        subtitle="Six critères convergents permettent de juger de la performance et de la salubrité d'un poêle à bois. À vérifier sur l'installation existante avant tout investissement, et à exiger sur tout devis de remplacement."
        signs={[
          {
            label: "Âge de l'appareil et présence du label Flamme Verte",
            description:
              "Critère temporel le plus discriminant. Un poêle d'avant 2002 (sans label) ou d'avant 2010 (Flamme Verte 5* ou inférieur) est à remplacer en priorité, indépendamment de son aspect ou de son fonctionnement apparent. La plaque signalétique (souvent à l'arrière ou sous le poêle) indique le niveau du label. À défaut, demander à un professionnel ou consulter le manuel.",
            severity: "critique",
          },
          {
            label: "Couleur de la flamme et des fumées",
            description:
              "Une combustion propre donne une flamme jaune-orangée vive, dansante, avec des fumées peu visibles à la cheminée. Une flamme rouge sombre, fumeuse, ou des fumées blanches/grises persistantes signent une combustion incomplète : bois humide, manque d'air, appareil mal réglé. Vérifier régulièrement la sortie de cheminée à l'extérieur en cours de feu.",
            severity: "modéré",
          },
          {
            label: "Humidité du bois utilisé",
            description:
              "Mesurer avec un humidimètre à 15-30 € : valeur cible < 20 %, idéale 15-18 %. Un bois à 25 % d'humidité émet 5 à 10 fois plus de particules qu'un bois à 18 %, et donne 30-50 % moins de chaleur utile. Si le test révèle plus de 25 %, prolonger le séchage 6 à 12 mois supplémentaires sous abri ventilé avant utilisation.",
            severity: "critique",
          },
          {
            label: "Tirage et état du conduit",
            description:
              "Conduit propre, sans déformation, ramoné 1 à 2 fois par an selon usage. Présence d'un certificat de ramonage à conserver pour les assurances. Un dépôt important de bistre (résidus collants noirs) signale une combustion ralentie chronique. Une fumée qui rentre dans la pièce à l'allumage signe un défaut de tirage : conduit obstrué, dimensionnement inadapté, ou compétition avec une VMC trop puissante.",
            severity: "critique",
          },
          {
            label: "Présence d'un détecteur de monoxyde de carbone",
            description:
              "Détecteur certifié EN 50291, posé dans la pièce du poêle à environ 1,50 m du sol, à distance des courants d'air et des fenêtres. Pile vérifiée annuellement, date de péremption (5-10 ans selon modèle) respectée. Un poêle sans détecteur expose à un risque grave d'intoxication non détectée.",
            severity: "critique",
          },
          {
            label: "Pratiques de chauffe : allumage, charge, fermeture",
            description:
              "Allumage par le haut (top-down) ou avec allume-feu naturel + petit bois sec, jamais avec carton imprimé, papier journal coloré ou produit liquide. Charges régulières plutôt que combustion ralentie de longue durée. Porte fermée hors rechargement. Régulation par l'arrivée d'air primaire/secondaire, pas par étouffement. Ces gestes divisent les émissions par 2 à 5 sur le même appareil.",
            severity: "modéré",
          },
        ]}
        footerNote="Si plusieurs critères sont défavorables, le remplacement par un Flamme Verte 7* est rentable à court terme : 30 à 50 % de bois économisé pour la même chaleur, plus de 90 % de réduction des émissions. MaPrimeRénov' soutient le remplacement des appareils anciens (1 500 à 2 500 € selon revenus pour un poêle à granulés)."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent réellement les émissions d'un poêle à bois."
        subtitle="Quatre facteurs combinés expliquent l'écart d'un facteur 100 entre un poêle ancien mal utilisé et un Flamme Verte 7* bien piloté avec bois sec. Identifier le facteur principal de votre installation oriente l'action."
        causes={[
          {
            number: "01",
            cause: "Conception ancienne (avant Flamme Verte ou < 5*)",
            explanation:
              "Source dominante. Un poêle d'avant 2002 sans optimisation de la combustion (post-combustion, double-flux d'air secondaire) brûle de façon incomplète et émet plusieurs grammes de particules par kWh produit. Les nouveaux poêles intègrent une post-combustion qui brûle les imbrûlés et réduit les particules par 10 à 50.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Bois humide (> 20 % d'humidité)",
            explanation:
              "L'eau contenue dans le bois consomme de l'énergie pour s'évaporer avant la combustion proprement dite. Un bois à 30 % d'humidité dégage 30-50 % de chaleur utile en moins, refroidit la chambre de combustion et empêche la post-combustion des imbrûlés. Résultat : émissions de particules multipliées par 5 à 10 par rapport au même appareil avec bois sec.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Combustion ralentie permanente",
            explanation:
              "Pratique consistant à étouffer la combustion en fermant l'arrivée d'air pour faire durer la flambée. Combustion incomplète massive, dépôt de bistre dans le conduit (risque de feu de cheminée), émissions de particules et CO maximales. Préférer plusieurs flambées vives courtes plutôt qu'une combustion ralentie longue.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Combustibles inadaptés (résineux, déchets, traités)",
            explanation:
              "Pin et sapin non séchés brûlent rapidement, encrassent le conduit (risque d'incendie), émettent davantage. Bois traités (palettes, planches peintes, contreplaqués) : interdits en combustion domestique, libèrent métaux lourds (chrome, arsenic) et dioxines. Cartons imprimés, papier glacé : encrassants et toxiques. Brûler exclusivement du bois sec, naturel, idéalement labellisé.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Conduit mal dimensionné ou non ramoné",
            explanation:
              "Un conduit trop court, trop étroit, ou encrassé par le bistre dégrade le tirage et fait stagner les fumées dans la chambre de combustion. Combustion incomplète, refoulement possible vers la pièce, risque d'incendie de cheminée. Le ramonage 1 à 2 fois par an est obligatoire et doit donner lieu à un certificat conservé pour l'assurance.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire les émissions de son chauffage bois, étape par étape."
        immediate={[
          {
            label: "Vérifier l'humidité du bois avant chaque saison",
            description:
              "Humidimètre à 15-30 € en jardinerie ou bricolage. Mesurer plusieurs bûches au cœur du tas (couper en deux pour mesurer la zone fraîche). Cible < 20 %, idéale 15-18 %. Si > 25 %, prolonger le séchage et utiliser uniquement les lots conformes. Geste qui peut diviser les émissions par 5 sans changer d'appareil.",
            effort: "Achat 15-30 €, vérification 5 minutes",
          },
          {
            label: "Allumer par le haut (technique top-down)",
            description:
              "Empiler les grosses bûches en bas, puis du petit bois sec au-dessus, puis l'allume-feu naturel et de petites brindilles tout en haut. Allumer le sommet. La combustion descend progressivement, brûle proprement les fumées en passant à travers les bûches du dessous. Démontre un effet immédiat sur les émissions, sans coût.",
            effort: "Geste à apprendre",
          },
          {
            label: "Utiliser exclusivement du bois bûche labellisé ou auto-séché correctement",
            description:
              "Privilégier le bois certifié NF Bois de chauffage, France Bois Bûche, ONF Énergie ou PEFC, qui garantissent l'humidité et l'essence. À défaut, acheter 2 ans à l'avance et stocker sous abri ventilé (couvert mais pas étanche). Feuillus durs (chêne, hêtre, charme) à privilégier sur les résineux.",
            effort: "Organisation 2 ans à l'avance",
          },
          {
            label: "Faire ramoner 2 fois par an et entretenir le poêle",
            description:
              "Ramonage obligatoire pour le bois (deux fois par an, dont une en saison de chauffe). Entretien annuel de l'appareil par un professionnel pour vérifier joints, vermiculite, déflecteurs. Conservation des certificats pour l'assurance habitation. Coût total 100 à 200 € par an, marginal au regard du gain en sécurité et performance.",
            effort: "100-200 €/an",
          },
        ]}
        structural={[
          {
            label: "Remplacer un poêle pré-2002 par un Flamme Verte 7*",
            description:
              "Investissement le plus rentable sur le plan air et sur la facture de bois. MaPrimeRénov' 2026 : 1 500 à 2 500 € selon revenus pour un poêle à granulés ; 800 à 1 500 € pour un poêle à bûches. Cumul CEE possible. Compter 3 000 à 7 000 € pose comprise. Économie de 30 à 50 % sur le bois consommé pour la même chaleur, et 90 % de réduction des émissions.",
            effort: "Investissement, aides disponibles",
          },
          {
            label: "Installer un détecteur de monoxyde de carbone EN 50291",
            description:
              "Coût 25-60 €. Pose dans la pièce du poêle, à environ 1,50 m du sol, à distance des courants d'air et des fenêtres. Vérification annuelle de la pile et de la date de péremption (5-10 ans). Voir notre page CO pour le détail des bonnes pratiques. Indispensable avec un poêle bois.",
            effort: "Achat ponctuel 25-60 €",
          },
          {
            label: "Vérifier la conformité du conduit avant achat ou remplacement",
            description:
              "Un poêle moderne ne fonctionne pas correctement sur un conduit dimensionné pour un appareil ancien (différentiel de tirage). Avant achat, faire valider le conduit par un installateur RGE Qualibois ou Qualibat 8121. Tubage, isolation, sortie en zone non turbulente, hauteur règlementaire. 500 à 2 000 € de remise aux normes courants.",
            effort: "Diagnostic préalable",
          },
          {
            label: "Adapter à la zone : vérifier les restrictions locales (PPA, ZFE)",
            description:
              "Plusieurs régions soumises à des Plans de Protection de l'Atmosphère interdisent progressivement les appareils anciens : Vallée de l'Arve, métropole de Lyon, certaines vallées alpines. Avant tout investissement, vérifier la réglementation locale auprès de votre mairie ou de la DREAL. Un appareil neuf Flamme Verte 7* reste éligible quasi partout.",
            effort: "Vérification locale",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire avec un poêle à bois."
        errors={[
          {
            label: "\"Mon vieux poêle chauffe bien, je le garde\"",
            explanation:
              "L'argument oublie le coût en bois (rendement de 30-50 % vs 75-90 % sur un récent : 30-50 % de bois en plus pour la même chaleur) et le coût sanitaire (10 à 100 fois plus de particules dans le quartier et le logement). Sur 10 ans, le gain MaPrimeRénov' + l'économie de bois rembourse une bonne partie d'un appareil neuf. Le remplacement est presque toujours bénéfique économiquement et sanitairement.",
          },
          {
            label: "\"Je ferme l'arrivée d'air pour faire durer la flambée toute la nuit\"",
            explanation:
              "Pratique la plus polluante. La combustion ralentie produit des particules en quantité massive, dépose du bistre dans le conduit (risque de feu de cheminée), et émet du CO. Pour passer la nuit, mieux vaut éteindre, recharger au matin, et compléter avec un autre mode (radiateur électrique d'appoint, programmation chaudière). Les poêles modernes à granulés ont un mode nuit moins polluant car la combustion reste optimisée.",
          },
          {
            label: "\"Je brûle des palettes, ça ne coûte rien\"",
            explanation:
              "Faux et dangereux. Les palettes peuvent contenir des traitements (anti-fongiques, anti-termites), des résidus de produits transportés, des clous métalliques. Leur combustion libère des composés toxiques (formaldéhyde, métaux lourds, dioxines selon le traitement) qui se retrouvent dans l'air ambiant et dans le conduit. La même règle vaut pour le bois peint, verni, contreplaqué, aggloméré : interdit en combustion domestique.",
          },
          {
            label: "\"Le bois, c'est neutre carbone, donc c'est forcément écologique\"",
            explanation:
              "La neutralité carbone théorique (le CO₂ libéré sera réabsorbé par la repousse) ne dit rien des autres impacts : particules fines, NOx, HAP qui polluent l'air local et nuisent à la santé. Le bois énergie est une ressource renouvelable utile mais à utiliser proprement (Flamme Verte 7*, bois sec, bonnes pratiques). Mal utilisé, c'est l'une des sources de pollution intérieure les plus problématiques en France.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le poêle à bois et la qualité de l'air"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Particules fines (PM2,5) : sources et leviers",
            description:
              "Le chauffage au bois est la première source nationale. Comprendre l'enjeu général et les leviers de réduction.",
            href: "/air-interieur/particules-fines-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Monoxyde de carbone : reconnaître le risque",
            description:
              "Tout poêle à bois exige un détecteur de CO et un entretien régulier. Sources, signes d'intoxication, prévention.",
            href: "/air-interieur/monoxyde-carbone-maison/",
          },
          {
            tag: "Chauffage sain",
            title: "Choisir son chauffage en rénovation",
            description:
              "Méthode d'arbitrage entre poêle bois, PAC et électrique selon climat, isolation et budget.",
            href: "/chauffage-sain/choisir-chauffage-renovation/",
          },
        ]}
      />
    </>
  );
}
