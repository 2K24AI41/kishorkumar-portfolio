/**
 * Content schemas (docs/DESIGN_SPEC.md §16.3).
 * Fields are added as real, owner-approved content becomes available.
 */
export type Profile = {
  name: string;
  role: string;
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

/** Contact details (spec §9.8, D17: email only, no form). */
export type ContactInfo = {
  /** Short invitation shown above the links. */
  invitation: string;
  email: string;
  github: string;
  linkedin: string;
};
