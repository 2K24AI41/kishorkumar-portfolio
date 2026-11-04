import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CopyEmailButton } from "@/components/sections/CopyEmailButton";

const EMAIL = "someone@example.com";
const FAILURE_MESSAGE =
  "Automatic copying failed. The email address is selected, so you can copy it manually.";

/** The button works on the email link in the page, so the tests render both. */
function renderWithEmailLink() {
  return render(
    <>
      <a id="email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <CopyEmailButton email={EMAIL} emailId="email" />
    </>,
  );
}

/** The message element inside the live region, or an error if there is none. */
function messageIn(status: HTMLElement): Element {
  const message = status.firstElementChild;
  if (!message) throw new Error("The status area has no message.");
  return message;
}

/**
 * Tests for the copy-email control (docs/DESIGN_SPEC.md D32, step 4.3). They
 * use the roles and names a visitor or a screen reader meets. jsdom has no
 * clipboard, so `userEvent.setup()` provides a working stand-in.
 */
describe("CopyEmailButton", () => {
  afterEach(() => {
    vi.useRealTimers();
    // Remove the clipboard stand-in so the next test starts without one.
    Reflect.deleteProperty(navigator, "clipboard");
    window.getSelection()?.removeAllRanges();
  });

  it("is a plain text button with a constant name and a quiet status area", () => {
    userEvent.setup();
    renderWithEmailLink();

    const button = screen.getByRole("button", { name: "Copy email address" });
    expect(button).toHaveTextContent(/^Copy email address$/);
    expect(button.querySelector("svg")).toBeNull();
    const status = screen.getByRole("status");
    expect(status).toBeEmptyDOMElement();
  });

  it("is not shown when the browser has no clipboard", () => {
    expect(navigator.clipboard).toBeUndefined();

    renderWithEmailLink();

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    // The email link is still there to use.
    expect(screen.getByRole("link", { name: EMAIL })).toBeInTheDocument();
  });

  it("copies the exact address and announces it", async () => {
    const user = userEvent.setup();
    renderWithEmailLink();

    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );

    expect(await navigator.clipboard.readText()).toBe(EMAIL);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Email address copied.",
    );
  });

  it("keeps the same name after a click", async () => {
    const user = userEvent.setup();
    renderWithEmailLink();

    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );

    expect(
      screen.getByRole("button", { name: "Copy email address" }),
    ).toBeInTheDocument();
  });

  it("explains a failed copy and selects the email for manual copying", async () => {
    const user = userEvent.setup();
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
      new Error("Permission denied"),
    );
    renderWithEmailLink();

    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(FAILURE_MESSAGE);
    expect(window.getSelection()?.toString()).toBe(EMAIL);
  });

  it("works from the keyboard with Enter and Space", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, "writeText");
    renderWithEmailLink();

    await user.tab(); // the email link
    await user.tab(); // the copy button
    expect(
      screen.getByRole("button", { name: "Copy email address" }),
    ).toHaveFocus();

    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(writeText).toHaveBeenCalledTimes(2);
    expect(writeText).toHaveBeenCalledWith(EMAIL);
  });

  it("clears the message after about four seconds", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    renderWithEmailLink();

    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "Email address copied.",
    );
    // Let React run the effect that starts the four-second timer before the
    // clock moves; otherwise the timer would start late in test time.
    await act(async () => {});

    await act(async () => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByRole("status")).toHaveTextContent(
      "Email address copied.",
    );

    await act(async () => {
      vi.advanceTimersByTime(1500);
    });
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  /**
   * Repeated activation. A live region announces what is added to it, so an
   * identical message needs a new element each time; and a timer that is not
   * restarted would cut a repeated message short. Each case runs once for
   * successful copies and once for failed ones.
   */
  describe.each([
    {
      name: "successful copies",
      message: "Email address copied.",
      fails: false,
    },
    { name: "failed copies", message: FAILURE_MESSAGE, fails: true },
  ])("two $name in a row", ({ message, fails }) => {
    function makeCopyFail() {
      vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
        new Error("Permission denied"),
      );
    }

    it("adds a new message to the same live region each time, even when the text is identical", async () => {
      const user = userEvent.setup();
      if (fails) makeCopyFail();
      renderWithEmailLink();
      const status = screen.getByRole("status");
      const records: MutationRecord[] = [];
      const observer = new MutationObserver((list) => records.push(...list));
      observer.observe(status, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      const button = screen.getByRole("button", { name: "Copy email address" });

      await user.click(button);
      records.push(...observer.takeRecords());
      const first = messageIn(status);
      expect(first).toHaveTextContent(message);
      expect(
        records.some((record) => Array.from(record.addedNodes).includes(first)),
      ).toBe(true);

      records.length = 0;
      await user.click(button);
      records.push(...observer.takeRecords());
      const second = messageIn(status);
      // The text is the same, ...
      expect(second).toHaveTextContent(message);
      // ... but a new element was added to the live region, and that is what
      // assistive technology reports.
      expect(second).not.toBe(first);
      expect(first.isConnected).toBe(false);
      expect(
        records.some((record) =>
          Array.from(record.addedNodes).includes(second),
        ),
      ).toBe(true);
      // The live region itself stays in the page the whole time.
      expect(screen.getByRole("status")).toBe(status);
      observer.disconnect();
    });

    it("restarts the four-second timer on the second activation", async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      if (fails) makeCopyFail();
      renderWithEmailLink();
      const status = screen.getByRole("status");
      const button = screen.getByRole("button", { name: "Copy email address" });

      await user.click(button);
      await act(async () => {}); // let the first timer start
      await act(async () => {
        vi.advanceTimersByTime(3000);
      });
      expect(status).toHaveTextContent(message);

      await user.click(button); // the second activation, about 3 s in
      await act(async () => {}); // let the new timer start
      // 3.5 s after the second click is 6.5 s after the first. Without a
      // restart the message would have been cleared at 4 s.
      await act(async () => {
        vi.advanceTimersByTime(3500);
      });
      expect(status).toHaveTextContent(message);

      // 4.5 s after the second click, the restarted timer has run out.
      await act(async () => {
        vi.advanceTimersByTime(1000);
      });
      expect(status).toBeEmptyDOMElement();
    });
  });

  it("selects the email text again on a second failed copy", async () => {
    const user = userEvent.setup();
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
      new Error("Permission denied"),
    );
    renderWithEmailLink();
    const button = screen.getByRole("button", { name: "Copy email address" });

    await user.click(button);
    expect(window.getSelection()?.toString()).toBe(EMAIL);

    window.getSelection()?.removeAllRanges(); // the visitor clicked elsewhere
    await user.click(button);
    expect(window.getSelection()?.toString()).toBe(EMAIL);
  });
});
