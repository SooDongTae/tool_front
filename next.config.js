/** @type {import('next').NextConfig} */
const nextConfig = {
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
    domains: [process.env.NEXT_PUBLIC_IMAGE_URL, "*"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.o-r.kr",
      },
    ],
  },
};

module.exports = nextConfig;
