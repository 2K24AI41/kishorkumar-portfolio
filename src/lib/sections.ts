import { contact } from "@/content/contact";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";

type SectionId = "about" | "skills" | "education" | "contact";

type SectionDefinition = {
  id: SectionId;
  /** Short name used in the navigation and in the mono heading label. */
  navLabel: string;
  /** The visible h2 text. */
  title: string;
  /** A section with no approved content is hidden (spec §9). */
  hasContent: boolean;
};

/** Spec §9 order: About → Skills → Education → Contact. */
const definitions: SectionDefinition[] = [
  {
    id: "about",
    navLabel: "About",
    title: "About me",
    hasContent: profile.about.length > 0,
  },
  {
    id: "skills",
    navLabel: "Skills",
    title: "Technical skills",
    hasContent: skillGroups.length > 0,
  },
  {
    id: "education",
    navLabel: "Education",
    title: "Education",
    hasContent: education.length > 0,
  },
  {
    id: "contact",
    navLabel: "Contact",
    title: "Contact",
    hasContent: contact.email.length > 0,
  },
];

type VisibleSection = SectionDefinition & {
  /** Two-digit label, numbered consecutively over visible sections (§9). */
  index: string;
};

export const visibleSections: VisibleSection[] = definitions
  .filter((section) => section.hasContent)
  .map((section, position) => ({
    ...section,
    index: String(position + 1).padStart(2, "0"),
  }));

export function getSection(id: SectionId): VisibleSection | undefined {
  return visibleSections.find((section) => section.id === id);
}
