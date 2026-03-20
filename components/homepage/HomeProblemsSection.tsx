import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { problemEntries } from "@/data/homepage";

export default function HomeProblemsSection() {
  return (
    <section className="bg-dark py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="dark">Problèmes fréquents</SectionLabel>
            <h2
              className="font-semibold leading-[1.08] text-ink-inv mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Vous cherchez une solution{" "}
              <br className="hidden lg:block" />
              à un problème précis ?
            </h2>
          </div>
          <p className="text-ink-dim text-sm leading-[1.65] max-w-[38ch] lg:text-right">
            Accédez directement aux contenus qui correspondent à ce que vous
            rencontrez.
          </p>
        </div>

        {/* ── Liste ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-inv">
          {problemEntries.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="bg-dark hover:bg-dark-2 group flex items-center justify-between px-5 py-4 border-b border-line-inv transition-colors duration-150 border-l-2 border-l-transparent hover:border-l-accent"
            >
              <span className="text-sm text-ink-dim group-hover:text-ink-inv transition-[color,transform] duration-150 group-hover:translate-x-[2px]">
                {label}
              </span>
              <span
                className="text-ink-dim group-hover:text-accent text-sm transition-[color,transform] duration-150 group-hover:translate-x-1 shrink-0 ml-4"
                aria-hidden
              >
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
