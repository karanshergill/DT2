import mongoose from "mongoose";
import { Todo } from "../models/todoModel.js";

// Validate if the ID is a valid ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Get all todos
export const getAll = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get a todo by ID
export const getById = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid ID format.' });
    }

    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: 'Not Found!' });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create a new todo
export const createNew = async (req, res) => {
    const { category, title, description, status } = req.body;

    if (!category || !title || !description || !status) {
        return res.status(400).json({ message: 'Please fill in the required fields!' });
    }

    try {
        const newTodo = new Todo({
            category,
            title,
            description,
            status
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a todo by ID
export const updateById = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid ID format.' });
    }

    try {
        const updated = await Todo.findByIdAndUpdate(id, req.body,{ new: true });

        if (!updated) {
            return res.status(404).json({ message: 'Not Found!' });
        }

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a todo by ID
export const deleteById = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid ID format.' });
    }

    try {
        const deleted = await Todo.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Not Found!' });
        }

        res.status(200).json({ message: 'Deleted Successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};