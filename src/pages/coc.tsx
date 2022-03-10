import * as React from "react";

import i18n from "@/i18n";
import { contentRenderer } from "@/utils/renderers";

import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";

const cocUrl = "https://raw.githubusercontent.com/surabayajs/code-of-conduct/main/code-of-conduct.mdx";

export async function getStaticProps() {
  const content = await fetch(cocUrl).then((res) => res.text());
  return {
    props: {
      content,
    },
  };
}

interface COCPageProps {
  content: string;
}

const CodeOfConductPage: NextPage<COCPageProps> = (props) => {
  const { content } = props;
  const locale = process.env.LOCALE;
  return (
    <>
      <NextSeo title={i18n["coc-title"][locale] as string} />
      <Container as="section" maxW="6xl" pt={[4, 8]} px={[4, 8]}>
        <ReactMarkdown children={content} components={contentRenderer} />
      </Container>
    </>
  );
};

export default CodeOfConductPage;
