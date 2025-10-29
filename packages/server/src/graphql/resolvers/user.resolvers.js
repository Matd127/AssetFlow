import User from "#models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

export default {
  Query: {
    users: async (_, __, { user }) => {
      if (!user || user.role !== "Admin") throw new Error("Not authorized");
      return await User.find();
    },
    user: (_, { id }, { user }) => {
      console.log("resolver user:", user);
      if (!user || user.role !== "Admin") throw new Error("Not authorized");
      return User.findById(id);
    },
    me: (_, __, { user }) => {
      console.log("resolver me user:", user); // powinien być obiekt usera
      return user; // zwraca aktualnego zalogowanego użytkownika
    },
  },

  Mutation: {
    createUser: async (_, args, { user }) => {
      if (!user || user.role !== "Admin") throw new Error("Not authorized");
      const hashedPassword = await bcrypt.hash(args.password, 10);
      return new User({ ...args, password: hashedPassword }).save();
    },

    updateUser: async (_, { id, ...updates }, { user }) => {
      if (!user || user.role !== "Admin") throw new Error("Not authorized");
      if (updates.password) {
        updates.password = await bcrypt.hash(updates.password, 10);
      }
      return User.findByIdAndUpdate(id, updates, { new: true });
    },

    deleteUser: async (_, { id }, { user }) => {
      if (!user || user.role !== "Admin") throw new Error("Not authorized");
      return User.findByIdAndDelete(id);
    },

    register: async (_, { email, password, role, first_name, last_name }) => {
      const existing = await User.findOne({ email });
      if (existing) throw new Error("User already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        password: hashedPassword,
        role: role || "User",
        first_name,
        last_name,
      });

      const token = generateToken(newUser);
      return { token, user: newUser };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Incorrect password");

      const token = generateToken(user);
      return { token, user };
    },
  },
};
