/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";

import { ColorModeButton } from "@/components/color-mode-button";
import { LocaleButton } from "@/components/locale-button";
import siteConfig from "@/config/site";
import { useEmail } from "@/hooks/app";
import routes from "@/routes";
import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";

export const Drawer: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const copyEmail = useEmail();

  const { locale } = useRouter();

  if (isDesktop) {
    return null;
  }

  return (
    <>
      <ChakraDrawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody
              as={Stack}
              fontSize="lg"
              fontWeight="bold"
              justify="center"
              p={8}
              spacing={4}
              textAlign="center"
            >
              {Object.entries(routes(locale)).map(
                ([href, { name, ext = false }]) => (
                  <React.Fragment key={name}>
                    {ext ? (
                      <Link href={href} isExternal onClick={onClose}>
                        {name}
                      </Link>
                    ) : (
                      <NextLink href={href} passHref>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link onClick={onClose}>{name}</Link>
                      </NextLink>
                    )}
                  </React.Fragment>
                ),
              )}
            </DrawerBody>

            <DrawerFooter as={HStack} justifyContent="center" spacing={4}>
              <Button onClick={copyEmail} variant="outline">
                {siteConfig.email}
              </Button>

              <ColorModeButton />

              <LocaleButton />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>

      <IconButton
        aria-label="Open drawer"
        borderRadius="full"
        bottom={4}
        boxShadow="lg"
        colorScheme="green"
        d={{ base: "flex", md: "none" }}
        icon={<Icon as={FaBars} />}
        onClick={onOpen}
        pos="fixed"
        right={4}
        size="lg"
      />
    </>
  );
};
