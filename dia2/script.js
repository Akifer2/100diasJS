const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameEnded = false;

cells.forEach(cell => {
    cell.addEventListener("click", handleClick, { once: true })
})

function handleClick(e) {
    if (gameEnded) return;
    const cell = e.target;
    cell.textContent = currentPlayer;
    checkWin();
    switchPlayer();
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combo of winningCombos) {
        if (cells[combo[0]].textContent === currentPlayer &&
            cells[combo[1]].textContent === currentPlayer &&
            cells[combo[2]].textContent === currentPlayer) {
            alert(`${currentPlayer} wins!`);
            gameOver = true;
        }
    }
}


function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}