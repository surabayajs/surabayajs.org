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

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.json(data.eventCollection.items);
};

export default handler;
