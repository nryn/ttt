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

  describe("isWon", function() {
    it("should be able to check for vertical wins", function() {
      game.board = [["O","X","X"],
                    ["","X","O"],
                    ["O","X",""]]
      expect(game.isWon()).toBe(true);
    });

    it("should be able to check for horizontal wins", function() {
      game.board = [["","X","X"],
                    ["X","",""],
                    ["O","O","O"]]
      expect(game.isWon()).toBe(true);
    });

    it("should be able to check for diagonal wins", function() {
      game.board = [["O","O","X"],
                    ["X","X","O"],
                    ["X","",""]]
      expect(game.isWon()).toBe(true);
    });

    it("should be able to check generally for non-wins on complete games", function() {
      game.board = [["O","X","X"],
                    ["X","O","O"],
                    ["O","X","X"]]
      expect(game.isWon()).toBe(false);
    });

    it("should be able to check generally for non-wins on incomplete games", function() {
      game.board = [["O","X",""],
                    ["X","","O"],
                    ["O","","X"]]
      expect(game.isWon()).toBe(false);
    });

  });

});
