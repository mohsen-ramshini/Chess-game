class Rook extends Piece {
  constructor(color, position) {
      super(color, position);
      this.type = "Rook";
  }

  getPossibleMoves(board) {
      const moves = [];
      const [row, col] = this.position;

      const directions = [
          [-1, 0], 
          [1, 0],  
          [0, -1], 
          [0, 1],  
      ];

      for (const [dr, dc] of directions) {
          let r = row + dr;
          let c = col + dc;

          while (board.isInsideBoard(r, c)) {
              const target = board.getPieceAt(r, c);

              if (!target) {
                  moves.push([r, c]);
              } else {
                  if (target.color !== this.color) {
                      moves.push([r, c]); 
                  }
                  break; 
              }

              r += dr;
              c += dc;
          }
      }

      return moves;
  }
}
