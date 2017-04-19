function Game() {
  this.board = {
    topRow: ["","",""],
    midRow: ["","",""],
    botRow: ["","",""]
  }
};

Game.prototype.isWinHorizontal = function() {
  var that = this;
  var result = false;
  Object.keys(this.board).forEach(function(row) {
    if (isWinningCombo(that.board[row]))
      result = true;
  });
  return result;
};


Game.prototype.isWinVertical = function() {
  var that = this;
  var columns = [[],[],[]];
  Object.keys(this.board).forEach( function(row){
    for (var i = 0; i<3; i++) {
      columns[i].push(that.board[row][i]);
    };
  });
  var result = false;
  columns.forEach(function(column) {
    if (isWinningCombo(column))
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
}
