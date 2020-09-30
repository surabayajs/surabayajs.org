/* eslint-disable import/prefer-default-export */

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
  blockquote: function MdBlockquote(props) {
    return (
      <Box
        borderLeftColor="gray.500"
        borderLeftWidth={2}
        color="gray.500"
        pl={4}
        py={2}
        {...props}
      />
    );
  },

  code: function MdCode({ value }) {
    return (
      <Box overflow="auto" pb={4}>
        <Code p={2} w="full">
          <pre>{value}</pre>
        </Code>
      </Box>
    );
  },

  heading: function MdHeading({ level, children, ...props }) {
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

  html: function MdHtml(props) {
    const { value } = props;

    const htmlProps: BoxProps = {
      dangerouslySetInnerHTML: { __html: value },
      pb: 8,

      ...(/<\/iframe>/.test(value) ? { mx: "auto" } : {}),
    };

    return <Box {...htmlProps} />;
  },

  image: function MdImage(props) {
    const { alt } = props;
    return (
      <>
        <Box pb={4}>
          <Image borderRadius={4} mx="auto" maxW="2xl" w="100%" {...props} />
        </Box>
        <Box fontSize="sm" textAlign="center">
          {alt}
        </Box>
      </>
    );
  },

  inlineCode: function MdInlineCode({ inline: _, ...props }) {
    return <Code display="inline" p={1} {...props} />;
  },

  link: function MdLink(props) {
    return <Link b i {...props} />;
  },

  list: function MdList(props) {
    return <List styleType="disc" {...props} />;
  },

  listItem: function MdListitem(props) {
    return <ListItem pl={4} {...props} />;
  },

  paragraph: function MdParagraph(props) {
    return <Box as="p" display="inline" {...props} />;
  },

  root: function MdWrapper(props) {
    return (
      <Stack lineHeight="tall" spacing={4} wordBreak="break-word" {...props} />
    );
  },

  table: function MdTable(props) {
    return (
      <Box overflow="auto">
        <Box as="table" {...props} />
      </Box>
    );
  },

  tableHead: function MdTableHead(props) {
    return <Box as="thead" fontWeight="bold" {...props} />;
  },

  tableBody: function MdTableBody(props) {
    return <Box as="tbody" {...props} />;
  },

  tableRow: function MdTableRow(props) {
    return <Box as="tr" {...props} />;
  },

  tableCell: function MdTableCell(props) {
    return <Box as="td" borderWidth={1} p={2} {...props} />;
  },

  thematicBreak: function MdThematicBreak() {
    return (
      <Box maxW="xs" mx="auto" pb={8} px={8} w="full">
        <Divider />
      </Box>
    );
  },
};
