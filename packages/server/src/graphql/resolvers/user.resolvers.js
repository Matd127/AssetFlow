import User from "#models/user.model.js";
import bcrypt from "bcryptjs";

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },

  Mutation: {
    createUser: async (_, args) =>
      await new User({
        ...args,
        password: await bcrypt.hash(args.password, 10),
      }).save(),

    updateUser: async (_, { id, ...updates }) => {
      if (updates.password) {
        updates.password = await bcrypt.hash(updates.password, 10);
      }
      return User.findByIdAndUpdate(id, updates, { new: true });
    },

    deleteUser: (_, { id }) => User.findByIdAndDelete(id),
  },
};
