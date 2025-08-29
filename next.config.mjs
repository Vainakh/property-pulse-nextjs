/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: {
      serverActions: true,
      bodySizeLimit: '2mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
