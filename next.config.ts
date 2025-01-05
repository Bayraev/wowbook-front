import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.worldwords.io',
        port: '',
        pathname: '/static/book/*',
      },
      {
        protocol: 'https',
        hostname: 'beta.worldwords.io',
        port: '',
        pathname: '/static/book/*',
      },
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
};

export default nextConfig;
