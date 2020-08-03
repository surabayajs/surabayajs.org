import * as React from "react";

import { Box, Flex, Text } from "@chakra-ui/core";

import Link from "@/components/link";
import Socials from "@/components/socials";
import siteConfig from "~/site-config";

const Footer: React.FC = () => {
  return (
    <Box backgroundColor="gray.700" color="white">
      <Flex
        alignItems="center"
        flexDir={{ default: "column-reverse", md: "row" }}
        justifyContent="space-between"
        maxW="6xl"
        mx="auto"
        p={8}
        pb={16}
        textAlign={{ default: "center", md: "initial" }}
      >
        <Box>
          <Text>
            Made using{" "}
            <Link b href="https://nextjs.org" isExternal>
              Next.js
            </Link>
            ,{" "}
            <Link b href="https://chakra-ui.com" isExternal>
              Chakra UI
            </Link>
            , and{" "}
            <Link b href="https://www.contentful.com" isExternal>
              Contentful
            </Link>
            . Hosted on{" "}
            <Link b href="https://vercel.com" isExternal>
              Vercel
            </Link>
            .
          </Text>
          <Text pb={4}>
            Business inquiries at{" "}
            <Link b href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </Link>
            .
          </Text>
          <Text>
            &copy; {new Date().getFullYear()}&ndash;present {siteConfig.title}.
          </Text>
        </Box>
        <Box size={8} />
        <Socials />
      </Flex>
    </Box>
  );
};

export default Footer;
