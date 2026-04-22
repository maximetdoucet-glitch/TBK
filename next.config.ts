import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.uegholland.com",
        pathname: "/media/catalog/product/**",
      },
    ],
  },
};

export default nextConfig;
