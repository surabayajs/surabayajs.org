import * as React from "react";

import { Code, Heading, Stack } from "@chakra-ui/core";

import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { STATUS_CODES } from "http";

type ErrorPageProps = {
  statusCode: number;
  title: string;
};

const ErrorPage: NextPage<ErrorPageProps> = (props) => {
  const { statusCode, title } = props;

  return (
    <Stack maxW="6xl" mx="auto" p={8}>
      <NextSeo title={`${statusCode}`} />

      <Heading as="h1">
        {statusCode} {title}
      </Heading>

      <Code>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Code>
    </Stack>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;

  return {
    statusCode,
    title: STATUS_CODES[statusCode],
  };
};

export default ErrorPage;
