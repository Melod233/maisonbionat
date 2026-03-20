import SectionLabel from "@/components/ui/SectionLabel";

export type DeferItem = {
  label: string;
  detail: string;
};

type Props = {
  id?: string;
  sectionLabel?: string;
  title?: string;
  urgentLabel?: string;
  deferLabel?: string;
  urgent: DeferItem[];
  defer: DeferItem[];
};

export default function SituationDefer({
  id,
  sectionLabel = "Arbitrage",
  title = "Ce qui ne peut pas attendre, et ce qui peut.",
  urgentLabel = "Ne pas remettre",
  deferLabel = "Peut attendre",
  urgent,
  defer,
}: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">

        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="light">{sectionLabel}</SectionLabel>
          <h2
            className="font-semibold text-ink leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line">

          {/* Colonne urgente */}
          <div className="bg-dark p-8 lg:p-10">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-accent border border-accent/30 px-2.5 py-1">
                {urgentLabel}
              </span>
            </div>
            <div className="flex flex-col gap-7">
              {urgent.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 border-l-2 border-accent/40 pl-4"
                >
                  <p className="text-[13px] font-semibold text-ink-inv leading-snug">
                    {item.label}
                  </p>
                  <p className="text-[13px] text-ink-dim leading-[1.65]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne différable */}
          <div className="bg-light p-8 lg:p-10">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-ink-muted border border-line px-2.5 py-1">
                {deferLabel}
              </span>
            </div>
            <div className="flex flex-col gap-7">
              {defer.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 border-l-2 border-line pl-4"
                >
                  <p className="text-[13px] font-semibold text-ink leading-snug">
                    {item.label}
                  </p>
                  <p className="text-[13px] text-ink-muted leading-[1.65]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
