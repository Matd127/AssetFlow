import mongoose from "mongoose";

const licenseSchema = new mongoose.Schema(
  {
    software_name: { type: String, required: true },
    license_key: { type: String },
    type: {
      type: String,
      required: true,
      enum: ["single", "multi", "subscription"],
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "expired", "revoked"],
    },
    expiry_date: { type: Date },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    asset_id: { type: mongoose.Schema.Types.ObjectId, ref: "Asset" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

export default mongoose.model("License", licenseSchema);
