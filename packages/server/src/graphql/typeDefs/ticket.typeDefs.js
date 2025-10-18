import { gql } from "apollo-server-express";

export default gql`
  type Ticket {
    id: ID!
    title: String!
    description: String!
    status: String!
    priority: String!
    created_at: String
    updated_at: String
    user: User
    asset: Asset
  }

  extend type Query {
    tickets: [Ticket]
  }

  extend type Mutation {
    createTicket(
      title: String!
      description: String!
      status: String!
      priority: String!
      user_id: ID!
      asset_id: ID
    ): Ticket
  }
`;
