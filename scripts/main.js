  import { Pieces } from "./config/constants.js";

  const ChessBoardScreen = document.getElementsByClassName("board")[0];

  // ساخت صفحه شطرنج
  function InitialSetup() {
    const list = ["a", "b", "c", "d", "e", "f", "g", "h"];

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

  // تابع مستقل برای قابل‌درگ کردن یک عنصر
  function makeDraggable(svgElement, pieceId) {
    svgElement.setAttribute("draggable", true);
    svgElement.setAttribute("id", pieceId);
    svgElement.classList.add("selectable");

    svgElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", pieceId);
    });
  }

  // بارگذاری مهره در یک خانه و اعمال ویژگی‌های درگ
  async function loadSVGPiece(filePath, targetElement, pieceId) {
    try {
      const response = await fetch(filePath);
      const svgText = await response.text();
      const div = document.createElement("div")
      div.classList.add("center")
      div.innerHTML = svgText;
      targetElement.appendChild(div)

      const svg = targetElement.querySelector("svg");
      if (svg) {
        makeDraggable(div, pieceId);
      }
    } catch (error) {
      console.error("Error loading SVG:", error);
    }
  }

  // چیدمان اولیه مهره‌ها
  function ArrangingPices() {
    const allSquares = document.querySelectorAll(".board li");
    const order = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

    // سطر اول - مهره‌های سیاه
    for (let j = 0; j < 8; j++) {
      const piece = order[j];
      loadSVGPiece(Pieces[piece].b, allSquares[j], `black-${piece}-${j}`);
    }

    // سطر دوم - سربازهای سیاه
    for (let i = 8; i <= 15; i++) {
      loadSVGPiece(Pieces.pawn.b, allSquares[i], `black-pawn-${i}`);
    }

    // سطر هفتم - سربازهای سفید
    for (let i = 48; i < 56; i++) {
      loadSVGPiece(Pieces.pawn.w, allSquares[i], `white-pawn-${i}`);
    }

    // سطر هشتم - مهره‌های سفید
    for (let j = 56; j < 64; j++) {
      const piece = order[j - 56];
      loadSVGPiece(Pieces[piece].w, allSquares[j], `white-${piece}-${j}`);
    }
  }

  // فعال‌سازی خانه‌های خالی برای دریافت مهره‌ها
  function GetEmptyHouses() {
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
  

  // اجرا
  InitialSetup();
  ArrangingPices();
  GetEmptyHouses();
