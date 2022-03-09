// https://github.com/graphql/vscode-graphql/pull/267#issuecomment-843622797
// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

/** @type {import("graphql-config").IGraphQLConfig} */
const graphqlConfig = {
  documents: ["./src/graphql/client/**/*.graphql"],
  schema: ["./schema.graphql"],
  extensions: {
    endpoints: {
      default: {
        url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        },
      },
    },
  },
};

module.exports = graphqlConfig;
