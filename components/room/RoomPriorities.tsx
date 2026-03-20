import SectionLabel from "@/components/ui/SectionLabel";

export type RoomPriority = {
  number: string;
  action: string;
  description: string;
  impact: "critique" | "fort" | "moyen";
};

type Props = {
  id?: string;
  title?: string;
  priorities: RoomPriority[];
};

const impactConfig = {
  critique: { label: "Critique", color: "text-accent border-accent/40 bg-accent/5" },
  fort: { label: "Fort impact", color: "text-ink-inv border-line-inv bg-dark-2" },
  moyen: { label: "Impact moyen", color: "text-ink-dim border-line-inv bg-transparent" },
};

export default function RoomPriorities({
  id,
  title = "Les priorités de cette pièce",
  priorities,
}: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="light">Priorités</SectionLabel>
            <h2
              className="font-semibold text-ink leading-[1.08] mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
          </div>
          <p className="text-ink-muted text-sm leading-[1.65] max-w-[38ch] lg:text-right">
            Dans l'ordre d'impact. Commencez par les actions critiques.
          </p>
        </div>

        <div className="flex flex-col">
          {priorities.map((p) => {
            const cfg = impactConfig[p.impact];
            return (
              <div
                key={p.number}
                className="grid grid-cols-[3rem_1fr] lg:grid-cols-[4rem_1fr_auto] gap-x-6 lg:gap-x-10 items-start border-t border-line py-7 last:border-b last:border-line"
              >
                {/* Numéro */}
                <span
                  className="font-mono text-accent leading-none pt-[3px]"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                  aria-hidden
                >
                  {p.number}
                </span>

                {/* Contenu */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-ink leading-snug">
                    {p.action}
                  </h3>
                  <p className="text-sm text-ink-muted leading-[1.65] max-w-[60ch]">
                    {p.description}
                  </p>
                </div>

                {/* Badge impact */}
                <div className="col-start-2 lg:col-start-3 mt-3 lg:mt-0 lg:self-start">
                  <span
                    className={`inline-block text-[10px] uppercase tracking-[0.14em] font-medium px-2.5 py-1 border ${cfg.color}`}
                  >
                    {cfg.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
