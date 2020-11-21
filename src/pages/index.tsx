import * as React from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Icon,
  LightMode,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useBreakpointValue,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import type { EventCollection, Sponsor } from "@/types";
import { FaArrowRight, FaDiscord, FaTwitch, FaTwitter } from "react-icons/fa";
import type { GetStaticProps, NextPage } from "next";

import { EventCard } from "@/components/event-card";
import { HorizontalLogo } from "@/components/logo";
import type { IconType } from "react-icons/lib";
import NextLink from "next/link";
import { SponsorCard } from "@/components/sponsor-card";
import { contentful } from "@/cms";
import i18n from "@/i18n";
import siteConfig from "site-config";

const HOME_SOCIAL_BUTTONS: [string, string, IconType, string][] = [
  ["Discord", siteConfig.socials.Discord, FaDiscord, "blue"],
  ["Twitch", siteConfig.socials.Twitch, FaTwitch, "purple"],
  ["Twitter", siteConfig.socials.Twitter, FaTwitter, "twitter"],
];

interface HomePageProps {
  locale: string;
  recentEvents: EventCollection["items"];
  sponsors: Record<string, Sponsor[]>;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (args) => {
  const { locale } = args;

  const data = await contentful().request(
    /* GraphQL */ `
      query HomePageQuery($locale: String!) {
        eventCollection(limit: 5, locale: $locale, order: startingDate_DESC) {
          items {
            poster {
              url
            }
            title
            slug
            description
            category
            startingDate
            sessionsCollection {
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
        sponsorCollection(order: name_ASC) {
          items {
            name
            category
            url
            activeSponsor
            logo {
              url
            }
            sys {
              id
            }
          }
        }
      }
    `,
    {
      locale: i18n["i18n-code"][locale],
    },
  );

  const sponsors: Record<string, Sponsor[]> = {
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
      locale,
      recentEvents: data.eventCollection.items,
      sponsors,
    },
  };
};

const HomePage: NextPage<HomePageProps> = (props) => {
  const { locale, recentEvents, sponsors } = props;

  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);

  const [lightColor, darkColor] = useToken("colors", [
    "gator.200",
    "gator.800",
  ]);

  const bgColor = useColorModeValue(lightColor, darkColor);

  return (
    <>
      <Container as="section" maxW="6xl" pt={[4, 8]} px={[4, 8]}>
        <Stack spacing={[4, 8]}>
          <HorizontalLogo maxW={["3xs", "2xs", "xs", "sm"]} w="full" />

          <Text variant="home-title">{i18n["home-title"][locale]}</Text>
          <Text variant="home-subtitle">{i18n["home-subtitle"][locale]}</Text>

          <LightMode>
            <ButtonGroup spacing={4}>
              {HOME_SOCIAL_BUTTONS.map(([name, href, AsIcon, colorScheme]) => (
                <Button
                  as="a"
                  colorScheme={colorScheme}
                  _hover={{
                    boxShadow: "xl",
                    transform: "rotate(2deg) scale(1.1) translateY(-4px)",
                  }}
                  href={href}
                  key={name}
                  leftIcon={<Icon as={AsIcon} boxSize={[4, 5, 6]} />}
                  size={buttonSize}
                  target="_blank"
                  transition="all 250ms"
                >
                  {name}
                </Button>
              ))}
            </ButtonGroup>
          </LightMode>
        </Stack>
      </Container>

      <Box as="svg" pos="relative" viewBox="0 0 1440 240" zIndex={-1}>
        <path
          d="M0,192L48,170.7C96,149,192,107,288,90.7C384,75,480,85,576,106.7C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill={bgColor}
          fillOpacity={1}
        />
      </Box>

      <Box as="section" bgColor={bgColor}>
        <Container as={VStack} maxW="6xl" px={[4, 8]} spacing={[8, 12]}>
          <VStack spacing={[2, 4]} textAlign="center">
            <Heading as="h2">{i18n["home-revents-title"][locale]}</Heading>
            <Text>{i18n["home-revents-subtitle"][locale]}</Text>
          </VStack>
          <Wrap align="stretch" justify="center" spacing={4}>
            {recentEvents.map((event) => (
              <WrapItem key={event.slug}>
                <EventCard
                  as="a"
                  event={event}
                  // @ts-expect-error there is href
                  href={event.url}
                  key={event.slug}
                  target="_blank"
                  withUrl
                />
              </WrapItem>
            ))}
          </Wrap>
          <Box>
            <NextLink href="/events" passHref>
              <Button as="a" rightIcon={<Icon as={FaArrowRight} />}>
                {i18n["home-revents-more"][locale]}
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>

      <Box as="svg" pos="relative" viewBox="0 120 1440 200" zIndex={-1}>
        <path
          d="M0,256L48,256C96,256,192,256,288,261.3C384,267,480,277,576,272C672,267,768,245,864,213.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill={bgColor}
          fillOpacity={1}
        />
      </Box>

      <Container as="section" maxW="6xl" p={[4, 8]}>
        <VStack spacing={[4, 8]}>
          <VStack spacing={[2, 4]} textAlign="center">
            <Heading as="h2">{i18n["home-saps-title"][locale]}</Heading>
            <Text>{i18n["home-saps-subtitle"][locale]}</Text>
          </VStack>
          {Object.entries(sponsors).map(([category, list]) => (
            <React.Fragment key={category}>
              <Heading as="h3" size="md">
                {category}
              </Heading>
              <Wrap justify="center" spacing={[4, 8]}>
                {list.map((sponsor) => (
                  <WrapItem key={sponsor.sys.id}>
                    <SponsorCard sponsor={sponsor} />
                  </WrapItem>
                ))}
              </Wrap>
            </React.Fragment>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default HomePage;
