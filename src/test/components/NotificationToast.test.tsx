import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import NotificationToast from "@/app/machine-coding/notification-toast/notificationToast";

describe("NotificationToast", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("adds and closes a toast", () => {
        render(<NotificationToast />);

        fireEvent.click(screen.getByRole("button", { name: "Success Toast" }));

        expect(screen.getAllByText("Success Toast").length).toBe(2);

        fireEvent.click(screen.getByRole("button", { name: "×" }));

        expect(screen.getAllByText("Success Toast").length).toBe(1);
    });

    it("auto-removes toast after timeout", () => {
        render(<NotificationToast />);

        fireEvent.click(screen.getByRole("button", { name: "Info Toast" }));
        expect(screen.getAllByText("Info Toast").length).toBe(2);

        act(() => {
            vi.advanceTimersByTime(5000);
        });

        expect(screen.getAllByText("Info Toast").length).toBe(1);
    });
});
