const redirects = require("./src/utils/fetch-redirects");

module.exports = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  reactStrictMode: true,
  redirects,
};
