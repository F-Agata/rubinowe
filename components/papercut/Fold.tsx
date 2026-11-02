import type { CSSProperties } from "react";
import type { Motif } from "./motifs";

type Props = {
  motif: Motif;
  /** Unique per page; prefixes the SVG mask ids of both halves. */
  id: string;
  /** "load" unfolds once on page load; "scroll" unfolds as it scrolls into view. */
  trigger: "load" | "scroll";
  className?: string;
};

/**
 * A papercut folded along its vertical axis. The left half stays put; the right
 * half is the same sheet folded over it, and it opens to reveal the full cut.
 * Open is the default state: without CSS support or JS the paper is simply flat.
 */
export function Fold({ motif, id, trigger, className }: Props) {
  const { w, h, art } = motif;
  return (
    <div
      className={`fold fold--${trigger}${className ? ` ${className}` : ""}`}
      style={{ "--fold-ratio": `${w} / ${h}` } as CSSProperties}
      aria-hidden="true"
    >
      <svg className="fold__half fold__half--fixed" viewBox={`${-w / 2} ${-h / 2} ${w / 2} ${h}`}>
        {art(`${id}-l`)}
      </svg>
      <svg className="fold__half fold__half--flap" viewBox={`0 ${-h / 2} ${w / 2} ${h}`}>
        {art(`${id}-r`)}
      </svg>
    </div>
  );
}
