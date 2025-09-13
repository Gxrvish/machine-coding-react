Title: Build a Generic N×N Tic-Tac-Toe (React)

Goal:
Implement a fully functional, reusable Tic-Tac-Toe game in React that supports a configurable board size N×N and correctly determines the winner across rows, columns, and both diagonals.

Functional Requirements:
- Configurable board size:
  - The game must accept a numeric prop size (N ≥ 3) and render an N×N grid accordingly.
  - Changing size should reset the game cleanly with a fresh board.
- Turns and moves:
  - Players alternate turns between X and O, starting with X.
  - Clicking an empty cell places the current player’s symbol in that cell.
  - Clicking a filled cell or clicking after a game has ended should have no effect.
- Winner detection:
  - After each valid move, determine if there is a winner.
  - A winner is declared if any one of the following is fully occupied by the same symbol:
    - Any row.
    - Any column.
    - Main diagonal (top-left to bottom-right).
    - Anti-diagonal (top-right to bottom-left).
  - Once a winner is found, no further moves are accepted.
- Draw condition:
  - If all cells are filled and there is no winner, declare a draw.
- Status display:
  - Display one of the following at all times:
    - “Player X’s turn” or “Player O’s turn” while the game is ongoing.
    - “Winner: X” or “Winner: O” when a player wins.
    - “Draw” when the board is full with no winner.
- Reset:
  - Provide a Reset button that clears the board, resets status, and starts a new game for the current size.

Non-Functional Requirements:
- React only:
  - Use React with functional components and hooks.
  - Do not use external state management libraries or UI frameworks (utility CSS like Tailwind is fine if styling is needed).
- State management:
  - Represent the board as a 2D structure suitable for efficient reads and updates.
  - Prevent direct in-place mutation of state; ensure re-renders happen correctly.
- Reusability:
  - The main game component should be reusable—e.g.,  renders a 5×5 game.
- Performance/clarity:
  - Keep logic readable and modular (e.g., move handling, winner checking).
  - Avoid unnecessary re-renders or overly complex abstractions.

Edge Cases to Handle:
- Clicking a cell after the game has ended (winner or draw) must do nothing.
- Multiple clicks on the same already-filled cell must do nothing.
- size prop changes should reinitialize state cleanly.
- Support larger boards (e.g., N=10) without breaking correctness.

API and Component Expectations:
- Public API:
  - Component: TicTacToe
  - Props:
    - size: number (default 3; minimum 3)
- Internal logic:
  - Track:
    - Board state (N×N).
    - Current player (X/O).
    - Winner state or draw state.
  - Expose UI elements:
    - Grid of cells.
    - Status text.
    - Reset button.

Winning Logic Requirements (explicit):
- Rows: For any row i, all cells [i][0..N-1] must be identical and non-empty to win.
- Columns: For any column j, all cells [0..N-1][j] must be identical and non-empty to win.
- Main diagonal: All cells [k][k] for k in [0..N-1] must be identical and non-empty to win.
- Anti-diagonal: All cells [k][N-1-k] for k in [0..N-1] must be identical and non-empty to win.

Deliverables:
- Core component(s) with:
  - Board rendering driven by state.
  - Click handler for cells.
  - Winner/draw detection logic.
  - Status display and Reset control.
- Brief README-style notes explaining:
  - State shape and update strategy.
  - Where and how winner detection is invoked.
  - How size is used to generate the grid and adjust logic.

Constraints:
- No solution code is required in the interview; focus on design, correctness, and edge cases.
- Do not hardcode N; all logic should derive from the size prop.
- Avoid using third-party game libraries or winner-check helpers.

Evaluation Criteria:
- Correctness of winner detection across rows, columns, both diagonals for arbitrary N.
- Proper state updates without mutation and correct re-renders.
- Handling of end-game behavior (lock input after win/draw).
- Clean component structure, naming, and readability.
- Reusability for different sizes and ease of extending (e.g., theming, score tracking).

Follow-up Extensions (for discussion, not mandatory):
- Add a configurable “K-in-a-row to win” parameter (e.g., N=5, K=4).
- Add move history and “time travel” to previous states.
- Add basic AI for O (random or simple heuristic).
- Persist last game state in localStorage and resume.
- Animation/transitions for cell fills and win highlight.
