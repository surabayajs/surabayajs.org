import type { NextApiHandler } from "next";
import siteConfig from "~/site-config";

const handler: NextApiHandler = async (_, res) => {
  res.json(siteConfig.socials);
};

export default handler;
