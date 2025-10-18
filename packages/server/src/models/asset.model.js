import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    serial_number: { type: String },
    purchase_date: { type: Date },
    status: {
      type: String,
      required: true,
      enum: ["available", "assigned", "maintenance", "retired"],
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

export default mongoose.model("Asset", assetSchema);
