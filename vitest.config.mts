import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

/**
 * Component and regression tests (docs/DESIGN_SPEC.md D30-D32). Vitest runs on
 * its own Vite tooling and never touches the Next.js / Turbopack build. It uses
 * jsdom, so no browser is needed. Browser tests (Playwright) arrive in step 4.6
 * and live in a separate folder.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Same "@/" alias as tsconfig.json. The regex only matches "@/", so
      // scoped packages such as "@testing-library/react" are not affected.
      {
        find: /^@\//,
        replacement: fileURLToPath(new URL("./src/", import.meta.url)),
      },
    ],
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    setupFiles: ["./vitest.setup.ts"],
  },
});
