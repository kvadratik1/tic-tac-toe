import Board from "./constructor.js";

const board = new Board();
const score = { X: 0, O: 0 };

const showResults = function () {
  if (board.winner === "X") {
    score.X = score.X + 1;
    console.log(score);
  } else if (board.winner === "O") {
    score.O = score.O + 1;
    console.log(score);
  } else if (board.winner === "Tie") {
    console.log(score);
    return;
  }
};

const gameLoop = function () {
  board.makeMove([0, 0]);
  board.makeMove([0, 1]);
  board.makeMove([1, 0]);
  board.makeMove([2, 2]);
  board.makeMove([2, 0]);
  showResults();
  console.log(board.winner);
};

const updateUI = function () {};

gameLoop();
