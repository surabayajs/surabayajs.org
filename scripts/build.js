require("cross-fetch/polyfill");

const siteConfig = require("../site-config");

const buildFavicons = require("./build-favicons");
const buildRobotsTxt = require("./build-robots-txt");
const buildSitemap = require("./build-sitemap");

async function build() {
  await buildFavicons({ siteConfig });
  await buildRobotsTxt({ siteConfig });
  await buildSitemap({ siteConfig });
}

build();
