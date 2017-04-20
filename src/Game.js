function Game(p1 = new Player("O"), p2 = new Player("X")) {
  this.playerQueue = [p1, p2];
  this.board = [["","",""],
                ["","",""],
                ["","",""]]
};

Game.prototype.play = function(x,y) {
  if (this.board[y][x] != "") {throw("That cell is already filled.")}
  this.board[y][x] = this.playerQueue[0].symbol;
  this.switchPlayers();
  if (this.isOver()) {
    // do something to send a message re: game over
    console.log("game over.")
    console.log(this.isWon() ? "the winner was " + this.playerQueue[this.playerQueue.length -1].symbol + "." : "there was no winner.")
  } else {
    // do something to send a message re: whose go is next
    console.log(this.playerQueue[0].symbol + "'s turn.")
  }
};

Game.prototype.isOver = function() {
  return this.isWon() || fullUp(this.board)
};

Game.prototype.isWon = function () {
  var rows = this.board;
  var diagonals = [[],[]];
  var columns = [[],[],[]];
  for (var i = 0; i<3; i++) {
    diagonals[0].push(rows[i][i]);
    diagonals[1].push(rows[i][2-i]);
    for (var x = 0; x<3; x++) { columns[x].push(rows[i][x]) }
  }
  return (checkForWin(diagonals) || checkForWin(columns)) || checkForWin(rows);
};

function checkForWin(enumerable) {
  var result = false;
  enumerable.forEach(function(arr) {
    if (isWinningCombo(arr))
      result = true;
  });
  return result;
};

function isWinningCombo(arr){
   for (var i = 1; i<3; i++) {
      if (arr[i] === "" || arr[i] !== arr[i-1])
         return false;
   }
   return true;
};

Game.prototype.switchPlayers = function() {
  this.playerQueue.push(this.playerQueue.shift());
};

function fullUp(board){
  var result = true;
  board.forEach(function(row) {
    if (row.includes("")) {result = false;} });
  return result;
};
