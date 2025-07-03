const initialGameState = () => ({
  status: "off", // "off", "select-mode", "on"
  startingPlayer: null,
  activePlayer: null,
  revisingHistory: false,
  moveIndex: 0,
  moves: [],
  player1: "PLAYER 1",
	player1IsBot: false,
  player2: "PLAYER 2",
	player2IsBot: false,
	ai_level: 1,
  mute: true,
});

export default initialGameState