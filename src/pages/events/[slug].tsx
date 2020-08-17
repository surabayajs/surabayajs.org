import * as React from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import { formatDate, formatDatetime, isLastEventFinished } from "@/utils";

import { Event } from "@/types";
import Link from "@/components/link";
import { NextSeo } from "next-seo";
import { client } from "@/cms";
import { useRouter } from "next/router";

interface EventPageProps {
  event: Event;
  ogUrl?: string;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const data = await client.request(/* GraphQL */ `
    {
      eventCollection(order: startingDate_DESC) {
        items {
          slug
        }
      }
    }
  `);
  const items = data.eventCollection.items as Event[];

  return {
    paths: items.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<EventPageProps> = async ({
  params,
}) => {
  const data = await client.request(/* GraphQL */ `
    {
      eventCollection(limit: 1, where: { slug: "${params.slug}" }) {
        items {
          poster {
            url(transform: { width: 600 })
            ogUrl: url(transform: { width: 800, height: 400, resizeStrategy: THUMB })
          }
          title
          slug
          description
          category
          startingDate
          sessionsCollection(limit: 20) {
            items {
              title
              speaker {
                avatar {
                  url(transform: { width: 400, height: 400 })
                }
                name
                jobTitle
                employer
                showEmployer
                url
              }
              startDatetime
              endDatetime
              deckUrl
            }
          }
          onlineEvent
          location
          url
          albumUrl
          quota
        }
      }
    }
  `);
  const event = data.eventCollection.items[0] ?? null;

  return {
    props: {
      event,
      ogUrl: event?.poster.ogUrl ?? null,
    },
    revalidate: 3600,
  };
};

const EventPage: React.FC<EventPageProps> = ({ event, ogUrl }) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!event) router.replace("/404");
  }, []);

  const Register = () => (
    <Link href={event.url} isExternal>
      <Button as="span" variantColor="green">
        Register event {isLastEventFinished(event) && "(finished)"}
      </Button>
    </Link>
  );

  return event ? (
    <Box>
      <NextSeo
        title={event.title}
        description={event.description}
        openGraph={{
          title: event.title,
          description: event.description,
          images: [{ url: ogUrl }],
        }}
      />

      <Stack
        alignItems="center"
        maxW="6xl"
        mx="auto"
        p={8}
        spacing={8}
        textAlign="center"
      >
        <Box borderRadius="md" boxShadow="md" overflow="auto">
          <Image src={event.poster.url} alt={event.title} />
        </Box>

        <Stack alignItems="center" shouldWrapChildren spacing={4}>
          <Heading letterSpacing="tight" size="lg">
            {event.title}
          </Heading>
          <Box fontSize="lg">
            {event.onlineEvent
              ? `Online ${event.category} via`
              : `Offline ${event.category} at`}{" "}
            <Box as="span" fontWeight="semibold">
              {event.location}
            </Box>
            , {event.quota} seats, starting on{" "}
            <Box as="span" fontWeight="semibold">
              {formatDate(event.startingDate)}
            </Box>
          </Box>

          <Flex flexDir={{ default: "column", md: "row" }}>
            <Register />
            {event.albumUrl && (
              <>
                <Box size={4} />
                <Link href={event.albumUrl} isExternal>
                  <Button as="span">View photo album</Button>
                </Link>
              </>
            )}
          </Flex>
        </Stack>

        <Box w="100%">
          <Divider />
        </Box>

        <Stack alignItems="center" spacing={4}>
          <Heading letterSpacing="tight" size="md">
            Description
          </Heading>
          <Box>{event.description}</Box>
        </Stack>

        <Heading letterSpacing="tight" size="md">
          Sessions
        </Heading>
        <Stack maxW="2xl" spacing={16}>
          {event.sessionsCollection.items.map((s, i) => (
            <Flex
              alignItems="center"
              flexDir={{ default: "column", md: "row" }}
              key={i}
            >
              <Avatar
                name={s.speaker.name}
                size="xl"
                src={s.speaker.avatar.url}
              />

              <Box size={8} />

              <Box textAlign={{ md: "left" }}>
                <Heading size="md">{s.title}</Heading>
                <Heading size="sm">{s.speaker.name}</Heading>
                <Box>
                  {s.speaker.jobTitle}
                  {s.speaker.showEmployer && ` at ${s.speaker.employer}`}
                </Box>
                <Box>{formatDatetime(s.startDatetime)}</Box>

                {(s.speaker.url || s.deckUrl) && (
                  <>
                    <Divider />
                    <Stack
                      isInline
                      justifyContent={{ default: "center", md: "initial" }}
                      spacing={4}
                    >
                      {s.speaker.url && (
                        <Link href={s.speaker.url} i isExternal>
                          View profile
                        </Link>
                      )}
                      {s.deckUrl && (
                        <Link href={s.deckUrl} i isExternal>
                          View deck
                        </Link>
                      )}
                    </Stack>
                  </>
                )}
              </Box>
            </Flex>
          ))}
        </Stack>

        {event.notes && (
          <>
            <Heading letterSpacing="tight" size="sm">
              Notes
            </Heading>
            <Box>{event.notes}</Box>
          </>
        )}

        <Register />
      </Stack>
    </Box>
  ) : null;
};

export default EventPage;
