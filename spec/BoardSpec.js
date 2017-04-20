describe("Board", function() {

  beforeEach(function() {
    board = new Board();
  });

  it("should have an empty map to begin", function() {
    expect(board.map).toEqual(
      [["","",""],
       ["","",""],
       ["","",""]]
    );
  });

  describe("set", function(){
    it("updates the board map", function(){
      board.set(0,0,"O")
      expect(board.map).toEqual(
        [["O","",""],
         ["","",""],
         ["","",""]]
      );
    });

    it("should throw an error when given the same co-ordinates as a previous turn within the same game", function() {
      board.set(0,0,"O")
      expect(function(){board.set(0,0,"X")}).toThrow("That cell is already filled.");
    });

  });

  describe("isFull", function(){
    it("knows if it's full", function(){
      board.map = [["X","O","X"],
                   ["X","X","O"],
                   ["O","X","O"]]
      expect(board.isFull()).toEqual(true);
    });

    it("knows if it's not full", function(){
      board.map = [["X","O","X"],
                   ["X","","O"],
                   ["O","X","O"]]
      expect(board.isFull()).toEqual(false);
    });

  });

  describe("rows", function() {
    it("gives us the game board's rows", function() {
      board.map = [["X","O","X"],
                   ["X","","O"],
                   ["O","X","O"]]
      expect(board.rows()).toBe(board.map)
    });
  });

  describe("columns", function() {
    it("gives us the game board's three columns from left to right", function() {
      board.map = [["X","O","X"],
                   ["X","","O"],
                   ["O","X","O"]]
      expect(board.columns()).toEqual([["X","X","O"],["O","","X"],["X","O","O"]])
    });
  });

  describe("diagonals", function() {
    it("gives us the game board's diagonals, top left and top right downwards", function() {
      board.map = [["X","O","X"],
                   ["X","","O"],
                   ["O","X","O"]]
      expect(board.diagonals()).toEqual([["X","","O"],["X","","O"]])
    });
  });

});
