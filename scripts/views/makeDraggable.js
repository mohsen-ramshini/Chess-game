  // تابعی برای ایجاد ویژگی‌های درگ و دراپ
 export function makeDraggable(svgElement, pieceId) {
    svgElement.setAttribute("draggable", true);
    svgElement.setAttribute("id", pieceId);
    svgElement.classList.add("selectable");
  
    svgElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", pieceId);
    });
  }
  
  