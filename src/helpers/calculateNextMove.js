import calcAllValidMoves from "./calcAllValidMoves";

// TODO: Complete this if plan to code improved ai for harder bots

const calculateNextMove = (activeBoard, game) => {
	try {
		const {activePlayer , ai_level, moves, moveIndex} = game;
		// const movesMade = moves.filter((m, index) => index < moveIndex);
		
		const validMoves = calcAllValidMoves({activeBoard, activePlayer: game.activePlayer, game});
		// console.log(validMoves)
		if (validMoves.length === 0) {
			throw new Error ("No possible moves")
		}
		if (ai_level === 0) {
			return validMoves[Math.floor(Math.random()*validMoves.length)]
		} else {
			// TODO: logic tests based on intelligence

			// move to win => make it
			// can block win => make it

			return validMoves[Math.floor(Math.random()*validMoves.length)]
		}

	} catch (error) {
		console.log(error)
	}
}

export default calculateNextMove