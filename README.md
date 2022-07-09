# battleship

Let’s build a Battleship game

It’s you against the browser: the browser hides ships and your job is to seek them out and destroy them. Of course, unlike the real Battleship game, in this one you don’t place any ships of your own. Instead, your job is to sink the computer’s ships in the fewest number of guesses.
Goal: Sink the browser’s ships in the fewest number of guesses. You’re given a rating, based on how well you perform.

Setup: When the game program is launched, the computer places ships on a virtual grid. When that’s done, the game asks for your first guess.

How you play: The browser will prompt you to enter a guess and you’ll type in a grid location. In response to your guess, you’ll see a result of “Hit”, “Miss”, or “You sank my battleship!” When you sink all the ships, the game ends by displaying your rating.

<hr>

This time, let’s build a REAL Battleship game
Sure, you can feel good because back in Chapter 2 you built a nice little battleship game from scratch, but let’s admit it: that was a bit of a toy game—it worked, it was playable, but it wasn’t exactly the game you’d impress your friends with, or use to raise your first round of venture capital. To really impress, you’ll need a visual game board, snazzy battleship graphics, and a way for players to enter their moves right in the game (rather than a generic browser dialog box). You’ll also want to improve the previous version by supporting all three ships.