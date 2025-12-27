import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: [
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com",
      "w7.pngwing.com",
      "raw.githubusercontent.com",
      "upload.wikimedia.org",
    ],
  },
  /* config options here */
};

export default nextConfig;
