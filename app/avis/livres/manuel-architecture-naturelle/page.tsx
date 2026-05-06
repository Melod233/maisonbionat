import type { Metadata } from "next";
import { getBreadcrumbJsonLd, getBookReviewJsonLd } from "@/lib/seo/jsonld";
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
  const reviewHref = `/avis/livres/${review.slug}/`;

  const breadcrumbItems = getReviewBreadcrumbs(
    review.categoryLabel,
    review.categoryHref,
    review.bookTitle,
    reviewHref
  );

  const breadcrumbJsonLd = getBreadcrumbJsonLd(breadcrumbItems);

  const bookReviewJsonLd = getBookReviewJsonLd({
    bookTitle: review.bookTitle,
    author: review.authors ?? review.author,
    publisher: review.publisher,
    isbn: review.isbn,
    globalRating: review.globalRating,
    reviewBody: review.verdictSummary,
    pageUrl: reviewHref,
  });

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

      <ReviewVerdict
        id="verdict"
        bookTitle={review.bookTitle}
        summary={review.verdictSummary}
        forWho={review.verdictForWho}
        whyWorthIt={review.verdictWhyWorthIt}
        keyTakeaway={review.verdictKeyTakeaway}
      />

      <ReviewContributions id="apports" contributions={review.contributions} />

      <ReviewStrengthsLimitations
        strengths={review.strengths}
        limitations={review.limitations}
      />

      <ReviewAudience
        id="pour-qui"
        bookTitle={review.bookTitle}
        audienceProfiles={review.audienceProfiles}
        whenToRead={review.audienceWhenToRead}
        projectStage={review.audienceProjectStage}
      />

      <ReviewDetails id="analyse" bookTitle={review.bookTitle} details={review.details} />

      <ReviewQuote id="note" editorialNote={review.editorialNote} />

      <ReviewRating
        globalRating={review.globalRating}
        ratingItems={review.ratingItems}
      />

      <PillarFaqSection
        id="faq"
        title={`Questions fréquentes sur ${review.bookTitle}`}
        items={review.faq}
      />

      <RelatedContent
        title="Aller plus loin sur ces sujets"
        items={review.relatedLinks}
      />
    </>
  );
}
