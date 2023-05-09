/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pets-images.dev-apis.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
