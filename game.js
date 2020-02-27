var { Player } = require('./player');

function Game() {
  this.players = []
  this.board = []
  }

exports.Game = Game;

Game.prototype.numberOfPlayers = function(totalNumberOfPlayers) {
  for (var i = 0; i < totalNumberOfPlayers; i++) {
    var player = new Player()
    player.number = i
    this.players.push(player)
  }
}
