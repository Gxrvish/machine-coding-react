import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FileExplorer from "@/app/machine-coding/file-explorer/FileExplorer";

describe("FileExplorer", () => {
    it("toggles nested items for folders", () => {
        const folderData = {
            name: "root",
            type: "folder",
            children: [
                {
                    name: "docs",
                    type: "folder",
                    children: [{ name: "readme.md", type: "file" }],
                },
            ],
        };

        render(<FileExplorer folderData={folderData} />);

        expect(screen.queryByText("docs")).toBeNull();

        fireEvent.click(screen.getByText("root"));
        expect(screen.getByText("docs")).toBeDefined();

        fireEvent.click(screen.getByText("docs"));
        expect(screen.getByText("readme.md")).toBeDefined();
    });
});
