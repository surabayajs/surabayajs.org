import * as React from "react";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";

import { EventCard } from "@/components/event-card";
import type { EventCollection } from "@/types";
import { NextSeo } from "next-seo";
import { contentful } from "@/cms";
import i18n from "@/i18n";

interface EventsPageProps {
  locale: string;
  events: EventCollection["items"];
}

export const getStaticProps: GetStaticProps<EventsPageProps> = async (args) => {
  const { locale } = args;

  const data = await contentful().request(
    /* GraphQL */ `
      query EventsPageQuery($locale: String!) {
        eventCollection(limit: 50, locale: $locale, order: startingDate_DESC) {
          items {
            poster {
              url
            }
            title
            slug
            description
            category
            startingDate
            sessionsCollection(limit: 50) {
              items {
                sys {
                  id
                }
                speaker {
                  avatar {
                    url
                  }
                  name
                }
              }
            }
            onlineEvent
            location
            url
            quota
            notes
          }
        }
      }
    `,
    {
      locale: i18n["i18n-code"][locale],
    },
  );

  return {
    props: {
      locale,
      events: data.eventCollection.items,
    },
  };
};

const EventsPage: NextPage<EventsPageProps> = ({ events, locale }) => {
  const [lightColor, darkColor] = useToken("colors", [
    "gator.200",
    "gator.800",
  ]);

  const bgColor = useColorModeValue(lightColor, darkColor);

  return (
    <>
      <NextSeo title={i18n["events-title"][locale]} />
      <Container as="section" maxW="6xl" p={[4, 8]}>
        <VStack spacing={4}>
          <Heading>{i18n["events-title"][locale]}</Heading>
          <Text pb={4}>{i18n["events-subtitle"][locale]}</Text>
        </VStack>
      </Container>

      <Container as="section" maxW="6xl" px={[4, 8]}>
        <Wrap align="stretch" justify="center" spacing={4}>
          {events.map((event) => (
            <WrapItem key={event.slug}>
              <EventCard
                as="a"
                boxShadow="md"
                event={event}
                // @ts-expect-error there is href
                href={event.url}
                target="_blank"
                withNotes
                withUrl
              />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </>
  );
};

export default EventsPage;
