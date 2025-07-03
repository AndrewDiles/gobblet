const calculateIsBotTurn = (game) => {
  if (game.revisingHistory) return false;
  return game.activePlayer === 1 ? game.player1IsBot : game.player2IsBot;
};

export default calculateIsBotTurn;
