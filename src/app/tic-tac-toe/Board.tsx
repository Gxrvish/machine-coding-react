"use client";

interface BoardProps {
    board: number[][];
    size: number;
    handleClick: (row: number, col: number) => void;
    cellSize?: number;
}

const Board = ({ board, size, handleClick, cellSize = 50 }: BoardProps) => {
    return (
        <div
            className="grid gap-2"
            style={{
                gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
            }}
        >
            {board.map((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                    <div
                        key={`${rowIndex}-${cellIndex}`}
                        className="border border-solid border-black flex items-center justify-center cursor-pointer font-semibold text-3xl"
                        style={{
                            width: `${cellSize}px`,
                            height: `${cellSize}px`,
                        }}
                        onClick={() => handleClick(rowIndex, cellIndex)}
                        role="button"
                        tabIndex={0}
                    >
                        {cell}
                    </div>
                )),
            )}
        </div>
    );
};

export default Board;
