import { profile } from "@/content/profile";
import { visibleSections } from "@/lib/sections";
import { HeaderShell } from "@/components/layout/HeaderShell";

/**
 * Site header (spec §8.1). Builds the nav from the visible sections so a
 * hidden section never gets a link. The Resume button (§8.1) is deferred
 * until a resume file is provided.
 */
export function Header() {
  return (
    <HeaderShell
      name={profile.name}
      items={visibleSections.map(({ id, navLabel }) => ({
        id,
        label: navLabel,
      }))}
    />
  );
}
