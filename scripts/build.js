require("cross-fetch/polyfill");

const copyPublicAssets = require("./copy-public-assets");
const generateFavicons = require("./generate-favicons");

async function build() {
  await copyPublicAssets();
  await generateFavicons();
}

build();
