import mongoose from "mongoose";

// Schema
const todoSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "in-progress", "completed"], // prevent invalid status entries
        default: "pending",
    },
},
    { timestamps: true });

// Model
export const Todo = mongoose.model("Todo", todoSchema);