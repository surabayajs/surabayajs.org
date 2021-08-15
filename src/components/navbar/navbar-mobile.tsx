import * as React from "react";

import { ColorModeButton } from "@/components/color-mode-button";
import { LocaleButton } from "@/components/locale-button";
import routes from "@/routes";
import {
  Button,
  Container,
  Divider,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";

export const NavbarMobile: React.FC = () => {
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
            {routes(locale)[asPath].name ?? 404}
          </MenuButton>
          <MenuList>
            {Object.entries(routes(locale)).map(
              ([href, { name, ext = false }]) => (
                <MenuItem
                  key={name}
                  fontWeight="bold"
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

        <ColorModeButton />

        <LocaleButton />
      </HStack>

      <Divider />
    </Container>
  );
};
