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
  // Output configuration for static export
  output: 'standalone',
  // Compression
  compress: true,
  // Performance
  poweredByHeader: false,
};

export default nextConfig;
