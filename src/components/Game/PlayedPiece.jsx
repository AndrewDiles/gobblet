import PIECE_SIZE_CHART from "../../constants/piece_size_chart";

const PlayedPiece = ({ codeNumber }) => {
	const playerNumber = Math.floor(codeNumber);
	const dimension = PIECE_SIZE_CHART[(codeNumber*10)%10]
	
  return (
    <div
      style={{
        height: dimension,
        width: dimension,
        backgroundColor:
          `var(--p${playerNumber}-color)`
      }}
    ></div>
  );
};

export default PlayedPiece