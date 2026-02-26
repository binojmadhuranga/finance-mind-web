import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.binoj.me/api/:path*',
      },
    ];
  },
};

export default nextConfig;
