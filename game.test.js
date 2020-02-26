const { Game } = require('./game');

test('has two players by default', () => {
  var game = new Game()
  expect(game.players).toBeInstanceOf(Array);
});