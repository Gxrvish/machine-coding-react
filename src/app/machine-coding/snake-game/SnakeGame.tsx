"use client";
import "./SnakeGame.css";

import { useState } from "react";

interface SnakeGameProps {
    gridSize?: number;
}

const SnakeGame: React.FC<SnakeGameProps> = ({ gridSize = 20 }) => {
    const [snakeBody, setSnakeBody] = useState<Array<[number, number]>>([
        [5, 5],
        [6, 5],
        [7, 5],
    ]);
    const createGrid = () =>
        Array.from({ length: gridSize }, () => Array(gridSize).fill(""));

    const [grid, setGrid] = useState<string[][]>(createGrid);

    const isSnakeBody = (xx: number, yy: number): boolean => {
        return snakeBody.some(([y, x]) => y === xx && x === yy);
    };

    return (
        <div
            className="snake-container"
            style={{
                height: `${gridSize}rem`,
            }}
        >
            {grid.map((row, yc) => (
                <span className="row" key={yc}>
                    {row.map((cell, xc) => (
                        <div
                            className={
                                "cell" +
                                (isSnakeBody(yc, xc) ? " snake-cell" : "")
                            }
                            key={`${yc}-${xc}`}
                        ></div>
                    ))}
                </span>
            ))}
        </div>
    );
};

export default SnakeGame;
