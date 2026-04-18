import { describe, expect, it, vi } from "vitest";

import reducer, {
    addTodo,
    editTodo,
    removeTodo,
    toggleTodo,
} from "@/app/machine-coding/pro-todo-app/todosSlice";

describe("todosSlice", () => {
    it("returns initial state", () => {
        const state = reducer(undefined, { type: "unknown" });

        expect(state.length).toBe(3);
        expect(state[0].title).toBe("Learn Redux");
    });

    it("adds a todo", () => {
        const randomUuidSpy = vi
            .spyOn(crypto, "randomUUID")
            .mockReturnValue("todo-4");

        const initial = reducer(undefined, { type: "unknown" });
        const next = reducer(initial, addTodo("Write tests"));

        expect(next[next.length - 1]).toEqual({
            id: "todo-4",
            title: "Write tests",
            completed: false,
        });

        randomUuidSpy.mockRestore();
    });

    it("toggles, edits and removes todos", () => {
        const initial = reducer(undefined, { type: "unknown" });

        const toggled = reducer(initial, toggleTodo("1"));
        expect(toggled.find((todo) => todo.id === "1")?.completed).toBe(true);

        const edited = reducer(
            toggled,
            editTodo({ id: "1", title: "Redux done" })
        );
        expect(edited.find((todo) => todo.id === "1")?.title).toBe(
            "Redux done"
        );

        const removed = reducer(edited, removeTodo("1"));
        expect(removed.find((todo) => todo.id === "1")).toBeUndefined();
    });
});
