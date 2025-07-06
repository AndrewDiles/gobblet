// components
import PlayerIndicator from "./PlayerIndicator";
import ExitAndRestartButtons from "./ExitAndRestartButtons";
import PlayableArea from "./PlayableArea";
import History from "./History";

// hooks
import { useEffect } from "react";
import useSound from "use-sound";
import useBoardSizing from "./gameHooks/useBoardSizing";
import useBotMove from "./gameHooks/useBotMove";

// helpers
import calcActiveBoard from "../../helpers/calcActiveBoard";
import calculateResult from "../../helpers/calculateResult";
import calculateIsBotTurn from "../../helpers/calculateIsBotTurn";

// assets
import gameCompleteSound from "../../assets/sounds/gameOver.mp3";
import chipSound from "../../assets/sounds/chip.mp3"

const Game = ({ game, setGame }) => {
  const activeBoard = calcActiveBoard(game.moves, game.moveIndex);
  const result = activeBoard ? calculateResult(activeBoard, game.moveIndex === 12) : 4;
  const isBotTurn = calculateIsBotTurn(game);
	
	const {scale, flexDirection} = useBoardSizing()
	const [playGameOverSound] = useSound(gameCompleteSound);
	const [playChipSound] = useSound(chipSound)

	useEffect(()=>{
		if (result > 0) {
			!game.mute && playGameOverSound()
		}
	}, [game.mute, result])

  useBotMove({ game, result, isBotTurn, activeBoard, setGame, playChipSound });

  if (!activeBoard) return <p>ERROR - board state</p>;

  return (
    <>
      {game.moves.length > 0 && <History game={game} setGame={setGame} />}
      <ExitAndRestartButtons game={game} revisingHistory={game.revisingHistory} setGame={setGame} gameOver={result>0}/>
      <PlayerIndicator
        result={result}
				game={game}
      />
      <PlayableArea
        scale={scale}
				flexDirection={flexDirection}
        board={activeBoard}
        result={result}
				isBotTurn={isBotTurn}
				game={game}
				setGame={setGame}
      />
    </>
  );
};

export default Game;
