import * as React from "react";

import { Box, Divider, Stack } from "@chakra-ui/core";

import { GetStaticProps } from "next";
import Link from "@/components/link";
import Markdown from "react-markdown";
import { NextSeo } from "next-seo";
import { renderer } from "@/utils/renderers";

interface COCPageProps {
  md: string;
}

export const getStaticProps: GetStaticProps<COCPageProps> = async () => {
  const url = "https://link.surabayajs.org/cocraw";
  return {
    props: {
      md: await fetch(url).then((res) => res.text()),
    },
    revalidate: 86400,
  };
};

const COCPage: React.FC<COCPageProps> = ({ md }) => (
  <Box>
    <NextSeo title="Code of Conduct" />

    <Stack maxW="6xl" mx="auto" p={8} shouldWrapChildren spacing={4}>
      <Markdown source={md} escapeHtml={false} renderers={renderer} />

      <Divider />

      <Link href="https://link.surabayajs.org/cocgh" i isExternal>
        Edit on GitHub
      </Link>
    </Stack>
  </Box>
);

export default COCPage;
