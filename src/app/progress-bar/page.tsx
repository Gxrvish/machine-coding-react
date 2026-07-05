"use client";

// @ts-expect-error: side-effect CSS import without type declarations
import "./ProgressBar.css";

import { useState } from "react";

import ProgressBar from "./ProgressBar";

const Page = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="wrapwrap">
            {show && <ProgressBar />}
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
    );
};

export default Page;
