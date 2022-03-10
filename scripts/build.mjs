import "cross-fetch/dist/node-polyfill.js";

import copyPublicAssets from "./copy-public-assets.mjs";
import generateFavicons from "./generate-favicons.mjs";

async function build() {
  await copyPublicAssets();
  await generateFavicons();
}

build();
