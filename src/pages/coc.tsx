/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";

import type { GetStaticProps, NextPage } from "next";

import siteConfig from "site-config";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async (params) => {
  const { locale } = params;

  return {
    redirect: {
      destination: siteConfig.coc[locale] ?? "/",
      permanent: true,
    },
  };
};

const CodeOfConductPage: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push(siteConfig.coc[router.locale] ?? "/");
  }, []);

  return null;
};

export default CodeOfConductPage;
