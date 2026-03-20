import SectionLabel from "@/components/ui/SectionLabel";

export type ImpactFactor = {
  rank: string;
  factor: string;
  statement: string;
  detail: string;
  weight: "élevé" | "modéré" | "faible";
};

type Props = {
  id?: string;
  title?: string;
  factors: ImpactFactor[];
};

const weightConfig = {
  élevé: { bar: "w-full", color: "bg-accent" },
  modéré: { bar: "w-2/3", color: "bg-ink-dim" },
  faible: { bar: "w-1/3", color: "bg-line-inv" },
};

export default function RoomImpact({
  id,
  title = "Ce qui pèse le plus sur la qualité de cet espace",
  factors,
}: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">

        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="light">Impact</SectionLabel>
          <h2
            className="font-semibold text-ink leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
          {factors.map((f) => {
            const cfg = weightConfig[f.weight];
            return (
              <div key={f.rank} className="bg-light p-8 lg:p-10 flex flex-col gap-5">

                {/* Rang + poids */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-accent text-[11px]">{f.rank}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-[2px] bg-line overflow-hidden">
                      <div className={`h-full ${cfg.bar} ${cfg.color}`} />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.12em] text-ink-muted font-medium">
                      {f.weight}
                    </span>
                  </div>
                </div>

                {/* Facteur */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-ink-muted font-medium mb-2">
                    {f.factor}
                  </p>
                  <p
                    className="font-semibold text-ink leading-tight"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.01em" }}
                  >
                    {f.statement}
                  </p>
                </div>

                <p className="text-sm text-ink-muted leading-[1.65] flex-1">
                  {f.detail}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
