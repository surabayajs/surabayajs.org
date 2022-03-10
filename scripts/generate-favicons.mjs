import siteConfig from "../src/config/site.js";

import favicons from "favicons";
import * as fs from "fs/promises";
import * as path from "path";

export default async () => {
  const iconSrc = path.resolve(process.cwd(), "src/public/favicon.png");
  const { files, html, images } = await favicons(iconSrc, {
    path: "/",
    appName: siteConfig.title,
    appShortName: siteConfig.title,
    appDescription: siteConfig.description,
    developerName: siteConfig.title,
    developerURL: siteConfig.url,
    background: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    icons: { android: true, appleIcon: true, appleStartup: true, favicons: true, windows: true },
    logging: true,
  });

  await Promise.all([
    ...[...files, ...images].map(({ contents, name }) => {
      return fs.writeFile(path.resolve(process.cwd(), "public", name), contents);
    }),
    fs.writeFile(
      path.resolve(process.cwd(), "src/generated/favicon-meta-tags.jsx"),
      `export default function FaviconMetaTags() { return <>${html.map((h) => h.replace(/>$/, " />")).join(" ")}</>; }`,
    ),
  ]);
};
