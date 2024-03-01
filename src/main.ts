import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";

function main() {
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(4001, () => {
    console.info("Server is running on http://localhost:4001/graphql");
  });
}

const typeDefinitions = loadSchemaSync("**/tutorial.graphql", {
  loaders: [new GraphQLFileLoader()],
});

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});

main();
