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

  it("should be able to check for horizontal non-wins", function() {
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

  it("should be able to check for vertical non-wins", function() {
    game.board = [["O","X","O"],
                  ["X","O","X"],
                  ["O","O","X"]]
    expect(game.isWinVertical()).toBe(false);
  });

});
