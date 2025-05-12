// uiEvents.js
export function initializeDragAndDrop() {
    const allSquares = document.querySelectorAll(".board li");
  
    for (const square of allSquares) {
      square.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
  
      square.addEventListener("dragenter", (event) => {
        event.preventDefault();
        square.classList.add("hover-border");
      });
  
      square.addEventListener("dragleave", () => {
        square.classList.remove("hover-border");
      });
  
      square.addEventListener("drop", (event) => {
        event.preventDefault();
        square.classList.remove("hover-border");
        const pieceId = event.dataTransfer.getData("text/plain");
        const piece = document.getElementById(pieceId);
        if (piece) {
          square.appendChild(piece);
        }
      });
    }
  }

  
  
  