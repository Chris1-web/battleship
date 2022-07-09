import Ship from "../shipFactory";

describe("ship factory", () => {
  test("should have length of 6", () => {
    const carrier = Ship(6);
    expect(carrier.getLength()).toBe(6);
  });
});
