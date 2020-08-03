const favicons = require("favicons");
const fs = require("fs");
const { publicDir, iconsDir, resolveCwd } = require("./utils");

const buildFavicons = async ({ siteConfig }) => {
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  return new Promise((resolve, reject) => {
    favicons(
      resolveCwd("src/assets/icon.png"),
      {
        path: "/icons/",
        appName: siteConfig.title,
        appShortName: siteConfig.title,
        appDescription: siteConfig.description,
        developerName: siteConfig.title,
        developerURL: siteConfig.url,
        background: siteConfig.themeColor,
        theme_color: siteConfig.themeColor,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: false,
          windows: true,
          yandex: false,
        },
        logging: true,
      },
      (error, { files, images }) => {
        if (error) {
          reject(error);
        }

        images.forEach(({ name, contents }) => {
          fs.writeFile(resolveCwd(iconsDir, name), contents, reject);
        });

        files.forEach(({ name, contents }) => {
          fs.writeFile(resolveCwd(publicDir, name), contents, reject);
        });

        resolve();
      },
    );
  });
};

module.exports = buildFavicons;
