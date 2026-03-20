import SectionLabel from "@/components/ui/SectionLabel";

export type IssueAction = {
  label: string;
  description: string;
  effort?: string;
};

type Props = {
  id?: string;
  title?: string;
  immediateLabel?: string;
  immediateSublabel?: string;
  structuralLabel?: string;
  structuralSublabel?: string;
  immediate: IssueAction[];
  structural: IssueAction[];
};

export default function IssueActions({
  id,
  title = "Que faire en priorité",
  immediateLabel = "Aujourd'hui",
  immediateSublabel = "Gratuit ou faible coût",
  structuralLabel = "Sur le long terme",
  structuralSublabel = "Investissement ou changement structurel",
  immediate,
  structural,
}: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-20">
      <div className="site-container">

        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="dark">Plan d'action</SectionLabel>
          <h2
            className="font-semibold text-ink-inv leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line-inv">

          {/* Actions immédiates */}
          <div className="bg-dark-2 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-accent border border-accent/30 px-2.5 py-1">
                {immediateLabel}
              </span>
              <span className="text-sm text-ink-dim">{immediateSublabel}</span>
            </div>
            <div className="flex flex-col gap-7">
              {immediate.map((action, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 border-l-2 border-line-inv pl-4"
                >
                  <p className="text-[13px] font-semibold text-ink-inv leading-snug">
                    {action.label}
                  </p>
                  <p className="text-[13px] text-ink-dim leading-[1.65]">{action.description}</p>
                  {action.effort && (
                    <span className="text-[10px] text-accent font-medium mt-0.5">{action.effort}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions structurelles */}
          <div className="bg-dark p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-ink-inv border border-line-inv px-2.5 py-1">
                {structuralLabel}
              </span>
              <span className="text-sm text-ink-dim">{structuralSublabel}</span>
            </div>
            <div className="flex flex-col gap-7">
              {structural.map((action, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 border-l-2 border-line-inv pl-4"
                >
                  <p className="text-[13px] font-semibold text-ink-inv leading-snug">
                    {action.label}
                  </p>
                  <p className="text-[13px] text-ink-dim leading-[1.65]">{action.description}</p>
                  {action.effort && (
                    <span className="text-[10px] text-ink-dim font-medium mt-0.5">{action.effort}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
