/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['shopping-phinf.pstatic.net'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopping-phinf.pstatic.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
