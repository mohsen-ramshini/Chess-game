// piece.js
import { Pieces } from "./constants.js";
export async function loadPiece(filePath, targetElement, pieceId) {
  try {
    const response = await fetch(filePath);
    const svgText = await response.text();
    const div = document.createElement("div");
    div.classList.add("center");
    div.innerHTML = svgText;
    targetElement.appendChild(div);

    const svg = targetElement.querySelector("svg");
    if (svg) {
      makeDraggable(div, pieceId);
    }
  } catch (error) {
    console.error("Error loading SVG:", error);
  }
}
