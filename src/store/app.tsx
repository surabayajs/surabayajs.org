import * as React from "react";

import { CSSReset, ColorModeProvider, ThemeProvider } from "@chakra-ui/core";

import theme from "@/theme";

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
