# Tic Tac Toe Tech Test

## Overview

A quick tech test submission for the business logic of a game of Tic Tac Toe.

## User Stories

Can be found [here](./user_stories.txt)

## Usage

* Clone repo
* `cd` to the project's root directory
* To first check test coverage, open SpecRunner.html in your browser `open SpecRunner.html`
* SpecRunner.html requires all the necessary files, so from here you can open your browser's Dev Tools and navigate to the JS Console to start interacting with the app.
* From here you can start a game with `var myGame = new Game();`
* You can now play a turn by calling play with co-ordinates like so `myGame.play(x,y)`
  - x and y co-ordinates are 0 indexed. to avoid confusion, check out this diagram of the co-ordinates:

  ```
      x 0     1     2
  y        |     |
  0    0,0 | 1,0 | 2,0
      -----------------
  1    0,1 | 1,1 | 2,1
      -----------------
  2    0,2 | 1,2 | 2,2
           |     |
  ```

* Bonus feature - if you want to play the game only in the console, before you start a game you can make your own players with your own symbols. The purpose of the feature is to be flexible with how the player symbols are represented internally (and externally if you choose to extend the business logic this way).
  - `var player1 = new Player("❌")`
  - `var player2 = new Player("⭕️")`
  - `var myGame = new Game(player1, player2)`
  - `myGame.play(x,y)` as usual.

### Implementation hints/instructions

* In Game.js there's a `Game.prototype.play` function which gives you some flexibility about how to deal with the game logic.

* There's comments and logging left in this function pointing out three main things:
  - Where to define what to do after a turn has been taken.
  - Where to define what to do when the game is over (with or without a winner).
  - One of the functions that gets called by `play(x,y)` currently throws an uncaught exception with the message "That cell is already filled." when someone tries to play in to a cell which already has a symbol inside. When you call this function, you could do this from within a `try` block, and a following `catch` block could define what to do in this case.

* The game board can be 'drawn' by asking for the game's board's rows ( `myGame.board.rows()` ).
  - it's an array of arrays of strings
  - inside the first array, each element is an array representing a row from top to bottom
  - each of these arrays contains three strings, representing each 'cell' on a row.
  - the values can be `""` for an empty cell, `"X"` or `"O"`.
  - you can use `myGame.board.rows().join("\n")` or `myGame.board.rows().toString()` if you'd rather have the game board represented as a string over three lines, or a comma separated list of 9 values respectively.

## Tech

* Pure object-oriented JS

## Screenshot

The below screenshot illustrates one implementation of the game (with the console logging left in), but the game is implementation agnostic, so is intended to act as the business logic to a more interesting interface of your own design.

![Tic Tac Toe Tech Test Screenshot](http://img1.imagilive.com/0417/Screen_Shot_2017-04-20_at_110258.png)
