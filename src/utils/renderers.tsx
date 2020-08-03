import * as React from "react";

import {
  Box,
  BoxProps,
  Code,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/core";

import Link from "@/components/link";

type RendererRecord = {
  [nodeType: string]: React.ElementType<any>;
};

// https://github.com/rexxars/react-markdown/issues/404#issuecomment-604019030
const slugifyChildren = (children: React.ReactNode) => {
  const flatten = (text: string, child: any) => {
    return typeof child === "string"
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text);
  };

  const arrayChildren = React.Children.toArray(children);
  const text = arrayChildren.reduce(flatten, "");
  const slug = text.toLowerCase().replace(/\W/g, "-");

  return slug;
};

export const renderer: RendererRecord = {
  blockquote: (props) => (
    <Box
      borderLeftColor="gray.500"
      borderLeftWidth={2}
      color="gray.500"
      pl={4}
      py={2}
      {...props}
    />
  ),

  code: ({ language, value }) => (
    <Box overflow="auto" pb={4}>
      <Code p={2} w="full">
        <pre>{value}</pre>
      </Code>
    </Box>
  ),

  heading: ({ level, children, ...props }) => {
    const slug = slugifyChildren(children);

    const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
    return (
      <Heading
        as={`h${level}`}
        letterSpacing="tight"
        lineHeight="none"
        size={sizes[level - 1]}
        id={slug}
        {...props}
      >
        {children}
      </Heading>
    );
  },

  html: (props) => {
    const htmlProps: BoxProps = {
      dangerouslySetInnerHTML: { __html: props.value },
      pb: 8,

      ...(/<\/iframe>/.test(props.value) ? { mx: "auto" } : {}),
    };

    return <Box {...htmlProps} />;
  },

  image: (props) => {
    return (
      <React.Fragment>
        <Box pb={4}>
          <Image borderRadius={4} mx="auto" maxW="2xl" w="100%" {...props} />
        </Box>
        <Box fontSize="sm" textAlign="center">
          {props.alt}
        </Box>
      </React.Fragment>
    );
  },

  inlineCode: (props) => <Code display="inline" p={1} {...props} />,

  link: (props) => <Link b i {...props} />,

  list: (props) => <List styleType="disc" {...props} />,

  listItem: (props) => <ListItem pl={4} {...props} />,

  paragraph: (props) => <Box as="p" display="inline" {...props} />,

  root: (props) => (
    <Stack lineHeight="tall" spacing={4} wordBreak="break-word" {...props} />
  ),

  table: (props) => (
    <Box overflow="auto">
      <Box as="table" {...props} />
    </Box>
  ),

  tableHead: (props) => <Box as="thead" fontWeight="bold" {...props} />,

  tableBody: (props) => <Box as="tbody" {...props} />,

  tableRow: (props) => <Box as="tr" {...props} />,

  tableCell: (props) => <Box as="td" borderWidth={1} p={2} {...props} />,

  thematicBreak: () => (
    <Box maxW="xs" mx="auto" pb={8} px={8} w="full">
      <Divider />
    </Box>
  ),
};
