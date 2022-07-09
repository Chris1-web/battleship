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

pseudocode

<!-- create gameboard -->

create 10 arrays named A-J, with a length of 10.
e.g const A = [1,2,3,4,5,6,7,8,9,10]
placeship function by coordinate and putting name in place of original number
e.g gameboard.placeShip(A, 6, submarine) const A = [1,2,3,4,5,submarine,7,8,9,10]
receiveAttack function takes a coordinate and marks it hit position

<!-- create ship -->

create ships with length (this would be turned into the array to be looped over for placement),
have ship name
hit function that takes a number and stores it in the array.
sunk function that checks if the whole array of length has been hit or not

<!-- store ship placement -->

place ships according to coordinate stored in objects of its array.
---- e.g carrierPlacement = [{x: 'A', y: 1}, {x: 'B', y: 2}, {x: 'C', y: 1}, {x: 'D', y: 1}, {x: 'E', y: 1}] (vertical)
---- e.g submarine = [{x: 'C', y: 1}, {x: 'C', y: 2}, {x: 'C', y: 3}] (horizontal)
