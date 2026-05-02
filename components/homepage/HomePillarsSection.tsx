import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { silos } from "@/data/silos";

export default function HomePillarsSection() {
  return (
    <section id="tous-les-sujets" className="bg-dark py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="dark">Les grands sujets</SectionLabel>
            <h2
              className="font-semibold leading-[1.08] text-ink-inv mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Neuf domaines pour agir{" "}
              <br className="hidden lg:block" />
              concrètement
            </h2>
          </div>
          <p className="text-ink-dim text-sm leading-[1.65] max-w-[40ch] lg:text-right">
            Des angles distincts pour explorer l&apos;habitat sain selon vos
            besoins et votre situation.
          </p>
        </div>

        {/* ── Liste des silos ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line-inv">
          {silos.map((silo, i) => (
            <Link
              key={silo.href}
              href={silo.href}
              className="bg-dark hover:bg-dark-2 group flex flex-col gap-4 px-6 pt-6 pb-8 transition-colors duration-150 border-l-2 border-transparent hover:border-accent"
            >
              <div className="flex items-center gap-3 border-t border-line-inv pt-5">
                <span className="text-accent text-[11px] font-mono shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-inv text-[11px] tracking-widest uppercase">
                  {silo.label}
                </span>
              </div>

              <p className="text-ink-dim text-sm leading-[1.65]">
                {silo.fullDescription}
              </p>

              <span className="text-[12px] text-ink-dim group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-[3px] mt-1">
                Explorer →
              </span>
            </Link>
          ))}
          {silos.length % 2 !== 0 && <div className="bg-dark hidden lg:block" />}
        </div>

      </div>
    </section>
  );
}
