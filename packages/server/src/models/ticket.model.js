import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["open", "in_progress", "resolved", "closed"],
    },
    priority: {
      type: String,
      required: true,
      enum: ["low", "medium", "high", "critical"],
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    asset_id: { type: mongoose.Schema.Types.ObjectId, ref: "Asset" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

export default mongoose.model("Ticket", ticketSchema);
