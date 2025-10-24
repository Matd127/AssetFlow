import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "#graphql/schema.js";
import { authMiddleware } from "#middleware/auth.js";
import connectDB from "#config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();

app.use(authMiddleware);

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ user: req.user }),
});

await server.start();
server.applyMiddleware({ app, path: "/graphql" });

export default app;
