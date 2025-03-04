import mongoose, { Schema } from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true }
});

export default mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
