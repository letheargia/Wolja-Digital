import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.builder.io", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
        port: "",
        pathname: "/api/v1/image/assets/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
