type SectionHeadingProps = {
  /** Two-digit section number, for example "01". */
  index: string;
  /** Short section name shown next to the number. */
  label: string;
  /** The h2 text. */
  title: string;
  /** id of the h2, used by the section's aria-labelledby. */
  headingId: string;
};

/**
 * Section heading (spec §10.6): a mono "01 / ABOUT" label, then the h2.
 * The short accent rule is decorative.
 */
export function SectionHeading({
  index,
  label,
  title,
  headingId,
}: SectionHeadingProps) {
  return (
    <div>
      <span aria-hidden="true" className="block h-0.5 w-8 bg-accent" />
      <p className="mt-4 font-mono text-label text-text-muted uppercase">
        {index} / {label}
      </p>
      <h2 id={headingId} className="mt-2 text-h2">
        {title}
      </h2>
    </div>
  );
}
