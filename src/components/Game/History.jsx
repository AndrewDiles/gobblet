import { useState, useEffect } from "react";
import useSound from "use-sound";
import styled from "styled-components";
import hourglass from "../../assets/hourglass.svg";
import pause from "../../assets/pause.svg";
import play from "../../assets/play.svg";
import stepBack from "../../assets/stepBack.svg";
import stepForward from "../../assets/stepForward.svg";
import pauseSound from "../../assets/sounds/pause.mp3";
import historyChangeSound from "../../assets/sounds/historyChange.mp3";

const History = ({ game, setGame }) => {
  const [showHourGlass, setShowHourGlass] = useState(false);
  const [width, setWidth] = useState(0);
	const [playPauseSound] = useSound(pauseSound);
	const [playHistoryChangeSound] = useSound(historyChangeSound);

	useEffect(()=>{
		if (game.revisingHistory && width === 0) {
			setWidth(1);
		} else if (!game.revisingHistory && width === 1) {
			setWidth(0);
		}

	},[game.revisingHistory])

  useEffect(() => {
    const timer = setInterval(() => {
      setShowHourGlass((c) => !c);
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <HistoryContainer className="row">
      <button
        type="button"
        onClick={() => {
					!game.mute && playPauseSound()
          setGame((currentGame) => {
            return {
              ...currentGame,
              revisingHistory: !currentGame.revisingHistory,
            };
          });
        }}
      >
        <img
          src={!game.revisingHistory ? pause : showHourGlass ? hourglass : play}
          alt={
            game.revisingHistory ? "resume game button" : "pause game button"
          }
        />
      </button>

      <ExpandingStepsContainer $width={width}>
        <button
          type="button"
          disabled={game.moveIndex === 0}
          onClick={() => {
						!game.mute && playHistoryChangeSound();
            setGame((currentGame) => {
              return {
                ...currentGame,
                moveIndex: game.moveIndex - 1,
                activePlayer: game.activePlayer === 1 ? 2 : 1,
              };
            });
          }}
        >
          <img src={stepBack} alt="Back a move" />
        </button>

        <button
          type="button"
          disabled={game.moveIndex >= game.moves.length}
          onClick={() => {
						!game.mute && playHistoryChangeSound();
            setGame((currentGame) => {
              return {
                ...currentGame,
                moveIndex: game.moveIndex + 1,
                activePlayer: game.activePlayer === 1 ? 2 : 1,
              };
            });
          }}
        >
          <img src={stepForward} alt="Forward a move" />
        </button>
      </ExpandingStepsContainer>
    </HistoryContainer>
  );
};

export default History;

const HistoryContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  & button {
    margin: var(--border-size);
  }
`;

const ExpandingStepsContainer = styled.div`
  transform-origin: left center;
  transform: scaleX(${({ $width }) => $width});
  transition: transform 0.5s ease-in-out;
  /* display: ${({ $width }) => ($width ? "block" : "none")}; */
  visibility: ${({ $width }) => ($width ? "visible" : "hidden")};
`;
