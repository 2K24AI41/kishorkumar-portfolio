import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Centers content and limits its width (spec §7.2). Side padding grows with
 * the screen: 16px, 24px, 32px, 40px (§7.2).
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-wide px-4 md:px-6 lg:px-8 2xl:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
