const path = require("path");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig
