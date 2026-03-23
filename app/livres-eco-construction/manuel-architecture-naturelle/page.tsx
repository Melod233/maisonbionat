import type { Metadata } from "next";
import { getBreadcrumbJsonLd, getBookReviewJsonLd, getFaqPageJsonLd } from "@/lib/seo/jsonld";
import { getReviewBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { manuelArchitectureNaturelle as review } from "@/data/reviews";

import ReviewHero from "@/components/review/ReviewHero";
import ReviewVerdict from "@/components/review/ReviewVerdict";
import ReviewContributions from "@/components/review/ReviewContributions";
import ReviewStrengthsLimitations from "@/components/review/ReviewStrengthsLimitations";
import ReviewAudience from "@/components/review/ReviewAudience";
import ReviewDetails from "@/components/review/ReviewDetails";
import ReviewQuote from "@/components/review/ReviewQuote";
import ReviewRating from "@/components/review/ReviewRating";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: review.metaTitle,
  description: review.metaDescription,
  alternates: {
    canonical: review.canonicalUrl,
  },
  openGraph: {
    title: review.metaTitle,
    description: review.metaDescription,
    url: review.canonicalUrl,
    locale: "fr_FR",
    ...(review.coverImage
      ? { images: [{ url: `https://www.maisonbionat.fr${review.coverImage.src}` }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: review.metaTitle,
    description: review.metaDescription,
    ...(review.coverImage
      ? { images: [`https://www.maisonbionat.fr${review.coverImage.src}`] }
      : {}),
  },
};

export default function ManuelArchitectureNaturellePage() {
  const breadcrumbItems = getReviewBreadcrumbs(
    review.categoryLabel,
    review.categoryHref,
    review.bookTitle,
    `/livres-eco-construction/${review.slug}/`
  );

  const breadcrumbJsonLd = getBreadcrumbJsonLd(breadcrumbItems);

  const bookReviewJsonLd = getBookReviewJsonLd({
    bookTitle: review.bookTitle,
    author: review.authors ?? review.author,
    publisher: review.publisher,
    isbn: review.isbn,
    globalRating: review.globalRating,
    reviewBody: review.verdictSummary,
    pageUrl: `/livres-eco-construction/${review.slug}/`,
  });

  const faqJsonLd = getFaqPageJsonLd(review.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookReviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ① Hero éditorial */}
      <ReviewHero
        categoryLabel={review.categoryLabel}
        categoryHref={review.categoryHref}
        heroTitle={review.heroTitle}
        heroSubtitle={review.heroSubtitle}
        heroIntro={review.heroIntro}
        globalRating={review.globalRating}
        cartouches={review.cartouches}
        coverImage={review.coverImage}
        anchors={[
          { id: "verdict", label: "Verdict rapide" },
          { id: "apports", label: "Ce que le livre apporte" },
          { id: "pour-qui", label: "Pour qui" },
          { id: "analyse", label: "Dans le détail" },
          { id: "note", label: "Note éditoriale" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      {/* ② Verdict rapide */}
      <ReviewVerdict
        id="verdict"
        bookTitle={review.bookTitle}
        summary={review.verdictSummary}
        forWho={review.verdictForWho}
        whyWorthIt={review.verdictWhyWorthIt}
        keyTakeaway={review.verdictKeyTakeaway}
      />

      {/* ③ Ce que le livre apporte */}
      <ReviewContributions id="apports" contributions={review.contributions} />

      {/* ④ Points forts / Limites */}
      <ReviewStrengthsLimitations
        strengths={review.strengths}
        limitations={review.limitations}
      />

      {/* ⑤ Pour qui */}
      <ReviewAudience
        id="pour-qui"
        bookTitle={review.bookTitle}
        audienceProfiles={review.audienceProfiles}
        whenToRead={review.audienceWhenToRead}
        projectStage={review.audienceProjectStage}
      />

      {/* ⑥ Dans le détail */}
      <ReviewDetails id="analyse" bookTitle={review.bookTitle} details={review.details} />

      {/* ⑦ Note éditoriale */}
      <ReviewQuote id="note" editorialNote={review.editorialNote} />

      {/* ⑧ Notation */}
      <ReviewRating
        globalRating={review.globalRating}
        ratingItems={review.ratingItems}
      />

      {/* ⑨ FAQ */}
      <PillarFaqSection
        id="faq"
        title={`Questions fréquentes sur ${review.bookTitle}`}
        items={review.faq}
      />

      {/* ⑩ Contenus liés */}
      <RelatedContent
        title="Aller plus loin sur ces sujets"
        items={review.relatedLinks}
      />
    </>
  );
}
