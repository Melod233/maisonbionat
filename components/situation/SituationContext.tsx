import SectionLabel from "@/components/ui/SectionLabel";

export type SituationContextCard = {
  number: string;
  badge?: string;
  title: string;
  description: string;
};

type Props = {
  id?: string;
  sectionLabel?: string;
  title: string;
  description?: string;
  cards: SituationContextCard[];
};

export default function SituationContext({
  id,
  sectionLabel = "Ce qui compte ici",
  title,
  description,
  cards,
}: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* En-tête gauche */}
          <div className="lg:col-span-2">
            <SectionLabel variant="light">{sectionLabel}</SectionLabel>
            <h2
              className="font-semibold text-ink leading-[1.08] mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
            {description && (
              <p className="text-ink-muted text-sm leading-[1.65] mt-5 max-w-[38ch]">
                {description}
              </p>
            )}
          </div>

          {/* Cartes droite */}
          <div className="lg:col-span-3">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`py-7 border-t border-line ${i === cards.length - 1 ? "border-b border-line" : ""}`}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="font-mono text-accent leading-none shrink-0 pt-[3px]"
                    style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
                    aria-hidden
                  >
                    {card.number}
                  </span>
                  <div className="flex flex-col gap-2.5 flex-1">
                    {card.badge && (
                      <span className="text-[10px] uppercase tracking-[0.14em] font-medium text-ink-muted border border-line px-2 py-0.5 self-start">
                        {card.badge}
                      </span>
                    )}
                    <h3
                      className="font-semibold text-ink leading-snug"
                      style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-[1.65]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
