import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    role: String!
    status: String
    created_at: String
    assets: [Asset]
    tickets: [Ticket]
    licenses: [License]
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
    me: User
    secretData: String
  }

  extend type Mutation {
    createUser(
      first_name: String!
      last_name: String!
      email: String!
      role: String!
      password: String!
    ): User

    updateUser(
      id: ID!
      first_name: String
      last_name: String
      email: String
      role: String
      password: String
      status: String
    ): User

    deleteUser(id: ID!): User

    register(
      email: String!
      password: String!
      role: String
      first_name: String
      last_name: String
    ): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;
