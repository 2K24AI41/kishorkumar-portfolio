import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Do not let `next dev` generate or maintain AGENTS.md; agent guidance lives in CLAUDE.md.
  agentRules: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
