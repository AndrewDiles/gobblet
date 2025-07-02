const initialGameState = () => ({
  status: "off", // "off", "select-mode", "on"
  startingPlayer: null,
  activePlayer: null,
  revisingHistory: false,
  moveIndex: 0,
  moves: [],
  player1: "Player 1",
	player1IsBot: false,
  player2: "Player 2",
	player2IsBot: false,
  mute: true,
});

export default initialGameState