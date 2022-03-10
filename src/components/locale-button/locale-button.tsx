import * as React from "react";

import i18n from "@/i18n";

import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip } from "@chakra-ui/react";

export const LocaleButton: React.FC = () => {
  const locale = process.env.LOCALE;

  function change(_locale: string) {
    window.location.href = `https://${_locale}.surabayajs.org`;
  }

  return (
    <Menu>
      <Tooltip hasArrow label="Select language ✨">
        <MenuButton as={Button} variant="ghost">
          <span role="img">{i18n.flag[locale]}</span>
        </MenuButton>
      </Tooltip>

      <MenuList>
        <MenuGroup title="Language/Bahasa">
          <MenuItem onClick={() => change("en")}>English</MenuItem>
          <MenuItem onClick={() => change("id")}>Bahasa Indonesia</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
