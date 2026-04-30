import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Maison pièce par pièce : agir dans chaque espace",
  description:
    "Les priorités d'un logement sain changent selon la pièce. Chambre, cuisine, salle de bain, salon, garage : entrez dans votre maison par l'espace qui vous préoccupe.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/",
  },
  openGraph: {
    title: "Maison pièce par pièce : agir dans chaque espace",
    description:
      "Les priorités d'un logement sain changent selon la pièce. Chambre, cuisine, salle de bain, salon, garage : entrez dans votre maison par l'espace qui vous préoccupe.",
    url: "https://www.maisonbionat.fr/piece-par-piece/",
  },
};

const rooms = [
  {
    number: "01",
    name: "Chambre",
    tag: "8h de sommeil",
    stat: "8h",
    statLabel: "d'exposition nocturne",
    insight:
      "L'air de la chambre est respiré pendant 6 à 8 heures sans interruption. C'est l'espace où l'accumulation de CO₂, d'acariens et de COV a le plus d'impact sur la qualité de la récupération.",
    href: "/piece-par-piece/chambre-saine/",
  },
  {
    number: "02",
    name: "Chambre d'enfant",
    tag: "Espace prioritaire",
    stat: "×2",
    statLabel: "volume respiratoire",
    insight:
      "Les enfants ont un volume respiratoire deux fois supérieur à celui des adultes proportionnellement à leur masse. La chambre d'enfant est souvent la première pièce à traiter.",
    href: "/piece-par-piece/chambre-enfant-saine/",
  },
  {
    number: "03",
    name: "Cuisine",
    tag: "Pièce la plus polluante",
    stat: "NO₂",
    statLabel: "CO · PM2,5 · benzène",
    insight:
      "La cuisson au gaz émet du dioxyde d'azote, du monoxyde de carbone et des particules fines. Une hotte sans extraction extérieure ne règle pas le problème : elle recircule les polluants.",
    href: "/piece-par-piece/cuisine-saine/",
  },
  {
    number: "04",
    name: "Salle de bain",
    tag: "Humidité chronique",
    stat: "+30%",
    statLabel: "d'hygrométrie après douche",
    insight:
      "La pièce la plus humide du logement. Sans extraction efficace, l'humidité migre vers les autres pièces et favorise les moisissures sur les murs les plus froids.",
    href: "/piece-par-piece/salle-de-bain-saine/",
  },
  {
    number: "05",
    name: "Salon",
    tag: "Accumulation silencieuse",
    stat: "COV",
    statLabel: "meubles · tapis · textiles",
    insight:
      "Grande surface, beaucoup de mobilier : le salon concentre les acariens, les COV des meubles et les polluants ramenés de l'extérieur. L'impact est moins visible, mais l'exposition est quotidienne.",
    href: "/piece-par-piece/salon-sain/",
  },
  {
    number: "06",
    name: "Garage",
    tag: "Source souvent ignorée",
    stat: "CO",
    statLabel: "solvants · vapeurs",
    insight:
      "Un garage attenant peut laisser passer monoxyde de carbone, vapeurs de solvants et pesticides vers le logement. Étanchéité de la porte et ventilation indépendante sont les deux priorités.",
    href: "/piece-par-piece/garage-sain/",
  },
  {
    number: "07",
    name: "Extérieur",
    tag: "Ce qu'on ramène dedans",
    stat: "→",
    statLabel: "pollens · pesticides",
    insight:
      "Terrasse et jardin introduisent pollens, résidus de pesticides et polluants dans le logement via les chaussures et les vêtements. Une entrée bien pensée limite significativement ces apports.",
    href: "/piece-par-piece/exterieur-sain/",
  },
  {
    number: "08",
    name: "Bureau / télétravail",
    tag: "Pièce sous-estimée",
    stat: "1500+ ppm",
    statLabel: "CO₂ en quelques heures",
    insight:
      "Plusieurs heures par jour dans une petite pièce fermée font monter le CO₂ à des niveaux qui dégradent la concentration. Aération régulière, lumière naturelle et mobilier A+ sont les leviers concrets.",
    href: "/piece-par-piece/bureau-teletravail-sain/",
  },
  {
    number: "09",
    name: "Buanderie",
    tag: "Pièce humide à traiter comme telle",
    stat: "1,5-3 L",
    statLabel: "eau libérée par séchage",
    insight:
      "Une lessive de 5 kg libère 1,5 à 3 L d'eau pendant le séchage, soit l'équivalent de plusieurs douches. Sans extraction dédiée et sans organisation, l'humidité diffuse dans tout le logement et les COV des produits de lessive aussi.",
    href: "/piece-par-piece/buanderie-saine/",
  },
  {
    number: "10",
    name: "Sous-sol / cave",
    tag: "Interface avec le sol",
    stat: "Radon",
    statLabel: "porte d'entrée principale",
    insight:
      "Cave, sous-sol, vide sanitaire concentrent humidité du terrain et radon (en zone 2 ou 3) qui remontent ensuite vers les pièces de vie par tirage thermique. Un sous-sol mal géré contamine tout le logement.",
    href: "/piece-par-piece/sous-sol-sain/",
  },
];

const diagnostics = [
  {
    symptom: "Moisissures visibles",
    rooms: ["Salle de bain", "Chambre"],
    hrefs: ["/piece-par-piece/salle-de-bain-saine/", "/piece-par-piece/chambre-saine/"],
  },
  {
    symptom: "Mauvais sommeil, fatigue au réveil",
    rooms: ["Chambre"],
    hrefs: ["/piece-par-piece/chambre-saine/"],
  },
  {
    symptom: "Odeurs persistantes après cuisson",
    rooms: ["Cuisine"],
    hrefs: ["/piece-par-piece/cuisine-saine/"],
  },
  {
    symptom: "Allergies, toux fréquente",
    rooms: ["Chambre d'enfant", "Salon"],
    hrefs: ["/piece-par-piece/chambre-enfant-saine/", "/piece-par-piece/salon-sain/"],
  },
  {
    symptom: "Odeur de carburant ou solvant",
    rooms: ["Garage"],
    hrefs: ["/piece-par-piece/garage-sain/"],
  },
  {
    symptom: "Air lourd, pièce qui semble confinée",
    rooms: ["Toutes les pièces"],
    hrefs: ["/air-interieur/"],
  },
  {
    symptom: "Fatigue, baisse de concentration en télétravail",
    rooms: ["Bureau / télétravail"],
    hrefs: ["/piece-par-piece/bureau-teletravail-sain/"],
  },
];

export default function PieceParPiecePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
  ]);
  const faqItems = [
    {
      question: "Par quelle pièce commencer pour rendre son logement plus sain ?",
      answer:
        "La chambre adulte ou la chambre d'enfant sont le point de départ le plus impactant : vous y dormez 7 à 8 heures, soit un tiers de votre vie. En parallèle, la cuisine est à traiter si vous avez une cuisinière au gaz sans hotte à extraction extérieure. La salle de bain suit si vous observez des traces d'humidité ou des moisissures.",
    },
    {
      question: "La cuisine est-elle vraiment la pièce la plus polluante ?",
      answer:
        "Oui, lors des phases de cuisson. La combustion du gaz émet du dioxyde d'azote, du monoxyde de carbone, des particules fines et du benzène. Ces polluants peuvent se diffuser dans tout le logement en quelques minutes si la hotte est absente ou à recyclage. Une hotte avec conduit vers l'extérieur est l'équipement le plus efficace pour limiter ces pics.",
    },
    {
      question: "Faut-il traiter toutes les pièces en même temps ?",
      answer:
        "Non. L'approche la plus efficace est de prioriser selon le problème observé et le temps passé dans chaque pièce. Commencez par les pièces de sommeil (chambre adulte, chambre enfant), puis les pièces à forte production de polluants (cuisine) ou d'humidité (salle de bain). Le salon et les espaces secondaires peuvent suivre progressivement.",
    },
    {
      question: "Mon garage peut-il polluer le reste de la maison ?",
      answer:
        "Oui, si le garage est attenant au logement et que la porte de communication n'est pas étanche. Le monoxyde de carbone (véhicules), les vapeurs de solvants et les pesticides peuvent migrer vers les pièces habitées. La priorité : une porte coupe-feu étanche et une ventilation indépendante du circuit VMC principal.",
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ① Hero ─────────────────────────────────────────── */}
      <section className="bg-dark pt-14 pb-20 lg:pt-20 lg:pb-24">
        <div className="site-container">
          <div className="mb-8 lg:mb-10">
            <SectionLabel variant="dark">Pièce par pièce</SectionLabel>
          </div>

          <h1
            className="font-semibold text-ink-inv leading-[1.05]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.25rem)", letterSpacing: "-0.03em" }}
          >
            Chaque espace<br className="hidden lg:block" /> a ses propres règles.
          </h1>

          <p className="text-ink-dim text-lg leading-[1.65] mt-6 max-w-[52ch]">
            Les priorités ne sont pas les mêmes dans une chambre, une cuisine ou une salle de bain. Entrez dans votre logement par l'espace qui vous préoccupe.
          </p>

          {/* Accès rapide aux pièces */}
          <div className="flex flex-wrap gap-2 mt-10">
            {rooms.map((room) => (
              <Link
                key={room.href}
                href={room.href}
                className="group inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] px-3 py-2 border border-line-inv text-ink-dim hover:border-accent hover:text-ink-inv transition-[color,border-color] duration-150"
              >
                <span className="text-accent font-mono">{room.number}</span>
                {room.name}
                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150" aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ② Navigateur des pièces ─────────────────────────── */}
      <section id="explorer" className="bg-dark border-t border-line-inv">
        <div className="site-container">
          {rooms.map((room) => (
            <Link
              key={room.href}
              href={room.href}
              className="group grid grid-cols-[3rem_1fr] lg:grid-cols-[4rem_auto_1fr_auto] gap-x-6 lg:gap-x-10 items-center border-b border-line-inv py-8 lg:py-9 -mx-6 px-6 lg:-mx-10 lg:px-10 hover:bg-dark-2 border-l-2 border-l-transparent hover:border-l-accent transition-[background-color,border-color] duration-150"
            >
              {/* Numéro */}
              <span className="font-mono text-accent text-[11px] shrink-0 self-start pt-[2px]">
                {room.number}
              </span>

              {/* Stat */}
              <div className="hidden lg:flex flex-col gap-0.5 shrink-0 w-28">
                <span
                  className="font-semibold text-ink-inv leading-none"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.02em" }}
                >
                  {room.stat}
                </span>
                <span className="text-[10px] text-ink-dim uppercase tracking-[0.1em] leading-snug">
                  {room.statLabel}
                </span>
              </div>

              {/* Nom + description */}
              <div className="flex flex-col gap-2 min-w-0">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-inv group-hover:text-accent transition-colors duration-150 leading-none">
                  {room.name}
                </span>
                <p className="text-sm text-ink-dim leading-[1.6] max-w-[60ch]">
                  {room.insight}
                </p>
                {/* Tag mobile */}
                <span className="lg:hidden text-[9px] uppercase tracking-[0.12em] text-accent font-medium mt-1">
                  {room.tag}
                </span>
              </div>

              {/* Tag desktop + flèche */}
              <div className="hidden lg:flex flex-col items-end gap-3 shrink-0 ml-6">
                <span className="text-[9px] uppercase tracking-[0.14em] text-accent font-medium whitespace-nowrap">
                  {room.tag}
                </span>
                <span
                  className="text-ink-dim group-hover:text-accent text-sm transition-[color,transform] duration-150 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ③ Pourquoi les priorités changent ──────────────── */}
      <section id="comprendre" className="bg-light py-16 lg:py-20">
        <div className="site-container">
          <div className="mb-10 lg:mb-14">
            <SectionLabel variant="light">Pourquoi c'est différent</SectionLabel>
            <h2
              className="font-semibold text-ink leading-[1.08] mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Les enjeux ne sont pas les mêmes selon l'espace.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
            {/* Chambre = durée */}
            <div className="bg-light p-8 lg:p-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent text-[11px]">01</span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-ink-muted font-medium">Chambre</span>
              </div>
              <p
                className="font-semibold text-ink leading-tight"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)", letterSpacing: "-0.02em" }}
              >
                La durée prime.
              </p>
              <p className="text-sm text-ink-muted leading-[1.65]">
                8 heures immobile, sans ventilation active. Même une concentration faible de polluants a un effet cumulé significatif sur la qualité du sommeil et la récupération sur le long terme.
              </p>
            </div>

            {/* Cuisine = intensité */}
            <div className="bg-light p-8 lg:p-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent text-[11px]">02</span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-ink-muted font-medium">Cuisine</span>
              </div>
              <p
                className="font-semibold text-ink leading-tight"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)", letterSpacing: "-0.02em" }}
              >
                Les pics comptent.
              </p>
              <p className="text-sm text-ink-muted leading-[1.65]">
                La cuisson au gaz crée des pics brutaux de NO₂, CO et PM2,5 qui peuvent se diffuser dans tout le logement en quelques minutes. L'enjeu n'est pas la concentration moyenne mais les pointes.
              </p>
            </div>

            {/* Salle de bain = humidité structurelle */}
            <div className="bg-light p-8 lg:p-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent text-[11px]">03</span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-ink-muted font-medium">Salle de bain</span>
              </div>
              <p
                className="font-semibold text-ink leading-tight"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)", letterSpacing: "-0.02em" }}
              >
                L'humidité migre.
              </p>
              <p className="text-sm text-ink-muted leading-[1.65]">
                L'humidité produite dans la salle de bain ne reste pas dans la pièce : elle se déplace vers les espaces plus froids. Un problème non traité ici devient une cause de moisissures ailleurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ④ Diagnostic : commencez par votre problème ─────── */}
      <section id="diagnostic" className="bg-dark py-16 lg:py-20 border-t border-line-inv">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Titre gauche */}
            <div className="lg:col-span-2">
              <SectionLabel variant="dark">Par où commencer</SectionLabel>
              <h2
                className="font-semibold text-ink-inv leading-[1.1] mt-4"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", letterSpacing: "-0.02em" }}
              >
                Commencez par la pièce qui vous pose problème.
              </h2>
              <p className="text-ink-dim text-sm leading-[1.65] mt-4 max-w-[36ch]">
                Chaque observation oriente vers un espace précis. Inutile de tout traiter en même temps.
              </p>
            </div>

            {/* Table diagnostic droite */}
            <div className="lg:col-span-3 border-t border-line-inv">
              {diagnostics.map((d, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-y-2 gap-x-8 border-b border-line-inv py-5 items-center"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-ink-dim mb-1">Vous observez</p>
                    <p className="text-sm font-medium text-ink-inv leading-snug">{d.symptom}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {d.rooms.map((room, ri) => (
                      <Link
                        key={ri}
                        href={d.hrefs[ri]}
                        className="group inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.1em] font-medium text-accent border border-accent/30 hover:border-accent hover:bg-accent/5 px-2.5 py-1.5 transition-[border-color,background-color] duration-150"
                      >
                        {room}
                        <span className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ⑤ Index des pages enfants ──────────────────────── */}
      <section id="pages" className="bg-light py-16 lg:py-20">
        <div className="site-container">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <SectionLabel variant="light">Explorer chaque espace</SectionLabel>
              <h2
                className="font-semibold text-ink leading-[1.08] mt-4"
                style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                Les guides par pièce
              </h2>
            </div>
            <p className="text-ink-muted text-sm leading-[1.65] max-w-[38ch] lg:text-right">
              Priorités, erreurs fréquentes et gestes efficaces pour chaque espace du logement.
            </p>
          </div>

          <div className="flex flex-col">
            {rooms.map((room) => (
              <Link
                key={room.href}
                href={room.href}
                className="group grid grid-cols-[3rem_1fr_auto] lg:grid-cols-[4rem_1fr_auto] gap-x-6 lg:gap-x-10 items-center border-t border-line py-6 last:border-b last:border-line hover:bg-white transition-colors duration-150 -mx-6 px-6 lg:-mx-10 lg:px-10"
              >
                <span className="font-mono text-accent text-[11px] shrink-0">
                  {room.number}
                </span>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink group-hover:text-accent transition-colors duration-150 leading-snug">
                    {room.name}
                  </span>
                  <span className="text-sm text-ink-muted leading-[1.6]">
                    {room.tag}
                  </span>
                </div>
                <span
                  className="text-ink-muted group-hover:text-accent text-sm transition-[color,transform] duration-150 group-hover:translate-x-1 shrink-0"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ⑥ FAQ ──────────────────────────────────────────── */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur la maison pièce par pièce"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes ──────────────────────────────── */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "Qualité de l'air dans tout le logement",
            description: "Les enjeux de chaque pièce s'inscrivent dans une stratégie globale de ventilation et de réduction des polluants.",
            href: "/air-interieur/",
          },
          {
            tag: "Humidité maison",
            title: "Humidité et pièces à risque",
            description: "Salle de bain, chambre, cuisine : l'humidité circule entre les pièces. Comprendre ses sources pour agir à la bonne échelle.",
            href: "/humidite-maison/",
          },
          {
            tag: "Maison saine famille",
            title: "Les pièces prioritaires pour les enfants",
            description: "Chambre de bébé, chambre d'enfant, espaces de jeu : les espaces à traiter en priorité quand on vit en famille.",
            href: "/maison-saine-famille/",
          },
        ]}
      />
    </>
  );
}
