class Piece {
  constructor(color, position) {
      this.color = color;
      this.position = position;
      this.hasMoved = false;
      this.type = 'piece';  
  }

  
  getPossibleMoves(board) {
      throw new Error("This method should be implemented by subclasses.");
  }

  movePiece(newPosition) {
      this.position = newPosition;
      this.hasMoved = true;
  }

  isSameColor(otherPiece) {
      return otherPiece.color === this.color;
  }

  getLegalMoves(board) {
      const possibleMoves = this.getPossibleMoves(board);
      return possibleMoves.filter(move => {
          return !this.wouldBeInCheckAfterMove(board, move);
      });
  }

  wouldBeInCheckAfterMove(board, move) {
      const originalPosition = this.position;
      this.movePiece(move);
      const inCheck = board.isKingInCheck(this.color);
      this.position = originalPosition;
      return inCheck;
  }

  setHasMoved() {
      this.hasMoved = true;
  }

  getType() {
      return this.type;
  }
}
