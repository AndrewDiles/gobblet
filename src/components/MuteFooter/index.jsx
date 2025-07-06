import useSound from "use-sound";
import styled from "styled-components";
import speakers from "../../assets/speakers.svg";
import mute from "../../assets/mute.svg";
import gameOverSound from "../../assets/sounds/gameOver.mp3";
import backSound from "../../assets/sounds/back.mp3";

const MuteFooter = ({ game, setGame }) => {
  const [playSoundOn] = useSound(gameOverSound);
  const [playSoundOff] = useSound(backSound);
  return (
    <PositionedFooter>
      <button
        type="button"
        onClick={() => {
          game.mute ? playSoundOn() : playSoundOff();
          setGame({ ...game, mute: !game.mute });
        }}
      >
        <img
          src={game.mute ? mute : speakers}
          alt={`${mute ? "enable" : "disable"} sound button`}
        />
      </button>
    </PositionedFooter>
  );
};

export default MuteFooter;

const PositionedFooter = styled.footer`
  position: fixed;
  display: flex;
  bottom: 0;
  right: var(--border-size);
  bottom: var(--border-size);
`;