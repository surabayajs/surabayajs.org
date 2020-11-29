/* eslint-disable @typescript-eslint/no-var-requires */

const { coc } = require("./site-config");

module.exports = {
  i18n: {
    defaultLocale: "id",
    locales: ["en", "id"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/coc",
        destination: coc.id,
        permanent: true,
      },
      {
        source: "/en/coc",
        destination: coc.en,
        locale: false,
        permanent: true,
      },
    ];
  },
};
