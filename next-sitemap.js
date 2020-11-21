/* eslint-disable @typescript-eslint/no-var-requires */

const siteConfig = require("./site-config");

module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
};
