import * as React from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import { EmailTooltip } from "@/components/email-tooltip";
import { LocaleChanger } from "@/components/navbar/locale-changer";
import NextLink from "next/link";
import routes from "@/routes";
import siteConfig from "site-config";
import { useEmail } from "@/hooks/app";
import { useRouter } from "next/router";

export const NavbarDesktop: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const copyEmail = useEmail();

  const router = useRouter();
  const { locale } = router;

  return (
    <Container as={Stack} maxW="6xl" py={4} spacing={4}>
      <HStack>
        {routes(locale).map(({ name, href, ext = false }) => (
          <NextLink href={href} key={name} passHref>
            <Button
              as="a"
              {...(ext ? { target: "_blank" } : {})}
              variant="ghost"
            >
              {name}
            </Button>
          </NextLink>
        ))}

        <Spacer />

        <EmailTooltip>
          <Button onClick={copyEmail} variant="ghost">
            {siteConfig.email}
          </Button>
        </EmailTooltip>

        <Tooltip hasArrow label={`Toggle ${colorMode} mode 🌓`}>
          <IconButton
            aria-label={`Toggle ${colorMode} mode 🌓`}
            icon={<Icon as={colorMode === "dark" ? FaSun : FaMoon} />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Tooltip>

        <Tooltip hasArrow label="Select language ✨">
          <Box>
            <LocaleChanger />
          </Box>
        </Tooltip>
      </HStack>
      <Divider />
    </Container>
  );
};
