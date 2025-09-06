import Board from "./constructor.js";

const board = new Board();
const score = { X: 0, O: 0 };

const cells = document.querySelectorAll(".cell");
const display = document.querySelector("#display");

const oldScore = score;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", () => {
    const cellPosition = cells[i].getAttribute("value");
    const array = JSON.parse(cellPosition);
    cells[i].textContent = board.whoseTurn;
    board.makeMove(array);

    showResults();
  });
}

const showResults = function () {
  if (board.winner === "X") {
    score.X = score.X + 1;
    display.textContent = `Scores X:${score.X} O:${score.O}`;
    resetGame();
  } else if (board.winner === "O") {
    score.O = score.O + 1;
    display.textContent = `Scores X:${score.X} O:${score.O}`;
    resetGame();
  } else if (board.winner === "Tie") {
    resetGame();
    return;
  }
};

const resetGame = function () {
  board.resetBoard();
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
};

const showWinner = function () {
  if (score.X === 3) {
    display.textContent = `Winner is X`;
  } else if (score.O === 3) {
    display.textContent = `Winner is O`;
  }
};
