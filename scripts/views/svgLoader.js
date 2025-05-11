// svgLoader.js
export async function loadSVGPiece(filePath, targetElement, pieceId) {
    try {
      // اگر فایل قبلا بارگذاری شده بود، از کش استفاده کنید
      const cachedSVG = sessionStorage.getItem(filePath);
      if (cachedSVG) {
        targetElement.innerHTML = cachedSVG;  // از کش استفاده کنید
        makeDraggable(targetElement, pieceId);
        return;
      }
  
      const response = await fetch(filePath);
      const svgText = await response.text();
  
      // ذخیره SVG در کش برای استفاده‌های بعدی
      sessionStorage.setItem(filePath, svgText);
  
      // اضافه کردن SVG به عنصر هدف
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
      alert("Error loading piece. Please try again later.");
    }
  }
  
  // تابعی برای ایجاد ویژگی‌های درگ و دراپ
  function makeDraggable(svgElement, pieceId) {
    svgElement.setAttribute("draggable", true);
    svgElement.setAttribute("id", pieceId);
    svgElement.classList.add("selectable");
  
    svgElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", pieceId);
    });
  }
  