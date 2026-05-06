import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroPillar from "@/components/pillar/HeroPillar";

export const metadata: Metadata = {
  title: "Avis et lectures pour habiter sainement",
  description:
    "Avis éditoriaux sur les livres et ressources qui aident à comprendre l'habitat sain, l'éco-construction, la rénovation écologique et la qualité de l'air intérieur. Une sélection lue, comparée et resituée.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/avis/",
  },
  openGraph: {
    title: "Avis et lectures pour habiter sainement",
    description:
      "Avis éditoriaux sur les livres et ressources qui aident à comprendre l'habitat sain, l'éco-construction, la rénovation écologique et la qualité de l'air intérieur.",
    url: "https://www.maisonbionat.fr/avis/",
  },
};

export default function AvisPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Avis", href: "/avis/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroPillar
        tag="Avis"
        title="Lectures et ressources pour habiter sainement."
        description="Une sélection d'ouvrages et de ressources lus, comparés et resitués dans leur contexte. L'objectif : aider à choisir ce qui mérite vraiment du temps quand on s'intéresse à l'habitat sain, à l'éco-construction et à la rénovation écologique."
        anchors={[{ id: "categories", label: "Par catégorie" }]}
      />

      <section id="categories" className="py-20 lg:py-28">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2
              className="font-semibold text-ink leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
            >
              Catégories d'avis
            </h2>
            <p className="mt-5 text-ink-dim text-[15px] leading-[1.7]">
              Les avis sont organisés par type de ressource. La section grandit progressivement,
              à mesure que de nouveaux ouvrages et outils sont lus et évalués.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/avis/livres/"
              className="group block rounded-2xl border border-line p-8 transition-colors duration-150 hover:border-accent"
            >
              <div className="text-[11px] uppercase tracking-[0.12em] text-ink-dim mb-4">
                Livres
              </div>
              <h3 className="text-[20px] font-semibold text-ink leading-[1.25]">
                Avis sur les livres d&apos;éco-construction et d&apos;habitat sain
              </h3>
              <p className="mt-3 text-[14px] text-ink-dim leading-[1.7]">
                Conception bioclimatique, architecture naturelle, matériaux,
                rénovation : ce que chaque ouvrage apporte vraiment et à qui il s&apos;adresse.
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-accent">
                Voir les avis livres
                <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
