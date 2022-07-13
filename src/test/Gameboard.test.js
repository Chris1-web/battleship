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
});
