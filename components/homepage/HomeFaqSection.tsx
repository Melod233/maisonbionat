import SectionLabel from "@/components/ui/SectionLabel";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homepageFaq } from "@/data/faq";

export default function HomeFaqSection() {
  return (
    <section className="bg-dark py-16 lg:py-24 border-t border-line-inv">
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── Titre gauche ─ col 1-2 ──────────────── */}
          <div className="lg:col-span-2">
            <SectionLabel variant="dark">Questions fréquentes</SectionLabel>
            <h2
              className="font-semibold leading-[1.08] text-ink-inv mt-4"
              style={{ fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.02em" }}
            >
              Comprendre Maisonbionat{" "}
              <br className="hidden lg:block" />
              en quelques réponses
            </h2>
            <p className="text-ink-dim text-sm leading-[1.65] mt-6 max-w-[34ch]">
              Des réponses courtes sur ce que traite le site et comment
              l&apos;utiliser.
            </p>
          </div>

          {/* ── Accordéon droit ─ col 3-5 ───────────── */}
          <div className="lg:col-span-3 border-t border-line-inv">
            <FaqAccordion items={homepageFaq} />
          </div>

        </div>

      </div>
    </section>
  );
}
