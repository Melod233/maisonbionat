"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/* ── Constants ────────────────────────────────────────────── */
const COLS = 60;
const ROWS = 40;
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEF/\\|+=-.,:";

// Palette RGB — mode 3 est plus lumineux pour les contours accentués
const RGB_ORANGE:        [number, number, number] = [240, 80,  10 ];
const RGB_WHITE:         [number, number, number] = [248, 243, 235];
const RGB_DARK:          [number, number, number] = [26,  5,   0  ];
const RGB_BRIGHT_ORANGE: [number, number, number] = [255, 90,  0  ];

const COLOR_PAIRS: [[number,number,number],[number,number,number]][] = [
  [RGB_DARK,          RGB_ORANGE ], // 0 : sombre → orange
  [RGB_ORANGE,        RGB_WHITE  ], // 1 : orange → blanc chaud
  [RGB_DARK,          RGB_WHITE  ], // 2 : sombre → blanc chaud
  [RGB_BRIGHT_ORANGE, RGB_WHITE  ], // 3 : highlight — orange vif → blanc
];

/* ── Hash ─────────────────────────────────────────────────── */
function hash(c: number, r: number, s = 0): number {
  let n = (c * 374761393 + r * 1013904223 + s * 2654435761) >>> 0;
  n = ((n ^ (n >>> 16)) * 0x45d9f3b) >>> 0;
  n = ((n ^ (n >>> 16)) * 0x45d9f3b) >>> 0;
  return ((n ^ (n >>> 16)) >>> 0) / 0xffffffff;
}

/* ── Zones ────────────────────────────────────────────────── */
// chimney-edge / window-edge / door-edge = contours accentués
type Zone =
  | "out"
  | "chimney-edge" | "chimney-fill"
  | "edge"         | "fill"
  | "window-edge"  | "window-void"
  | "door-edge"    | "door-void";

function getZone(c: number, r: number): Zone {
  const x = c / (COLS - 1);
  const y = r / (ROWS - 1);

  // Cheminée
  if (x >= 0.57 && x <= 0.66 && y >= 0.03 && y <= 0.30) {
    return x <= 0.59 || x >= 0.64 || y <= 0.05 ? "chimney-edge" : "chimney-fill";
  }

  // Toit (triangle)
  if (y >= 0.09 && y <= 0.38) {
    const t  = (y - 0.09) / 0.29;
    const lx = 0.5 - t * 0.44;
    const rx = 0.5 + t * 0.44;
    if (x >= lx && x <= rx) {
      return x - lx < 0.022 || rx - x < 0.022 || y - 0.09 < 0.022 ? "edge" : "fill";
    }
  }

  // Corps
  if (x >= 0.06 && x <= 0.94 && y >= 0.38 && y <= 0.97) {
    // Fenêtre gauche
    if (x >= 0.10 && x <= 0.32 && y >= 0.48 && y <= 0.67) {
      if (Math.abs(y - 0.575) < 0.016 || Math.abs(x - 0.21) < 0.012) return "window-edge";
      return x <= 0.12 || x >= 0.30 || y <= 0.50 || y >= 0.65 ? "window-edge" : "window-void";
    }
    // Fenêtre droite
    if (x >= 0.68 && x <= 0.90 && y >= 0.48 && y <= 0.67) {
      if (Math.abs(y - 0.575) < 0.016 || Math.abs(x - 0.79) < 0.012) return "window-edge";
      return x <= 0.70 || x >= 0.88 || y <= 0.50 || y >= 0.65 ? "window-edge" : "window-void";
    }
    // Porte
    if (x >= 0.42 && x <= 0.58 && y >= 0.71 && y <= 0.97) {
      if (Math.abs(x - 0.545) < 0.010 && Math.abs(y - 0.845) < 0.012) return "door-edge";
      return x <= 0.44 || x >= 0.56 || y <= 0.73 ? "door-edge" : "door-void";
    }
    return x <= 0.08 || x >= 0.92 || y >= 0.95 ? "edge" : "fill";
  }

  return "out";
}

/* ── Paramètres d'animation par cellule ───────────────────── */
interface CellAnim {
  initChar:     string;
  charIdx:      number;
  baseOp:       number;
  opPhase:      number;
  opSpeed:      number;
  opAmp:        number;
  colorPhase:   number;
  colorSpeed:   number;
  colorMode:    0 | 1 | 2 | 3;
  charInterval: number;
  charPhase:    number;
}

/* ── Construction (module-level, calculé une seule fois) ───── */
const CELL_ANIMS: (CellAnim | null)[] = new Array(ROWS * COLS).fill(null);
const CELL_CHARS: string[]            = new Array(ROWS * COLS).fill(" ");

for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const fi = r * COLS + c;
    const z  = getZone(c, r);
    if (z === "out") continue;

    const h       = Array.from({ length: 10 }, (_, i) => hash(c, r, i + 1));
    const charIdx = Math.floor(h[0] * CHARS.length);

    let baseOp: number, opAmp: number, charInterval: number;
    let colorMode: 0 | 1 | 2 | 3;

    if (z === "chimney-edge" || z === "window-edge" || z === "door-edge") {
      // Contours accentués — très lumineux, stables
      baseOp       = 0.88 + h[1] * 0.12;
      opAmp        = 0.02 + h[2] * 0.06;
      charInterval = h[3] < 0.78 ? 0 : 8 + h[3] * 12;
      colorMode    = 3;
    } else if (z === "chimney-fill") {
      if (h[0] < 0.22) continue;
      baseOp       = 0.22 + h[1] * 0.35;
      opAmp        = 0.04 + h[2] * 0.20;
      charInterval = h[3] < 0.35 ? 0 : 1.5 + h[3] * 5;
      colorMode    = (h[8] < 0.50 ? 0 : 1) as 0 | 1;
    } else if (z === "edge") {
      baseOp       = 0.72 + h[1] * 0.28;
      opAmp        = 0.04 + h[2] * 0.14;
      charInterval = h[3] < 0.65 ? 0 : 5 + h[3] * 12;
      colorMode    = (h[8] < 0.45 ? 0 : h[8] < 0.78 ? 1 : 2) as 0 | 1 | 2;
    } else if (z === "fill") {
      if (h[0] < 0.28) continue;
      baseOp       = 0.14 + h[1] * 0.28;
      opAmp        = 0.05 + h[2] * 0.24;
      charInterval = h[3] < 0.38 ? 0 : 1.5 + h[3] * 5.5;
      colorMode    = (h[8] < 0.45 ? 0 : h[8] < 0.78 ? 1 : 2) as 0 | 1 | 2;
    } else if (z === "window-void") {
      // Vitres — reflet lumineux, légèrement visible
      if (h[0] < 0.62) continue;
      baseOp       = 0.09 + h[1] * 0.14;
      opAmp        = 0.02 + h[2] * 0.06;
      charInterval = 0;
      colorMode    = 3;
    } else {
      // door-void
      if (h[0] < 0.90) continue;
      baseOp       = 0.04 + h[1] * 0.07;
      opAmp        = 0.01 + h[2] * 0.03;
      charInterval = 0;
      colorMode    = (h[8] < 0.45 ? 0 : h[8] < 0.78 ? 1 : 2) as 0 | 1 | 2;
    }

    const wave    = (c / COLS) * Math.PI * 2.3 + (r / ROWS) * Math.PI * 1.7;
    const opSpeed = h[5] < 0.72
      ? 0.15 + h[5] * 1.04
      : 2.0  + (h[5] - 0.72) * 10.7;

    CELL_ANIMS[fi] = {
      initChar:     CHARS[charIdx],
      charIdx,
      baseOp,
      opPhase:      wave + h[4] * Math.PI * 2,
      opSpeed,
      opAmp,
      colorPhase:   wave * 0.6 + h[6] * Math.PI * 2,
      colorSpeed:   0.06 + h[7] * 0.5,
      colorMode,
      charInterval,
      charPhase:    h[9] * 60,
    };
    CELL_CHARS[fi] = CHARS[charIdx];
  }
}

/* ── Constantes build animation ───────────────────────────── */
const BUILD_DURATION = 1.5;  // secondes pour toutes les lignes
const BUILD_DELAY    = 0.05; // délai avant départ
const FLASH_DUR      = 0.32; // durée du flash par ligne

/* ── Quick links ─────────────────────────────────────────── */
const QUICK_LINKS = [
  { n: "01", label: "Air intérieur",   href: "/air-interieur/" },
  { n: "02", label: "Humidité",        href: "/humidite-maison/" },
  { n: "03", label: "Matériaux sains", href: "/materiaux-sains/" },
  { n: "04", label: "Produits",        href: "/produits-et-habitudes/" },
];

/* ── Composant ───────────────────────────────────────────── */
export default function HomeHero() {
  const spanRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const asciiRef   = useRef<HTMLDivElement>(null);
  const buildStart = useRef<number>(-1);
  const hasBuilt   = useRef<boolean>(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      // Affichage statique immédiat
      for (let i = 0; i < CELL_ANIMS.length; i++) {
        const cell = CELL_ANIMS[i];
        const el   = spanRefs.current[i];
        if (!cell || !el) continue;
        el.style.opacity = cell.baseOp.toFixed(3);
        const [from] = COLOR_PAIRS[cell.colorMode];
        el.style.color = `rgb(${from[0]},${from[1]},${from[2]})`;
      }
      return;
    }

    // Déclenche le build quand l'illustration entre dans le viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasBuilt.current) {
          hasBuilt.current  = true;
          buildStart.current = performance.now();
        }
      },
      { threshold: 0.1 }
    );
    if (asciiRef.current) observer.observe(asciiRef.current);

    const start    = performance.now();
    const charStep = new Array<number>(ROWS * COLS).fill(-Infinity);
    let   rafId:   number;

    function frame(now: number) {
      const t        = (now - start) / 1000;
      const bElapsed = buildStart.current >= 0
        ? (now - buildStart.current) / 1000
        : -1;

      for (let i = 0; i < CELL_ANIMS.length; i++) {
        const cell = CELL_ANIMS[i];
        if (!cell) continue;
        const el = spanRefs.current[i];
        if (!el) continue;

        const row      = Math.floor(i / COLS);
        const revealAt = BUILD_DELAY + (row / (ROWS - 1)) * BUILD_DURATION;

        // Cellule pas encore révélée
        if (bElapsed < 0 || bElapsed < revealAt) {
          if (el.style.opacity !== "0") el.style.opacity = "0";
          continue;
        }

        // ── Opacité oscillante ───────────────────────────────
        const opOsc    = Math.sin(t * cell.opSpeed + cell.opPhase);
        const normalOp = Math.max(0.02, Math.min(1, cell.baseOp + opOsc * cell.opAmp));

        // ── Flash au moment du reveal ────────────────────────
        const flashT = bElapsed - revealAt;
        let op: number;
        if (flashT < FLASH_DUR) {
          const flashCurve = Math.sin((flashT / FLASH_DUR) * Math.PI);
          op = Math.min(1, Math.max(normalOp, flashCurve * 1.4));
        } else {
          op = normalOp;
        }
        el.style.opacity = op.toFixed(3);

        // ── Couleur ──────────────────────────────────────────
        const cb = 0.5 + 0.5 * Math.sin(t * cell.colorSpeed + cell.colorPhase);
        const [from, to] = COLOR_PAIRS[cell.colorMode];
        const rr = (from[0] + (to[0] - from[0]) * cb) | 0;
        const rg = (from[1] + (to[1] - from[1]) * cb) | 0;
        const rb = (from[2] + (to[2] - from[2]) * cb) | 0;
        el.style.color = `rgb(${rr},${rg},${rb})`;

        // ── Changement de caractère ──────────────────────────
        if (cell.charInterval > 0) {
          const step = Math.floor(t / cell.charInterval + cell.charPhase);
          if (step !== charStep[i]) {
            charStep[i] = step;
            const ni = ((cell.charIdx + step * 7) % CHARS.length + CHARS.length) % CHARS.length;
            el.textContent = CHARS[ni];
          }
        }
      }

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-dark relative overflow-hidden pt-14 lg:pt-20 pb-12 lg:pb-24">
      <div className="site-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-6">

          {/* ── Contenu ── */}
          <div className="lg:w-1/2 max-w-[560px]">
            <p className="text-[11px] uppercase tracking-[0.15em] text-ink-dim mb-5">
              <span className="text-accent">//</span> Maison saine
            </p>
            <h1
              className="font-semibold leading-[1.05] text-ink-inv mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              La maison saine,
              <br />
              concrètement.
            </h1>
            <p className="text-ink-dim text-base leading-[1.7] max-w-[46ch] mb-10">
              Air, matériaux, humidité, produits du quotidien et rénovation :
              des ressources claires pour rendre votre habitat plus sain,
              progressivement et sans excès.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <Link
                href="#par-ou-commencer"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white text-sm font-medium px-5 py-3 transition-colors duration-150"
              >
                Par où commencer
                <span aria-hidden className="inline-block group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
              <Link
                href="#tous-les-sujets"
                className="text-sm text-ink-dim hover:text-ink-inv transition-colors duration-200"
              >
                Tous les sujets
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line-inv border-t border-line-inv">
              {QUICK_LINKS.map(({ n, label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-dark hover:bg-dark-2 flex items-center gap-3 px-4 py-[14px] group transition-colors duration-150"
                >
                  <span className="text-accent text-[10px] font-mono shrink-0">{n}</span>
                  <span className="text-ink-inv text-sm font-medium flex-1">{label}</span>
                  <span
                    className="text-ink-dim text-xs shrink-0 group-hover:text-accent transition-colors duration-150"
                    aria-hidden
                  >→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Illustration ASCII maison — desktop + mobile ── */}
          <div
            ref={asciiRef}
            aria-hidden="true"
            className="flex justify-center items-center lg:w-1/2 py-4 lg:py-0"
          >
            <div
              className="select-none overflow-hidden"
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
                fontSize: "clamp(5.5px, 1.45vw, 11px)",
                lineHeight: "1.18",
                letterSpacing: "0.03em",
                color: "#E84400",
              }}
            >
              {Array.from({ length: ROWS }, (_, r) => (
                <div key={r} style={{ whiteSpace: "pre" }}>
                  {Array.from({ length: COLS }, (_, c) => {
                    const fi   = r * COLS + c;
                    const cell = CELL_ANIMS[fi];
                    return cell ? (
                      <span
                        key={c}
                        ref={el => { spanRefs.current[fi] = el; }}
                        style={{ opacity: 0 }}
                      >
                        {cell.initChar}
                      </span>
                    ) : (
                      <span key={c}>{" "}</span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
