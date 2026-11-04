"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";

/**
 * "Copy email address" control for the Contact section (docs/DESIGN_SPEC.md
 * §9.8, §20.3, §20.4). It is the only client code in Contact.
 *
 * - It is not in the server-rendered HTML. It appears only once the page is
 *   running in a browser that has a working clipboard API, so there is never a
 *   button that does nothing. The email link stays usable without it.
 * - The button text is its accessible name and never changes.
 * - One status message, visible and announced politely, reports the result and
 *   clears after about four seconds. Every attempt, successful or not, shows
 *   its message as a new element inside the same, persistent `role="status"`
 *   element and restarts the four seconds. A live region announces what is
 *   added to it, and setting identical text again would change nothing in the
 *   page, so a repeated message would be neither announced nor timed again.
 * - If the browser refuses the copy (for example permission denied), the email
 *   link text is selected so it can be copied by hand. There is no deprecated
 *   `document.execCommand` fallback.
 */

const MESSAGE_TIMEOUT_MS = 4000;

const messages = {
  copied: "Email address copied.",
  failed:
    "Automatic copying failed. The email address is selected, so you can copy it manually.",
} as const;

type Outcome = keyof typeof messages;

/**
 * The latest attempt. `attempt` counts up, so each attempt is a new value and a
 * new element even when its outcome and text equal the previous ones.
 */
type Result = { outcome: Outcome; attempt: number };

type CopyEmailButtonProps = {
  /** The address to copy. */
  email: string;
  /** id of the element that shows the address, selected if copying fails. */
  emailId: string;
};

/** Clipboard support does not change while the page is open. */
function subscribe() {
  return () => {};
}

function canCopy() {
  return typeof navigator.clipboard?.writeText === "function";
}

/** On the server, and while hydrating, there is no button. */
function cannotCopyOnServer() {
  return false;
}

export function CopyEmailButton({ email, emailId }: CopyEmailButtonProps) {
  const supported = useSyncExternalStore(
    subscribe,
    canCopy,
    cannotCopyOnServer,
  );
  const [result, setResult] = useState<Result | null>(null);
  const attempts = useRef(0);

  // A new result, even an identical one, replaces the timer.
  useEffect(() => {
    if (!result) return;
    const timer = setTimeout(() => setResult(null), MESSAGE_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [result]);

  if (!supported) return null;

  async function copy() {
    let outcome: Outcome = "copied";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const link = document.getElementById(emailId);
      if (link) window.getSelection()?.selectAllChildren(link);
      outcome = "failed";
    }
    attempts.current += 1;
    setResult({ outcome, attempt: attempts.current });
  }

  return (
    <>
      <Button variant="secondary" onClick={() => void copy()}>
        Copy email address
      </Button>
      <p role="status" className="text-small text-text-muted">
        {result ? (
          <span key={result.attempt}>{messages[result.outcome]}</span>
        ) : null}
      </p>
    </>
  );
}
