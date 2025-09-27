import React from "react";

import { getFoldersInsideMachineCoding } from "./utils";

const MachineCoding = () => {
    const folders = getFoldersInsideMachineCoding();

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl bg-amber-400 mb-5">
                    Machine Coding links
                </h1>
                <ul>
                    {folders.map((f) => (
                        <li key={f} className="bg-blue-300 mb-1">
                            <a href={`/machine-coding/` + f}>{f}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MachineCoding;
