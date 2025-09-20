"use client";

import { useState } from "react";

interface SnakeGameProps {
    gridSize?: number;
}

const SnakeGame: React.FC<SnakeGameProps> = ({ gridSize = 20 }) => {
    const gridArray = new Array(gridSize).fill(0);
    const [grid, setGrid] = useState(gridArray);
    return <div>SnakeGame</div>;
};

export default SnakeGame;
