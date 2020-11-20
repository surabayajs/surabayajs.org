import * as React from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

import { EmailTooltip } from "@/components/email-tooltip";
import NextLink from "next/link";
import { VercelLogo } from "@/components/logo";
import routes from "@/routes";
import siteConfig from "site-config";
import { useEmail } from "@/hooks/app";
import { useRouter } from "next/router";

export const Footer: React.FC = () => {
  const [lightColor, darkColor] = useToken("colors", [
    "gator.200",
    "gator.800",
  ]);
  const bgColor = useColorModeValue(lightColor, darkColor);

  const copyEmail = useEmail();
  const { locale } = useRouter();

  return (
    <Box fontSize="sm">
      <Box as="svg" mb={-1} viewBox="0 0 1440 320">
        <path
          d="M0 256l48-26.7C96 203 192 149 288 154.7c96 5.3 192 69.3 288 64C672 213 768 139 864 128s192 43 288 69.3c96 26.7 192 26.7 240 26.7h48v96H0z"
          fill={bgColor}
        />
      </Box>
      <Box bgColor={bgColor} p={8}>
        <Container
          as={Flex}
          flexDir={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          maxW="6xl"
          textAlign={{ base: "center", md: "initial" }}
        >
          <Box pb={12}>
            <Text>
              Made with{" "}
              <Link fontWeight="bold" href="https://nextjs.org" isExternal>
                Next.js
              </Link>
              ,{" "}
              <Link fontWeight="bold" href="https://chakra-ui.com" isExternal>
                Chakra UI
              </Link>
              , and{" "}
              <Link fontWeight="bold" href="https://contentful.com" isExternal>
                Contentful
              </Link>
              .
            </Text>
            <HStack justify={{ base: "center", md: "flex-start" }} spacing={1}>
              <Text>Business inquiries at</Text>
              <EmailTooltip>
                <Button
                  d="inline-block"
                  colorScheme="black"
                  fontWeight="bold"
                  onClick={copyEmail}
                  size="sm"
                  variant="link"
                >
                  {siteConfig.email}
                </Button>
              </EmailTooltip>
              .
            </HStack>
            <br />
            <Text>
              MIT License &copy; {new Date().getFullYear()}-present{" "}
              <NextLink href="/" passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link fontWeight="bold">{siteConfig.title}</Link>
              </NextLink>
              .
            </Text>
            <br />
            <Text>
              Powered by{" "}
              <Link
                href="https://vercel.com/?utm_source=surabayajs&utm_campaign=oss"
                isExternal
              >
                <VercelLogo h="auto" maxW={24} />
              </Link>
            </Text>
          </Box>

          <HStack
            align="flex-start"
            justify="center"
            pt={{ base: 12, md: 0 }}
            pb={12}
            spacing={16}
          >
            <Stack>
              <Text variant="sitemap-title">Navigate</Text>
              {routes(locale).map(({ name, href }) => (
                <NextLink href={href} key={name} passHref>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link variant="sitemap-link">{name}</Link>
                </NextLink>
              ))}
            </Stack>
            <Stack>
              <Text variant="sitemap-title">Socials</Text>
              {Object.entries(siteConfig.socials).map(([name, href]) => (
                <Link href={href} isExternal key={name} variant="sitemap-link">
                  {name}
                </Link>
              ))}
            </Stack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
