/* eslint-disable import/prefer-default-export */

import * as React from "react";

import { CSSReset, ColorModeProvider, ThemeProvider } from "@chakra-ui/core";

import theme from "@/theme";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProviderProps {
  //
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
);
