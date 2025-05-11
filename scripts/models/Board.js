class Board {
    constructor() {
        this.board = this.createEmptyBoard();
        this.whiteKing = null;
        this.blackKing = null;
        this.currentPlayer = 'white';
    }

    // ایجاد تخته خالی
    createEmptyBoard() {
        const board = [];
        for (let row = 0; row < 8; row++) {
            const rowArray = [];
            for (let col = 0; col < 8; col++) {
                rowArray.push(null);  
            }
            board.push(rowArray);
        }
        return board;
    }

    // چک کردن اینکه آیا خانه در محدوده تخته است
    isInsideBoard(row, col) {
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    }

    // دریافت مهره در یک خانه خاص
    getPieceAt(row, col) {
        if (this.isInsideBoard(row, col)) {
            return this.board[row][col];
        }
        return null;  // اگر خانه‌ای خارج از تخته باشد
    }

    // حرکت مهره از موقعیت مبدا به موقعیت مقصد
    movePiece(fromPosition, toPosition) {
        const [fromRow, fromCol] = fromPosition;
        const [toRow, toCol] = toPosition;

        const piece = this.getPieceAt(fromRow, fromCol);
        if (piece && piece.getPossibleMoves(this).some(move => move[0] === toRow && move[1] === toCol)) {
            // حرکت معتبر است
            this.board[toRow][toCol] = piece;
            this.board[fromRow][fromCol] = null;
            piece.movePiece(toPosition);  // به روزرسانی موقعیت مهره
            this.switchPlayer();  // تغییر نوبت بازیکن
        }
    }

    // تغییر نوبت بازیکن
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
    }

    // بررسی اینکه آیا شاه یک رنگ در وضعیت کیش قرار دارد
    isKingInCheck(color) {
        const king = color === 'white' ? this.whiteKing : this.blackKing;
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const piece = this.getPieceAt(row, col);
                if (piece && piece.color !== color && piece.getPossibleMoves(this).some(move => move[0] === king.position[0] && move[1] === king.position[1])) {
                    return true;  // شاه در خطر است
                }
            }
        }
        return false;  // شاه در خطر نیست
    }

    // به روز رسانی تخته بعد از هر حرکت
    updateBoard() {
        // در اینجا می‌توانید وضعیت تخته را به روز کنید
    }

    // تنظیم مجدد تخته به حالت ابتدایی
    resetBoard() {
        this.board = this.createEmptyBoard();
        // مهره‌ها را دوباره قرار بدهید (شامل تمام مهره‌ها)
    }

    // قرار دادن مهره‌ها در موقعیت‌های اولیه
    setUpPieces() {
        // ایجاد و قرار دادن مهره‌ها بر اساس موقعیت‌های ابتدایی بازی
        // مثلا:
        // this.board[0][0] = new Rook('black', [0, 0]);
        // this.board[7][7] = new Rook('white', [7, 7]);
    }
}
