# HW4: Crystal Collector Game

## Game Overview

This game leverages JavaScript and jQuery to execute functions that will generate random values and tally up the generated values as the player interacts with the crystal images via click on UI, and update win/loss scores.

[Sample Demo](https://youtu.be/yNI0l2FMeCk).

## Goal of the Game

The player will have to match the randomly selected number by clicking on any of the four crystals which hold different point values hidden from the player. The player wins by matching the random number exactly. 

## App Requirements

1. The player will be shown a random number for "Match This Number" box at the start of the game. This number will range between 19 and 120.

2. The UI page will show 4 crystals as buttons for the player to interact with via clicks.  Each crystal holds different value between 1 and 12.  By clicking on a crystal, the player will add that hidden, assigned points to the Total Score.

3. The player wins the game by matching one's Total Score to the random number exactly.  Player loses if the total score goes above the random number.

4.  The game restarts whenever the player wins or loses.  At the start of each game, new random values are generated once again for each crystals as well as the "Match this Number" value.  The player's "Total Score" field will reset to zero.

5. The app shows the number of games the player wins and loses. 

## Notes
Refreshing / reloading the browser will reverts to original state, thus the game will restart with zero win/loss.  If you'd like to keep win/loss scores, do not hit reload button on the browser.
