const ChessBoardScreen = document.getElementsByClassName("board")[0];

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

InitialSetup();
