/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {

    return [
      {
        source: "/api/:path*",
        destination: "https://kas-json-api.vercel.app/api/:path*"
        // destination: "http://localhost:3002/api/:path*"
      }
    ];

  }
}

module.exports = nextConfig
