"use client";
import React, { useRef, useState } from "react";

type Grid = number[][];
type Pos = { row: number; col: number };

interface InteractiveShapeProps {
    gridToBeRendered: Grid;
}

const InteractiveShape: React.FC<InteractiveShapeProps> = ({
    gridToBeRendered,
}) => {
    const cols = gridToBeRendered[0].length;

    // Helper: Initialize selected matrix
    const getInitialSelected = (): boolean[][] =>
        gridToBeRendered.map((row) => row.map(() => false));

    const [selected, setSelected] = useState<boolean[][]>(getInitialSelected());
    const [clickedCells, setClickedCells] = useState<Pos[]>([]);
    const [isUnselecting, setIsUnselecting] = useState<boolean>(false);

    const unselectInterval = useRef<NodeJS.Timeout | null>(null);

    // Safe: clear interval helper
    const clearUnselectInterval = () => {
        if (unselectInterval.current) {
            clearInterval(unselectInterval.current);
            unselectInterval.current = null;
        }
    };

    // Click handler
    function handleCellClick(row: number, col: number) {
        if (isUnselecting || selected[row][col]) return;

        const newSelected = selected.map((arr) => arr.slice());
        newSelected[row][col] = true;
        setSelected(newSelected);

        setClickedCells((prev) => {
            const newClickedCells = [...prev, { row, col }];
            const allActiveCells = gridToBeRendered
                .flat()
                .filter((v) => v === 1).length;
            if (newClickedCells.length === allActiveCells) {
                triggerUnselection(newClickedCells);
            }
            return newClickedCells;
        });
    }

    // Unselection: always use passed-in cells!
    function triggerUnselection(cells: Pos[], mode: "FIFO" | "LIFO" = "FIFO") {
        setIsUnselecting(true);
        let index = 0;
        const toUnselect = mode === "LIFO" ? [...cells].reverse() : [...cells];

        // Clear any existing intervals just in case
        clearUnselectInterval();

        unselectInterval.current = setInterval(() => {
            if (index < toUnselect.length) {
                const current = toUnselect[index];
                if (current) {
                    const { row, col } = current;
                    setSelected((prev) => {
                        const updated = prev.map((arr) => arr.slice());
                        updated[row][col] = false;
                        return updated;
                    });
                }
                index++;
            } else {
                clearUnselectInterval();
                setClickedCells([]);
                setIsUnselecting(false);
            }
        }, 1000);
    }

    function handleReset() {
        setSelected(getInitialSelected());
        setClickedCells([]);
        setIsUnselecting(false);
        clearUnselectInterval();
    }

    return (
        <div className="h-screen flex flex-col gap-10 items-center justify-center">
            <div>
                <button
                    onClick={handleReset}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={isUnselecting}
                >
                    Reset
                </button>
            </div>
            <div
                className={`grid gap-2`}
                style={{
                    gridTemplateColumns: `repeat(${cols}, 60px)`,
                }}
            >
                {gridToBeRendered.map((rowArr, rowIdx) =>
                    rowArr.map((cell, colIdx) =>
                        cell === 1 ? (
                            <div
                                key={`${rowIdx}-${colIdx}`}
                                onClick={() => handleCellClick(rowIdx, colIdx)}
                                className={`cursor-pointer w-14 h-14 rounded flex items-center justify-center
                                    border border-blue-500 transition
                                    ${
                                        selected[rowIdx][colIdx]
                                            ? "bg-green-400"
                                            : "bg-blue-300 hover:bg-blue-400"
                                    }
                                    ${isUnselecting ? "pointer-events-none opacity-70" : ""}
                                `}
                                style={{ userSelect: "none" }}
                            >
                                {rowIdx},{colIdx}
                            </div>
                        ) : (
                            <div
                                key={`${rowIdx}-${colIdx}`}
                                className="w-14 h-14"
                                style={{ visibility: "hidden" }}
                            />
                        ),
                    ),
                )}
            </div>
            <div>
                Selected order:&nbsp;
                {clickedCells.map(({ row, col }, i) => (
                    <span key={i}>
                        ({row},{col}){" "}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InteractiveShape;
