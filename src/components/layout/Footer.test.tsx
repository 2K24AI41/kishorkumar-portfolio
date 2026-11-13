import { render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Footer } from "@/components/layout/Footer";
import { contact } from "@/content/contact";
import { footer } from "@/content/footer";
import { profile } from "@/content/profile";
import { visibleSections } from "@/lib/sections";

/**
 * Footer component test (docs/DESIGN_SPEC.md §8.4, §20.3, §20.4 step 4.4,
 * D32). Queries by role and accessible name; no DOM snapshots.
 */
describe("Footer", () => {
  it("is the page's one contentinfo landmark", () => {
    render(<Footer />);

    expect(screen.getAllByRole("contentinfo")).toHaveLength(1);
  });

  it("links to the email address with a mailto link", () => {
    render(<Footer />);

    const footerLandmark = screen.getByRole("contentinfo");
    const link = within(footerLandmark).getByRole("link", {
      name: contact.email,
    });
    expect(link).toHaveAttribute("href", `mailto:${contact.email}`);
    expect(link).toHaveTextContent(contact.email);
  });

  it("provides a preferred email break opportunity before the @", () => {
    // Regression: at 320px the address once broke as "...gmail.co" / "m".
    // A <wbr> before the "@" gives the browser a preferred place to break, so
    // a wrap reads "name" / "@domain". overflow-wrap:anywhere stays on the
    // link as a fallback for exceptionally narrow widths, where even one part
    // of the address does not fit. This test checks the preferred break hint
    // and the exact email text; it does not claim that a break inside a word
    // is impossible.
    render(<Footer />);

    const link = screen.getByRole("link", { name: contact.email });
    // The hint adds no characters: the text is exactly the address.
    expect(link.textContent?.trim()).toBe(contact.email);
    const hints = link.querySelectorAll("wbr");
    expect(hints).toHaveLength(1);
    expect(hints[0].nextSibling?.textContent).toMatch(/^@/);
    expect(link.querySelector("br")).toBeNull();
  });

  it("links to GitHub and LinkedIn in a new tab, safely", () => {
    render(<Footer />);

    const contactLinks = screen.getByRole("list", { name: "Contact links" });
    for (const [name, href] of [
      ["GitHub", contact.github],
      ["LinkedIn", contact.linkedin],
    ] as const) {
      // The announcement is hidden text after the name. jsdom's name
      // algorithm drops the space before it, so the space is optional here.
      const link = within(contactLinks).getByRole("link", {
        name: new RegExp(`^${name}\\s?\\(opens in new tab\\)$`),
      });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  it("has a Back to top link to the top of the page", () => {
    render(<Footer />);

    const link = screen.getByRole("link", { name: "Back to top" });
    expect(link).toHaveAttribute("href", "#top");
    expect(link).not.toHaveAttribute("target");
  });

  it("has navigation links for exactly the visible sections, in order", () => {
    render(<Footer />);

    const nav = screen.getByRole("navigation", { name: "Footer" });
    const links = within(nav).getAllByRole("link");
    expect(links.map((link) => link.textContent)).toEqual(
      visibleSections.map((section) => section.navLabel),
    );
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      visibleSections.map((section) => `#${section.id}`),
    );
  });

  it("shows the name, the tagline and the copyright line", () => {
    render(<Footer />);

    const footerLandmark = screen.getByRole("contentinfo");
    expect(within(footerLandmark).getByText(profile.name)).toBeVisible();
    expect(
      within(footerLandmark).getByText(
        "AI undergraduate · University of Sindh",
      ),
    ).toBeVisible();
    expect(
      within(footerLandmark).getByText(
        `© ${footer.copyrightYear} Kishor Kumar`,
      ),
    ).toBeVisible();
    expect(footerLandmark).not.toHaveTextContent("All rights reserved");
  });

  it("keeps the monogram and the divider away from assistive technology", () => {
    render(<Footer />);

    const footerLandmark = screen.getByRole("contentinfo");
    // The monogram is decorative: hidden, and not a link.
    const monogram = within(footerLandmark).getByText("KK");
    expect(monogram.closest('[aria-hidden="true"]')).not.toBeNull();
    expect(monogram.closest("a")).toBeNull();
    // No link or image takes its name from the monogram.
    expect(
      within(footerLandmark).queryByRole("link", { name: /KK/ }),
    ).not.toBeInTheDocument();
    expect(within(footerLandmark).queryByRole("img")).not.toBeInTheDocument();
  });
});

describe("Footer copyright year", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.resetModules();
  });

  it("uses the year in which the content is built", async () => {
    // The year is read once, when the content module is evaluated (at build
    // time on the server). Fix the clock, then load fresh copies of the
    // modules so the footer content is evaluated under that clock.
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2031-06-15T12:00:00Z"));
    vi.resetModules();
    const { Footer: FooterBuiltIn2031 } =
      await import("@/components/layout/Footer");

    render(<FooterBuiltIn2031 />);

    expect(screen.getByText("© 2031 Kishor Kumar")).toBeVisible();
  });
});
