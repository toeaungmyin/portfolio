import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/frwc-2026",
        destination: "/projects/ucsm-frwc-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
