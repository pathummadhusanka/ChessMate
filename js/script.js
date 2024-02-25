let playerTurn = 'light';
let selectedPiece = null;

function createBoard() {
    const board = document.createElement('div');
    board.setAttribute('id', 'board');

    for(let i = 0; i < 64; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');

        const row = Math.floor(i / 8);
        const col = i - (row * 8);

        if(row % 2 === 0) {
            squareElement.classList.add(col % 2 === 0 ? 'light': 'dark');
        }else {
            squareElement.classList.add(col % 2 === 0 ? 'dark': 'light');
        }
        
        board.append(squareElement);
    }
    document.body.append(board);
}

createBoard();

function initPieces() {
    const initPiecePositions = {
        0: ['rook', 'dark'],
        1: ['knight', 'dark'],
        2: ['bishop', 'dark'],
        3: ['king', 'dark'],
        4: ['queen', 'dark'],
        5: ['bishop', 'dark'],
        6: ['knight', 'dark'],
        7: ['rook', 'dark'],
        8: ['pawn', 'dark'],
        9: ['pawn', 'dark'],
        10: ['pawn', 'dark'],
        11: ['pawn', 'dark'],
        12: ['pawn', 'dark'],
        13: ['pawn', 'dark'],
        14: ['pawn', 'dark'],
        15: ['pawn', 'dark'],
        48: ['pawn', 'light'],
        49: ['pawn', 'light'],
        50: ['pawn', 'light'],
        51: ['pawn', 'light'],
        52: ['pawn', 'light'],
        53: ['pawn', 'light'],
        54: ['pawn', 'light'],
        55: ['pawn', 'light'],
        56: ['rook', 'light'],
        57: ['knight', 'light'],
        58: ['bishop', 'light'],
        59: ['king', 'light'],
        60: ['queen', 'light'],
        61: ['bishop', 'light'],
        62: ['knight', 'light'],
        63: ['rook', 'light']
    };

    const squares = document.querySelectorAll('.square');

    squares.forEach((square, j) => {
        if(initPiecePositions[j]) {
            const pieceElement = document.createElement('div');
            pieceElement.classList.add('piece');
            pieceElement.setAttribute('draggable', 'true');
            pieceElement.classList.add(initPiecePositions[j][0], initPiecePositions[j][1]);

            pieceElement.innerHTML = `<img src="./img/piece/${initPiecePositions[j][0]}-${initPiecePositions[j][1]}.webp" alt="${initPiecePositions[j][0]}-${initPiecePositions[j][1]}">`;

            square.append(pieceElement);
        }
    });
}

initPieces();

function piceClicks() {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square, id) => {
        square.addEventListener('click', () => {
            if(square.firstChild && square.firstChild.classList.contains('piece')) {

                if((playerTurn === 'light' && square.firstChild.classList.contains('light')) || (playerTurn === 'dark' && square.firstChild.classList.contains('dark'))) {
                    if(selectedPiece) {
                        if(selectedPiece === id) {
                            square.classList.remove('selected');
                            selectedPiece = null;
                        }else {
                            squares.forEach((oldSelectedSquare, oldId) => {
                                oldId === selectedPiece ? oldSelectedSquare.classList.remove('selected'): undefined;
                            });
                            square.classList.add('selected');
                            selectedPiece = id;
                        }
                    }else {
                        square.classList.add('selected');
                        selectedPiece = id;
                    }
                }
            }
        });
    });
}

piceClicks();