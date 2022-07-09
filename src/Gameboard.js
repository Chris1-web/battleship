const Gameboard = function () {
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

  const xAxisArray = [A, B, C, D, E, F, G, H, I, J];

  const placeShip = function (xAxis, yAxis, ship) {
    // choose array with xAxis sring
    const chooseArray = function () {
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
    const chosenArray = chooseArray();
    const shipLength = ship.getLength();
    for (let i = 0; i < shipLength; i++) {
      chosenArray[yAxis + i] = "ship";
    }
    return chosenArray;
  };
  return { placeShip };
};

export default Gameboard;
