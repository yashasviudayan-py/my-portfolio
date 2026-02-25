import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for SSG — stays within Vercel's free tier
  output: "export",

  // Required for static export with Next.js Image (use unoptimized for static)
  images: {
    unoptimized: true,
  },

  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
