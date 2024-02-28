import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefinitions = /* GraphQL */ `
  type Query {
    hello: String!
  }
`;

const resolvers = { Query: { hello: () => "Hello World!" } };

//The GraphQL fragment is starts at the end of line 1 and ends on line 5
//GraphQL has native types i.e String, Int, ID -> they must use capital letters
//Information can be found -> https://graphql.org/learn/schema/

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
