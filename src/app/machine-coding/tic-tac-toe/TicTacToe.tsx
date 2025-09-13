"use client";

import { useState } from "react";

import Board from "./Board";
import { checkWinner } from "./util";

const TicTacToe = ({ gridSize }: { gridSize: number }) => {
    const [board, setBoard] = useState(
        Array.from({ length: gridSize }, () => Array(gridSize).fill(null)),
    );
    const [turnX, setTurnX] = useState(true);
    const [winner, setWinner] = useState("");

    const status = turnX ? "Player X turn" : "Player O turn";

    const handleClick = (rowIdx: number, colIdx: number) => {
        if (winner) {
            handleReset();
        }
        if (board[rowIdx][colIdx]) {
            return;
        }
        const deepCopyOfBoard = structuredClone(board);
        deepCopyOfBoard[rowIdx][colIdx] = turnX ? "X" : "O";
        if (checkWinner(deepCopyOfBoard, rowIdx, colIdx, turnX)) {
            setWinner(`${turnX ? "X" : "O"} is the winner`);
        }
        setBoard(deepCopyOfBoard);
        setTurnX(!turnX);
    };

    const handleReset = () => {
        setBoard(
            Array.from({ length: gridSize }, () => Array(gridSize).fill(null)),
        );
        setTurnX(true);
        setWinner("");
    };

    return (
        <div className="flex flex-col items-center">
            <Board board={board} size={gridSize} handleClick={handleClick} />
            <div className="my-3 text-xl bg-red-100 p-2">{status}</div>
            {winner && <div>{winner}</div>}
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    );
};

export default TicTacToe;
