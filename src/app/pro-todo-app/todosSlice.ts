import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

const initialState: Todo[] = [
    { id: "1", title: "Learn Redux", completed: false },
    { id: "2", title: "Build a project", completed: false },
    { id: "3", title: "Deploy to production", completed: false },
];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.push({
                id: crypto.randomUUID(),
                title: action.payload,
                completed: false,
            });
        },

        toggleTodo(state, action: PayloadAction<string>) {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        removeTodo(state, action: PayloadAction<string>) {
            return state.filter((t) => t.id !== action.payload);
        },

        editTodo(state, action: PayloadAction<{ id: string; title: string }>) {
            const todo = state.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
            }
        },
    },
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
