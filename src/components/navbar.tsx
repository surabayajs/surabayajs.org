import * as React from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";

import { FaBars } from "react-icons/fa";
import Link from "@/components/link";
import routes from "@/routes";
import siteConfig from "~/site-config";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname == "/";

  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();

  const padding = 4;

  return (
    <Box backgroundColor="green.700">
      <Flex as="nav" color="white" maxW="6xl" mx="auto">
        <Box flexGrow={1} py={padding}>
          {!isHome && (
            <Link fontWeight="bold" href="/" isNextLink p={padding}>
              {siteConfig.title}
            </Link>
          )}
        </Box>

        <Box display={{ default: "none", md: "block" }} py={padding}>
          {routes.map(([text, href], i) => (
            <Link href={href} isNextLink key={i} p={padding}>
              {text}
            </Link>
          ))}
        </Box>

        <Box
          as="button"
          display={{ md: "none" }}
          onClick={onToggle}
          p={padding}
          ref={btnRef}
        >
          <Box as={FaBars} size="18px" />
        </Box>
      </Flex>

      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="green.700" color="white">
          <DrawerHeader />
          <DrawerBody>
            <Stack spacing={padding / 2}>
              {routes.map(([text, href], i) => (
                <Link href={href} isNextLink key={i} p={padding / 2}>
                  {text}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
