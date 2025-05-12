// setup.js
import { loadPiece } from './loadPiece.js';
import { Pieces } from "../config/constants.js";

export function arrangePieces() {
  const allSquares = document.querySelectorAll(".board li");
  const order = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  // مهره‌های سیاه
  for (let j = 0; j < 8; j++) {
    const piece = order[j];
    loadPiece(Pieces[piece].b, allSquares[j], `black-${piece}-${j}`);
  }

  // مهره‌های سفید
  for (let j = 56; j < 64; j++) {
    const piece = order[j - 56];
    loadPiece(Pieces[piece].w, allSquares[j], `white-${piece}-${j}`);
  }

  // سربازها
  for (let i = 8; i <= 15; i++) {
    loadPiece(Pieces.pawn.b, allSquares[i], `black-pawn-${i}`);
  }

  for (let i = 48; i < 56; i++) {
    loadPiece(Pieces.pawn.w, allSquares[i], `white-pawn-${i}`);
  }
}
