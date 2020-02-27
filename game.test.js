const { Game } = require('./game');

var game = new Game()

test('has a property that stores players', () => {
  expect(game.players).toBeInstanceOf(Array);
});

test('can fill the players Array with the selected number of players', () => {
  game.numberOfPlayers(2)
  expect(game.players).toHaveLength(2);
});

test('when players are generated they get assigned a number', () => {
  game.numberOfPlayers(2)
  expect(game.players[0].number).toBe(0);
});

test('has a playing board stored as a property', () => {
  expect(game.board).toBeInstanceOf(Array)
});

test('has a turn property to identify whose turn it is', () => {
  expect(game.turn).toBeDefined()
});
