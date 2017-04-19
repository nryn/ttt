describe("Playing a full game", function() {

  it("should be possible to play a full game with no winner", function() {
    var game = new Game();
    game.play(1,1); // O
    game.play(1,0); // X
    game.play(2,1); // O
    game.play(2,0); // X
    game.play(0,0); // O
    game.play(2,2); // X
    game.play(0,2); // O
    game.play(0,1); // X
    game.play(1,2); // O
    expect(game.isOver()).toBe(true);
    expect(game.isWon()).toBe(false);
  });

  it("should be possible to play a game with a winner", function() {
    var game = new Game();
    game.play(1,1); // O
    game.play(1,0); // X
    game.play(2,1); // O
    game.play(0,1); // X
    game.play(2,2); // O
    game.play(1,2); // X
    game.play(0,0); // O
    expect(game.isOver()).toBe(true);
    expect(game.isWon()).toBe(true);
  });

});
