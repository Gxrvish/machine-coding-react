import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Stopwatch from "@/app/machine-coding/stopwatch/Stopwatch";

describe("Stopwatch", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("counts down once started", () => {
        render(<Stopwatch />);

        const secondInput = screen.getByPlaceholderText(
            "SS"
        ) as HTMLInputElement;
        fireEvent.change(secondInput, { target: { value: "2" } });

        fireEvent.click(screen.getByRole("button", { name: "Start" }));
        expect(screen.getByRole("button", { name: "Pause" })).toBeDefined();

        act(() => {
            vi.advanceTimersByTime(1000);
        });
        expect(secondInput.value).toBe("1");

        act(() => {
            vi.advanceTimersByTime(2000);
        });
        expect(secondInput.value).toBe("0");
        expect(screen.getByRole("button", { name: "Start" })).toBeDefined();
    });

    it("resets timer and running state", () => {
        render(<Stopwatch />);

        const secondInput = screen.getByPlaceholderText(
            "SS"
        ) as HTMLInputElement;
        fireEvent.change(secondInput, { target: { value: "10" } });

        fireEvent.click(screen.getByRole("button", { name: "Start" }));
        act(() => {
            vi.advanceTimersByTime(1000);
        });

        fireEvent.click(screen.getByRole("button", { name: "Reset" }));

        const hourInput = screen.getByPlaceholderText("HH") as HTMLInputElement;
        const minuteInput = screen.getByPlaceholderText(
            "MM"
        ) as HTMLInputElement;

        expect(hourInput.value).toBe("0");
        expect(minuteInput.value).toBe("0");
        expect(secondInput.value).toBe("0");
        expect(screen.getByRole("button", { name: "Start" })).toBeDefined();
    });
});
