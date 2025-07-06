import styled from "styled-components";
import { DndContext } from "@dnd-kit/core";
import useSound from "use-sound";
import DroppableCell from "./DroppableCell";
import Stock from "./Stock";
import PlayedPiece from "./PlayedPiece";
import calcPiecesAvailable from "../../helpers/calcPiecesAvailable";
import chipSound from "../../assets/sounds/chip.mp3";

const CELL_STYLES = {
  "cell-0": { borderLeft: "none", borderTop: "none" },
  "cell-1": { borderTop: "none" },
  "cell-2": { borderTop: "none", borderRight: "none" },
  "cell-3": { borderLeft: "none" },
  "cell-4": {},
  "cell-5": { borderRight: "none" },
  "cell-6": { borderLeft: "none", borderBottom: "none" },
  "cell-7": { borderBottom: "none" },
  "cell-8": { borderRight: "none", borderBottom: "none" },
};
const CELL_IDS = Object.keys(CELL_STYLES);

const PlayableArea = ({
  scale,
  flexDirection,
  board,
  result,
  isBotTurn,
  game,
  setGame,
}) => {
  const { activePlayer, revisingHistory, moves, moveIndex } = game;
  const [playChipSound] = useSound(chipSound);

  const allDisabled = revisingHistory || isBotTurn || result > 0;

  const movesMade = moves.filter((m, index) => index < moveIndex);
	
  const sizes = calcPiecesAvailable({
    movesMade,
    activePlayer,
  });

	const opponentSizes = calcPiecesAvailable({
    movesMade,
    activePlayer : activePlayer === 1 ? 2 : 1,
  });

  const handleDragEnd = ({ over, active }) => {
    if (allDisabled || !over) return;
		const cell = Number(over.id[5]);
		const size = Number(active.id[4])
		const currentCellContents = board[cell];
		const validMove = currentCellContents === 0 || (((currentCellContents*10)%10) < size);
		if (!validMove) {
			return console.log("invalid move");
		}
    !game.mute && playChipSound();
    movesMade.push({
      player: activePlayer,
      size,
      cell,
      number: Number(active.id[7]),
    });
    setGame({
      ...game,
      moves: movesMade,
      activePlayer: activePlayer === 1 ? 2 : 1,
      moveIndex: movesMade.length,
    });
  };

  return (
    <Container id="playable-area" $scale={scale} $flexDirection={flexDirection} $result={result}>
      <DndContext onDragEnd={handleDragEnd}>
        <section id="board">
          {CELL_IDS.map((cellId, index) => (
            <DroppableCell
              cellId={cellId}
              key={cellId}
              style={CELL_STYLES[cellId]}
							board={board}
							allDisabled={allDisabled}
            >
              {board && board[index] > 0 && (
                <PlayedPiece codeNumber={board[index]} />
              )}
            </DroppableCell>
          ))}
        </section>

        <Stock
          sizes={Object.values(sizes)}
					opponentSizes={Object.values(opponentSizes)}
          flexDirection={flexDirection}
          scale={scale}
          activePlayer={activePlayer}
          allDisabled={allDisabled}
        />
      </DndContext>
    </Container>
  );
};

export default PlayableArea;

const Container = styled.main`
  transform-origin: top;
  transform: scale(${({ $scale }) => $scale || 1});
  position: relative;
  padding: 0;
  margin: auto;
	margin-top: ${({$result}) => $result > 0 && "20px"};
  flex-wrap: nowrap;
  width: fit-content;
  display: flex;
  grid-gap: 10px;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  & #stock button {
    border-color: transparent;
  }
  & #stock button:hover {
    box-shadow: none;
    outline: none;
  }
  & #stock button:focus {
    outline: none;
  }
`;

const Board = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
