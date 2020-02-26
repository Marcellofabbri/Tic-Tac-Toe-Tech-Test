const { Game } = require('./game');

test('has a property that stores players', () => {
  var game = new Game()
  expect(game.players).toBeInstanceOf(Array);
});