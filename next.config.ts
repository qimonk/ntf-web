import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production build configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Enable strict mode for production
  reactStrictMode: true,
  // Optimize images
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
