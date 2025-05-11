class King extends Piece {
    constructor(color, position) {
      super(color, position);
      this.type = "King";
    }
  
    getPossibleMoves(board) {
      const moves = [];
      const [row, col] = this.position;
  
      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ];
  
      for (const [dr, dc] of directions) {
        const r = row + dr;
        const c = col + dc;
  
        if (board.isInsideBoard(r, c)) {
          const target = board.getPieceAt(r, c);
          if (!target || target.color !== this.color) {
            moves.push([r, c]);
          }
        }
      }
  
      return moves;
    }
  }
  