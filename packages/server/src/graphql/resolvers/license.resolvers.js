import License from "#models/license.model.js";
import User from "#models/user.model.js";
import Asset from "#models/asset.model.js";

export default {
  Query: {
    licenses: async () => await License.find(),
  },
  Mutation: {
    createLicense: async (_, args) => {
      const license = new License(args);
      return await license.save();
    },
  },
  License: {
    user: (parent) => User.findById(parent.user_id),
    asset: (parent) => Asset.findById(parent.asset_id),
  },
};
