/**
 * Content schemas (docs/DESIGN_SPEC.md §16.3).
 * Fields are added as real, owner-approved content becomes available.
 */
export type Profile = {
  name: string;
  role: string;
  /** Positioning sentence under the name in the hero (spec §2.1, D22). */
  positioning: string;
  /** Areas of focus shown as chips in the hero. */
  focusAreas: string[];
  /** About section paragraphs, in reading order (spec §9.2). */
  about: string[];
};

/** A named group of skills (spec §9.3). No ratings or percentages. */
export type SkillGroup = {
  label: string;
  skills: string[];
};

/** A degree or course of study (spec §9.6). */
export type EducationEntry = {
  degree: string;
  institute: string;
  university: string;
  location: string;
  /** First year of study, for example 2024. Shown as the start of the range. */
  startYear: number;
  /** Last (expected) year of study, for example 2028. */
  endYear: number;
  /** Display text, for example "Expected graduation: 2028". */
  status: string;
  /** True for the entry marked with the accent dot on the timeline. */
  current: boolean;
};

/** Site footer (spec §8.4, §20.3). Contact links come from ContactInfo. */
export type FooterContent = {
  /** Decorative "KK" monogram set in Geist Sans (OD-6). Hidden from assistive technology. */
  monogram: string;
  /** One line under the name. */
  tagline: string;
  /** Name in the copyright line, shown as "© {year} {holder}". */
  copyrightHolder: string;
  /** Year in the copyright line: the build year (see src/content/footer.ts). */
  copyrightYear: number;
};

/** Contact details (spec §9.8, D17: email only, no form). */
export type ContactInfo = {
  /** Short invitation shown above the links. */
  invitation: string;
  email: string;
  github: string;
  linkedin: string;
};
