import * as React from "react";

import { Tooltip, TooltipProps } from "@chakra-ui/react";

export const EmailTooltip: React.FC<TooltipProps> = (props) => {
  return (
    <Tooltip
      aria-label="Email address"
      hasArrow
      label="Click to copy email address 📮"
      {...props}
    />
  );
};
