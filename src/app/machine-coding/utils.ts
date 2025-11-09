import fs from "fs";
import path from "path";

export function getFoldersInsideMachineCoding() {
    const dir = path.join(process.cwd(), "src/app/machine-coding");
    return fs
        .readdirSync(dir)
        .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
}
