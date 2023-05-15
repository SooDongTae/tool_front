/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://10.150.151.66:8080/api/:path*",
      },
    ];
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
