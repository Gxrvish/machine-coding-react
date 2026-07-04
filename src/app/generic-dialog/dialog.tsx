"use client";

import "./dialog.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Draggable from "react-draggable";

interface DialogProps {
    children: React.ReactNode;
    title: string;
    open: boolean; // controls visibility
    onClose?: () => void; // callback for closing
    onConfirm?: () => void; // optional callback for OK button
}

const Dialog: React.FC<DialogProps> = ({
    children,
    title,
    open,
    onClose,
    onConfirm,
}) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    if (!open) return null;

    return (
        <div className="dialog-overlay">
            <Draggable handle=".dragable" nodeRef={nodeRef}>
                <div className="dialog" ref={nodeRef}>
                    <nav className="header dragable">
                        <span className="dialog-title">{title}</span>
                        <span className="dialog-close" onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </nav>
                    <main className="body">{children}</main>
                    <footer className="footer">
                        <button
                            type="button"
                            onClick={onConfirm}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-2 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Ok
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-2 py-2 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Cancel
                        </button>
                    </footer>
                </div>
            </Draggable>
        </div>
    );
};

export default Dialog;
