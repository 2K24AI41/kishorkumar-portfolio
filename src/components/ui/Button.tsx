import { ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";

/**
 * Shared button primitive (docs/DESIGN_SPEC.md §10.4). It renders a real
 * <button>, or an <a> when `href` is given.
 *
 * Variants
 * - "primary" (default): accent-strong fill, white text. One per view.
 * - "secondary": transparent with a border-strong outline.
 * - "icon": a square, icon-only control. It needs a `label`, which becomes its
 *   accessible name. Pass the icon as children.
 *
 * Size: one size, 44px high (48px on touch screens), 10px radius.
 *
 * States: default, hover, focus-visible (the global focus ring), active
 * (pressed), and disabled (buttons only). Hover is switched off while disabled.
 *
 * External links (`external`) open in a new tab and announce it, like
 * ExternalLink (§10.8).
 */

type Appearance =
  | { variant?: "primary" | "secondary"; label?: undefined }
  | { variant: "icon"; label: string };

type AsButton = {
  href?: undefined;
  external?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type AsLink = {
  href: string;
  /** True for a link to another website: new tab, arrow icon, announced. */
  external?: boolean;
  onClick?: undefined;
  disabled?: undefined;
};

type ButtonProps = { children: ReactNode } & Appearance & (AsButton | AsLink);

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium text-small transition-colors duration-(--duration-fast) ease-out active:translate-y-px motion-reduce:active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses = {
  primary:
    "min-h-11 bg-accent-strong px-5 text-on-accent pointer-coarse:min-h-12 not-disabled:hover:bg-accent-strong-hover",
  secondary:
    "min-h-11 border border-border-strong bg-transparent px-5 text-text pointer-coarse:min-h-12 not-disabled:hover:bg-surface-elevated",
  icon: "size-11 text-text pointer-coarse:size-12 not-disabled:hover:bg-surface-elevated",
} as const;

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const className = `${base} ${variantClasses[variant]}`;
  const isIcon = props.variant === "icon";

  if (props.href !== undefined) {
    const external = props.external === true;
    return (
      <a
        href={props.href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
        aria-label={
          props.label === undefined
            ? undefined
            : external
              ? `${props.label} (opens in new tab)`
              : props.label
        }
      >
        {isIcon ? (
          <span aria-hidden="true">{props.children}</span>
        ) : (
          props.children
        )}
        {external && !isIcon ? (
          <>
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.75} />
            <span className="sr-only"> (opens in new tab)</span>
          </>
        ) : null}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.label}
    >
      {isIcon ? (
        <span aria-hidden="true">{props.children}</span>
      ) : (
        props.children
      )}
    </button>
  );
}
