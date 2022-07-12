import Ship from "../shipFactory";

describe("ship factory", () => {
  test("should get ship of length 6", () => {
    const carrier = Ship(5);
    expect(carrier.getLength()).toBe(5);
  });
  test("should return ship array when called", () => {
    const shipSpace = ["", "", "X"];
    const submarine = Ship(3);
    submarine.hit(2);
    expect(submarine.getShipSpace()).toEqual(shipSpace);
  });
  test("should not sink if ship is hit less than the number of its length", () => {
    const battleship = Ship(4);
    battleship.hit(0);
    expect(battleship.isSunk()).toBeFalsy();
  });
  test("should sink if ship is hit the number of its length", () => {
    const submarine = Ship(4);
    submarine.hit(0);
    submarine.hit(1);
    submarine.hit(2);
    submarine.hit(3);
    expect(submarine.isSunk()).toBeTruthy();
  });
});
