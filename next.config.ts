import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/service/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/next",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
