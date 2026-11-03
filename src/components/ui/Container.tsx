import type { ReactNode } from "react";

/**
 * Container widths (spec §7.2). Each max width is the total width of the box,
 * including the side padding below. Tailwind needs the full class names, so
 * they are written out here.
 *
 * - "content": 1200px. The default, for ordinary sections.
 * - "wide": 1360px. For the header, the hero and project grids.
 */
const widthClasses = {
  content: "max-w-content",
  wide: "max-w-wide",
} as const;

type ContainerProps = {
  children: ReactNode;
  /** Which max width to use. Defaults to "content". */
  width?: keyof typeof widthClasses;
  className?: string;
};

/**
 * Centers content and limits its width (spec §7.2). Side padding grows with
 * the screen: 16px, 24px, 32px, 40px (§7.2).
 */
export function Container({
  children,
  width = "content",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${widthClasses[width]} px-4 md:px-6 lg:px-8 2xl:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
