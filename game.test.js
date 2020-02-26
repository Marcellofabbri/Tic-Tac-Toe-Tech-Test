const { Game } = require('./game');

test('has a property that stores players', () => {
  var game = new Game()
  expect(game.players).toBeInstanceOf(Array);
});

test('can fill the players Array with the selected number of players', () => {
  var game = new Game()
  game.numberOfPlayers(2)
  expect(game.players.length).toBe(2);
});

test('when players are generated they get assigned a number', () => {
  var game = new Game()
  game.numberOfPlayers(2)
  expect(game.players[0].number).toBe(0);
});