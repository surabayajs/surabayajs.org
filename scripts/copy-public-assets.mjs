import copy from "copy";

export default async () => {
  copy("src/public/**/*", "public", () => {});
};
