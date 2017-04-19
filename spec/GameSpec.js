describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it("should have an empty game board to begin", function() {
    expect(game.board).toEqual(
      [["","",""],
       ["","",""],
       ["","",""]]
    );
  });

  it("should be able to check for horizontal wins", function() {
    game.board = [["","","O"],
                  ["X","X","X"],
                  ["","O",""]]
    expect(game.isWinHorizontal()).toBe(true);
  });

  it("should be able to check horizontally and find no winner", function() {
    game.board = [["","","O"],
                  ["X","O","X"],
                  ["","O",""]]
    expect(game.isWinHorizontal()).toBe(false);
  });

  it("should be able to check for vertical wins", function() {
    game.board = [["X","X","O"],
                  ["O","X","O"],
                  ["X","O","O"]]
    expect(game.isWinVertical()).toBe(true);
  });

  it("should be able to check vertically and find no winner", function() {
    game.board = [["O","X","O"],
                  ["X","O","X"],
                  ["O","O","X"]]
    expect(game.isWinVertical()).toBe(false);
  });

  it("should be able to check for diagonal wins", function() {
    game.board = [["X","X","O"],
                  ["O","X","O"],
                  ["X","O","X"]]
    expect(game.isWinDiagonal()).toBe(true);
  });

  it("should be able to check for diagonal non-wins", function() {
    game.board = [["O","X","O"],
                  ["X","X","O"],
                  ["O","O","X"]]
    expect(game.isWinDiagonal()).toBe(false);
  });

  describe("isWon", function() {
    it("should be able to check generally for wins", function() {
      game.board = [["O","X","X"],
                    ["X","X","O"],
                    ["O","O","O"]]
      expect(game.isWon()).toBe(true);
    });

    it("should be able to check generally for wins", function() {
      game.board = [["O","X","X"],
                    ["X","X","O"],
                    ["O","X","O"]]
      expect(game.isWon()).toBe(true);
    });

    it("should be able to check generally for non-wins", function() {
      game.board = [["O","X","X"],
                    ["X","O","O"],
                    ["O","X","X"]]
      expect(game.isWon()).toBe(false);
    });

  });

});
