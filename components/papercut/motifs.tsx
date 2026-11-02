// Wycinanka motifs. Every motif is drawn whole and mirror-symmetric about x = 0,
// so <Fold> can show its left half fixed and fold the right half over it.
// Cuts are drawn as black strokes/fills inside an SVG mask: real holes,
// so paper shadows fall through them.

import type { ReactNode } from "react";

export const RUBY = "#E30613";
export const RUBY_DEEP = "#9E0A16";

export type Motif = {
  /** viewBox width and height; the motif is centred on (0, 0). */
  w: number;
  h: number;
  /** Renders the art; `id` must prefix every id so two halves never collide. */
  art: (id: string) => ReactNode;
};

const around = (n: number, offset = 0) =>
  Array.from({ length: n }, (_, i) => (360 / n) * i + offset);

// Glyph cuts, all symmetric pairs about their own vertical axis.
type Glyph = "braces" | "angles" | "brackets";

function glyphPair(kind: Glyph, size: number, stroke: number) {
  const s = size / 2;
  const right =
    kind === "braces"
      ? `M0,${-s} C${s * 0.34},${-s} ${s * 0.34},${-s * 0.7} ${s * 0.34},${-s * 0.36} C${s * 0.34},${-s * 0.1} ${s * 0.42},0 ${s * 0.6},0 C${s * 0.42},0 ${s * 0.34},${s * 0.1} ${s * 0.34},${s * 0.36} C${s * 0.34},${s * 0.7} ${s * 0.34},${s} 0,${s}`
      : kind === "angles"
        ? `M0,${-s * 0.62} L${s * 0.5},0 L0,${s * 0.62}`
        : `M0,${-s} L${s * 0.32},${-s} L${s * 0.32},${s} L0,${s}`;
  const gap = size * 0.42;
  return (
    <g fill="none" stroke="#000" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d={right} transform={`translate(${gap},0)`} />
      <path d={right} transform={`translate(${-gap},0) scale(-1,1)`} />
    </g>
  );
}

const petal = (inner: number, outer: number, width: number) => {
  const a = inner + (outer - inner) * 0.3;
  const b = inner + (outer - inner) * 0.78;
  return `M0,${-inner} C${width},${-a} ${width * 0.9},${-b} 0,${-outer} C${-width * 0.9},${-b} ${-width},${-a} 0,${-inner}Z`;
};

type RosetteOpts = {
  petals: number;
  disc: number;
  petalOuter: number;
  petalWidth: number;
  glyph: Glyph;
  cutStroke?: number;
};

export function rosette(o: RosetteOpts): Motif {
  const n = o.petals;
  const half = 360 / n / 2;
  const ring = o.disc * 1.32;
  const cut = o.cutStroke ?? o.disc * 0.08;
  const size = (o.petalOuter + 20) * 2;

  return {
    w: size,
    h: size,
    art: (id) => (
      <>
        <defs>
          <mask id={`${id}-top`} maskUnits="userSpaceOnUse" x={-size / 2} y={-size / 2} width={size} height={size}>
            <rect x={-size / 2} y={-size / 2} width={size} height={size} fill="#fff" />
            {glyphPair(o.glyph, o.disc * 0.9, cut)}
            {around(n).map((r) => (
              <g key={`t${r}`} transform={`rotate(${r})`}>
                {/* outward chevron and slit inside each large petal */}
                <path
                  d={`M${-o.petalWidth * 0.36},${-o.petalOuter * 0.66} L0,${-o.petalOuter * 0.76} L${o.petalWidth * 0.36},${-o.petalOuter * 0.66}`}
                  fill="none"
                  stroke="#000"
                  strokeWidth={cut * 0.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d={petal(ring + o.disc * 0.12, o.petalOuter * 0.58, o.petalWidth * 0.2)} fill="#000" />
                <circle cy={-o.petalOuter * 0.86} r={cut * 0.55} fill="#000" />
                {/* teeth cut into the disc rim */}
                <path
                  d={`M${-cut * 0.9},${-o.disc * 0.98} L0,${-o.disc * 0.78} L${cut * 0.9},${-o.disc * 0.98}Z`}
                  fill="#000"
                />
              </g>
            ))}
            {around(n * 2, half / 2).map((r) => (
              <circle key={`d${r}`} transform={`rotate(${r})`} cy={-ring} r={cut * 0.42} fill="#000" />
            ))}
          </mask>
        </defs>

        {/* under-layer: deep ruby rays and disc, visible through the cuts */}
        <g fill={RUBY_DEEP} className="paper paper--under">
          <circle r={o.disc * 1.08} />
          {around(n, half).map((r) => (
            <g key={`u${r}`} transform={`rotate(${r})`}>
              <path d={petal(o.disc, o.petalOuter * 0.92, o.petalWidth * 0.32)} />
              <circle cy={-o.petalOuter * 0.97} r={o.petalWidth * 0.16} />
            </g>
          ))}
        </g>

        {/* top layer */}
        <g fill={RUBY} className="paper paper--top" mask={`url(#${id}-top)`}>
          <circle r={o.disc} />
          <circle r={ring} fill="none" stroke={RUBY} className="paper__stroke" strokeWidth={cut * 1.8} />
          {around(n).map((r) => (
            <path key={`p${r}`} transform={`rotate(${r})`} d={petal(o.disc * 0.86, o.petalOuter, o.petalWidth)} />
          ))}
          {around(n, half).map((r) => (
            <g key={`s${r}`} transform={`rotate(${r})`}>
              <path d={petal(o.disc * 0.9, o.petalOuter * 0.66, o.petalWidth * 0.46)} />
              <circle cy={-o.petalOuter * 0.74} r={o.petalWidth * 0.2} />
            </g>
          ))}
        </g>
      </>
    ),
  };
}

/** Tall "drzewko" (tree of life): trunk on the fold axis, mirrored branches. */
export function tree(): Motif {
  const w = 640;
  const h = 1120;
  const branches = [
    { y: 230, reach: 170, rise: 110, leaf: 92 },
    { y: 90, reach: 190, rise: 120, leaf: 100 },
    { y: -50, reach: 175, rise: 115, leaf: 92 },
    { y: -185, reach: 140, rise: 100, leaf: 80 },
  ];
  const leaf = (len: number) => {
    const wd = len * 0.36;
    return `M0,0 C${wd},${-len * 0.25} ${wd * 0.9},${-len * 0.75} 0,${-len} C${-wd * 0.9},${-len * 0.75} ${-wd},${-len * 0.25} 0,0Z`;
  };
  const sides = [1, -1];

  return {
    w,
    h,
    art: (id) => (
      <>
        <defs>
          <mask id={`${id}-top`} maskUnits="userSpaceOnUse" x={-w / 2} y={-h / 2} width={w} height={h}>
            <rect x={-w / 2} y={-h / 2} width={w} height={h} fill="#fff" />
            {/* vase cuts */}
            <g transform="translate(0,395)">{glyphPair("angles", 64, 11)}</g>
            <circle cy={395} r={7} fill="#000" />
            {/* crown cuts */}
            <g transform="translate(0,-385)">{glyphPair("braces", 70, 10)}</g>
            {sides.map((s) =>
              branches.map((b) => {
                const ang = Math.atan2(-b.rise, b.reach * s) * (180 / Math.PI) + 90;
                return (
                  <g key={`m${s}${b.y}`} transform={`translate(${b.reach * s},${b.y - b.rise}) rotate(${ang})`}>
                    <path
                      d={`M${-b.leaf * 0.13},${-b.leaf * 0.38} L0,${-b.leaf * 0.5} L${b.leaf * 0.13},${-b.leaf * 0.38}`}
                      fill="none"
                      stroke="#000"
                      strokeWidth={8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d={`M${-b.leaf * 0.13},${-b.leaf * 0.6} L0,${-b.leaf * 0.72} L${b.leaf * 0.13},${-b.leaf * 0.6}`}
                      fill="none"
                      stroke="#000"
                      strokeWidth={8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                );
              }),
            )}
          </mask>
        </defs>

        <g fill={RUBY_DEEP} className="paper paper--under">
          {sides.map((s) =>
            branches.map((b) => (
              <g key={`u${s}${b.y}`}>
                <circle cx={b.reach * 0.55 * s} cy={b.y - b.rise * 0.2} r={15} />
                <path
                  transform={`translate(${b.reach * 0.62 * s},${b.y - b.rise * 0.3}) rotate(${s * 28})`}
                  d={leaf(b.leaf * 0.62)}
                />
              </g>
            )),
          )}
        </g>

        <g fill={RUBY} className="paper paper--top" mask={`url(#${id}-top)`}>
          {/* trunk */}
          <rect x={-11} y={-360} width={22} height={740} rx={11} />
          {/* vase */}
          <path d="M-120,350 L120,350 L92,450 L-92,450Z" />
          <rect x={-140} y={340} width={280} height={20} rx={10} />
          {/* crown: a small rosette on the axis */}
          <circle cy={-385} r={78} />
          {around(12).map((r) => (
            <path key={`c${r}`} transform={`translate(0,-385) rotate(${r})`} d={petal(60, 138, 26)} />
          ))}
          {sides.map((s) =>
            branches.map((b) => {
              const ang = Math.atan2(-b.rise, b.reach * s) * (180 / Math.PI) + 90;
              return (
                <g key={`b${s}${b.y}`}>
                  <path
                    d={`M0,${b.y} C${b.reach * 0.5 * s},${b.y} ${b.reach * s},${b.y - b.rise * 0.3} ${b.reach * s},${b.y - b.rise}`}
                    fill="none"
                    stroke={RUBY}
                    className="paper__stroke"
                    strokeWidth={13}
                    strokeLinecap="round"
                  />
                  <path transform={`translate(${b.reach * s},${b.y - b.rise}) rotate(${ang})`} d={leaf(b.leaf)} />
                  <circle cx={b.reach * 0.35 * s} cy={b.y - 32} r={11} />
                </g>
              );
            }),
          )}
        </g>
      </>
    ),
  };
}

export const heroRosette = rosette({ petals: 16, disc: 150, petalOuter: 370, petalWidth: 54, glyph: "braces" });

export const servicesTree = tree();

export const contactRosette = rosette({ petals: 14, disc: 140, petalOuter: 340, petalWidth: 56, glyph: "angles" });

/** Stacked diamonds climbing the axis: commitments delivered step by step. */
export function ladder(): Motif {
  const w = 420;
  const h = 640;
  const steps = [200, 60, -80, -220];
  return {
    w,
    h,
    art: (id) => (
      <>
        <defs>
          <mask id={`${id}-top`} maskUnits="userSpaceOnUse" x={-w / 2} y={-h / 2} width={w} height={h}>
            <rect x={-w / 2} y={-h / 2} width={w} height={h} fill="#fff" />
            {steps.map((y, i) => (
              <g key={y} transform={`translate(0,${y})`}>
                <path
                  d={`M-34,${18} L0,${-14} L34,${18}`}
                  fill="none"
                  stroke="#000"
                  strokeWidth={11}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {i === steps.length - 1 && <circle cy={-46} r={9} fill="#000" />}
              </g>
            ))}
          </mask>
        </defs>
        <g className="paper paper--under">
          {[1, -1].map((s) =>
            steps.map((y, i) => <circle key={`${s}${y}`} cx={s * (100 - i * 6 + 86)} cy={y - 10} r={13} />),
          )}
          {[1, -1].map((s) => (
            <path key={s} transform={`scale(${s},1)`} d="M24,280 L150,280 L150,250 C110,250 60,200 24,150Z" />
          ))}
        </g>
        <g className="paper paper--top" mask={`url(#${id}-top)`}>
          {steps.map((y, i) => {
            const r = 92 - i * 6;
            return <path key={y} d={`M0,${y - r} L${r},${y} L0,${y + r} L${-r},${y}Z`} />;
          })}
          <rect x={-120} y={270} width={240} height={22} rx={11} />
          {[1, -1].map((s) =>
            steps.map((y, i) => (
              <rect
                key={`st${s}${y}`}
                x={s > 0 ? 40 : -(100 - i * 6) - 4}
                y={y - 5}
                width={100 - i * 6 - 36}
                height={10}
                rx={5}
              />
            )),
          )}
          {[1, -1].map((s) =>
            steps.map((y, i) => (
              <path
                key={`l${s}${y}`}
                transform={`translate(${s * (100 - i * 6)},${y}) scale(${s},1)`}
                d="M0,0 C30,-26 62,-30 92,-12 C62,6 30,8 0,0Z"
              />
            )),
          )}
        </g>
      </>
    ),
  };
}

/** Two birds facing each other across the fold: partners. */
export function birds(): Motif {
  const w = 560;
  const h = 520;
  // one bird on the right half, facing the axis; mirrored for the left.
  const body = "M40,40 C40,-40 110,-90 170,-70 C220,-54 236,6 210,52 C190,90 130,110 80,96 C56,90 40,70 40,40Z";
  const tail = "M200,40 C240,20 262,-30 270,-80 C276,-20 270,40 250,80 C240,96 222,100 206,90Z";
  const head = "M60,-60 C46,-100 70,-140 108,-140 C140,-140 156,-112 150,-84 C130,-70 90,-60 60,-60Z";
  const beak = "M64,-112 L24,-104 L62,-94Z";
  return {
    w,
    h,
    art: (id) => (
      <>
        <defs>
          <mask id={`${id}-top`} maskUnits="userSpaceOnUse" x={-w / 2} y={-h / 2} width={w} height={h}>
            <rect x={-w / 2} y={-h / 2} width={w} height={h} fill="#fff" />
            {[1, -1].map((s) => (
              <g key={s} transform={`scale(${s},1)`} fill="none" stroke="#000" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={104} cy={-108} r={9} fill="#000" stroke="none" />
                <path d="M90,10 L120,30 L150,10 M110,50 L140,70 L170,50" />
                <path d="M236,-20 L246,30" />
              </g>
            ))}
            <g transform="translate(0,150)">{glyphPair("braces", 70, 10)}</g>
          </mask>
        </defs>
        <g className="paper paper--under">
          {[1, -1].map((s) => (
            <g key={s} transform={`scale(${s},1)`}>
              <path d="M70,96 C110,140 170,150 220,130 C190,170 120,180 70,150Z" />
              <circle cx={250} cy={-120} r={14} />
            </g>
          ))}
        </g>
        <g className="paper paper--top" mask={`url(#${id}-top)`}>
          {[1, -1].map((s) => (
            <g key={s} transform={`scale(${s},1)`}>
              <path d={body} />
              <path d={tail} />
              <path d={head} />
              <path d={beak} />
              <rect x={96} y={96} width={14} height={60} rx={7} />
            </g>
          ))}
          <path d="M-200,180 L200,180 L180,206 L-180,206Z" />
          <circle cy={150} r={56} />
        </g>
      </>
    ),
  };
}

/** An arched window: open panes radiating from one centre, everything visible through it. */
export function lattice(): Motif {
  const w = 460;
  const h = 580;
  return {
    w,
    h,
    art: (id) => (
      <>
        <defs>
          <mask id={`${id}-top`} maskUnits="userSpaceOnUse" x={-w / 2} y={-h / 2} width={w} height={h}>
            <rect x={-w / 2} y={-h / 2} width={w} height={h} fill="#fff" />
            {/* arch panes: wedges between radiating mullions */}
            {[-45, -15, 15, 45].map((a) => (
              <path
                key={a}
                transform={`translate(0,-40) rotate(${a})`}
                d="M-22,-70 C-26,-120 -30,-170 -24,-196 L24,-196 C30,-170 26,-120 22,-70 C10,-60 -10,-60 -22,-70Z"
                fill="#000"
              />
            ))}
            <circle cy={-40} r={34} fill="#000" />
            {/* lower panes: tall slots with chevron sills */}
            {[-105, -35, 35, 105].map((x) => (
              <g key={x}>
                <rect x={x - 22} y={20} width={44} height={150} rx={22} fill="#000" />
                <path
                  d={`M${x - 18},206 L${x},190 L${x + 18},206`}
                  fill="none"
                  stroke="#000"
                  strokeWidth={9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            ))}
          </mask>
        </defs>
        <g className="paper paper--under">
          {/* a deep-ruby rim sits behind the arch, one piece with it */}
          <path d="M-196,250 L-196,-40 A196,196 0 0 1 196,-40 L196,250Z" />
        </g>
        <g className="paper paper--top" mask={`url(#${id}-top)`}>
          <path d="M-180,250 L-180,-40 A180,180 0 0 1 180,-40 L180,250Z" />
          <rect x={-215} y={244} width={430} height={26} rx={13} />
        </g>
      </>
    ),
  };
}

export const howCuts: Motif[] = [ladder(), birds(), lattice()];
