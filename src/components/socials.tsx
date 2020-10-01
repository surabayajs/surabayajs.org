/* eslint-disable react/no-array-index-key */

import * as React from "react";

import { Box, Stack } from "@chakra-ui/core";
import {
  FaDiscord,
  FaGithub,
  FaTelegramPlane,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

import type { IconType } from "react-icons/lib";
import Link from "@/components/link";
import siteConfig from "~/site-config";

const Socials: React.FC = () => {
  const externals: [IconType, string, string][] = [
    [FaDiscord, siteConfig.socials.Discord, "Discord"],
    [FaGithub, siteConfig.socials.GitHub, "GitHub"],
    [FaTelegramPlane, siteConfig.socials.Telegram, "Telegram"],
    [FaTwitch, siteConfig.socials.Twitch, "Twitch"],
    [FaTwitter, siteConfig.socials.Twitter, "Twitter"],
  ];

  return (
    <Stack color="white" isInline spacing={6}>
      {externals.map(([Icon, href, socialName], i) => (
        <Link href={href} isExternal key={i}>
          <Box as={Icon} size="30px" />
          {socialName}
        </Link>
      ))}
    </Stack>
  );
};

export default Socials;
