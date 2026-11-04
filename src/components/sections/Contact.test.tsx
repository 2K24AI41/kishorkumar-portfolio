import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it } from "vitest";
import { Contact } from "@/components/sections/Contact";
import { contact } from "@/content/contact";

/**
 * Regression tests for the Contact section (docs/DESIGN_SPEC.md §9.8, §20.4,
 * D17). The first group checks the server-rendered HTML, which is what a
 * visitor gets without JavaScript. It is also all that the page needs: email
 * first, no copy button, no form.
 */
describe("Contact on the server (no JavaScript)", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  function renderOnServer() {
    document.body.innerHTML = renderToString(<Contact />);
  }

  it("shows the email as visible text with a working mailto link", () => {
    renderOnServer();

    const link = screen.getByRole("link", { name: contact.email });
    expect(link).toHaveAttribute("href", `mailto:${contact.email}`);
    expect(link).toHaveTextContent(contact.email);
  });

  it("lets a narrow screen wrap the email before the @, without forcing a break", () => {
    renderOnServer();

    const link = screen.getByRole("link", { name: contact.email });
    // The hint adds no characters: the text is exactly the address.
    expect(link.textContent?.trim()).toBe(contact.email);
    // One optional break opportunity, placed before the "@"; never a <br>.
    const hints = link.querySelectorAll("wbr");
    expect(hints).toHaveLength(1);
    expect(hints[0].nextSibling?.textContent).toMatch(/^@/);
    expect(link.querySelector("br")).toBeNull();
  });

  it("links to GitHub and LinkedIn safely, with accessible names", () => {
    renderOnServer();

    for (const [name, href] of [
      ["GitHub", contact.github],
      ["LinkedIn", contact.linkedin],
    ] as const) {
      // The announcement is hidden text after the name. Some name algorithms
      // (jsdom's) drop the space before it, so the space is optional here.
      const link = screen.getByRole("link", {
        name: new RegExp(`^${name}\\s?\\(opens in new tab\\)$`),
      });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  it("has no copy button in the server output", () => {
    renderOnServer();

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

describe("Contact in a browser", () => {
  afterEach(() => {
    Reflect.deleteProperty(navigator, "clipboard");
  });

  it("adds the copy button once the page is running and copying is possible", () => {
    userEvent.setup(); // gives jsdom a working clipboard
    render(<Contact />);

    expect(
      screen.getByRole("button", { name: "Copy email address" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: contact.email }),
    ).toBeInTheDocument();
  });
});
