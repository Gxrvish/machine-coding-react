"use client";

import "./GridRowSortFilter.css";

import {
    faFilter,
    faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type GridRowSortFilterProps<T extends Record<string, unknown>> = {
    data: T[];
};

function GridRowSortFilter<T extends Record<string, unknown>>({
    data,
}: GridRowSortFilterProps<T>) {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    const columns = Object.keys(data[0]);

    return (
        <table className="table-auto border-collapse">
            <thead>
                <tr>
                    {columns.map((columnKey) => (
                        <th
                            key={columnKey}
                            className="p-2 border border-gray-300"
                        >
                            {columnKey.toUpperCase()}
                        </th>
                    ))}
                    <th className="gap-1">
                        <span className="flex gap-2">
                            <button className="p-1 text-sm border border-gray rounded">
                                <FontAwesomeIcon icon={faFilter} />
                            </button>
                            <button className="p-1 text-sm border border-gray rounded">
                                <FontAwesomeIcon icon={faFilterCircleXmark} />
                            </button>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((colKey) => (
                            <td
                                key={colKey}
                                className="p-2 border border-gray-300"
                            >
                                {String(row[colKey])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default GridRowSortFilter;
