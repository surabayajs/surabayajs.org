import * as React from "react";

import i18n from "@/i18n";
import { Container, Heading, VStack } from "@chakra-ui/react";

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";

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
        <Heading as="h1" color="gray.400" size="lg" textAlign="center">
          Still on progress ...
        </Heading>
      </Container>
    </>
  );
};

export default CodeOfConductPage;
