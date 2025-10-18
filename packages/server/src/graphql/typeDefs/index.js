import { gql } from "apollo-server-express";
import userTypeDefs from "./user.typeDefs.js";
import assetTypeDefs from "./asset.typeDefs.js";
import categoryTypeDefs from "./category.typeDefs.js";
import licenseTypeDefs from "./license.typeDefs.js";
import ticketTypeDefs from "./ticket.typeDefs.js";
import contactTypeDefs from "./contact.typeDefs.js";

const baseTypeDefs = gql`
  type Query
  type Mutation
`;

export default [
  baseTypeDefs,
  userTypeDefs,
  assetTypeDefs,
  categoryTypeDefs,
  licenseTypeDefs,
  ticketTypeDefs,
  contactTypeDefs,
];
