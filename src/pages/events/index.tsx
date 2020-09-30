/* eslint-disable react/no-array-index-key */

import * as React from "react";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/core";
import { formatDate, isLastEventFinished } from "@/utils";

import { Event } from "@/types";
import { GetStaticProps } from "next";
import Link from "@/components/link";
import { NextSeo } from "next-seo";
import { client } from "@/cms";
import siteConfig from "~/site-config";

interface EventsPageProps {
  events: Event[];
}

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  const data = await client.request(/* GraphQL */ `
    {
      eventCollection(order: startingDate_DESC) {
        items {
          poster {
            url(transform: { width: 800, height: 400, resizeStrategy: THUMB })
          }
          title
          slug
          description
          category
          startingDate
          sessionsCollection(limit: 20) {
            items {
              endDatetime
              speaker {
                avatar {
                  url(transform: { width: 400, height: 400 })
                }
                name
                employer
                showEmployer
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
  `);

  return {
    props: {
      events: data.eventCollection.items,
    },
    revalidate: 3600,
  };
};

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  return (
    <Box>
      <NextSeo
        title="Events"
        description="View current and past events. Get the latest updates on Discord, Telegram, and Twitter."
      />

      <Stack maxW="6xl" mx="auto" p={8}>
        <Heading letterSpacing="tight" textAlign="center">
          Meetups and Workshops
        </Heading>

        <Text textAlign="center">
          View current and past events. Get the latest updates on{" "}
          <Link b i href={siteConfig.socials.Discord} isExternal>
            Discord
          </Link>
          ,{" "}
          <Link b i href={siteConfig.socials.Telegram} isExternal>
            Telegram
          </Link>
          , and{" "}
          <Link b i href={siteConfig.socials.Twitter} isExternal>
            Twitter
          </Link>
          . Public API is available at{" "}
          <Link b i href="/api/events" isExternal />.
        </Text>

        <Flex
          flexWrap="wrap"
          alignItems="stretch"
          justifyContent="space-around"
        >
          {events.map((event, i) => (
            <Flex
              borderRadius="md"
              boxShadow="lg"
              flexDir="column"
              key={i}
              m={4}
              maxW="lg"
              overflow="auto"
            >
              <Image src={event.poster.url} alt={event.title} />
              <Stack flexGrow={1} p={4}>
                <Heading letterSpacing="tight" size="lg">
                  {event.title}
                </Heading>
                <Box>
                  {event.onlineEvent
                    ? `Online ${event.category} via`
                    : `Offline ${event.category} at`}{" "}
                  <Box as="span" fontWeight="semibold">
                    {event.location}
                  </Box>
                  , starting on{" "}
                  <Box as="span" fontWeight="semibold">
                    {formatDate(event.startingDate)}
                  </Box>
                </Box>
                <Box color="gray.500">{event.quota} seats</Box>

                <Divider />

                <Heading letterSpacing="tight" size="sm">
                  Description
                </Heading>
                <Box>{event.description}</Box>

                <Heading letterSpacing="tight" size="sm">
                  Speakers
                </Heading>
                <List styleType="disc">
                  {event.sessionsCollection.items
                    .slice(0, 5)
                    .map(({ speaker: s }, j) => (
                      <React.Fragment key={j}>
                        <ListItem>
                          {s.name}
                          {s.showEmployer && ` (${s.employer})`}
                        </ListItem>
                      </React.Fragment>
                    ))}
                  {event.sessionsCollection.items.length > 5 && (
                    <Box>
                      ...and {event.sessionsCollection.items.length - 5} more
                    </Box>
                  )}
                </List>

                {event.notes && (
                  <>
                    <Heading letterSpacing="tight" size="sm">
                      Notes
                    </Heading>
                    <Box>{event.notes}</Box>
                  </>
                )}

                <Box flexGrow={1} h={4} />

                <Flex
                  flexDir={{ default: "column", md: "row" }}
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link href={event.url} isExternal>
                    <Button as="span" variantColor="green">
                      Register event{" "}
                      {isLastEventFinished(event) && "(finished)"}
                    </Button>
                  </Link>
                  <Box size={2} />
                  <Link
                    href="/events/[slug]"
                    isNextLink
                    linkAs={`/events/${event.slug}`}
                  >
                    <Button as="span" variantColor="teal">
                      View details
                    </Button>
                  </Link>
                </Flex>
              </Stack>
            </Flex>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};

export default EventsPage;
