import type { GetStaticProps, NextPage } from "next";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import i18n from "@/i18n";
import { NextSeo } from "next-seo";

interface COCPageProps {
  locale: string;
}
export const getStaticProps: GetStaticProps<COCPageProps> = async (args) => {
  const { locale } = args;
  return {
    props: {
      locale,
    },
  };
};

const CodeOfConductPage: NextPage<COCPageProps> = (props) => {
  const { locale } = props;
  return (
    <>
      <NextSeo title={i18n["coc-title"][locale]} />
      <Container as="section" maxW="6xl" p={[4, 8]}>
        <VStack spacing={4} textAlign="center">
          <Heading>{i18n["coc-title"][locale]}</Heading>
        </VStack>
      </Container>
      <Container as="section" maxW="6xl" pt={[4, 8]} px={[4, 8]}>
        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={i18n["coc-page"][locale]}
          escapeHtml={false}
        />
      </Container>
    </>
  );
};

export default CodeOfConductPage;
