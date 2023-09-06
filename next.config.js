/** @type {import('next').NextConfig} */
const nextConfig = {};

//module.exports = nextConfig;
module.exports = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
    ignoreBuildErrors: true,
  },
};
