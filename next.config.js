/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'asset.basefood.co.jp',
        protocol: 'https',
        pathname: '/images/**/*',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
