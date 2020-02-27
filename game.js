var { Player } = require('./player');

function Game() {
  this.players = []
  this.availableFields = []
  this.takenFields = []
  this.turn = null
  }

exports.Game = Game;

Game.prototype.numberOfPlayers = function(totalNumberOfPlayers) {
  for (var i = 0; i < totalNumberOfPlayers; i++) {
    var player = new Player()
    player.number = i
    this.players.push(player)
  }
}

Game.prototype.boardDimension = function(fieldsInALine) {
  for (var c = 0; c < fieldsInALine; c++) {
    for (var i = 0; i < fieldsInALine; i++) {
    var map = new Map()
    map[c] = i
    this.availableFields.push(map)
    }
  }
}

Game.prototype.play = function() {
  return
}