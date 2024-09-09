const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["aceternity.com"], // Tambahkan domain yang diizinkan
  },
};

module.exports = withPlausibleProxy()(nextConfig);
