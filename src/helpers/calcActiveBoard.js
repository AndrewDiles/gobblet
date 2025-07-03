const calcActiveBoard  = (movesArray, moveIndex) => {
	const board = Array(9).fill(0);
	for (let index = 0; index < moveIndex; index++) {
		const {player, size, cell} = movesArray[index];
		const value = Number((player + (0.1*size)).toFixed(1));
		const currentValue = board[cell];
		if (currentValue && (Math.floor(currentValue * 10) % 10) >= size) {
			console.log("Error - illegal move");
			return null
		}
		board[cell] = value;
	}
	return board;
}

export default calcActiveBoard