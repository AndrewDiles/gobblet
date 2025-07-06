
const calcAllValidMoves = ({activeBoard, activePlayer, game}) => {
	// Note activePlayer is a parameter and not coming from game

	const {moves, moveIndex} = game;

	const remainingPieces = [];
	for (let size = 1; size < 4; size++) {
		for (let number = 1; number < 3; number++) {
			remainingPieces.push({size, number})
		}
	}
	const movesMade = moves.filter((m, index) => index < moveIndex);
	movesMade.forEach(({player, cell, size, number}) => {
		if (activePlayer !== player) return
		const foundIndex = remainingPieces.findIndex(pieceInfo => {
			return pieceInfo.size === size && pieceInfo.number === number
		})
		if (foundIndex > -1) {
			remainingPieces[foundIndex] = null;
			remainingPieces.sort().pop()
		}
	})
	const allMoves = [];
	remainingPieces.forEach(({size, number}) => {
		for (let cell = 0; cell < 9; cell++) {
			const cellContents = activeBoard[cell];
			if (cellContents === 0) {
				allMoves.push({player: activePlayer, size, number, cell})
			} else {
				const currentSizeInCell = Number((cellContents*10)%10);
				if (currentSizeInCell < size) {
					allMoves.push({player: activePlayer, size, number, cell})
				}
			}
		}
	})
	return allMoves
}

export default calcAllValidMoves