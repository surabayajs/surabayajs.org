import * as React from "react";

import { Link as ChakraLink } from "@chakra-ui/core";
import type { LinkProps as ChakraLinkProps } from "@chakra-ui/core";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends ChakraLinkProps {
  b?: boolean;
  i?: boolean;
  isNextLink?: boolean;
  nextProps?: Omit<NextLinkProps, "as">;
}

const Link: React.FC<LinkProps> = ({
  isNextLink,
  nextProps,
  children,
  ...props
}) => {
  const { b, i, href } = props;

  const mergedProps: ChakraLinkProps = {
    ...props,
    ...(b ? { fontWeight: "semibold" } : {}),
    ...(i ? { color: "green.700" } : {}),
    children: children || href.replace(/^https?:(\/\/)?/g, ""),
  };

  const content = <ChakraLink href={href} {...mergedProps} />;

  if (isNextLink) {
    return (
      <NextLink href={href} {...nextProps}>
        {content}
      </NextLink>
    );
  }

  return content;
};

export default Link;
