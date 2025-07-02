const startGame = (setter, gameContent) => {
  const nextStartingPlayer = Math.random() > 0.5 ? 1 : 2;
  setter((current) => {
    return {
      ...current,
      ...gameContent,
      startingPlayer: nextStartingPlayer,
      activePlayer: nextStartingPlayer,
      revisingHistory: false,
      moveIndex: 0,
      moves: [],
    };
  });
};

export default startGame;
