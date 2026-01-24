import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Suppress hydration warnings from browser extensions
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
    // Configure image optimization
    qualities: [75, 90],
    // Increase cache time to reduce external requests
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    // Set a reasonable timeout for image optimization
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Transpile Three.js packages
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
