import * as React from "react";

import { Box, List } from "@chakra-ui/react";

type RendererRecord = {
  [nodeType: string]: React.ElementType<any>;
};

export const contentRenderer: RendererRecord = {
  // eslint-disable-next-line react/display-name
  blockquote: (props): JSX.Element => (
    <Box
      borderLeftColor="gray.200"
      borderLeftWidth={2}
      color="gray.500"
      pl={4}
      py={2}
      {...props}
    />
  ),
  // eslint-disable-next-line react/display-name
  li: (props) => <List listStylePos="inside" {...props} pl={10} />,
};
