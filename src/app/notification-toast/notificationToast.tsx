"use client";
import "./notification.css";

import { useState } from "react";

type ToastType = "success" | "info" | "warning" | "danger";

interface Toast {
    id: number;
    type: ToastType;
    message: string;
}

const NotificationToast = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const handleAdd = (type: ToastType, message: string): void => {
        const newToast = { id: Date.now(), type, message };
        setToasts((prevToasts) => [...prevToasts, newToast]);

        setTimeout(() => {
            setToasts((prevToasts) =>
                prevToasts.filter((toast) => toast.id !== newToast.id),
            );
        }, 5000);
    };

    const handleClose = (id: number) => {
        setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast.id !== id),
        );
    };

    const getColor = (type: ToastType) => {
        switch (type) {
            case "success":
                return "bg-green-500";
            case "info":
                return "bg-blue-500";
            case "warning":
                return "bg-yellow-500 text-black";
            case "danger":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <div className="container mx-auto">
            {/* Toast Container */}
            <div className="toast-container fixed top-5 right-5 space-y-2 z-50">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`toast text-white px-4 py-2 rounded shadow-lg flex justify-between items-center w-72 ${getColor(toast.type)}`}
                    >
                        <span>{toast.message}</span>
                        <button
                            onClick={() => handleClose(toast.id)}
                            className="ml-4 font-bold"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 flex-wrap justify-center items-center min-h-screen">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleAdd("success", "Success Toast")}
                >
                    Success Toast
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleAdd("info", "Info Toast")}
                >
                    Info Toast
                </button>
                <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
                    onClick={() => handleAdd("warning", "Warning Toast")}
                >
                    Warning Toast
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleAdd("danger", "Danger Toast")}
                >
                    Danger Toast
                </button>
            </div>
        </div>
    );
};

export default NotificationToast;
