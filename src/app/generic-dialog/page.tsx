"use client";

import { useState } from "react";

import Dialog from "./dialog";

const Page = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-screen">
            <button
                onClick={() => setOpen(true)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-2 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Open Dialog
            </button>
            <Dialog
                title="Confirm Action"
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={() => {
                    console.warn("Confirmed!");
                    setOpen(false);
                }}
            >
                <p>Are you sure you want to continue?</p>
            </Dialog>
        </div>
    );
};

export default Page;
