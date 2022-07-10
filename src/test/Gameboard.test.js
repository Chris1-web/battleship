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
    //const B = ["", "ship", "ship", "ship", "", "", "", "", "", ""]
    const gameboard = Gameboard();
    const ship = Ship(3);
    expect(gameboard.placeShip("B", 1, ship)).toEqual(B);
  });
  test("should receive attack and mark position with X", () => {
    const A = ["", "", "X", "", "", "", "", "", "", ""];
    const gameboard = Gameboard();
    expect(gameboard.receiveAttack("A", 2)).toEqual(A);
  });
});
