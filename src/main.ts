import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { typeDefinitions } from "./schema/type-definitions";

function main() {
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(4001, () => {
    console.info("Server is running on http://localhost:4001/graphql");
  });
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});

main();
