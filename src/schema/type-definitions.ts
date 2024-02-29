export const typeDefinitions = /* GraphQL */ `
  type Query {
    info: String!
    feed: [Link!]!
    countries: [Country!]!
  }

  type Mutation {
    postLink(url: String!, description: String!): Link!
    createProduct(
      name: String!
      sku: String!
      weight: Int!
      price: Int!
      type: ProductType!
    ): Product!
  }

  type Product {
    product_id: ID!
    name: String!
    sku: String!
    cost: Int!
    mass: Int!
    type: ProductType!
  }

  enum ProductType {
    physical
    digital
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
