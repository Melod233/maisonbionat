import type { Metadata } from "next";
import { getHomepageJsonLd, getFaqPageJsonLd } from "@/lib/seo/jsonld";
import { homepageFaq } from "@/data/faq";

import HomeHero from "@/components/homepage/HomeHero";
import HomeStartSection from "@/components/homepage/HomeStartSection";
import HomePillarsSection from "@/components/homepage/HomePillarsSection";
import HomeRoomsSection from "@/components/homepage/HomeRoomsSection";
import HomeProblemsSection from "@/components/homepage/HomeProblemsSection";
import HomeSituationsSection from "@/components/homepage/HomeSituationsSection";
import HomeExploreSection from "@/components/homepage/HomeExploreSection";
import HomeFaqSection from "@/components/homepage/HomeFaqSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Maison saine : air intérieur, matériaux, humidité & produits | Maisonbionat",
  },
  description:
    "Maisonbionat vous aide à rendre votre logement plus sain : air intérieur, matériaux, humidité, produits du quotidien et rénovation. Des conseils concrets, pièce par pièce.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/",
  },
  openGraph: {
    title: "La maison saine, concrètement. | Maisonbionat",
    description:
      "Des conseils concrets pour améliorer la qualité de votre logement : air, matériaux, humidité, produits et rénovation saine.",
    url: "https://www.maisonbionat.fr/",
    type: "website",
  },
};

export default function HomePage() {
  const siteJsonLd = getHomepageJsonLd();
  const faqJsonLd = getFaqPageJsonLd(homepageFaq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HomeHero />
      <HomeStartSection />
      <HomePillarsSection />
      <HomeRoomsSection />
      <HomeProblemsSection />
      <HomeSituationsSection />
      <HomeExploreSection />
      <HomeFaqSection />
    </>
  );
}
