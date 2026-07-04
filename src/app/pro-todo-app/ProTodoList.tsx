"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "../generic-dialog/dialog";
import type { RootState } from "./store";
import { editTodo, removeTodo, toggleTodo } from "./todosSlice";

type Props = {
    id: string;
};

const ProTodoList = (props: Props) => {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const todo = todos.find((todo) => todo.id === props.id);
    useEffect(() => {
        const handleKeydown = (ev: KeyboardEvent) => {
            if (ev.key === "Enter" || ev.key === "Escape") {
                setOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeydown);
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);
    return (
        todo && (
            <>
                <Dialog
                    title="Edit todo"
                    open={open}
                    onClose={() => setOpen(false)}
                    onConfirm={() => {
                        setOpen(false);
                    }}
                >
                    <input
                        type="text"
                        className="border-1"
                        value={todo?.title}
                        onChange={(ev) =>
                            dispatch(
                                editTodo({
                                    id: todo?.id,
                                    title:
                                        ev.target.value === ""
                                            ? todo.title
                                            : ev.target.value,
                                })
                            )
                        }
                    />
                </Dialog>
                <div
                    role="button"
                    className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                >
                    <span
                        className={
                            "cursor-pointer" +
                            (todo.completed ? " line-through" : "")
                        }
                        onClick={() => dispatch(toggleTodo(todo.id))}
                    >
                        {todo?.title}
                    </span>
                    <div className="ml-auto grid place-items-center justify-self-end">
                        <button
                            className="rounded-md border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={() => setOpen(true)}
                        >
                            <svg
                                fill="#000000"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                version="1.2"
                                baseProfile="tiny"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z" />
                            </svg>
                        </button>
                        <button
                            className="rounded-md border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </>
        )
    );
};

export default ProTodoList;
