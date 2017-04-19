function Game() {
  this.board = [["","",""],
                ["","",""],
                ["","",""]]
};

Game.prototype.isWon = function () {
  var rows = this.board;
  var diagonals = [[],[]];
  var columns = [[],[],[]];

  for (var i = 0; i<3; i++) {
    diagonals[0].push(rows[i][i])
    diagonals[1].push(rows[i][2-i])
    for (var x = 0; x<3; x++) { columns[x].push(rows[i][x]) }
  }
  return (checkForWin(diagonals) || checkForWin(columns)) || checkForWin(rows)
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
}
