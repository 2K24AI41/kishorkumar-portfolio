/**
 * Content and data for the hero illustration (docs/DESIGN_SPEC.md D21, §20.3):
 * a small feed-forward neural network. The drawing, the accessible description
 * and the layer labels are all built from this one object, so they cannot
 * disagree with each other.
 *
 * This is an illustration of a general idea. It is not a model Kishor trained
 * and it shows no results (D12).
 */

/** A math variable such as h, W1 or y-hat. */
export type MathVariable = {
  name: string;
  /** Subscript, for example "1" for W1. */
  sub?: string;
  /** Draw a hat over the name (y-hat). */
  hat?: boolean;
};

/** One piece of an equation: plain text or a variable. */
export type MathPart =
  { kind: "text"; text: string } | { kind: "var"; variable: MathVariable };

export type NetworkLayer = {
  /** Lowercase name used in sentences: "input", "hidden", "output". */
  name: string;
  /** Short label shown under the drawing. */
  label: string;
  /** The symbol for this layer's values in the equations. */
  symbol: MathVariable;
  /** Number of nodes drawn in the layer. */
  nodes: number;
};

export type Equation = {
  parts: MathPart[];
  /** Plain-language reading for screen readers. */
  reading: string;
};

const v = (name: string, sub?: string, hat?: boolean): MathPart => ({
  kind: "var",
  variable: { name, sub, hat },
});
const t = (text: string): MathPart => ({ kind: "text", text });

export const networkIllustration = {
  title: "A small feed-forward neural network",
  /** The exact visible caption (owner decision). */
  caption: "Illustration: a small feed-forward neural network.",
  /** Second caption sentence: explains the highlighted path in words. */
  captionDetail:
    "The highlighted path shows one signal flowing from an input node, through a hidden node, to an output node.",
  layers: [
    { name: "input", label: "Input", symbol: { name: "x" }, nodes: 4 },
    { name: "hidden", label: "Hidden", symbol: { name: "h" }, nodes: 5 },
    {
      name: "output",
      label: "Output",
      symbol: { name: "y", hat: true },
      nodes: 3,
    },
  ] satisfies NetworkLayer[],
  /**
   * The highlighted path: the zero-based node index chosen in each layer, in
   * layer order. Here: the 2nd input, the 3rd hidden node, the 1st output.
   */
  highlightedPath: [1, 2, 0],
  equations: [
    {
      parts: [
        v("h"),
        t(" = ReLU("),
        v("W", "1"),
        v("x"),
        t(" + "),
        v("b", "1"),
        t(")"),
      ],
      reading: "h equals ReLU of W one times x, plus b one",
    },
    {
      parts: [
        v("y", undefined, true),
        t(" = softmax("),
        v("W", "2"),
        v("h"),
        t(" + "),
        v("b", "2"),
        t(")"),
      ],
      reading: "y hat equals softmax of W two times h, plus b two",
    },
  ] satisfies Equation[],
};
