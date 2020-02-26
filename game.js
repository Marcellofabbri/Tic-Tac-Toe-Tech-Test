var { Player } = require('./player');

function Game() {
  this.players = []
  }

exports.Game = Game;

Game.prototype.numberOfPlayers = function(totalNumberOfPlayers) {
  for (i = 0; i < totalNumberOfPlayers; i++) {
    var player = new Player()
    player.number = i
    this.players.push(player)
  }
}