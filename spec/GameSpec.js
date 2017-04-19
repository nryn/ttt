describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it("should have an empty game board to begin", function() {
    expect(game.board).toEqual(
      {
        topRow: ["","",""],
        midRow: ["","",""],
        botRow: ["","",""]
      }
    );
  });

  it("should be able to check for horizontal wins", function() {
    game.board = {
      topRow: ["","","O"],
      midRow: ["X","X","X"],
      botRow: ["","O",""]
    }
    expect(game.isWinHorizontal()).toBe(true);
  });

  it("should be able to check for horizontal non-wins", function() {
    game.board = {
      topRow: ["","","O"],
      midRow: ["X","O","X"],
      botRow: ["","O",""]
    }
    expect(game.isWinHorizontal()).toBe(false);
  });

  it("should be able to check for vertical wins", function() {
    game.board = {
      topRow: ["X","X","O"],
      midRow: ["O","X","O"],
      botRow: ["X","O","O"]
    }
    expect(game.isWinVertical()).toBe(true);
  });

  it("should be able to check for vertical non-wins", function() {
    game.board = {
      topRow: ["O","X","O"],
      midRow: ["X","O","X"],
      botRow: ["O","O","X"]
    }
    expect(game.isWinVertical()).toBe(false);
  });

});
