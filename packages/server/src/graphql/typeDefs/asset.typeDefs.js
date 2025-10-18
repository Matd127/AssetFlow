import { gql } from "apollo-server-express";

export default gql`
  type Asset {
    id: ID!
    name: String!
    serial_number: String
    purchase_date: String
    status: String!
    user: User
    category: AssetCategory
    licenses: [License]
    tickets: [Ticket]
  }

  extend type Query {
    assets: [Asset]
    asset(id: ID!): Asset
  }

  extend type Mutation {
    createAsset(
      name: String!
      status: String!
      user_id: ID!
      category_id: ID
    ): Asset
  }
`;
