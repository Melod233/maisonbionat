import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export type RoomStat = {
  value: string;
  label: string;
};

type Props = {
  room: string;
  title: string;
  description: string;
  stats: RoomStat[];
};

export default function HeroRoom({ room, title, description, stats }: Props) {
  return (
    <section className="bg-dark pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="site-container">

        {/* Fil d'Ariane */}
        <Link
          href="/piece-par-piece/"
          className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-ink-dim hover:text-accent transition-colors duration-150 mb-10"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-150" aria-hidden>←</span>
          Pièce par pièce
        </Link>

        <SectionLabel variant="dark">{room}</SectionLabel>

        <h1
          className="font-semibold text-ink-inv leading-[1.05] mt-5 max-w-[26ch]"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>

        <p className="text-ink-dim text-base leading-[1.7] mt-5 max-w-[52ch]">
          {description}
        </p>

        {/* Bande de stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line-inv mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-dark-2 px-6 py-6 flex flex-col gap-1.5">
                <span
                  className="font-semibold text-ink-inv leading-none"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-ink-dim">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
