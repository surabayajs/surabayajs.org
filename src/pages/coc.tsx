/* eslint-disable @babel/new-cap */

import * as React from "react";

import i18n from "@/i18n";
import { Container, Heading, VStack } from "@chakra-ui/react";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";

export async function getStaticProps(args: GetStaticPropsContext) {
  const locale = args.locale as string;
  return {
    props: {
      locale,
    },
  };
}

const CodeOfConductPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const { locale } = props;
  return (
    <>
      <NextSeo title={i18n["coc-title"][locale] as string} />
      <Container as="section" maxW="6xl" p={[4, 8]}>
        <VStack spacing={4} textAlign="center">
          <Heading>{i18n["coc-title"][locale]}</Heading>
        </VStack>
      </Container>
      <Container as="section" maxW="6xl" pt={[4, 8]} px={[4, 8]}>
        <ReactMarkdown
          // @ts-expect-error ignoring unused/deprecated api
          escapeHtml={false}
          renderers={ChakraUIRenderer()}
          source={i18n["coc-page"][locale] as string}
        />
      </Container>
    </>
  );
};

export default CodeOfConductPage;
