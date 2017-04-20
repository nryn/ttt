function Game(p1 = new Player("O"), p2 = new Player("X"), board = new Board()) {
  this.playerQueue = [p1, p2];
  this.board = board;
};

Game.prototype.play = function(x,y) {
  this.board.set(x,y,this.playerQueue[0].symbol)
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

Game.prototype.switchPlayers = function() {
  this.playerQueue.push(this.playerQueue.shift());
};

Game.prototype.isOver = function() {
  return this.isWon() || this.board.isFull()
};

Game.prototype.isWon = function () {
  return (checkForWin(this.board.diagonals()) || checkForWin(this.board.columns())) || checkForWin(this.board.rows());
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
