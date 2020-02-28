var { Player } = require('./player.js');

function Game() {
  this.players = []
  this.availableFields = []
  this.takenFields = []
  this.turn = 0
  }

exports.Game = Game;

Game.prototype.numberOfPlayers = function(totalNumberOfPlayers) {
  for (var j = 0; j < totalNumberOfPlayers; j++) {
    var player = new Player()
    player.number = j
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
  this.turn + 1 === this.players.length ? this.turn = 0 : this.turn += 1
}