import ChipSlot from "../../shared/ChipSlot";
import styled from "styled-components";

const PlayerIndicator = ({ result, game }) => {
  const { activePlayer, revisingHistory: paused } = game;
  // const activePlayerIsABot =
  //   game.activePlayer === 1 ? game.player1IsBot : game.player2IsBot;
  const activePlayerName = game[activePlayer === 1 ? "player1" : "player2"];
  const finalLetterOfActiveName = activePlayerName[activePlayerName.length - 1];
  let possessiveSuffix = "";
  if (finalLetterOfActiveName.toLowerCase() === "s") {
    possessiveSuffix += "'";
  } else if (
    finalLetterOfActiveName.toUpperCase() === finalLetterOfActiveName
  ) {
    possessiveSuffix += "'S";
  } else {
    possessiveSuffix += "'s";
  }

	let additionalClass = "";

	if (result === 1 || result === 2) {
		additionalClass = `p${result}`
	} else if (result === 0) {
		additionalClass = `p${activePlayer}`
	}

  return (
    <StatusMessage id="indicator" className={`row text ${additionalClass}`}>
      {paused ? (
        "CHECKING HISTORY"
      ) : result === 3 ? (
        "DRAW"
      ) : result > 0 ? (
        <>
          {" "}
          <ChipSlot player={result} />
          {game[result === 1 ? "player1" : "player2"]} WINS!
        </>
      ) : (
        <>
          {" "}
          <ChipSlot player={activePlayer} />
          {activePlayerName}
          {possessiveSuffix} TURN
        </>
      )}
    </StatusMessage>
  );
};

export default PlayerIndicator;

const StatusMessage = styled.div`
  margin: 0.5em;
  & div {
    margin-right: 10px;
  }
  @media only screen and (orientation: landscape) and (max-height: 500px) {
    & {
      margin-top: 0;
    }
  }
	@media only screen and (max-width: 500px) {
    & {
      font-size: 1.2rem;
    }
  }
`;
