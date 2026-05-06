import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroPillar from "@/components/pillar/HeroPillar";
import {
  laConceptionBioclimatique,
  manuelArchitectureNaturelle,
  type Review,
} from "@/data/reviews";

export const metadata: Metadata = {
  title: "Avis sur les livres d'éco-construction et d'habitat sain",
  description:
    "Avis éditoriaux sur les livres de référence en éco-construction, architecture naturelle, conception bioclimatique et habitat sain. Pour chaque ouvrage : ce qu'il apporte, à qui il s'adresse, ses points forts et ses limites.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/avis/livres/",
  },
  openGraph: {
    title: "Avis sur les livres d'éco-construction et d'habitat sain",
    description:
      "Avis éditoriaux sur les livres de référence en éco-construction et habitat sain. Pour chaque ouvrage : ce qu'il apporte, à qui il s'adresse, ses limites.",
    url: "https://www.maisonbionat.fr/avis/livres/",
  },
};

const books: Review[] = [laConceptionBioclimatique, manuelArchitectureNaturelle];

export default function AvisLivresPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Avis", href: "/avis/" },
    { name: "Livres", href: "/avis/livres/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroPillar
        tag="Avis · Livres"
        title="Les livres qui aident à comprendre l'habitat sain."
        description="Pour chaque ouvrage, un avis éditorial complet : ce qu'il apporte, à qui il s'adresse, ses forces, ses limites et la place qu'il peut prendre dans une démarche de construction ou de rénovation écologique."
        parentLabel="Avis"
        parentHref="/avis/"
        anchors={[{ id: "selection", label: "Sélection" }]}
      />

      <section id="selection" className="py-20 lg:py-28">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2
              className="font-semibold text-ink leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
            >
              Notre sélection
            </h2>
            <p className="mt-5 text-ink-dim text-[15px] leading-[1.7]">
              Chaque livre listé ici a été lu, comparé à ses voisins et resitué dans son
              contexte. Aucun avis de complaisance. Les limites sont énoncées aussi clairement
              que les apports.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {books.map((book) => {
              const href = `/avis/livres/${book.slug}/`;
              return (
                <li key={book.slug}>
                  <Link
                    href={href}
                    className="group block rounded-2xl border border-line p-6 lg:p-8 transition-colors duration-150 hover:border-accent h-full"
                  >
                    <div className="flex gap-5 lg:gap-6 items-start">
                      {book.coverImage && (
                        <div className="relative w-[88px] lg:w-[110px] aspect-[2/3] shrink-0 overflow-hidden rounded-md bg-surface-2">
                          <Image
                            src={book.coverImage.src}
                            alt={book.coverImage.alt}
                            fill
                            sizes="(min-width: 1024px) 110px, 88px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-[0.12em] text-ink-dim">
                          {book.author}
                        </div>
                        <h3 className="mt-2 text-[18px] lg:text-[20px] font-semibold text-ink leading-[1.25]">
                          {book.bookTitle}
                        </h3>
                        <p className="mt-3 text-[13px] text-ink-dim leading-[1.65] line-clamp-4">
                          {book.verdictSummary}
                        </p>
                        <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-accent">
                          Lire l&apos;avis
                          <span
                            aria-hidden
                            className="transition-transform duration-150 group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
