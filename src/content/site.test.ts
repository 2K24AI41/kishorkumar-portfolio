import { describe, expect, it } from "vitest";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

/**
 * Regression test (docs/DESIGN_SPEC.md D27, step 4.1): the role is always
 * written "Aspiring AI/ML Engineer", never the bare "AI/ML Engineer", including
 * in the home page title.
 */
describe("role wording", () => {
  it("shows the full role in the home page title", () => {
    expect(site.homeTitle).toBe("Kishor Kumar · Aspiring AI/ML Engineer");
  });

  it("uses the same role wording in the profile", () => {
    expect(profile.role).toBe("Aspiring AI/ML Engineer");
  });

  it("does not end the title with the bare role", () => {
    expect(site.homeTitle).not.toMatch(/·\s*AI\/ML Engineer$/);
  });
});
