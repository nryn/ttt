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

  it("should give us a turn queue with the players", function() {
    expect(game.playerQueue[0].constructor.name).toEqual("Player");
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

  describe("play", function() {
    it("should change the game board when passed co-ordinates", function() {
      game.play(0,0)
      expect(game.board).toEqual([
        ["O","",""],
        ["","",""],
        ["","",""]]);
    });

    it("should throw an error when given the same co-ordinates as a previous turn within the same game", function() {
      game.play(0,0)
      expect(function(){game.play(0,0)}).toThrow("That cell is already filled.");
    });

  });

  describe("switchPlayers", function() {
    it("should rearrange the player queue", function() {
      game.playerQueue = ["X", "O"]
      game.switchPlayers()
      expect(game.playerQueue).toEqual(["O","X"])
    });
  });

});
