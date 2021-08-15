import { getSdk } from "@/generated/graphql";

import { GraphQLClient } from "graphql-request";

export const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

export const CONTENTFUL_HEADERS = {
  Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
};

export default function cms() {
  const client = new GraphQLClient(CONTENTFUL_ENDPOINT, {
    headers: CONTENTFUL_HEADERS,
  });
  return getSdk(client);
}
