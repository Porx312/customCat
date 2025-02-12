import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Permite usar <img> sin que Next.js se queje
  },
  rules: {
    "@next/next/no-img-element": "off",
  },
};

export default nextConfig;
