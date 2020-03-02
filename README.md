# MAKERS ACADEMY - WEEK 10 - TECH TEST: "Tic Tac Toe"
[Link to the original repository](https://github.com/makersacademy/course/blob/master/individual_challenges/tic_tac_toe.md)

The test could be taken either in Ruby or JavaScript. This one is in __javascript__.

### Running tests
To use __Jest__ from the command line run `yarn test` or `npm test`. Jest can be downloaded from the official [website](https://jestjs.io/docs/en/getting-started.html). When downloading this repository the 'package.json' file is already configured to make Jest run appropriately with coverage.

### The Program
It should be able to be interacted with through a REPL such as a browser console (JavaScript).
It has two classes: Game, Player.

## The chain of thought behind the program
When approaching the cration of this program I drew inspiration from previous challenges from Makers, such as the Thermostat challenge or the Bowling challenge.
I started by giving the Game function some state, such as the __available fields__ array and the __players__ array, to be filled by the methods that set up the necessery tools to begin a game of Tic-Tac-Toe: the board of fields and the number of players playing. It's better to keep in mind a program may need to get extended, so instead of hardcoding a simple board of 9 fields (3x3) and two players, I started by creating two functions that let the user decide them. E.g.:
```
var game = new Game()
game.numberOfPlayers(2)
game.boardDimension(3)
```
will fill the __available fields__ array with nine map objects (hashes) with appropriate properties row and columns like ```{ row: 1, column: 2}```, and two __Player__ objects in the __players__ property of Game.
I wanted to abstract players as separate objects in case they need to be extended with usernames etc. For now they only have two properties: __number__ (the player number, or ID), and the __claimed fields__ array, to store fields that have been taken during a turn.

While developing the program I needed to add three more properties to the Game function: __turn__ (to identify whose turn it is), __boardSize__ (the chosen size of the board), __winner__ (set to none until there's a winner, in which case it'll be the player number)

Then I created the main method for the game, ```game.play(row, column)```, invoked for example as below:
```
game.play(2, 0)
```

This entails a number of functions that need to be called during a turn:
- ```game.didAnybodyWin``` checks if ```game.winner``` is still set to 'none' and throws an error if it isn't.
- ```game.availableFields``` is mutated to an array where the field selected through the argument of ```play``` is removed.
- the selected field is pushed into the ```player.claimedFields``` array of whichever player's turn it it.
- ```game.declareWinner()``` checks if any player has a trio of fields that constitute any sort of victory.
- ```game.updateTurn()``` updates the turn.

The program doesn't yet have an option to recognize victories for boards possibly different in size than 3x3, and at the moment can only generate square (not rectangular) board.
The program doesn't yet throw errors when trying to claim fields that have already been claimed.