describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it("should have an empty map of the game to begin", function() {
    expect(game.map).toEqual(
      {
        topRow: [,,],
        midRow: [,,],
        botRow: [,,]
      }
    );
  });

});
