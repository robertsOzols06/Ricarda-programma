let rezgaIzm = 5;
let minuSk = 5;
let minuVietas = new Set();
let revealedSafe = 0;
let totalSafe = 0;
let gameOver = false;
function saktSpeli() {
    const rezgaIzmers = parseInt(document.getElementById('gridSize').value);
    const minuSkaits = parseInt(document.getElementById('bombCount').value);
    rezgaIzm = rezgaIzmers;
    minuSk = minuSkaits;
    revealedSafe = 0;
    gameOver = false;
    bombPositions = new Set();
    totalSafe = rezgaIzm * rezgaIzm - minuSk;
}