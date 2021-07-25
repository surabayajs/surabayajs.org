/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  // https://github.com/vercel/next.js/blob/3b388c346c6990c98e83357ad68263edc7081210/packages/next/server/config-shared.ts#L73-L97
  experimental: {
    conformance: true,
    optimizeCss: true,
    optimizeImages: true,
    workerThreads: true,
  },

  i18n: {
    defaultLocale: "id",
    locales: ["en", "id"],
  },
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/coc",
  //       destination: coc.id,
  //       permanent: true,
  //     },
  //     {
  //       source: "/en/coc",
  //       destination: coc.en,
  //       locale: false,
  //       permanent: true,
  //     },
  //   ];
  // },
};
