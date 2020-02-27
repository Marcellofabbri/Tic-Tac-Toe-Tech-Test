const { Game } = require('./game');

var game = new Game()

// function setupHelper() {
//   game.numberOfPlayers(2)

// }

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
  expect(game.availableFields).toBeInstanceOf(Array)
});

test('can decide the dimensions of the board', () => {
  game.boardDimension(3)
  expect(game.availableFields).toHaveLength(9)
  expect(game.availableFields[0]).toBeInstanceOf(Map)
});

test('has two arrays: one with unclaimed fields and one with claimed fields', () => {
  expect(game.takenFields).toBeInstanceOf(Array)
});

test.todo('has a function that entails the whole playing process')
