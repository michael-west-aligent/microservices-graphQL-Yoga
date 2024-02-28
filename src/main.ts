import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

function main() {
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(4001, () => {
    console.info("Server is running on http://localhost:4001/graphql");
  });
}

main();
