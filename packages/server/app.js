import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "#graphql/schema.js";
import connectDB from "#config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ token: req.headers.authorization }),
});

await server.start();
server.applyMiddleware({ app, path: "/graphql" });

export default app;
