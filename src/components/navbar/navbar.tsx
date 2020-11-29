import * as React from "react";

import { NavbarDesktop } from "@/components/navbar/navbar-desktop";
import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import { useBreakpointValue } from "@chakra-ui/react";

export const Navbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return <NavbarMobile />;
  }

  return <NavbarDesktop />;
};
