import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Permite usar <img> sin que Next.js se queje
  },
};

export default nextConfig;
