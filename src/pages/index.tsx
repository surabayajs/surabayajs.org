import * as React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/core";
import { Event, Sponsor } from "@/types";
import { formatDate, isLastEventFinished } from "@/utils";

import DiscordEmbed from "@/components/home/discord-embed";
import { GetStaticProps } from "next";
import Link from "@/components/link";
import { NextSeo } from "next-seo";
import Socials from "@/components/socials";
import Sponsors from "@/components/home/sponsors";
import { client } from "@/cms";
import siteConfig from "~/site-config";

interface HomePageProps {
  event: Event;
  heroImage: string;
  logoImage: string;
  sponsors: Record<string, Sponsor[]>;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const data = await client.request(/* GraphQL */ `
    {
      eventCollection(limit: 1, order: startingDate_DESC) {
        items {
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
                  url(transform: { width: 140, height: 140 })
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
        }
      }
      sponsorCollection(order: name_ASC) {
        items {
          name
          category
          url
          activeSponsor
          logo {
            url(transform: { width: 140, height: 140 })
          }
        }
      }
      hero: asset(id: "73xA9AzNoQnntkE3E3XQf6") {
        url
      }
      logo: asset(id: "67IUjR8eXwpHLJ66GvWoyC") {
        url
      }
    }
  `);

  let sponsors: Record<string, Sponsor[]> = {
    Sponsor: [],
    "Media Partner": [],
    "Community Partner": [],
  };

  (data.sponsorCollection.items as Sponsor[]).forEach((sponsor) => {
    if (sponsors[sponsor.category]) {
      sponsors[sponsor.category].push(sponsor);
    } else {
      sponsors[sponsor.category] = [sponsor];
    }
  });

  return {
    props: {
      event: data.eventCollection.items[0],
      heroImage: data.hero.url,
      logoImage: data.logo.url,
      sponsors,
    },
    revalidate: 60,
  };
};

const HomePage: React.FC<HomePageProps> = ({
  event,
  heroImage,
  logoImage,
  sponsors,
}) => (
  <Box>
    <NextSeo title={siteConfig.title} titleTemplate="%s" />

    <Image src={heroImage} display="none" />

    <Box
      backgroundImage={`url("${heroImage}")`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Stack
        maxW="6xl"
        mx="auto"
        px={8}
        py={{ default: 8, md: 24 }}
        spacing={8}
        textAlign={{ default: "center", md: "initial" }}
      >
        <Stack color="white">
          <Image
            src={logoImage}
            alt={siteConfig.title}
            maxW="md"
            mx={{ default: "auto", md: "initial" }}
            pb={4}
            w="full"
          />

          <Heading fontWeight="regular" lineHeight="short" size="lg">
            {siteConfig.description}
          </Heading>
        </Stack>

        <Stack color="white">
          <Flex alignItems="center" flexDir={{ default: "column", md: "row" }}>
            <AvatarGroup max={3} size="lg">
              {event.sessionsCollection.items.map(({ speaker }, i) => (
                <Avatar key={i} name={speaker.name} src={speaker.avatar.url} />
              ))}
            </AvatarGroup>

            <Box size={4} />

            <Stack>
              <Heading letterSpacing="tight" size="lg">
                {event.title}
              </Heading>

              <Box>
                Presented by{" "}
                {event.sessionsCollection.items
                  .slice(0, 3)
                  .map(({ speaker: s }, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && ", "}
                      <Box as="span" fontWeight="semibold">
                        {s.name}
                      </Box>
                      {s.showEmployer && ` (${s.employer})`}
                    </React.Fragment>
                  ))}
                {event.sessionsCollection.items.length > 3 && (
                  <>, and {event.sessionsCollection.items.length - 3} more</>
                )}
              </Box>

              <Box>
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
            </Stack>
          </Flex>
        </Stack>

        <Flex
          flexDir={{ default: "column", md: "row" }}
          flexWrap="wrap"
          mx={{ default: "auto", md: "initial" }}
          pb={8}
        >
          <Link href={event.url} isExternal>
            <Button as="span" variantColor="green" w="100%">
              {isLastEventFinished(event) ? "View " : "Register on "}
              event page
            </Button>
          </Link>
          <Box size={2} />
          <Link
            href="/events/[slug]"
            linkAs={`/events/${event.slug}`}
            isNextLink
          >
            <Button as="span" variantColor="teal" w="100%">
              More information
            </Button>
          </Link>
        </Flex>

        <Socials />
      </Stack>
    </Box>

    <Flex
      alignItems="center"
      flexDir={{ default: "column", md: "row" }}
      justifyContent="space-between"
      maxW="6xl"
      mx="auto"
      px={8}
      py={{ default: 8, md: 24 }}
      textAlign={{ default: "center", md: "initial" }}
    >
      <Stack fontSize="md" maxW="xl" spacing={4}>
        <Heading letterSpacing="tight" lineHeight="none">
          Hangout with us, digitally.
        </Heading>
        <Text>
          Hanging out isn't always meeting in real life on events. With the era
          of internet and digital communities, everyone can hang out anywhere
          and anytime.
        </Text>
        <Text>Join our official Discord and Telegram community!</Text>
        <Flex
          flexDir={{ default: "column", md: "row" }}
          flexWrap="wrap"
          mx={{ default: "auto", md: "initial" }}
        >
          <Link href={siteConfig.socials["Discord"]} isExternal>
            <Button as="span" variantColor="blue" w="100%">
              Join Discord server
            </Button>
          </Link>
          <Box size={2} />
          <Link href={siteConfig.socials["Telegram"]} isExternal>
            <Button as="span" variantColor="cyan" w="100%">
              Join Telegram group
            </Button>
          </Link>
        </Flex>
      </Stack>

      <Box size={8} />

      <DiscordEmbed />
    </Flex>

    <Sponsors sponsors={sponsors} />
  </Box>
);

export default HomePage;
