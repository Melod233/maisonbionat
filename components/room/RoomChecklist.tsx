import SectionLabel from "@/components/ui/SectionLabel";

export type CheckItem = {
  label: string;
  detail?: string;
  frequency: "quotidien" | "hebdo" | "mensuel" | "ponctuel";
};

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  items: CheckItem[];
};

const freqConfig = {
  quotidien: { label: "Quotidien", color: "text-accent border-accent/30" },
  hebdo: { label: "Hebdo", color: "text-ink-inv border-line-inv" },
  mensuel: { label: "Mensuel", color: "text-ink-dim border-line-inv" },
  ponctuel: { label: "Ponctuel", color: "text-ink-dim border-line-inv" },
};

export default function RoomChecklist({
  id,
  title = "Ce qu'il faut vérifier",
  subtitle,
  items,
}: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-20 border-t border-line-inv">
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 mb-10 lg:mb-0">

          {/* En-tête gauche */}
          <div className="lg:col-span-2">
            <SectionLabel variant="dark">Vérifications</SectionLabel>
            <h2
              className="font-semibold text-ink-inv leading-[1.1] mt-4"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-ink-dim text-sm leading-[1.65] mt-4 max-w-[36ch]">
                {subtitle}
              </p>
            )}
            {/* Légende fréquences */}
            <div className="flex flex-col gap-2 mt-8">
              {(["quotidien", "hebdo", "mensuel", "ponctuel"] as const).map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className={`text-[9px] uppercase tracking-[0.14em] font-medium px-2 py-0.5 border ${freqConfig[f].color}`}>
                    {freqConfig[f].label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Liste des vérifications droite */}
          <div className="lg:col-span-3 border-t border-line-inv">
            {items.map((item, i) => {
              const cfg = freqConfig[item.frequency];
              return (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_auto] gap-4 items-start border-b border-line-inv py-4"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-ink-inv leading-snug">
                      {item.label}
                    </p>
                    {item.detail && (
                      <p className="text-[13px] text-ink-dim leading-[1.6]">
                        {item.detail}
                      </p>
                    )}
                  </div>
                  <span className={`text-[9px] uppercase tracking-[0.14em] font-medium px-2 py-1 border shrink-0 ${cfg.color}`}>
                    {cfg.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
