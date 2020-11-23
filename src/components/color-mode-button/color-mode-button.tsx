import * as React from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { Icon, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";

export const ColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip hasArrow label={`Toggle ${colorMode} mode (shift+d) 🌓`}>
      <IconButton
        aria-label={`Toggle ${colorMode} mode 🌓`}
        icon={<Icon as={colorMode === "dark" ? FaSun : FaMoon} />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Tooltip>
  );
};
