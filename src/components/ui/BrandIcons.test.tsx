import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";

/**
 * The brand icons are decoration: the link around them carries the name
 * (docs/DESIGN_SPEC.md §10.1, D32).
 */
describe("brand icons", () => {
  it("are hidden from screen readers on their own", () => {
    render(
      <>
        <GitHubIcon />
        <LinkedInIcon />
      </>,
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("leave the accessible name of an icon link to its label", () => {
    render(
      <>
        <Button
          variant="icon"
          label="GitHub"
          href="https://github.com/example"
          external
        >
          <GitHubIcon />
        </Button>
        <Button
          variant="icon"
          label="LinkedIn"
          href="https://linkedin.com/in/example"
          external
        >
          <LinkedInIcon />
        </Button>
      </>,
    );

    expect(
      screen.getByRole("link", { name: "GitHub (opens in new tab)" }),
    ).toHaveAttribute("href", "https://github.com/example");
    expect(
      screen.getByRole("link", { name: "LinkedIn (opens in new tab)" }),
    ).toHaveAttribute("href", "https://linkedin.com/in/example");
  });

  it("can be drawn at a chosen size", () => {
    const { container } = render(<GitHubIcon size={32} />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
  });
});
