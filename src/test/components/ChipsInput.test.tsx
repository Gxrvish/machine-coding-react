import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import ChipsInput from "@/app/machine-coding/chips-input/ChipsInput";

describe("ChipsInput", () => {
    it("adds and deletes chips", async () => {
        const user = userEvent.setup();
        render(<ChipsInput />);

        const input = screen.getByPlaceholderText(
            "Write you hobbies here..."
        ) as HTMLInputElement;

        await user.type(input, "Reading{enter}");
        expect(screen.getByText("Reading")).toBeDefined();
        expect(input.value).toBe("");

        await user.type(input, "Gaming{enter}");
        expect(screen.getByText("Gaming")).toBeDefined();

        const deleteButtons = screen.getAllByRole("button", { name: "x" });
        await user.click(deleteButtons[0]);

        expect(screen.queryByText("Reading")).toBeNull();
        expect(screen.getByText("Gaming")).toBeDefined();
    });

    it("does not add empty chips", async () => {
        const user = userEvent.setup();
        render(<ChipsInput />);

        const input = screen.getByPlaceholderText(
            "Write you hobbies here..."
        ) as HTMLInputElement;

        await user.type(input, "   {enter}");

        expect(screen.queryByRole("listitem")).toBeNull();
    });
});
