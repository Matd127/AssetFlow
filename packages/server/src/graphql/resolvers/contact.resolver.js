import Contact from "#models/contact.model.js";

export default {
  Query: {
    contacts: async () => await Contact.find(),
  },
  Mutation: {
    createContact: async (_, args) => {
      const contact = new Contact(args);
      return await contact.save();
    },
  },
};
