import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import SearchAhead from "@/app/machine-coding/search-ahead/SearchAhead";

describe("SearchAhead", () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    it("fetches and renders results", async () => {
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({
                products: [{ id: 1, title: "iPhone 15" }],
            }),
        });

        vi.stubGlobal("fetch", fetchMock);

        render(<SearchAhead />);

        await waitFor(
            () => {
                expect(fetchMock).toHaveBeenCalledTimes(1);
            },
            { timeout: 2500 }
        );

        await waitFor(() => {
            expect(screen.queryByText("Loading...")).toBeNull();
        });

        await waitFor(() => {
            expect(screen.getByText("iPhone 15")).toBeDefined();
        });

        const input = screen.getByRole("textbox") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "phone" } });

        await waitFor(
            () => {
                expect(fetchMock).toHaveBeenCalledTimes(2);
            },
            { timeout: 2500 }
        );

        await waitFor(() => {
            expect(screen.queryByText("Loading...")).toBeNull();
        });
    });
});
