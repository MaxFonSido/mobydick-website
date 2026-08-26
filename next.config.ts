import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mobyskabob.com",
      },
    ],
  },
};

export default nextConfig;
