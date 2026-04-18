import React from "react";
import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import ProgressBar from "@/app/machine-coding/progress-bar/ProgressBar";

describe("ProgressBar", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("progresses from 0 to 100", () => {
        const { container } = render(<ProgressBar />);
        const bar = container.querySelector(".progress") as HTMLDivElement;

        expect(bar).not.toBeNull();
        expect(bar.style.transform).toBe("translateX(-100%)");

        act(() => {
            vi.advanceTimersByTime(150);
        });
        expect(bar.style.transform).toBe("translateX(-95%)");

        act(() => {
            vi.advanceTimersByTime(3000);
        });
        expect(bar.style.transform).toBe("translateX(0%)");
    });
});
