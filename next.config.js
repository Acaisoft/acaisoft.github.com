/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Necessary for `output: "export"`
  },
  experimental: {
    scrollRestoration: true, // Fixes back button scroll handling
  },
};

module.exports = nextConfig;
