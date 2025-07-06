import useSound from "use-sound";
import styled from "styled-components";
import startGame from "../../helpers/startGame";
import forward from "../../assets/sounds/forward.mp3";

const BeginGameButton = ({ game, setGame }) => {
  const [playStartSound] = useSound(forward);

  return (
    <StartButton
      className="menu-button"
      disabled={!game.player1 || !game.player2}
      onClick={() => {
        !game.mute && playStartSound();
        startGame(setGame, {
          status: "select-mode",
        });
      }}
    >
      START
    </StartButton>
  );
};

export default BeginGameButton;

const StartButton = styled.button`
  min-width: 3em;
  display: block;
  margin: 1em auto;
`;
