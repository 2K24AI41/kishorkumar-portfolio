import { profile } from "@/content/profile";

/**
 * Public site address, read from configuration (docs/DESIGN_SPEC.md D26). No
 * domain is hardcoded: until the owner sets NEXT_PUBLIC_SITE_URL, this is
 * undefined and nothing that needs an absolute URL (canonical link, sitemap,
 * share image) may invent one. The value is public, so it must not hold
 * anything sensitive.
 */
function readSiteUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return value ? value : undefined;
}

/** Page metadata (docs/DESIGN_SPEC.md §14). */
export const site = {
  // Built from profile.role so the role wording lives in one place (D27).
  homeTitle: `${profile.name} · ${profile.role}`,
  url: readSiteUrl(),
};
