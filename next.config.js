module.exports = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/basecamp",
        destination: "https://3.basecamp.com/4566424",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/kx3qp5S",
        permanent: true,
      },
    ];
  },
};
