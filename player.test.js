const { Player } = require('./player');

test('has a player number', () => {
  var player = new Player()
  expect(player.number).toBeDefined();
});

test('Player has a property that stores claimed fields', () => {
  var player = new Player()
  expect(player.claimedFields).toBeInstanceOf(Array)
});