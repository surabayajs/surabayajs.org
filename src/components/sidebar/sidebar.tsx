/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";

import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";
import { HorizontalLogo } from "@/components/logo";
import NextLink from "next/link";
import routes from "@/routes";
import siteConfig from "site-config";
import { useEmail } from "@/hooks/app";
import { useRouter } from "next/router";

export const Sidebar: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const copyEmail = useEmail();

  const { locale } = useRouter();

  if (isDesktop) {
    return null;
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader as={Center}>
              <Box p={4}>
                <HorizontalLogo maxW="3xs" />
              </Box>
            </DrawerHeader>
            <DrawerBody
              as={VStack}
              fontSize="lg"
              fontWeight="bold"
              justify="center"
              p={8}
              spacing={4}
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
            <DrawerFooter justifyContent="center">
              <Button onClick={copyEmail} variant="outline">
                {siteConfig.email}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <IconButton
        aria-label="Open sidebar"
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
