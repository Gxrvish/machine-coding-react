"use client";

import { useEffect, useState } from "react";

interface SnakeGameProps {
    gridSize?: number;
}

const SnakeGame: React.FC<SnakeGameProps> = ({ gridSize = 20 }) => {
    const [snakeBody, setSnakeBody] = useState<Array<[number, number]>>([
        [5, 5],
    ]);
    const [direction, setDirection] = useState<[number, number]>([0, 1]);
    const [food, setFood] = useState<[number, number]>([10, 10]);
    const [grow, setGrow] = useState(false);

    const spawnFood = (): [number, number] => {
        return [
            Math.floor(Math.random() * gridSize),
            Math.floor(Math.random() * gridSize),
        ];
    };

    // Snake movement
    useEffect(() => {
        const interval = setInterval(() => {
            setSnakeBody((prevSnakeBody) => {
                const newHead: [number, number] = [
                    prevSnakeBody[0][0] + direction[0],
                    prevSnakeBody[0][1] + direction[1],
                ];

                // If out of bounds or hitting itself -> reset
                if (
                    newHead[0] < 0 ||
                    newHead[1] < 0 ||
                    newHead[0] >= gridSize ||
                    newHead[1] >= gridSize ||
                    prevSnakeBody.some(
                        ([y, x]) => y === newHead[0] && x === newHead[1],
                    )
                ) {
                    setDirection([0, 1]);
                    return [[5, 5]]; // reset to 1 cell
                }

                const copySnakeBody = [...prevSnakeBody];

                if (newHead[0] === food[0] && newHead[1] === food[1]) {
                    setFood(spawnFood());
                    setGrow(true);
                }

                copySnakeBody.unshift(newHead);

                if (grow) {
                    setGrow(false);
                } else {
                    copySnakeBody.pop();
                }

                return copySnakeBody;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [direction, food, grow, gridSize]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowUp" && direction[0] !== 1)
                setDirection([-1, 0]);
            if (e.key === "ArrowDown" && direction[0] !== -1)
                setDirection([1, 0]);
            if (e.key === "ArrowLeft" && direction[1] !== 1)
                setDirection([0, -1]);
            if (e.key === "ArrowRight" && direction[1] !== -1)
                setDirection([0, 1]);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [direction]);

    const isSnakeBody = (y: number, x: number): boolean => {
        return snakeBody.some(([sy, sx]) => sy === y && sx === x);
    };

    return (
        <div
            className="snake-container"
            style={{
                display: "grid",
                gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                width: `${gridSize * 20}px`,
                height: `${gridSize * 20}px`,
                border: "1px solid black",
            }}
        >
            {Array.from({ length: gridSize }).map((_, yc) =>
                Array.from({ length: gridSize }).map((_, xc) => {
                    const isFood = food[0] === yc && food[1] === xc;
                    return (
                        <div
                            key={`${yc}-${xc}`}
                            className="cell"
                            style={{
                                backgroundColor: isSnakeBody(yc, xc)
                                    ? "green"
                                    : isFood
                                      ? "red"
                                      : "white",
                            }}
                        ></div>
                    );
                }),
            )}
        </div>
    );
};

export default SnakeGame;
