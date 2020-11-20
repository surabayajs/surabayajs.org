import * as React from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Heading,
  Icon,
  IconButton,
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
import {
  FaArrowRight,
  FaCalendarAlt,
  FaDiscord,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import type { GetStaticProps, NextPage } from "next";

import { EventCard } from "@/components/event-card";
import type { EventCollection } from "@/types";
import { HorizontalLogo } from "@/components/logo";
import type { IconType } from "react-icons/lib";
import NextLink from "next/link";
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
      }
    `,
    {
      locale: i18n["i18n-code"][locale],
    },
  );

  return {
    props: {
      locale,
      recentEvents: data.eventCollection.items,
    },
  };
};

const HomePage: NextPage<HomePageProps> = (props) => {
  const { locale, recentEvents } = props;

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
                  href={href}
                  key={name}
                  leftIcon={<Icon as={AsIcon} boxSize={[4, 5, 6]} />}
                  size={buttonSize}
                  target="_blank"
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
          <HStack align="center" justify="center" spacing={[4, 8]}>
            <Box>
              <NextLink href="/events" passHref>
                <IconButton
                  as="a"
                  aria-label={i18n["home-revents-title"][locale]}
                  borderRadius="full"
                  boxShadow="md"
                  boxSize={[10, 20]}
                  icon={
                    <Icon
                      as={FaCalendarAlt}
                      boxSize={[4, 8]}
                      transform="rotate(-8deg)"
                    />
                  }
                />
              </NextLink>
            </Box>
            <Stack spacing={[2, 4]}>
              <Heading as="h2">{i18n["home-revents-title"][locale]}</Heading>
              <Text>{i18n["home-revents-subtitle"][locale]}</Text>
            </Stack>
          </HStack>
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
    </>
  );
};

export default HomePage;
