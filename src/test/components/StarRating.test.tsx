import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import StarRating from "@/app/machine-coding/star-rating/StarRating";

describe("StarRating", () => {
    it("updates highlighted stars on hover", () => {
        render(<StarRating starCount={4} />);

        const stars = screen.getAllByText("★") as HTMLSpanElement[];
        fireEvent.mouseOver(stars[2]);

        expect(stars[0].className.includes("gold")).toBe(true);
        expect(stars[1].className.includes("gold")).toBe(true);
        expect(stars[2].className.includes("gold")).toBe(true);
        expect(stars[3].className.includes("gold")).toBe(false);
    });

    it("toggles selected rating on repeated click", () => {
        render(<StarRating starCount={5} />);

        const stars = screen.getAllByText("★") as HTMLSpanElement[];

        fireEvent.click(stars[1]);
        expect(stars[0].className.includes("gold")).toBe(true);
        expect(stars[1].className.includes("gold")).toBe(true);

        fireEvent.click(stars[1]);
        stars.forEach((star) => {
            expect(star.className.includes("gold")).toBe(false);
        });
    });
});
