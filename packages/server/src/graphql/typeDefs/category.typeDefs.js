import { gql } from "apollo-server-express";

export default gql`
  type AssetCategory {
    id: ID!
    name: String!
    assets: [Asset]
  }

  extend type Query {
    categories: [AssetCategory]
  }

  extend type Mutation {
    createCategory(name: String!): AssetCategory
  }
`;
