"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/* ── Constants ────────────────────────────────────────────── */
const COLS = 80;
const ROWS = 40;
// Jeu de caractères allégé — signes fins, peu de masse visuelle
const CHARS = "abcdefghijklmnopqrstuvwxyz.,:-|/\\+';`";

// Palette RGB
const RGB_ORANGE:        [number, number, number] = [240, 80,  10 ];
const RGB_WHITE:         [number, number, number] = [248, 243, 235];
const RGB_DARK:          [number, number, number] = [6,   1,   0  ];
const RGB_BRIGHT_ORANGE: [number, number, number] = [255, 90,  0  ];

const COLOR_PAIRS: [[number,number,number],[number,number,number]][] = [
  [RGB_DARK,          RGB_ORANGE ], // 0 : sombre → orange
  [RGB_ORANGE,        RGB_WHITE  ], // 1 : orange → blanc chaud
  [RGB_DARK,          RGB_WHITE  ], // 2 : sombre → blanc chaud
  [RGB_BRIGHT_ORANGE, RGB_WHITE  ], // 3 : accent — orange vif → blanc
];

/* ── Hash ─────────────────────────────────────────────────── */
function hash(c: number, r: number, s = 0): number {
  let n = (c * 374761393 + r * 1013904223 + s * 2654435761) >>> 0;
  n = ((n ^ (n >>> 16)) * 0x45d9f3b) >>> 0;
  n = ((n ^ (n >>> 16)) * 0x45d9f3b) >>> 0;
  return ((n ^ (n >>> 16)) >>> 0) / 0xffffffff;
}

/* ── Géométrie du M ───────────────────────────────────────── */
// Rapport largeur/hauteur d'une cellule monospace (approx)
const CA = 0.52;

// Points clés — M large pleine largeur, légèrement asymétrique pour éviter la rigidité
// Jambe gauche  : colonne 4,  de r=3 à r=38
// Jambe droite  : colonne 76, de r=4 à r=38 (décalée d'une ligne, brisure subtile)
// Vallée centrale : c=40, r=22 (utilisée pour la géométrie diagonale uniquement)
const LT_C = 4,  LT_R = 3;   // sommet jambe gauche
const LB_C = 4,  LB_R = 38;  // base jambe gauche
const V_C  = 40, V_R  = 22;  // vallée centrale
const RT_C = 76, RT_R = 4;   // sommet jambe droite — asymétrie intentionnelle
const RB_C = 76, RB_R = 38;  // base jambe droite

const STROKE_HW = 1.5;  // demi-épaisseur affinée — silhouette plus légère
const EDGE_T    = 0.82; // zone bord élargie — forme plus "tracée" que "remplie"

// Distance d'un point (pc,pr) à un segment (ac,ar)→(bc,br) — espace écran
function segDist(
  pc: number, pr: number,
  ac: number, ar: number,
  bc: number, br: number,
): number {
  const dx = (bc - ac) * CA, dy = br - ar;
  const pdx = (pc - ac) * CA, pdy = pr - ar;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return Math.hypot(pdx, pdy);
  const t = Math.max(0, Math.min(1, (pdx * dx + pdy * dy) / len2));
  return Math.hypot(pdx - t * dx, pdy - t * dy);
}

/* ── Zones ────────────────────────────────────────────────── */
type Zone = "out" | "edge" | "fill";

function getZone(c: number, r: number): Zone {
  // Distance minimale aux quatre segments du M
  const d = Math.min(
    segDist(c, r, LT_C, LT_R, LB_C, LB_R), // jambe gauche
    segDist(c, r, LT_C, LT_R, V_C,  V_R ),  // diagonale gauche
    segDist(c, r, V_C,  V_R,  RT_C, RT_R),  // diagonale droite
    segDist(c, r, RT_C, RT_R, RB_C, RB_R),  // jambe droite
  );

  if (d >= STROKE_HW) return "out";
  return d < STROKE_HW - EDGE_T ? "fill" : "edge";
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

    if (z === "edge") {
      // Contour — variation atmosphérique large, quelques cellules absentes pour respiration
      if (h[0] < 0.09) continue;
      baseOp       = 0.38 + h[1] * 0.52;
      opAmp        = 0.10 + h[2] * 0.22;  // pulsation bien plus marquée
      charInterval = h[3] < 0.35 ? 0 : 0.3 + h[3] * 1.6; // changement rapide : 0.3–2.0 s
      colorMode    = (h[8] < 0.45 ? 0 : h[8] < 0.78 ? 1 : 2) as 0 | 1 | 2;
    } else {
      // fill — fondu dans le noir, juste quelques traces
      if (h[0] < 0.86) continue;
      baseOp       = 0.03 + h[1] * 0.07;
      opAmp        = 0.02 + h[2] * 0.05;
      charInterval = h[3] < 0.25 ? 0 : 0.2 + h[3] * 1.0; // très rapide : 0.2–1.2 s
      colorMode    = (h[8] < 0.65 ? 0 : 1) as 0 | 1;
    }

    const wave    = (c / COLS) * Math.PI * 2.3 + (r / ROWS) * Math.PI * 1.7;
    // Vitesses d'oscillation — bien plus vives
    const opSpeed = 1.2 + h[5] * 4.0;  // 1.2–5.2 rad/s : animation franche

    CELL_ANIMS[fi] = {
      initChar:     CHARS[charIdx],
      charIdx,
      baseOp,
      opPhase:      wave + h[4] * Math.PI * 2,
      opSpeed,
      opAmp,
      colorPhase:   wave * 0.6 + h[6] * Math.PI * 2,
      colorSpeed:   0.7 + h[7] * 2.5,  // transitions chromatiques rapides : 0.7–3.2 rad/s
      colorMode,
      charInterval,
      charPhase:    h[9] * 60,
    };
    CELL_CHARS[fi] = CHARS[charIdx];
  }
}

/* ── Constantes build animation ───────────────────────────── */
const BUILD_DURATION = 1.2;  // secondes pour toutes les lignes
const BUILD_DELAY    = 0.05; // délai avant départ
const FADEIN_DUR     = 0.45; // durée du fondu d'apparition par ligne

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

        // ── Fondu d'apparition au moment du reveal ───────────
        const fadeT = bElapsed - revealAt;
        let op: number;
        if (fadeT < FADEIN_DUR) {
          const p = fadeT / FADEIN_DUR;
          const smooth = p * p * (3 - 2 * p); // smoothstep
          op = normalOp * smooth;
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
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">

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
                lineHeight: "1.22",
                letterSpacing: "0.05em",
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
