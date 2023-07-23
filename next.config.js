/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // esmExternals: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pets-images.dev-apis.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

module.exports = nextConfig;
