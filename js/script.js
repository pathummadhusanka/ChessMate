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