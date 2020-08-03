import * as React from "react";

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/core";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { UrlObject } from "url";

type BaseLinkComponentProps = ChakraLinkProps;

interface LinkProps extends BaseLinkComponentProps {
  b?: boolean;
  i?: boolean;
  isNextLink?: boolean;
  linkAs?: string | UrlObject;
  nextProps?: Omit<NextLinkProps, "as">;
}

const Link: React.FC<LinkProps> = ({
  href,
  isNextLink,
  linkAs,
  nextProps,
  children,
  ...props
}) => {
  const mergedProps: ChakraLinkProps = {
    ...props,
    ...(props.b ? { fontWeight: "semibold" } : {}),
    ...(props.i ? { color: "green.700" } : {}),
    children: children || href.replace(/^https?:(\/\/)?/g, ""),
  };

  if (isNextLink) {
    return (
      <NextLink href={href} as={linkAs || href} passHref {...nextProps}>
        <ChakraLink {...mergedProps}>{children}</ChakraLink>
      </NextLink>
    );
  }

  return (
    <ChakraLink href={href} {...mergedProps}>
      {children}
    </ChakraLink>
  );
};

export default Link;
