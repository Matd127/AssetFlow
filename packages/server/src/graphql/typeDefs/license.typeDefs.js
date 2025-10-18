import { gql } from "apollo-server-express";

export default gql`
  type License {
    id: ID!
    software_name: String!
    license_key: String
    type: String!
    status: String!
    expiry_date: String
    user: User
    asset: Asset
  }

  extend type Query {
    licenses: [License]
  }

  extend type Mutation {
    createLicense(
      software_name: String!
      type: String!
      status: String!
      user_id: ID!
      asset_id: ID
    ): License
  }
`;
