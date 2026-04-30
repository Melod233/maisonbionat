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
  title: "Pompe à chaleur air-eau : performance, aides 2026 et contraintes",
  description:
    "MaPrimeRénov' 2026 (3 000-5 000 €), COP réel, dimensionnement, compatibilité avec radiateurs existants. Quand la PAC air-eau est rentable et quand elle déçoit.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/chauffage-sain/pompe-a-chaleur-air-eau/",
  },
  openGraph: {
    title: "Pompe à chaleur air-eau : performance, aides 2026 et contraintes",
    description:
      "MaPrimeRénov' 2026 (3 000-5 000 €), COP réel, dimensionnement, compatibilité avec radiateurs existants. Quand la PAC air-eau est rentable et quand elle déçoit.",
    url: "https://www.maisonbionat.fr/chauffage-sain/pompe-a-chaleur-air-eau/",
  },
};

const faqItems = [
  {
    question: "Quel montant de MaPrimeRénov' pour une pompe à chaleur air-eau en 2026 ?",
    answer:
      "Le montant 2026 dépend des revenus du foyer : 5 000 € pour les ménages très modestes (couleur bleue MaPrimeRénov'), 4 000 € pour les modestes (jaune), 3 000 € pour les intermédiaires (violet). Le plafond de dépenses éligibles est fixé à 12 000 €. Les ménages aux revenus supérieurs (couleur rose) ne sont plus éligibles depuis 2024 sur la pompe à chaleur air-eau seule. Le cumul avec les Certificats d'économie d'énergie (CEE) est possible et apporte 1 000 à 5 800 € supplémentaires selon l'installation, avec un écrêtement total à 10 800 € pour les très modestes. L'installateur doit être certifié RGE Qualibat 5111 ou Qualifelec PAC.",
  },
  {
    question: "Quel COP réel attendre d'une PAC air-eau ?",
    answer:
      "Le COP (Coefficient de Performance) théorique annoncé par les fabricants est mesuré dans des conditions optimales (températures extérieure et intérieure normalisées). Le COP réel d'une PAC air-eau bien dimensionnée et bien posée est de 3 à 4 sur l'année, ce qui signifie 3 à 4 kWh de chaleur produits pour 1 kWh d'électricité consommé. En conditions extrêmes (température extérieure proche de -10 °C, eau de chauffage à 65 °C), le COP peut descendre sous 2. Le SCOP (Saisonnier) ou SPF (Seasonal Performance Factor) sont des indicateurs plus fiables que le COP nominal. Demander un SCOP > 4 dans le devis pour garantir une performance correcte sur l'année.",
  },
  {
    question: "Une PAC air-eau est-elle compatible avec mes radiateurs existants ?",
    answer:
      "Cela dépend de la température de chauffe. Une PAC air-eau fonctionne idéalement avec un système basse température (plancher chauffant à 30-35 °C, radiateurs basse température à 45-50 °C). Avec des radiateurs anciens haute température (65-70 °C), la PAC peut tout de même fonctionner mais à un COP dégradé (1,5-2,5), ce qui ruine la rentabilité. Les solutions : 1) PAC haute température (modèles spécifiques jusqu'à 65 °C, COP plus faible mais compatibilité maintenue). 2) Remplacement progressif des radiateurs par des modèles basse température. 3) Combinaison avec un appoint électrique pour les jours les plus froids. Faire dimensionner par un thermicien.",
  },
  {
    question: "La PAC est-elle bruyante ? Quelles sont les contraintes de pose ?",
    answer:
      "L'unité extérieure de la PAC produit un bruit de fonctionnement de 40 à 60 dB(A) à 1 m, comparable à un climatiseur split. La réglementation impose ≤ 30 dB(A) à la limite de propriété en journée, ≤ 25 dB(A) la nuit (NF S31-010). En zone urbaine dense ou en mitoyenneté, le choix d'un modèle silencieux et le positionnement loin des fenêtres voisines sont essentiels. Vérifier le niveau acoustique en dB(A) sur la fiche technique avant achat. Autres contraintes : alimentation électrique dédiée 32 A, accès pour entretien annuel, distance minimale aux ouvertures. Pour la PAC monobloc air-air (non traitée ici), les contraintes acoustiques sont similaires.",
  },
];

export default function PompeChaleurPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Chauffage sain", href: "/chauffage-sain/" },
    {
      name: "Pompe à chaleur air-eau",
      href: "https://www.maisonbionat.fr/chauffage-sain/pompe-a-chaleur-air-eau/",
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
        parentLabel="Chauffage sain"
        parentHref="/chauffage-sain/"
        tag="Énergie renouvelable"
        title="Pompe à chaleur air-eau : ce qu'il faut savoir avant de signer le devis"
        quickAnswer="La pompe à chaleur air-eau est l'équipement de chauffage le plus aidé en 2026 : 3 000 à 5 000 € de MaPrimeRénov' selon les revenus, plafond de dépenses éligibles 12 000 €, cumul CEE possible jusqu'à 10 800 € pour les très modestes. Sur le plan sanitaire, c'est l'un des modes de chauffage les plus sains : aucune combustion à l'intérieur du logement, donc aucune émission de particules, de CO ou de COV. Mais sa rentabilité dépend strictement du couple isolation/dimensionnement : sur un logement bien isolé avec radiateurs basse température ou plancher chauffant, le COP réel atteint 3 à 4 et la facture chute. Sur un logement passoire avec radiateurs anciens haute température, la PAC peut être contre-productive (COP < 2, appoint électrique permanent, factures décevantes). Avant tout achat : audit énergétique, vérification de la compatibilité du système d'émission, dimensionnement par un installateur RGE certifié."
        stats={[
          {
            value: "3 000-5 000 €",
            label: "MaPrimeRénov' 2026 selon les revenus du foyer (intermédiaires à très modestes)",
          },
          {
            value: "12 000 €",
            label: "plafond de dépenses éligibles pour MaPrimeRénov' PAC air-eau",
          },
          {
            value: "COP 3-4",
            label: "performance réelle d'une PAC bien dimensionnée et bien posée sur l'année",
          },
          {
            value: "RGE",
            label: "certification obligatoire de l'installateur pour bénéficier des aides",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre la PAC" },
          { id: "signes", label: "Logements adaptés" },
          { id: "causes", label: "Conditions de performance" },
          { id: "actions", label: "Acheter et installer" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Comment fonctionne une PAC air-eau et ce qui détermine sa performance."
        description="La pompe à chaleur air-eau capte les calories de l'air extérieur via une unité extérieure (compresseur + échangeur), les transfère à un fluide caloporteur, et restitue cette chaleur à l'eau de chauffage du logement (plancher chauffant, radiateurs, ECS). Le rapport entre l'énergie restituée et l'électricité consommée est le COP (Coefficient de Performance). Une PAC bien dimensionnée fonctionne avec un COP réel de 3 à 4 sur l'année (SCOP), c'est-à-dire 3 à 4 kWh de chaleur pour 1 kWh d'électricité. La performance dépend strictement de quatre facteurs : la qualité de l'isolation, le dimensionnement de la PAC, la température de fonctionnement du circuit (plus elle est basse, meilleur le COP), et la qualité de la pose."
        variants={[
          {
            indicator: "Basse température",
            name: "PAC pour plancher chauffant ou radiateurs BT",
            description:
              "Configuration optimale. Eau de chauffage à 30-35 °C pour plancher chauffant ou 45-50 °C pour radiateurs basse température. COP saisonnier (SCOP) de 3,5 à 4,5. C'est dans cette configuration que la PAC est la plus rentable et que les aides MaPrimeRénov' sont vraiment justifiées. Adaptée aux constructions récentes (RT 2012, RE 2020) ou aux rénovations avec changement des émetteurs.",
          },
          {
            indicator: "Haute température",
            name: "PAC pour radiateurs anciens",
            description:
              "Modèles capables de produire de l'eau jusqu'à 65 °C, compatibles avec les radiateurs anciens en fonte. Permet de garder les émetteurs existants en rénovation. Mais COP saisonnier dégradé (2,5 à 3) en raison du saut thermique élevé, ce qui pénalise la rentabilité. À envisager surtout en rénovation où le remplacement des radiateurs serait trop coûteux.",
          },
          {
            indicator: "Hybride",
            name: "PAC + chaudière gaz/fioul existante",
            description:
              "Configuration intermédiaire qui combine la PAC pour la majorité de l'année (températures douces) et la chaudière existante en pointe (températures très basses). Réduit la dépendance au combustible fossile sans imposer le remplacement complet du système. Compromis utile en rénovation progressive ou pour les bâtis très mal isolés.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Identifier si votre logement est adapté à une PAC air-eau."
        subtitle="Six critères convergents permettent d'évaluer la pertinence d'une PAC dans votre situation. Si plusieurs critères sont défavorables, l'investissement risque de décevoir."
        signs={[
          {
            label: "Logement isolé (RT 2012, RE 2020 ou rénovation thermique poussée)",
            description:
              "Critère principal. Une PAC est rentable sur un logement avec déperditions modérées. Sur une passoire thermique (DPE F ou G), la PAC fonctionne en limite de capacité, sollicite l'appoint électrique en permanence, et le COP saisonnier réel s'effondre. Avant tout investissement PAC : audit énergétique et travaux d'isolation prioritaires.",
            severity: "critique",
          },
          {
            label: "Émetteurs basse température : plancher chauffant ou radiateurs BT",
            description:
              "Le plancher chauffant à 30-35 °C est la configuration idéale. Les radiateurs basse température à 45-50 °C (souvent acier ou aluminium en grande surface d'échange) sont également bien adaptés. Sur des radiateurs anciens haute température (65-70 °C), la PAC fonctionne mais à un COP très réduit, ce qui ruine la rentabilité.",
            severity: "critique",
          },
          {
            label: "Climat tempéré ou doux",
            description:
              "Une PAC air-eau perd en performance quand la température extérieure descend sous 0 °C. En climat continental sévère (Massif central, Vosges, Jura) ou en zone montagne, prévoir un appoint suffisant et accepter un COP saisonnier moindre. En climat tempéré (façade atlantique, sud) ou Méditerranéen, performance optimale toute l'année.",
            severity: "modéré",
          },
          {
            label: "Espace extérieur disponible pour l'unité (au moins 1 m²)",
            description:
              "L'unité extérieure mesure typiquement 90 × 35 × 75 cm et doit être posée à l'extérieur, sur dalle béton ou plots, à distance des fenêtres voisines (contraintes acoustiques NF S31-010 : ≤ 30 dB(A) en limite de propriété). En appartement collectif sans extérieur dédié, la PAC air-eau est rarement possible (sauf solution mutualisée).",
            severity: "modéré",
          },
          {
            label: "Distance acoustique aux voisins",
            description:
              "L'unité extérieure produit 40-60 dB(A) à 1 m. La réglementation NF S31-010 impose ≤ 30 dB(A) en limite de propriété en journée et ≤ 25 dB(A) la nuit (mesuré par tiers). En mitoyenneté serrée ou logement urbain dense, choisir un modèle silencieux (≤ 50 dB(A) à 1 m) et positionner le bloc loin des fenêtres voisines. Vérifier les fiches techniques avant achat.",
            severity: "modéré",
          },
          {
            label: "Budget disponible pour le remplacement et la mise à niveau",
            description:
              "PAC air-eau posée : 10 000 à 18 000 € selon puissance. MaPrimeRénov' + CEE rembourse 4 000 à 10 800 € selon revenus. Reste à charge 5 000 à 14 000 €. À comparer au coût total sur 15 ans (gain en exploitation vs chaudière gaz ou électrique). Si le bâti exige aussi une isolation, des émetteurs neufs et un ballon ECS, le budget global peut atteindre 25 000-40 000 € en parcours rénovation complet.",
            severity: "léger",
          },
        ]}
        footerNote="Si votre logement coche les 4 premiers critères, la PAC air-eau est probablement le meilleur choix de chauffage en 2026. Si plusieurs sont défavorables, étudier sérieusement les alternatives (PAC hybride, chauffage électrique à inertie, biomasse selon contexte) avant de signer."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi certaines installations PAC déçoivent."
        subtitle="Les retours d'expérience publiés par l'ADEME et les associations de consommateurs identifient cinq causes principales d'échec ou de déception. Les anticiper évite les déconvenues."
        causes={[
          {
            number: "01",
            cause: "Installation sur logement insuffisamment isolé",
            explanation:
              "Cause numéro un. La PAC est dimensionnée sur la base des déperditions du logement. Si l'isolation est mauvaise, la PAC choisie est trop puissante (ou trop sollicitée) et fonctionne en permanence avec l'appoint électrique. Le COP saisonnier réel tombe à 1,5-2 au lieu de 3-4, et la facture d'électricité dépasse celle d'une chaudière gaz ancienne. Toujours isoler avant d'installer.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Mauvais dimensionnement (sur ou sous-dimensionnement)",
            explanation:
              "Une PAC sous-dimensionnée fonctionne en permanence avec appoint. Sur-dimensionnée, elle effectue des cycles courts (marche-arrêt rapides), s'use prématurément et chauffe par à-coups. Le bon dimensionnement repose sur une note de calcul thermique précise. Exiger ce document de l'installateur, et ne pas se contenter d'une règle empirique au m².",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Émetteurs incompatibles non remplacés",
            explanation:
              "Garder des radiateurs haute température 70 °C avec une PAC standard fait fonctionner la pompe en limite supérieure, avec un COP très dégradé. Soit choisir une PAC haute température (modèles spécifiques), soit remplacer progressivement les radiateurs par des modèles basse température. Le compromis 'on garde tout, on installe juste la PAC' est l'erreur classique en rénovation.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Pose et réglage défectueux",
            explanation:
              "Mauvais raccordement hydraulique, mauvaise charge en fluide frigorigène, mauvaise programmation des courbes de chauffe : autant d'erreurs qui dégradent fortement la performance. Un installateur RGE expérimenté est essentiel. Demander des références, consulter les avis. La certification RGE Qualibat 5111 ou Qualifelec PAC est obligatoire pour les aides.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Entretien négligé après la pose",
            explanation:
              "Une PAC demande un entretien annuel obligatoire (décret 2010-349) : contrôle de la charge de fluide, nettoyage des échangeurs, vérification des paramètres. Coût 150 à 300 €/an. Sans entretien, la performance se dégrade progressivement et la durée de vie diminue (15-20 ans avec entretien, 8-12 ans sans).",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Du devis à l'exploitation, étape par étape."
        immediate={[
          {
            label: "Faire un audit énergétique avant tout autre chose",
            description:
              "Audit thermique complet par un thermicien certifié RGE (250-700 €, souvent éligible aux aides). Identifie l'isolation, les déperditions, le dimensionnement nécessaire, l'ordre des travaux. Une PAC bien posée sur un logement non isolé est l'erreur la plus coûteuse en rénovation. L'audit donne une vue d'ensemble pour arbitrer.",
            effort: "Audit 250-700 €",
          },
          {
            label: "Demander 3 devis d'installateurs RGE certifiés",
            description:
              "Exiger la certification RGE Qualibat 5111 ou Qualifelec PAC (sinon pas d'aides). Le devis doit comporter : note de dimensionnement, modèle exact (marque, référence, SCOP), fluide frigorigène (R32 ou R290 préférables au R410A), niveau acoustique en dB(A), garantie, conditions d'entretien. Comparer les SCOP plutôt que les COP nominaux pour évaluer la performance saisonnière réelle.",
            effort: "1 à 2 semaines",
          },
          {
            label: "Simuler les aides cumulées sur france-renov.gouv.fr",
            description:
              "Sur le site officiel, simuler MaPrimeRénov' + CEE selon revenus du foyer et travaux envisagés. Ne signer le devis qu'après validation de la prime. Constituer le dossier MaPrimeRénov' AVANT signature (acceptation de la prime conditionne souvent la dépense). Demander à l'installateur s'il peut faire l'avance des CEE (mandat).",
            effort: "2 à 4 semaines administratif",
          },
          {
            label: "Préparer la pièce technique et l'extérieur",
            description:
              "Local technique pour le module intérieur (compact ou avec ballon tampon selon modèle), accès aisé pour entretien. Extérieur : dalle béton ou plots ferraillés, distance aux ouvertures voisines, alimentation électrique dédiée 32 A. Vérifier la portance d'une terrasse si pose en étage.",
            effort: "Préparation chantier",
          },
        ]}
        structural={[
          {
            label: "Faire l'isolation et les émetteurs avant ou avec la PAC",
            description:
              "Bouquet de travaux logique : 1) isolation toiture (priorité 1), murs, fenêtres si ancien. 2) Remplacement des émetteurs par basse température si radiateurs anciens. 3) Installation de la PAC dimensionnée sur la nouvelle enveloppe. Le parcours accompagné MaPrimeRénov' couvre cette logique avec un accompagnant agréé.",
            effort: "Plan de rénovation 2-3 ans",
          },
          {
            label: "Programmer les courbes de chauffe avec l'installateur",
            description:
              "La PAC s'optimise via une courbe de chauffe (température d'eau en fonction de la température extérieure). Une mauvaise courbe fait surchauffer ou sous-chauffer le logement et dégrade le COP. Demander à l'installateur de régler et expliquer la courbe pendant l'hiver suivant la pose, et conserver les paramètres dans la documentation.",
            effort: "Suivi premier hiver",
          },
          {
            label: "Souscrire un contrat d'entretien annuel",
            description:
              "Entretien annuel obligatoire (décret 2010-349). Contrat 150-300 €/an chez l'installateur ou un prestataire spécialisé. Vérification de la charge de fluide, nettoyage des échangeurs, contrôle des sécurités. Conservation de la fiche d'entretien (utile pour la garantie et la revente du logement).",
            effort: "Contrat annuel 150-300 €",
          },
          {
            label: "Suivre les consommations dans le temps",
            description:
              "Suivre la consommation électrique mensuelle (relevé du sous-compteur dédié à la PAC si possible) pour détecter une dérive. Une augmentation soudaine signale un problème (perte de fluide, encrassement, défaut de programmation). Tableau de bord simple : conso annuelle / surface chauffée, à comparer aux références ADEME pour le bâti et le climat.",
            effort: "Suivi simple",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire avec une pompe à chaleur."
        errors={[
          {
            label: "\"Je remplace ma chaudière gaz par une PAC sans toucher au reste\"",
            explanation:
              "Erreur classique en rénovation. Si l'isolation est insuffisante ou les radiateurs anciens haute température, la PAC tournera en limite de capacité avec un COP catastrophique. La facture peut être plus élevée qu'avant. Toujours faire l'audit énergétique en amont et engager les travaux dans le bon ordre : isolation, émetteurs, PAC.",
          },
          {
            label: "\"L'installateur dimensionne au feeling, je fais confiance\"",
            explanation:
              "Le dimensionnement à la louche (formule au m² ou expérience subjective) est l'une des causes principales de PAC qui déçoivent. Exiger une note de calcul thermique formelle, basée sur les déperditions réelles du logement et les conditions climatiques locales. Ce document est attendu par MaPrimeRénov' et engage la responsabilité de l'installateur.",
          },
          {
            label: "\"Je néglige le bruit, ce n'est pas grave\"",
            explanation:
              "L'unité extérieure peut générer des troubles de voisinage avec dépôt de plainte et obligation légale de remise aux normes. Vérifier ≤ 30 dB(A) à la limite de propriété en journée, ≤ 25 dB(A) la nuit (NF S31-010). Privilégier les modèles ≤ 50 dB(A) à 1 m, positionner loin des fenêtres voisines, prévoir un écran acoustique si nécessaire.",
          },
          {
            label: "\"Les promesses du commercial sur le COP suffisent\"",
            explanation:
              "Le COP nominal annoncé par le fabricant est mesuré dans des conditions optimales (température extérieure +7 °C, eau à 35 °C). Le COP saisonnier réel (SCOP) est nettement inférieur sur l'année. Demander le SCOP dans le devis et vérifier les fiches techniques. Un commercial qui ne sait pas répondre sur le SCOP doit faire douter de son sérieux.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la pompe à chaleur air-eau"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Chauffage sain",
            title: "Choisir son chauffage en rénovation",
            description:
              "Méthode pour arbitrer entre PAC, chauffage électrique et bois selon votre bâti, votre climat et votre budget.",
            href: "/chauffage-sain/choisir-chauffage-renovation/",
          },
          {
            tag: "Rénovation saine",
            title: "VMC double flux : qualité d'air, performances et coûts",
            description:
              "Une PAC + VMC double flux constitue la combinaison la plus performante en rénovation thermique poussée.",
            href: "/renovation-saine/vmc-double-flux/",
          },
          {
            tag: "Rénovation saine",
            title: "Isolation et ventilation",
            description:
              "L'isolation conditionne strictement la rentabilité d'une PAC. À planifier en bouquet avec la ventilation.",
            href: "/renovation-saine/isolation-ventilation/",
          },
        ]}
      />
    </>
  );
}
