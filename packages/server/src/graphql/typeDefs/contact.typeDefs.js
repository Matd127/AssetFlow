import { gql } from "apollo-server-express";

export default gql`
  type Contact {
    id: ID!
    name: String!
    email: String!
    subject: String!
    message: String!
    created_at: String
  }

  extend type Query {
    contacts: [Contact]
  }

  extend type Mutation {
    createContact(
      name: String!
      email: String!
      subject: String!
      message: String!
    ): Contact
  }
`;
