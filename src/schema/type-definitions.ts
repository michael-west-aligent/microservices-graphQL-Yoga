export const typeDefinitions = /* GraphQL */ `
  type Query {
    info: String!
    feed: [Link!]!
    countries: [Country!]!
  }

  type Mutation {
    postLink(url: String!, description: String!): Link!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }

  type Country {
    id: Int!
    country: String!
    country_iso2: String!
    country_iso3: String!
    states: State!
  }

  type State {
    url: String!
    resource: String!
  }
`;
