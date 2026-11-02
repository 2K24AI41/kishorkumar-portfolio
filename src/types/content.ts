/**
 * Content schemas (docs/DESIGN_SPEC.md §16.3).
 * Fields are added as real, owner-approved content becomes available.
 */
export type Profile = {
  name: string;
  role: string;
  /** Areas of focus shown as chips in the hero. */
  focusAreas: string[];
};
