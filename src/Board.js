function Board() {
  this.map = [["","",""],
              ["","",""],
              ["","",""]]
};


Board.prototype.set = function (x,y,symbol) {
  if (this.map[y][x] != "") {throw("That cell is already filled.")}
  this.map[y][x] = symbol;
};


Board.prototype.isFull = function () {
    var result = true;
    this.map.forEach(function(row) {
      if (row.includes("")) {result = false;} });
    return result;
};

Board.prototype.rows = function () {
  return this.map
};

Board.prototype.columns = function () {
  var columns = [[],[],[]];
  for (var y = 0; y<3; y++) {
    for (var x = 0; x<3; x++) { columns[x].push(this.map[y][x]) }
  }
  return columns;
};

Board.prototype.diagonals = function () {
  var diagonals = [[],[]];
  for (var i = 0; i<3; i++) {
    diagonals[0].push(this.map[i][i]);
    diagonals[1].push(this.map[i][2-i]);
  }
  return diagonals;
};
