let currentPlayer = 'X';
let gridSize = 3;
let timer;
let timeLeft = 10;
let gameActive = true;
let gamePaused = false;

const gridElement = document.getElementById('grid');
const timerDisplay = document.getElementById('timer-display');
const statusDisplay = document.getElementById('status');
const pauseResumeBtn = document.getElementById('pause-resume-btn');

function setGridSize(size) {
    gridSize = size;
    resetGame();
}

function resetGame() {
    gameActive = true;
    gamePaused = false;
    currentPlayer = 'X';
    timeLeft = 20;
    timerDisplay.textContent = timeLeft;
    clearInterval(timer);
    startTimer();
    updatePauseResumeBtn();

    gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 60px)`;
    gridElement.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', handleCellClick);
        gridElement.appendChild(cell);
    }

    statusDisplay.textContent = '';
}

function startTimer() {
    timer = setInterval(() => {
        if (!gamePaused) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft === 0) {
                switchPlayer();
            }
        }
    }, 1000);
}

function handleCellClick(e) {
    if (!gameActive || gamePaused) return;

    const cell = e.target;
    if (cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    checkGameStatus();

    if (gameActive) {
        switchPlayer();
    }
}

function switchPlayer() {
    timeLeft = 20;
    timerDisplay.textContent = timeLeft;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkGameStatus() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const lines = [];

    // Rows
    for (let i = 0; i < gridSize; i++) {
        lines.push(cells.slice(i * gridSize, (i + 1) * gridSize));
    }

    // Columns
    for (let i = 0; i < gridSize; i++) {
        lines.push(cells.filter((_, index) => index % gridSize === i));
    }

    // Diagonals
    lines.push(cells.filter((_, index) => index % (gridSize + 1) === 0));
    lines.push(cells.filter((_, index) => index % (gridSize - 1) === 0 && index > 0 && index < gridSize * gridSize - 1));

    for (const line of lines) {
        if (line.every(cell => cell.textContent === currentPlayer)) {
            gameActive = false;
            statusDisplay.textContent = `Player ${currentPlayer} wins!`;
            clearInterval(timer);
            return;
        }
    }

    if (cells.every(cell => cell.textContent !== '')) {
        gameActive = false;
        statusDisplay.textContent = 'Draw!';
        clearInterval(timer);
    }
}

function togglePauseResume() {
    gamePaused = !gamePaused;
    updatePauseResumeBtn();
}

function updatePauseResumeBtn() {
    if (gamePaused) {
        pauseResumeBtn.textContent = '▶';
    } else {
        pauseResumeBtn.textContent = '||';
    }
}

document.addEventListener('DOMContentLoaded', resetGame);
