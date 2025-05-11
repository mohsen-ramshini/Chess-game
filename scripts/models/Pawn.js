class Pawn extends Piece {
    constructor(color,postion){
        super(color,postion);
        this.type = "Pawn";
    }

    getPossibleMoves(board) {
        const moves = [];
        const [row, col] = this.position;
        const direction = this.color === 'white' ? -1 : 1;
      
        // یک خانه جلو
        if (board.isEmpty(row + direction, col)) {
          moves.push([row + direction, col]);
      
          // دو خانه جلو (اگر هنوز حرکت نکرده)
          if (!this.hasMoved && board.isEmpty(row + 2 * direction, col)) {
            moves.push([row + 2 * direction, col]);
          }
        }
      
        // زدن قطری (چپ و راست) اگر دشمن اونجاست
        for (let dc of [-1, 1]) {
          const target = board.getPieceAt(row + direction, col + dc);
          if (target && target.color !== this.color) {
            moves.push([row + direction, col + dc]);
          }
        }
      
        return moves;
      }
      
}