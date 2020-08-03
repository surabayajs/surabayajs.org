import "@/stylesheets/html.css";

import * as React from "react";

import { Box, Flex } from "@chakra-ui/core";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";

import { AppProps } from "next/app";
import { AppProvider } from "@/store/app";
import Footer from "@/components/footer";
import Head from "next/head";
import NProgress from "nprogress";
import Navbar from "@/components/navbar";
import Router from "next/router";
import siteConfig from "~/site-config";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const CustomAppPage = ({ Component, pageProps, router }: AppProps) => (
  <AppProvider>
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
        images: [{ url: `${siteConfig.url}/social.jpg` }],
      }}
      twitter={{
        cardType: "summary_large_image",
        handle: siteConfig.twitterUsername,
        site: siteConfig.twitterUsername,
      }}
    />

    <SocialProfileJsonLd
      type="organization"
      name={siteConfig.title}
      url={siteConfig.url}
      sameAs={Object.values(siteConfig.socials)}
    />

    <Flex flexDir="column" minH="100vh" justifyContent="space-between">
      <Navbar />
      <Box as="main" flexGrow={1}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Flex>
  </AppProvider>
);

export default CustomAppPage;
