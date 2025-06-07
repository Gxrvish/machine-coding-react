"use client";

import { useEffect, useState } from "react";
import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} from "./api";

interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        loadTodos();
    }, []);

    async function loadTodos() {
        const data = await getTodos();
        setTodos(data);
    }

    async function handleAdd() {
        if (!title.trim()) return;
        await createTodo({ title, description: "", completed: false });
        setTitle("");
        loadTodos();
    }

    async function handleToggle(todo: Todo) {
        await updateTodo(todo.id, {
            ...todo,
            completed: !todo.completed,
        });
        loadTodos();
    }

    async function handleDelete(id: any) {
        await deleteTodo(id);
        loadTodos();
    }

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">📝 To-Do List</h1>
            <div className="flex mb-4 gap-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New todo..."
                    className="flex-grow p-2 border rounded"
                />
                <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between border-b py-2"
                    >
                        <span
                            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
                            onClick={() => handleToggle(todo)}
                        >
                            {todo.title}
                        </span>
                        <button
                            onClick={() => handleDelete(todo.id)}
                            className="text-red-500"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
