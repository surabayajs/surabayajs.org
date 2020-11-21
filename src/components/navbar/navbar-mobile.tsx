import * as React from "react";

import {
  Button,
  Container,
  Divider,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

import { LocaleChanger } from "@/components/navbar/locale-changer";
import routes from "@/routes";
import { useRouter } from "next/router";

export const NavbarMobile: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();
  const { locale, asPath } = router;

  return (
    <Container as={Stack} maxW="6xl" py={4} spacing={4}>
      <HStack>
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<Icon as={FaBars} />}
            variant="ghost"
          >
            {routes(locale)[asPath]?.name}
          </MenuButton>
          <MenuList>
            {Object.entries(routes(locale)).map(
              ([href, { name, ext = false }]) => (
                <MenuItem
                  fontWeight="bold"
                  key={name}
                  onClick={() =>
                    ext ? window.open(href, "_blank") : router.push(href)
                  }
                >
                  {name}
                </MenuItem>
              ),
            )}
          </MenuList>
        </Menu>

        <Spacer />

        <IconButton
          aria-label={`Toggle ${colorMode} mode 🌓`}
          icon={<Icon as={colorMode === "dark" ? FaSun : FaMoon} />}
          onClick={toggleColorMode}
          variant="ghost"
        />

        <LocaleChanger />
      </HStack>

      <Divider />
    </Container>
  );
};
