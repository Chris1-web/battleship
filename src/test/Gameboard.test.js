import Gameboard from "../Gameboard";
import Ship from "../shipFactory";

describe("gameboard factory", () => {
  test("should place ship according to coordinate", () => {
    const B = [];
    for (let i = 0; i < 10; i++) {
      B.push("");
    }
    B[1] = "ship";
    B[2] = "ship";
    B[3] = "ship";
    const gameboard = Gameboard();
    const ship = Ship(3);
    //const B = ["", "ship", "ship", "ship", "", "", "", "", "", ""]
    expect(gameboard.placeShip("B", 1, ship)).toEqual(B);
  });
  test("should receive attack and mark position with O when it does not hit a ship", () => {
    const A = ["", "", "O", "", "", "", "", "", "", ""];
    const gameboard = Gameboard();
    expect(gameboard.receiveAttack("A", 2)).toEqual(A);
  });
  test("should send hit function and mark (X) to ship if there is a ship at the attack location", () => {
    // ship hit function return
    const ship1SpaceAfterAttack = ["", "X", ""];
    const ship2SpaceAfterAttack = ["", "", "X", ""];

    // create gameboard
    const gameboard = Gameboard();

    // create ships
    const ship1 = Ship(3);
    const ship2 = Ship(4);

    // place ships
    gameboard.placeShip("C", 4, ship1); // = const C = ["", "", "", "", "ship", "ship", "ship", "", "", ""]
    gameboard.placeShip("J", 3, ship2); // = const J = ["", "", "", "ship", "ship", "ship", "ship", "", "", ""]

    // hit ship1 from gameboard
    gameboard.receiveAttack("C", 5);
    gameboard.receiveAttack("J", 5);

    expect(ship1.getShipSpace()).toEqual(ship1SpaceAfterAttack);
    expect(ship2.getShipSpace()).toEqual(ship2SpaceAfterAttack);
  });
  test("should report if all ships in a board have sunk or not", () => {
    // create gameboard
    const gameboard = Gameboard();

    // 1. create all ships
    const Carrier = Ship(5);
    const Battleship = Ship(4);
    const Cruiser = Ship(3);
    const Submarine = Ship(3);
    const Destroyer = Ship(2);

    // 2. place ships
    gameboard.placeShip("C", 4, Carrier); //const A = ["", "", "", "", "ship", "ship", "ship", "ship", "ship", ""]
    gameboard.placeShip("E", 2, Battleship); //const E = ["", "", "ship", "ship", "ship", "ship", "", "", "", ""]
    gameboard.placeShip("G", 0, Cruiser); //const E = ["ship", "ship", "ship", "", "", "", "", "", "", ""]
    gameboard.placeShip("J", 5, Submarine); //const J = ["", "", "", "", "", "ship", "ship", "ship", "", ""]
    gameboard.placeShip("A", 8, Destroyer); //const A = ["", "", "", "", "", "", "", "", "ship", "ship"]

    // shot ships and sink all its gameboard ships
    gameboard.receiveAttack("C", 4);
    gameboard.receiveAttack("C", 5);
    gameboard.receiveAttack("C", 6);
    gameboard.receiveAttack("C", 7);
    gameboard.receiveAttack("C", 8);
    gameboard.receiveAttack("E", 2);
    gameboard.receiveAttack("E", 3);
    gameboard.receiveAttack("E", 4);
    gameboard.receiveAttack("E", 5);
    gameboard.receiveAttack("G", 0);
    gameboard.receiveAttack("G", 1);
    gameboard.receiveAttack("G", 2);
    gameboard.receiveAttack("J", 5);
    gameboard.receiveAttack("J", 6);
    gameboard.receiveAttack("J", 7);
    gameboard.receiveAttack("A", 8);
    gameboard.receiveAttack("A", 9);

    // expect gameboard to report that all the gameboard ships have sunk
    expect(gameboard.reportShipsState()).toBeTruthy();
  });
});
