"use client";

import {
    faFilter,
    faFilterCircleXmark,
    faUpDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useRef, useState } from "react";

type SortOrder = "asc" | "desc";
interface SortConfig<T> {
    key: keyof T;
    order: SortOrder;
}

export default function GridRowSortFilter<T extends Record<string, unknown>>({
    data,
}: {
    data: T[];
}) {
    const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);
    const [hiddenColumns, setHiddenColumns] = useState<Set<keyof T>>(new Set());
    const [showOverlay, setShowOverlay] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    const columns = useMemo(
        () => (data.length > 0 ? (Object.keys(data[0]) as (keyof T)[]) : []),
        [data],
    );

    const visibleColumns = useMemo(
        () => columns.filter((c) => !hiddenColumns.has(c)),
        [columns, hiddenColumns],
    );

    const sortedData = useMemo(() => {
        if (!sortConfig) return data;
        const { key, order } = sortConfig;
        const compare = (a: unknown, b: unknown): number => {
            if (a === b) return 0;
            // eslint-disable-next-line eqeqeq
            if (a == null) return -1;
            // eslint-disable-next-line eqeqeq
            if (b == null) return 1;
            if (typeof a === "string" && typeof b === "string")
                return a.localeCompare(b);
            if (typeof a === "number" && typeof b === "number") return a - b;
            return String(a).localeCompare(String(b));
        };
        return [...data].sort((a, b) =>
            order === "asc" ? compare(a[key], b[key]) : compare(b[key], a[key]),
        );
    }, [data, sortConfig]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!overlayRef.current?.contains(e.target as Node))
                setShowOverlay(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const toggleColumn = (col: keyof T) =>
        setHiddenColumns((prev) => {
            const next = new Set(prev);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            next.has(col) ? next.delete(col) : next.add(col);
            return next;
        });

    const handleSort = (key: keyof T) =>
        setSortConfig((prev) =>
            prev?.key === key
                ? { key, order: prev.order === "asc" ? "desc" : "asc" }
                : { key, order: "asc" },
        );

    if (!data?.length) return <div>No data available</div>;

    return (
        <div>
            <div className="relative flex w-full p-3 justify-center items-center gap-5">
                <button
                    className="p-1 border rounded"
                    onClick={() => setShowOverlay((p) => !p)}
                >
                    <FontAwesomeIcon icon={faFilter} />
                </button>
                <button
                    className="p-1 border rounded"
                    onClick={() => setHiddenColumns(new Set())}
                >
                    <FontAwesomeIcon icon={faFilterCircleXmark} />
                </button>

                {showOverlay && (
                    <div
                        ref={overlayRef}
                        className="absolute top-[47px] left-1/2 -translate-x-1/2 bg-white border rounded shadow-md p-3 z-50"
                    >
                        {columns.map((col) => (
                            <label
                                key={String(col)}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={!hiddenColumns.has(col)}
                                    onChange={() => toggleColumn(col)}
                                    className="accent-blue-500"
                                />
                                {String(col).toUpperCase()}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            <table className="table-auto border-collapse">
                <thead>
                    <tr>
                        {visibleColumns.map((col) => (
                            <th
                                key={String(col)}
                                className="p-2 border min-w-30"
                            >
                                <div className="flex justify-between items-center">
                                    {String(col).toUpperCase()}
                                    <button
                                        onClick={() => handleSort(col)}
                                        className="p-1 border rounded ml-2"
                                    >
                                        <FontAwesomeIcon icon={faUpDown} />
                                    </button>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, i) => (
                        <tr key={i}>
                            {visibleColumns.map((col) => (
                                <td key={String(col)} className="p-2 border">
                                    {String(row[col])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
