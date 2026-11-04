import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NeuralFigure } from "@/components/sections/NeuralFigure";
import { networkIllustration } from "@/content/illustration";

/**
 * Tests for the hero illustration (docs/DESIGN_SPEC.md D21, D32). They look at
 * what a visitor or a screen reader gets: the image name and description, the
 * visible caption, the labels and the equations. Layout, color and motion need
 * a real browser and are checked there.
 */
describe("NeuralFigure", () => {
  it("is an image with a clear name", () => {
    render(<NeuralFigure />);

    expect(
      screen.getByRole("img", { name: "A small feed-forward neural network" }),
    ).toBeInTheDocument();
  });

  it("describes the network and says one path is highlighted", () => {
    render(<NeuralFigure />);

    const image = screen.getByRole("img", {
      name: "A small feed-forward neural network",
    });
    expect(image).toHaveAccessibleDescription(
      /four input nodes.*five hidden nodes.*three output nodes/i,
    );
    expect(image).toHaveAccessibleDescription(/one path is highlighted/i);
    expect(image).toHaveAccessibleDescription(
      /second input node.*third hidden node.*first output node/i,
    );
  });

  it("draws exactly the nodes that the content describes", () => {
    const { container } = render(<NeuralFigure />);

    const expected = networkIllustration.layers.reduce(
      (total, layer) => total + layer.nodes,
      0,
    );
    expect(container.querySelectorAll("svg circle")).toHaveLength(expected);
  });

  it("shows the exact caption and explains the highlighted path in words", () => {
    render(<NeuralFigure />);

    const figure = screen.getByRole("figure");
    expect(
      within(figure).getByText(
        "Illustration: a small feed-forward neural network.",
      ),
    ).toBeVisible();
    expect(within(figure).getByText(/highlighted path shows/i)).toBeVisible();
  });

  it("labels the three layers", () => {
    render(<NeuralFigure />);

    expect(screen.getByText("Input")).toBeVisible();
    expect(screen.getByText("Hidden")).toBeVisible();
    expect(screen.getByText("Output")).toBeVisible();
  });

  it("gives each equation a plain-language reading", () => {
    render(<NeuralFigure />);

    expect(
      screen.getByText("h equals ReLU of W one times x, plus b one"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("y hat equals softmax of W two times h, plus b two"),
    ).toBeInTheDocument();
  });

  it("has nothing to click or tab to", () => {
    render(<NeuralFigure />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
