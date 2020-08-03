const fs = require("fs");
const { publicDir, resolveCwd } = require("./utils");

// TODO: https://github.com/itgalaxy/generate-robotstxt
const template = `
Sitemap: https://REPLACE_SITEMAP/sitemap.xml

User-agent: *
Allow: /*

Disallow: /api/*
`;

const buildRobotsTxt = async ({ siteConfig }) => {
  const contents = template.trim().replace(/REPLACE_SITEMAP/, siteConfig.url);

  fs.writeFileSync(resolveCwd(publicDir, "robots.txt"), contents);
};

module.exports = buildRobotsTxt;
