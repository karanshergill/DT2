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
    },
});

// Model
export const Todo = mongoose.model("Todo", todoSchema);