"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "../generic-dialog/dialog";
import ProTodoList from "./ProTodoList";
import type { RootState } from "./store";
import { addTodo } from "./todosSlice";

const ProTodoApp = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const todos = useSelector((state: RootState) => state.todos);
    return (
        <>
            <Dialog
                title="Edit todo"
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={() => {
                    dispatch(addTodo(value));
                    setOpen(false);
                }}
            >
                <input
                    type="text"
                    className="border-1"
                    onChange={(ev) => setValue(ev.target.value)}
                />
            </Dialog>
            <div className="h-screen flex justify-center items-center bg-emerald-200">
                <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
                    <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                        {todos.length === 0 ? (
                            <span className="flex justify-center items-center my-3 mx-2">
                                No todos found, You are all set!
                            </span>
                        ) : (
                            todos.map((item) => {
                                return (
                                    <ProTodoList id={item.id} key={item.id} />
                                );
                            })
                        )}
                        <button
                            className="bg-blue-300 py-2 border-1"
                            onClick={() => setOpen(!open)}
                        >
                            Add todo
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default ProTodoApp;
