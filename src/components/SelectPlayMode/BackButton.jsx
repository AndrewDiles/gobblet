import useSound from "use-sound";
import startGame from "../../helpers/startGame";
import back from "../../assets/back.svg";
import backSound from "../../assets/sounds/back.mp3";

const styles = {
  position: "absolute",
  right: "var(--border-size)",
  top: "var(--border-size)",
};

const BackButton = ({ game, setGame }) => {
  const [playBackSound] = useSound(backSound);
  return (
    <button
      type="button"
      style={styles}
      onClick={() => {
        !game.mute && playBackSound();
        startGame(setGame, { status: "off" });
      }}
    >
      <img style={{ scale: 1 }} src={back} alt="back button" />
    </button>
  );
};

export default BackButton;