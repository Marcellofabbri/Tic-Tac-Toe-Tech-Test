const { Player } = require('./player');

test('has a player number', () => {
  var player = new Player()
  expect(player.number).toBeDefined();
});