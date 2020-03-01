var { Player } = require('./player.js');

function Game() {
  this.players = []
  this.availableFields = []
  this.turn = 0
  this.boardSize = 0
  this.winner = 'none'
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
    var map = {row: c, column: i}
    this.availableFields.push(map)
    }
  }
  this.boardSize = fieldsInALine
}

function arrayRemove(arr, value) {
  return arr.filter(function(ele){
    return ele != value;
  });
}
Game.prototype.play = function(row, column) {
  this.didAnybodyWin()
  var claimedField = this.availableFields.find(field => field.row == row & field.column == column)
  this.availableFields = arrayRemove(this.availableFields, claimedField)
  this.players[this.turn].claimedFields.push(claimedField)
  this.declareWinner()
  this.updateTurn()
}

Game.prototype.updateTurn = function() {
  this.turn + 1 === this.players.length ? this.turn = 0 : this.turn += 1
}

Game.prototype.declareWinner = function() {
  var playerPlaying = this.players[this.turn]
  for (b = 0; b < this.boardSize; b++) {
    if (playerPlaying.claimedFields.filter(field => field.row == b).length === this.boardSize) {
      this.winner = playerPlaying.number
    }
  }
}

Game.prototype.didAnybodyWin = function() {
  if (this.winner !== 'none') {
    throw new Error('The game is over')
  }
}
