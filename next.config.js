/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Necessary for `output: "export"`
  },
};

module.exports = nextConfig;
