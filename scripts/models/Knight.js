class Knight extends Piece {
    constructor(color, position) {
        super(color, position);
        this.type = "Knight";
    }

    getPossibleMoves(board) {
        const moves = [];
        const [row, col] = this.position;
        const directions = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2],
        ];

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (!board.isInsideBoard(newRow, newCol)) continue;

            const target = board.getPieceAt(newRow, newCol);
            if (!target || target.color !== this.color) {
                moves.push([newRow, newCol]);
            }
        }

        return moves;
    }
}
