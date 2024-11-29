import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Advertencia: Esto desactivará ESLint durante la construcción
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
