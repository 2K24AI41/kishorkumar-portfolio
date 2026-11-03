import { useId } from "react";
import {
  networkIllustration,
  type MathPart,
  type MathVariable,
} from "@/content/illustration";

/**
 * The hero illustration (docs/DESIGN_SPEC.md D21, §20.3): a small feed-forward
 * neural network drawn as an inline SVG, with the layer labels, two equations
 * and a caption as real HTML text beside it.
 *
 * - It is an illustration of a general idea, not a result. The caption says so.
 * - Everything is drawn from `networkIllustration`, so the picture, the
 *   accessible description and the labels always agree.
 * - Flat design-token colors only. No glow, blur or gradient. The highlighted
 *   path is also described in words, so color is never the only signal.
 * - Static markup with no state or events. The hero decides when it moves.
 */

const { title, caption, captionDetail, layers, highlightedPath, equations } =
  networkIllustration;

/** Drawing size in SVG units. The columns sit at 1/6, 3/6 and 5/6 of the width
 * so the HTML layer labels below can use three equal cells. */
const WIDTH = 300;
const HEIGHT = 260;
const NODE_GAP = 50;
const NODE_RADIUS = 10;

function columnX(layerIndex: number): number {
  return ((layerIndex * 2 + 1) / (layers.length * 2)) * WIDTH;
}

function nodeY(nodeIndex: number, nodeCount: number): number {
  return HEIGHT / 2 + (nodeIndex - (nodeCount - 1) / 2) * NODE_GAP;
}

const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
const ORDINAL_WORDS = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
];

/** The accessible description, built from the same data as the drawing. */
function describeNetwork(): string {
  const sizes = layers.map(
    (layer) => `${NUMBER_WORDS[layer.nodes]} ${layer.name} nodes`,
  );
  const structure = sizes.reduce(
    (text, size, index) =>
      index === 0
        ? size
        : `${text}${index === 1 ? " connect to " : ", which connect to "}${size}`,
    "",
  );
  const path = layers
    .map(
      (layer, index) =>
        `the ${ORDINAL_WORDS[highlightedPath[index]]} ${layer.name} node`,
    )
    .reduce(
      (text, step, index) =>
        index === 0
          ? step
          : `${text}${index === 1 ? " connects to " : ", which connects to "}${step}`,
      "",
    );
  const sentence = `${structure}. One path is highlighted: ${path}.`;
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

/** A variable as semantic HTML: <var>, with <sub> for a subscript. The hat is
 * drawn with CSS, because the hat letter is not in the Latin font subset. */
function Variable({ name, sub, hat }: MathVariable) {
  return (
    <var
      className={
        hat
          ? "relative inline-block before:absolute before:inset-x-0 before:-top-[0.45em] before:text-center before:content-['^']"
          : undefined
      }
    >
      {name}
      {sub ? <sub>{sub}</sub> : null}
    </var>
  );
}

function Part({ part }: { part: MathPart }) {
  return part.kind === "text" ? (
    <>{part.text}</>
  ) : (
    <Variable {...part.variable} />
  );
}

export function NeuralFigure() {
  const titleId = useId();
  const descId = useId();

  const edges: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    lit: boolean;
  }[] = [];
  for (let layer = 0; layer < layers.length - 1; layer += 1) {
    for (let from = 0; from < layers[layer].nodes; from += 1) {
      for (let to = 0; to < layers[layer + 1].nodes; to += 1) {
        edges.push({
          x1: columnX(layer),
          y1: nodeY(from, layers[layer].nodes),
          x2: columnX(layer + 1),
          y2: nodeY(to, layers[layer + 1].nodes),
          lit:
            highlightedPath[layer] === from &&
            highlightedPath[layer + 1] === to,
        });
      }
    }
  }

  return (
    <figure className="rounded-lg border border-border bg-surface p-4 md:p-6">
      <svg
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descId}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="block h-auto w-full"
      >
        <title id={titleId}>{title}</title>
        <desc id={descId}>{describeNetwork()}</desc>
        {/* Plain connections first, then the highlighted ones on top. */}
        {[false, true].map((lit) =>
          edges
            .filter((edge) => edge.lit === lit)
            .map((edge) => (
              <line
                key={`${edge.x1}-${edge.y1}-${edge.x2}-${edge.y2}`}
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                className={
                  lit
                    ? "stroke-accent-highlight stroke-2"
                    : "stroke-border-strong stroke-1"
                }
              />
            )),
        )}
        {layers.map((layer, layerIndex) =>
          Array.from({ length: layer.nodes }, (_, nodeIndex) => {
            const lit = highlightedPath[layerIndex] === nodeIndex;
            return (
              <circle
                key={`${layer.name}-${nodeIndex}`}
                cx={columnX(layerIndex)}
                cy={nodeY(nodeIndex, layer.nodes)}
                r={NODE_RADIUS}
                className={
                  lit
                    ? "fill-accent stroke-accent-highlight stroke-2"
                    : "fill-surface-elevated stroke-border-strong stroke-[1.5]"
                }
              />
            );
          }),
        )}
      </svg>

      <div className="mt-2 grid grid-cols-3 text-center">
        {layers.map((layer) => (
          <div key={layer.name}>
            <p className="font-mono text-label text-text-muted uppercase">
              {layer.label}
            </p>
            <p aria-hidden="true" className="mt-1 font-mono text-text">
              <Variable {...layer.symbol} />
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-1 font-mono text-text">
        {equations.map((equation) => (
          <p key={equation.reading} className="[overflow-wrap:anywhere]">
            <span aria-hidden="true">
              {equation.parts.map((part, index) => (
                <Part key={index} part={part} />
              ))}
            </span>
            <span className="sr-only">{equation.reading}</span>
          </p>
        ))}
      </div>

      <figcaption className="mt-4 text-small text-text-muted">
        <span>{caption}</span> <span>{captionDetail}</span>
      </figcaption>
    </figure>
  );
}
