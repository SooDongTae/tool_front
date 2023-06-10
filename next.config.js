/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: process.env.NEXT_PUBLIC_SERVER_URL + "/:path*",
  //     },
  //   ];
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
