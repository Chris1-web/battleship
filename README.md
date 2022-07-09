# battleship

# Understand the problem

1. Create and label grids
   on page load, draw two 10 x 10 grids (one for the player and one for the computer), horizontally,
   each grid would have letters A through J. Vertically, each grid would have letters 1 through 10.
2. Place battleships
   create 5 ships for each player namely, namely, Carrier(5), Battleship(4), Cruiser(3), Submarine(3),
   Destroyer(2). place each ships vertically or horizontally. but not diagonally or on another ship or
   outside the grid. shade boxes where ships are. create key at the bottom: X - hits, O - misses.
3. Play game
   choose start player. current player choses square on the grid by naming a letter on the horizontal
   axis and number on the vertical axis e.g D7, G2 etc. After the current player chooses, the opponent
   would look at their grid and see if their opponent hit their battleships by locating the square e.g D7.
   If their ship is hit, they would say hit else, miss. if the ship is hit, the grid is marked x in colour
   red, else O in colour blue. Then, the other player takes turn and so on….
4. Sinking ship
   if a player hits all the spaces their opponent’s ship is placed, the ship as sunk. The ship sinking must
   be announced.
5. Game Winner
   if a player sinks all 5 ships of their opponent, he would be declared winner.
