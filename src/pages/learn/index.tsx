/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as React from "react";

import { LearningCard } from "@/components/learning-card";
import i18n from "@/i18n";
import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

interface LearnPageProps {
  locale: string;
}

interface StateProperties {
  title: string;
  description: string;
  url: string;
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
  const [category, setCategory] = React.useState("repository");
  const [resources, setResources] = React.useState<StateProperties[]>([]);

  const categories = [
    {
      id: "repository",
      text: "Repository",
      url: "https://raw.githubusercontent.com/surabayajs/learning-resources/master/repositories.json",
    },
    {
      id: "video-course",
      text: "Video course",
      url: "https://raw.githubusercontent.com/surabayajs/learning-resources/master/video-courses.json",
    },
  ];

  const fetchData = (url): void => {
    fetch(url)
      .then((records) => records.json())
      .then((results) => setResources(results));
  };

  React.useEffect(() => {
    const categoryData = categories.find((cat) => cat.id === category);
    if (categoryData) {
      fetchData(categoryData.url);
    }
  }, [category]);

  return (
    <>
      <NextSeo title={i18n["learn-title"][locale]} />
      <Container as="section">
        <VStack spacing={4} textAlign="center">
          <Heading>{i18n["learn-title"][locale]}</Heading>
          <Text pb={4}>{i18n["learn-subtitle"][locale]}</Text>
        </VStack>
      </Container>
      <Container as="section" maxW="6xl" pb="4" px={[4, 8]}>
        <Stack
          align="center"
          borderBottom="1px gray solid"
          direction="row"
          py={[8, 4]}
        >
          {categories.map((cat, idx) => (
            <Button
              key={idx}
              onClick={() => setCategory(cat.id)}
              variant={cat.id === category ? "solid" : "ghost"}
            >
              {cat.text}
            </Button>
          ))}
        </Stack>
      </Container>
      <Container as="section" maxW="6xl" px={[4, 8]}>
        <VStack spacing={[2, 4]}>
          {resources.map((el, idx) => {
            return <LearningCard key={idx} data={el} />;
          })}
        </VStack>
      </Container>
    </>
  );
};

export default LearnPage;
