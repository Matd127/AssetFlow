import Category from "#models/category.model.js";
import Asset from "#models/asset.model.js";

export default {
  Query: {
    categories: async () => await Category.find(),
  },
  Mutation: {
    createCategory: async (_, args) => {
      const category = new Category(args);
      return await category.save();
    },
  },
  AssetCategory: {
    assets: (parent) => Asset.find({ category_id: parent.id }),
  },
};
