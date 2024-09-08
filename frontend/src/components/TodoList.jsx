import { useState, useEffect } from 'react';
import { getTodos } from '../services/api';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todos = await getTodos();
                setTodos(todos);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTodos();
    }, []);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo._id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>{todo.status}</p>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;