/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geo-world-compilelord.duckdns.org',
        pathname: '/media/photos/flags/**',
      },
      {
        protocol: 'https',
        hostname: 'geo-world-compilelord.duckdns.org',
        pathname: '/media/photos/images/**',
      },
    ],
  },
};

const createNextIntlPlugin = require('next-intl/plugin'); // используем require для совместимости
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig); // экспорт через module.exportsk