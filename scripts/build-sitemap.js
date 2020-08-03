const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { publicDir, resolveCwd } = require("./utils");
const { client } = require("../src/cms");

const buildSitemap = async ({ siteConfig }) => {
  const smStream = new SitemapStream({
    hostname: siteConfig.url,
  });

  const data = await client.request(/* GraphQL */ `
    {
      eventCollection {
        items {
          slug
        }
      }
    }
  `);

  const routes = [
    "/",
    "/coc",
    "/events",
    ...data.eventCollection.items.map(({ slug }) => `/events/${slug}`),
  ];

  for (const route of routes) {
    smStream.write({
      url: route,
      changeFreq: "weekly",
      priority: 0.9,
    });
  }

  smStream.end();

  const sitemap = (await streamToPromise(smStream)).toString();

  fs.writeFileSync(resolveCwd(publicDir, "sitemap.xml"), sitemap);
};

module.exports = buildSitemap;
