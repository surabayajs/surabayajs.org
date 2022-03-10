import * as React from "react";

import { EventCard } from "@/components/event-card";
import { HorizontalLogo } from "@/components/logo";
import { SponsorCard } from "@/components/sponsor-card";
import siteConfig from "@/config/site";
import { Maybe, SponsorMetadataFragment } from "@/generated/graphql";
import i18n from "@/i18n";
import cms from "@/lib/cms";

import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Icon,
  LightMode,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToken,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import NextLink from "next/link";
import { FaArrowRight, FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const HOME_SOCIAL_BUTTONS: [string, string, IconType, string][] = [
  ["Discord", siteConfig.socials.Discord, FaDiscord, "blue"],
  ["Twitch", siteConfig.socials.Twitch, FaTwitch, "purple"],
  ["Twitter", siteConfig.socials.Twitter, FaTwitter, "twitter"],
  ["Youtube", siteConfig.socials.Youtube, FaYoutube, "red"],
];

export async function getStaticProps(args: GetStaticPropsContext) {
  const locale = args.locale as string;

  const data = await cms().homePageQuery({
    locale: i18n["i18n-code"][locale] as string,
  });

  const sponsors: Record<string, Maybe<SponsorMetadataFragment>[]> = {
    Sponsor: [],
    "Media Partner": [],
    "Community Partner": [],
  };

  data.sponsorCollection?.items.forEach((sponsor) => {
    const category = sponsor?.category as string;

    if (sponsors[category]) {
      sponsors[category].push(sponsor);
    } else {
      sponsors[category] = [sponsor];
    }
  });

  return {
    props: {
      locale,
      recentEvents: data.eventCollection?.items,
      sponsors,
    },
    revalidate: 86400,
  };
}

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { locale, recentEvents, sponsors } = props;

  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);

  const [lightColor, darkColor] = useToken("colors", ["gator.200", "gator.800"]) as [string, string];

  const bgColor = useColorModeValue(lightColor, darkColor);

  return (
    <>
      <Container as="section" maxW="6xl" pt={[4, 8]} px={[4, 8]}>
        <Stack spacing={[4, 8]}>
          <HorizontalLogo maxW={["3xs", "2xs", "xs", "sm"]} w="full" />

          <Text variant="home-title">{i18n["home-title"][locale]}</Text>
          <Text variant="home-subtitle">{i18n["home-subtitle"][locale]}</Text>

          <LightMode>
            <Grid
              gap={{ base: 3, lg: 6 }}
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              width={{ base: "100%", lg: "60%" }}
            >
              {HOME_SOCIAL_BUTTONS.map(([name, href, AsIcon, colorScheme]) => (
                <Button
                  key={name}
                  as="a"
                  colorScheme={colorScheme}
                  href={href}
                  leftIcon={<Icon as={AsIcon} boxSize={[4, 5, 6]} />}
                  size={buttonSize}
                  target="_blank"
                >
                  {name}
                </Button>
              ))}
            </Grid>
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
          <VStack spacing={[2, 4]}>
            {recentEvents?.map((event) => event && <EventCard key={event.slug} event={event} />)}
          </VStack>
          <Box>
            <NextLink href="/events" passHref>
              <Button as="a" colorScheme="green" rightIcon={<Icon as={FaArrowRight} />}>
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
                {list.map(
                  (sponsor) =>
                    sponsor && (
                      <WrapItem key={sponsor.sys.id}>
                        <SponsorCard sponsor={sponsor} />
                      </WrapItem>
                    ),
                )}
              </Wrap>
            </React.Fragment>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default HomePage;
