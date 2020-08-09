import * as React from "react";

import { Box, Heading, List, ListItem, Stack, Text } from "@chakra-ui/core";

import Link from "@/components/link";
import { NextSeo } from "next-seo";
import siteConfig from "~/site-config";

const ContactPage: React.FC = () => (
  <Box>
    <NextSeo title="Contact" />

    <Stack maxW="6xl" mx="auto" p={8} spacing={4}>
      <Heading letterSpacing="tight">Get in touch with us</Heading>
      <Text maxW="2xl">
        Have any questions related to our community? Want to speak at our
        meetups? Or maybe collaborate with us? Drop a mail at{" "}
        <Link b href={`mailto:${siteConfig.email}`} i>
          {siteConfig.email}
        </Link>
        , or reach us at various digital spaces like{" "}
        <Link b href={siteConfig.socials["Discord"]} i isExternal>
          Discord
        </Link>{" "}
        and{" "}
        <Link b href={siteConfig.socials["Telegram"]} i isExternal>
          Telegram
        </Link>
        .
      </Text>

      <Heading letterSpacing="tight" size="lg">
        Social Links
      </Heading>
      <List listStyleType="disc">
        {Object.entries(siteConfig.socials).map(([text, href], i) => (
          <ListItem key={i}>
            <Box as="span" fontWeight="bold">
              {text}
            </Box>{" "}
            - <Link href={href} i isExternal />
          </ListItem>
        ))}
      </List>
      <Text maxW="2xl">
        Links are also available at <Link b href="/api/socials" i isExternal />.
      </Text>
    </Stack>
  </Box>
);

export default ContactPage;
