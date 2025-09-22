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
  // Compression
  compress: true,
  // Performance
  poweredByHeader: false,
<<<<<<< HEAD
  // Static export for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  // Skip API routes for static export
  generateBuildId: async () => {
    return 'nsy-tax-freelancer-build'
  },
=======
>>>>>>> 16b47be18b2a98af725b09c567024d24c8bb0236
};

export default nextConfig;
