describe("Player", function() {

  beforeEach(function() {
    playerX = new Player("X");
    playerO = new Player("O");
  });

  it("should have a symbol associated", function() {
    expect(playerX.symbol).toEqual("X");
  });

});
