import useSound from "use-sound";
import styled from "styled-components";
import human from "../../assets/human.svg";
import bot0 from "../../assets/bot_0.svg";
// import bot1 from "../../assets/bot_1.svg";
// import bot2 from "../../assets/bot_2.svg";
// import bot3 from "../../assets/bot_3.svg";
import BackButton from "./BackButton";
import startGame from "../../helpers/startGame";
import forwardSound from "../../assets/sounds/forward.mp3";

const SelectPlayMode = ({ game, setGame }) => {
  const [playStartSound] = useSound(forwardSound);

  const sharedNewGame = {
    status: "on",
    player1IsBot: false,
    player2IsBot: false,
    ai_level: 0,
  };
  return (
    <Container>
      <BackButton game={game} setGame={setGame} />

      <ModeSelectionButton
        className="plastic-background"
        type="button"
        onClick={() => {
          !game.mute && playStartSound();
          startGame(setGame, {
            ...sharedNewGame,
          });
        }}
      >
        <img src={human} alt="human player" />
        <img src={human} alt="human player" />
        <DiagonalVersus />
      </ModeSelectionButton>

      <ModeSelectionButton
        className="plastic-background"
        type="button"
        onClick={() => {
          !game.mute && playStartSound();
          startGame(setGame, {
            ...sharedNewGame,
            player2IsBot: true,
          });
        }}
      >
        <img src={human} alt="human player" />{" "}
        <img src={bot0} alt="computer player" />
        <DiagonalVersus />
      </ModeSelectionButton>

      {/* <ModeSelectionButton
        className="bamboo-background"
        type="button"
        onClick={() => {
          !game.mute && playStartSound();
          startGame(setGame, {
            ...sharedNewGame,
            player2IsBot: true,
            ai_level: 1,
          });
        }}
      >
        <img src={human} alt="human player" />{" "}
        <img src={bot1} alt="computer player" />
        <DiagonalVersus />
      </ModeSelectionButton>

      <ModeSelectionButton
        className="bamboo-background"
        type="button"
        onClick={() => {
          !game.mute && playStartSound();
          startGame(setGame, {
            ...sharedNewGame,
            player2IsBot: true,
            ai_level: 2,
          });
        }}
      >
        <img src={human} alt="human player" />{" "}
        <img src={bot2} alt="computer player" />
        <DiagonalVersus />
      </ModeSelectionButton>

      <ModeSelectionButton
        className="circuit-board-background"
        type="button"
        onClick={() => {
          !game.mute && playStartSound();
          startGame(setGame, {
            ...sharedNewGame,
            player2IsBot: true,
            ai_level: 3,
          });
        }}
      >
        <img src={human} alt="human player" />{" "}
        <img src={bot3} alt="computer player" />
        <DiagonalVersus />
      </ModeSelectionButton>

      <ModeSelectionButton
        className="circuit-board-background"
        type="button"
        onClick={() => {
          !game.mute && playStartSound();
          startGame(setGame, {
            ...sharedNewGame,
            player1IsBot: true,
            player2IsBot: true,
            ai_level: 3,
          });
        }}
      >
        <img src={bot3} alt="computer player" />{" "}
        <img src={bot3} alt="computer player" /> <DiagonalVersus />
      </ModeSelectionButton> */}
    </Container>
  );
};

export default SelectPlayMode;

const Container = styled.section`
  grid-gap: 1rem;
  display: grid;
  margin: 0 auto 1em;
  /* grid-template-columns: repeat(3, 1fr); */
	grid-template-columns: 1fr 1fr;
  max-width: 1100px;
  padding: 3rem 0;
  justify-items: center;

  @media only screen and (max-width: 700px) {
    & {
      grid-template-columns: 1fr 1fr;
      max-width: 600px;
    }
  }
  @media only screen and (max-width: 450px) {
    & {
      grid-template-columns: 1fr;
    }
    & img {
      scale: 1.3;
    }
  }
`;

const ModeSelectionButton = styled.button`
  position: relative;
  width: 80%;
  justify-self: center;
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--semi-transparent-bg);
  padding: 0;
  padding-top: calc(80% - calc(var(--border-size) * 2));
  scale: 1;
  & img:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top left;
  }
  & img:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 0;
    transform-origin: bottom right;
  }
  &:active span::after {
    -webkit-text-stroke: var(--border-size) var(--active-color);
  }
`;

const DiagonalVersus = styled.span`
  position: absolute;
  top: -55%;
  left: 50%;
  transform: rotate(45deg);
  width: 0.6em;
  background-color: yellow;
  border: 0.2em solid red;
  height: 200%;
  &::after {
    z-index: 5;
    content: "VS";
    position: absolute;
    font-size: 1.5em;
    top: 53%;
    left: 52%;
    transform: translate(-50%, -50%) rotate(-45deg);
    color: white;
    font-weight: bold;
    letter-spacing: calc(var(--border-size) * 0.5);
    -webkit-text-stroke: var(--border-size) black; /* width and color */
    paint-order: stroke fill;
  }
`;
