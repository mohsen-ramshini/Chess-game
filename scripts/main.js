import { createBoard } from './views/createBoard.js';
import { arrangePieces } from './views/arrangePieces.js';
import { initializeDragAndDrop } from './views/initializeDragAndDrop.js';

function main() {
  createBoard();
  arrangePieces();
  initializeDragAndDrop();
}


main();
