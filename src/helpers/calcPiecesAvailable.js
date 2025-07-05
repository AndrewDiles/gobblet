const calcPiecesAvailable = ({movesMade, activePlayer}) => {
	const sizeQuantities =  {
		size1: 2,
		size2: 2,
		size3: 2
	}
	movesMade.forEach(move => {
		if (move.player !== activePlayer) return
		const key = `size${move.size}`;
		sizeQuantities[key] -= 1;
	})
	return sizeQuantities
}

export default calcPiecesAvailable