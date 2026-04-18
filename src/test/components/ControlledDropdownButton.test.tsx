import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { ControlledDropdownButton } from "@/app/machine-coding/controlled-dropdown-button/ControlledDropdownButton";
import { Registry } from "@/app/machine-coding/registry";

type Country = {
    code: string;
    name: string;
};

const MODEL_NAME = "test-countries";

describe("ControlledDropdownButton", () => {
    beforeEach(() => {
        Registry.add<Country[]>(MODEL_NAME, [
            { code: "IN", name: "India" },
            { code: "US", name: "United States" },
            { code: "GB", name: "United Kingdom" },
        ]);
    });

    afterEach(() => {
        Registry.remove(MODEL_NAME);
    });

    it("filters options and selects a value", async () => {
        const user = userEvent.setup();
        render(
            <ControlledDropdownButton<Country>
                model={MODEL_NAME}
                buttonName="Select country"
                labelKey="name"
                valueKey="code"
            />
        );

        const trigger = screen.getByRole("button", {
            name: /select country/i,
        });
        await user.click(trigger);

        const input = screen.getByPlaceholderText("Search...");
        await user.type(input, "ind");

        expect(screen.getByText("India")).toBeDefined();
        expect(screen.queryByText("United States")).toBeNull();

        await user.click(screen.getByText("India"));

        expect(screen.queryByPlaceholderText("Search...")).toBeNull();
        expect(screen.getByRole("button", { name: /india/i })).toBeDefined();
    });
});
