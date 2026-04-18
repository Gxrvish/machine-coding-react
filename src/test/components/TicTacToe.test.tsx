import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TicTacToe from "@/app/machine-coding/tic-tac-toe/TicTacToe";

describe("TicTacToe", () => {
    it("plays moves and declares a winner", () => {
        const { container } = render(<TicTacToe gridSize={3} />);

        const cells = Array.from(
            container.querySelectorAll("div[role='button']")
        ) as HTMLDivElement[];

        expect(cells.length).toBe(9);
        expect(screen.getByText("Player X turn")).toBeDefined();

        fireEvent.click(cells[0]); // X
        fireEvent.click(cells[3]); // O
        fireEvent.click(cells[1]); // X
        fireEvent.click(cells[4]); // O
        fireEvent.click(cells[2]); // X wins row 1

        expect(screen.getByText("X is the winner")).toBeDefined();
    });

    it("resets board state", () => {
        const { container } = render(<TicTacToe gridSize={3} />);

        const cells = Array.from(
            container.querySelectorAll("div[role='button']")
        ) as HTMLDivElement[];

        fireEvent.click(cells[0]);
        expect(cells[0].textContent).toBe("X");

        fireEvent.click(screen.getByRole("button", { name: "Reset" }));

        const resetCells = Array.from(
            container.querySelectorAll("div[role='button']")
        ) as HTMLDivElement[];

        expect(resetCells[0].textContent).toBe("");
        expect(screen.queryByText("X is the winner")).toBeNull();
    });
});
