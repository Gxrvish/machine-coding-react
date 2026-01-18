"use client";

import { useSelector } from "react-redux";

import ProTodoList from "./ProTodoList";
import type { RootState } from "./store";

const ProTodoApp = () => {
    const todos = useSelector((state: RootState) => state.todos);
    return (
        <div className="h-screen flex justify-center items-center bg-emerald-200">
            <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
                <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                    {todos.map((item) => {
                        return <ProTodoList id={item.id} key={item.id} />;
                    })}
                </nav>
            </div>
        </div>
    );
};

export default ProTodoApp;
