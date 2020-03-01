const { Game } = require('./game');

//var game = new Game()

beforeEach(() => {
  game = new Game();
});

function startGameHelper() {
  game.numberOfPlayers(2)
  game.boardDimension(3)
}

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
  expect(game.availableFields[0].row).toBe(0)
  expect(game.availableFields[0].column).toBe(0)
});

test('has two arrays: one with unclaimed fields and one with claimed fields', () => {
  expect(game.takenFields).toBeInstanceOf(Array)
});

test('the turn property updates automatically at the end of a turn', () => {
  startGameHelper()
  game.play(0, 0)
  expect(game.turn).toBe(1)
  game.play(0, 0)
  expect(game.turn).toBe(0)
});

test('the player selects a field to claim', () => {
  startGameHelper()
  game.play(1, 1)
  game.play(0, 1)
  expect(game.players[0].claimedFields).toContainEqual({row: 1, column: 1})
  expect(game.players[1].claimedFields).toContainEqual({row: 0, column: 1})
  expect(game.availableFields).not.toContainEqual({row: 1, column: 1})
  expect(game.availableFields).not.toContainEqual({row: 0, column: 1})
});

