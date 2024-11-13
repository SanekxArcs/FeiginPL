import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
    domains: ["feiginelectric.com"],
  },
};

export default nextConfig;
