const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid resolving modules from a parent folder when another package-lock.json exists (e.g. in $HOME).
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig
