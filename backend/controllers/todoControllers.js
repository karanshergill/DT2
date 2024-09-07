import { Todo } from "../models/todoModel";

export const getAll = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getById = async (req, res) => {
    const { id } = req.params;
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

export const create = async (req, res) => {
    const { category, title, description, status } = req.body;

    if(!category || !title || !status) {
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
        res.status(409).json({ message: error.message });
    }
};