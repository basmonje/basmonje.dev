const path = require("path");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()(nextConfig);
