/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  // https://github.com/vercel/next.js/blob/3b388c346c6990c98e83357ad68263edc7081210/packages/next/server/config-shared.ts#L73-L97
  experimental: {
    conformance: true,
    optimizeCss: true,
    optimizeImages: true,
    workerThreads: true,
  },

  // https://nextjs.org/docs/api-reference/next.config.js/headers
  // https://github.com/leerob/leerob.io/blob/9adc510cbfb3da88c3b0ad15632eb876ca91b607/next.config.js#L51-L88
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // https://vercel.com/support/articles/how-to-enable-cors#enabling-cors-in-a-next.js-app
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: `X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version`,
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
          {
            key: "Cache-Control",
            value: "public, s-maxage=1, stale-while-revalidate=59",
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
          // Opt-out of Google FLoC: https://amifloced.org/
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  // https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    defaultLocale: "id",
    locales: ["en", "id"],
  },

  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,

  // https://nextjs.org/docs/api-reference/next.config.js/redirects
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

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  /**
   * @param {import("webpack").Configuration} config
   * @param {{dev:boolean;isServer:boolean}} opts
   */
  webpack(config, { dev, isServer, webpack }) {
    config.plugins.push(new webpack.DefinePlugin({ __DEV__: dev }));

    // https://github.com/leerob/leerob.io/blob/9adc510cbfb3da88c3b0ad15632eb876ca91b607/next.config.js#L27-L33
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
