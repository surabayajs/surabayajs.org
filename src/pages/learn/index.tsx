import * as React from "react";

import { Container, VStack, Text, Heading } from "@chakra-ui/react";
import { LearningCard } from "@/components/learning-card";

import { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import i18n from "@/i18n";

interface LearnPageProps {
  locale: string;
}

export const getStaticProps: GetStaticProps<LearnPageProps> = async (args) => {
  const { locale } = args;
  return {
    props: {
      locale,
    },
  };
};

const LearnPage: NextPage<LearnPageProps> = ({ locale }) => {
  return (
    <>
      <NextSeo title={i18n["learn-title"][locale]} />
      <Container as="section">
        <VStack spacing={4} textAlign="center">
          <Heading>{i18n["learn-title"][locale]}</Heading>
          <Text pb={4}>{i18n["learn-subtitle"][locale]}</Text>
        </VStack>
      </Container>
      <Container as="section" maxW="6xl" px={[4, 8]}>
        <VStack spacing={[2, 4]}>
          {[1, 2, 3, 4].map((el) => {
            return <LearningCard key={el} />;
          })}
        </VStack>
      </Container>
    </>
  );
};

export default LearnPage;
