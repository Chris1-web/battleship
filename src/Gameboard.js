const Gameboard = function () {
  // {
  //   name: "submarine";
  //   ship: ship object;
  //   x: "A";
  //   y: 2,3,4;
  // }

  const createdShipsInfo = [];

  // constants represents xAxis, while yAxis is the elements in the xAxis
  const A = [];
  const B = [];
  const C = [];
  const D = [];
  const E = [];
  const F = [];
  const G = [];
  const H = [];
  const I = [];
  const J = [];

  for (let i = 0; i < 10; i++) {
    A.push("");
    B.push("");
    C.push("");
    D.push("");
    E.push("");
    F.push("");
    G.push("");
    H.push("");
    I.push("");
    J.push("");
  }
  // choose array with xAxis sring
  const chooseArray = function (xAxis) {
    switch (xAxis) {
      case "A":
        return A;
      case "B":
        return B;
      case "C":
        return C;
      case "D":
        return D;
      case "E":
        return E;
      case "F":
        return F;
      case "G":
        return G;
      case "H":
        return H;
      case "I":
        return I;
      case "J":
        return J;
    }
  };

  const shipInfo = function (name, ship, xAxis, y) {
    return { name, ship, x: xAxis, y: y };
  };

  const createdShipNames = [];

  const getName = function (shipLength) {
    switch (shipLength) {
      case 5:
        createdShipNames.push("Carrier");
        return "Carrier";
      case 4:
        createdShipNames.push("Battleship");
        return "Battleship";
      case 3:
        if (!createdShipNames.includes("Cruiser")) {
          createdShipNames.push("Cruiser");
          return "Cruiser";
        } else {
          createdShipNames.push("Submarine");
          return "Submarine";
        }
      case 3:
        createdShipNames.push("Destroyer");
        return "Destroyer";
    }
  };

  const placeShip = function (xAxis, yAxis, ship) {
    const chosenArray = chooseArray(xAxis);
    const shipLength = ship.getLength();
    // store ship information e.g name, ship, array(xAxis), and index(yAxis) in createdShipsInfo array
    const shipName = getName(shipLength);
    const shipObject = shipInfo(shipName, ship, xAxis, []);
    for (let i = 0; i < shipLength; i++) {
      chosenArray[yAxis + i] = "ship";
      // stores all yAxis positions in the xAxis array
      shipObject.y.push(yAxis + i);
    }

    createdShipsInfo.push(shipObject);

    return chosenArray;
  };

  const receiveAttack = function (xAxis, yAxis) {
    const chosenArray = chooseArray(xAxis);
    // check if the chosenArray contains a ship
    // if it does, check createdShipInfo for the ship contained there and send hit function to the ship
    // replace chosenArray with X
    if (chosenArray[yAxis] === "ship") {
      // find the ship located there from createdShipInfo array
      const shipObject = createdShipsInfo.filter(
        (ship) => ship.x === xAxis && ship.y.includes(yAxis)
      )[0];
      // find the position of the ship that was hit with yAxis to send hit function there
      const shipHitPosition = shipObject.y.findIndex(
        (space) => space === yAxis
      );
      shipObject.ship.hit(shipHitPosition);
      chosenArray[yAxis] = "X";
      return shipObject.ship.getShipSpace();
    }
    chosenArray[yAxis] = "O";
    return chosenArray;
  };

  return { placeShip, receiveAttack };
};

export default Gameboard;
