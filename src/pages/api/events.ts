import { NextApiHandler } from "next";
import { client } from "@/cms";

const handler: NextApiHandler = async (_, res) => {
  const data = await client.request(/* GraphQL */ `
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

  res.setHeader("cache-control", "public, max-age=86400");
  res.json(data.eventCollection.items);
};

export default handler;
