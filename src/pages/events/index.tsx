import * as React from "react";

import { EventCard } from "@/components/event-card";
import i18n from "@/i18n";
import cms from "@/lib/cms";
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  useToken,
  VStack,
} from "@chakra-ui/react";

import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";

export async function getStaticProps(args: GetStaticPropsContext) {
  const locale = args.locale as string;

  const data = await cms().eventsPageQuery({
    locale: i18n["i18n-code"][locale] as string,
  });

  return {
    props: {
      locale,
      events: data.eventCollection?.items,
    },
  };
}

const EventsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const { events, locale } = props;

  const [lightColor, darkColor] = useToken("colors", [
    "gator.200",
    "gator.800",
  ]) as [string, string];

  const bgColor = useColorModeValue(lightColor, darkColor);

  return (
    <>
      <NextSeo title={i18n["events-title"][locale] as string} />
      <Container as="section" maxW="6xl" p={[4, 8]}>
        <VStack spacing={4} textAlign="center">
          <Heading>{i18n["events-title"][locale]}</Heading>
          <Text pb={4}>{i18n["events-subtitle"][locale]}</Text>
        </VStack>
      </Container>

      <Container as="section" maxW="6xl" px={[4, 8]}>
        <VStack spacing={[2, 4]}>
          {events?.map(
            (event) =>
              event && <EventCard key={event.slug} event={event} withNotes />,
          )}
        </VStack>
      </Container>

      <Box insetX={0} pos="absolute" top={0} zIndex={-1}>
        <Box as="svg" viewBox="0 0 1440 240">
          <path
            d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,165.3C672,149,768,139,864,144C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill={bgColor}
            fillOpacity={1}
          />
        </Box>
        <Box bgColor={bgColor} h="100vmax" />
        <Box as="svg" viewBox="0 0 1440 200">
          <path
            d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,122.7C672,149,768,171,864,181.3C960,192,1056,192,1152,192C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill={bgColor}
            fillOpacity={1}
          />
        </Box>
      </Box>
    </>
  );
};

export default EventsPage;
