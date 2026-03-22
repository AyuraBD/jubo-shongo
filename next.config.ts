
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",        // old format
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",    // new format
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/auth/:path*",
  //       destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/:path*`,
  //     },
  //   ];
  // },
};

export default nextConfig;