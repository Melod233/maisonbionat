import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { getStaticPageBreadcrumbs } from "@/lib/seo/breadcrumbs";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const BASE_URL = "https://www.maisonbionat.fr";
const PAGE_URL = `${BASE_URL}/mentions-legales/`;

const TITLE = "Mentions légales";
const DESCRIPTION =
  "Mentions légales du site Maisonbionat : éditeur, hébergement, propriété intellectuelle, responsabilité, données personnelles et droit applicable.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
};

/**
 * Bloc de section légale : titre + contenu, rythme vertical homogène.
 */
function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-9 first:border-t-0 first:pt-0">
      <h2
        className="font-semibold text-ink leading-[1.15]"
        style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)", letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-ink-muted text-[15px] leading-[1.75]">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  const breadcrumbs = getStaticPageBreadcrumbs("Mentions légales", "/mentions-legales/");

  return (
    <>
      {/* ── JSON-LD ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-dark pt-14 pb-0 lg:pt-20">
        <div className="site-container">
          <Breadcrumbs items={breadcrumbs} variant="dark" />

          <div className="mb-8 lg:mb-10">
            <SectionLabel variant="dark">Informations légales</SectionLabel>
          </div>

          <h1
            className="font-semibold text-ink-inv leading-[1.05]"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5.25rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Mentions légales
          </h1>

          <div className="border-t border-line-inv mt-10 pt-9 pb-16 lg:pb-20">
            <p className="text-ink-dim text-base leading-[1.7] max-w-[52ch]">
              Les informations légales relatives au site Maisonbionat, à son
              éditeur et à l&apos;usage de son contenu.
            </p>
          </div>
        </div>
      </section>

      {/* ── Corps ────────────────────────────────────────── */}
      <section className="bg-light py-16 lg:py-20">
        <div className="site-container">
          <div className="max-w-[68ch] space-y-9">

            <LegalSection title="Éditeur du site">
              <p>
                Le site maisonbionat.fr est édité par Melod, entreprise
                individuelle immatriculée sous le numéro SIRET 509&nbsp;708&nbsp;798&nbsp;00038.
              </p>
              <p>Directeur de la publication : Philippe Jenft.</p>
              <p>
                Contact :{" "}
                <a href="mailto:contact@melod.fr">contact@melod.fr</a>
              </p>
            </LegalSection>

            <LegalSection title="Hébergement">
              <p>
                Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, États-Unis. Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur le site maisonbionat.fr,
                incluant de manière non exhaustive les textes, images, graphismes,
                logos et illustrations, sont la propriété exclusive de
                l&apos;entreprise Melod, sauf mention contraire. Toute reproduction,
                représentation, modification ou exploitation, totale ou partielle,
                sans autorisation écrite préalable, est interdite et constitue une
                contrefaçon.
              </p>
            </LegalSection>

            <LegalSection title="Responsabilité">
              <p>
                Maisonbionat publie des informations et des conseils pratiques sur
                la maison saine, naturelle et écologique, à titre indicatif et sans
                garantie d&apos;exactitude, d&apos;exhaustivité ou de mise à jour
                permanente. Les contenus reposent sur des sources que nous
                considérons comme fiables au moment de leur rédaction, mais les
                normes, recommandations et données techniques peuvent évoluer.
              </p>
              <p>
                Ces contenus ne constituent pas un avis médical, juridique ou
                professionnel. Ils ne remplacent pas l&apos;intervention d&apos;un
                professionnel qualifié (médecin, artisan, diagnostiqueur, bureau
                d&apos;études) pour évaluer une situation particulière. Toute
                décision ou intervention prise à partir des informations du site
                relève de la seule responsabilité du lecteur. L&apos;éditeur ne
                saurait être tenu responsable des dommages directs ou indirects liés
                à l&apos;utilisation du site ou des contenus qui y sont diffusés.
              </p>
            </LegalSection>

            <LegalSection title="Données personnelles">
              <p>
                Conformément au Règlement général sur la protection des données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
                droit d&apos;accès, de rectification, d&apos;opposition et de
                suppression des données vous concernant. Pour exercer ces droits,
                adressez votre demande à{" "}
                <a href="mailto:contact@melod.fr">contact@melod.fr</a>.
              </p>
              <p>
                Le site ne propose pas de formulaire de collecte de données
                personnelles (inscription, newsletter ou compte utilisateur). Les
                éventuelles données de mesure d&apos;audience sont traitées de
                manière agrégée et ne sont jamais cédées à des tiers.
              </p>
            </LegalSection>

            <LegalSection title="Liens externes">
              <p>
                Le site peut contenir des liens vers des sites tiers. Maisonbionat
                n&apos;exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu, leur disponibilité ou leurs
                pratiques en matière de protection des données.
              </p>
            </LegalSection>

            <LegalSection title="Droit applicable">
              <p>
                Tout litige en relation avec l&apos;utilisation du site
                maisonbionat.fr est soumis au droit français. À défaut de résolution
                amiable, les tribunaux français seront seuls compétents.
              </p>
            </LegalSection>

          </div>

          {/* ── Retour ─────────────────────────────────────── */}
          <div className="max-w-[68ch] mt-14 pt-9 border-t border-line">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:text-accent transition-colors duration-150"
            >
              <span
                aria-hidden="true"
                className="text-accent transition-transform duration-150 group-hover:-translate-x-0.5"
              >
                ←
              </span>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
