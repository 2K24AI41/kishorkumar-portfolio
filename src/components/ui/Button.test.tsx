import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "@/components/ui/Button";

/**
 * Behavior and accessibility tests for the shared Button (docs/DESIGN_SPEC.md
 * D32). They query by role and accessible name, the way a user or a screen
 * reader meets the control, and do not check class names.
 */
describe("Button", () => {
  it("is a button with the right name that does not submit a form", () => {
    render(<Button>Get in touch</Button>);

    const button = screen.getByRole("button", { name: "Get in touch" });
    expect(button).toHaveAttribute("type", "button");
  });

  it("calls its click handler once when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Copy email</Button>);

    await user.click(screen.getByRole("button", { name: "Copy email" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does nothing when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Copy email
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Copy email" });
    await user.click(button);

    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it("can be activated with the Enter and Space keys", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Copy email</Button>);

    await user.tab();
    expect(screen.getByRole("button", { name: "Copy email" })).toHaveFocus();

    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("is a link to the given address when it has an href", () => {
    render(<Button href="#contact">Get in touch</Button>);

    const link = screen.getByRole("link", { name: "Get in touch" });
    expect(link).toHaveAttribute("href", "#contact");
    expect(link).not.toHaveAttribute("target");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("opens an external link in a new tab, safely, and says so", () => {
    render(
      <Button href="https://github.com/example" external variant="secondary">
        GitHub
      </Button>,
    );

    const link = screen.getByRole("link", { name: /GitHub.*opens in new tab/ });
    expect(link).toHaveAttribute("href", "https://github.com/example");
    expect(link).toHaveAttribute("target", "_blank");
    const rel = link.getAttribute("rel") ?? "";
    expect(rel).toContain("noopener");
    expect(rel).toContain("noreferrer");
  });

  it("names an icon-only control from its label", () => {
    render(
      <>
        <Button variant="icon" label="Close menu">
          <svg />
        </Button>
        <Button
          variant="icon"
          label="LinkedIn"
          href="https://linkedin.com/in/example"
          external
        >
          <svg />
        </Button>
      </>,
    );

    expect(screen.getByRole("button", { name: "Close menu" })).toBeVisible();
    const link = screen.getByRole("link", {
      name: "LinkedIn (opens in new tab)",
    });
    expect(link).toHaveAttribute("target", "_blank");
  });
});
