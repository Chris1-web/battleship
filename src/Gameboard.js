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
    // store ship information e.g name, ship, array, and index in createdShipsInfo array
    const shipName = getName(shipLength);
    const shipObject = shipInfo(shipName, ship, xAxis, "");
    for (let i = 0; i < shipLength; i++) {
      chosenArray[yAxis + i] = "ship";
      // stores all yAxis positions in the xAxis array
      shipObject.y += `${yAxis + i},`;
    }

    createdShipsInfo.push(shipObject);

    return chosenArray;
  };

  const receiveAttack = function (xAxis, yAxis) {
    console.log(createdShipsInfo);
    const chosenArray = chooseArray(xAxis);
    // if the chosenArray[yaxis] contains ship, find ship from
    // createdShipInformation array by xAxis = chosenArray and yStart = yAxis (filter)
    // then send hit function to the ship itself
    chosenArray[yAxis] = "X";
    return chosenArray;
  };

  return { placeShip, receiveAttack };
};

export default Gameboard;
