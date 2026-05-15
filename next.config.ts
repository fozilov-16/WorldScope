/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // production flags
      {
        protocol: 'https',
        hostname: 'geo-world-compilelord.duckdns.org',
        pathname: '/media/photos/flags/**',
      },

      // production country images
      {
        protocol: 'https',
        hostname: 'geo-world-compilelord.duckdns.org',
        pathname: '/media/photos/images/**',
      },

      // production daily images
      {
        protocol: 'https',
        hostname: 'geo-world-compilelord.duckdns.org',
        pathname: '/media/photos/daily/**',
      },

      // local backend (FIXED)
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
};

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);