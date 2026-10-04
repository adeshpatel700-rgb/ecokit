import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 writes AGENTS.md / CLAUDE.md into the project on every build; we don't want
  // those generated files committed to the client's repo.
  agentRules: false,

  async redirects() {
    return [
      // Legacy static-site URL from the pre-Next.js version
      { source: "/product-detail", destination: "/products", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
