import Asset from "#models/asset.model.js";
import User from "#models/user.model.js";
import License from "#models/license.model.js";
import Ticket from "#models/ticket.model.js";
import Category from "#models/category.model.js";

export default {
  Query: {
    assets: async () => await Asset.find(),
    asset: async (_, { id }) => await Asset.findById(id),
  },
  Mutation: {
    createAsset: async (_, args) => {
      const asset = new Asset(args);
      return await asset.save();
    },
  },
  Asset: {
    user: (parent) => User.findById(parent.user_id),
    category: (parent) => Category.findById(parent.category_id),
    licenses: (parent) => License.find({ asset_id: parent.id }),
    tickets: (parent) => Ticket.find({ asset_id: parent.id }),
  },
};
