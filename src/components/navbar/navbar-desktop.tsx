import * as React from "react";

import {
  Button,
  Container,
  Divider,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import { ColorModeButton } from "@/components/color-mode-button";
import { EmailTooltip } from "@/components/email-tooltip";
import { LocaleButton } from "@/components/locale-button";
import NextLink from "next/link";
import routes from "@/routes";
import siteConfig from "site-config";
import { useEmail } from "@/hooks/app";
import { useRouter } from "next/router";

export const NavbarDesktop: React.FC = () => {
  const copyEmail = useEmail();

  const router = useRouter();
  const { locale } = router;

  return (
    <Container
      as={Stack}
      d={{ base: "none", md: "flex" }}
      maxW="6xl"
      py={4}
      spacing={4}
    >
      <HStack>
        {Object.entries(routes(locale)).map(([href, { name, ext = false }]) => (
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

        <ColorModeButton />

        <LocaleButton />
      </HStack>
      <Divider />
    </Container>
  );
};
