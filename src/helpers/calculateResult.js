// return values:
// 0 : game ongoing
// 1 : player 1 wins
// 2 : player 2 wins
// 3 : game is a draw
// 4 : error

const calculateResult = (activeBoard, allMovesMade) => {
  try {
    const playerNumbersOnlyBoard = activeBoard.map((cell) => Math.floor(cell));

    // rows
    if (
      playerNumbersOnlyBoard[0] &&
      playerNumbersOnlyBoard[0] === playerNumbersOnlyBoard[1] &&
      playerNumbersOnlyBoard[1] === playerNumbersOnlyBoard[2]
    )
      return playerNumbersOnlyBoard[0];

    if (
      playerNumbersOnlyBoard[3] &&
      playerNumbersOnlyBoard[3] === playerNumbersOnlyBoard[4] &&
      playerNumbersOnlyBoard[4] === playerNumbersOnlyBoard[5]
    )
      return playerNumbersOnlyBoard[3];

    if (
      playerNumbersOnlyBoard[6] &&
      playerNumbersOnlyBoard[6] === playerNumbersOnlyBoard[7] &&
      playerNumbersOnlyBoard[7] === playerNumbersOnlyBoard[8]
    )
      return playerNumbersOnlyBoard[6];

    // columns
    if (
      playerNumbersOnlyBoard[0] &&
      playerNumbersOnlyBoard[0] === playerNumbersOnlyBoard[3] &&
      playerNumbersOnlyBoard[3] === playerNumbersOnlyBoard[6]
    )
      return playerNumbersOnlyBoard[0];

    if (
      playerNumbersOnlyBoard[1] &&
      playerNumbersOnlyBoard[1] === playerNumbersOnlyBoard[4] &&
      playerNumbersOnlyBoard[4] === playerNumbersOnlyBoard[7]
    )
      return playerNumbersOnlyBoard[1];

    if (
      playerNumbersOnlyBoard[2] &&
      playerNumbersOnlyBoard[2] === playerNumbersOnlyBoard[5] &&
      playerNumbersOnlyBoard[5] === playerNumbersOnlyBoard[8]
    )
      return playerNumbersOnlyBoard[2];

    // diagonals
    if (
      playerNumbersOnlyBoard[0] &&
      playerNumbersOnlyBoard[0] === playerNumbersOnlyBoard[4] &&
      playerNumbersOnlyBoard[4] === playerNumbersOnlyBoard[8]
    )
      return playerNumbersOnlyBoard[0];
    if (
      playerNumbersOnlyBoard[2] &&
      playerNumbersOnlyBoard[2] === playerNumbersOnlyBoard[4] &&
      playerNumbersOnlyBoard[4] === playerNumbersOnlyBoard[6]
    )
      return playerNumbersOnlyBoard[2];

    // game ongoing
    // if (playerNumbersOnlyBoard.includes(0)) return 0;
		// return 3
		if (allMovesMade) return 3
    return 0
  } catch (error) {
    console.log(error.message);
    return 4;
  }
};

export default calculateResult;
