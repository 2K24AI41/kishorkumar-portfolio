/**
 * "Skip to main content" link (spec §8.4). Invisible until a keyboard user
 * presses Tab, so they can jump past the header.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-md bg-surface-elevated text-text focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-(--z-skip-link) focus:px-4 focus:py-3"
    >
      Skip to main content
    </a>
  );
}
