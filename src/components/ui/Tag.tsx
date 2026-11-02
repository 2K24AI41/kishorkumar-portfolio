import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

/**
 * A small, non-interactive label (spec §10.5). It has no hover or focus
 * states because it is not a link or a button.
 */
export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-sm border border-transparent bg-surface-elevated px-2 py-1 font-mono text-label text-text-muted uppercase">
      {children}
    </span>
  );
}
