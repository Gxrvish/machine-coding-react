import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import Accordion from "@/app/accordion/Accordion";

describe("Accordion", () => {
    it("toggles answer visibility", () => {
        render(
            <Accordion
                qna={{ question: "What is React?", answer: "A UI library." }}
                key="faq-1"
            />
        );

        expect(screen.queryByText("A UI library.")).toBeNull();

        fireEvent.click(screen.getByText("+"));
        expect(screen.getByText("A UI library.")).toBeDefined();

        fireEvent.click(screen.getByText("-"));
        expect(screen.queryByText("A UI library.")).toBeNull();
    });
});
