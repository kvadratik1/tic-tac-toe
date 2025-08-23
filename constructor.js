export default function Board() {
  this.whoseTurn = "X"; // X or O
  this.stepsCounter = 0;
  this.winner = "";
  this.board = [
    [, ,],
    [, ,],
    [, ,],
  ];

  this.changeTurn = function () {
    if (this.whoseTurn === "X") {
      this.whoseTurn = "O";
    } else if (this.whoseTurn === "O") {
      this.whoseTurn = "X";
    }
  };

  this.checkIfGameOver = function () {
    if (
      (this.board[0][0] === "X" &&
        this.board[0][1] === "X" &&
        this.board[0][2] === "X") ||
      (this.board[1][0] === "X" &&
        this.board[1][1] === "X" &&
        this.board[1][2] === "X") ||
      (this.board[2][0] === "X" &&
        this.board[2][1] === "X" &&
        this.board[2][2] === "X") ||
      (this.board[0][0] === "X" &&
        this.board[0][1] === "X" &&
        this.board[0][2] === "X") ||
      (this.board[1][0] === "X" &&
        this.board[1][1] === "X" &&
        this.board[1][2] === "X") ||
      (this.board[2][0] === "X" &&
        this.board[2][1] === "X" &&
        this.board[2][2] === "X") ||
      (this.board[0][0] === "X" &&
        this.board[1][1] === "X" &&
        this.board[2][2] === "X") ||
      (this.board[2][0] === "X" &&
        this.board[1][1] === "X" &&
        this.board[0][2] === "X")
    ) {
      this.winner = "X";
    } else if (
      (this.board[0][0] === "O" &&
        this.board[0][1] === "O" &&
        this.board[0][2] === "O") ||
      (this.board[1][0] === "O" &&
        this.board[1][1] === "O" &&
        this.board[1][2] === "O") ||
      (this.board[2][0] === "O" &&
        this.board[2][1] === "O" &&
        this.board[2][2] === "O") ||
      (this.board[0][0] === "O" &&
        this.board[0][1] === "O" &&
        this.board[0][2] === "O") ||
      (this.board[1][0] === "O" &&
        this.board[1][1] === "O" &&
        this.board[1][2] === "O") ||
      (this.board[2][0] === "O" &&
        this.board[2][1] === "O" &&
        this.board[2][2] === "O") ||
      (this.board[0][0] === "O" &&
        this.board[1][1] === "O" &&
        this.board[2][2] === "O") ||
      (this.board[2][0] === "O" &&
        this.board[1][1] === "O" &&
        this.board[0][2] === "O")
    ) {
      this.winner = "O";
    } else if (this.stepsCounter === 9) {
      this.winner = "Tie";
    }
  };

  this.resetBoard = function () {
    this.whoseTurn = "X";
    this.board = [
      [, ,],
      [, ,],
      [, ,],
    ];
  };

  this.makeMove = function (position) {
    if (
      this.board[position[0]][position[1]] !== "X" &&
      this.board[position[0]][position[1]] !== "O" &&
      this.stepsCounter !== 9
    ) {
      this.board[position[0]][position[1]] = this.whoseTurn;
      this.changeTurn();
      this.checkIfGameOver();
      console.log(this.board);
      console.log(this.whoseTurn);
    } else return;
  };
}
