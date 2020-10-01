import type { NextApiHandler } from "next";
import { contentful } from "@/cms";

const handler: NextApiHandler = async (_, res) => {
  const data = await contentful().request(/* GraphQL */ `
    {
      eventCollection(order: startingDate_DESC) {
        items {
          title
          slug
          description
          category
          startingDate
          location
          url
          quota
        }
      }
    }
  `);

  res.json(data.eventCollection.items);
};

export default handler;
