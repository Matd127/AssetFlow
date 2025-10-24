import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  status: { type: String, required: true, default: "active" },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
