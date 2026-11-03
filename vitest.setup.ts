import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Tests import describe/it/expect explicitly (no globals), so Testing Library
// cannot register its own cleanup. Unmount rendered components after each test.
afterEach(() => {
  cleanup();
});
