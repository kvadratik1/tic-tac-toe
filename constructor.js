export default function Board() {
  this.whoseTurn = "X"; // X or O
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

  this.checkIfGameOver = function () {};

  this.resetBoard = function () {
    this.whoseTurn = "X";
    this.board = [
      [, ,],
      [, ,],
      [, ,],
    ];
  };

  this.makeMove = function (position) {};
}
