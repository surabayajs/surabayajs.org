import * as React from "react";

import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import i18n from "@/i18n";
import { useRouter } from "next/router";

export const LocaleChanger: React.FC = () => {
  const router = useRouter();
  const { locale, replace, route } = router;

  function change(locale: string) {
    replace(route, route, { locale });
  }

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost">
        <span role="img">{i18n.flag[locale]}</span>
      </MenuButton>
      <MenuList>
        <MenuGroup title="Language/Bahasa">
          <MenuItem onClick={() => change("en")}>English</MenuItem>
          <MenuItem onClick={() => change("id")}>Bahasa Indonesia</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
