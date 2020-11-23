import "@/stylesheets/html.css";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Box, ChakraProvider, Stack, useColorMode } from "@chakra-ui/react";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";

import type { BoxProps } from "@chakra-ui/react";
import { Drawer } from "@/components/drawer";
import { Footer } from "@/components/footer";
import Head from "next/head";
import NProgress from "nprogress";
import { Navbar } from "@/components/navbar";
import type { AppProps as NextAppProps } from "next/app";
import Router from "next/router";
import siteConfig from "site-config";
import theme from "@/theme";
import { useShortcut } from "litkey";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppProps = NextAppProps;

const MotionBox = motion.custom<BoxProps>(Box);

function Inner(props: AppProps) {
  const { Component, pageProps, router } = props;

  const { toggleColorMode } = useColorMode();

  useShortcut("shift+d", () => {
    toggleColorMode();
  });

  return (
    <>
      <Stack justify="space-between" minH="100vh">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            as="main"
            animate="enter"
            exit="exit"
            flexGrow={1}
            initial="initial"
            key={router.route}
            variants={{
              initial: { opacity: 0, y: -80 },
              enter: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 80 },
            }}
          >
            <Component {...pageProps} />
          </MotionBox>
        </AnimatePresence>
        <Footer />
      </Stack>

      <Drawer />
    </>
  );
}

function App(props: AppProps) {
  const { router } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DefaultSeo
        title="Welcome!"
        titleTemplate={`%s · ${siteConfig.title}`}
        description={siteConfig.description}
        canonical={siteConfig.url + (router.asPath || "")}
        openGraph={{
          title: siteConfig.title,
          description: siteConfig.description,
          type: "website",
          site_name: siteConfig.title,
          images: [
            {
              url: `${siteConfig.url}/social.jpg`,
              width: 1024,
              height: 512,
              alt: siteConfig.title,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <SocialProfileJsonLd
        type="person"
        name={siteConfig.title}
        url={siteConfig.url}
        sameAs={Object.values(siteConfig.socials)}
      />

      <ChakraProvider resetCSS theme={theme}>
        <Inner {...props} />
      </ChakraProvider>
    </>
  );
}

export default App;
