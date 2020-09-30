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
  const externals: [IconType, string][] = [
    [FaDiscord, siteConfig.socials.Discord],
    [FaGithub, siteConfig.socials.GitHub],
    [FaTelegramPlane, siteConfig.socials.Telegram],
    [FaTwitch, siteConfig.socials.Twitch],
    [FaTwitter, siteConfig.socials.Twitter],
  ];

  return (
    <Stack color="white" isInline spacing={6}>
      {externals.map(([Icon, href], i) => (
        <Link href={href} isExternal key={i}>
          <Box as={Icon} size="22px" />
        </Link>
      ))}
    </Stack>
  );
};

export default Socials;
