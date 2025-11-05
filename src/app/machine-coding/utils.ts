import fs from "fs";
import path from "path";

export function getFoldersInsideMachineCoding() {
    const dir = path.join(process.cwd(), "src/app/machine-coding");
    return fs
        .readdirSync(dir)
        .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
}

export const generateData = (count = 10000) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        country: ["India", "USA", "Germany", "Japan"][i % 4],
    }));
};
