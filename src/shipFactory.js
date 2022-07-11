const Ship = function (length) {
  // create array to mark its hits position and check if it has sunk
  const shipSpace = [];
  for (let i = 0; i < length; i++) {
    shipSpace.push("");
  }

  const getLength = function () {
    return length;
  };

  const hit = function (position) {
    shipSpace[position] = "X";
  };

  const getShipSpace = function () {
    return shipSpace;
  };

  const isSunk = function () {
    return shipSpace.every((currentValue) => currentValue === "X");
  };

  return { getLength, getShipSpace, hit, isSunk };
};

export default Ship;
