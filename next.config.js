// @ts-check

/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = {
  // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  env: {
    LOCALE: process.env.LOCALE || "en",
  },

  // https://nextjs.org/docs/api-reference/next.config.js/headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: `camera=(), microphone=(), geolocation=(), interest-cohort=()`,
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
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
  webpack(config, { dev, webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: dev,
      }),
    );

    return config;
  },
};
