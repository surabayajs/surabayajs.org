module.exports = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript"],
    },
  },
};
