import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "missbreakingnews.com",
      },
    ],
  },
};

export default nextConfig;
