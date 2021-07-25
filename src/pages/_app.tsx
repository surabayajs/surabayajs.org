import * as React from "react";

import { Drawer } from "@/components/drawer";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import siteConfig from "@/config/site";
import theme from "@/theme";
import { Box, ChakraProvider, Stack, useColorMode } from "@chakra-ui/react";

import { useShortcut } from "litkey";
import { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppProps = NextAppProps;

function Inner(props: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps, router } = props;

  const { toggleColorMode } = useColorMode();

  useShortcut(["shift+h"], () => {
    void router.push("/");
  });

  useShortcut(["shift+e"], () => {
    void router.push("/events");
  });

  useShortcut("shift+t", () => {
    void router.push("/todos");
  });

  useShortcut("shift+d", () => {
    toggleColorMode();
  });

  return (
    <>
      <Stack justify="space-between" minH="100vh">
        <Navbar />
        <Box as="main" flexGrow={1}>
          <Component {...pageProps} />
        </Box>
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
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <DefaultSeo
        canonical={siteConfig.url + (router.asPath || "")}
        description={siteConfig.description}
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
        title="Welcome!"
        titleTemplate={`%s · ${siteConfig.title}`}
        twitter={{
          cardType: "summary_large_image",
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <SocialProfileJsonLd
        name={siteConfig.title}
        sameAs={Object.values(siteConfig.socials)}
        type="person"
        url={siteConfig.url}
      />

      <ChakraProvider resetCSS theme={theme}>
        <Inner {...props} />
      </ChakraProvider>
    </>
  );
}

export default App;
