/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
