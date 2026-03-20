import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maisonbionat.fr"),
  title: {
    template: "%s | Maisonbionat",
    default: "Maisonbionat : maison saine et naturelle pour la famille",
  },
  description:
    "Maisonbionat vous aide à rendre votre logement plus sain : air intérieur, matériaux, humidité, produits du quotidien et rénovation. Des conseils concrets, pièce par pièce.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Maisonbionat",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:text-sm focus:font-medium focus:px-4 focus:py-2 focus:outline-none"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
