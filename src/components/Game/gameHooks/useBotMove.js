import { useEffect } from "react";
import calculateNextMove from "../../../helpers/calculateNextMove";

// // performs a bot move in 1-3s

const useBotMove = ({
  game,
  result,
  isBotTurn,
  activeBoard,
  setGame,
  playChipSound,
}) => {
  useEffect(() => {
    let timer;
    if (!result && isBotTurn && activeBoard) {
      const nextBotMove = calculateNextMove(activeBoard, game);
      if (nextBotMove) {
        timer = setTimeout(() => {
          const { activePlayer, moves, moveIndex } = game;
          const { cell, size, number } = nextBotMove;
          const movesMade = moves.filter((m, index) => index < moveIndex);
          !game.mute && playChipSound();
          movesMade.push({
            player: activePlayer,
            size,
            cell,
            number,
          });
          setGame({
            ...game,
            moves: movesMade,
            activePlayer: activePlayer === 1 ? 2 : 1,
            moveIndex: movesMade.length,
          });
        }, 1000 + Math.random() * 2000);
      } else {
        console.log("Error - could not calculate Next Bot Move");
      }
    }
    return () => {
      timer && clearTimeout(timer);
    };
  }, [game]);
};

export default useBotMove;
