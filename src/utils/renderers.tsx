import * as React from "react";

import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

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
  li: (props) => {
    return (
      <UnorderedList>
        <ListItem {...props} />
      </UnorderedList>
    );
  },

  // eslint-disable-next-line react/display-name
  h1: (props) => (
    <Box>
      <Heading {...props} as="h1" size="xl" />
      <Divider mb="4" mt="2" />
    </Box>
  ),

  // eslint-disable-next-line react/display-name
  a: (props) => <Link {...props} color="blue.400" isExternal />,
};
