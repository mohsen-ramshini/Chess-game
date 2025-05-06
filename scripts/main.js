import {Pieces} from "./config/constants.js"

const ChessBoardScreen = document.getElementsByClassName("board")[0];

async function loadSVGPiece(filePath, targetElement) {
  try {
    const response = await fetch(filePath);
    const svgText = await response.text();
    targetElement.innerHTML = svgText;
  } catch (error) {
    console.error("Error loading SVG:", error);
  }
}

function InitialSetup() {
  const list = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let i = 0; i < 8; i++) {
    const Row = document.createElement("ul");
    Row.classList.add("f-row", i % 2 === 0 ? "f-row-even" : "f-row-odd");

    for (let j = 0; j < 8; j++) {
      const Index = document.createElement("li");
      if (i === 7) {
        const Node = document.createTextNode(`${list[j]}`);
        Index.appendChild(Node);
      }
      if (j === 0) {
        const Node = document.createTextNode(`${i + 1}`);
        Index.appendChild(Node);
      }

      Row.appendChild(Index);
    }

    ChessBoardScreen.appendChild(Row);
  }
}

function ArrangingPices() {
  const allSquares = document.querySelectorAll(".board li");
  const order = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]; 
  
  
  for (let j = 0; j < 8; j++) {
    let piece = order[j];
    loadSVGPiece(Pieces[piece].w, allSquares[j]);
  }
  
  
  for (let i = 8; i <= 15; i++) {
    loadSVGPiece(Pieces.pawn.w, allSquares[i]);
  }
    
  
  for (let i = 48; i < 56; i++) {
    loadSVGPiece(Pieces.pawn.b, allSquares[i]);
  }

  
  for (let j = 56; j < 64; j++) {
    let piece = order[j - 56]; 
    loadSVGPiece(Pieces[piece].b, allSquares[j]);
  }
}




InitialSetup();
ArrangingPices();

