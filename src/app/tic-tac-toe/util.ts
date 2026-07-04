export function checkWinner(
    board: string[][],
    row: number,
    col: number,
    player: boolean,
) {
    const playerSymbol = player ? "X" : "O";
    // Row
    if (board[row].every((cell) => cell === playerSymbol)) return true;
    // Column
    if (board.every((r) => r[col] === playerSymbol)) return true;
    // Main diagonal
    if (row === col && board.every((r, idx) => r[idx] === playerSymbol))
        return true;
    // Anti-diagonal
    if (
        row + col === board.length - 1 &&
        board.every(
            (r: string[], idx: number) =>
                r[board.length - 1 - idx] === playerSymbol,
        )
    )
        return true;

    return false;
}
