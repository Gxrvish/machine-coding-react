import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Otp from "@/app/machine-coding/otp-input/Otp";

describe("Otp", () => {
    it("renders configured input count and auto-focuses first input", () => {
        render(<Otp otpLength={4} />);

        const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
        expect(inputs.length).toBe(4);
        expect(document.activeElement).toBe(inputs[0]);
    });

    it("handles numeric input and keyboard navigation", () => {
        render(<Otp otpLength={4} />);

        const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];

        fireEvent.keyDown(inputs[0], { key: "7" });
        expect(inputs[0].value).toBe("7");
        expect(document.activeElement).toBe(inputs[1]);

        inputs[1].focus();
        fireEvent.keyDown(inputs[1], { key: "ArrowLeft" });
        expect(document.activeElement).toBe(inputs[0]);

        inputs[1].focus();
        fireEvent.keyDown(inputs[1], { key: "Backspace" });
        expect(inputs[1].value).toBe("");
        expect(document.activeElement).toBe(inputs[0]);
    });
});
