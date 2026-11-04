import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/sections/Hero";
import { contact } from "@/content/contact";

/**
 * Regression tests for the essential hero content (docs/DESIGN_SPEC.md §9.1,
 * §20.3, D22, D23, D27). They use roles and names, as a visitor would.
 */
describe("Hero", () => {
  it("has one main heading, the role and the approved positioning sentence", () => {
    render(<Hero />);

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent("Kishor Kumar");
    expect(screen.getByText("Aspiring AI/ML Engineer")).toBeVisible();
    expect(
      screen.getByText(
        "Artificial Intelligence undergraduate developing a strong foundation in Machine Learning, Computer Vision, and Natural Language Processing.",
      ),
    ).toBeVisible();
  });

  it("shows the degree, university and expected graduation", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        "BS Artificial Intelligence · University of Sindh · Expected graduation: 2028",
      ),
    ).toBeVisible();
    const focus = screen.getByRole("list", { name: "Focus areas" });
    expect(within(focus).getAllByRole("listitem")).toHaveLength(5);
  });

  it("offers Get in touch, which goes to the Contact section", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("links to GitHub and LinkedIn safely, with accessible names", () => {
    render(<Hero />);

    for (const [name, href] of [
      ["GitHub", contact.github],
      ["LinkedIn", contact.linkedin],
    ] as const) {
      const link = screen.getByRole("link", {
        name: `${name} (opens in new tab)`,
      });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  it("has no resume link until a resume exists", () => {
    render(<Hero />);

    expect(
      screen.queryByRole("link", { name: /resume|cv/i }),
    ).not.toBeInTheDocument();
  });

  it("contains the illustration, described in words", () => {
    render(<Hero />);

    expect(
      screen.getByRole("img", { name: "A small feed-forward neural network" }),
    ).toBeInTheDocument();
  });
});
