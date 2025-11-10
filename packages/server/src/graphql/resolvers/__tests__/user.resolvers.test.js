/* global beforeAll, afterAll, afterEach, test, expect, describe */
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import bcrypt from "bcryptjs";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import request from "supertest";

import typeDefs from "#graphql/typeDefs/index.js";
import resolvers from "#graphql/resolvers/user.resolvers.js";
import User from "#models/user.model.js";

let app, server;
let mongoServer;

// --- Setup MongoMemoryServer ---
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ user: req.user || null }), // w testach możemy wstrzykiwać usera
  });
  await server.start();

  app = express();
  server.applyMiddleware({ app });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  await server.stop();
});

afterEach(async () => {
  await User.deleteMany();
});

// --- Helper do tworzenia admina ---
const createAdminUser = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const user = await User.create({
    email: "admin@test.com",
    password: hashedPassword,
    role: "Admin",
    first_name: "Admin",
    last_name: "User",
  });
  return user;
};

// --- Testy ---
describe("User Resolver", () => {
  test("register i login użytkownika", async () => {
    // register
    const registerMutation = `
      mutation {
        register(email: "test@test.com", password: "123456", first_name: "Test", last_name: "User") {
          token
          user {
            email
            first_name
            last_name
            role
          }
        }
      }
    `;
    let res = await request(app)
      .post("/graphql")
      .send({ query: registerMutation });
    expect(res.body.data.register.user.email).toBe("test@test.com");
    expect(res.body.data.register.user.role).toBe("User");

    // login
    const loginMutation = `
      mutation {
        login(email: "test@test.com", password: "123456") {
          token
          user {
            email
          }
        }
      }
    `;
    res = await request(app).post("/graphql").send({ query: loginMutation });
    expect(res.body.data.login.user.email).toBe("test@test.com");
    expect(res.body.data.login.token).toBeDefined();
  });

  test("query users wymaga admina", async () => {
    const admin = await createAdminUser();

    const query = `{ users { email first_name last_name role } }`;

    // bez usera → Not authorized
    let res = await request(app).post("/graphql").send({ query });
    expect(res.body.errors[0].message).toBe("Not authorized");

    // z adminem
    app.use((req, _, next) => {
      req.user = admin;
      next();
    });
    res = await request(app).post("/graphql").send({ query });
    expect(res.body.data.users.length).toBe(1);
    expect(res.body.data.users[0].email).toBe("admin@test.com");
  });

  test("createUser, updateUser i deleteUser", async () => {
    const admin = await createAdminUser();
    app.use((req, _, next) => {
      req.user = admin;
      next();
    });

    // createUser
    const createMutation = `
      mutation {
        createUser(email: "new@test.com", password: "123456", first_name: "New", last_name: "User") {
          email
          role
        }
      }
    `;
    let res = await request(app)
      .post("/graphql")
      .send({ query: createMutation });
    expect(res.body.data.createUser.email).toBe("new@test.com");

    // updateUser
    const userToUpdate = await User.findOne({ email: "new@test.com" });
    const updateMutation = `
      mutation {
        updateUser(id: "${userToUpdate._id}", first_name: "Updated") {
          email
          first_name
        }
      }
    `;
    res = await request(app).post("/graphql").send({ query: updateMutation });
    expect(res.body.data.updateUser.first_name).toBe("Updated");

    // deleteUser
    const deleteMutation = `
      mutation {
        deleteUser(id: "${userToUpdate._id}") {
          email
        }
      }
    `;
    res = await request(app).post("/graphql").send({ query: deleteMutation });
    expect(res.body.data.deleteUser.email).toBe("new@test.com");
  });

  test("me query zwraca aktualnego usera", async () => {
    const admin = await createAdminUser();
    app.use((req, _, next) => {
      req.user = admin;
      next();
    });

    const meQuery = `{ me { email first_name } }`;
    const res = await request(app).post("/graphql").send({ query: meQuery });
    expect(res.body.data.me.email).toBe("admin@test.com");
  });
});
