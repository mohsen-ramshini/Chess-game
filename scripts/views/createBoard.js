    // board.js
export function createBoard() {
    const list = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const ChessBoardScreen = document.getElementsByClassName("board")[0];
  
    for (let i = 0; i < 8; i++) {
      const Row = document.createElement("ul");
      Row.classList.add("f-row", i % 2 === 0 ? "f-row-even" : "f-row-odd");
  
      for (let j = 0; j < 8; j++) {
        const Index = document.createElement("li");
        Index.setAttribute("data-index", `${i}-${j}`);
        Row.appendChild(Index);
      }
  
      ChessBoardScreen.appendChild(Row);
    }
  }
  